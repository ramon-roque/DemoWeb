const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export async function autenticar(email, password) {
  const response = await fetch(`${API_URL}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || 'No se pudo iniciar sesión.');
  return data;
}
