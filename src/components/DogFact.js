import React, { Component } from "react"
import facts from "../data/dogFacts"

class DogFact extends Component {

  constructor(props) {
    super()
    this.state = {
      fact: '',
      image: ''
    }
  }

  componentDidMount = () => {
    const randomFact = facts[Math.floor(Math.random() * facts.length)]
    this.setState({fact: randomFact.fact})
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(response => this.setState({image: response.message}))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <h2>{`Hi, ${this.props.name}! Here's your dog fact!`}</h2>
        <p>{`${this.state.fact}`}</p>
        <img src={this.state.image} alt="cute puppy"/>
        <button onClick={this.props.goBack}>back</button>
      </div>
    )
  }
}

export default DogFact