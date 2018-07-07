import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardList from './CardList';
import registerServiceWorker from './registerServiceWorker';
import {robots} from './Robots';

ReactDOM.render(
	<CardList robots={robots}/>, 
	document.getElementById('root'));
registerServiceWorker();
