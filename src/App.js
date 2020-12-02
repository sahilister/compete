import React, { Component } from 'react'
import Spectre from 'spectre.css'
import Text from './components/test/Text'
import getText from './components/test/getText'
import Speed from './components/layout/Speed'

const initialState = {
  text: getText(),
  userInput: '',
  symbols: 0,
  sec: 0,
  started: false,
  finished: false
}

class App extends Component {
  state = initialState;

  onReload = () => {
    this.setState(initialState)
  }

  onUserInputChange = (e) => {
    const v = e.target.value;
    this.setTimer(v);
    this.onFinish()
    this.setState({
      userInput: v,
      symbols: this.countCorrectSymbols(v)
    })
  }

  onFinish(userInput) {
    if (userInput === this.state.text) {
      clearInterval(this.interval);
      this.setState({
        finished: true
      })
    }
  }

  countCorrectSymbols(userInput) {
    const text = this.state.text.replace(' ', '');
    return userInput.replace(' ', '').split('').filter((s, i) => s === text[i]).length;
  }

  setTimer() {
    if (!this.state.started) {
      this.setState({started: true});
      this.interval = setInterval(() => {
        this.setState(prevProps => {
          return {sec: prevProps.sec + 1}
        })
      }, 1000)
    }
  }

  render() {
    return (
      <div className="container grid-lg">
        <h1>compete</h1>
        <div className="form-group">
          <Text text={this.state.text} userInput={this.state.userInput}/>
          <br />
          <div className="row">
            <textarea
              value = {this.state.userInput}
              onChange = {this.onUserInputChange}
              className="form-input input-sm"
              rows="3"
              placeholder="Start Typing..."
              readOnly={this.state.finished}
              >
            </textarea>
            <br />
            <div>
              <Speed sec={this.state.sec} symbols={this.state.symbols}/>
              <button class="btn" onClick={this.onReload}>Reload</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
