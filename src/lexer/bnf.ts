export const grammar = {
    "bnf": {
        "expression" :[[ "e EOF",   "return $1;"  ]],
        "e" :[[ "NUMBER",  "$$ = Number(yytext);" ]]
    }
};
