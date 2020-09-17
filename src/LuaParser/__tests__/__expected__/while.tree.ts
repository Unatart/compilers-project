export const while_tree = {
    "block": {
        "statements": {
            "statements": [
                {
                    "statement": {
                        "expressions": {
                            "expressions": [
                                {
                                    "expression": {
                                        "number": 1
                                    },
                                    "type": "Number"
                                }
                            ]
                        },
                        "object_attributes": {
                            "object_attributes": [
                                {
                                    "attribute": {},
                                    "object_name": {
                                        "name": "i"
                                    }
                                }
                            ]
                        }
                    },
                    "type": "LocalObjectAttributeList"
                },
                {
                    "statement": {
                        "block": {
                            "statements": {
                                "statements": [
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
                                                                                "expression": {
                                                                                    "identifier": {
                                                                                        "name": "i"
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
                                    },
                                    {
                                        "statement": {
                                            "expression_list": {
                                                "expressions": [
                                                    {
                                                        "expression": {
                                                            "left": {
                                                                "expression": {
                                                                    "expression": {
                                                                        "identifier": {
                                                                            "name": "i"
                                                                        }
                                                                    }
                                                                },
                                                                "type": "PrefixExpression"
                                                            },
                                                            "operation": "+",
                                                            "right": {
                                                                "expression": {
                                                                    "number": 1
                                                                },
                                                                "type": "Number"
                                                            }
                                                        },
                                                        "type": "BinaryOp"
                                                    }
                                                ]
                                            },
                                            "variable_list": {
                                                "variables": [
                                                    {
                                                        "identifier": {
                                                            "name": "i"
                                                        }
                                                    }
                                                ]
                                            }
                                        },
                                        "type": "Assignment"
                                    }
                                ]
                            }
                        },
                        "expression": {
                            "expression": {
                                "expression": {
                                    "identifier": {
                                        "field": {
                                            "expression": {
                                                "expression": {
                                                    "identifier": {
                                                        "name": "i"
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
                            },
                            "type": "PrefixExpression"
                        }
                    },
                    "type": "WhileLoop"
                }
            ]
        }
    }
};
