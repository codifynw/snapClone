import React,  { Component } from 'react';

class CounterPractice extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    increment() {
        this.setState({
          count: this.state.count + 1
        });
      };
      
      decrement() {
        this.setState({
          count: this.state.count - 1
        });
      };    

    render() {
        return (
            <div>
                <button onClick={(e) => this.increment(e)} >Increase</button>
                <h1>Current Count: {this.state.count}</h1>
                <button onClick={(e) => this.decrement(e)} >Decrease</button>
            </div>
        );
    }
}

export default CounterPractice;