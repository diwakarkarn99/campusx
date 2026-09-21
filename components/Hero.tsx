export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[80vh] max-w-6xl items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-400">
          Nepal's Student Social Network
        </p>

        <h2 className="text-5xl font-bold leading-tight md:text-7xl">
          Connect.
          <span className="text-blue-500"> Learn.</span>
          <br />
          Grow together.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          CampusX connects students with friends, ideas, communities,
          events and opportunities—all in one place.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700">
            Join CampusX
          </button>

          <button className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-300 hover:bg-slate-900">
            Explore
          </button>
        </div>
      </div>
    </section>
  );
}