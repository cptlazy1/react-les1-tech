import {inventory} from "../constants/inventory.js";


export function purchasedUnits() {
    let purchasedTvs = 0;
    inventory.filter((totalTvsInStock) => {
            purchasedTvs += totalTvsInStock.originalStock
        }
    );
    return purchasedTvs;
}
export default purchasedUnits;