import { useRef } from "react";

interface SearchbarProps {
  search: (useraname: string) => void;
}

export default function Searchbar(props: SearchbarProps) {
  const searchInput = useRef<HTMLInputElement>(null);
  return (
    <p className="flex gap-2">
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Enter username"
        className="bg-[#0d1117] text-stone-200 border border-[#30363d] px-3 py-1 rounded-md outline-none w-70"
        ref={searchInput}
      />
      <button
        className="text-stone-200 bg-[#238636] px-3 py-1 rounded cursor-pointer hover:bg-[#207d33]"
        onClick={() => props.search(searchInput.current?.value || "")}
      >
        Search
      </button>
    </p>
  );
}
