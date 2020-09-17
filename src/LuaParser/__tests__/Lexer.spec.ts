// @ts-ignore
import {lexer} from "../Lexer";
import {TokensTypes} from "../helpers/LexerRules";

describe("Lexer", () => {
    const Lexer = lexer();
    it("токенизирует выражение присвоения", () => {
        Lexer.setInput("result = (a + b) * 12 + (c / 3)");
        const result_tokens:{
            token: TokensTypes,
            lexeme: string
        }[] = [];
        while (true) {
            const token = Lexer.lex();
            const lexeme = Lexer.yytext;
            if (!token) {
                break;
            }
            result_tokens.push({ token, lexeme });
        }
        expect(result_tokens).toEqual([
            {
                "lexeme": "result",
                "token": "NAME"
            },
            {
                "lexeme": "=",
                "token": "ASSIGNMENT"
            },
            {
                "lexeme": "(",
                "token": "ROUND_LBRACKET"
            },
            {
                "lexeme": "a",
                "token": "NAME"
            },
            {
                "lexeme": "+",
                "token": "PLUS"
            },
            {
                "lexeme": "b",
                "token": "NAME"
            },
            {
                "lexeme": ")",
                "token": "ROUND_RBRACKET"
            },
            {
                "lexeme": "*",
                "token": "TIMES"
            },
            {
                "lexeme": 12,
                "token": "NUMBER"
            },
            {
                "lexeme": "+",
                "token": "PLUS"
            },
            {
                "lexeme": "(",
                "token": "ROUND_LBRACKET"
            },
            {
                "lexeme": "c",
                "token": "NAME"
            },
            {
                "lexeme": "/",
                "token": "DIVIDE"
            },
            {
                "lexeme": 3,
                "token": "NUMBER"
            },
            {
                "lexeme": ")",
                "token": "ROUND_RBRACKET"
            }
        ]);
    });

    it("токенизирует выражение с двумя строками - переменой значений местами, множественным присвоением", () => {
        Lexer.setInput("a, b = a+1, b+1, b+2 \n" +
            "a, b = 10, 2*x");
        const result_tokens:TokensTypes[] = [];
        while (true) {
            const token = Lexer.lex();
            if (!token) {
                break;
            }
            result_tokens.push(token);
        }
        expect(result_tokens).toEqual([
            "NAME",
            "COMMA",
            "NAME",
            "ASSIGNMENT",
            "NAME",
            "PLUS",
            "NUMBER",
            "COMMA",
            "NAME",
            "PLUS",
            "NUMBER",
            "COMMA",
            "NAME",
            "PLUS",
            "NUMBER",
            "NAME",
            "COMMA",
            "NAME",
            "ASSIGNMENT",
            "NUMBER",
            "COMMA",
            "NUMBER",
            "TIMES",
            "NAME"
        ]);
    });

    it("токенизирует вызов функции с названием и аргументами - переменная, строка", () => {
        Lexer.setInput("print(a, \"Hello world!\", 12");
        const result_tokens:TokensTypes[] = [];
        while (true) {
            const token = Lexer.lex();
            if (!token) {
                break;
            }
            result_tokens.push(token);
        }
        expect(result_tokens).toEqual([
            "NAME",
            "ROUND_LBRACKET",
            "NAME",
            "COMMA",
            "LITERAL_STRING",
            "COMMA",
            "NUMBER"
        ]);
    });

    it("токенизирует таблицу", () => {
        Lexer.setInput("days = {[0]=\"Sunday\", \"Monday\", \"Tuesday\", \"Wednesday\",\n" +
            "            \"Thursday\", \"Friday\", \"Saturday\"}");
        const result_tokens:TokensTypes[] = [];
        while (true) {
            const token = Lexer.lex();
            if (!token) {
                break;
            }
            result_tokens.push(token);
        }
        expect(result_tokens).toEqual([
            "NAME",
            "ASSIGNMENT",
            "LBRACE",
            "SQUARE_LBRACKET",
            "NUMBER",
            "SQUARE_RBRACKET",
            "ASSIGNMENT",
            "LITERAL_STRING",
            "COMMA",
            "LITERAL_STRING",
            "RBRACE"
        ]);
    });

    it("токенизирует массив for в локальной функции", () => {
        Lexer.setInput("local found = nil\n" +
            "    for i=1,a.n do\n" +
            "      if a[i] == value then\n" +
            "        found = i \n" +
            "        break\n" +
            "      end\n" +
            "    end\n" +
            "    print(found)");
        const result_tokens:TokensTypes[] = [];
        while (true) {
            const token = Lexer.lex();
            if (!token) {
                break;
            }
            result_tokens.push(token);
        }
        expect(result_tokens).toEqual([
            "LOCAL",
            "NAME",
            "ASSIGNMENT",
            "NIL",
            "FOR",
            "NAME",
            "ASSIGNMENT",
            "NUMBER",
            "COMMA",
            "NAME",
            "DOT",
            "NAME",
            "DO",
            "IF",
            "NAME",
            "SQUARE_LBRACKET",
            "NAME",
            "SQUARE_RBRACKET",
            "EQUALS",
            "NAME",
            "THEN",
            "NAME",
            "ASSIGNMENT",
            "NAME",
            "BREAK",
            "END",
            "END",
            "NAME",
            "ROUND_LBRACKET",
            "NAME",
            "ROUND_RBRACKET"
        ]);
    });

    it("токенизирует цикл while", () => {
        Lexer.setInput("    local i = 1\n" +
            "    while a[i] do\n" +
            "      print(a[i])\n" +
            "      i = i + 1\n" +
            "    end");

        const result_tokens:TokensTypes[] = [];
        while (true) {
            const token = Lexer.lex();
            if (!token) {
                break;
            }
            result_tokens.push(token);
        }
        expect(result_tokens).toEqual([
            "LOCAL",
            "NAME",
            "ASSIGNMENT",
            "NUMBER",
            "WHILE",
            "NAME",
            "SQUARE_LBRACKET",
            "NAME",
            "SQUARE_RBRACKET",
            "DO",
            "NAME",
            "ROUND_LBRACKET",
            "NAME",
            "SQUARE_LBRACKET",
            "NAME",
            "SQUARE_RBRACKET",
            "ROUND_RBRACKET",
            "NAME",
            "ASSIGNMENT",
            "NAME",
            "PLUS",
            "NUMBER",
            "END"
        ]);
    })

    it("токенизирует логическое выражение", () => {
        Lexer.setInput("a = false \n" +
            "b = ~a\n" +
            "result = a >= b");
        const result_tokens:TokensTypes[] = [];
        while (true) {
            const token = Lexer.lex();
            if (!token) {
                break;
            }
            result_tokens.push(token);
        }
        expect(result_tokens).toEqual([
            "NAME",
            "ASSIGNMENT",
            "FALSE",
            "NAME",
            "ASSIGNMENT",
            "BITWISE_NOT",
            "NAME",
            "NAME",
            "ASSIGNMENT",
            "NAME",
            "GREATER_OR_EQUAL",
            "NAME"
        ]);
    });

    it("токенизирует выражение if - else", () => {
        Lexer.setInput("if op == \"+\" then\n" +
            "      r = a + b\n" +
            "    elseif op == \"-\" then\n" +
            "      r = a - b\n" +
            "    elseif op == \"*\" then\n" +
            "      r = a*b\n" +
            "    elseif op == \"/\" then\n" +
            "      r = a/b\n" +
            "    else\n" +
            "      error(\"invalid operation\")\n" +
            "    end");
        const result_tokens:TokensTypes[] = [];
        while (true) {
            const token = Lexer.lex();
            if (!token) {
                break;
            }
            result_tokens.push(token);
        }
        expect(result_tokens).toEqual([
            "IF",
            "NAME",
            "EQUALS",
            "LITERAL_STRING",
            "THEN",
            "NAME",
            "ASSIGNMENT",
            "NAME",
            "PLUS",
            "NAME",
            "ELSEIF",
            "NAME",
            "EQUALS",
            "LITERAL_STRING",
            "THEN",
            "NAME",
            "ASSIGNMENT",
            "NAME",
            "MINUS",
            "NAME",
            "ELSEIF",
            "NAME",
            "EQUALS",
            "LITERAL_STRING",
            "THEN",
            "NAME",
            "ASSIGNMENT",
            "NAME",
            "TIMES",
            "NAME",
            "ELSEIF",
            "NAME",
            "EQUALS",
            "LITERAL_STRING",
            "THEN",
            "NAME",
            "ASSIGNMENT",
            "NAME",
            "DIVIDE",
            "NAME",
            "ELSE",
            "NAME",
            "ROUND_LBRACKET",
            "LITERAL_STRING",
            "ROUND_RBRACKET",
            "END"
        ]);
    })
});
