import type { githubUser } from "../types/github";

export async function fetchUser(username: string): Promise<githubUser> {
  const response = await fetch(`https://api.github.com/users/${username}`);

  if (!response.ok) {
    throw new Error("Failed to fetch user data.");
  }

  return response.json();
}

export async function fetchRepo(username: string) {
  const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`);

  if (!response.ok) {
    throw new Error("Failed to fetch repo data.");
  }

  return response.json();
}
