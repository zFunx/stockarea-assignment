import { useDispatch, useSelector } from "react-redux";
import WarehouseImage from "@/assets/images/Warehouse.jpg";
import { useRouter } from "next/router";
import { store } from "@/store/store";
import { useState } from "react";
import { updateWarehouseByCode } from "@/store/warehouseSlice";

// export async function getServerSideProps(context) {
//   // Initialize the Redux store
//   const reduxStore = store();
//   const { dispatch } = reduxStore;

//   // Get the current state after dispatching
//   const state = reduxStore.getState();
//   console.log(state);
//   // Pass the initial state to the page as props
//   return { props: { initialReduxState: state } };
// }

const Field = ({ children }) => (
  <div className="flex gap-2 items-center mb-4">{children}</div>
);
const Label = ({ children }) => (
  <label className="block text-sm font-medium text-gray-700">{children}</label>
);
const TextInp = ({ defaultValue, name }) => (
  <input
    defaultValue={defaultValue}
    name={name}
    type="text"
    className="mt-1 block w-full py-1 px-3 flex-1"
  />
);

const WarehousePage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { code } = router.query;
  const warehouses = useSelector((state) => state.warehouses.warehouses);
  const [warehouseByCode, setWarehouseByCode] = useState(
    warehouses.find((warehouse) => warehouse.code === code)
  );

  const [isEditing, setIsEditing] = useState(false);
  const handleEditClick = () => {
    setIsEditing(true);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submit action
    const formData = new FormData(event.target);
    const formValues = {
      name: formData.get("name"),
      city: formData.get("city"),
      space_available: Number(formData.get("space_available")),
      type: formData.get("type"),
      cluster: formData.get("cluster"),
      is_registered: formData.get("is_registered") === "on",
      is_live: formData.get("is_live") === "on",
    };

    dispatch(updateWarehouseByCode({ code, data: formValues }));
    setWarehouseByCode({ ...warehouseByCode, ...formValues });

    setIsEditing(false);
  };

  return (
    <div className="flex flex-col items-center m-8">
      <div>
        <img
          className="md:max-w-[800px] w-screen rounded-lg"
          src={WarehouseImage.src}
        />
        {!isEditing ? (
          <div>
            <h1 className="text-2xl font-bold mt-4">{warehouseByCode.name}</h1>
            <p className="text-sm text-gray-600">
              Code: {warehouseByCode.code}
            </p>
            <div className="grid sm:grid-cols-2 gap-2 mt-4">
              <p>
                <strong>City:</strong> {warehouseByCode.city}
              </p>
              <p>
                <strong>Space Available:</strong>{" "}
                {warehouseByCode.space_available} sqft
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
            <button
              onClick={handleEditClick}
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Edit Details
            </button>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit} className="mt-4">
            {/* Form fields go here */}
            {/* Repeat for other fields like code, city, etc. */}
            <Field>
              <Label>Name</Label>
              <TextInp defaultValue={warehouseByCode.name} name="name" />
            </Field>
            <Field>
              <Label>City</Label>
              <TextInp defaultValue={warehouseByCode.city} name="city" />
            </Field>
            <Field>
              <Label>Space Availabe (in sqft)</Label>
              <TextInp
                defaultValue={warehouseByCode.space_available}
                name="space_available"
              />
            </Field>
            <Field>
              <Label>Type</Label>
              <TextInp defaultValue={warehouseByCode.type} name="type" />
            </Field>
            <Field>
              <Label>Cluster</Label>
              <TextInp defaultValue={warehouseByCode.cluster} name="cluster" />
            </Field>
            <Field>
              <Label>Is registed?</Label>
              <input
                defaultChecked={warehouseByCode.is_registered}
                name="is_registered"
                type="checkbox"
              />
            </Field>
            <Field>
              <Label>Is live?</Label>
              <input
                defaultChecked={warehouseByCode.is_live}
                name="is_live"
                type="checkbox"
              />
            </Field>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Save Changes
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default WarehousePage;
