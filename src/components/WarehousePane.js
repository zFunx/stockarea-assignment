import WarehouseCard from "./WarehouseCard";
import WarehouseImage from "@/assets/images/Warehouse.jpg";
import { useSelector, useDispatch } from "react-redux";

const WarehousePane = () => {
  const filteredWarehouses = useSelector(
    (state) => state.warehouses.filteredWarehouses
  );

  return (
    <div className="flex gap-4 flex-wrap justify-center">
      {filteredWarehouses.map((warehouse) => (
        <WarehouseCard
          key={warehouse.id}
          {...warehouse}
          imageSrc={WarehouseImage.src}
        />
      ))}
    </div>
  );
};

export default WarehousePane;
