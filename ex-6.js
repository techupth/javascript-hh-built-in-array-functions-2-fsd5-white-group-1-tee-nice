const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
  const indexOfCarBrand = carCollection.indexOf(carBrand);

  if (indexOfCarBrand === -1) {
    // ยี่ห้อรถไม่มีอยู่ใน carCollection
    carCollection.push(carBrand);
    return `new car collection is: ${carCollection.join(", ")}.`;
  } else {
    // ยี่ห้อรถมีอยู่ใน carCollection
    const position = indexOfCarBrand + 1; // ตำแหน่งเริ่มจาก 1 (ไม่ใช่ Index)
    return `${carBrand} already exists in position ${position} of the car collection.`;
  }
}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("audi")); //new car collection is : toyota,fiat,honda,bmw,audi.

//ในกรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("toyota")); //toyota has already existed in the 1 position of car collection.
