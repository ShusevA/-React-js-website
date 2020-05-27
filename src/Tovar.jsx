import React from "react";
import { NavLink, Link } from "react-router-dom";
import vse from "./vse";
//import "./scss/tovar.scss"


export default class Tovar extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div>  
                <div className='row justify-content-end row-col-sm-4'>
                    <div className='col-auto'><Link to={'/'}>Главная</Link></div>
                    <div className='col-auto'><Link to={'/virus'}>Вирус</Link></div>
                    <div className='col-auto'><Link to={'/stor'}>Магазин</Link></div>
                    <div className='col-auto'><NavLink to={'/tovar'} activeStyle={{color:"red", fontWeight:"bold"}}>Товар</NavLink></div>
                    <div className='col-auto'><Link to={'/corzin'}>Корзина</Link></div>
                </div>
                <div className='row'>
                    <div className='col'><h1>Товар у нас только для Вас ...</h1></div>
                </div>
                <div className='row'>
                    <div className='col'>
                    {vse.map((tovars) => {
                    return(
                        <ul>
                    <li className="tort" key={Object.id}>
                        <NavLink to={`/tovar/${tovars.id}`} activeStyle={{color:"red"}}>{tovars.name}</NavLink>
                    </li>
                    </ul>
                )
                })}
                    </div>
                    <div className='col-10' >
                        <p>Огромнейший выбор ультро современных и модных вещей нашей с вами СОВРЕМЕННОСТИ.</p>
                        <p>Ну что же Вы стесняетесь - выбирайте, выбирайте, <i><b>Ну, смелее...</b></i></p>
                        <div className="alert alert-warning alert-dismissible fade show" role="alert">
                            <strong>Привет ребята!</strong> Вы готовы погрузиться в мир шика и блеска. Тогда давайте испробуем ЭТО... Ну смелее, смелей!
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                        </div>
                        <p className="text-danger">
                                <span className="sr-only">Danger: </span>
                                This action is not reversible
                        </p>
                        <a className="sr-only sr-only-focusable" href="#content">Перейти к основному содержанию</a>
                        <span className="badge badge-secondary">Это важно знать каждому. Бррр..</span>
                        
                    </div>
                </div>
            </div>
        )
    }
}