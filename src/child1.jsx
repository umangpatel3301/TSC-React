import React, { Component } from 'react'

export class Child1 extends Component {
  render() {
    console.log("Child1");
    const { counter } = this.props
        return (
      <>
      <h4 style={{
        fontSize: "3rem",
        color: "Red",
        marginLeft: "2rem"
      }}>{counter}</h4>
      </>
    )
  }
}

export default Child1