import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
    const [formData, setFormData] = useState({
        productName: '',
        description: '',
        price: '',
        category: 'Fruits',
        image: null
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'file' ? files[0] : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formDataToSend = new FormData();
        formDataToSend.append('productName', formData.productName);
        formDataToSend.append('description', formData.description);
        formDataToSend.append('price', formData.price);
        formDataToSend.append('category', formData.category);
        if (formData.image) {
            formDataToSend.append('image', formData.image);
        }

        try {
            const response = await axios.post('YOUR_API_ENDPOINT_HERE', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Product added successfully:', response.data);
            // Optionally, handle success, e.g., show a success message or redirect
        } catch (error) {
            console.error('Error adding product:', error);
            // Optionally, handle errors, e.g., show an error message
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
                <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">Add Product</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Product Name:</label>
                        <input
                            type="text"
                            name="productName"
                            value={formData.productName}
                            onChange={handleChange}
                            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Description:</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                            rows="4"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Price:</label>
                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Category:</label>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                        >
                            <option value="Fruits">Fruits</option>
                            <option value="Vegetables">Vegetables</option>
                            <option value="Grains">Grains</option>
                            <option value="Seeds">Seeds</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Product Image:</label>
                        <input
                            type="file"
                            name="image"
                            onChange={handleChange}
                            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-green-600 text-white font-semibold rounded-md shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    >
                        Add Product
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
