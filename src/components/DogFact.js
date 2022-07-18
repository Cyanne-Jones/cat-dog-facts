import React, { Component } from "react"
import facts from "../data/dogFacts"
import '../App.css';

class DogFact extends Component {

  constructor(props) {
    super()
    this.state = {
      fact: '',
      image: '',
      loading: '',
    }
  }

  componentDidMount = () => {
    this.setState({loading: true})
    const randomFact = facts[Math.floor(Math.random() * facts.length)]
    this.setState({fact: randomFact.fact})
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(response => this.setState({image: response.message}))
      .catch(error => console.log(error))
      this.setState({loading: false})
  }

  render() {
    return (
      <div className="animal-fax">
        <h2 className="user-greeting">{`Hi, ${this.props.name}! Here's your dog fact!`}</h2>
        {this.state.loading && <p>loading...</p>}
        <div className="image-and-text">
        <img className="animal-photo" src={this.state.image} alt="cute puppy"/>
        <p className="fact-text">{`${this.state.fact}`}</p>
        </div>
        <button className="back-button" onClick={this.props.goBack}>back</button>
      </div>
    )
  }
}

export default DogFact