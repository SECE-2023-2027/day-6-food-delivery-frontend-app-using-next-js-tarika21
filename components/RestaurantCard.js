import Link from "next/link";

export default function RestaurantCard({ restaurant }) {
  return (
    <div className="restaurant-card">
      <img
        src={restaurant.image}
        alt={restaurant.name}
        style={{
          width: "100%",
          height: "180px",
          objectFit: "cover",
          borderRadius: "10px",
          marginBottom: "10px"
        }}
      />
      <h3>{restaurant.name}</h3>
      <p>{restaurant.cuisines.join(", ")}</p>
      <p>₹{restaurant.costForTwo} for two</p>
      <p>⭐ {restaurant.rating} Rating</p>
      <Link href={`/restaurant/${restaurant.id}`}>View Dishes</Link>
    </div>
  );
}
