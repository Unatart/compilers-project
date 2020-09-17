const jison = require("jison");

export const grammar = {
    "operators": [
        ["left", 'OR'],
        ["left", 'AND'],
        ["left", 'LESS_THAN', 'GREATER_THAN', 'LESS_OR_EQUAL', 'GREATER_OR_EQUAL', 'NOT_EQUALS', 'EQUALS'],
        ["left", 'BITWISE_OR'],
        ["left", 'BITWISE_NOT'],
        ["left", 'BITWISE_AND'],
        ["left", 'LSHIFT', 'RSHIFT'],
        ["right", 'CONCAT'],
        ["left", 'PLUS', 'MINUS'],
        ["left", 'TIMES', 'DIVIDE', 'INT_DIVIDE', 'MOD'],
        ["right", 'UNOT', 'LENGTH', 'UMINUS', 'UBITWISE_NOT'],
        ["right", 'POW'],
    ],

    "bnf": {
        "start" :[["chunk",  "return $1;"]],
        "empty" : ["", "console.log(true)"],
        "fieldsep": [
            ["COMMA", "console.log(\"COMMA\")"],
            ["SEMICOLON", "console.log(\"SEMI\")"]
        ],
        "chunk": [[ "block", "$$ = new yy.Chunk($1)"]],
        "block": [
            [ "statement_list return_statement", "$$ = new yy.Block($1, $2)"],
            [ "statement_list", "$$ = new yy.Block($1)"]
        ],
        "statement_list": [
            ["statement statement_list", "$$ = new yy.StatementList($1, $2)"],
            ["empty", "$$ = new yy.StatementList()"]
        ],
        "variable_list": [
            ["variable COMMA variable_list", "$$ = new yy.VariableList($1, $3)"],
            ["variable", "$$ = new yy.VariableList($1)"]
        ],
        "expression_list": [
            ["expression COMMA expression_list", "$$ = new yy.ExpressionList($1, $3)"],
            ["expression", "$$ = new yy.ExpressionList($1)"]
        ],
        "name_list": [
            ["name COMMA name_list", "$$ = new yy.NameList($1, $3)"],
            ["name", "$$ = new yy.NameList($1)"]
        ],
        "assignment": [["variable_list ASSIGNMENT expression_list", "$$ = new yy.Assignment($1, $3)"]],
        "do_block": [["DO block END", "$$ = new yy.DoBlock($2)"]],
        "while_loop": [["WHILE expression DO block END", "$$ = new yy.WhileLoop($2, $4)"]],
        "repeat_loop": [["REPEAT block UNTIL expression", "$$ = new yy.RepeatLoop($2, $4)"]],
        "goto": [["GOTO name", "$$ = new yy.Goto($2)"]],
        "elseif_item": [["ELSEIF expression THEN block", "$$ = new yy.IfItem($4, $2)"]],
        "elseif_list": [
            ["elseif_item elseif_list", "$$ = new yy.IfList($1, $2)"],
            ["empty", "$$ = new yy.IfList()"]
        ],
        "if": [
            ["IF expression THEN block elseif_list ELSE block END", "$$ = new yy.If($2, $4, $5, $7)"],
            ["IF expression THEN block elseif_list END", "$$ = new yy.If($2, $4, $5)"]
        ],
        "for_loop": [
            ["FOR name ASSIGNMENT expression COMMA expression COMMA expression DO block END", "$$ = new yy.ForLoop($2, $4, $6, $10, $8)"],
            ["FOR name ASSIGNMENT expression COMMA expression DO block END", "$$ = new yy.ForLoop($2, $4, $6, $8)"]
        ],
        "range_based_for": [["FOR name_list IN expression_list DO block END", "$$ = new yy.RangeBasedFor($2, $4, $6)"]],
        "function": [["FUNCTION funcname funcbody", "$$ = new yy.Function($2, $3)"]],
        "local_function": [["LOCAL FUNCTION name funcbody", "$$ = new yy.LocalFunction($3, $4)"]],
        "attribute": [
            ["LESS_THAN name GREATER_THAN", "$$ = new yy.Attribute($2)"],
            ["empty", "$$ = new yy.Attribute()"]
        ],
        "object_attribute": [["name attribute", "$$ = new yy.ObjectAttribute($1, $2)"]],
        "object_attribute_list": [
            ["object_attribute COMMA object_attribute_list", "$$ = new yy.ObjectAttributeList($1, $3)"],
            ["object_attribute", "$$ = new yy.ObjectAttributeList($1)"]
        ],
        "local_object_attribute_list": [
            ["LOCAL object_attribute_list ASSIGNMENT expression_list", "$$ = new yy.LocalObjectAttributeList($2, $4)"],
            ["LOCAL object_attribute_list", "$$ = new yy.LocalObjectAttributeList($2)"]
        ],
        "statement": [
            ["SEMICOLON", "$$ = new yy.Statement($1)"],
            ["assignment", "$$ = new yy.Statement($1)"],
            ["funccall", "$$ = new yy.Statement($1)"],
            ["label", "$$ = new yy.Statement($1)"],
            ["BREAK", "$$ = new yy.Statement($1)"],
            ["goto", "$$ = new yy.Statement($1)"],
            ["do_block", "$$ = new yy.Statement($1)"],
            ["while_loop", "$$ = new yy.Statement($1)"],
            ["repeat_loop", "$$ = new yy.Statement($1)"],
            ["if", "$$ = new yy.Statement($1)"],
            ["for_loop", "$$ = new yy.Statement($1)"],
            ["range_based_for", "$$ = new yy.Statement($1)"],
            ["function", "$$ = new yy.Statement($1)"],
            ["local_function", "$$ = new yy.Statement($1)"],
            ["local_object_attribute_list", "$$ = new yy.Statement($1)"],
        ],
        "return_statement": [
            ["RETURN expression_list SEMICOLON", "$$ = new yy.ReturnStatement($2)"],
            ["RETURN expression_list", "$$ = new yy.ReturnStatement($2)"],
            ["RETURN SEMICOLON", "$$ = new yy.ReturnStatement()"],
            ["RETURN", "$$ = new yy.ReturnStatement()"]
        ],
        "label": [["DOUBLE_COLON name DOUBLE_COLON", "$$ = new yy.Label($2)"]],
        "name_chain": [
            ["name DOT name_chain", "$$ = new yy.NameChain($1, $3)"],
            ["name", "$$ = new yy.NameChain($1)"]
        ],
        "funcname": [
            ["name_chain COLON name", "$$ = new yy.FuncName($1, $3)"],
            ["name", "$$ = new yy.FuncName($1)"]
        ],
        "object_field": [
            ["prefixexp SQUARE_LBRACKET expression SQUARE_RBRACKET", "$$ = new yy.ObjectField($1, $3)"],
            ["prefixexp DOT name", "$$ = new yy.ObjectField($1, $3)"]
        ],
        "variable": [
            ["name", "$$ = new yy.Variable($1)"],
            ["object_field", "$$ = new yy.Variable($1)"]
        ],
        "prefixexp": [
            ["variable", "$$ = new yy.PrefixExpression($1)"],
            ["funccall", "$$ = new yy.PrefixExpression($1)"],
            ["ROUND_LBRACKET expression ROUND_RBRACKET", "$$ = new yy.PrefixExpression($2)"]
        ],
        "funccall": [
            ["prefixexp args", "$$ = new yy.FuncCall($1, $2)"],
            ["prefixexp COLON name args", "$$ = new yy.FuncCall($1, $4, $3)"]
        ],
        "args": [
            ["ROUND_LBRACKET expression_list ROUND_RBRACKET", "$$ = new yy.Args($2)"],
            ["ROUND_LBRACKET ROUND_RBRACKET", "$$ = new yy.Args()"],
            ["table", "$$ = new yy.Args($1)"],
            ["literal_string", "$$ = new yy.Args($1)"]
        ],
        "funcdef": [["FUNCTION funcbody", "$$ = new yy.FuncDef($2)"]],
        "funcbody": [
            ["ROUND_LBRACKET parlist ROUND_RBRACKET block END", "$$ = new yy.FuncBody($4, $2)"],
            ["ROUND_LBRACKET ROUND_RBRACKET block END", "$$ = new yy.FuncBody($3)"]
        ],
        "parlist": [
            ["name_list COMMA VARARG", "$$ = new yy.ParList(true, $1)"],
            ["name_list", "$$ = new yy.ParList(false, $1)"],
            ["VARARG", "$$ = new yy.ParList(true)"]
        ],
        "table": [
            ["LBRACE fieldlist RBRACE", "$$ = new yy.Table($2)"],
            ["LBRACE RBRACE", "$$ = new yy.Table()"]
        ],
        "inner_fieldlist": [
            ["fieldsep field inner_fieldlist", "$$ = new yy.FieldList($2, $3)"],
            ["empty", "$$ = new yy.FieldList()"]
        ],
        "fieldlist": [
            ["field inner_fieldlist fieldsep", "$$ = new yy.FieldList($1, $2)"],
            ["field inner_fieldlist", "$$ = new yy.FieldList($1, $2)"]
        ],
        "field": [
            ["SQUARE_LBRACKET expression SQUARE_RBRACKET ASSIGNMENT expression", "$$ = new yy.Field($5, $2)"],
            ["name ASSIGNMENT expression", "$$ = new yy.Field($3, $1)"],
            ["expression", "$$ = new yy.Field($1)"]
        ],
        "expression": [
            ["NIL", "$$ = new yy.Expression($1)"],
            ["FALSE", "$$ = new yy.Expression($1)"],
            ["TRUE", "$$ = new yy.Expression($1)"],
            ["number", "$$ = new yy.Expression($1)"],
            ["literal_string", "$$ = new yy.Expression($1)"],
            ["VARARG", "$$ = new yy.Expression($1)"],
            ["funcdef", "$$ = new yy.Expression($1)"],
            ["table", "$$ = new yy.Expression($1)"],
            ["binop", "$$ = new yy.Expression($1)"],
            ["unop", "$$ = new yy.Expression($1)"],
            ["prefixexp", "$$ = new yy.Expression($1)"]
        ],
        "binop": [
            ["expression PLUS expression", "$$ = new yy.BinaryOp($1, $3, $2)"],
            ["expression MINUS expression", "$$ = new yy.BinaryOp($1, $3, $2)"],
            ["expression TIMES expression", "$$ = new yy.BinaryOp($1, $3, $2)"],
            ["expression DIVIDE expression", "$$ = new yy.BinaryOp($1, $3, $2)"],
            ["expression INT_DIVIDE expression", "$$ = new yy.BinaryOp($1, $3, $2)"],
            ["expression POW expression", "$$ = new yy.BinaryOp($1, $3, $2)"],
            ["expression MOD expression", "$$ = new yy.BinaryOp($1, $3, $2)"],
            ["expression BITWISE_AND expression", "$$ = new yy.BinaryOp($1, $3, $2)"],
            ["expression BITWISE_NOT expression", "$$ = new yy.BinaryOp($1, $3, $2)"],
            ["expression BITWISE_OR expression", "$$ = new yy.BinaryOp($1, $3, $2)"],
            ["expression RSHIFT expression", "$$ = new yy.BinaryOp($1, $3, $2)"],
            ["expression LSHIFT expression", "$$ = new yy.BinaryOp($1, $3, $2)"],
            ["expression CONCAT expression", "$$ = new yy.BinaryOp($1, $3, $2)"],
            ["expression LESS_THAN expression", "$$ = new yy.BinaryOp($1, $3, $2)"],
            ["expression LESS_OR_EQUAL expression", "$$ = new yy.BinaryOp($1, $3, $2)"],
            ["expression GREATER_THAN expression", "$$ = new yy.BinaryOp($1, $3, $2)"],
            ["expression GREATER_OR_EQUAL expression", "$$ = new yy.BinaryOp($1, $3, $2)"],
            ["expression EQUALS expression", "$$ = new yy.BinaryOp($1, $3, $2)"],
            ["expression NOT_EQUALS expression", "$$ = new yy.BinaryOp($1, $3, $2)"],
            ["expression AND expression", "$$ = new yy.BinaryOp($1, $3, $2)"],
            ["expression OR expression", "$$ = new yy.BinaryOp($1, $3, $2)"]
        ],
        "unop": [
            ["MINUS expression", "$$ = new yy.UnaryOp($2, $1)", {"prec": "UMINUS"}],
            ["NOT expression", "$$ = new yy.UnaryOp($2, $1)", {"prec": "UNOT"}],
            ["LENGTH expression", "$$ = new yy.UnaryOp($2, $1)"],
            ["BITWISE_NOT expression", "$$ = new yy.UnaryOp($2, $1)", {"prec": "UBITWISE_NOT"}]
        ],
        "name": [["NAME", "$$ = new yy.Name($1)"]],
        "literal_string": [["LITERAL_STRING", "$$ = new yy.LiteralString($1)"]],
        "number": [["NUMBER", "$$ = new yy.Number($1)"]],
    }
};

/**
 * Created parser will be placed in Downloads dir, cause browser js don't have permissions to filesystem
 * Need to replace this generated file in this project!
 */
export function createParser() {
    const parser_generator = new jison.Generator(grammar, {type: "slr"});
    const data = parser_generator.generate();
    const blob = new Blob([data], {type: "text/plain"});
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = 'LuaParser.js';
    link.href = url;
    link.click();
}
