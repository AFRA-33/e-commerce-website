import React from "react";
import Navbar from "./Navbar";
import "./index.css";
import Catigori from "./Catigory";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "./Slider"
import Cards from "./Cards";
import Products from "./Products";
import { FoodBankRounded } from "@mui/icons-material";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Catigori />
      {/* <button className="btn btn-info">afra siddiqui</button> */}
      <Slider/>
      <div style={{display:"flex",justifyContent:"space-between"}}>
      <h4 className="p-4">More reason to shop</h4>
      <h4 className="p-4">Mega deals of the days</h4>
      <h4 className="p-4">In focus</h4>

      </div>
      <div className="d-flex">
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      </div>
      <div className="d-flex">
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      </div>
      <div className="d-flex">
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      </div>
      <div className="d-flex">
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      </div>
      <div className="d-flex">
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      </div>
      <img src="https://f.nooncdn.com/mpcms/EN0001/assets/7f9ef85c-e278-440f-9dda-a2873a872a5e.jpg"  
      className="m-3" width={"100%"}/>
      <h4 className="m-3">Trending Images in Electronics</h4>

      <img src="https://f.nooncdn.com/mpcms/EN0001/assets/ec03d76e-eabb-4623-a6cc-0e455abf491f.gif"
       className="m-3" width={"100%"}/>
      <h1>Beauty</h1>
      <Products/>
      <img src="https://f.nooncdn.com/mpcms/EN0001/assets/8e4d7b89-40cf-4e18-a38d-c4f74927f5d4.jpg"
       className="m-3" width={"1150px"}/>
      <Footer/>
    </div>
  );
}

export default App;
{/* <h4>We are always here to help you!</h4>
<p>Reach out to us through any of these support channels</p> */}
