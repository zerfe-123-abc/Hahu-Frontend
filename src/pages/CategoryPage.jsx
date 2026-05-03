import { useParams, Link } from "react-router-dom"

const CategoryPage = () => {
    const { category } = useParams()
    const title = category?.split("-").map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ") || "Category"

    return (
        <div className="max-w-5xl mx-auto p-6">
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-950">{title}</h1>
                        <p className="mt-2 text-gray-600">Browse top deals in the {title} category.</p>
                    </div>
                    <Link
                        to="/browse"
                        className="inline-flex items-center justify-center rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 transition"
                    >
                        View All Listings
                    </Link>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-2xl border border-gray-200 bg-slate-50 p-6">
                        <h2 className="font-semibold text-slate-900 mb-2">Featured {title}</h2>
                        <p className="text-sm text-gray-600">Discover the latest items, best prices, and popular offers in {title}.</p>
                    </div>
                    <div className="rounded-2xl border border-gray-200 bg-slate-50 p-6">
                        <h2 className="font-semibold text-slate-900 mb-2">Popular filters</h2>
                        <ul className="text-sm text-gray-600 space-y-2">
                            <li>New arrivals</li>
                            <li>Price low to high</li>
                            <li>Verified sellers</li>
                        </ul>
                    </div>
                    <div className="rounded-2xl border border-gray-200 bg-slate-50 p-6">
                        <h2 className="font-semibold text-slate-900 mb-2">Need help?</h2>
                        <p className="text-sm text-gray-600">Contact support or update your search terms for a more precise result.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryPage
