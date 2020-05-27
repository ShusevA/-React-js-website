import React, {Component} from "react";
import { NavLink } from "react-router-dom";

class VirusH1 extends Component{
    constructor(props){
        super(props);
        this.state = {za: 0, fu: 0};
        this.Za = this.Za.bind(this);
        this.Fu = this.Fu.bind(this);
    }
Za(){
    this.setState({za: this.state.za + 1})
}
Fu(){
    this.setState((prevState) =>
        ({fu: prevState.fu + 1}));
}
    render(){
    return(
        <div>
            <div className='row justify-content-end row-col-sm-4'>
                <div className='col-auto'><NavLink exact to={'/'}>Главная</NavLink></div>
                <div className='clo-auto'><NavLink to={'/virus'} activeStyle={{color:"red", fontWeight:"bold"}}>Вирус</NavLink></div>
                <div className='col-auto'><NavLink to={'/stor'}>Магазин</NavLink></div>
                <div className='col-auto'><NavLink to={'/tovar'}>Товар</NavLink></div>
               <div className='col-auto'><NavLink to={'/corzin'}>Корзина</NavLink></div>
            </div>
            <div className='row justify-content-center'>
                <div className='col-auto'><h3>Давайте проведём опрос:</h3></div>
                 <div className='col align-self-center'>Ваше отношение к "Коронавирусу"</div>
            </div>
            <div className='row justify-content-center'>
                <div clss='col'>
                <button onClick={this.Za}>Я поддерживаю</button>
                <p>За голосав: {this.state.za}</p>
                </div>
                <div className='col'>
                <button onClick={this.Fu}>Я против</button>
                <p>Против голосов: {this.state.fu}</p>
                </div>
            </div>
            <div className='row'>
                    <h1>Бувай здоров</h1>
            </div>
            <div className="row">
                Пока побеждает:  <span><i><b>{this.state.za == this.state.fu ? <p>Одинаково голосов</p> : this.state.za > this.state.fu ? <p>Те, кто - ЗА</p> : <p>Те, кто - ПРОТИВ</p>}</b></i></span>
            </div>
                    <figure>
                        <img src='img/hover10.png' alt="on"/>
                    </figure>
        </div>
    )
}
}
export default VirusH1;