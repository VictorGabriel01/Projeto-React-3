import './App.css';
import React from 'react';
import RoutesApp from "../src/routes/index";
import { AuthProvider } from "../src/contexts/useAuth";

function App() {
  return (
    <>
     <AuthProvider>
    <RoutesApp />
    </AuthProvider>
    </>
  );
};

export default App;
