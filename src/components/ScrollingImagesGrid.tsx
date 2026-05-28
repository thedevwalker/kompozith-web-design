import { column1Items, column2Items } from "../types";

const allItems = [...column1Items, ...column2Items];

export default function ScrollingImagesGrid() {
  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
      {allItems.map((item) => (
        <div
          key={item.id}
          className="overflow-hidden rounded-2xl"
        >
          <img
            src={item.imageUrl}
            alt=""
            referrerPolicy="no-referrer"
            className="w-full h-[280px] object-cover"
          />
        </div>
      ))}
    </div>
  );
}
