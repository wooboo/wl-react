'use strict';

import React from 'react';
import mui from 'material-ui';
import Cards from 'material-ui/lib/card';
var { Card, CardHeader, CardTitle, CardMedia, CardText, CardActions, CardExpandable } = Cards;
import Avatar from 'material-ui/lib/avatar';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';

class WishesList extends React.Component {
	static contextTypes = {
        wishStore: React.PropTypes.object.isRequired
    }
    componentWillMount() {
        this.unwatchWishstore = this.context.wishStore.watch(this.forceUpdate.bind(this));
    }

    componentWillUnmount() { this.unwatchWishstore(); }

    render() {

        const { wishStore } = this.context;

        const wishes = wishStore.getWishes();

        const card = (wish)=>(
	        	<Card key={wish.uri()} >
				  <CardHeader
				    title={wish.name()}
				    avatar={<Avatar>{wish.name()[0]}</Avatar>}/>
				  <CardMedia overlay={<CardTitle title="Title" subtitle="Subtitle"/>}>
				    <img src="http://lorempixel.com/600/337/nature/"/>
				  </CardMedia>
				  <CardTitle title={wish.name()} subtitle="Subtitle"/>
				  <CardActions>
				    <RaisedButton label="Action1"/>
				    <RaisedButton label="Action2"/>
				  </CardActions>
				  <CardText>
				    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
				    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
				    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
				  </CardText>
				</Card>
			);
		const cards = (wishes)=>wishes.map(card);
        return (
            <div>
                {cards(wishes)}
            </div>
        );
    }
}
export default WishesList;
