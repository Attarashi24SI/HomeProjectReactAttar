import React from "react";
import { Link, useLocation } from "react-router-dom";

const routeNames = {
    "": "Home",
    customers: "Customers",
    orders: "Orders",
};

const Breadcrumb = () => {
    const location = useLocation();
    const paths = location.pathname.split("/").filter(Boolean);

    return (
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
            <Link to="/" className="hover:text-white">
                Home
            </Link>

            {paths.map((path, index) => {
                const to = "/" + paths.slice(0, index + 1).join("/");
                const isLast = index === paths.length - 1;

                return (
                    <React.Fragment key={to}>
                        <span>›</span>

                        {isLast ? (
                            <span className="text-white font-medium">
                                {routeNames[path] || path}
                            </span>
                        ) : (
                            <Link to={to} className="hover:text-white">
                                {routeNames[path] || path}
                            </Link>
                        )}
                    </React.Fragment>
                );
            })}
        </div>
    );
};

export default Breadcrumb;