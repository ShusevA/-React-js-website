import Container from 'react-bootstrap/Container';
import React from "react";
import VirusH1 from "./Virus";
import Home from './Home';
import Stor from "./Stor";
import { Switch, Route, } from "react-router-dom";
import Corzin from "./Corzin";
import Tovar from "./Tovar";
import TovarId from "./TovarId";
import Gayme from './gaymes/gayme';
import Rezume from './rezume/Gluva';
import './css/ma.css';
import './scss/ma.scss';

class App extends React.Component{
    render(){
        const App = () => (
            <Container>
                <div className="row cep">
                    <div className="col">
                <p><i>Мы рады Вас видеть у нас на сайте</i> </p>
                <h4 className="jopa">Я хотел Вам очень много сказать... <i>Да тяжко говорить!</i> </h4>
                    </div>
                </div>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/stor" component={Stor}/>
                            <Route path="/corzin" component={Corzin}/>
                            <Route path="/virus" component={VirusH1}/>
                            <Route exact path="/tovar" component={Tovar}/>
                            <Route path="/tovar/:id" component={TovarId}/>
                            <Route path='/gayme' component={Gayme}/>
                            <Route path="/rezume" component={Rezume}/>
                        </Switch>
            </Container>
        )
        return(
                    <Switch>
                        <App/>
                    </Switch>
                );
            }
        }
export default App;