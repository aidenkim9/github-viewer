import type { GithubRepo } from "../types/github";

interface RepoItemProps {
  repo: GithubRepo;
}

export default function RepoItem({ repo }: RepoItemProps) {
  return (
    <li className="bg-[#161b22] px-4 py-3 rounded border border-[#30363d] flex flex-col gap-1">
      <div className="flex gap-4 items-center">
        <h2 className="text-[#58a6ff] font-extrabold text-xl">
          <a href={repo.html_url}>{repo.name}</a>
        </h2>
        <p className="bg-[#3a86dd] text-stone-100 rounded-xl px-2 text-sm">{repo.private ? "Private" : "Public"}</p>
      </div>
      <p>{repo.description}</p>
      <p className="flex gap-5 items-center text-sm">
        <span>{repo.language}</span>
        <span>⭐️ {repo.stargazers_count}</span>
        <span>{repo.updated_at.slice(0, 10)}</span>
      </p>
    </li>
  );
}
