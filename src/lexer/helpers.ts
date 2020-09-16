import {lexer} from "./Lexer";

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
            while (true) {
                const token = lexer_logger.lex();
                if (!token) {
                    break;
                }
                console.log(token);
            }
        }
    }

    private is_lexer_log_enabled = false;
    private is_parser_log_enabled = false;
}

export const logger = new CompilersLogger();
