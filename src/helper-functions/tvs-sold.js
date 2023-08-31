import {inventory} from "../constants/inventory.js";

let soldUnits = 0
function soldTvs () {
    inventory.filter((totalSoldTv) => {
            soldUnits = soldUnits + totalSoldTv.sold
        }
    );
    return soldUnits;
}
export let totalSoldUnits = soldTvs();