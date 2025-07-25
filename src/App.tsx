import { Suspense } from "react";
import "./styles/index.css"; 
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import DefaultLayout from "./Layout/DefaultLayout";
import Loader from "./components/common/Loader";
import ProtectedRoute from "./components/auth/PretectedRoute";
import { routes } from "./routes";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ChangePassword from "./pages/ChangePassword";
import Signup2 from "./pages/Signup2";


function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/signup2" element={<Signup2 />} />
        <Route path="/watco" element={<DefaultLayout />}>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <ProtectedRoute>
                  <Suspense fallback={<Loader />}>
                    <route.component />
                  </Suspense>
                </ProtectedRoute>
              }
            />
          ))}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
