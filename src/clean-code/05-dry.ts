
type Size = '' | 'S' | 'M' | 'XL';

class Product {

  constructor(
    public name: string = '',
    public price: number = 0,
    // public inStock: boolean = false,
    public size: Size = '',
  ) {}

  isProductReady(): boolean {
    // this => hace la referencia a la instancia de la clase
    for (const key in this) {
      // console.log(key); // muestra los nombre de las variables (name, price, size)
      // console.log(key, typeof this[key]); // muetra los tipos (name string, number price, size string)

      switch ( typeof this[key] ) {
        case 'string':
            // if ( ( this[key] + '' ).length <= 0 ) throw Error(`${ key } is empty`); // Resolver tipo con javascript
            // if ( (<string><unknown>this[key]).length <= 0 ) throw Error(`${ key } is empty`); // Resolver tipo con typescript
            if ( (<string>this[key]).length <= 0 ) throw Error(`${ key } is empty`);
          break;
        case 'number':
            if ( (<number>this[key]) <= 0 ) throw Error(`${ key } is zero`);
          break;
      
        default:
          throw Error(`${ typeof this[key] } is not supported`);;
      }

    }

    return true;
  }

  toString() {
    // Utilizando DRY
    // Si no esta listo
    if ( !this.isProductReady() ) return;

    return `${ this.name }, (${ this.price }), ${ this.size }`;
  }

}

(() => {

  // const bluePants = new Product();
  // const bluePants = new Product('Blue Large Pants', 10, 'M');
  const bluePants = new Product('Blue Large Pants', 10, 'XL');
  console.log( bluePants.toString() );

})();