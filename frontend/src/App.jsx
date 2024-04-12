import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "components/ui/loader/Loader";

const AuthRoutes = lazy(() => import("routes/Auth"));
const DashboardRoutes = lazy(() => import("routes/Dashboard"));

function App() {
  
  return (    
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes>
          <Route path="/auth/*" element={<AuthRoutes />} />
          <Route path="/*" element={<DashboardRoutes />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
