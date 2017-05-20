import Bootstrap from './lib/bootstrap.min';
import AppConfig from './app/app';
import HeaderComponent from './app/directives/header/header';

//Components
HeaderComponent.HeaderComponent(AppConfig.appConfig.movieApp);


require('../css/lib/bootstrap.min.css');
require('../css/style.scss');
