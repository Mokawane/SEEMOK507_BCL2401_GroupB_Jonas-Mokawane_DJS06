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

/**
 * Logging each name from names array
 */
let eachName = 'Names:\n';
names.forEach((name) => {
eachName += name + '\n';
return name;
});
console.log(eachName);

/**
 * Logging each province from provinces array
 */
let eachProvince = 'Provinces:\n';
provinces.forEach ((province) => {
eachProvince += province + '\n';
});
console.log(eachProvince);

/**
 * Logging each name with its corresponding province
 */
names.forEach((name, index) => {
  const province = provinces[index];
  console.log(`${name}`,` (${province})` + '\n')
});

/**
 * Logging out all province names in uppercased format
 */
const upperCaseProvinces = provinces.map(province => province.toUpperCase());
console.log('provinces =',upperCaseProvinces);

/**
 * Logging out a new array containing the length of each name
 */
const nameLength = names.map(name => name.length);
console.log(nameLength);

/**
 * Logging out provinces in alphabetical order
 */
const sortedProvinces = provinces.slice().sort();
console.log('Sorted provinces:', sortedProvinces);

/**
 * Logging out a new new array of provinces with all provinces containing "Cape"
 * being filtered out and log out the count of remaining provinces
 */
const filteredProvinces = provinces.filter(province => !province.includes('Cape'));
console.log('Remaining provinces:', filteredProvinces);
console.log('Count of remaining provinces:', filteredProvinces.length);

/**
 * Logging out a boolean array indicating if each name contains the letter 'S'
 */
const nameWithS = names.map(name => {
  return name.split('').some(char => char.toLowerCase() === 's');
});
console.log('Boolean array (contains "S"):', nameWithS);

/**
 * Logging out a transformed names array into an object mapping names 
 * to their respective provinces
 */
const namesToProvinces = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log(namesToProvinces);

/**
 * Logging out fedilter products with names shorter than or equal to 5 characters
 */
console.log(products.filter(({ product }) => product.length <= 5));

/**
 * Logging out filtered out products without prices, convert string prices to numbers,
 *  and calculate the total price using reduce
 */
console.log(products
  .filter(({ price }) => !isNaN(price) && price !== '' && price !== ' ')
  .map(({ price }) => Number(price))
  .reduce((total, price) => total + price, 0)
);
/**
 * Logging out all product names concatenated into a single string
 */
console.log(products.reduce((acc, { product }) => acc + product, ''));

/**
 * Find the highest and lowest prices among products and log the result formatted as "Highest: X. Lowest: Y."
 */
const validPrices = products.filter(({ price }) => !isNaN(price) && price !== '' && price !== ' ').map(({ price }) => Number(price));
console.log(`Highest: ${Math.max(...validPrices)}. Lowest: ${Math.min(...validPrices)}.`);

/**
 * Recreate the products array as an object with keys 'name' and 'cost', maintaining their original values, and logged out the result
 */
console.log(Object.entries(products).reduce((acc, [index, { product, price }]) => {
  acc[index] = { name: product, cost: price };
  return acc;
}, {}));


