import { useState } from "react";

const CheckboxList = ({ items, onSelectionChange }) => {
  const [selectedItems, setSelectedItems] = useState(new Set());

  const toggleItem = (item) => {
    const newSelectedItems = new Set(selectedItems);
    if (newSelectedItems.has(item)) {
      newSelectedItems.delete(item);
    } else {
      newSelectedItems.add(item);
    }
    setSelectedItems(newSelectedItems);

    // Send the updated array back to the parent component
    if (onSelectionChange) {
      onSelectionChange(Array.from(newSelectedItems));
    }
  };

  return (
    <div>
      {items.map((item, index) => (
        <label key={index} className="block mb-2">
          <input
            type="checkbox"
            className="mr-2"
            checked={selectedItems.has(item)}
            onChange={() => toggleItem(item)}
          />
          {item}
        </label>
      ))}
    </div>
  );
};

export default CheckboxList;
