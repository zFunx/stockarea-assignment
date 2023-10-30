import NavigationBar from "@/components/NavigationBar";
import WarehousePane from "@/components/WarehousePane";
import logo from "@/assets/images/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { setQuery } from "@/store/warehouseSlice";

export default function Home() {
  const dispatch = useDispatch();
  return (
    <>
      <NavigationBar
        logoSrc={logo.src}
        onSearch={(value) => dispatch(setQuery(value))}
      />
      <main>
        <div>
          <WarehousePane />
        </div>
      </main>
    </>
  );
}
