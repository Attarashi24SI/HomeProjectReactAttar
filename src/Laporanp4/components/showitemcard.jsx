import React from "react";

/* ================================
   VIEW SELECTOR (MODERN HEADER)
================================ */
export const ViewSelector = ({ view, setView }) => {
    return (
        <div className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 
                    text-white p-6 rounded-2xl shadow-lg mb-6 
                    flex flex-col md:flex-row md:items-center 
                    md:justify-between gap-4">
            <h1 className="text-2xl font-bold tracking-wide">
                Dashboard
            </h1>

            <div className="flex items-center gap-3">
                <label className="font-medium">Tampilan:</label>
                <select
                    value={view}
                    onChange={(e) => setView(e.target.value)}
                    className="bg-white/90 backdrop-blur-md text-gray-800 
                     px-4 py-2 rounded-lg shadow-md border border-white/30 
                     focus:outline-none focus:ring-2 focus:ring-white"
                >
                    <option value="guest">Guest View</option>
                    <option value="admin">Admin View</option>
                </select>
            </div>
        </div>
    );
};

/* ================================
   SEARCH & FILTER COMPONENT
================================ */
export const SearchFilter = ({
    search,
    setSearch,
    category,
    setCategory,
    availability,
    setAvailability,
    categories,
}) => {
    return (
        <div className="bg-white/70 backdrop-blur-md p-5 rounded-2xl shadow-md mb-6">
            <div className="grid md:grid-cols-3 gap-4">
                {/* Search */}
                <input
                    type="text"
                    placeholder="Search services..."
                    className="border border-gray-200 p-3 rounded-lg w-full 
                     focus:ring-2 focus:ring-indigo-500 outline-none"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                {/* Category Filter */}
                <select
                    className="border border-gray-200 p-3 rounded-lg w-full 
                     focus:ring-2 focus:ring-indigo-500 outline-none"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="">All Categories</option>
                    {categories.map((cat, index) => (
                        <option key={index} value={cat}>
                            {cat}
                        </option>
                    ))}
                </select>

                {/* Availability Filter */}
                <select
                    className="border border-gray-200 p-3 rounded-lg w-full 
                     focus:ring-2 focus:ring-indigo-500 outline-none"
                    value={availability}
                    onChange={(e) => setAvailability(e.target.value)}
                >
                    <option value="">All Availability</option>
                    <option value="Available">Available</option>
                    <option value="Unavailable">Unavailable</option>
                </select>
            </div>
        </div>
    );
};

/* ================================
   SERVICE CARD (GUEST VIEW)
================================ */
export const ServiceCard = ({ service }) => {
    const fallbackImage =
        "https://via.placeholder.com/400x300?text=No+Image";

    return (
        <div
            className="bg-white rounded-2xl overflow-hidden shadow-md 
                 hover:shadow-2xl hover:-translate-y-2 
                 transition-all duration-300"
        >
            <div className="relative">
                <img
                    src={service.image}
                    alt={service.name}
                    onError={(e) => {
                        e.target.src = fallbackImage;
                    }}
                    className="w-full h-48 object-cover"
                />
                <span
                    className="absolute top-3 right-3 
                     bg-indigo-600 text-white text-xs 
                     px-3 py-1 rounded-full shadow"
                >
                    ⭐ {service.rating}
                </span>
            </div>

            <div className="p-5">
                <h2 className="text-lg font-semibold text-gray-800">
                    {service.name}
                </h2>
                <p className="text-indigo-600 text-sm font-medium">
                    {service.category}
                </p>

                <div className="mt-2 text-sm text-gray-500">
                    <p>
                        <span className="font-medium">Provider:</span>{" "}
                        {service.provider.name}
                    </p>
                    <p>
                        <span className="font-medium">Location:</span>{" "}
                        {service.provider.location}
                    </p>
                </div>

                <div className="mt-4 flex justify-between items-center">
                    <p className="text-lg font-bold text-indigo-600">
                        ${service.price}
                    </p>
                    <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${service.schedule.availability === "Available"
                            ? "bg-green-100 text-green-600"
                            : "bg-red-100 text-red-600"
                            }`}
                    >
                        {service.schedule.availability}
                    </span>
                </div>
            </div>
        </div>
    );
};

/* ================================
   SERVICE TABLE (ADMIN VIEW)
================================ */
export const ServiceTable = ({ services }) => {
    return (
        <div className="bg-white p-5 rounded-2xl shadow-md overflow-x-auto">
            <table className="min-w-full">
                <thead>
                    <tr className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white">
                        <th className="py-3 px-4 text-left">Image</th>
                        <th className="py-3 px-4 text-left">Name</th>
                        <th className="py-3 px-4 text-left">Category</th>
                        <th className="py-3 px-4 text-left">Price</th>
                        <th className="py-3 px-4 text-left">Provider</th>
                        <th className="py-3 px-4 text-left">Availability</th>
                    </tr>
                </thead>
                <tbody>
                    {services.map((service) => (
                        <tr
                            key={service.id}
                            className="border-b hover:bg-gray-50 transition"
                        >
                            <td className="p-3">
                                <img
                                    src={service.image}
                                    alt={service.name}
                                    className="w-16 h-16 object-cover rounded-lg"
                                />
                            </td>
                            <td className="p-3 font-medium text-gray-800">
                                {service.name}
                            </td>
                            <td className="p-3">{service.category}</td>
                            <td className="p-3 font-semibold text-indigo-600">
                                ${service.price}
                            </td>
                            <td className="p-3">{service.provider.name}</td>
                            <td className="p-3">
                                <span
                                    className={`px-3 py-1 rounded-full text-xs font-medium ${service.schedule.availability === "Available"
                                        ? "bg-green-100 text-green-600"
                                        : "bg-red-100 text-red-600"
                                        }`}
                                >
                                    {service.schedule.availability}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

/* ================================
   GUEST VIEW
================================ */
export const GuestView = ({ services }) => {
    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
            ))}
        </div>
    );
};

/* ================================
   ADMIN VIEW
================================ */
export const AdminView = ({ services }) => {
    return <ServiceTable services={services} />;
};