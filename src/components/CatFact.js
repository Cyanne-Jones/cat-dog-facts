import React, { Component } from "react"

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
      <div>
        <h2>{`Hi, ${this.props.name}! Here's your cat fact!`}</h2>
        {this.state.loaging && <p>loading...</p>}
        <p>{`${this.state.fact}`}</p>
        <img src={this.state.image} alt="cute kitty"/>
        <button onClick={this.props.goBack}>back</button>
      </div>
    )
  }
}

export default CatFact