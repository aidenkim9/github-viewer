import type { githubRepo } from "../types/github";

interface RepoItemProps {
  repo: githubRepo;
}

export default function RepoItem(props: RepoItemProps) {
  return (
    <li className="bg-[#161b22] px-4 py-3 rounded border border-[#30363d] flex flex-col gap-1">
      <div className="flex gap-4 items-center">
        <h2 className="text-[#58a6ff] font-extrabold text-xl">
          <a href={props.repo.html_url}>{props.repo.name}</a>
        </h2>
        <p className="bg-[#3a86dd] text-stone-100 rounded-xl px-2 text-sm">
          {props.repo.private ? "Private" : "Public"}
        </p>
      </div>
      <p>{props.repo.description}</p>
      <p className="flex gap-5 items-center text-sm">
        <span>{props.repo.language}</span>
        <span>{props.repo.watchers_count} watchers</span>
        <span>{props.repo.updated_at.slice(0, 10)}</span>
      </p>
    </li>
  );
}
