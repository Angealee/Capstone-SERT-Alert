import React, { useState, useEffect, useContext, createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  // Fetch login status from storage on app load
  useEffect(() => {
    const loadAuthState = async () => {
      try {
        const storedStatus = await AsyncStorage.getItem('isAuthenticated');
        if (storedStatus) {
          setIsAuthenticated(JSON.parse(storedStatus));
        }
      } catch (error) {
        console.error('Error loading auth state:', error);
      }
    };
    loadAuthState();
  }, []);

  // Login function
  const login = async (username, password) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('http://192.168.1.14:5117/api/Login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const errorMessage =
          response.status === 401
            ? 'Invalid username or password.'
            : 'Something went wrong. Please try again.';
        return { success: false, message: errorMessage };
      }

      const success = await response.json();
      if (success) {
        setIsAuthenticated(true);
        await AsyncStorage.setItem("username", username);
        await AsyncStorage.setItem('isAuthenticated', JSON.stringify(true));
        setUserStatus(true);
        return { success: true };
      } else {
        return { success: false, message: 'Invalid credentials' };
      }
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, message: 'Network error. Please try again later.' };
    } finally {
      setIsSubmitting(false);
    }
  };

  // Logout function
  const logout = async () => {
    try {
      setUserStatus(false);
      setIsAuthenticated(false);
      await AsyncStorage.removeItem('username');
      await AsyncStorage.removeItem('isAuthenticated');
      
      router.replace('/sign-in');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const setUserStatus = async (status) => {
    try {
      const currentUser = await AsyncStorage.getItem("username");
      console.log("Current user:", currentUser);
      console.log("Status to update:", status);
  
      if (!currentUser) {
        throw new Error("No username found in AsyncStorage.");
      }
  
      const response = await fetch('https://sertwebapp-c0hrepa2d9a7afem.southeastasia-01.azurewebsites.net/api/Login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: currentUser, status }),
      });
  
      console.log("API Response status:", response.status);
  
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Failed to update status. HTTP Status: ${response.status}, Message: ${errorText}`
        );
      }
  
      const success = await response.json();
      console.log("API Response JSON:", success);
  
      if (success) {
        return { success: true };
      } else {
        return { success: false, message: "Invalid response from server." };
      }
    } catch (error) {
      console.error("Network Error Stack Trace:", error);
      return { success: false, message: error.message || "Unknown error occurred." };
    }
  };
  

  return (
    <AuthContext.Provider value={{ isAuthenticated, isSubmitting, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
