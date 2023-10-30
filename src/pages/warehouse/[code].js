import { useSelector } from "react-redux";
import WarehouseImage from "@/assets/images/Warehouse.jpg";
import { useRouter } from "next/router";

const WarehousePage = () => {
  const router = useRouter();
  const { code } = router.query;
  const warehouses = useSelector((state) => state.warehouses.warehouses);
  const warehouseByCode = warehouses.find(
    (warehouse) => warehouse.code === code
  );

  return (
    <div className="flex flex-col items-center m-8">
      <div>
        <img
          className="md:max-w-[800px] w-screen rounded-lg"
          src={WarehouseImage.src}
        />
        <h1 className="text-2xl font-bold mt-4">{warehouseByCode.name}</h1>
        <p className="text-sm text-gray-600">Code: {warehouseByCode.code}</p>
        <div className="grid sm:grid-cols-2 gap-2 mt-4">
          <p>
            <strong>City:</strong> {warehouseByCode.city}
          </p>
          <p>
            <strong>Space Available:</strong> {warehouseByCode.space_available}{" "}
            sqft
          </p>
          <p>
            <strong>Type:</strong> {warehouseByCode.type}
          </p>
          <p>
            <strong>Cluster:</strong> {warehouseByCode.cluster}
          </p>
          <p>
            <strong>Registered:</strong>{" "}
            {warehouseByCode.is_registered ? "Yes" : "No"}
          </p>
          <p>
            <strong>Live:</strong> {warehouseByCode.is_live ? "Yes" : "No"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WarehousePage;
