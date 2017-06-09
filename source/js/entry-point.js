import Bootstrap from './lib/bootstrap.min';
import AppConfig from './app/app';
import HeaderComponent from './app/directives/header/header';
import ContentComponents from './app/directives/content/content'


AppConfig.appConfig.masterController();

//Components
HeaderComponent.HeaderComponent(AppConfig.appConfig);
ContentComponents.ContentComponents(AppConfig.appConfig);


require('../css/lib/bootstrap.min.css');
require('../css/style.scss');
