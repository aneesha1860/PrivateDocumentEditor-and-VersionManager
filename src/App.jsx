import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Login from "./Pages/Login";
import DocumentList from "./Pages/DocumentList";
import DocumentEditor from "./Pages/DocumentEditor";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />

        <Route
          path="/app"
          element={
            <DashboardLayout
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
            />
          }
        >
          <Route index element={<DocumentList />} />
          <Route path="edit" element={<DocumentEditor />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
