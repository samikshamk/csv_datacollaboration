import { Search } from "lucide-react";

interface Props {
  value: string;
  onChange: (
    value: string
  ) => void;
}

function SearchBar({
  value,
  onChange
}: Props) {
  return (
    <div className="w-full max-w-sm min-w-[50vw] mx-auto">
      <label className="relative block">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-white-600 dark:text-gray-400">
          <Search />
        </span>
        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-white dark:bg-gray-900 w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm text-gray-900 dark:text-white"
          placeholder="Search for email or post..."
          type="text"
          name="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    </div>
  );
}

export default SearchBar;
