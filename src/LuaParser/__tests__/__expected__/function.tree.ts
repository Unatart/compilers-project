export const function_tree = {
    "block": {
        "statements": {
            "statements": [
                {
                    "statement": {
                        "func_body": {
                            "name_chain": {
                                "name": "add"
                            }
                        },
                        "funcname": {
                            "name_chain": {
                                "block": {
                                    "return_statement": {
                                        "expressions": {
                                            "expressions": [
                                                {
                                                    "expression": {
                                                        "expression": {
                                                            "identifier": {
                                                                "name": "sum"
                                                            }
                                                        }
                                                    },
                                                    "type": "PrefixExpression"
                                                }
                                            ]
                                        }
                                    },
                                    "statements": {
                                        "statements": [
                                            {
                                                "statement": {
                                                    "expressions": {
                                                        "expressions": [
                                                            {
                                                                "expression": {
                                                                    "number": 0
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
                                                                    "name": "sum"
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
                                                                        "expression_list": {
                                                                            "expressions": [
                                                                                {
                                                                                    "expression": {
                                                                                        "left": {
                                                                                            "expression": {
                                                                                                "expression": {
                                                                                                    "identifier": {
                                                                                                        "name": "sum"
                                                                                                    }
                                                                                                }
                                                                                            },
                                                                                            "type": "PrefixExpression"
                                                                                        },
                                                                                        "operation": "+",
                                                                                        "right": {
                                                                                            "expression": {
                                                                                                "expression": {
                                                                                                    "identifier": {
                                                                                                        "name": "v"
                                                                                                    }
                                                                                                }
                                                                                            },
                                                                                            "type": "PrefixExpression"
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
                                                                                        "name": "sum"
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
                                                    "expressions": {
                                                        "expressions": [
                                                            {
                                                                "expression": {
                                                                    "expression": {
                                                                        "args": {
                                                                            "args": {
                                                                                "expressions": [
                                                                                    {
                                                                                        "expression": {
                                                                                            "expression": {
                                                                                                "identifier": {
                                                                                                    "name": "a"
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
                                                                                    "name": "ipairs"
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                },
                                                                "type": "PrefixExpression"
                                                            }
                                                        ]
                                                    },
                                                    "names": {
                                                        "names": [
                                                            {
                                                                "name": "i"
                                                            },
                                                            {
                                                                "name": "v"
                                                            }
                                                        ]
                                                    }
                                                },
                                                "type": "RangeBasedFor"
                                            }
                                        ]
                                    }
                                },
                                "parlist": {
                                    "namelist": {
                                        "names": [
                                            {
                                                "name": "a"
                                            }
                                        ]
                                    },
                                    "vararg": false
                                }
                            }
                        }
                    },
                    "type": "Function"
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
                                                    "name": "b"
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
                                    "name": "add"
                                }
                            }
                        }
                    },
                    "type": "FuncCall"
                }
            ]
        }
    }
};
