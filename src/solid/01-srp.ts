(() => {

  interface Product { 
    id:   number;
    name: string;
  }

  // Centralizar peticiones
  class ProductService {

    // El API
    // private httpAdapter: Object;

    getProduct( id: number ) {
      console.log('Producto: ',{ id, name: 'OLED Tv' });
    }

    saveProduct( product: Product ) {
      console.log('Guardando en base de datos', product );
    }

  }

  class Mailer {

    private masterEmail: string = 'angel@google.com';

    sendEmail( emailList: string[], template: 'to-clients' | 'to-admins' ) {
      console.log('Enviando correo a los clientes', template);
    }

  }
  
  // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
  // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
  class ProductBloc {

    private productService: ProductService;
    private mailer: Mailer;

    constructor(productService: ProductService, mailer: Mailer) {
      this.productService = productService;
      this.mailer = mailer;
    }
  
    loadProduct( id: number ) {
      // Realiza un proceso para obtener el producto y retornarlo
      this.productService.getProduct( id );
    }

    saveProduct( product: Product ) {
      // Realiza una petición para salvar en base de datos 
      this.productService.saveProduct( product );
    }

    notifyClients() {
      this.mailer.sendEmail(['luis@google.com'], 'to-clients');
    }

  }

  class CartBloc {

    private itemsInCart: Object[] = [];

    onAddToCart( productId: number ) {
      // Agregar al carrito de compras
      console.log('Agregando al carrito ', productId );
    }

  }

  const productService = new ProductService();
  const mailer = new Mailer();
  
  const productBloc = new ProductBloc( productService, mailer );
  const cartBloc = new CartBloc();

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: 'OLED TV' });
  productBloc.notifyClients();

  cartBloc.onAddToCart(10);

})();

/**
 * Detectar violaciones
 * 
 * Nombres de clases y modulos demasiado genericos
 * Cambios en el codigo suele afectar la clase o modulo
 * La clase involucra multiples capas
 * Numbero elevado de importaciones
 * Cantidad elevada de metodos publicos
 * Excesivo numero de lineas de codigo
 */