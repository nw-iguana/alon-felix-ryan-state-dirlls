import React, {Component} from 'react'

class RouletteGun extends Component {

  constructor(props) {
    super(props)
    this.state = {
      chamber: null,
      spinningTheChamber: false
    }

    this.handleTrigger = this.handleTrigger.bind(this);
  }

  handleTrigger() {
    this.setState({
      spinningTheChamber: true
    })

    this.timeOut = setTimeout(() => {
      let randomNum =  Math.floor(Math.random() * 9);
      console.log('random Num: ', randomNum);
      this.setState({
        chamber: randomNum,
        spinningTheChamber: false
      })
    }, 2000);
  }

  handleOutcome() {
    if (this.state.spinningTheChamber) {
      return 'spinning the chamber and pulling the trigger!'
    }

    if (this.state.chamber === this.props.bulletInChamber) {
      return 'BANG!!!'
    }

    return 'Your Safe!'
  }

  componentWillUnmount() {
    clearTimeout(this.timeOut);
  }

  render() {
    return (
      <div>
        <p>{this.handleOutcome()}</p>
        <button onClick={this.handleTrigger}>Pull the Trigger!</button>
      </div>   
    )
  }
}

export default RouletteGun