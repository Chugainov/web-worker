import React from 'react';
import dataSet from './items'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      result: 0,
      isLoader: false,
    };

    this._countAndRender = this._countAndRender.bind(this);
    this._whatIsFactorial = this._whatIsFactorial.bind(this);
  }

  _countAndRender() {
    this.setState({
      isLoader: true,
    });

    setTimeout(()=> {
      this.setState({
        items: dataSet,
        isLoader: false,
      });
      this._whatIsFactorial();
    }, 0);

  }

  _whatIsFactorial() {
    function sleep(milliSeconds) {
      var startTime = new Date().getTime();
      while (new Date().getTime() < startTime + milliSeconds);
    }
    sleep(10000);
  }

  render() {
    const {items, isLoader} = this.state;

    return (
      <div className="wrapper">
        <button className="button" onClick={this._countAndRender}>Сделать хорошо!</button>
        <div className="list">
          {
            items.map(item => {
              return (
                <div className="list__item" key={item._id}>
                  <span className="list__item-index">{item.index}</span>
                  <span className="list__item-name-first">{item.name.first}</span>
                  <span className="list__item-name-last">{item.name.last}</span>
                </div>
              );
            })
          }
        </div>
        {isLoader && <div className="sk-chasing-dots">
          <div className="sk-child sk-dot-1"/>
          <div className="sk-child sk-dot-2"/>
        </div>}
      </div>
    )
  }
}

export default App;
