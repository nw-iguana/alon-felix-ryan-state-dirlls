import React, { Component } from 'react'

export class Bomb extends Component {

    state = {
        count: 0,
        outputWord: 'foo'
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState((prevState) => {
                return {
                    count: prevState.count + 1
                }
            });
        }, 1000);
        this.handleOutputWord()
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    handleOutputWord() {
        //if divisable by 2
        if(this.state.count === 8) { 
            clearInterval(this.interval);
            return 'BOOM!'
        }

        if(this.state.count % 2 === 0) {
            return 'Tick';

        } else {
            return 'Tock';
        }


    }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <p>{this.handleOutputWord()}</p>
      </div>
    )
  }
}

export default Bomb
