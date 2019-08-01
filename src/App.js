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


const App = () => {
	
	const [player, setPlayer] = useState({
		username: 'jb',
		coins: 50,
		number: null
	});

	const getNumber = () => {
        return Math.floor(Math.random() * 5);
    }

	const [cpu, setCpu] = useState( getNumber() )


	const handleSubmit = (value) => {
		setPlayer({ ...player, username:value })
	}

	const handleCpuChange = () => {
		setCpu( getNumber() )
	}

	const handlePlayerChange = (key, value) => {
		setPlayer({ ...player, [key]: value })
	}

	const renderGame = () => {
		if(!player.username){
			return <LoginScreen onSubmit={handleSubmit} />
		}
		return <Game 
				player={player} 
				cpu={cpu} 
				onPlayerChange={handlePlayerChange} 
				onCpuChange={handleCpuChange}

				/>
	}

	return (
		<Fragment>
			{renderGame()}
		</Fragment>
	);
};

export default App;
