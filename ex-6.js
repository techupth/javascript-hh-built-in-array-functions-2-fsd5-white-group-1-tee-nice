const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
  const position = carCollection.indexOf(carBrand);

  if (position === -1) {
    carCollection.push(carBrand);
    return `New car collection is: ${carCollection.join(", ")}.`;
  } else {
    return `${carBrand} already exists in position ${
      position + 1
    } of the car collection.`;
  }
}

console.log(updateCarCollection("audi"));
console.log(updateCarCollection("toyota"));
