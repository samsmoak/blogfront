import React, { useState, useContext } from "react";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/main/Main";
import Login from "./components/Login";
import Setting from "./components/Setting";
import Register from "./components/Register";
import Write from "./components/Write";
import Header from "./components/Header";
import Single from "./components/singlesec/Single";
import { Context } from "./context/Context";

function App() {
	const { user } = useContext(Context);
	// const user = false;
	return (
		<div>
			<Router>
				<Navigation />
				<Switch>
					<Route exact path='/' component={Main} />
					{/* <Route exact path='carousel' component={Carousel} /> */}

					<Route exact path='/register'>
						{user ? <Main /> : <Register />}
					</Route>
					<Route exact path='/login'>
						{user ? <Main /> : <Login />}
					</Route>
					<Route exact path='/write'>
						{user ? <Write /> : <Register />}
					</Route>
					<Route exact path='/setting'>
						{user ? <Setting /> : <Register />}
					</Route>
					<Route exact path='/post/:postId' component={Single} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
