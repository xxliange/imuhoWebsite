import pcRoute from './pc';
import mobRoute from './mob';

export default window.screen.width > 1024 ? pcRoute : mobRoute;