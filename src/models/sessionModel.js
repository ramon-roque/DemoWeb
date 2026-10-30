const TOKEN_KEY = 'authToken';

export function guardarSesion(token) {
  sessionStorage.setItem(TOKEN_KEY, token);
}
