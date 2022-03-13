const products = [
    { name: 'laptop', price: '32000', brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: '7000', brand: 'iphone', color: 'golden' },
    { name: 'watch', price: '3000', brand: 'casio', color: 'yellow' },
    { name: 'sunglass', price: '300', brand: 'livon', color: 'black' },
    { name: 'camera', price: '9000', brand: 'canon', color: 'gray' }
];
const brands = products.map(product => product.brand);
console.log(brands);

products.forEach(product => console.log(product.color));

// filter

const cheap = products.filter(product => product.price <= 5000);
console.log(cheap);
const speciFicName = products.filter(product => product.name.includes('n'));
console.log(speciFicName);
// find
const special = products.find(product => product.price <= 5000);
console.log(special);