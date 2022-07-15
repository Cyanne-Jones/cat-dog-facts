import React,  {Component} from "react"
import Form from "./components/Form"
import CatFact from "./components/CatFact"
import DogFact from "./components/DogFact"
import './App.css';

class App extends Component {
  
  constructor() {
    super()
    this.state = {
      name: '',
      neededFactType: ''
    }
  }

  getInfo = (info) => {
    this.setState(info)
  }

  render() {
    return (
      <div className="App">
        <h1>What kind of fact do you need?</h1>
        <Form getInfo={this.getInfo}/>
        {this.state.neededFactType === 'cat' ? <CatFact /> : null}
        {this.state.neededFactType === 'dog' ? <DogFact /> : null}
      </div>
    );
  }
}

export default App;
