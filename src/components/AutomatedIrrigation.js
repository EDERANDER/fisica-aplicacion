import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaRobot, FaWater, FaLeaf, FaChartLine, FaCloud, FaLightbulb } from 'react-icons/fa';

const AutomatedIrrigation = () => {
  return (
    <div className="automated-irrigation-page py-5">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col md={10} lg={8}>
            <h1 className="text-center fw-bold display-4 mb-4 text-primary">Riego Automatizado</h1>
            <p className="lead text-center text-muted mb-5">
              El riego automatizado es una solución moderna y eficiente para optimizar el uso del agua y mejorar la productividad agrícola. Descubre cómo la tecnología puede transformar tu sistema de riego.
            </p>
          </Col>
        </Row>

        <Row className="g-4 mb-5">
          <Col md={6} lg={4}>
            <Card className="h-100 shadow-sm border-0 text-center feature-card">
              <Card.Body className="p-4">
                <FaWater size={50} className="text-success mb-3" />
                <Card.Title className="h5 fw-bold">Eficiencia Hídrica</Card.Title>
                <Card.Text className="text-muted">
                  Minimiza el desperdicio de agua aplicando la cantidad justa en el momento preciso.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4}>
            <Card className="h-100 shadow-sm border-0 text-center feature-card">
              <Card.Body className="p-4">
                <FaLeaf size={50} className="text-success mb-3" />
                <Card.Title className="h5 fw-bold">Mejora de Cultivos</Card.Title>
                <Card.Text className="text-muted">
                  Promueve un crecimiento saludable y uniforme de las plantas, aumentando la calidad y el rendimiento.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4}>
            <Card className="h-100 shadow-sm border-0 text-center feature-card">
              <Card.Body className="p-4">
                <FaRobot size={50} className="text-success mb-3" />
                <Card.Title className="h5 fw-bold">Automatización Total</Card.Title>
                <Card.Text className="text-muted">
                  Controla tu sistema de riego desde cualquier lugar, ahorrando tiempo y esfuerzo.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-center mb-5">
          <Col md={10} lg={8}>
            <h2 className="text-center fw-bold display-5 mb-4">Componentes Clave</h2>
          </Col>
        </Row>

        <Row className="g-4 mb-5">
          <Col md={6}>
            <Card className="h-100 shadow-sm border-0 component-card">
              <Card.Body className="p-4 d-flex align-items-start">
                <FaCloud size={40} className="text-info me-3 flex-shrink-0" />
                <div>
                  <Card.Title className="h5 fw-bold">Sensores y Monitoreo</Card.Title>
                  <Card.Text className="text-muted">
                    Recopilan datos en tiempo real sobre la humedad del suelo, clima y necesidades de las plantas.
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="h-100 shadow-sm border-0 component-card">
              <Card.Body className="p-4 d-flex align-items-start">
                <FaLightbulb size={40} className="text-info me-3 flex-shrink-0" />
                <div>
                  <Card.Title className="h5 fw-bold">Controladores Inteligentes</Card.Title>
                  <Card.Text className="text-muted">
                    Procesan la información de los sensores y activan el riego de forma autónoma.
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="h-100 shadow-sm border-0 component-card">
              <Card.Body className="p-4 d-flex align-items-start">
                <FaWater size={40} className="text-info me-3 flex-shrink-0" />
                <div>
                  <Card.Title className="h5 fw-bold">Sistemas de Emisión</Card.Title>
                  <Card.Text className="text-muted">
                    Incluyen goteo, microaspersión o aspersión, entregando el agua directamente a los cultivos.
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="h-100 shadow-sm border-0 component-card">
              <Card.Body className="p-4 d-flex align-items-start">
                <FaChartLine size={40} className="text-info me-3 flex-shrink-0" />
                <div>
                  <Card.Title className="h5 fw-bold">Software de Gestión</Card.Title>
                  <Card.Text className="text-muted">
                    Permite monitorear, programar y ajustar el riego desde una interfaz intuitiva.
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <h2 className="text-center fw-bold display-5 mb-4">Tipos Comunes</h2>
          </Col>
        </Row>

        <Row className="g-4">
          <Col md={6}>
            <Card className="h-100 shadow-sm border-0 type-card">
              <Card.Body className="p-4">
                <Card.Title className="h5 fw-bold text-center mb-3">Riego por Goteo Automatizado</Card.Title>
                <Card.Text className="text-muted">
                  Ideal para cultivos en hileras, entrega agua directamente a la zona radicular, minimizando la evaporación y el escurrimiento.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="h-100 shadow-sm border-0 type-card">
              <Card.Body className="p-4">
                <Card.Title className="h5 fw-bold text-center mb-3">Riego por Aspersión Automatizado</Card.Title>
                <Card.Text className="text-muted">
                  Adecuado para grandes extensiones, simula la lluvia y puede ser controlado por sensores y programadores.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AutomatedIrrigation;
