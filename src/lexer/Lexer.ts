import {RESERVED} from "./helpers/LexerRules";
const Lexer = require("lex");

export function lexer() {
    const lexer = new Lexer();

    lexer.addRule(/(\'.*\')|(\".*\")/, function (lexeme:string) {
        // @ts-ignore
        this.yytext = lexeme;
        return "LITERAL_STRING";
    });

    lexer.addRule(/[a-zA-Z_][a-zA-Z_0-9]*/, function (lexeme:string) {
        // @ts-ignore
        this.yytext = lexeme;
        if (RESERVED[lexeme]) {
            return RESERVED[lexeme];
        }
        return "NAME";
    });

    lexer.addRule(/((\d*\.\d+)|(\d+\.\d*)|(\d+))/, function (lexeme:string) {
        // @ts-ignore
        this.yytext = +lexeme;
        return "NUMBER";
    });

    lexer.addRule(/\+/, function (lexeme:string) {
        // @ts-ignore
        this.yytext = lexeme;
        return "PLUS";
    });
    lexer.addRule(/\-/, function (lexeme:string) {
        // @ts-ignore
        this.yytext = lexeme;
        return "MINUS";
    });
    lexer.addRule(/\*/, function (lexeme:string) {
        // @ts-ignore
        this.yytext = lexeme;
        return "TIMES";
    });
    lexer.addRule(/\//, function (lexeme:string) {
        // @ts-ignore
        this.yytext = lexeme;
        return "DIVIDE";
    });
    lexer.addRule(/\%/, function (lexeme:string) {
        // @ts-ignore
        this.yytext = lexeme;
        return "MOD";
    });
    lexer.addRule(/\^/, function (lexeme:string) {
        // @ts-ignore
        this.yytext = lexeme;
        return "POW";
    });
    lexer.addRule(/\#/, function (lexeme:string) {
        // @ts-ignore
        this.yytext = lexeme;
        return "LENGTH";
    });
    lexer.addRule(/\&/, function (lexeme:string) {
        // @ts-ignore
        this.yytext = lexeme;
        return "BITWISE_AND";
    });
    lexer.addRule(/\~/, function (lexeme:string) {
        // @ts-ignore
        this.yytext = lexeme;
        return "BITWISE_NOT";
    });
    lexer.addRule(/\|/, function (lexeme:string) {
        // @ts-ignore
        this.yytext = lexeme;
        return "BITWISE_OR";
    });
    lexer.addRule(/\<\</, function (lexeme:string) {
        // @ts-ignore
        this.yytext = lexeme;
        return "LSHIFT";
    });
    lexer.addRule(/\>\>/, function (lexeme:string) {
        // @ts-ignore
        this.yytext = lexeme;
        return "RSHIFT";
    });
    lexer.addRule(/\/\//, function (lexeme:string) {
        // @ts-ignore
        this.yytext = lexeme;
        return "INT_DIVIDE";
    });
    lexer.addRule(/\=\=/, function (lexeme:string) {
        // @ts-ignore
        this.yytext = lexeme;
        return "EQUALS";
    });
    lexer.addRule(/\~\=/, function (lexeme:string) {
        // @ts-ignore
        this.yytext = lexeme;
        return "NOT_EQUALS";
    });
    lexer.addRule(/\<\=/, function (lexeme:string) {
        // @ts-ignore
        this.yytext = lexeme;
        return "LESS_OR_EQUAL";
    });
    lexer.addRule(/\>\=/, function (lexeme:string) {
        // @ts-ignore
        this.yytext = lexeme;
        return "GREATER_OR_EQUAL";
    });
    lexer.addRule(/\</, function (lexeme:string) {
        // @ts-ignore
        this.yytext = lexeme;
        return "LESS_THAN";
    });
    lexer.addRule(/\>/, function (lexeme:string) {
        // @ts-ignore
        this.yytext = lexeme;
        return "GREATER_THAN";
    });
    lexer.addRule(/\=/, function (lexeme:string) {
        // @ts-ignore
        this.yytext = lexeme;
        return "ASSIGNMENT";
    });
    lexer.addRule(/\(/, function (lexeme:string) {
        // @ts-ignore
        this.yytext = lexeme;
        return "ROUND_LBRACKET";
    });
    lexer.addRule(/\)/, function (lexeme:string) {
        // @ts-ignore
        this.yytext = lexeme;
        return "ROUND_RBRACKET";
    });
    lexer.addRule(/\{/, function (lexeme:string) {
        // @ts-ignore
        this.yytext = lexeme;
        return "LBRACE";
    });
    lexer.addRule(/\}/, function (lexeme:string) {
        // @ts-ignore
        this.yytext = lexeme;
        return "RBRACE";
    });
    lexer.addRule(/\[/, function (lexeme:string) {
        // @ts-ignore
        this.yytext = lexeme;
        return "SQUARE_LBRACKET";
    });
    lexer.addRule(/\]/, function (lexeme:string) {
        // @ts-ignore
        this.yytext = lexeme;
        return "SQUARE_RBRACKET";
    });
    lexer.addRule(/\:\:/, function (lexeme:string) {
        // @ts-ignore
        this.yytext = lexeme;
        return "DOUBLE_COLON";
    });
    lexer.addRule(/\;/, function (lexeme:string) {
        // @ts-ignore
        this.yytext = lexeme;
        return "SEMICOLON";
    });
    lexer.addRule(/\:/, function (lexeme:string) {
        // @ts-ignore
        this.yytext = lexeme;
        return "COLON";
    });
    lexer.addRule(/\,/, function (lexeme:string) {
        // @ts-ignore
        this.yytext = lexeme;
        return "COMMA";
    });
    lexer.addRule(/\.\.\./, function (lexeme:string) {
        // @ts-ignore
        this.yytext = lexeme;
        return "VARARG";
    });
    lexer.addRule(/\.\./, function (lexeme:string) {
        // @ts-ignore
        this.yytext = lexeme;
        return "CONCAT";
    });
    lexer.addRule(/\./, function (lexeme:string) {
        // @ts-ignore
        this.yytext = lexeme;
        return "DOT";
    });
    lexer.addRule(/\n+/, function () {});
    lexer.addRule(/\t/, function () {});
    lexer.addRule(/\s/, function () {});

    return lexer;
}




