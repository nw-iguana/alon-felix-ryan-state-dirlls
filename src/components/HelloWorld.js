import React, { Component } from 'react'

export class HelloWorld extends Component {

    state = {
        who: 'world'
    }

    handleButtons(e) {
        this.setState({
            who: e.target.textContent
        })
    }

  render() {
    return (
      <div>
        <p>Hello {this.state.who}</p>
        <button onClick={(e) => this.handleButtons(e)}>World</button>
        <button onClick={(e) => this.handleButtons(e)}>Friend</button>
        <button onClick={(e) => this.handleButtons(e)}>React</button>
      </div>
    )
  }
}

export default HelloWorld
