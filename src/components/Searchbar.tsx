import { useRef } from "react";

interface SearchbarProps {
  search: (username: string) => void;
}

export default function Searchbar({ search }: SearchbarProps) {
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
        required
      />
      <button
        className="text-stone-200 bg-[#238636] px-3 py-1 rounded cursor-pointer hover:bg-[#207d33]"
        onClick={() => {
          const value = searchInput.current?.value.trim() || "";
          if (!value) return;
          search(value);
        }}
      >
        Search
      </button>
    </p>
  );
}
