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
    
      const data = await response.json();

      // const data = await mockLogin(username, password);

      if (data.success) {  // If the login is successful
        setIsAuthenticated(true);  // Update the state to show the user is logged in
        return { success: true };
      } else {
        return { success: false, message: data.message || 'Invalid credentials' };
      }
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, message: 'Something went wrong. Please try again later.' };
    } finally {
      setIsSubmitting(false);  // Hide the loading after the login attempt
    }
  };

  //Function to check if the user is currently authenticated based on session data
  const checkAuth = async () => {
    try {
      const response = await fetch('http://192.168.0.15:5117/api/CheckSession', {
        method: 'GET',
        credentials: 'include',//cookies to maintain session state
      });
      const data = await response.json();
      setIsAuthenticated(data.isAuthenticated);
    } catch (error) {
      console.error('Session check error:', error);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  // Logout function that clears the session
  const logout = async () => {
    await fetch('http://192.168.0.15:5117/api/Logout', {
      method: 'POST',
      credentials: 'include',
    });
    setIsAuthenticated(false);
    router.replace('/auth/sign-in');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isSubmitting, login, logout }}>
      {children} 
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);  // Custom hook to access auth state and functions
