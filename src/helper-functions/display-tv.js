function displayInfo(television) {
    let brand = television.brand;
    let type = television.type;
    let name = television.name;
    return brand + " " + type + " - " + name;
}

export default displayInfo;