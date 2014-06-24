var React = require('react')
  , App = require('./app.jsx')

var init_data = JSON.parse(document.querySelector('#init_data').textContent)

React.renderComponent(
    <App username={init_data.username} />,
    document.querySelector('.appcontainer')
  );

