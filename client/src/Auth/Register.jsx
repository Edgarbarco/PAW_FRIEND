import React, { useState } from "react";
import {
  Alert,
  Card,
  Form,
  Spin,
  Input,
  Typography,
  Button,
  Flex,
  message,
  Radio,
  Space,
} from "antd";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import useSignup from "../hooks/useSignup";

import "../App.css";

const Register = () => {
  const { loading, error, registerUser } = useSignup();
  const [form] = Form.useForm();
  const [selectedRole, setSelectedRole] = useState("user");
  const navigate = useNavigate();

  const handleRegister = async (values) => {
    try {
      // Agregar el rol seleccionado a los valores
      const formData = {
        ...values,
        role: selectedRole,
      };

      await registerUser(formData);
      message.success("Usuario registrado exitosamente");
      form.resetFields();
      setSelectedRole("user");
      // La redirección al dashboard es automática gracias al contexto de autenticación en App.jsx
    } catch (err) {
      // El error ya se maneja en useSignup y se muestra en el Alert
      console.error(err);
    }
  };

  return (
    <div className="auth-page" style={{ background: "linear-gradient(135deg, #36351b 5%, #222e19 100%)", minHeight: "100vh", paddingBottom: 40 }}>//nuevo ajuste de color
      <Navbar />
      <Card
        className="form-container"
        style={{ marginTop: 120, maxWidth: 950, 
          marginInline: "auto", 
          borderRadius: 10, 
          boxShadow: "0 10px 350px rgba(0,0,0,0.1)",
          overflow: "hidden",
          border: "none", minHeight: "100vh", background: "#163238" }}
      >
        <Flex gap="large" align="center">
          {/* Formulario */}
          <div style={{ flex: 1 }}>
            <Typography.Title level={3} strong className="title">
              Crear Cuenta
            </Typography.Title>
            <Typography.Text type="secondary" strong className="slogan">
              Registrar mi Veterinaria!
            </Typography.Text>

            <Form
              form={form}
              layout="vertical"
              onFinish={handleRegister}
              autoComplete="off"
            >
              <Form.Item
                label="Nombre Completo"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Por favor ingresa tu nombre completo",
                  },
                  {
                    min: 3,
                    message: "El nombre debe tener al menos 3 caracteres",
                  },
                ]}
              >
                <Input placeholder="Ingresa tu nombre completo" style={{ borderRadius: 8, height: 40 }} />
              </Form.Item>

              <Form.Item
                label="Correo Electrónico"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Por favor ingresa tu correo electronico",
                  },
                  {
                    type: "email",
                    message: "Por favor ingresa un correo válido",
                  },
                ]}
              >
                <Input
                  type="email"
                  placeholder="Ingresa tu correo electronico"
                />
              </Form.Item>

              <Form.Item
                label="Contraseña"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Por favor ingresa tu contraseña",
                  },
                  {
                    min: 6,
                    message: "La contraseña debe tener al menos 6 caracteres",
                  },
                ]}
              >
                <Input.Password placeholder="Ingresa tu contraseña" />
              </Form.Item>

              <Form.Item
                label="Confirmar Contraseña"
                name="confirmPassword"
                dependencies={["password"]}
                rules={[
                  {
                    required: true,
                    message: "Por favor confirma tu contraseña",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error("Las contraseñas no coinciden")
                      );
                    },
                  }),
                ]}
              >
                <Input.Password placeholder="Reingresa tu contraseña" />
              </Form.Item>

              {/* Selección de rol */}
              <Form.Item label="Selecciona tu rol" required>
                <Radio.Group
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  style={{ width: "100%" }}
                >
                  <Space direction="vertical" style={{ width: "100%" }}>
                    <Radio value="user" style={{ background: "#36565c", padding: "8px 12px", borderRadius: 8, width: "100%", border: "1px solid #36565c" }}>
                      <div>
                        <Typography.Text strong>Usuario</Typography.Text>
                        <Typography.Text
                          type="secondary"
                          style={{
                            display: "block",
                            marginLeft: 24,
                            fontSize: 12,
                          }}
                        >
                          Acceso básico al sistema de veterinaria
                        </Typography.Text>
                      </div>
                    </Radio>
                    <Radio value="admin" style={{ background: "#36565c", padding: "8px 12px", borderRadius: 8, width: "100%", border: "1px solid #36565c" }}>
                      <div>
                        <Typography.Text strong>Administrador</Typography.Text>
                        <Typography.Text
                          type="secondary"
                          style={{
                            display: "block",
                            marginLeft: 24,
                            fontSize: 12,
                          }}
                        >
                          Acceso completo y gestión del sistema
                        </Typography.Text>
                      </div>
                    </Radio>
                  </Space>
                </Radio.Group>
              </Form.Item>

              {error && (
                <Alert
                  description={error}
                  type="error"
                  showIcon
                  closable
                  className="alert"
                  style={{ marginBottom: 16 }}
                />
              )}

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  className="btn"
                  loading={loading}
                  disabled={loading}
                >
                  {loading ? "Registrando..." : "Crear cuenta"}
                </Button>
              </Form.Item>

              <Form.Item>
                <Link to="/login">
                  <Button size="large" className="btn">
                    Iniciar sesión
                  </Button>
                </Link>
              </Form.Item>
            </Form>
          </div>

          {/* Imagen */}
          <div style={{ flex: 1, }}>
            <img
              src="https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
              alt="Registro"
              className="form-img-vertical"
            />
          </div>
        </Flex>
      </Card>
    </div>
  );
};

export default Register;