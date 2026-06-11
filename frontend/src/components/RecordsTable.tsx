
function RecordsTable() {
  return (
    <div
      className="flex justify-center mt-6 mx-auto overflow-x-auto max-w-[80vw] min-w-[20vw] rounded-xl shadow overflow-hidden"
    >
      <table
        className="min-w-full divide-y"
      >
        <thead className="bg-white dark:bg-gray-900">
          <tr>
            <th className="px-4 py-3 text-white-600 dark:text-gray-200">Song</th>
            <th className="px-4 py-3 text-white-600 dark:text-gray-200">Artist</th>
            <th className="px-4 py-3 text-white-600 dark:text-gray-200">Year</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td className="px-4 py-2 text-white-600 dark:text-gray-200">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td className="px-4 py-2 text-white-600 dark:text-gray-200">Malcolm Lockyer</td>
            <td className="px-4 py-2 text-white-600 dark:text-gray-200">1961</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2 text-white-600 dark:text-gray-200">Witchy Woman</td>
            <td className="px-4 py-2 text-white-600 dark:text-gray-200">The Eagles</td>
            <td className="px-4 py-2 text-white-600 dark:text-gray-200">1972</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2 text-white-600 dark:text-gray-200">Shining Star</td>
            <td className="px-4 py-2 text-white-600 dark:text-gray-200">Earth, Wind, and Fire</td>
            <td className="px-4 py-2 text-white-600 dark:text-gray-200">1975</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default RecordsTable;
