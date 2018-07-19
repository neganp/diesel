initSidebarItems({"fn":[["debug_query","Takes a query `QueryFragment` expression as an argument and returns a type that implements `fmt::Display` and `fmt::Debug` to show the query."],["delete","Creates a `DELETE` statement."],["insert_into","Creates an `INSERT` statement for the target table."],["insert_or_ignore_into","Creates an `INSERT [OR] IGNORE` statement."],["replace_into","Creates a `REPLACE` statement."],["select","Creates a bare select statement, with no from clause. Primarily used for testing diesel itself, but likely useful for third party crates as well. The given expressions must be selectable from anywhere."],["sql_query","Construct a full SQL query using raw SQL."],["update","Creates an `UPDATE` statement."]],"macro":[["allow_tables_to_appear_in_same_query","Allow two or more tables which are otherwise unrelated to be used together in a query."],["diesel_infix_operator","Useful for libraries adding support for new SQL types. Apps should never need to call this."],["diesel_postfix_operator","Useful for libraries adding support for new SQL types. Apps should never need to call this."],["diesel_prefix_operator","Useful for libraries adding support for new SQL types. Apps should never need to call this."],["impl_query_id","Provides a standard implementation of `QueryId`. Apps should not need to concern themselves with this macro."],["joinable","Allow two tables to be referenced in a join query without providing an explicit `ON` clause."],["no_arg_sql_function","Declare a 0 argument SQL function for use in your code. This will generate a unit struct, which is an expression representing calling this function. See `now` for example output. `now` was generated using:"],["not_none","Gets the value out of an option, or returns an error."],["numeric_expr","Indicates that an expression allows all numeric operators. If you create new SQL functions that return a numeric type, you should invoke this macro that type. Unfortunately, Rust disallows us from automatically implementing `Add` for types which implement `Expression`, under its orphan rules."],["operator_allowed","Implements the Rust operator for a given type. If you create a new SQL function, which returns a type that you'd like to use an operator on, you should invoke this macro. Unfortunately, Rust disallows us from automatically implementing `Add` and other traits from `std::ops`, under its orphan rules."],["sql_function","Declare a sql function for use in your code."],["table","Specifies that a table exists, and what columns it has. This will create a new public module, with the same name, as the name of the table. In this module, you'll find a unit struct named `table`, and a unit struct with the names of each of the columns."]],"mod":[["associations","Traits related to relationships between multiple tables."],["backend","Types which represent various database backends"],["connection","Types related to database connections"],["data_types","Structs to represent the primitive equivalent of SQL types where there is no existing Rust primitive, or where using it would be confusing (such as date and time types). This module will re-export all backend specific data structures when compiled against that backend."],["deserialize","Types and traits related to deserializing values from the database"],["dsl","Includes various helper types and bare functions which are named too generically to be included in prelude, but are often used when using Diesel."],["expression","AST types representing various typed SQL expressions."],["expression_methods","Adds various methods to construct new expressions. These traits are exported by default, and implemented automatically."],["helper_types","Provide helper types for concisely writing the return type of functions. As with iterators, it is unfortunately difficult to return a partially constructed query without exposing the exact implementation of the function. Without higher kinded types, these various DSLs can't be combined into a single trait for boxing purposes."],["migration","Representation of migrations"],["mysql","Provides types and functions related to working with MySQL"],["pg","Provides types and functions related to working with PostgreSQL"],["prelude","Re-exports important traits and types. Meant to be glob imported when using Diesel."],["query_builder","Contains traits responsible for the actual construction of SQL statements"],["query_dsl","Traits that construct SELECT statements"],["query_source","Types related to describing schema, and interactions between tables."],["r2d2","Connection pooling via r2d2"],["result","Errors, type aliases, and functions related to working with `Result`."],["row","Contains the `Row` trait"],["serialize","Types and traits related to serializing values for the database"],["sql_types","Types which represent a SQL data type."],["sqlite","Provides types and functions related to working with SQLite"],["types",""]]});