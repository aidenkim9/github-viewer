import type { githubRepo } from "../types/github";
import RepoItem from "./RepoItem";

interface RepoListProps {
  repos: githubRepo[] | undefined;
}

export default function RepoList(props: RepoListProps) {
  return (
    <section className="mt-5 text-[#9fa9b4]">
      <div className="px-2 py-2">
        <h1 className="">Repos ({props.repos?.length})</h1>
      </div>
      <ul className="flex flex-col gap-5">
        {props.repos?.map((repo) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </ul>
    </section>
  );
}
