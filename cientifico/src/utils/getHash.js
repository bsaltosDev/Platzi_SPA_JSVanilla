const getHash = () => 
    location.hash.slice(1).toLocaleLowerCase().split('/')[1] //obtener valor de ruta '/' ['', 'valor', '']
    || '/'; //sino encuentra devolver a la ruta principal
export default getHash;