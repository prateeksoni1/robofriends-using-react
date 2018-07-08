import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './Robots';
import SearchBox from './SearchBox';
import './App.css';

class App extends Component{

	constructor() {
		super();
		this.state = {
			robots: robots,
			searchField: ''
		}
	}

	onSearchChanged = (event) => {
		this.setState({ searchField: event.target.value});
		console.log(event.target.value);
	}

	render() {
		const filteredRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		});
		return (
			<div className = 'tc'>
				<h1 className='f1'>Robofriends</h1>
				<SearchBox searchChange={this.onSearchChanged}/>
				<CardList robots = {filteredRobots} />
			</div>
		);
	}
	
}

export default App;