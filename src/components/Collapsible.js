import { useState } from "react";

const Collapsible = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-700 rounded-lg m-2">
      <button
        onClick={toggle}
        className="font-bold text-lg text-left w-full px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 focus:outline-none rounded-lg"
      >
        {title} <small>{isOpen ? <>&#9650;</> : <>&#9660;</>}</small>
      </button>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } p-4 border-t border-gray-700`}
      >
        {children}
      </div>
    </div>
  );
};

export default Collapsible;
