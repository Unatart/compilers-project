import React from 'react';
import './App.css';
import {lexer} from "./lexer/Lexer";
import {createParser} from "./lexer/Parser";
const LuaParser = require("../src/lexer/generated_parser/LuaParser");


export default class App extends React.Component {
  public componentDidMount() {
    createParser();
    LuaParser.parser.lexer = lexer();
    LuaParser.parser.yy = require("../src/lexer/helpers/Parts");

    const example1 = "c = a + b";

    console.log(LuaParser.parse(example1));

    const example = 'print("enter a number")';

    console.log(LuaParser.parse(example));
  }

  public render() {
    return <div/>;
  }
}
