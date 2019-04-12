import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import IconExample from './lib/icon/iconExample'

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
          <Link to="/icon">icon</Link>
        </aside>
        <main>
          <Route path="/icon" component={IconExample} />
        </main>
      </div>
    </div>
  </Router>  
), document.querySelector('#root'))