import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import 'antd/dist/reset.css';
import { AuthProvider } from './contexts/AuthContext.js';
import { NotificationProvider } from './contexts/NotificationContext.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <NotificationProvider>
        <App />
      </NotificationProvider>
    </AuthProvider>
  </React.StrictMode>,
);