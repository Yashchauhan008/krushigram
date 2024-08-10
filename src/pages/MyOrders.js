import React from "react";

const MyOrders = () => {
  // Sample orders data
  const orders = [
    {
      orderId: "ORD12345",
      date: "2024-08-10",
      items: [
        { name: "Organic Wheat Seeds", quantity: 5, price: 150 },
        { name: "Fertilizer - 10kg", quantity: 1, price: 200 },
      ],
      totalAmount: 950,
      status: "Delivered",
    },
    {
      orderId: "ORD12346",
      date: "2024-08-08",
      items: [
        { name: "Pesticide - 500ml", quantity: 2, price: 120 },
        { name: "Irrigation Kit", quantity: 1, price: 1200 },
      ],
      totalAmount: 1440,
      status: "Shipped",
    },
    // Add more orders here
  ];

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <h1 className="text-3xl font-bold text-green-800 mb-6">My Orders</h1>
      <div className="space-y-6">
        {orders.map((order) => (
          <div
            key={order.orderId}
            className="bg-white shadow-lg rounded-lg p-6"
          >
            <div className="flex justify-between mb-4">
              <div>
                <h2 className="text-xl font-semibold">
                  Order ID: {order.orderId}
                </h2>
                <p className="text-gray-600">Date: {order.date}</p>
              </div>
              <div
                className={`text-lg font-bold ${
                  order.status === "Delivered"
                    ? "text-green-600"
                    : "text-yellow-600"
                }`}
              >
                {order.status}
              </div>
            </div>
            <div className="mb-4">
              <h3 className="font-medium text-gray-800">Items Ordered:</h3>
              <ul className="list-disc pl-5 text-gray-700">
                {order.items.map((item, index) => (
                  <li key={index}>
                    {item.name} - {item.quantity} x ₹{item.price}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold text-gray-800">
                Total Amount: ₹{order.totalAmount}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
