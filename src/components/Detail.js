import React, {useEffect, useState} from 'react';
import {
    RefreshControl,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    useColorScheme,
} from 'react-native';
import Loading from './Loading';
import Location from '../models/location';
import {environment} from '../environment';
import {Error} from './Error';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Authorization from '../utils/Authorization';
interface Props {
    location: location;
}
const Detail = (props: Props) => {
    const [loading, setLoading] = useState(true);
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);
    const isDarkMode = useColorScheme() === 'dark';
    const textStyle = {
        color: isDarkMode ? Colors.lighter : Colors.darker,
    };
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    useEffect(() => {
            loadData();
        },
        []);

    useEffect(() => {
    }, []);
    const loadData = () => {
        setError(null);
        setLoading(false);
        setLocation(props.location);
        /*fetch(environment.baseURL + 'api/locations/' + props.id, Authorization)
            .then(res => res.json())
            .then(data => {
                setLocation(new Location(data));
                setLoading(false);
            }).catch(e => setError(e));*/
    };

    const handleRefresh = () => {
        loadData();
    };
    if (error) {
        return <Error onRefresh={() => loadData()}></Error>;
    }
    return (
        loading ?
            <Loading></Loading>
            : <ScrollView style={[backgroundStyle,styles.container]}
                refreshControl={
                    <RefreshControl
                        refreshing={loading}
                        onRefresh={handleRefresh}
                    />
                }><SafeAreaView>
                <TouchableOpacity>
                    <Text style={[textStyle, styles.textTitle]}>{location?.name}</Text>
                    <Text style={[textStyle, styles.text]}>Numero: {location?.contact}</Text>
                    <Text style={[textStyle, styles.text]}>Latitud: {location?.latitude}</Text>
                    <Text style={[textStyle, styles.text]}>Longitud: {location?.longitude}</Text>

                </TouchableOpacity>
            </SafeAreaView>
            </ScrollView>
    );
};
export default Detail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        borderRadius: 10,
        padding: 8,
    },
    textTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        flex: 1,
        textAlign: 'center',
    },
    text: {
        flex: 1,
        textAlign: 'justify',
    },
});
