import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
//route
import { Routes } from './Routes'
import { Navbar } from './components/include/Navbar'
class App extends Component {
  render() {
    const { dataStore } = this.props
    return (
      <div id='App'>
        <Router>
          <Navbar />
          <Routes dataStore={dataStore}/>
        </Router>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dataStore: state
  }
}

export default connect(mapStateToProps)(App);
