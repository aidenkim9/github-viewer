import { useState, type ReactNode } from "react";
import Header from "./components/Header";
import RepoList from "./components/RepoList";
import UserProfile from "./components/UserProfile";
import { fetchRepo, fetchUser } from "./api/github";
import { useQuery } from "@tanstack/react-query";
async function searchUser(username: string) {
  const user = await fetchUser(username);
  const repos = await fetchRepo(user.login);

  return { user, repos };
}

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["search", searchTerm],
    queryFn: () => searchUser(searchTerm),
    enabled: !!searchTerm,
  });

  let content: ReactNode;

  if (isLoading)
    content = (
      <p className="text-center text-[#8b949e] font-bold text-xl bg-[#161b22] border border-[#30363d] py-10 rounded">
        Loading...
      </p>
    );
  else if (isError)
    content = (
      <p className="text-center text-[#8b949e] font-bold text-xl bg-[#161b22] border border-[#30363d] py-10 rounded">
        {error.message}
      </p>
    );
  else if (!data?.user)
    content = (
      <p className="text-center text-[#8b949e] font-bold text-xl bg-[#161b22] border border-[#30363d] py-10 rounded">
        Search Github User!
      </p>
    );
  else
    content = (
      <>
        <UserProfile user={data.user} />
        <RepoList repos={data.repos || []} />
      </>
    );

  return (
    <div className="min-h-full">
      <Header search={setSearchTerm} />
      <main className="p-10">{content}</main>
    </div>
  );
}

export default App;
