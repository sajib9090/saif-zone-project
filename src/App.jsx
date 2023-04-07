import { Outlet } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <div className="min-h-[calc(100vh-138px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
