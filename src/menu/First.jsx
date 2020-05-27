import React from "react";

export default class First extends React.Component{
constructor(props){
    super(props);
    this.chengeMenu = this.chengeMenu.bind(this);
}
chengeMenu(e){
    this.props.onShowMenu(e)
}
    render(){
        return(
            <div>
                <button onClick={this.chengeMenu} name='menu'>Список</button>
                {this.props.votMenu && (
                    <ul>
                        <li>Кино</li>
                        <li>Музыка</li>
                        <li>Книги</li>
                        <li>Игры</li>
                    </ul>
                )}
            </div>
        )
    }

}