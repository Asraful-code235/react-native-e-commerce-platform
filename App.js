import { AuthProvider } from './utils/AuthContext';
import React from 'react';
import AppScreen from './screens/AppScreen';

export default function App() {
  return (
    <AuthProvider>
      <AppScreen />
    </AuthProvider>
  );
}
