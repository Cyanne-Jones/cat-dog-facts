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
    this.setState({name: '', neededFactType: ''});
    this.setState(info);
  }

  goBack = () => {
    this.setState({name: '', neededFactType: ''});
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">What kind of fact do you need?</h1>
        {!this.state.name && <Form getInfo={this.getInfo}/>}
        {this.state.neededFactType === 'cat' && <CatFact name={this.state.name} goBack={this.goBack}/>}
        {this.state.neededFactType === 'dog' && <DogFact name={this.state.name} goBack={this.goBack}/>}
      </div>
    );
  }
}

export default App;
