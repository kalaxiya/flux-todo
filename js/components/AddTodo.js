/**
 * Created by linzerui on 15/4/29.
 */
'use strict';

var React = require('react');
var AppActions = require('../actions/AppActions');

class AddTodo extends React.Component {
    handleAdd() {
        var text = React.findDOMNode( this.refs.add ).value.trim();
        if ( !text ) {
            return;
        }

        AppActions.add( text );
        React.findDOMNode( this.refs.add ).value = '';
    }

    render() {
        return (
            <div className="add-todo">
                <input type="text" ref="add" />
                <button onClick={this.handleAdd.bind(this)}>add</button>
            </div>
        )
    }
}

module.exports = AddTodo;