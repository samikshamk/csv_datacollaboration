
function RecordsTable() {
  return (
    <div
      className="bg-white rounded-xl shadow overflow-hidden min-w-[20vw] max-w-[80vw] mx-auto mt-6 overflow-x-auto" >
      <table className="min-w-full divide-y" >
        <thead className="bg-white dark:bg-gray-900">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Song</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Artist</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year</th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-900 divide-y">
          <tr className="border-t">
            <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-300 text-gray-500 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-300">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-300">Malcolm Lockyer</td>
            <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-300">1961</td>
          </tr>
          <tr className="border-t">
            <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-300">Witchy Woman</td>
            <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-300">The Eagles</td>
            <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-300">1972</td>
          </tr>
          <tr className="border-t">
            <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-300">Shining Star</td>
            <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-300">Earth, Wind, and Fire</td>
            <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-300">1975</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default RecordsTable;
