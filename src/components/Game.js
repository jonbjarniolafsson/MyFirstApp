import React from 'react';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Button,
    TouchableOpacity,
    TextInput,
    YellowBox, 
    StatusBar
} from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...)', 'Remote'])


const styles = {
    root: {
        flex:1,
        justifyContent:"flex-start",
        backgroundColor:"#4682B4", 
        alignItems:"center"
    },
    coins: {
        alignSelf: "flex-end",
        justifyContent: "flex-end",
        padding: 15,
    },
    coinsText: {
        color: "#fff",
        fontSize: 22,
    },
    text: {
        fontSize:32, 
        color:"#fff",
        marginTop: 20,
        marginBottom: 30
    },
    btn: {
        marginBottom: 15,
        marginTop: 15,
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 22,
        paddingRight: 22,
        backgroundColor: "#32d378",
    },
    btnText: {
        color: "#fff",
        fontSize:20
    },
    num: {
        marginTop: 30,
        marginBottom: 15,
        color: "#fff",
        fontSize: 32
    },
    userInput: {
        color: '#fff',
        fontSize: 22,
        textAlign: 'center'
    }
}


const Game = (props) => {
    const checkIfBroke = () => props.player.coins < 1
    const checkIfSameNumber = () => props.player.number === props.cpu

    const handlePress = () => {
        props.onCpuChange()
    }

    
    watchAd = () =>{
        // TODO
        props.onPlayerChange('coins', props.player.coins + 20);        
    }

    return (
        <View style={ styles.root }>
            <View style={ styles.coins }>
                <Text style={ styles.coinsText }>{ props.player.coins } coins</Text>
            </View>
            <TextInput 
                onChangeText={(value) =>  props.onPlayerChange('number', parseInt(value))} 
                placeholder="Choose number"
                keyboardType={'numeric'}
                style={styles.userInput}
            />
            <TouchableOpacity 
                disabled={!props.player.number}
                onPress={handlePress}   
                style={ styles.btn }>                    
                <Text style={ styles.btnText }>Spin the wheel</Text>
            </TouchableOpacity>
            <View>
                <Text 
                    style={ styles.num }>You rolled {props.cpu}!
                </Text>
            </View>
        </View>
    )
}

export default Game;