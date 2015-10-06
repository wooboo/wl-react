'use strict';

import { Action } from 'geiger';
import axios from 'axios';

import { WishRecord } from '../records';

export default class WishActions extends Action {

	constructor({ apiendpoint }) {
		super();
		this.apiendpoint = apiendpoint;
	}

	fetchWishes(listId){
		return axios
			.get(listId+"/Wish")
			.then(result=> result.data)
			.then(wishes=> wishes.map(o=>new WishRecord(o)))
			.then(wishes=> this.emit('fetchWishes', wishes));
	}
}
