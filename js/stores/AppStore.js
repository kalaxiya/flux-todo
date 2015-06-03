/**
 * Created by linzerui on 15/4/28.
 */
"use strict";

var AppDispatcher = require( "../dispatcher/AppDispatcher" );
var EventEmitter = require( "events" ).EventEmitter;
var assign = require( "object-assign" );

var CHANGE_EVENT = "change";

var _todo = {};

/**
 * add a todo
 * @param text
 */
function add( text ) {
    var id = ( +new Date() + Math.floor( Math.random() * 999999 ) ).toString(36);

    _todo[id] = text;
}

/**
 * remove a todo
 * @param id
 */
function remove( id ) {
    delete _todo[id];
}

/**
 * creat a store
 */
var TodoStore = assign({}, EventEmitter.prototype, {
    getAll: function() {
        return _todo;
    },

    emitChange: function() {
        this.emit( CHANGE_EVENT );
    },

    addChangeListener: function( callback ) {
        this.on( CHANGE_EVENT, callback );
    },

    removeChangeListener: function( callback ) {
        this.removeListener( CHANGE_EVENT, callback );
    }
});

/**
 * register the listener
 */
AppDispatcher.register(function( action ) {
    switch ( action.actionType ) {
        case "add":
            add( action.text );
            TodoStore.emitChange();
            break;

        case "remove":
            remove( action.id );
            TodoStore.emitChange();
            break;

        default :
    }
});

module.exports = TodoStore;