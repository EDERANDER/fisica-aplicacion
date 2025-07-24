import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaInfoCircle, FaUsers } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-page py-5">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col md={10} lg={8}>
            <Card className="shadow-lg border-0 rounded-3">
              <Card.Body className="p-5 text-center">
                <FaInfoCircle size={60} className="text-primary mb-4" />
                <h2 className="card-title fw-bold mb-4 display-5">Acerca de Nuestro Proyecto</h2>
                <p className="lead text-muted mb-4">
                  Este proyecto fue desarrollado como parte del curso de Física Aplicada, con el objetivo de explorar y optimizar los sistemas de riego a través de principios físicos y tecnológicos avanzados.
                  Nuestra misión es proporcionar herramientas y conocimientos que contribuyan a una agricultura más eficiente y sostenible.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <Card className="shadow-lg border-0 rounded-3">
              <Card.Body className="p-5">
                <div className="text-center mb-4">
                  <FaUsers size={50} className="text-primary mb-3" />
                  <h3 className="fw-bold mb-3">Nuestro Equipo</h3>
                </div>
                <ul className="list-group list-group-flush text-center">
                  <li className="list-group-item border-0 py-2">Anco Coaquira Jorge Luis</li>
                  <li className="list-group-item border-0 py-2">Delgado Jimenez Mario Saul</li>
                  <li className="list-group-item border-0 py-2">Quispe Bravo Eder Ander</li>
                  <li className="list-group-item border-0 py-2">Ramos Vilca Francy Jimena</li>
                  <li className="list-group-item border-0 py-2">Torocahua Paxi Romel Pablo</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
