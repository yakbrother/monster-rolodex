import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Grru',
          id: '89ghd389y',
        },
        {
          name: 'Crobb',
          id: '45e234243m43',
        },
        {
          name: 'Lukkk',
          id: '12pr03948e',
        },

        {
          name: 'Arrn',
          id: '62t8498y36',
        },
      ]
    };
  }

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((monster) => {
            return <h1 key={monster.id}>{monster.name}</h1>;
          })
        }
      </div >
    );
  }
}

export default App;
