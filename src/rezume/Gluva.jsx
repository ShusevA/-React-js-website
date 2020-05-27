import React from "react";
import data from './Data';
import { Link } from "react-router-dom";


export default class Gluva extends React.Component{
    constructor(props){
        super(props);
        this.state = {texts:'', buz:false, texts2: '', buz2: false, show: false, show2: false}
    }

    render(){
        let {buz, buz2, text, text2} = data;
        return(
            <div className='row'>
                <div className="col-2">
                    <img src="img/Mii.png" alt='It`s mi' style={{width:"150px", height: "200px"}} />
                </div>
                <div className="col-10">
                    <h1 className='justify-content-center'>Резюме</h1>
                    <div className="row">
                        <div className='col-auto'>
                            <button onClick={()=>{
                                is1.setAttribute("disabled", true)
                                 this.setState(({buz}) => ({buz: !buz}))
                                for(let i = 0; i <= text.length-1; i++){
                                    setTimeout(()=>{
                                        this.setState((previuse, props)=>({
                                            texts:previuse.texts + text[i]
                                        }))
                                        if(i == text.length-1) {
                                            this.setState(({show})=>({show: !show}))
                                        }
                                    }, i*100);
                                }
                            }} id="is1" disabled={false}>Читать резюме</button>
                        </div>
                    </div><br/>
                    <div className='row'>
                        <div className='col-2'>{this.state.buz ? <h5>{buz}</h5> : ""}</div>
                        <div className='col-8'>{this.state.texts}</div>
                    </div><br/>
                            <div className='row'>
                                <div className='col'>{this.state.show ? 
                                <button onClick={()=>{
                                    is2.setAttribute("disabled", true);
                                    this.setState(({buz2})=>({buz2: !buz2}));
                                    for(let j = 0; j <= text2.length-1; j++){
                                        setTimeout(()=>{
                                            this.setState((previuse, props) =>({
                                                texts2: previuse.texts2 + text2[j]
                                            }))
                                            if(j == text2.length-1) {
                                                this.setState(({show2})=>({show2: !show2}))
                                            }
                                        }, j * 100);
                                    }
                                }} id="is2" disabled={false}>Хотите продолжить
                                </button> : ""}</div>
                            </div><br/>
                                <div className='row'>
                                    <div className='col-2'>{this.state.buz2 ? <h5>{buz2}</h5> : ""}</div>
                                    <div className='col-8'>{this.state.texts2}</div>
                                </div> <br/>
                                <div className="row">
                                   {this.state.show2 ? 
                                   <Link to={'/'}>Вернуться на главную</Link>
                                : ""} 
                                </div>
                </div>
            </div>
        )
    }
}
