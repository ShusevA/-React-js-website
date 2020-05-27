import React from 'react';

export default class First3 extends React.Component{
    constructor(props){
        super(props);
        this.show = this.show.bind(this);
        this.focusElem = this.focusElem.bind(this);
        this.blurElem = this.blurElem.bind(this);

        this.timerId = null;
    }
    show(e){
        this.props.onShowMenu3(e);
    }
    blurElem(){
         this.timerId = setTimeout(()=>{
            this.props.onShowMenu3("BREK");
        })
    }
    focusElem(){
        clearTimeout(this.timerId);
    }

    render(){
    return(
        <div onFocus={this.focusElem} onBlur={this.blurElem}>
            <button onClick={this.show} name='menu3' aria-expanded={this.props.votMenu3} aria-haspopup="true">То, что Вас заинтрегует</button>
            {this.props.votMenu3 && (
                <dl>
                    <dt>Вот ано чё ...</dt>
                    <dd>Ага, вот ано как ...!</dd>
                </dl>
            )}
        </div>
    )
}
}