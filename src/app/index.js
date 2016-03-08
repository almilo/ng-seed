import './index.css';
import 'expose?jQuery!jquery';
import 'angular';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'reflect-metadata';
import { bootstrap } from 'ng-forward';
import configModule from './config/index';
import AppComponent from './components/app-component';

bootstrap(AppComponent, [configModule.name]);
