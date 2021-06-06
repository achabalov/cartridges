import React from 'react';
import './App.scss';
import {Route, NavLink, Link} from 'react-router-dom';
import { FormCartridge } from './components/Cartridges/FormCartridge';

function App() {
  return (
    <div className="App">
      <nav>
        <ul >
        <li>
            <NavLink to='/' exact activeClassName='activeLink link'>Главная страница</NavLink>
          </li>
        <li>
            <NavLink to='/addFormCartridge' activeClassName='activeLink link'>Добавить картриджи в заправку</NavLink>
          </li>
          <li>
            <NavLink to='/addFormEquipment' activeClassName='activeLink link'>Добавить технику в ремонт</NavLink>
          </li>
        </ul>
      </nav>
      <hr />
      <Route path={'/'} exact render={()=> <h1>Home page</h1>}/>
      <Route path={'/addFormCartridge'} exact component={FormCartridge} />
      {/* <Route path={'/addFormEquipment'} exact component={}/> */}
    </div>
  );
}

export default App;
