import restaurants from '@/details/restaurant';
import dishes from '@/details/dishes';

export default function RestaurantPage({ params }) {
  const { id } = params;

  const restaurant = restaurants.find((r) => r.id === id);
  if (!restaurant) return <h2>Restaurant not found</h2>;

  const dishList = dishes.filter((dish) => restaurant.dishes.includes(dish.id));

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{restaurant.name}</h1>
      <p><strong>Cuisines:</strong> {restaurant.cuisines.join(', ')}</p>
      <p><strong>Cost for Two:</strong> ₹{restaurant.costForTwo}</p>
      <p><strong>Rating:</strong> ⭐ {restaurant.rating}</p>

      <h2 style={{ marginTop: "2rem" }}>Dishes</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {dishList.map((dish) => (
          <div
            key={dish.id}
            style={{
              width: "220px",
              padding: "1rem",
              border: "1px solid #ccc",
              borderRadius: "10px",
              background: "white"
            }}
          >
            <img
              src={dish.image}
              alt={dish.name}
              style={{ width: "100%", height: "130px", objectFit: "cover", borderRadius: "6px" }}
            />
            <h4>{dish.name}</h4>
            <p>{dish.description}</p>
            <p>₹{dish.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
