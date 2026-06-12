interface Props {
  page: number;
  totalPages: number;

  onPageChange: (
    page: number
  ) => void;
}

function Pagination({
  page,
  totalPages,
  onPageChange
}: Props) {
  return (
    <div className="flex justify-center gap-3 mt-4">
      <button 
      className="px-4 py-2 border rounded bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300"
      disabled={page === 1}
        onClick={() =>
          onPageChange(page - 1)
        }
        >
        Previous
      </button>

      <span className="flex items-center text-gray-500 dark:text-gray-400">
        Page {page} / {totalPages}
      </span>

      <button 
      className="px-4 py-2 border rounded bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300"
      disabled={
          page === totalPages
        }
        onClick={() =>
          onPageChange(page + 1)
        }
        >
        Next
      </button>
    </div>
  );
}

export default Pagination;
