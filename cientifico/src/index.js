import router from './routes';
window.addEventListener('load', router); //SPA, cuando esten todos los archivos cargados cargamos el router
window.addEventListener('hashchange', router); //listener para cambio de rutas