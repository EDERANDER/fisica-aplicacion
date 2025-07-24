import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link
import { FaChartLine, FaRobot, FaFileAlt } from 'react-icons/fa'; // Import icons

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section text-white text-center d-flex align-items-center justify-content-center">
        <Container>
          <Row>
            <Col>
              <h1 className="display-3 fw-bold mb-3">Física Aplicada al Riego</h1>
              <p className="lead mb-4">
                Optimiza tus sistemas de riego con análisis avanzados y asistencia inteligente.
              </p>
              <Button as={Link} to="/report" variant="primary" size="lg" className="me-2">Ver Informe Final</Button>
              <Button as={Link} to="/assistant" variant="outline-light" size="lg">Asistente IA</Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="features-section py-5">
        <Container>
          <h2 className="text-center mb-5 display-5 fw-bold">Nuestras Soluciones</h2>
          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 shadow-sm border-0 text-center">
                <Card.Body className="p-4">
                  <FaChartLine size={50} className="text-primary mb-3" />
                  <Card.Title className="h4 mb-3">Análisis Detallado</Card.Title>
                  <Card.Text className="text-muted">
                    Accede a informes completos y análisis profundos sobre la eficiencia de tus sistemas de riego.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 shadow-sm border-0 text-center">
                <Card.Body className="p-4">
                  <FaRobot size={50} className="text-primary mb-3" />
                  <Card.Title className="h4 mb-3">Asistencia Inteligente</Card.Title>
                  <Card.Text className="text-muted">
                    Obtén recomendaciones personalizadas y soluciones a tus problemas de riego con nuestra IA.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 shadow-sm border-0 text-center">
                <Card.Body className="p-4">
                  <FaFileAlt size={50} className="text-primary mb-3" />
                  <Card.Title className="h4 mb-3">Documentación Completa</Card.Title>
                  <Card.Text className="text-muted">
                    Explora nuestra base de conocimientos con guías, artículos y estudios de caso.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Home;