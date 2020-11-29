import {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashbaord';
import BlogDetails from './components/blogs/BlogDetails';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import CreateBlog from './components/blogs/CreateBlog'

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/blogs/:id' component={BlogDetails} />
            <Route path='/signin' component={Signin} />
            <Route path='/signup' component={Signup} />
            <Route path='/create' component={CreateBlog} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
