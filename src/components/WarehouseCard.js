import Link from "next/link";

const WarehouseCard = ({ name, code, imageSrc, city, space_available, cluster }) => {
  return (
    <Link href={`/warehouse/${code}`} className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-neutral-200 cursor-pointer">
      <img className="w-full" src={imageSrc} alt={`Warehouse in ${city}`} />
      <div className="px-6 py-4">
        <div className="font-bold text-gray-700 text-xl">{name}</div>
        <div className="text-gray-700 text-sm mb-2">(Cluster: {cluster})</div>
        <p className="text-gray-700 text-base">
          Located in: <span className="font-semibold">{city}</span>
        </p>
        <p className="text-gray-700 text-base">
          Space Available:{" "}
          <span className="font-semibold">{space_available}</span>
        </p>
      </div>
    </Link>
  );
};

export default WarehouseCard;
