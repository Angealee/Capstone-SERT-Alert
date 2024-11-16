import React, { useState, useEffect, useContext, createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

const AuthContext = createContext();  // Creating a context for authentication

export const AuthProvider = ({ children }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);  // Shows loading spinner during login
  const [isAuthenticated, setIsAuthenticated] = useState(false);  // Tracks if the user is logged in
  const router = useRouter();

  // Fetch login status from storage on app load
  useEffect(() => {
    const loadAuthState = async () => {
      const storedStatus = await AsyncStorage.getItem('isAuthenticated');
      if (storedStatus) {
        setIsAuthenticated(JSON.parse(storedStatus));
      }
    };
    loadAuthState();
  }, []);

  // Login function that communicates with the backend to verify credentials
  const login = async (username, password) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('http://192.168.1.14:5117/api/Login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
  
      const success = await response.json();
  
      if (success) {
        setIsAuthenticated(true);
  
        // Check the "remember me" setting before storing login status
        const rememberMe = JSON.parse(await AsyncStorage.getItem('rememberMe'));
        if (rememberMe) {
          await AsyncStorage.setItem('isAuthenticated', JSON.stringify(true));
        }
  
        return { success: true };
      } else {
        return { success: false, message: 'Invalid credentials' };
      }
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, message: 'Something went wrong. Please try again later.' };
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const logout = async () => {
    setIsAuthenticated(false);
    await AsyncStorage.removeItem('isAuthenticated');
    await AsyncStorage.removeItem('rememberMe'); // Clear the remember me preference
  };
  // useEffect(() => {
  //   checkAuth();
  // }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, isSubmitting, login }}>
      {children} 
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);  // Custom hook to access auth state and functions
