//'use strict';

import React from 'react';

import WishActions from '../actions/WishActions';
import WishStore from '../stores/WishStore';

import WishesList from './WishesList';

const wishActions = new WishActions({ apiendpoint: "http://localhost:8080" });
const wishStore = new WishStore({ actions: wishActions });

export default class Wishes extends React.Component {
	static childContextTypes = {
        wishActions: React.PropTypes.object,
        wishStore: React.PropTypes.object,
    }
    static propTypes = {
    	listId: React.PropTypes.string.isRequired
    }

	constructor(){
		super();
	}
    getChildContext() {
	    return {
	        wishActions,
	        wishStore,	      
    	};
  	} 
    componentDidMount() { 
    	wishActions.fetchWishes(this.props.listId); 
    }

	render() {
        return (
            <div>
                <WishesList />
            </div>
        );
    }
}
