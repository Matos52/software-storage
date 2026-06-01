import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import AccommodationDetailPage from "./pages/AccommodationDetailPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="accommodation/:slug"
          element={<AccommodationDetailPage />}
        />
      </Route>
    </Routes>
  );
}

export default App;