import { Link } from "react-router-dom"

const StaticPage = ({ title, description }) => {
    return (
        <div className="max-w-5xl mx-auto p-6">
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-slate-950">{title}</h1>
                    <p className="mt-3 text-gray-600 max-w-2xl">{description}</p>
                </div>
                <div className="space-y-4 text-sm text-slate-700">
                    <p>
                        This page is part of the main HAHU marketplace experience. Use the links below to continue browsing the app or return home.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-4">
                        <Link to="/" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-950 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 transition">
                            Go Home
                        </Link>
                        <Link to="/browse" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-950 hover:bg-slate-100 transition">
                            Browse Listings
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StaticPage
