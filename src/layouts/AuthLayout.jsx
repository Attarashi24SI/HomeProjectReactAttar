import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    // Keep only the auth content (the boxed card rendered by auth pages)
    // so child routes control the full auth page layout.
    return <Outlet />;
}
