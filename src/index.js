import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { Provider  } from 'react-redux';
import listApp from './store/reducers';

import 'purecss'

const store = createStore(listApp);

// ReactDOM.render(
//     <Provider store = { store }>
//         <App />
//     </Provider>,
//     document.getElementById('root')
// );
// registerServiceWorker();

const render = () => {
    
    ReactDOM.render(
        // <Provider store = { store }>
        <App store={store}/>,
        // <App/>
        // </Provider>,
        document.getElementById('root')
    );
};
store.subscribe(render);
render();
registerServiceWorker();