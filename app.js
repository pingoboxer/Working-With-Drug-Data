

const drugs = [

    { id: 1, name: "Amoxicillin", category: "Antibiotic", dosageMg: 500, isPrescriptionOnly: true, stock: 120, manufacturer: "Pfizer" },
   
    { id: 2, name: "Paracetamol", category: "Analgesic", dosageMg: 1000, isPrescriptionOnly: false, stock: 200, manufacturer: "GSK" },
   
    { id: 3, name: "Ibuprofen", category: "Analgesic", dosageMg: 400, isPrescriptionOnly: false, stock: 150, manufacturer: "Bayer" },
   
    { id: 4, name: "Chloroquine", category: "Antimalarial", dosageMg: 250, isPrescriptionOnly: true, stock: 80, manufacturer: "Sanofi" },
   
    { id: 5, name: "Ciprofloxacin", category: "Antibiotic", dosageMg: 500, isPrescriptionOnly: true, stock: 70, manufacturer: "Pfizer" },
   
    { id: 6, name: "Loratadine", category: "Antihistamine", dosageMg: 10, isPrescriptionOnly: false, stock: 160, manufacturer: "Novartis" },
   
    { id: 7, name: "Metformin", category: "Antidiabetic", dosageMg: 850, isPrescriptionOnly: true, stock: 140, manufacturer: "Teva" },
   
    { id: 8, name: "Artemether", category: "Antimalarial", dosageMg: 20, isPrescriptionOnly: true, stock: 60, manufacturer: "Roche" },
   
    { id: 9, name: "Aspirin", category: "Analgesic", dosageMg: 300, isPrescriptionOnly: false, stock: 180, manufacturer: "Bayer" },
   
    { id: 10, name: "Omeprazole", category: "Antacid", dosageMg: 20, isPrescriptionOnly: true, stock: 90, manufacturer: "AstraZeneca" },
   
    { id: 11, name: "Azithromycin", category: "Antibiotic", dosageMg: 250, isPrescriptionOnly: true, stock: 50, manufacturer: "Pfizer" },
   
    { id: 12, name: "Cetirizine", category: "Antihistamine", dosageMg: 10, isPrescriptionOnly: false, stock: 110, manufacturer: "Novartis" },
   
    { id: 13, name: "Insulin", category: "Antidiabetic", dosageMg: 100, isPrescriptionOnly: true, stock: 30, manufacturer: "Novo Nordisk" },
   
    { id: 14, name: "Artemisinin", category: "Antimalarial", dosageMg: 100, isPrescriptionOnly: true, stock: 50, manufacturer: "GSK" },
   
    { id: 15, name: "Codeine", category: "Analgesic", dosageMg: 30, isPrescriptionOnly: true, stock: 20, manufacturer: "Teva" },
   
    { id: 16, name: "Vitamin C", category: "Supplement", dosageMg: 500, isPrescriptionOnly: false, stock: 300, manufacturer: "Nature's Bounty" },
   
    { id: 17, name: "Ranitidine", category: "Antacid", dosageMg: 150, isPrescriptionOnly: false, stock: 90, manufacturer: "Sanofi" },
   
    { id: 18, name: "Doxycycline", category: "Antibiotic", dosageMg: 100, isPrescriptionOnly: true, stock: 40, manufacturer: "Pfizer" },
   
    { id: 19, name: "Tramadol", category: "Analgesic", dosageMg: 50, isPrescriptionOnly: true, stock: 45, manufacturer: "Teva" },
   
    { id: 20, name: "Folic Acid", category: "Supplement", dosageMg: 5, isPrescriptionOnly: false, stock: 250, manufacturer: "Nature's Bounty" }
   
   ];


// A function that gets all drugs that are antibiotics.
const antibiotics = drugs.filter((drug) => drug.category === "Antibiotic");
// Test
console.log(antibiotics);


// A function that returns an array of drug names in lowercase.
const drugNames = drugs.map((drug) => drug.name.toLocaleLowerCase());
// Test
console.log(drugNames);


// A function that accepts a category and returns all drugs under that category.
const findDrugByCategory = (category) => {
    return drugs.filter((drug) => drug.category.toLocaleLowerCase() === category.toLocaleLowerCase());
}
// Test
console.log(findDrugByCategory("Analgesic"));


// Logs each drug’s name and its manufacturer.
drugs.forEach((drug) => {
    console.log("Drug: " + drug.name + ", Manufacturer: " + drug.manufacturer);
});


// Returns all drugs that require a prescription.
const prescriptionOnlyDrugs = drugs.filter((drug) => {
    return drug.isPrescriptionOnly == true;
});
// Test
console.log(prescriptionOnlyDrugs);


// Returns a new array, and prints each item in the format: "Drug: [name] - [dosageMg]mg".
drugs.map((drug) => {
    return { name: drug.name, dosageMg: drug.dosageMg };
}).forEach((drug) => {
    console.log(`Drug: ${drug.name} - ${drug.dosageMg}mg`);
});


// A function that returns all drugs with a stock less than 50.
const drugStockLessThanFifty = drugs.filter((drug) => {
    return drug.stock < 50;
});
// Test
console.log(drugStockLessThanFifty);

// A function that returns all drugs that are not prescription-only.
const drugsRequiringNoPrescription = drugs.filter((drug) => {
    return drug.isPrescriptionOnly == false;
});
// Test
console.log(drugsRequiringNoPrescription);


// A function that takes a manufacturer name and returns how many drugs are from that company
const manufacturerDrugCount = (manufacturer) => {
    return drugs.filter((drug) => drug.manufacturer.toLocaleLowerCase() === manufacturer.toLocaleLowerCase()).length;
};
// Test
console.log(manufacturerDrugCount("Pfizer"));


// Using forEach() to count how many drugs are Analgesics.
let analgesicCount = 0;
drugs.forEach((drug) => drug.category === "Analgesic" ? analgesicCount++ : null);

// Test
console.log("Number of Analgesics: " + analgesicCount);