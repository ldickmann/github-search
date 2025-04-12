export async function getUserProfile(username) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  if (!response.ok) {
    throw new Error(
      `Nenhum perfil foi encontrado com esse nome de usuário.\nTente novamente ${response.statusText}`
    );
  }
  const data = await response.json();
  return data;
}
