const resolveRoutes = (route) => {
    if (route.length <= 3) { //no hay mas de n numero de caracteres 100 personajes
      let validRoute = route === '/' ? route : '/:id';
      return validRoute;
    }
    return `/${route}`; //retornar template literal con id de ruta del personaje
  };
  
  export default resolveRoutes;