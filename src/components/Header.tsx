import Searchbar from "./Searchbar";

interface HeaderProps {
  search: (username: string) => void;
}

export default function Header(props: HeaderProps) {
  return (
    <header className="flex bg-[#161b22] justify-between px-4 py-6">
      <p className="text-stone-200 text-2xl font-bold">GitHub Viewer</p>
      <Searchbar search={props.search} />
    </header>
  );
}
