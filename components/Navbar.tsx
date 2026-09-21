export default function Navbar() {
  return (
    <nav className="border-b border-slate-800 px-6 py-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-500">
          CampusX
        </h1>

        <div className="flex gap-3">
          <button className="rounded-lg px-4 py-2 text-slate-300 hover:bg-slate-800">
            Log in
          </button>

          <button className="rounded-lg bg-blue-600 px-4 py-2 font-semibold hover:bg-blue-700">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
}