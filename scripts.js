// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

let eachName = 'Names:\n';
names.forEach((name) => {
eachName += name + '\n';
return name;
});
console.log(eachName);

let eachProvince = 'Provinces:\n';
provinces.forEach ((province) => {
eachProvince += province + '\n';
});
console.log(eachProvince);

names.forEach((name, index) => {
  const province = provinces[index];
  console.log(`${name}`,` (${province})` + '\n')
});

const upperCaseProvinces = provinces.map(province => province.toUpperCase());
console.log('provinces =',upperCaseProvinces);

const nameLength = names.map(name => name.length);
console.log(nameLength);

const sortedProvinces = provinces.slice().sort();
console.log('Sorted provinces:', sortedProvinces);