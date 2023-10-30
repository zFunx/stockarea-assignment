import NavigationBar from "@/components/NavigationBar";
import WarehousePane from "@/components/WarehousePane";
import logo from "@/assets/images/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { setFilterCities, setQuery, setFilterClusters} from "@/store/warehouseSlice";
import Collapsible from "@/components/Collapsible";
import CheckboxList from "@/components/CheckboxList";

export default function Home() {
  const cities = useSelector((state) => state.warehouses.cities);
  const clusters = useSelector((state) => state.warehouses.clusters);
  const dispatch = useDispatch();
  return (
    <>
      <NavigationBar
        logoSrc={logo.src}
        onSearch={(value) => dispatch(setQuery(value))}
      />
      <main>
        <div className="flex">
          <div className="w-[320px] bg-neutral-200 p-4">
            <div className="text-xl ml-2">Filters:</div>
            <Collapsible title="Cities">
              <CheckboxList
                items={cities}
                onSelectionChange={(filterCities) =>
                  dispatch(setFilterCities(filterCities))
                }
              />
            </Collapsible>
            <Collapsible title="Clusters">
              <CheckboxList
                items={clusters}
                onSelectionChange={(filterClusters) =>
                  dispatch(setFilterClusters(filterClusters))
                }
              />
            </Collapsible>
          </div>
          <div className="flex-1">
            <WarehousePane />
          </div>
        </div>
      </main>
    </>
  );
}
