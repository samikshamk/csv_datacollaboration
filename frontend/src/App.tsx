import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";

import { ToastContainer } from "react-toastify";

function App() {

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 font-sans transition-colors duration-200">
      <Navbar />
      <Dashboard />
      <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
    </div>
  )
}

export default App
