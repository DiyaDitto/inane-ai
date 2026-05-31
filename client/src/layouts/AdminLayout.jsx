import AdminSidebar from "../components/admin/AdminSidebar";

function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-slate-950">

      <AdminSidebar />

      <main className="flex-1 p-8 text-white">
        {children}
      </main>

    </div>
  );
}

export default AdminLayout;