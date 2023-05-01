// import axios from 'axios';
// Eliminamos axios

// Uso de principio open / close
export class HttpClient {

  // async get( url: string ) {
  //   const { data, status } = await axios.get(url);
  //   // console.log({ status });
  //   return { data, status };
  // }

  async get( url: string ) {
    const resp = await fetch(url);
    const data = await resp.json();

    return { data, status: resp.status };
  }

}

/**
 * Dectección de violaciones (OPC)
 * 
 * Cambios normales afectan nuestra clase o módulo.
 * Cuando una clase o módulo afecta muchas capas. (Presentación, almacenamiento, etc.) 
 */