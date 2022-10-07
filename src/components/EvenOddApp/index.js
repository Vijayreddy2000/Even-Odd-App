// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const randomNumber = this.getRandomNumber()

    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state

    const text = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="even-odd-app-container">
        <div className="card-container">
          <h1 className="count">Count {count}</h1>
          <p className="number-category">Count is {text}</p>
          <button
            type="button"
            className="increment_button"
            onClick={this.onIncrement}
          >
            Increment
          </button>
          <p className="note">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
