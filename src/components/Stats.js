export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items to your packing list</em>
      </p>
    );
  const numitems = items.length;
  const numPackItems = items.filter((items) => items.packed).length;
  const percent = Math.round((numPackItems / numitems) * 100);
  return (
    <footer className="stats">
      <em>
        {percent === 100
          ? "You've got everything! Ready to go✈️"
          : `You have ${numitems} items on your list, you have already packed
          ${numPackItems} (${percent}%)`}
      </em>
    </footer>
  );
}
