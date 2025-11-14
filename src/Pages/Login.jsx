import { useNavigate } from "react-router-dom";

export default function Login({ setIsAuthenticated }) {
    const navigate = useNavigate();

    const handleLogin = () => {
        setIsAuthenticated(true);
        navigate("/app");
    };

    return (
        <div className="login-wrapper">
            <div className="login-box">
                <h1>Login</h1>
                <button onClick={handleLogin}>Sign In</button>
            </div>
        </div>
    );
}
