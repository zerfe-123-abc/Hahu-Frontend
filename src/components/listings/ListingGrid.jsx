import ListingCard from "./ListingCard"

function ListingGrid({ listings }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
      {listings.map((item) => (
        <ListingCard key={item.id} listing={item} />
      ))}
    </div>
  )
}

export default ListingGrid