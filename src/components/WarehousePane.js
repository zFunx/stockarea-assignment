import WarehouseCard from "./WarehouseCard";
import WarehouseImage from "@/assets/images/warehouse.jpg";
import { useSelector, useDispatch } from "react-redux";
import NoItemsFound from "./NoItemsFound";

const WarehousePane = () => {
  const filteredWarehouses = useSelector(
    (state) => state.warehouses.filteredWarehouses
  );

  if (filteredWarehouses.length > 0) {
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
  } else {
    return <NoItemsFound />;
  }
};

export default WarehousePane;
