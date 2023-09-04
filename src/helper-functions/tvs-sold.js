import {inventory} from "../constants/inventory.js";
function soldTvs () {
    let soldUnits = 0;
    inventory.filter((totalSoldTv) => {
            soldUnits = soldUnits + totalSoldTv.sold
        }
    );
    return soldUnits;
}
export default soldTvs;