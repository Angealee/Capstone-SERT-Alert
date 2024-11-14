import React, { useState, useEffect, useContext, createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

const AuthContext = createContext();  // Creating a context for authentication

export const AuthProvider = ({ children }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);  // Shows loading spinner during login
  const [isAuthenticated, setIsAuthenticated] = useState(false);  // Tracks if the user is logged in
  const router = useRouter();

  // // Mock function to simulate API response
  // const mockLogin = async (username, password) => {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       if (username === 'testUser' && password === 'testPass') {
  //         resolve({ success: true, token: 'mockToken123' });
  //       } else {
  //         resolve({ success: false, message: 'Invalid credentials' });
  //       }
  //     }, 1000); // Simulate network delay
  //   });
  // };

  // Login function that communicates with the backend to verify credentials
  const login = async (username, password) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('http://192.168.1.14:5117/api/Login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
    
      const data = await response.json();

      // const response = await mockLogin(username, password);

      if (data.success) {  // If the login is successful
        setIsAuthenticated(true);  // Update the state to show the user is logged in
        await AsyncStorage.setItem('token', data.token);  // Store the token in AsyncStorage
        return { success: true };
      } else {
        return { success: false, message: data.message || 'Invalid credentials' };
      }
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, message: 'Something went wrong. Please try again later.' };
    } finally {
      setIsSubmitting(false);  // Hide the loading spinner after the login attempt
    }
  };

  // Logout function that clears the session by removing the token
  const logout = async () => {
    await AsyncStorage.removeItem('token');  // Clear the token from AsyncStorage
    setIsAuthenticated(false);  // Update the state to show the user is logged out
    router.replace('/auth/sign-in');
  };

  // Check if a token exists in AsyncStorage when the app initializes, to restore the session
  const checkAuth = async () => {
    const token = await AsyncStorage.getItem('token');  // Get the token from storage
    if (token) setIsAuthenticated(true);  // If a token exists, set the user as logged in
  };

  useEffect(() => {
    checkAuth();  // Run checkAuth when the app loads
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, isSubmitting, login, logout }}>
      {children} 
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);  // Custom hook to access auth state and functions
