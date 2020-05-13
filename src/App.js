import React , { Component } from 'react';

import './App.css';
import Header from './components/Header'
//import Selected from './components/Customize';
import Customize from './components/Customize';
import Summary from './components/Summary';


// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  updateFeature = (feature, newValue) =>{
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {

    const total = Object.keys(this.state.selected).reduce(
      (acc, curr) => acc + this.state.selected[curr].cost,
      0
    );

    return (
      <div className="App">
        <Header/>
        <main>
          <Customize features={this.props.features} selected={this.state.selected} currency={USCurrencyFormat} updateFeature={this.updateFeature} />
          <Summary currency={USCurrencyFormat} selected={this.state.selected} total={total} />
        </main>
      </div>
    );
  }
}

export default App;
