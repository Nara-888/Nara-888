function catalogue(input) {

    class Product {
        constructor (productName, productPrice ){
            this.productName = productName;
            this.productPrice = productPrice;
        }
    }
    let catalogue = [];
    for (let i = 0; i < input.length; i++) {
        let currentProduct = input[i].split(' : ');
        let productName = currentProduct[0];
        let productPrice = Number(currentProduct[1]);
        let product = new Product (productName, productPrice);
        catalogue.push(product);

    }
    
    catalogue.sort(function(a, b) {
        let nameA = a.productName.toUpperCase(); 
        let nameB = b.productName.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
    });
    let firstChar = '';
    for (let el of catalogue) {
        
        if (el.productName.charAt(0).toUpperCase() === firstChar) {
            console.log(`${el.productName}: ${el.productPrice}`)
        }else{
            firstChar = el.productName.charAt(0).toUpperCase();
            console.log(firstChar);
            console.log(`${el.productName}: ${el.productPrice}`)
        }
    }

}
catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ])
    

    