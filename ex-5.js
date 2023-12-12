let crimeRecordNames = [
  "Theodora Milenko",
  "Tinashe Benigno",
  "Mahalia Priyanka",
  "Maisy Sudhir",
];

function searchCrimeRecord(name) {
  if (crimeRecordNames.includes(name)) {
    //.includes() ซึ่งใช้เพื่อตรวจสอบว่า Array มีค่าที่ระบุหรือไม่
    return `${name} has a crime record !!!`;
  } else {
    return `${name} has no crime record.`;
  }
}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ไม่เคยมีประวัติเกี่ยวกับอาชญากรรม
console.log(searchCrimeRecord("Dilan Sandra")); //"Dilan Sandra has no crime record"

//ในกรณีที่เคยมีประวัติเกี่ยวกับอาชญากรรม
console.log(searchCrimeRecord("Tinashe Benigno")); //"Tinashe Benigno has crime record !!!"

//จุดประสงค์ของ Function นี้ คือนำ name ไปค้นหาในรายชื่อบุคคลที่มีประวัติอาชญากรรม crimeRecordNames
// ถ้า name ไม่มีประวัติอาชญากรรม ให้ Function แสดงผลลัพธ์ทางหน้าจอด้วย console.log() ในรูปแบบดังนี้ “<name> has no crime record.”
// ถ้า name มีประวัติอาชญากรรม ให้ Function แสดงผลลัพธ์ทางหน้าจอด้วย console.log() ในรูปแบบดังนี้ “<name> has a crime record !!!”
