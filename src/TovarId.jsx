import React from "react";
import {Link} from "react-router-dom";
import vse from "./vse";
//import hover15 from "./img/hover15.jpg";

export default class TovarId extends React.Component{
    render(){
        const elemId = this.props.match.params.id;
        let showElem;

        for(var i = 0; i <= vse.length; i++){
            if(vse[i].id == elemId){
                showElem = vse[i];
                break;
            }
        }
        if(showElem === undefined){
            return <h1>Нет тет такого товара</h1>
        } else {
            return(
                <div>
                    <h1>Ваш выбор пал на {showElem.name} </h1>
                    <img src='' alt='citchin' className="rounded mx-auto d-block"/>
                    <Link to={'/tovar'}>Назад</Link>
                </div>
            ) 
        }
    }
}