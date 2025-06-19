import { Outlet } from "react-router";

export const App: React.FC = () => {
  return (
    <div>
      <h1>Welcome to Acme Sprocket Co</h1>
      <Outlet />
    </div>
  );
};
