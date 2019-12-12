import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import rootWeb from '../src/Component/AppBar/App'
import rootAdmin from '../src/View/Dashboard/Admin/Admin'


class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route  exact path="/dashboard-admin" component={rootAdmin}/> 
                    <Route path="/dashboard-admin/data-murid"component={rootAdmin} />
                    <Route path="/dashboard-admin/data-sponsor" component={rootAdmin} />
                    <Route path="/dashboard-admin/data-sliders" component={rootAdmin} />
                    <Route path="/dashboard-admin/data-jurusan" component={rootAdmin} />
                    <Route path="/dashboard-admin/data-news" component={rootAdmin} />
                    <Route path="/dashboard-admin/data-materi" component={rootAdmin} />
                    <Route path="/dashboard-admin/data-prestasi" component={rootAdmin} />
                    <Route path="/dashboard-admin/data-promo" component={rootAdmin} />
                    <Route path="/dashboard-admin/data-testimoni" component={rootAdmin} />
                    <Route path="/" component={rootWeb}/>
                </Switch>    
            </Router>
        );
    }
}

export default App;