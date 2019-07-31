import React, { useState } from 'react';

import { View, TextInput, Button } from 'react-native';

const LoginScreen = ({ onSubmit }) => {

    const [userName, setUserName] = useState(""); 

    const handlePress = () => {
        if(userName) return onSubmit(userName);
    }
    
    return (
        <View>
            <TextInput
                placeholder="Username"
                onChangeText={(value) => setUserName(value)}
            />
            <Button
                onPress={handlePress}
                title="Login"
            />
        </View>
    )
}

export default LoginScreen;