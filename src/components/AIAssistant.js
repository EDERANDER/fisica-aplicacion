import React, { useState, useEffect, useRef } from 'react';
import './AIAssistant.css';

const AIAssistant = () => {
  const [mensajes, setMensajes] = useState([]);
  const [mensaje, setMensaje] = useState("");
  const [cargandoRespuesta, setCargandoRespuesta] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    scrollToBottom();
  }, [mensajes, cargandoRespuesta]);

  const enviarMensaje = async (e) => {
    e.preventDefault();
    if (!mensaje.trim()) return;

    const nuevoMensaje = {
      id: Date.now(),
      texto: mensaje,
      usuario: true
    };

    setMensajes([...mensajes, nuevoMensaje]);
    const currentMessage = mensaje;
    setMensaje("");
    setCargandoRespuesta(true);

    try {
      const apiKeyRes = await fetch("https://backend-facturador.rj.r.appspot.com/facturador/apikey");
      const apiKeyData = await apiKeyRes.json();
      const apiKey = apiKeyData.apikey;

      const assistantId = "asst_lJIL9qCSsoZVXnFViAHX4Hzn";

      const headers = {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "OpenAI-Beta": "assistants=v2"
      };

      const threadRes = await fetch("https://api.openai.com/v1/threads", {
        method: "POST",
        headers
      });

      const thread = await threadRes.json();

      await fetch(`https://api.openai.com/v1/threads/${thread.id}/messages`, {
        method: "POST",
        headers,
        body: JSON.stringify({
          role: "user",
          content: currentMessage
        })
      });

      const runRes = await fetch(`https://api.openai.com/v1/threads/${thread.id}/runs`, {
        method: "POST",
        headers,
        body: JSON.stringify({
          assistant_id: assistantId
        })
      });

      const run = await runRes.json();

      let completed = false;
      let runStatus;

      while (!completed) {
        const statusRes = await fetch(`https://api.openai.com/v1/threads/${thread.id}/runs/${run.id}`, {
          method: "GET",
          headers
        });

        runStatus = await statusRes.json();
        if (runStatus.status === "completed") {
          completed = true;
        } else {
          await new Promise(res => setTimeout(res, 1000));
        }
      }

      const messagesRes = await fetch(`https://api.openai.com/v1/threads/${thread.id}/messages`, {
        method: "GET",
        headers
      });

      const messagesData = await messagesRes.json();
      const respuestaIA = messagesData.data.find(msg => msg.role === "assistant");

      const assistantMessageId = Date.now() + 1;
      setMensajes(prev => [
        ...prev,
        {
          id: assistantMessageId,
          texto: "", // Start with an empty text for typing effect
          usuario: false
        }
      ]);

      const fullText = respuestaIA?.content?.[0]?.text?.value || "⚠️ No se recibió respuesta del assistant.";
      let i = 0;
      const typingInterval = setInterval(() => {
        setMensajes(prev => prev.map(msg =>
          msg.id === assistantMessageId
            ? { ...msg, texto: fullText.substring(0, i) }
            : msg
        ));
        i++;
        if (i > fullText.length) {
          clearInterval(typingInterval);
        }
      }, 20); // Adjust typing speed here (milliseconds per character)

    } catch (error) {
      console.error("Error al conectar con el assistant de OpenAI:", error);
      setMensajes(prev => [
        ...prev,
        {
          id: Date.now() + 1,
          texto: "❌ Ocurrió un error al obtener respuesta del asistente.",
          usuario: false
        }
      ]);
    } finally {
      setCargandoRespuesta(false);
    }
  };

  return (
    <div className="ai-assistant-page">
      <div className="ai-name-display">
        <h1>HydroBot AI</h1>
      </div>
      <div className="chat-container">
        <div className="chat-messages">
          {mensajes.map(msg => (
            <div key={msg.id} className={`message ${msg.usuario ? 'usuario' : 'assistant'}`}>
              {msg.texto}
            </div>
          ))}
          {cargandoRespuesta && (
              <div className="message assistant loading">
                  <span></span><span></span><span></span>
              </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <form className="chat-form" onSubmit={enviarMensaje}>
          <input
            type="text"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            placeholder="Escribe tu mensaje..."
            disabled={cargandoRespuesta}
          />
          <button type="submit" disabled={cargandoRespuesta || !mensaje.trim()}>
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default AIAssistant;