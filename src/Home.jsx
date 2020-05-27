import React, { Component } from "react";
import { Col, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import First from "./menu/First";
import First2 from "./menu/First2";
import First3 from "./menu/First3";

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state = {menu: false, menu3: false, togle: false}
        this.changeMenu= this.changeMenu.bind(this);

        this.changeMenu3 = this.changeMenu.bind(this);

        this.inputRef = React.createRef();
    }
    
    changeMenu(e){
        if(e == "BREK"){
            return  this.setState({menu3: false});
        } else{
        let x = this.state[e.target.name];
        this.setState({[e.target.name]: !x});
    }
}

    render(){
        return(
            <div>
            <Row>
                <Col>
                <h1>Главная страница</h1>
                </Col>
            </Row>
            <Row>
                <Col md={2}>
                    <ul>
                        <li><Link to={'/stor'}>Магазин</Link></li>
                        <li><Link to={'/corzin'}>Корзина</Link></li>
                        <li><Link to={'/tovar'}>Товар</Link></li>
                        <li><Link to={'/virus'}>Вирус</Link></li>
                        <li><Link to={'/gayme'}>Игры</Link></li>
                        <li><Link to={'/rezume'}>Резюме</Link></li>
                    </ul>
                </Col>        
                <Col md={10}>
                <div className="btn-group" role="group" aria-label="First group">
                        <button type="button" className="btn btn-secondary">Statr</button>
                        <button type="button" className="btn btn-secondary">Play</button>
                        <button type="button" className="btn btn-secondary">Stop</button>
                        <button type="button" className="btn btn-secondary">Remuv</button>
                        <button type="button" className="btn btn-secondary">Reverz</button>
                    </div>
                    <p>Мы создаем callApiметод для взаимодействия с нашим GETмаршрутом Express API, затем вызываем этот метод componentDidMountи, наконец, устанавливаем состояние для ответа API, которым будет Hello From Express .
Обратите внимание, что мы не использовали полный URL-адрес zhttp://localhost:5000/api/helloдля вызова нашего API, хотя наше приложение React работает на другом порту (3000). Это из-за proxy строки, которую мы добавили в package.jsonфайл ранее.
У нас есть форма с одним входом. Когда отправлены вызовы handleSubmit, которые, в свою очередь, вызывают наш POSTмаршрут Express API, затем сохраняют ответ на состояние и отображают сообщение пользователю: я получил ваш запрос POST. Это то, что вы мне отправили: [сообщение от входа] .

Теперь откройте ./client/src/App.cssи измените .App-headerкласс следующим образом (изменения выделены жирным шрифтом)
.App-header

Запуск приложения
Если сервер все еще работает, продолжайте и остановите его, нажав Ctrl + C в вашем терминале.
Из корневого каталога проекта выполните следующее:
</p>
<div className="row">
    <div className="col"><First onShowMenu={this.changeMenu} votMenu={this.state.menu}/></div>
    <div className='col'>
    <div className="btn-group" role="group">
                        <button id="btnGroupDrop1" type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Сделай свой выбор
                        </button>
                    
                        <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                        <a className="dropdown-item" href="#">Java</a>
                        <a className="dropdown-item" href="#">Js</a>
                        </div>
                    </div>
    </div>
    <div className="col"><First2/></div>
    <div className="col"><First3 votMenu3={this.state.menu3} onShowMenu3={this.changeMenu}/></div>
</div>
                </Col>
            </Row>
            </div>
        );
    }
}

 