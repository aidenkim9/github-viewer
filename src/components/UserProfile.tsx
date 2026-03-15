import type { GithubUser } from "../types/github";

interface userProfileProps {
  user: GithubUser;
}

export default function UserProfile({ user }: userProfileProps) {
  return (
    <div className="bg-[#161b22] border border-[#30363d] py-5 pl-5 pr-10 rounded flex justify-between items-center">
      <section className="flex gap-5">
        <img src={user.avatar_url} alt="" className="w-17 h-17 rounded-full" />
        <div className="text-[#8b949e]">
          <p className="text-stone-200 text-2xl font-extrabold">{user?.name}</p>
          <p className="text-[#58a6ff]">
            <a href={user.html_url}>@{user.login}</a>
          </p>
          {user.bio && <p className="text-sm mt-1">{user.bio}</p>}
          <p>{user.location}</p>
        </div>
      </section>
      <section className="text-[#8b949e] flex justify-between gap-15">
        <p className="flex flex-col items-center justify-center">
          <h2 className="text-[#4f95e4] font-extrabold text-3xl">{user.public_repos}</h2>
          <span>Repo</span>
        </p>
        <p className="flex flex-col items-center justify-center">
          <h2 className="text-[#4f95e4] font-extrabold text-3xl">{user.followers}</h2>
          <span>Followers</span>
        </p>
        <p className="flex flex-col items-center justify-center">
          <h2 className="text-[#4f95e4] font-extrabold text-3xl">{user.following}</h2>
          <span>Following</span>
        </p>
      </section>
    </div>
  );
}
