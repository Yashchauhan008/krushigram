import React, { useState } from 'react';

const BecomeSeller = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        propertyArea: '',
        propertyAreaUnit: 'Acres',
        street: '',
        city: '',
        state: '',
        pinCode: '',
        propertyPrice: '',
        soilType: '',
        isFarmable: false,
        sellerId: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Send formData to your backend API using fetch or axios
    };

    return (
        <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center p-6">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
                <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">Become a Seller</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Phone:</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Property Area:</label>
                        <input
                            type="number"
                            name="propertyArea"
                            value={formData.propertyArea}
                            onChange={handleChange}
                            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Area Unit:</label>
                        <select
                            name="propertyAreaUnit"
                            value={formData.propertyAreaUnit}
                            onChange={handleChange}
                            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                        >
                            <option value="Acres">Acres</option>
                            <option value="Hectares">Hectares</option>
                            <option value="Square Feet">Square Feet</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Street:</label>
                        <input
                            type="text"
                            name="street"
                            value={formData.street}
                            onChange={handleChange}
                            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">City:</label>
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">State:</label>
                        <input
                            type="text"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Pin Code:</label>
                        <input
                            type="text"
                            name="pinCode"
                            value={formData.pinCode}
                            onChange={handleChange}
                            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Property Price:</label>
                        <input
                            type="number"
                            name="propertyPrice"
                            value={formData.propertyPrice}
                            onChange={handleChange}
                            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Soil Type:</label>
                        <input
                            type="text"
                            name="soilType"
                            value={formData.soilType}
                            onChange={handleChange}
                            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                            required
                        />
                    </div>

                    <div className="mb-4 flex items-center">
                        <input
                            type="checkbox"
                            name="isFarmable"
                            checked={formData.isFarmable}
                            onChange={handleChange}
                            className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                        />
                        <label className="ml-2 block text-sm font-medium text-gray-700">Is the property farmable?</label>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Seller ID:</label>
                        <input
                            type="text"
                            name="sellerId"
                            value={formData.sellerId}
                            onChange={handleChange}
                            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-green-600 text-white font-semibold rounded-md shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    >
                        Register Now
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BecomeSeller;
