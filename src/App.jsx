import { Component, createRef, PureComponent, useState } from 'react'
import Child1 from './child1';
import Child2 from './child2';
// const App = (props) => { 
  // return ( <div>
  {/* <h1>{props.name}</h1> */}
  {/* <h2>Software Engineer</h2> */}
  {/* </div>) */}
// }

class App extends PureComponent {
   
  constructor(props) {
    super(props);
    this.state = {
        name: `Hello ${props.name1}`,
        // name1: `Hello ${props.name2}`,
        counter: 0,
        data: null
    }

    this.h1Ref = createRef()
  }


  increase = () => {
    this.setState(({counter}, props) => { return { counter: counter + 1 }})
  }

  decearse = () => {
    this.setState(({counter}, props) => { return { counter: counter - 1 }})
  }

  static getDerivedStateFromProps = (props, state) => {
    console.log("getderved", state);
    return {
      name1 : `Hello ${props.name2}`
    }
  }

  async componentDidMount() {
    this.h1Ref.current.style.color = "blue";
   try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')  
    const json = await res.json();
    this.setState({data: json})
   } catch (error) {
    console.log(error.message);
   }
}

  render() {
    console.log("Render");
    // const { name1 } = this.props
    const {name, counter, name1, data} = this.state
    return (
      <>
      <h1 ref={this.h1Ref}>{name}</h1>
      <h2>Software Engineer</h2>
      <button type='button' onClick={ () => this.setState( {name: name1}) }>hello</button>
      <button type='button' onClick={this.increase}>Increase</button>
      <h4 style={{
        color: "red",
        fontSize: "3rem",
        marginLeft: "2rem"
      }}>{counter}</h4>
      <h3>{data?.title}</h3>
      <button type='button' onClick={this.decearse}>Decrease</button>
      <Child1 counter = {counter}/>
      <Child2 />
      </>
    )
  }
}

export default App