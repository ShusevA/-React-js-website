import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Dress extends Component{
    render(){
        
        return(
            <div>
            <h1>Одежда для - "Искушонных роскошю"</h1>
        <p>Это у нас match url - {JSON.stringify(this.props.match.url)},  А это match path - {JSON.stringify(this.props.match)}, Ну и напоследок match params - {JSON.stringify(this.props.match.params)} </p>
        <p>Это у нас location pathname - {JSON.stringify(this.props.location.pathname)}, А это следующее  lacation search - {JSON.stringify(this.props.location.search)} </p>
            <Link to={'/stor'}>Вернуться назад</Link>
            </div>
        )
    }
}