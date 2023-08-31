import {totalSoldUnits} from "./tvs-sold.js";
import {totalPurchasedUnits} from "./tvs-purchased.js";

function calculateTvsInStock () {

    return totalPurchasedUnits - totalSoldUnits;
}
export let tvsInStock = calculateTvsInStock()