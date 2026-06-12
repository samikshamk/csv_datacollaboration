
function ConflictModal({ isOpen, onClose, conflicts }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div className="relative w-full max-w-md p-6 mx-4 bg-white rounded-xl shadow-xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between pb-3 border-b">
          <h3 className="text-xl font-semibold">Conflict Data</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-900">&times;</button>
        </div>
        <div className="mt-4">
          {conflicts.length > 0 ? (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="border-b px-4 py-2">Field Name</th>
                  <th className="border-b px-4 py-2">Old Value</th>
                  <th className="border-b px-4 py-2">New Value</th>
                  <th className="border-b px-4 py-2">Resolved</th>
                </tr>
              </thead>
              <tbody>
                {conflicts.map((conflict, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="border-b px-4 py-2">{conflict.fieldName}</td>
                    <td className="border-b px-4 py-2">{conflict.oldValue}</td>
                    <td className="border-b px-4 py-2">{conflict.newValue}</td>
                    <td className="border-b px-4 py-2">{conflict.resolved ? "Yes" : "No"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-gray-500">No conflicts found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ConflictModal