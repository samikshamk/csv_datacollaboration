function Pagination() {
  return (
    <div className="flex justify-center gap-3 mt-4">
      <button className="px-4 py-2 border rounded bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300">
        Previous
      </button>

      <span className="flex items-center text-gray-500 dark:text-gray-400">
        Page 1 / 10
      </span>

      <button className="px-4 py-2 border rounded bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300">
        Next
      </button>
    </div>
  );
}

export default Pagination;
