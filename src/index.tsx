import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import 'index.css';
import Router from './components/rotas/routes';


ReactDOM.render(
	<React.StrictMode>
		<Router />
	</React.StrictMode>,
	document.getElementById('root')
);
