import {SafeAreaView, View} from 'react-native';
import React from 'react';
import Detail from '../components/Detail';
import Map from "../components/Map";


const DetailScreen = ({route}) => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{height:125}}
            ><Detail location={route.params.location}></Detail></View>

            <Map location={route.params.location}></Map>
        </SafeAreaView>);
};
export default DetailScreen;
