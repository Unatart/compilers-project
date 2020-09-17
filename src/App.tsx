import React from 'react';
import './App.css';
import {lexer} from "./LuaParser/Lexer";
import ReactJson from 'react-json-view';
const LuaParser = require("../src/LuaParser/generated_parser/LuaParser");

interface IAppState {
  statement:string;
  result:any;
}

export default class App extends React.Component<{}, IAppState> {
  public state:IAppState = {
    statement: "a = (b + c) * 12 - 54",
    result: undefined
  }

  public constructor(props:any) {
    super(props);
    this.lua_parser = LuaParser;
    this.lua_parser.parser.lexer = lexer();
    this.lua_parser.parser.yy = require("../src/LuaParser/helpers/Parts");
  }

  public render() {
    return (
        <div className="main">
          <textarea className="code" value={this.state.statement} rows={30} onChange={this.onChange} onKeyUp={this.handleKeyUp}/>
          {this.state.result &&
            <ReactJson
                src={this.state.result}
                style={{ fontSize: "18px" }}
                theme={"bright:inverted"}
                indentWidth={4}
                iconStyle={"triangle"}
                collapsed={2}
            />
          }
        </div>
    );
  }

  private onChange = (event:any) => {
    event.preventDefault();
    this.setState({ statement: event.target.value });
  }

  private handleKeyUp = (event:any) => {
    event.preventDefault();
    if (event.keyCode === 13) {
      if (this.state.statement) {
        this.setState({ result: this.lua_parser.parse(this.state.statement) });
      }
    }
  }

  private lua_parser:any;
}
