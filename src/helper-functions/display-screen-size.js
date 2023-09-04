function displayScreenSize(televisions) {

    return televisions.availableSizes.map((size) => {
        let inchesInCm = size * 2.54;
        return size + " inch (" + Math.round(inchesInCm) + " cm) | ";
    });
}

export default displayScreenSize;
