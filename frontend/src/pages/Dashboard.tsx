import Heading from "../components/Heading";
import Pagination from "../components/Pagination";
import RecordsTable from "../components/RecordsTable";
import SearchBar from "../components/SearchBar";
import UploadFile from "../components/UploadFile";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-200">
      <div className="mx-auto px-4 py-10">
        <Heading title="CSV Collaboration" style="mb-4 text-center"/>
        <UploadFile />
        <SearchBar />
        <RecordsTable />
        <Pagination />
      </div>
    </div>
  );
}

export default Dashboard;
