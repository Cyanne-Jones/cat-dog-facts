import React, { Component } from "react"
import '../App.css';

class CatFact extends Component {

  constructor(props) {
    super()
    this.state = {
      fact: '',
      image: '',
      loading: false
    }
  }

  componentDidMount = () => {
    this.setState({loading: true})
    fetch('https://catfact.ninja/fact')
      .then(response => response.json())
      .then(response => this.setState({fact: response.fact}))
      .catch(error => console.log(error))
    fetch('https://aws.random.cat/meow?ref=apilist.fun')
      .then(response => response.json())
      .then(response => this.setState({image: response.file}))
      .catch(error => console.log(error))
    this.setState({loading: false})
  }

  render() {
    return (
      <div className="animal-fax">
        <h2 className="user-greeting">{`Hi, ${this.props.name}! Here's your cat fact!`}</h2>
        {this.state.loading && <p>loading...</p>}
        <div className="image-and-text">
        <img className="animal-photo" src={this.state.image} alt="cute kitty"/>
        <p className="fact-text" >{`${this.state.fact}`}</p>
        </div>
        <button className="back-button" onClick={this.props.goBack}>back</button>
      </div>
    )
  }
}

export default CatFact