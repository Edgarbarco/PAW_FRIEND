import React from "react";
import { Menu, Row, Col, Typography, Space } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  LoginOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import NotificationBell from "./NotificationBell";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const { isAuthenticated, userData, logout } = useAuth();

  const publicMenuItems = [
    {
      key: "home",
      icon: <HomeOutlined />,
      label: <Link to="/">Inicio</Link>,
    },
    {
      key: "login",
      icon: <LoginOutlined />,
      label: <Link to="/login">Iniciar Sesión</Link>,
    },
    {
      key: "register",
      icon: <UserAddOutlined />,
      label: <Link to="/register">Registrarse</Link>,
    },
  ];

  const authenticatedMenuItems = [
    {
      key: "dashboard",
      icon: <HomeOutlined />,
      label: <Link to="/dashboard">Dashboard</Link>,
    },
    {
      key: "appointments",
      label: <Link to="/appointments">Citas</Link>,
    },
    {
      key: "pets",
      label: <Link to="/pets">Mascotas</Link>,
    },
    {
      key: "inventory",
      label: <Link to="/inventory">Inventario</Link>,
    },
    {
      key: "history",
      label: <Link to="/history">Historial</Link>,
    },
    {
      key: "users",
      label: <Link to="/users">Usuarios</Link>,
    },
    ...(userData?.role === 'admin' ? [
      {
        key: "notifications",
        label: <Link to="/notifications">Notificaciones</Link>,
      },
      {
        key: "test",
        label: <Link to="/test">Test/Diagnóstico</Link>,
      }
    ] : []),
    {
      key: "logout",
      label: "Cerrar Sesión",
      onClick: logout,
    },
  ];

  const menuItems = isAuthenticated ? authenticatedMenuItems : publicMenuItems;

  return (
    <div
      style={{
        background: "linear-gradient(120deg, #1d2e17 50%, #292614 77%)",
        borderBottom: "1px solid #eee",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 100,
        padding: 0,
        width: "100%",
        boxShadow: "0 2px 8px #132c30",
      }}
    >
      <Row justify="space-between" align="middle" style={{ height: 64, padding: "0 32px" }}>
        <Col>
          <Space align="center">
            <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <img
                src="https://i.pinimg.com/736x/e9/8a/3d/e98a3d945cdaf4b4894289593ebe6668.jpg"
                alt="logo"
                style={{ width: 46, height: 46, mixBlendMode: 'multiply', }}
              />
              <Typography.Title level={3} style={{ margin: 0, color: "#58686b" }}>
                PawFriends
              </Typography.Title>
            </Link>
          </Space>
        </Col>
        <Col>
          <Space align="center">
            {isAuthenticated && <NotificationBell />}
            <Menu mode="horizontal" items={menuItems} selectable={false} 
            style={{
              background: 'transparent',    
              borderBottom: 'none',        
              color: '#fff',            
            }}
            className="custom-dark-menu" 
          />
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default Navbar;