import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";

function App() {

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 font-sans transition-colors duration-200">
      <Navbar />
      <Dashboard />
    </div>
  )
}

export default App
