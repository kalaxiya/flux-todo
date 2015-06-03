/**
 * Created by linzerui on 15/4/28.
 */
"use strict";

var AppDispatcher = require( "../dispatcher/AppDispatcher" );

var AppActions = {
    /**
     * action to add a todo
     * @param text
     */
    add: function( text ) {
        AppDispatcher.dispatch({
            actionType: "add",
            text: text
        });
    },

    /**
     * action to remove a todo
     * @param id
     */
    remove: function( id ) {
        AppDispatcher.dispatch({
            actionType: "remove",
            id: id
        });
    }
};

module.exports = AppActions;