export interface githubUser {
  login: string;
  name: string;
  avatar_url: string;
  html_url: string;
  bio: string | null;
  location: string;
  followers: number;
  following: number;
  public_repos: number;
}

export interface githubRepo {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
  watchers_count: number;
  updated_at: string;
  language: string;
  html_url: string;
  private: boolean;
}
