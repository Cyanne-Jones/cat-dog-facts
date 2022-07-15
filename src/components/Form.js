import React,  {Component} from "react"

class Form extends Component {

  constructor(props) {
    super()
    this.state = {
      name: '',
      dogOrCat:''
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name] : event.target.value})
  }

  submit = (event) => {
    event.preventDefault();
    this.props.getInfo({name: this.state.name, neededFactType: this.state.dogOrCat});
    this.setState({name : '', dogOrCat: ''});
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
          onChange={this.handleChange}>
        </input>
        <h2>dog or cat fact?</h2>
        <label htmlFor="dog">dog</label>
        <input type="radio" name="dogOrCat" id="dog" value="dog" onChange={this.handleChange}></input>
        <label htmlFor="cat">cat</label>
        <input type="radio" name="dogOrCat" id="cat" value="cat" onChange={this.handleChange}></input>
        <button onClick={this.submit}>submit</button>
      </form>
    )
  }
}

export default Form