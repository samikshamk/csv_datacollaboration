import { useState, useEffect } from "react";
import axios from "axios";

import Heading from "../components/Heading";
import Pagination from "../components/Pagination";
import RecordsTable from "../components/RecordsTable";
import SearchBar from "../components/SearchBar";
import UploadFile from "../components/UploadFile";
import ConflictModal from "../components/ConflictModal";

function Dashboard() {
  const baseurl = import.meta.env.VITE_API_BASE_URL;

  const [records, setRecords] = useState([]);
  const [search, setSearch] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [isModalOpen, setIsModalOpen] = useState(false); // For Conflict Data Modal
  const [conflicts, setConflicts] = useState([]); // To store conflict data 

  const loadRecords = async () => {
    const response = await axios.get(`${baseurl}/records?page=${pageNumber}&limit=20`);

    setRecords(response.data.data);
    setTotalPages(Math.ceil(response.data.total / 20));
  };

  const searchRecords = async (keyword: string) => {
    if (!keyword) {
      loadRecords();
      return;
    }

    const response = await axios.get(`${baseurl}/records/search?q=${keyword}`);
    setRecords(response.data);
  };

  useEffect(() => {
    loadRecords();
  }, [pageNumber, records]);

  useEffect(() => {
    searchRecords(search);
  }, [search]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-200">
      <div className="mx-auto px-4 py-10">
        <Heading title="CSV Collaboration" style="mb-4 text-center"/>
        <UploadFile onSuccess={loadRecords} />
        <div className="flex justify-between items-center mb-4">
          <SearchBar 
            value={search}
            onChange={setSearch}
          /> 
          <button 
            className="w-auto text-sm sm:text-xs bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" 
            onClick={() => setIsModalOpen(true)}>
            Conflict Data
          </button>
        </div>
    
        <RecordsTable records={records} />
        <Pagination  page={pageNumber} totalPages={totalPages} onPageChange={setPageNumber} />
        <ConflictModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} conflicts={conflicts} />
      </div>
    </div>
  );
}

export default Dashboard;
