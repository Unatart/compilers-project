// @ts-ignore
import {lexer} from "../Lexer";
import {table_tree} from "./__expected__/table.tree";
import {function_tree} from "./__expected__/function.tree";
import {for_tree} from "./__expected__/for.tree";
import {while_tree} from "./__expected__/while.tree";
import {account_tree} from "./__expected__/account.tree";
const LuaParser = require("../generated_parser/LuaParser");

describe("Parser", () => {
    const lua_parser = LuaParser;
    lua_parser.parser.lexer = lexer();
    lua_parser.parser.yy = require("../helpers/Parts");

    it("парсит пример с таблицей", () => {
        const example_tables_empty = 'a = {}\n' +
            '    k = "x"\n' +
            '    a[k] = 10\n' +
            '    a[20] = "great"\n' +
            '    print(a["x"]) ';
        expect(lua_parser.parse(example_tables_empty)).toEqual(table_tree);
    });

    it("парсит пример с определением и вызовом функции", () => {
        const example_tables_empty = "function add (a)\n" +
            "      local sum = 0\n" +
            "      for i,v in ipairs(a) do\n" +
            "        sum = sum + v\n" +
            "      end\n" +
            "      return sum\n" +
            "    end\n" +
            "add(b)";
        expect(lua_parser.parse(example_tables_empty)).toEqual(function_tree)
    });

    it("парсит пример с циклом for", () => {
        const example_tables_empty = "list = nil\n" +
            "    for line in io.lines() do\n" +
            "      list = {next=list, value=line}\n" +
            "    end";
        const result = lua_parser.parse(example_tables_empty);
        expect(JSON.stringify(result)).toEqual(JSON.stringify(for_tree));
    });

    it("парсит пример с циклом while", () =>  {
        const example_tables_empty = "local i = 1\n" +
            "    while a[i] do\n" +
            "      print(a[i])\n" +
            "      i = i + 1\n" +
            "    end";
        expect(lua_parser.parse(example_tables_empty)).toEqual(while_tree)
    });

    it("парсит пример с классом Account", () => {
        const example_tables_empty = 'Account = {balance = 0}\n' +
            '\n' +
            'function Account:new (o)\n' +
            '  o = o or {}\n' +
            '  setmetatable(o, self)\n' +
            '  self.__index = self\n' +
            '  return o\n' +
            'end\n' +
            '\n' +
            '\n' +
            'function Account:deposit (v)\n' +
            '  self.balance = self.balance + v\n' +
            'end\n' +
            '\n' +
            '\n' +
            'function Account:withdraw (v)\n' +
            '  if v > self.balance then error"insuficient funds" end\n' +
            '  self.balance = self.balance - v\n' +
            'end\n' +
            '\n' +
            'a = Account:new()\n' +
            'print(a.balance)' +
            'a:deposit(1000.00)\n' +
            'a:withdraw(100.00)\n' +
            'print(a.balance)   ';
        const result = lua_parser.parse(example_tables_empty);
        expect(JSON.stringify(result)).toEqual(JSON.stringify(account_tree));
    });
});
