import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center bg-slate-50 px-4 py-16">
      <div className="w-full max-w-3xl rounded-4xl border border-slate-200 bg-white p-10 shadow-xl text-center">
        <div className="mb-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
            404
          </p>
          <h1 className="mt-4 text-4xl font-bold text-slate-950 sm:text-5xl">
            Page not found
          </h1>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            to="/dashboard"
            className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white hover:bg-slate-800 transition"
          >
            Back to dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
