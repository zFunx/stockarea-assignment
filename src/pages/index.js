import WarehousePane from "@/components/WarehousePane";
import { useSelector, useDispatch } from "react-redux";
import {
  setFilterCities,
  setQuery,
  setFilterClusters,
  setFilterMinSpaceAvailabe,
} from "@/store/warehouseSlice";
import Collapsible from "@/components/Collapsible";
import CheckboxList from "@/components/CheckboxList";
import MinSlider from "@/components/MinSlider";

export default function Home() {
  const cities = useSelector((state) => state.warehouses.cities);
  const clusters = useSelector((state) => state.warehouses.clusters);
  const minSpaceAvailable = useSelector(
    (state) => state.warehouses.minSpaceAvailable
  );
  const maxSpaceAvailable = useSelector(
    (state) => state.warehouses.maxSpaceAvailable
  );
  const dispatch = useDispatch();
  return (
    <>
      
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
            <Collapsible title="Availabe Space">
              <MinSlider
                min={minSpaceAvailable}
                max={maxSpaceAvailable}
                onChange={(value) => dispatch(setFilterMinSpaceAvailabe(value))}
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
