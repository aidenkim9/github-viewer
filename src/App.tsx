import { useState, type ReactNode } from "react";
import Header from "./components/Header";
import RepoList from "./components/RepoList";
import UserProfile from "./components/UserProfile";
import type { GithubRepo, GithubUser } from "./types/github";
import { fetchRepo, fetchUser } from "./api/github";

function App() {
  const [user, setUser] = useState<GithubUser>();
  const [repos, setRepos] = useState<GithubRepo[]>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function searchUser(username: string) {
    setLoading(true);
    setError(null);

    try {
      const user = await fetchUser(username);
      setUser(user);
      const res = await fetchRepo(user.login);
      setRepos(res);
    } catch (err) {
      setError("An Error Occurred!");
      setUser(undefined);
      setRepos(undefined);
    } finally {
      setLoading(false);
    }
  }
  let content: ReactNode;

  if (loading)
    content = (
      <p className="text-center text-[#8b949e] font-bold text-xl bg-[#161b22] border border-[#30363d] py-10 rounded">
        Loading...
      </p>
    );
  else if (error)
    content = (
      <p className="text-center text-[#8b949e] font-bold text-xl bg-[#161b22] border border-[#30363d] py-10 rounded">
        {error}
      </p>
    );
  else if (!user)
    content = (
      <p className="text-center text-[#8b949e] font-bold text-xl bg-[#161b22] border border-[#30363d] py-10 rounded">
        Search Github User!
      </p>
    );
  else
    content = (
      <>
        <UserProfile user={user} />
        <RepoList repos={repos || []} />
      </>
    );

  return (
    <div className="min-h-full">
      <Header search={searchUser} />

      <main className="p-10">{content}</main>
    </div>
  );
}

export default App;
