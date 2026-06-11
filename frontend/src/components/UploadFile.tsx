import { useState } from "react";
import axios from "axios";
import { message } from "../helper/useToast";

import Heading from "./Heading";

function UploadFile() {
  const [progress, setProgress] = useState(0);
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const uploadFile = async (event: React.ChangeEvent<HTMLInputElement>) => {

    const csvFile = event.target.files?.[0];
    if (!csvFile) return;

    const formData =
      new FormData();

    formData.append(
      "file",
      csvFile
    );

    try {
      await axios.post(`${baseUrl}/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },

        onUploadProgress:
          (event) => {

          const percentage =
            Math.round(
              (event.loaded * 100) /
              (event.total || 1)
            );

          setProgress(percentage);
        }
      });
      message("File uploaded successfully!", "success");
    } catch (error) {
      message.error("Error uploading file.", "error");
    }

  };
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow mb-4 min-w-[20vw] max-w-[80vw] mx-auto">
        <Heading title="Upload CSV File" style="mb-2"/>

      <input
        type="file"
        accept=".csv"
        className="w-full border rounded p-2 text-gray-500 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-300 cursor-pointer"
        onChange={uploadFile}
      />

      <div className="mt-4">
        <div className="h-3 bg-gray-200 rounded">
          <div
            className="h-3 bg-blue-500 rounded"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        <p className="mt-2 text-sm text-gray-500 dark:text-gray-200">{progress}%</p>
      </div>
    </div>
  );
}

export default UploadFile;
