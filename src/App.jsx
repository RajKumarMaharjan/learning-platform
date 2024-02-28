import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import Navbar from "./components/Navbar";
import Address from "./components/TopAddress/topAddress"
import Footer from "./Layout/Footer/ContactUs"
import ScrollButton from "./components/Button/ScrollTopBtn";

function App() {
  return (
    <BrowserRouter>
      <Address />
     <div className="sticky top-0 z-50 shadow-sm">
     <Navbar/>
     </div>
      <Routes />
      <Footer/>
      <ScrollButton/>
    </BrowserRouter>
  );
}

export default App;
