// import logo from './logo.svg';
// import './App.css';

import NavBar from "./Components/NavBar";
import Cards from './Components/Cards'
import { cards } from "./Data";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div style={{display:"flex", justifyContent:"center", alignItem:"center", marginTop:"10em"}}>
     {cards.map((i)=>{
      return(
        <Cards/>
      )
     })
     }
      </div>
    </div>
  );
}

export default App;
