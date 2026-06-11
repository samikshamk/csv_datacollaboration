import Heading from "../components/Heading";
import RecordsTable from "../components/RecordsTable";
import SearchBar from "../components/SearchBar";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-200">
      <div className="mx-auto px-4 py-10">
        <Heading title="CSV Collaboration" style="mb-4 text-center"/>
        <SearchBar />
        <RecordsTable />
      </div>
    </div>
  );
}

export default Dashboard;
