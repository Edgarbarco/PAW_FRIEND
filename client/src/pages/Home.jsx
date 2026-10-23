import React, { useState } from "react";
import { Layout, Menu, Typography, Button, Row, Col, Card, Space, Input, message, Form } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  LoginOutlined,
  UserAddOutlined,
  InfoCircleOutlined,
  HeartOutlined,
  TeamOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer } = Layout;

const NAVBAR_HEIGHT = 64;

const menuItems = [
  {
    key: "home",
    icon: <HomeOutlined />,
    label: <Link to="/">Inicio</Link>,
  },
  {
    key: "features",
    icon: <AppstoreOutlined />,
    label: <a href="#features">Características</a>,
  },
  {
    key: "about",
    icon: <TeamOutlined />,
    label: <a href="#about">Sobre Nosotros</a>,
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

const Home = () => {
  const [form] = Form.useForm();
  const [loadingContacto, setLoadingContacto] = useState(false);
  return (
    <Layout style={{ minHeight: "100vh", background: "#f7f9fb" }}>
    {/* Navbar fija y full width */}
    <Header
      style={{
        background: "linear-gradient(120deg, #2e2c20 50%, #1f1709 77%)",
        borderBottom: "1px solid #eee",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 100,
        padding: 0,
        width: "100%",
        boxShadow: "0 2px 8px #2e2c20",
        height: NAVBAR_HEIGHT,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Row justify="space-between" align="middle" style={{ width: "100%", height: NAVBAR_HEIGHT, padding: "0 32px" }}>
        <Col>
          <Space align="center">
            <img
              src="https://i.pinimg.com/736x/e9/8a/3d/e98a3d945cdaf4b4894289593ebe6668.jpg"
              alt="logo"
              style={{ width: 56, height: 56, mixBlendMode: 'multiply', }}
            />
            <Typography.Title level={4} style={{ margin: 0, color: "#211f10", fontSize: 22, letterSpacing: 1 }}>
              PawFriends
            </Typography.Title>
          </Space>
        </Col>
        <Col>
          <Menu
            mode="horizontal"
            items={menuItems}
            selectable={false}
            style={{ border: "none", fontSize: 14, background: "transparent" }}
          />
        </Col>
      </Row>
    </Header>
    {/* Contenido principal mejorado */}
    <Content
      style={{
        minHeight: "80vh",
        padding: "0 0 48px 0",
        background: "linear-gradient(120deg, #1d2e17 50%, #292614 10%)",
        marginTop: NAVBAR_HEIGHT,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Hero Section */}
      <div
        style={{
          width: "100%",
          background: "linear-gradient(120deg, #1d2e17 50%, #292614 77%)",
          padding: "80px 0 40px 0",
          minHeight: 420,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Row
          justify="center"
          align="stretch"
          gutter={[0, 0]}
          style={{
            maxWidth: 1200,
            width: "100%",
            margin: "0 auto",
            background: "#3a5c2f",
            borderRadius: 28,
            boxShadow: "0 8px 32px #e6eaf1",
            overflow: "hidden",
          }}
        >
          <Col xs={24} md={12} style={{ padding: "56px 36px" }}>
            <Typography.Title style={{ color: "#292614", marginBottom: 18, fontSize: 32, fontWeight: 700 }}>
              Bienvenido a PawFriends
            </Typography.Title>
            <Typography.Paragraph style={{ fontSize: 18, color: "#fffffff", marginBottom: 32, lineHeight: 1.7 }}>
              Plataforma profesional para la gestión eficiente de tu veterinaria.<br />
              Controla inventario, historial de pacientes y usuarios, todo en un solo lugar con una interfaz moderna y segura.
            </Typography.Paragraph>
            <Space size="large">
              <Button type="primary" size="large">
                <Link to="/login">Iniciar Sesión</Link>
              </Button>
              <Button type="default" size="large">
                <Link to="/register">Registrarse</Link>
              </Button>
            </Space>
          </Col>
          <Col
            xs={24}
            md={12}
            style={{
              display: "flex",
              padding: 0,
              minHeight: 460,
              background: "linear-gradient(135deg, ##292614 0%, #0f210a 100%)",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                flex: 1,
                overflow: "hidden",
              }}
            >
              <img
                src="https://i.pinimg.com/736x/63/37/02/633702c7cc847064c2f6995f81a86d6b.jpg"
                alt="Veterinaria"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "brightness(0.95) saturate(1.05)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(135deg, rgba(24,144,255,0.1) 0%, rgba(0,0,0,0.2) 100%)",
                  pointerEvents: "none",
                }}
              />
              <HeartOutlined
                style={{
                  position: "absolute",
                  bottom: 1800,
                  right: 18,
                  fontSize: 28,
                  color: "#ff4d4f",
                  background: "#292614",
                  borderRadius: "100%",
                  padding: 10,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                }}
              />
            </div>
          </Col>
        </Row>
      </div>
      {/* Características */}
      <Row justify="center" style={{ marginTop: 90, width: "100%" }} id="features">
        <Col xs={24} md={18}>
          <Card
            title={
              <span style={{ fontSize: 20 }}>
                <InfoCircleOutlined /> ¿Por qué elegirnos?
              </span>
            }
            bordered={false}
            style={{
              background: "#203621",
              borderRadius: 22,
              boxShadow: "0 2px 12px #19381c",
              marginBottom: 72,
              padding: "36px 0",
            }}
            bodyStyle={{ padding: "36px 28px" }}
          >
            <Row gutter={[32, 32]}>
              <Col xs={24} md={12}>
                <ul style={{ fontSize: 17, color: "#ffffff", paddingLeft: 20, lineHeight: 2.2 }}>
                  <li>
                    <HeartOutlined style={{ color: "#fffffff" }} /> Gestión de inventario y pacientes fácil de usar.
                  </li>
                  <li>
                    <LoginOutlined style={{ color: "#fffffff" }} /> Acceso seguro para tu equipo.
                  </li>
                </ul>
              </Col>
              <Col xs={24} md={12}>
                <ul style={{ fontSize: 17, color: "#ffffff", paddingLeft: 20, lineHeight: 2.2 }}>
                  <li>
                    <AppstoreOutlined style={{ color: "#52c41a" }} /> Historial clínico digitalizado.
                  </li>
                  <li>
                    <TeamOutlined style={{ color: "#faad14" }} /> Soporte y actualizaciones constantes.
                  </li>
                </ul>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
        {/* Módulo de Contacto */}
        <Row justify="center" style={{ marginTop: 60, width: "100%" }}>
          <Col xs={24} md={16}>
            <Card
              bordered={false}
              style={{
                background: "#324033",
                borderRadius: 22,
                textAlign: "center",
                boxShadow: "0 2px 12px #ffe58f",
                padding: "36px 0",
                marginBottom: 40,
              }}
              bodyStyle={{ padding: "36px 28px" }}
            >
              <Typography.Title level={4} style={{ color: "ffff", marginBottom: 18, fontSize: 22 }}>
                Agenda tu cita o contáctanos
              </Typography.Title>
                <Form
                  form={form}
                  name="contacto-form"
                  layout="vertical"
                  style={{ maxWidth: 500, margin: "0 auto", textAlign: "left" }}
                  onFinish={async (values) => {
                    setLoadingContacto(true);
                    try {
                      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contacto`, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(values),
                      });
                      const data = await res.json();
                      if (data.success) {
                        form.resetFields();
                        message.success("¡Mensaje enviado correctamente!");
                      } else {
                        message.error("Error al enviar mensaje");
                      }
                    } catch (err) {
                      message.error("Error de conexión");
                      console.error("Error conexión contacto:", err);
                    } finally {
                      setLoadingContacto(false);
                    }
                  }}
                  autoComplete="off"
                >
                  <>
                    <Form.Item label="Nombre" name="nombre" rules={[{ required: true, message: "Por favor ingresa tu nombre" }]}
                      style={{ marginBottom: 16 }}>
                      <Input placeholder="Nombre" />
                    </Form.Item>
                    <Form.Item label="Apellido" name="apellido" rules={[{ required: true, message: "Por favor ingresa tu apellido" }]}
                      style={{ marginBottom: 16 }}>
                      <Input placeholder="Apellido" />
                    </Form.Item>
                    <Form.Item label="Correo" name="correo" rules={[{ required: true, type: "email", message: "Por favor ingresa un correo válido" }]}
                      style={{ marginBottom: 16 }}>
                      <Input type="email" placeholder="Correo electrónico" />
                    </Form.Item>
                    <Form.Item label="Número de teléfono" name="numero" rules={[{ required: true, message: "Por favor ingresa tu número" }]}
                      style={{ marginBottom: 16 }}>
                      <Input placeholder="Número de teléfono" />
                    </Form.Item>
                    <Form.Item label="Descripción / Motivo de la cita" name="descripcion" rules={[{ required: true, message: "Por favor describe el motivo" }]}
                      style={{ marginBottom: 16 }}>
                      <Input.TextArea rows={3} placeholder="Describe el motivo de la cita" />
                    </Form.Item>
                    <Form.Item style={{ marginBottom: 0 }}>
                      <Button type="primary" htmlType="submit" loading={loadingContacto} block style={{ background: "#faad14", border: "none", fontWeight: 600, fontSize: 16 }}>
                        Enviar contacto
                      </Button>
                    </Form.Item>
                  </>
                </Form>
            </Card>
          </Col>
        </Row>

        {/* Sobre Nosotros */}
        <Row justify="center" style={{ marginTop: 90, width: "100%" }} id="about">
          <Col xs={24} md={16}>
            <Card
              bordered={false}
              style={{
                background: "#324033",
                borderRadius: 22,
                textAlign: "center",
                boxShadow: "0 2px 12px #fffff",
                padding: "36px 0",
              }}
              bodyStyle={{ padding: "36px 28px" }}
            >
              <Typography.Title level={4} style={{ color: "#ffffff", marginBottom: 18, fontSize: 22 }}>
                Sobre Nosotros
              </Typography.Title>
              <Typography.Paragraph style={{ fontSize: 17, color: "#fffff", marginBottom: 0 }}>
                Somos un equipo apasionado por el bienestar animal y la tecnología.<br />
                Nuestra misión es facilitar la gestión veterinaria y mejorar la experiencia tanto para profesionales como para sus pacientes peludos.
              </Typography.Paragraph>
            </Card>
          </Col>
        </Row>
    </Content>
    <Footer style={{ textAlign: "center", background: "#fff", borderTop: "1px solid #eee", fontSize: 16, padding: "24px 0" }}>
      PawFriends ©{new Date().getFullYear()} &nbsp;|&nbsp; Hecho con <span style={{ color: "#ff7875" }}>❤️</span> para el bienestar animal
    </Footer>
    </Layout>
  );
};

export default Home;