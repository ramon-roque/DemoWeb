import { useState } from 'react';
import { guardarSesion } from '../models/sessionModel.js';
import { autenticar } from '../services/authService.js';

export function useLoginController() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function iniciarSesion(email, password) {
    setError('');
    setLoading(true);
    try {
      const { token } = await autenticar(email, password);
      guardarSesion(token);
      return true;
    } catch (err) {
      setError(err.message || 'No se pudo conectar al servicio.');
    } finally {
      setLoading(false);
    }
    return false;
  }
  return { error, loading, iniciarSesion };
}
