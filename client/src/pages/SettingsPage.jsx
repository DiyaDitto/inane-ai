import DashboardLayout from "../layouts/DashboardLayout";

function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="text-white">

        <h1 className="text-4xl font-bold mb-8">
          Settings
        </h1>

        <div className="bg-slate-900 rounded-2xl p-6">

          <div className="flex justify-between py-5 border-b border-slate-800">
            <span>Dark Mode</span>
            <input type="checkbox" defaultChecked />
          </div>

          <div className="flex justify-between py-5 border-b border-slate-800">
            <span>Notifications</span>
            <input type="checkbox" defaultChecked />
          </div>

          <div className="flex justify-between py-5 border-b border-slate-800">
            <span>Email Alerts</span>
            <input type="checkbox" />
          </div>

          <div className="flex justify-between py-5">
            <span>Weekly Reports</span>
            <input type="checkbox" defaultChecked />
          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}

export default SettingsPage;