import { HashRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "../pages/main";

function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default MyRoutes;
