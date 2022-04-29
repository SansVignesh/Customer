import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

window.renderCustomers = (containerId, history) => {
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId),
  );
};

window.unmountCustomers = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

if (!document.getElementById('Customers-container')) {
  ReactDOM.render(<App />, document.getElementById('root'));
}

