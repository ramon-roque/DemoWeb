import { createRoot } from 'react-dom/client';
import { useState } from 'react';
import './styles.css';
import { useLoginController } from './controllers/loginController.js';
import { LoginView } from './views/LoginView.jsx';
import { ConsultaView } from './views/ConsultaView.jsx';

function App() {
  const { error, loading, iniciarSesion } = useLoginController();
  const [autenticado, setAutenticado] = useState(() => Boolean(sessionStorage.getItem('authToken')));

  async function manejarLogin(email, password) {
    if (await iniciarSesion(email, password)) setAutenticado(true);
  }

  return autenticado ? <ConsultaView /> : <LoginView error={error} loading={loading} onLogin={manejarLogin} />;
}
createRoot(document.getElementById('root')).render(<App />);
