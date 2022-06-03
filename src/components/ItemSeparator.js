import React from 'react';
import {useColorScheme, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const ItemSeparator = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    return (
        <View style={[backgroundStyle,
            {
                height: 1,
                backgroundColor: 'gray',
                marginHorizontal: 10,
            },
        ]}></View>
    );
};
export default ItemSeparator;
