import Navbar from "./components/common/Navbar"
import Footer from "./components/common/Footer"
import Sidebar from "./components/common/Sidebar"
import RouteWrapper from "./app/Route.jsx"
import { useState } from "react"
import { useAuth } from "./store/authStore.jsx"

function App() {
  const [showSidebar, setShowSidebar] = useState(false)
  const { user } = useAuth()

  return (
    <div className="flex flex-col min-h-screen">

      {/* Navbar (pass toggle function) */}
      <Navbar toggleSidebar={() => setShowSidebar(true)} />
      <Sidebar isOpen={showSidebar} variant={user ? "user" : "public"} onClose={() => setShowSidebar(false)} />

      {/* Main Content */}
      <div className="grow">
        <RouteWrapper />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App