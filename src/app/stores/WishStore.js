'use strict';

import { Store } from 'geiger';
import Immutable from 'immutable';

export default class WishStore extends Store {
	constructor({ actions }){
		super();
		this.wishes = Immutable.OrderedMap();
	
		this.listen(actions, 'fetchWishes', wishes=>{
			for(let wish of wishes){
				this.wishes = this.wishes.set(wish.get('uri'), wish);
			}
			this.changed();
		});
	}

	getWishes(){
		return this.wishes.toArray();
	}
}
