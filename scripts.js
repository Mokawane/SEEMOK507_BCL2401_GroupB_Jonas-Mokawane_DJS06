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

const filteredProvinces = provinces.filter(province => !province.includes('Cape'));
console.log('Remaining provinces:', filteredProvinces);
console.log('Count of remaining provinces:', filteredProvinces.length);

const nameWithS = names.map(name => {
  return name.split('').some(char => char.toLowerCase() === 's');
});
console.log('Boolean array (contains "S"):', nameWithS);

const namesToProvinces = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log(namesToProvinces);

console.log(products.filter(({ product }) => product.length <= 5));

console.log(products
  .filter(({ price }) => !isNaN(price) && price !== '' && price !== ' ')
  .map(({ price }) => Number(price))
  .reduce((total, price) => total + price, 0)
);

console.log(products.reduce((acc, { product }) => acc + product, ''));

console.log(products.reduce((acc, { product }) => acc + product, ''));

const validPrices = products.filter(({ price }) => !isNaN(price) && price !== '' && price !== ' ').map(({ price }) => Number(price));
console.log(`Highest: ${Math.max(...validPrices)}. Lowest: ${Math.min(...validPrices)}.`);

console.log(Object.entries(products).reduce((acc, [index, { product, price }]) => {
  acc[index] = { name: product, cost: price };
  return acc;
}, {}));


