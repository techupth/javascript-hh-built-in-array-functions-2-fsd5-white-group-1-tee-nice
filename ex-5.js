let crimeRecordNames = [
  "Theodora Milenko",
  "Tinashe Benigno",
  "Mahalia Priyanka",
  "Maisy Sudhir",
];

function searchCrimeRecord(name) {
  const index = crimeRecordNames.indexOf(name);

  if (index !== -1) {
    console.log(`${name} has a crime record !!!`);
  } else {
    console.log(`${name} has no crime record.`);
  }
}

// ทดสอบ Function
searchCrimeRecord("Theodora Milenko");
searchCrimeRecord("Tinashe Benigno");
searchCrimeRecord("Mahalia Priyanka");
searchCrimeRecord("Maisy Sudhir");
searchCrimeRecord("Daisy Johnson");
searchCrimeRecord("Dominic Toresto");
