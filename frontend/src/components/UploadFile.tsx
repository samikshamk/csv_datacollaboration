import Heading from "./Heading";

function UploadFile() {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow mb-4 min-w-[20vw] max-w-[80vw] mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-gray-500 dark:text-gray-200">
        <Heading title="Upload CSV File" />
      </h2>

      <input
        type="file"
        accept=".csv"
        className="w-full border rounded p-2 text-gray-500 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-300 cursor-pointer"
      />

      <div className="mt-4">
        <div className="h-3 bg-gray-200 rounded">
          <div
            className="h-3 bg-blue-500 rounded"
            style={{
              width: `10%`,
            }}
          />
        </div>

        <p className="mt-2 text-sm text-gray-500 dark:text-gray-200">10%</p>
      </div>
    </div>
  );
}

export default UploadFile;
