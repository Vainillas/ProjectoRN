import React from 'react';
import {ActivityIndicator, useColorScheme, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Loading = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    return (
        <View style={backgroundStyle}>
            <ActivityIndicator/>
        </View>
    );
};

export default Loading;
