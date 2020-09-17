import {lexer} from "./Lexer";
import {TokensTypes} from "./helpers/LexerRules";

class CompilersLogger {
    public parserLog(statement:string, objects?:any[]) {
        if (this.is_parser_log_enabled) {
            if (objects) {
                console.log(statement, objects);
            } else {
                console.log(statement);
            }
        }
    }

    public lexerLog(statement:string) {
        if (this.is_lexer_log_enabled) {
            const lexer_logger = lexer();
            lexer_logger.setInput(statement);
            const result_tokens:{
                token: TokensTypes,
                lexeme: string
            }[] = [];
            while (true) {
                const token = lexer_logger.lex();
                const lexeme = lexer_logger.yytext;
                if (!token) {
                    break;
                }
                result_tokens.push({ token, lexeme });
            }
            console.log(result_tokens);
        }
    }

    private is_lexer_log_enabled = false;
    private is_parser_log_enabled = false;
}

export const logger = new CompilersLogger();
