import React from "react";
import { Link, Switch, Route, NavLink } from "react-router-dom";

import Shuz from "./Shuz";
import Dress from "./Dress";

//import './css/stor.css'

export default class Stor extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list: []
        }
        this.getReadState = this.getReadState.bind(this);
    }

    componentDidMount(){
        this.getReadState();
    }

    getReadState(){
        fetch('/stor'//,{
           // headers:{
             //   "accepts":"application/json"
           // }
        //}
        )
        .then(res => res.json())
        .then(list => this.setState({list}))
    }

    render(){
        const {list} = this.state;
        
        return(
            <div>
                <div className='row justify-content-end row-col-sm-4'>
                    <div className='col-auto'><Link to={'/'}>Главная</Link></div>
                    <div className='col-auto'><Link to={'/virus'}>Вирус</Link></div>
                    <div className='col-auto'><NavLink to={'/stor'} activeStyle={{color:"red", fontWeight:"bold"}} >Магазин</NavLink></div>
                    <div className='col-auto'><Link to={'/tovar'}>Товар</Link></div>
                    <div className='col-auto'><Link to={'/corzin'}>Корзина</Link></div>
                </div>
                <div className='row'>
                    <div className='col'>
                    <h1>Магазин</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-2'>
                    <p className="menu">Весь список товаров</p>
                <ul>
                <li><Link to={'/stor/shuz'}>Обув</Link></li>
                <li><Link to={'/stor/dress'}>Одежда</Link></li>
                </ul>
                    </div>
                    <div className='col-10'>
                    {list.length ? (
                <div>
                    {list.map(lists => {
                <div>
                    {lists}
                    <Switch>
                <Route path="/stor/shuz" component={Shuz}/>
                <Route path="/stor/dress" component={Dress}/>
                </Switch>
                </div>
            })}
            </div>
            ) : (
                <div>
                    <h2>Файл не найден </h2>
                    <div className="alert alert-primary" role="alert">
                        Можно найти много чего интерестного ... <a href="#" className="alert-link">Подробно здесь</a>
                </div>
                <nav>
  <div className="nav nav-tabs" id="nav-tab" role="tablist">
    <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">От 0грн до 1000грн</a>
    <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">От 1000грн до 10000грн</a>
    <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Брендовая и Эксклюзивная</a>
  </div>
</nav>
<div className="tab-content" id="nav-tabContent">
  <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">Тут находится всё самое лучшее из этой ценовой политики</div>
  <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">Это качественная и необычайно практичная линейка товара</div>
  <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">Да, вы знаток качества. У Вас прекрасный вкус...</div>
</div>

                    <Switch>
                <Route path="/stor/shuz" component={Shuz}/>
                <Route path="/stor/dress" component={Dress}/>
                </Switch>
                </div>
            )
            }
                    </div>
                </div>
            </div>
        )
    }
}
