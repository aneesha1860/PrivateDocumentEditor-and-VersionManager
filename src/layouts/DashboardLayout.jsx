import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

export default function DashboardLayout({ isAuthenticated, setIsAuthenticated }) {
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/login");
        }
    }, [isAuthenticated, navigate]);

    const handleLogout = () => {
        setIsAuthenticated(false);
        navigate("/login");
    };

    if (!isAuthenticated) return null;

    return (
        <div className="dashboard-container">
            <aside className="dashboard-sidebar">
                <h3>Sidebar</h3>
                <button onClick={handleLogout}>Logout</button>
            </aside>
            <main className="dashboard-main">
                <div className="dashboard-header">Dashboard</div>
                <Outlet />
            </main>
        </div>
    );
}
