import { useState } from 'react';

export function LoginView({ error, loading, onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function submit(event) {
    event.preventDefault();
    onLogin(email, password);
  }

  return <main><section className="card"><span className="eyebrow">REEMBOLSOS</span><h1>Consulta de folios</h1><p>Ingresa con tus credenciales para continuar.</p>
    <form onSubmit={submit}><label>Correo electrónico<input type="email" value={email} onChange={e => setEmail(e.target.value)} autoComplete="email" required /></label>
    <label>Contraseña<input type="password" value={password} onChange={e => setPassword(e.target.value)} autoComplete="current-password" required /></label>
    {error && <div role="alert">{error}</div>}<button disabled={loading}>{loading ? 'Validando…' : 'Iniciar sesión'}</button></form>
  </section></main>;
}
