import React, { useState } from "react";

const AddProperty = () => {
  const [formData, setFormData] = useState({
    propertyArea: "",
    propertyAreaUnit: "Hectares",
    address:"",
    propertyPrice: "",
    soilType: "",
    isFarmable: false,
    sellerId: "66b7578acfa0f88a21139026", // You might want to change this dynamically
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();

    form.append("propertyArea", formData.propertyArea);
    form.append("propertyAreaUnit", formData.propertyAreaUnit);
    form.append("address", formData.address);
    form.append("propertyPrice", formData.propertyPrice);
    form.append("soilType", formData.soilType);
    form.append("isFarmable", formData.isFarmable);
    form.append("sellerId", formData.sellerId);

    try {
      const response = await fetch("https://krushigram-backend.onrender.com/property/", {
        method: "POST",
        body: form,
      });

      if (!response.ok) {
        throw new Error("Failed to add property");
      }

      // Reset the form
      setFormData({
        propertyArea: "",
        propertyAreaUnit: "Hectares",
        address: "",
        propertyPrice: "",
        soilType: "",
        isFarmable: false,
        sellerId: "66b7578acfa0f88a21139026",
      });

      alert("Property added successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to add property.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Add New Property</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Property Area:</label>
            <input
              type="number"
              name="propertyArea"
              value={formData.propertyArea}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Property Area Unit:</label>
            <select
              name="propertyAreaUnit"
              value={formData.propertyAreaUnit}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              required
            >
              <option value="Hectares">Hectares</option>
              <option value="Acres">Acres</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Property Price:</label>
            <input
              type="number"
              name="propertyPrice"
              value={formData.propertyPrice}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Soil Type:</label>
            <input
              type="text"
              name="soilType"
              value={formData.soilType}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="isFarmable"
              checked={formData.isFarmable}
              onChange={handleChange}
              className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
            />
            <label className="ml-2 block text-sm font-medium text-gray-700">Farmable</label>
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-green-600 text-white font-semibold rounded-md shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Add Property
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProperty;
