export default function SquareDecoration() {
  const squareSize = 15;
  return (
    <div className="absolute -top-20 left-1/3 hidden lg:block">
      {Array(squareSize)
        .fill(0)
        .map((_, rowIndex) => {
          return (
            <div key={rowIndex} className="flex">
              {Array(squareSize)
                .fill(0)
                .map((_, colIndex) => {
                  return (
                    <div
                      key={colIndex}
                      className="p-3 hover:bg-white hover:bg-opacity-10 rounded-lg group"
                    >
                      <div className="rounded-full w-2 h-2 bg-gradient-to-b from-gray-950 to-gray-600 group-hover:to-primary-color"></div>
                    </div>
                  );
                })}
            </div>
          );
        })}
    </div>
  );
}
