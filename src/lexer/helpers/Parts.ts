import {TokensTypes} from "./LexerRules";
import {logger} from "../helpers";

export class Chunk {
    constructor(private block:Block) {
        logger.parserLog("Chunk:", [block]);
    }
}

export class Block {
    constructor(private statements:StatementList, private return_statement?:ReturnStatement) {
        logger.parserLog("Block:", [statements, return_statement]);
    }
}

interface IStatementList {
    statements:Statement[];
}

export class StatementList {
    constructor(statement?:Statement, statement_list?:IStatementList) {
        logger.parserLog("StatementList:", [statement, statement_list]);
        if (statement) {
            this.statements.push(statement);
        }
        if (statement_list) {
            this.statements.push(...statement_list.statements);
        }
    }

    private statements:Statement[] = [];
}

interface IVariableList {
    variables:Variable[]
}

export class VariableList {
    constructor(variable:Variable, variable_list?:IVariableList) {
        logger.parserLog("VariableList:", [variable, variable_list]);
        this.variables.push(variable);
        if (variable_list) {
            this.variables.push(...variable_list.variables)
        }
    }
    private variables:Variable[] = [];
}

interface IExpressionList {
    expressions:Expression[];
}

export class ExpressionList {
    constructor(expression:Expression, expression_list?:IExpressionList) {
        logger.parserLog("ExpressionList:", [expression, expression_list]);
        this.expressions = [expression];
        if (expression_list) {
            this.expressions.push(...expression_list.expressions);
        }
    }
    private expressions:Expression[] = [];
}

interface INameList {
    names:string[];
}

export class NameList {
    constructor(name:string, name_list?:INameList) {
        logger.parserLog("NameList:", [name, name_list]);
        this.names = [name];
        if (name_list) {
            this.names.push(...name_list.names);
        }
    }

    private names:string[] = [];
}

export class Assignment {
    constructor(private variable_list:VariableList, private expression_list:ExpressionList) {
        logger.parserLog("Assignment:", [variable_list, expression_list]);
    }
}

export class DoBlock {
    constructor(private block:Block) {
        logger.parserLog("DoBlock:", [block]);
    }
}

export class WhileLoop {
    constructor(private expression:Expression, private block:Block) {
        logger.parserLog("WhileLoop:", [expression, block]);
    }
}

export class RepeatLoop {
    constructor(private block:Block, private expression:Expression) {
        logger.parserLog("RepeatLoop:", [block, expression]);
    }
}

export class Goto {
    constructor(private name:string) {
        logger.parserLog("GOTO:", [name]);
    }
}

export class IfItem {
    constructor(private block:Block, private expression?:Expression) {
        logger.parserLog("IfItem:", [block, expression]);
    }
}

interface IIfList {
    sequence:any[];
}

export class IfList {
    constructor(elseif_item:any = undefined, elseif_list?:IIfList) {
        logger.parserLog("IfList:", [elseif_item, elseif_list]);
        if (elseif_item) {
            this.sequence.push(elseif_item);
        }
        if (elseif_list) {
            this.sequence.push(...elseif_list.sequence);
        }
    }
    private sequence:any[] = [];
}

export class If {
    constructor(expression:Expression, block:Block, elseif_list?:IIfList, last_block?:Block) {
        logger.parserLog("If:", [expression, block, elseif_list, last_block]);
        this.sequence.push(new IfItem(block, expression));
        if (elseif_list) {
            this.sequence.push(...elseif_list.sequence);
        }
        if (last_block) {
            this.sequence.push(new IfItem(last_block));
        }
    }
    private sequence:any[] = [];
}

export class ForLoopStart {
    constructor(private name?:string, private expression?:Expression) {
        logger.parserLog("ForLoopStart:", [name, expression]);
    }
}

export class ForLoop {
    constructor(name:string, expression:Expression, private end_condition:any, private block:Block, private repeated_exp?:any) {
        logger.parserLog("ForLoop:", [name, expression, end_condition, block, repeated_exp]);
        this.start_assignment = new ForLoopStart(name, expression);
    }
    private start_assignment:ForLoopStart;
}

export class RangeBasedFor {
    constructor(private names:string[], private expressions:Expression, private block:Block) {
        logger.parserLog("RangeBasedFor:", [names, expressions, block]);
    }
}

export class Function {
    constructor(private func_body:FuncBody, func_name_chain:INameChain, func_name?:string) {
        logger.parserLog("Function:", [func_name, func_body]);
        this.funcname = new FuncName(func_name_chain, func_name);
    }
    private funcname:FuncName;
}

export class LocalFunction {
    constructor(private func_name:FuncName, private func_body:FuncBody) {
        logger.parserLog("LocalFunction:", [func_name, func_body]);
    }
}

export class Attribute {
    constructor(private name?:string) {
        logger.parserLog("Attribute:", [name]);
    }
}

export class ObjectAttribute {
    constructor(private object_name?:string, private attribute?:Attribute) {
        logger.parserLog("ObjectAttribute:", [object_name, attribute]);
    }
}

