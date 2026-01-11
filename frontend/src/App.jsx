import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import UploadPage from "./pages/UploadPage";
import BackstoryPage from "./pages/BackstoryPage";
import CheckConsistencyPage from "./pages/CheckConsistencyPage";
const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/backstory" element={<BackstoryPage />} />
        <Route path="/check-consistency" element={<CheckConsistencyPage />} />
      </Routes>
    </>
  );
};
export default App;
