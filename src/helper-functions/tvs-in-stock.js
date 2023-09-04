import purchasedUnits from "./tvs-purchased.js";
import soldTvs from "./tvs-sold.js";


function calculateTvsInStock () {

    return purchasedUnits() - soldTvs();
}
export default calculateTvsInStock;