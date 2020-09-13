import React from 'react';
import './App.css';
import {LuaFrontend} from "./lexer/Lexer";


export default class App extends React.Component {
  public componentDidMount() {
    LuaFrontend();
  }

  public render() {
    return <div/>;
  }
}
