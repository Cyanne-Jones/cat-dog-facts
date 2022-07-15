import React,  {Component} from "react"

class Form extends Component {

  constructor(props) {
    super()
    this.state = {
      name: '',
      dogOrCat:'',
      error: ''
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name] : event.target.value})
  }

  submit = (event) => {
    event.preventDefault();
    if(!this.state.name) {
      this.setState({error: 'Please enter your name 🥺'});
    } else {
      this.props.getInfo({name: this.state.name, neededFactType: this.state.dogOrCat});
      this.setState({name : '', dogOrCat: '', error: ''});
    }
  }

  handleRadio = (event) => {
    this.setState({dogOrCat: event.target.id})
  }

  render() {
    return (
      <form>
        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          name="name"
          value={this.state.name} 
          placeholder="name" 
          onChange={this.handleChange}
          required>
        </input>
        <h2>dog or cat fact?</h2>
        <label htmlFor="dog">dog</label>
        <input type="radio" 
          name="dogOrCat" 
          id="dog" 
          value={this.state.dogOrCat} 
          checked={this.state.dogOrCat === 'dog'}
          onChange={this.handleRadio}></input>
        <label htmlFor="cat">cat</label>
        <input 
          type="radio" 
          name="dogOrCat" 
          id="cat" 
          value={this.state.dogOrCat}
          checked={this.state.dogOrCat === 'cat'}
          onChange={this.handleRadio}></input>
        <button onClick={this.submit}>submit</button>
        {this.state.error && <p>{`${this.state.error}`}</p>}
      </form>
    )
  }
}

export default Form