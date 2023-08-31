import './App.css';
import {totalSoldUnits} from "./helper-functions/tvs-sold.js";
import {totalPurchasedUnits} from "./helper-functions/tvs-purchased.js";
import {tvsInStock} from "./helper-functions/tvs-in-stock.js";
import {bestSellingTv} from "./constants/inventory.js";

function App() {
  return (
      <>
        <h1>TECH IT EASY Dashboard</h1>
        <h2>Sales Overview</h2>
        <p>TV's Sold</p>
            <p>{totalSoldUnits}</p>
        <p>TV's purchased</p>
            <p>{totalPurchasedUnits}</p>
        <p>TV's in stock</p>
            <p>{tvsInStock}</p>
        <p>Best selling TV</p>
            <p>{bestSellingTv.brand}</p>
            <p>{bestSellingTv.name}</p>
            <p>{bestSellingTv.type}</p>
            <p>{bestSellingTv.screenType}</p>

      </>
  )
}

export default App
