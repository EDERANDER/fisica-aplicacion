import React from 'react';

const FinalReport = () => {
  return (
    <div className="final-report-page">
      <div className="report-description">
        <h2>Informe Final del Proyecto de Física</h2>
        <p>Este documento presenta el informe final de nuestro proyecto de física, detallando los objetivos, la metodología, los resultados obtenidos y las conclusiones sobre los sistemas de riego.</p>
      </div>
      <div className="report-viewer-container">
        <iframe 
          src="/doc.pdf" 
          title="Informe Final"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
        ></iframe>
      </div>
    </div>
  );
}

export default FinalReport;