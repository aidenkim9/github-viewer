import { useState } from "react";
import Header from "./components/Header";
import RepoList from "./components/RepoList";
import UserProfile from "./components/UserProfile";
import type { githubRepo, githubUser } from "./types/github";
import { fetchRepo, fetchUser } from "./api/github";

function App() {
  const [user, setUser] = useState<githubUser>();
  const [repos, setRepos] = useState<githubRepo[]>();

  async function searchUser(username: string) {
    const user = await fetchUser(username);
    setUser(user);
    const res = await fetchRepo(user!.login);
    setRepos(res);
  }

  return (
    <div className="min-h-full">
      <Header search={searchUser} />

      <main className="p-10">
        {!user && (
          <p className="text-center text-[#8b949e] font-bold text-xl bg-[#161b22] border border-[#30363d] py-10 rounded">
            Search github User!
          </p>
        )}
        {user && (
          <>
            <UserProfile user={user} />
            <RepoList repos={repos} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
