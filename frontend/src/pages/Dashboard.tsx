import Heading from "../components/Heading";
function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-200">
      <div className="max-w-2xl mx-auto px-4 py-10">
        <Heading title="CSV Collaboration" style="mb-4"/>
      </div>
    </div>
  );
}

export default Dashboard;
