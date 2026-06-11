import { useState, useEffect } from "react";

import Heading from "../components/Heading";
import Pagination from "../components/Pagination";
import RecordsTable from "../components/RecordsTable";
import SearchBar from "../components/SearchBar";
import UploadFile from "../components/UploadFile";

function Dashboard() {

  const [records, setRecords] = useState([]);
  const [search, setSearch] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const searchRecords =
    async (keyword: string) => {

    if (!keyword) {

      // loadRecords();
      return;
    }

    // const response =
    //   await api.get(
    //     `/records/search?q=${keyword}`
    //   );

    // setRecords(
    //   response.data
    // );
  };


    useEffect(() => {
    searchRecords(search);
  }, [search]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-200">
      <div className="mx-auto px-4 py-10">
        <Heading title="CSV Collaboration" style="mb-4 text-center"/>
        <UploadFile />
        <SearchBar 
        value={search}
        onChange={setSearch}
        />
        <RecordsTable />
        <Pagination />
      </div>
    </div>
  );
}

export default Dashboard;
