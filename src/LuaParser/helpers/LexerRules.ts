export const RESERVED: { [key:string]: string } = {
    'and': 'AND',
    'break': 'BREAK',
    'do': 'DO',
    'else': 'ELSE',
    'elseif': 'ELSEIF',
    'end': 'END',
    'false': 'FALSE',
    'for': 'FOR',
    'function': 'FUNCTION',
    'goto': 'GOTO',
    'if': 'IF',
    'in': 'IN',
    'local': 'LOCAL',
    'nil': 'NIL',
    'not': 'NOT',
    'or': 'OR',
    'repeat': 'REPEAT',
    'return': 'RETURN',
    'then': 'THEN',
    'true': 'TRUE',
    'until': 'UNTIL',
    'while': 'WHILE',
};

export type ReservedTypes =
    'AND' |
    'BREAK' |
    'DO' |
    'ELSE' |
    'ELSEIF' |
    'END' |
    'FALSE' |
    'FOR' |
    'FUNCTION' |
    'GOTO' |
    'IF' |
    'IN' |
    'LOCAL' |
    'NIL' |
    'NOT' |
    'OR' |
    'REPEAT' |
    'RETURN' |
    'THEN' |
    'TRUE' |
    'UNTIL' |
    'WHILE';

export type TokensTypes =
    'NAME' |
    'NUMBER' |
    'LITERAL_STRING' |
    'PLUS' |
    'MINUS' |
    'TIMES' |
    'DIVIDE' |
    'MOD' |
    'POW' |
    'LENGTH' |
    'BITWISE_AND' |
    'BITWISE_NOT' |
    'BITWISE_OR' |
    'LSHIFT' |
    'RSHIFT' |
    'INT_DIVIDE' |
    'EQUALS' |
    'NOT_EQUALS' |
    'LESS_OR_EQUAL' |
    'GREATER_OR_EQUAL' |
    'LESS_THAN' |
    'GREATER_THAN' |
    'ASSIGNMENT' |
    'ROUND_LBRACKET' |
    'ROUND_RBRACKET' |
    'LBRACE' |
    'RBRACE' |
    'SQUARE_LBRACKET' |
    'SQUARE_RBRACKET' |
    'DOUBLE_COLON' |
    'SEMICOLON' |
    'COLON' |
    'COMMA' |
    'VARARG' |
    'CONCAT' |
    'DOT' |
    ReservedTypes;
