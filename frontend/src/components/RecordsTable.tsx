import type { RecordItem } from "../types/records";

interface Props {
  records: RecordItem[];
}

function RecordsTable({ records }: Props) {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden min-w-[20vw] max-w-[80vw] mx-auto mt-6 overflow-x-auto">
      <table className="min-w-full divide-y">
        <thead className="bg-white dark:bg-gray-900">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Post ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Body
            </th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-900 divide-y">
          {records.map((record) => (
            <tr key={record.id} className="border-t">
              <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-300">
                {record.id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-300">
                {record.postId}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-300">
                {record.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-300">
                {record.email}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-300">
                {record.body}
              </td>
            </tr>
          ))} 
        </tbody>
      </table>
    </div>
  );
}

export default RecordsTable;
