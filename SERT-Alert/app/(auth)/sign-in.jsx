import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, ScrollView, Alert, ActivityIndicator, Modal, Switch, TouchableOpacity, BackHandler } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFocusEffect } from '@react-navigation/native';
import { router } from 'expo-router';
import { useAuth } from '../../hooks/useAuth';
import FormField from '../../components/FormField';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignIn = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [rememberMe, setRememberMe] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const { login, isSubmitting, isAuthenticated } = useAuth();

  useEffect(() => {
    const loadRememberedUser = async () => {
      const data = await AsyncStorage.getItem('rememberMe');
      if (data) {
        const { rememberMe, username } = JSON.parse(data);
        setRememberMe(rememberMe);
        if (rememberMe) {
          setForm((prev) => ({ ...prev, username }));
        }
      }
    };

    loadRememberedUser();
  }, []);

  useEffect(() => {
    if (isAuthenticated && !isRedirecting) {
      setIsRedirecting(true);
      router.replace('/SERTemergency');
    }
  }, [isAuthenticated, isRedirecting]);

  // Prevent back navigation after login
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (isAuthenticated) {
          return true; // Disable back button behavior
        }
        return false; // Allow default back button behavior
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [isAuthenticated])
  );

    const submit = async () => {
      if (!form.username || !form.password) {
        Alert.alert('Error', 'Please fill in all the fields!');
        return;
      }
  
      const result = await login(form.username, form.password);
        if (result.success) {
          if (rememberMe) {
            await AsyncStorage.setItem(
              'rememberMe',
              JSON.stringify({ rememberMe: true, username: form.username })
            );
          } else {
            await AsyncStorage.removeItem('rememberMe');
          }
          Alert.alert('Success', 'Login successful!');
        } else {
          Alert.alert('Login Failed', result.message);
        }
      };



  return (
    <LinearGradient
      colors={['#941C2F', '#03191E']}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <Modal transparent={true} animationType="fade" visible={isSubmitting}>
          <View style={styles.modalContainer}>
            <ActivityIndicator size="large" color="#ff6347" />
          </View>
        </Modal>

        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.formContainer}>
            <Text style={styles.title}>SERT Sign In!</Text>

            <FormField
              title="Username"
              value={form.username}
              handleChangeText={(e) => setForm({ ...form, username: e })}
              style={styles.input}
              otherStyles="mt-7"
            />
            <FormField
              title="Password"
              value={form.password}
              handleChangeText={(e) => setForm({ ...form, password: e })}
              secureTextEntry
              style={styles.input}
              otherStyles="mt-7"
            />

            <View style={styles.rememberMeContainer}>
              <Switch
                value={rememberMe}
                onValueChange={setRememberMe}
                thumbColor={rememberMe ? '#ff6347' : '#f4f3f4'}
                trackColor={{ false: '#d3d3d3', true: '#941C2F' }}
              />
              <Text style={styles.rememberMeText}>Remember Me</Text>
            </View>
            <View className="p-10"
                  style={{alignItems: 'center'}}
            >
              <TouchableOpacity
                style={{
                  width: '100%',
                  paddingVertical: 8,
                  backgroundColor:'#20A4F3',
                  borderRadius: 20,
                  alignItems: 'center',
                  marginTop: 1,              
                }}
                onPress={submit}
                textStyles={styles.buttonText}
              >
                <Text style={{ color: 'white', fontSize: 18 }}>Login</Text>
              </TouchableOpacity>
                  
              <TouchableOpacity
                style={{
                  width: '70%',
                  paddingVertical: 8,
                  backgroundColor:'#03191E',
                  borderRadius: 20,
                  alignItems: 'center',
                  marginTop: 10,              
                }}
                onPress={() => router.push('/menu')}
                textStyles={styles.buttonText}
              >
                <Text style={{ color: 'white', fontSize: 18 }}>Back</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView> 
    </LinearGradient>
  );
};

export default SignIn;

const styles = {
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  formContainer: {
    backgroundColor: '#C1CFDA',
    padding: 20,
    borderRadius: 15,
    width: '100%',
    maxWidth: 400,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 6,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#273E47',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    height: 48,
    fontSize: 16,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  rememberMeText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 5,
  },
  loginButton: {
    backgroundColor: '#ff6347',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  backButton: {
    backgroundColor: '#ddd',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
};
