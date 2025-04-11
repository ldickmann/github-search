export async function getUserProfile(username) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  if (!response.ok) {
    throw new Error(`Erro ao buscar dados do usuário: ${response.statusText}`);
  }
  const data = await response.json();
  return data;
}
