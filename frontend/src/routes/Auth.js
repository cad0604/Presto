import React, { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const routesMap = {
  "/login": lazy(() => import("pages/auth/Login")),
  "/register": lazy(() => import("pages/auth/Register")),
};

export default function AuthRoutes() {
  // const savedToken = ;

  if (JSON.parse(localStorage.getItem('user'))) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <Routes>
      <Route index element={<Navigate to="/auth/login" />} />
      {Object.entries(routesMap).map(([path, Component]) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  );
}
