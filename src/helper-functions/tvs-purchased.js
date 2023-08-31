import {inventory} from "../constants/inventory.js";

let purchasedTvs = 0
export function purchasedUnits() {
    inventory.filter((totalTvsInStock) => {
            purchasedTvs = purchasedTvs + totalTvsInStock.originalStock
        }
    );
    return purchasedTvs;
}
export let totalPurchasedUnits = purchasedUnits();