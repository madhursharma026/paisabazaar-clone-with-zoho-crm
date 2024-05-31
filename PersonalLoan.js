import { useEffect, useState } from 'react';
import { RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Image, Text, View, StatusBar, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function PersonalLoan() {
    const navigation = useNavigation();
    const [checked, setChecked] = useState('');
    const [response, setResponse] = useState(null);
    const url = 'https://accounts.zoho.in/oauth/v2/token';
    const redirect_uri = 'https://example.com/yourcallback';
    const client_id = '1000.GEQ55HXVSJ01P9O8DQ0S7YUZ9TVIDT';
    const client_secret = 'd05ae10e80fd8f358b6af7378ecaa05a759b2a88fd';
    const code = '1000.09738db1d165d3f5df683c561437bc10.18c9f995a0350917609afb0f05f4e0f6';

    function movetoSalariedPage() {
        navigation.navigate('SalariedPage')
    }

    function movetoSelfEmployedBusinessPage() {
        navigation.navigate('BusinessLoan')
    }

    function movetoSelfEmployedProfessionalPage() {
        alert("madhur")
    }

    useEffect(async () => {
        const data = new URLSearchParams();
        data.append('code', code);
        data.append('client_id', client_id);
        data.append('redirect_uri', redirect_uri);
        data.append('client_secret', client_secret);
        data.append('grant_type', 'authorization_code');
        try {
            const res = await fetch(url, {
                method: 'POST',
                body: data.toString(),
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            });
            const json = await res.json();
            await AsyncStorage.setItem('refresh_token', json.refresh_token);
            const data1 = new URLSearchParams();
            let refresh_token = json.refresh_token;
            data1.append('client_id', client_id);
            data1.append('client_secret', client_secret);
            data1.append('refresh_token', refresh_token);
            data1.append('grant_type', 'refresh_token');
            try {
                const res = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: data1.toString(),
                });
                const json1 = await res.json();
                await AsyncStorage.setItem('access_token', json1.access_token);
            } catch (error) {
                setResponse({ error: 'Error fetching access_token' });
            }
        } catch (error) {
            setResponse({ error: 'Error fetching refresh_token' });
        }
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="blue" barStyle="light-content" />
            <Image
                style={{ width: '50%', height: '5%', marginLeft: 10 }}
                source={{
                    uri: 'data:image/png;base64,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',
                }}
            />
            <View style={styles.hrStyle} />
            <View style={{ paddingLeft: 20, paddingRight: 20 }}>
                <View style={{ marginTop: 20 }}>
                    <Text style={styles.subHeading}>PERSONAL LOAN</Text>
                    <Text style={{ textAlign: 'right', marginTop: -15 }}><Text style={styles.subHeading}>Step 1/8</Text></Text>

                    <View style={{ width: '70%', marginTop: 20 }}>
                        <Text style={styles.mainHeading}>Select your Employment Type to Start your Loan Process</Text>
                    </View>
                    <RadioButton.Group onValueChange={(newValue) => setChecked(newValue)} value={checked}>
                        <View style={{ borderWidth: 1, flexDirection: 'row', padding: 20, marginTop: 10, borderRadius: 10, borderColor: '#D3D3D3' }} onTouchStart={() => (setChecked('first'), movetoSalariedPage())}>
                            <View style={{ flex: 7.25 }}>
                                <Text style={styles.radioHeading}>Salaried</Text>
                                <Text style={styles.radioSubHeading}>Receive fixed amount of income every month</Text>
                            </View>
                            <View style={{ flex: 2, height: 10, textAlign: 'center' }}>
                                <RadioButton.Item label="First item" value="first" />
                            </View>
                        </View>
                        <View style={{ borderWidth: 1, flexDirection: 'row', padding: 20, marginTop: 10, borderRadius: 10, borderColor: '#D3D3D3' }} onTouchStart={() => (setChecked('second'), movetoSelfEmployedBusinessPage())}>
                            <View style={{ flex: 7.25 }}>
                                <Text style={styles.radioHeading}>Self Employed Business</Text>
                                <Text style={styles.radioSubHeading}>Run a business</Text>
                            </View>
                            <View style={{ flex: 2, height: 10, textAlign: 'center' }}>
                                <RadioButton.Item label="Second item" value="second" />
                            </View>
                        </View>
                        <View style={{ borderWidth: 1, flexDirection: 'row', padding: 20, marginTop: 10, borderRadius: 10, borderColor: '#D3D3D3' }} onTouchStart={() => (setChecked('third'), movetoSelfEmployedBusinessPage())}>
                            <View style={{ flex: 7.25 }}>
                                <Text style={styles.radioHeading}>Self Employed Professional</Text>
                                <Text style={styles.radioSubHeading}>Engage in a profession (Eg: Doctor, C.A, etc)</Text>
                            </View>
                            <View style={{ flex: 2, height: 10, textAlign: 'center' }}>
                                <RadioButton.Item label="Third item" value="third" />
                            </View>
                        </View>
                    </RadioButton.Group>
                </View>
            </View>
            <View style={styles.bottomView}>
                <Text style={styles.subHeading}>By clicking on proceed, you have read and agreee to the Paisabazaar's Credit Report Terms of Use, Paisabazaar's Terms of Use & Privacy Policy</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        backgroundColor: 'white',
        height: '100%'
    },
    hrStyle: {
        marginTop: 10,
        width: '100%',
        height: 1,
        backgroundColor: '#D3D3D3',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
    },
    column: {
        flex: 1,
    },
    mainHeading: {
        fontSize: 24,
        color: 'blue',
        fontWeight: 600,
        lineHeight: 40
    },
    subHeading: {
        fontSize: 11,
        color: 'blue',
        fontWeight: 500,
    },
    radioHeading: {
        fontSize: 14,
        color: 'blue',
        fontWeight: 500,
    },
    radioSubHeading: {
        fontSize: 11,
        color: 'gray',
        fontWeight: 500,
    },
    bottomView: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        height: 50,
        paddingHorizontal: 20,
        marginBottom: 50
    }
});
