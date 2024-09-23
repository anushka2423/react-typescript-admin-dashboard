import AdminSidebar from "../components/AdminSidebar";

function Dashboard() {
  return (
    <div className="adminContainer">
      {/* Sidebar */}
      <AdminSidebar/>

      {/* Main-page */}
      <main>MAIN CONTENT</main>
    </div>
  )
}

export default Dashboard;
