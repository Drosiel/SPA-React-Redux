import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { News } from './News';
import { Home } from './Home';

const App = () => {
	return (
		<Router>
			<div className='header'>
				<div className='container header__inner'>
					<nav className='header__nav'>
						<ul className='header__list'>
							<li className='header__item'>
								<Link to='/' className='header__link'>
									Home
								</Link>
							</li>
							<li className='header__item'>
								<Link to='/news' className='header__link'>
									News
								</Link>
							</li>
						</ul>
					</nav>
					<div className='header__login'>
						<span>Вход</span>
					</div>
				</div>
			</div>
			<div className='container main'>
				<div className='main__inner'>
					<Switch>
						<Route path='/news'>
							<News />
						</Route>
						<Route path='/'>
							<Home />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
};

export default App;
