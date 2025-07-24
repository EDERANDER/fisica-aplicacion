import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const FinalReport = () => {
  return (
    <div className="final-report-page py-5">
      <Container>
        <Row className="justify-content-center mb-4">
          <Col md={10}>
            <Card className="shadow-sm border-0">
              <Card.Body className="p-4">
                <h2 className="text-center mb-3 display-5 fw-bold text-primary">Informe Final del Proyecto de Física</h2>
                <p className="lead text-center text-muted">
                  Este documento presenta el informe final de nuestro proyecto de física, detallando los objetivos, la metodología, los resultados obtenidos y las conclusiones sobre los sistemas de riego.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={10}>
            <div className="report-viewer-container shadow-lg rounded-3">
              <iframe 
                src={process.env.PUBLIC_URL + "/INFORME FINAL BORRADOR.pdf"} 
                title="Informe Final"
                width="100%"
                height="100%"
                style={{ border: 'none' }}
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FinalReport;
