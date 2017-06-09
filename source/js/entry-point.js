import Bootstrap from '../../node_modules/bootstrap/dist/js/bootstrap.min';
import AppConfig from './app/app';
import HeaderComponent from './app/directives/header/header';
import ContentComponents from './app/directives/content/content'

AppConfig.appConfig.masterController();

//Components
HeaderComponent.HeaderComponent(AppConfig.appConfig);
ContentComponents.ContentComponents(AppConfig.appConfig);

require('../../node_modules/bootstrap/dist/css/bootstrap.min.css');
require('../css/style.scss');
