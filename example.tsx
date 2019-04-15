import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import IconExample from './lib/icon/icon.example'
import DialogExample from './lib/dialog/dialog.example'

ReactDOM.render((
  <Router>
    <div>
      <header>
        <div>
          UI
        </div>
      </header>
      <div>
        <aside>
          <ul>
            <li>
              <Link to="/icon">icon</Link>
            </li>
            <li>
              <Link to="/dialog">dialog</Link>    
            </li>
          </ul>
        </aside>
        <main>
          <Switch>
            <Route path="/icon" component={IconExample} />
            <Route path="/dialog" component={DialogExample} />
          </Switch>
        </main>
      </div>
    </div>
  </Router>  
), document.querySelector('#root'))