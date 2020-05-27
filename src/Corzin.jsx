import React, {Component} from "react";
import { Link, NavLink } from "react-router-dom";
import {Row, Col} from 'react-bootstrap';

export default class Corzin extends Component{
    render(){
        return(
            <div>
                <Row className="justify-content-md-end">
                    <Col md='auto'><Link to={'/'}>Главная</Link></Col>
                    <Col md='auto'><Link to={'/virus'}>Вирус</Link></Col>
                    <Col md='auto'> <Link to={'/stor'}>Магазин</Link></Col>
                    <Col md='auto'><Link to={'/tovar'}>Товар</Link></Col>
                    <Col md='auto'><NavLink to={'/corzin'} activeStyle={{color:"red", fontWeight:"bold"}} >Корзина</NavLink></Col>
                </Row>
                <Row>
                    <Col><h1>Ваша корзина</h1></Col>
                </Row>
                <Row>
                    <Col>
                    <img src="img/hover15.jpg" alt="ceetchin" className="rounded mx-auto d-block img-thumbnail" style={{width:"250px", height: "300px"}}/>
                    <p>Я тута</p>
                    </Col>
                </Row>
            </div>
        )
    }
}