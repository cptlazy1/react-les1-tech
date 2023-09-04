import './App.css';
import {bestSellingTv} from "./constants/inventory.js";
import displayInfo from "./helper-functions/display-tv.js";
import soldTvs from "./helper-functions/tvs-sold.js";
import purchasedUnits from "./helper-functions/tvs-purchased.js";
import calculateTvsInStock from "./helper-functions/tvs-in-stock.js";
import priceFormatter from "./helper-functions/tv-price-formatter.js";
import displayScreenSize from "./helper-functions/display-screen-size.js";

function App() {
    return (

        <main className="page-container">
            <h1>TECH IT EASY Dashboard</h1>
            <section>
                <h2>Sales Overview</h2>
                <div className="dash-container">
                    <article className="dashboard-item box-1">
                        <h3>TV's purchased</h3>
                        <h2 className="units">{purchasedUnits()}</h2>
                    </article>
                    <article className="dashboard-item box-2">
                        <h3>TV's Sold</h3>
                        <h2 className="units">{soldTvs()}</h2>
                    </article>
                    <article className="dashboard-item box-3">
                        <h3>TV's in stock</h3>
                        <h2 className="units">{calculateTvsInStock()}</h2>
                    </article>
                </div>
            </section>
            <h2>Best selling TV</h2>
            <section className="display-box-container">

                <div className="tv-image">
                    <img src={bestSellingTv.sourceImg}/>
                </div>
                <div className="details-container" >
                    <h2>{displayInfo(bestSellingTv)}</h2>
                    <br/>
                    <h2>{priceFormatter(bestSellingTv)}</h2>
                    <br/>
                    <h4>{displayScreenSize(bestSellingTv)}</h4>
                    <br/>
                    <div className="options-container">
                        <img className="options-image" src="src/assets/check.png"/>
                        <p className="options">WiFi</p>
                        <img className="options-image" src="src/assets/minus.png"/>
                        <p className="options">Speech</p>
                        <img className="options-image" src="src/assets/check.png"/>
                        <p className="options">HDR</p>
                        <img className="options-image" src="src/assets/minus.png"/>
                        <p className="options">BlueTooth</p>
                        <img className="options-image" src="src/assets/minus.png"/>
                        <p className="options">AmbiLight</p>
                    </div>
                </div>
            </section>
            <section>
                <button onClick={console.log("Meest verkocht eerst!")}>Meest verkocht eerst</button>
                <button onClick={console.log("Goedkoopste eerst!")}>Goedkoopste eerst</button>
                <button onClick={console.log("Meest geschikt voor sport eerst!")}>Meest geschikt voor sport eerst</button>
            </section>
            {/*<div className="display-box-container">*/}
            {/*    <div className="display-box-contents">*/}
            {/*        <ul>*/}
            {/*            <div className="tv-details">*/}
            {/*                <h3>{displayInfo(bestSellingTv)}</h3>*/}
            {/*            </div>*/}
            {/*        </ul>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </main>

    )
}

export default App
