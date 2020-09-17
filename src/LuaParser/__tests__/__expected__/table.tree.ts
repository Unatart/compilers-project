export const table_tree = {
    "block": {
        "statements": {
            "statements": [
                {
                    "statement": {
                        "expression_list": {
                            "expressions": [
                                {
                                    "expression": {},
                                    "type": "Table"
                                }
                            ]
                        },
                        "variable_list": {
                            "variables": [
                                {
                                    "identifier": {
                                        "name": "a"
                                    }
                                }
                            ]
                        }
                    },
                    "type": "Assignment"
                },
                {
                    "statement": {
                        "expression_list": {
                            "expressions": [
                                {
                                    "expression": {
                                        "literal_string": "\"x\""
                                    },
                                    "type": "LiteralString"
                                }
                            ]
                        },
                        "variable_list": {
                            "variables": [
                                {
                                    "identifier": {
                                        "name": "k"
                                    }
                                }
                            ]
                        }
                    },
                    "type": "Assignment"
                },
                {
                    "statement": {
                        "expression_list": {
                            "expressions": [
                                {
                                    "expression": {
                                        "number": 10
                                    },
                                    "type": "Number"
                                }
                            ]
                        },
                        "variable_list": {
                            "variables": [
                                {
                                    "identifier": {
                                        "field": {
                                            "expression": {
                                                "expression": {
                                                    "identifier": {
                                                        "name": "k"
                                                    }
                                                }
                                            },
                                            "type": "PrefixExpression"
                                        },
                                        "object_name": {
                                            "expression": {
                                                "identifier": {
                                                    "name": "a"
                                                }
                                            }
                                        }
                                    }
                                }
                            ]
                        }
                    },
                    "type": "Assignment"
                },
                {
                    "statement": {
                        "expression_list": {
                            "expressions": [
                                {
                                    "expression": {
                                        "literal_string": "\"great\""
                                    },
                                    "type": "LiteralString"
                                }
                            ]
                        },
                        "variable_list": {
                            "variables": [
                                {
                                    "identifier": {
                                        "field": {
                                            "expression": {
                                                "number": 20
                                            },
                                            "type": "Number"
                                        },
                                        "object_name": {
                                            "expression": {
                                                "identifier": {
                                                    "name": "a"
                                                }
                                            }
                                        }
                                    }
                                }
                            ]
                        }
                    },
                    "type": "Assignment"
                },
                {
                    "statement": {
                        "args": {
                            "args": {
                                "expressions": [
                                    {
                                        "expression": {
                                            "expression": {
                                                "identifier": {
                                                    "field": {
                                                        "expression": {
                                                            "literal_string": "\"x\""
                                                        },
                                                        "type": "LiteralString"
                                                    },
                                                    "object_name": {
                                                        "expression": {
                                                            "identifier": {
                                                                "name": "a"
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        "type": "PrefixExpression"
                                    }
                                ]
                            }
                        },
                        "prefix": {
                            "expression": {
                                "identifier": {
                                    "name": "print"
                                }
                            }
                        }
                    },
                    "type": "FuncCall"
                }
            ]
        }
    }
}
