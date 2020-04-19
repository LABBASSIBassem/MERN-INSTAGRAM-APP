import React from 'react';
import { NavBar, SignIn , SignUp , Profile ,Home, CreatePost} from './components'
import { Switch , Route} from 'react-router-dom';
import './App.css'


function App() {
  return (
    <>
    <NavBar />
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/createpost" component={CreatePost} />
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/profile" component={Profile} />
    </Switch>
    </>
  );
}

export default App;
