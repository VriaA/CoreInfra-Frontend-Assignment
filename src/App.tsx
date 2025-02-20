import { BrowserRouter, Routes, Route } from "react-router";
import Dashboard from "./pages/Dashboard";
import AppLayout from "./layouts/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route
            path="/"
            element={<Dashboard />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
