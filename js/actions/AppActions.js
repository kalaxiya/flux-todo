/**
 * Created by linzerui on 15/4/28.
 */
var AppDispatcher = require('../dispatcher/AppDispatcher');

var AppActions = {
    add: function( text ) {
        AppDispatcher.dispatch({
            actionType: 'add',
            text: text
        });
    },

    remove: function( id ) {
        AppDispatcher.dispatch({
            actionType: 'remove',
            id: id
        });
    }
};

module.exports = AppActions;