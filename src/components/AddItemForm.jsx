import React, { useState, useContext } from "react";
import { ItemContext } from "../Context/ItemContext";

const AddItemForm = () => {
  const { addItem } = useContext(ItemContext);

  const [newItem, setNewItem] = useState({
    name: "",
    quantity: "",
    category: "",
  });

  const [popupMessage, setPopupMessage] = useState(""); // State for popup message

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Check if the input is quantity and validate negative numbers
    if (name === "quantity" && value < 0) {
      setPopupMessage("Quantity cannot be negative!");
      setNewItem((prev) => ({ ...prev, [name]: "" })); // Reset quantity field
      return;
    }

    setNewItem((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddItem = async (e) => {
    e.preventDefault();
    if (newItem.name && newItem.quantity && newItem.category) {
      await addItem(newItem);
      setNewItem({ name: "", quantity: "", category: "" });
    } else {
      alert("Please fill out all fields before adding an item.");
    }
  };

  const closePopup = () => {
    setPopupMessage("");
  };

  return (
    <>
      {/* Popup Message */}
      {popupMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-red-600 font-semibold">{popupMessage}</p>
            <button
              onClick={closePopup}
              className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* Add Item Form */}
      <form
        onSubmit={handleAddItem}
        className="mb-8 p-6 rounded-xl shadow-xl border border-gray-300"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-5">Add a New Item</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div>
            <label htmlFor="name" className="block text-gray-800 font-medium mb-2">
              Item Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={newItem.name}
              onChange={handleInputChange}
              placeholder="E.g., Bananas"
              className="w-full p-3 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div>
            <label htmlFor="quantity" className="block text-gray-800 font-medium mb-2">
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={newItem.quantity}
              onChange={handleInputChange}
              placeholder="E.g., 5"
              className="w-full p-3 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div>
            <label htmlFor="category" className="block text-gray-800 font-medium mb-2">
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              value={newItem.category}
              onChange={handleInputChange}
              placeholder="E.g., Fruits"
              className="w-full p-3 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-5 w-full bg-purple-800 text-white py-3 rounded-md shadow-lg hover:bg-purple-900 focus:outline-none"
        >
          Add Item
        </button>
      </form>
    </>
  );
};

export default AddItemForm;
