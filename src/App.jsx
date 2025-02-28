import { Route, Routes } from "react-router-dom";
// import "./App.css";
// import Splash from "./pages/onboarding/Splash";
import { AuthenticationRoutes } from "./routes/AuthenticationRoutes";
import { normalRoutes } from "./routes/normalRoutes";
import GlobalLayout from "./layouts/GlobalLayout";
import AuthLayout from "./layouts/AuthLayout";
function App() {
  return (
    <Routes>
      <Route path="" element={<GlobalLayout />}>
        {normalRoutes.map((route) => {
          return (
            <Route path={route?.url} element={route?.page} key={route?.title} />
          );
        })}
      </Route>

      <Route path="auth" element={<AuthLayout />}>
        {AuthenticationRoutes.map((route) => {
          return (
            <Route path={route?.url} element={route?.page} key={route?.title} />
          );
        })}
      </Route>
      <Route
        path="*"
        element={<div className="text-7xl">Page Not Found</div>}
      />
    </Routes>
  );
}

export default App;
