import React from 'react';
import './App.css';
import {lexer} from "./lexer/Lexer";
import ReactJson from 'react-json-view';
const LuaParser = require("../src/lexer/generated_parser/LuaParser");

interface IAppState {
  statement:string | undefined;
  result:any
}

export default class App extends React.Component<{}, IAppState> {
  public state:IAppState = {
    statement: undefined,
    result: undefined
  }

  public constructor(props:any) {
    super(props);
    this.lua_parser = LuaParser;
    this.lua_parser.parser.lexer = lexer();
    this.lua_parser.parser.yy = require("../src/lexer/helpers/Parts");
  }

  public componentDidMount() {
    const example_exp = "c = (a + b) * d + 12";
    console.log(this.lua_parser.parse(example_exp));

    const example_func_def = "function fact (n)\n" +
        "      if n == 0 then\n" +
        "        return 1\n" +
        "      else\n" +
        "        return n * fact(n-1)\n" +
        "      end\n" +
        "    end";
    console.log(this.lua_parser.parse(example_func_def));

    const example_tables_empty = 'days = {"Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"}';

    console.log(this.lua_parser.parse(example_tables_empty));

    const example_for_loop = "list = nil\n" +
        "    for line in io.lines() do\n" +
        "      list = {next=list, value=line}\n" +
        "    end";

    console.log(this.lua_parser.parse(example_for_loop));

    const example = 'print("Hello")';
    console.log(this.lua_parser.parse(example));
  }

  public render() {
    console.log(this.state);
    return (
        <div className="main">
          <textarea value={this.state.statement} rows={30} onChange={this.onChange} onKeyDown={this.handleKeyDown}></textarea>
          {this.state.result &&
            <ReactJson
                src={this.state.result}
                style={{ fontSize: "20px" }}
                theme={"monokai"}
                indentWidth={2}
                iconStyle={"triangle"}
            />
          }
        </div>
    );
  }

  private onChange = (event:any) => {
    event.preventDefault();
    this.setState({ statement: event.target.value });
  }

  private handleKeyDown = (event:any) => {
    event.preventDefault();
    if (this.state.statement) {
      this.setState({ result: this.lua_parser.parse(this.state.statement) });
    }
  }

  private lua_parser:any;
}
