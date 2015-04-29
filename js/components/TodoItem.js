/**
 * Created by linzerui on 15/4/29.
 */
'use strict';

var React = require('react');
var AppActions = require('../actions/AppActions');

class TodoItem extends React.Component {
    handleRemove() {
        AppActions.remove( this.props.id );
    }

    render() {
        return (
            <li onClick={this.handleRemove.bind(this)}>{this.props.text}</li>
        )
    }
}

module.exports = TodoItem;