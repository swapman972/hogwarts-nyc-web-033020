import React from 'react';
import Card from './Card';

export default class CardContainer extends React.Component{
    render(){
        return(
            <div className="ui grid container">
                {this.props.hogs.map((hog, index) => {
                    return <Card key={index} {...hog}/>
                })}
            </div>
        )
    }
}