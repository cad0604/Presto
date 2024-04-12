import React, { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const routesMap = {
  "/dashboard": lazy(() => import("pages/Dashboard/Index"))
};

export default function CustomerRoutes() {
  
  if (!JSON.parse(localStorage.getItem('user'))) {
    return <Navigate to="/auth/login" />;
  }

  return (
    <Routes>
      <Route index element={<Navigate to="/dashboard" />} />
      {Object.entries(routesMap).map(([path, Component]) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  );
}
