import { Camera } from "expo-camera";
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect, useRef } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";


export default function CameraScreen() {
    const cameraRef = useRef();
    const navigation = useNavigation();
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />
    }

    if (hasPermission === false) {
        return <Text>No Access to Camera</Text>
    }

    const snap = async () => {
        if (cameraRef) {
            const photo = await cameraRef.current.takePictureAsync();
            navigation.navigate('BestOffers', { photo })
        }
    };

    return (
        <View>
            <Camera ref={(camera) => (cameraRef.current = camera)} type={type} style={{ width: '100%', height: '100%' }}>
                <View style={styles.bottomView}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 1, paddingHorizontal: 2, }}>
                            <TouchableOpacity style={styles.buttonOutside} onPress={() => {
                                setType(
                                    type === Camera.Constants.Type.back
                                        ? Camera.Constants.Type.front
                                        : Camera.Constants.Type.back
                                )
                            }}>
                                <Text style={styles.buttonInside}>Flip</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, paddingHorizontal: 2, }}>
                            <TouchableOpacity style={styles.buttonOutside} onPress={snap}>
                                <Text style={styles.buttonInside}>Click</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Camera>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonOutside: {
        backgroundColor: 'blue',
        padding: 8,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
        marginTop: 10,
    },
    buttonInside: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
    },
    bottomView: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 50,
        paddingHorizontal: 20,
        marginBottom: 50
    },
});