import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css';
import './css/index.css';

import Header from './layout/Header';
import Footer from './layout/Footer.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login_id: 0,
      title: 'InSession'
    };
  }
  // make ajax calls, like document.ready
  componentDidMount() {
    console.log('COMPONENT MOUNTED');
  }

  render() {
    return (
      <React.Fragment>
        <Header {...this.state} />
        <section id="content" className="app-content">
          <p>Body</p>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
