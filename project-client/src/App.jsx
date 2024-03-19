import { AppRouterProvider } from "./routes";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <AppRouterProvider>
      <Outlet />
    </AppRouterProvider>
  );
}

export default App;
