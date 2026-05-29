import DashboardLayout from "../layouts/DashboardLayout";

function ProfilePage() {
  return (
    <DashboardLayout>
      <div className="text-white">

        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">

          <div className="flex flex-col md:flex-row items-center gap-6">

            <img
              src="https://ui-avatars.com/api/?name=Diya"
              alt="profile"
              className="w-32 h-32 rounded-full"
            />

            <div>
              <h1 className="text-4xl font-bold">
                Diya Ditto
              </h1>

              <p className="text-slate-400 mt-2">
                Computer Science Engineer
              </p>

              <button className="mt-4 bg-purple-600 px-6 py-3 rounded-xl">
                Edit Profile
              </button>
            </div>

          </div>

        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-8">

          <div className="bg-slate-900 p-6 rounded-2xl">
            <h3 className="text-slate-400">
              Study Streak
            </h3>

            <p className="text-4xl font-bold text-purple-500 mt-2">
              12 Days
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl">
            <h3 className="text-slate-400">
              Tests Attempted
            </h3>

            <p className="text-4xl font-bold text-purple-500 mt-2">
              24
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl">
            <h3 className="text-slate-400">
              Accuracy
            </h3>

            <p className="text-4xl font-bold text-purple-500 mt-2">
              78%
            </p>
          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}

export default ProfilePage;