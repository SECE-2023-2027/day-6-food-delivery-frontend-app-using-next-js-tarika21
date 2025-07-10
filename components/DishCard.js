export default function DishCard({ dish }) {
  return (
    <div className="dish-card">
      <img src={dish.image} alt={dish.name} />
      <h4>{dish.name}</h4>
      <p>₹{dish.price}</p>
      <p>{dish.description}</p>
    </div>
  );
}
