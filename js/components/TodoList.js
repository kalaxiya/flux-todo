/**
 * Created by linzerui on 15/4/29.
 */
"use strict";

var React = require( "react" );
var TodoItem = require( "./TodoItem" );

class TodoList extends React.Component {
    render() {
        var todos = [],
            allTodos = this.props.todo;

        for ( var i in allTodos ) {
            todos.push( <TodoItem text={allTodos[i]} key={i} id={i} /> );
        }

        return (
            <ul className="todo-list">
                {todos}
            </ul>
        )
    }
}

module.exports = TodoList;