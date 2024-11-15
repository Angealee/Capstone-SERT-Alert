import React, { useState, useEffect, useContext, createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

const AuthContext = createContext();  // Creating a context for authentication

export const AuthProvider = ({ children }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);  // Shows loading spinner during login
  const [isAuthenticated, setIsAuthenticated] = useState(false);  // Tracks if the user is logged in
  const router = useRouter();

  // Mock function to simulate API response
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
      const response = await fetch('http://192.168.0.15:5117/api/Login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
  
      // Since the API returns a boolean as a JSON string, parse it directly.
      const success = await response.json();
  
      if (success) { // If the login is successful
        setIsAuthenticated(true); // Update the state to logged-in
        return { success: true };
      } else {
        return { success: false, message: 'Invalid credentials' };
      }
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, message: 'Something went wrong. Please try again later.' };
    } finally {
      setIsSubmitting(false); // Hide the loading spinner
    }
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
