import { useState } from "react";

const MinSlider = ({ min, max, onChange }) => {
  const [value, setValue] = useState(min);
  const handleChange = (event) => {
    const value = Number(event.target.value);
    setValue(value);

    if (onChange) {
      onChange(value); // Pass the current value to the parent component's onChange handler
    }
  };

  return (
    <>
      More than
      <input type="number" className="border-lg mb-2 mt-1 py-1 px-2 border border-gray-700" value={value} onInput={handleChange} />
      <input
        type="range"
        min={min}
        max={max}
        className="w-full"
        onChange={handleChange}
      />
    </>
  );
};

export default MinSlider;
