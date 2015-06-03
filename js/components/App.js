/**
 * Created by linzerui on 15/4/29.
 */
"use strict";

var React = require( "react" );
var AddTodo = require( "./AddTodo" );
var TodoList = require( "./TodoList" );

var assign = require( "object-assign" );
var AppStore = require( "../stores/AppStore" );

/**
 * get state from store
 * @returns {{todos: *}}
 */
function getAppState() {
    return {
        todos: AppStore.getAll()
    }
}

class App extends React.Component {
    constructor( props ) {
        super( props );
        this.state = getAppState();
    }

    componentDidMount() {
        AppStore.addChangeListener( this._onChange.bind(this) );
    }

    componentWillUnmount() {
        AppStore.removeChangeListener( this._onChange.bind(this) );
    }

    _onChange() {
        this.setState( getAppState() );
    }

    render() {
        return (
            <div className="todo">
                <AddTodo />
                <TodoList todo={this.state.todos} />
            </div>
        )
    }
}

App.defaultProps = {};

module.exports = App;