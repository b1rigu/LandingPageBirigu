export default function TechPill({ items, className = "" }) {
  return (
    <div className={"flex flex-wrap gap-2 " + className}>
      {items.map((techName) => {
        return (
          <div key={techName} className="py-1 px-2 bg-gray-700 rounded-badge">
            <p>{techName}</p>
          </div>
        );
      })}
    </div>
  );
}
