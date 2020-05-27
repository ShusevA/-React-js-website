import React from 'react' 

export default class First2 extends React.Component{
    constructor(props){
        super(props);
        this.show = this.show.bind(this);
        this.focusMi = this.focusMi.bind(this);

        this.state = {isRef: false};

        this.inputRef = React.createRef();
    }
    componentDidUpData(){
        this.inputRef.current.focus();
    }

    show(){
        alert(`Рады что вы с нами: ${this.inputRef.current.value}`);
        
    }
    focusMi(){
        this.setState(({isRef})=>({isRef: !isRef}))
    }

    render(){
    return(
        <div>
            <input type='text' ref={this.inputRef} onBlur={this.show} placeholder="Укажи, своё имя"/>
            <button onClick={this.focusMi}>Ну, нажимай!</button>
            {this.state.isRef && (
                <ul>
                    <li><a>Главная</a></li>
                    <li><a>Регистрация</a></li>
                    <li><a>Вирус</a></li>
                    <li><a>Игры</a></li>

                </ul>
                )}
        </div>
    )
}
}
            //this.focusButton.current.focus();
