import React, { Component } from 'react';
import './App.css';
import "antd/dist/antd.css";
import { Input, Icon } from 'antd';
import TextLengthValidator from './Validation/TextLength';
import CharecterList from './CharComponent/CharComponent';
class App extends Component {
  state = {
    text: ''
  };
  textChangeHandler = (event) => {
    this.setState({ text: event.target.value });
  };
  deleteCharecterHandler = (key)=>{
    let text = this.state.text;
    text = text.substring(0,key) + text.substring(key+1,text.length);
    this.setState({text:text});
  }

  styleClass
  render() {
    return (
      <div className="App">
        <Input style={{ "width": "50%", "margin": "2rem" }} onChange={this.textChangeHandler} value={this.state.text}/>
        <p>{this.state.text.length} Charecters written
          <Icon style={{ "marginLeft": "2rem" }} type="edit" theme="twoTone" />
        </p>
        <TextLengthValidator text={this.state.text} />

        <CharecterList data={this.state.text} onDelete={this.deleteCharecterHandler}/>
      </div>
    );
  }
}

export default App;
