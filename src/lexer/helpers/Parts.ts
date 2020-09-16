export class Chunk {
    // TODO: тип
    constructor(private block:any) {
        console.log("Chunk", block);
    }
}

export class Block {
    constructor(private statements:any, private return_statement?:any) {
        console.log("Block", statements, return_statement);
    }
}

interface IStatementList {
    statements:any[];
}

export class StatementList {
    constructor(private statement?:any, private statement_list?:IStatementList) {
        console.log("StatementList", statement, statement_list);
        if (statement) {
            this.statements.push(statement);
        }
        if (statement_list) {
            this.statements.push(...statement_list.statements);
        }
    }

    private statements:any[] = [];
}

interface IVariableList {
    variables:any[]
}

export class VariableList {
    constructor(private variable:any, private variable_list?:IVariableList) {
        console.log("VariableList", variable, variable_list);
        this.variables.push(variable);
        if (variable_list) {
            this.variables.push(...variable_list.variables)
        }
    }
    private variables:any[] = [];
}

interface IExpressionList {
    expressions:any[];
}

export class ExpressionList {
    constructor(private expression:any, private expression_list?:IExpressionList) {
        console.log("ExpressionList", expression, expression_list);
        this.expressions = [expression];
        if (expression_list) {
            this.expressions.push(...expression_list.expressions);
        }
    }
    private expressions:any[] = [];
}

interface INameList {
    names:string[];
}

export class NameList {
    constructor(private name:string, private name_list?:INameList) {
        console.log("NameList", name, name_list);
        this.names = [name];
        if (name_list) {
            this.names.push(...name_list.names);
        }
    }

    private names:string[] = [];
}

export class Assignment {
    constructor(private variable_list:IVariableList, private expression_list:IExpressionList) {
        console.log("Assignment", variable_list, expression_list);
    }
}

export class DoBlock {
    constructor(private block:any) {
        console.log("DoBlock", block);
    }
}

export class WhileLoop {
    constructor(private expression:any, private block:any) {
        console.log("WhileLoop", expression, block);
    }
}

export class RepeatLoop {
    constructor(private block:any, private expression:any) {
        console.log("RepeatLoop", block, expression);
    }
}

export class Goto {
    constructor(private name:string) {
        console.log("GOTO", name);
    }
}

export class IfItem {
    constructor(private block:any, private expression?:any) {
        console.log("IfItem", block, expression);
    }
}

interface IIfList {
    sequence:any[];
}

export class IfList {
    constructor(private elseif_item:any = undefined, elseif_list?:IIfList) {
        console.log("IfList:", elseif_item, elseif_list);
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
    constructor(private expression:any, private block:any, elseif_list?:IIfList, last_block?:any) {
        console.log("If", expression, block, elseif_list, last_block);
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
    constructor(private name?:string, private expression?:any) {
        console.log("ForLoopStart", name, expression);
    }
}

export class ForLoop {
    constructor(private name:string, private expression:any, private end_condition:any, private block:any, private repeated_exp?:any) {
        console.log("ForLoop", name, expression, end_condition, block, repeated_exp);
        this.start_assignment = new ForLoopStart(name, expression);
    }
    private start_assignment:ForLoopStart;
}

export class RangeBasedFor {
    constructor(private names:string[], private expressions:any, private block:any) {
        console.log("RangeBasedFor", names, expressions, block);
    }
}

export class Function {
    constructor(private func_body:any, private func_name_chain:INameChain, private func_name?:string) {
        console.log("Function", func_name, func_body);
        this.funcname = new FuncName(func_name_chain, func_name);
    }
    private funcname:FuncName;
}

export class LocalFunction {
    constructor(private func_name:string, private func_body:any) {
        console.log("LocalFunction", func_name, func_body);
    }
}

export class Attribute {
    constructor(private name?:string) {
        console.log("Attribute", name);
    }
}

export class ObjectAttribute {
    constructor(private object_name?:string, private attribute?:any) {
        console.log("ObjectAttribute", object_name, attribute);
    }
}

interface IObjectAttributeList {
    object_attributes:any[]
}

export class ObjectAttributeList {
    constructor(private attribute:any, private object_attribute_list?:IObjectAttributeList) {
        console.log("ObjectAttributeList", attribute, object_attribute_list);
        this.object_attributes = [attribute];
        if (object_attribute_list) {
            this.object_attributes.push(...object_attribute_list.object_attributes);
        }
    }
    private object_attributes:any[] = [];
}

export class LocalObjectAttributeListAssignment {
    constructor(private object_attributes:any, private expressions?:any) {
        console.log("LocalObjectAttributeListAssignment", object_attributes, expressions);
    }
}

export class Statement {
    constructor(private statement:any) {
        console.log("Statement", statement);
    }
}

export class ReturnStatement {
    constructor(private expressions?:any) {
        console.log("ReturnStatement", expressions);
    }
}

export class Label {
    constructor(private name:string) {
        console.log("Label", name);
    }
}

interface INameChain {
    names:string[]
}

export class NameChain {
    constructor(private name:string, private name_chain?:INameChain) {
        console.log("NameChain", name, name_chain);
        this.names = [name];
        if (name_chain) {
            this.names.push(...name_chain.names);
        }
    }
    private names:string[] = [];
}

export class FuncName {
    constructor(private name_chain:INameChain, private name?:string) {
        console.log("FuncName", name_chain, name);
        if (name) {
            this.name_chain.names.push(name);
        }
    }
}

export class ObjectField {
    constructor(private object_name:string, private field:any) {
        console.log("ObjectField", object_name, field);
    }
}


export class Variable {
    constructor(private identifier:any) {
        console.log("Variable", identifier);
    }
}

export class PrefixExpression {
    constructor(private expression:any) {
        console.log("PrefixExpression", expression);
    }
}

export class FunctionCall {
    constructor(private prefix:any, private args:any, private name?:string) {
        console.log("FuncCall", prefix, args, name);
    }
}

export class Args {
    constructor(private args:any = []) {
        console.log("Args", args);
    }
}

export class FunctionDef {
    constructor(private body:any) {
        console.log("FuncDef", body);
    }
}

export class FuncBody {
    constructor(private block:any, private parlist?:any) {
        console.log("FuncBody", block, parlist);
    }
}

export class ParList {
    constructor(private vararg?:boolean, private namelist?:any) {
        console.log("ParList", vararg, namelist);
    }
}

export class TableConstructor {
    constructor(private fieldlist?:any) {
        console.log("TableConstructor", fieldlist);
    }
}

interface IFieldList {
    fields:any[]
}

export class FieldList {
    constructor(private field?:any, private inner_fields?:IFieldList) {
        console.log("FieldList", field, inner_fields);
        if (field) {
            this.fields.push(field);
        }
        if (inner_fields) {
            this.fields.push(...inner_fields.fields);
        }
    }

    private fields:any[] = [];
}

export class Field {
    constructor(private value:any, private identifier?:any) {
        console.log("Field", value, identifier);
    }
}

export class Expression {
    constructor(private expression:any) {
        console.log("Expression", expression);
    }
}

export class BinaryOp {
    constructor(private left:any, private right:any, private operation:any) {
        console.log("BinaryOp", left, right, operation);
    }
}

export class UnaryOp {
    constructor(private expression:any, private operation:any) {
        console.log("UnaryOp", expression, operation);
    }
}

export class Name {
    constructor(private name:string) {
        console.log("Name", name);
    }
}

export class LiteralString {
    constructor(private literal_string:string) {
        console.log("LiteralString", literal_string);
    }
}

export class Number {
    constructor(private number:number) {
        console.log("Number", number);
    }
}
