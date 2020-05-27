import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Shuz extends Component{
    render(){
        return(
            <div>
            <h1>Смотри какая ОБУВ</h1>
            <Link to={'/stor'}>Вернуться назад</Link>
            <ListOfTenThings/>
            </div>
        )
    }
}
function Repeat(props) {
    let items = [];
    for (let i = 0; i < props.numTimes; i++) {
      items.push(props.children(i));
    }
    return <div>{items}</div>;
  }
  
  function ListOfTenThings() {
    return (
      <Repeat numTimes={10}>
        {(index) => <div key={index}>Это элемент списка с ключом {index}</div>}
      </Repeat>
    );
  }
