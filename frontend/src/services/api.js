const API_URL = "http://localhost:8080/api";

export function cadastrarUsuario(dados) {
  return fetch(`${API_URL}/usuarios`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(dados)
  });
}
