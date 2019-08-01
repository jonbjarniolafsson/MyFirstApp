/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, useState} from 'react';
import Game from './components/Game'
import LoginScreen from './components/LoginScreen';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const isBroke = (coins) => coins < 1
const isSameNumber = (a, b) => a === b

export default class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			player: {
				username: 'jb',
				coins: 50,
				number: null,
			},
			cpu: this.getNumber()
		}

		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleCpuChange = this.handleCpuChange.bind(this)
		this.handlePlayerChange = this.handlePlayerChange.bind(this)
	}

	getNumber() {
		return Math.floor(Math.random() * 5);
    }

	handleSubmit(value) {
		this.setState({ 'player': { ...this.state.player, 'username': value }})	
	}

	handleCpuChange() {
		this.setState({ cpu: this.getNumber() }, () => {
			const { 
				coins, 
				number
			} = this.state.player;
	
			if(!isBroke(coins)) {
				if(isSameNumber(number, this.state.cpu)) {
					this.handlePlayerChange('coins', coins + 120)
				}
				else {
					this.handlePlayerChange('coins', coins - 1)
				}
			}
			else{
				watchAd()
			}
		})
	}

	handlePlayerChange(key, value) {
		this.setState({ 'player': { ...this.state.player, [key]: value }})
	}

	renderGame() {
		if(!this.state.player.username) {
			return <LoginScreen onSubmit={this.handleSubmit} />
		}
		return <Game 
				player={this.state.player} 
				cpu={this.state.cpu} 
				onPlayerChange={this.handlePlayerChange} 
				onCpuChange={this.handleCpuChange} />
	}

	render() {
		return (
			<Fragment>
				{this.renderGame()}
			</Fragment>
		);
	}
};