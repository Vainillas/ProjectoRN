import React, {useEffect, useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Location from '../models/location';

interface Props {
    location?: Location;
}

const Map = (props: Props) => {
    const [location, setLocation] = useState(null);

    useEffect(() => {
            console.log(props)
            setLocation(props.location);
        },
        []);
    if (location == null) return <View></View>
    else
        return (
            <View style={styles.container}>
                <MapView
                    zoomControlEnabled={true}

                    provider={PROVIDER_GOOGLE}
                    style={styles.mapStyle}
                    showsUserLocation={true}
                    initialCamera={{
                        center:{
                            latitude: location.latitude,
                            longitude: location.longitude,
                        },
                        pitch:45,
                        heading:90,
                        altitude:1000,
                        zoom:15,
                    }}
                    mapType="standard"

                >
                    <Marker coordinate={
                        {
                            latitude: location.latitude,
                            longitude: location.longitude,
                        }}/>
                </MapView>

            </View>
        );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mapStyle: {
        width: '100%',
        height: '100%',
    },
});
export default Map;