interface IObjectAttributeList {
    object_attributes:ObjectAttribute[]
}

export class ObjectAttributeList {
    constructor(attribute:ObjectAttribute, object_attribute_list?:IObjectAttributeList) {
        logger.parserLog("ObjectAttributeList:", [attribute, object_attribute_list]);
        this.object_attributes = [attribute];
        if (object_attribute_list) {
            this.object_attributes.push(...object_attribute_list.object_attributes);
        }
    }
    private object_attributes:ObjectAttribute[] = [];
}

export class LocalObjectAttributeListAssignment {
    constructor(private object_attributes:ObjectAttributeList, private expressions?:any) {
        logger.parserLog("LocalObjectAttributeListAssignment:", [object_attributes, expressions]);
    }
}

type StatementType = "SEMICOLON" |
    "BREAK" |
    Assignment |
    FunctionCall |
    Label |
    Goto |
    DoBlock |
    WhileLoop |
    RepeatLoop |
    If |
    ForLoop |
    RangeBasedFor |
    Function |
    LocalFunction |
    LocalObjectAttributeListAssignment;

export class Statement {
    constructor(private statement:StatementType) {
        logger.parserLog("Statement:", [statement]);
    }
}

export class ReturnStatement {
    constructor(private expressions?:Expression) {
        logger.parserLog("ReturnStatement:", [expressions]);
    }
}

export class Label {
    constructor(private name:string) {
        logger.parserLog("Label:", [name]);
    }
}

interface INameChain {
    names:string[]
}

export class NameChain {
    constructor(name:string, name_chain?:INameChain) {
        logger.parserLog("NameChain:", [name, name_chain]);
        this.names = [name];
        if (name_chain) {
            this.names.push(...name_chain.names);
        }
    }
    private names:string[] = [];
}

export class FuncName {
    constructor(private name_chain:INameChain, name?:string) {
        logger.parserLog("FuncName:", [name_chain, name]);
        if (name) {
            this.name_chain.names.push(name);
        }
    }
}

export class ObjectField {
    constructor(private object_name:PrefixExpression, private field:Expression | Name) {
        logger.parserLog("ObjectField:", [object_name, field]);
    }
}


export class Variable {
    constructor(private identifier:Name | ObjectField) {
        logger.parserLog("Variable:", [identifier]);
    }
}

export class PrefixExpression {
    constructor(private expression:Expression) {
        logger.parserLog("PrefixExpression:", [expression]);
    }
}

export class FunctionCall {
    constructor(private prefix:PrefixExpression, private args:Args, private name?:Name) {
        logger.parserLog("FuncCall:", [prefix, args, name]);
    }
}

export class Args {
    constructor(private args:any = []) {
        logger.parserLog("Args:", [args]);
    }
}

export class FunctionDef {
    constructor(private body:FuncBody) {
        logger.parserLog("FuncDef:", [body]);
    }
}

export class FuncBody {
    constructor(private block:Block, private parlist?:ParList) {
        logger.parserLog("FuncBody:", [block, parlist]);
    }
}

export class ParList {
    constructor(private vararg?:boolean, private namelist?:NameList) {
        logger.parserLog("ParList:", [vararg, namelist]);
    }
}

export class TableConstructor {
    constructor(private fieldlist?:FieldList) {
        logger.parserLog("TableConstructor:", [fieldlist]);
    }
}

interface IFieldList {
    fields:Field[]
}

export class FieldList {
    constructor(private field?:Field, private inner_fields?:IFieldList) {
        logger.parserLog("FieldList:", [field, inner_fields]);
        if (field) {
            this.fields.push(field);
        }
        if (inner_fields) {
            this.fields.push(...inner_fields.fields);
        }
    }

    private fields:Field[] = [];
}

export class Field {
    constructor(private value:Expression, private identifier?:Expression | Name) {
        logger.parserLog("Field:", [value, identifier]);
    }
}

type ExpressionType = Number |
    LiteralString |
    FunctionDef |
    TableConstructor |
    BinaryOp |
    UnaryOp |
    PrefixExpression |
    "VARARG" | "FALSE" | "TRUE";

export class Expression {
    constructor(private expression:ExpressionType) {
        logger.parserLog("Expression:", [expression]);
    }
}

export class BinaryOp {
    constructor(private left:Expression, private right:Expression, private operation:TokensTypes) {
        logger.parserLog("BinaryOp:", [left, right, operation]);
    }
}

export class UnaryOp {
    constructor(private expression:Expression, private operation:TokensTypes) {
        logger.parserLog("UnaryOp:", [expression, operation]);
    }
}

export class Name {
    constructor(private name:string) {
        logger.parserLog("Name:", [name]);
    }
}

export class LiteralString {
    constructor(private literal_string:string) {
        logger.parserLog("LiteralString:", [literal_string]);
    }
}

export class Number {
    constructor(private number:number) {
        logger.parserLog("Number:", [number]);
    }
}
