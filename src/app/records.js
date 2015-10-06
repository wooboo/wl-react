'use strict';

import Immutable from 'immutable';

export class WishRecord extends Immutable.Record({
	uri: null,
	name: null,
	image: null
}){
	uri(){
		return this.get('uri');		
	}
	name(){
		return this.get('name');
	}
	image(){
		return this.get('image');
	}
}
