import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default class Greeting extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '' }
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={{height: 30, borderColor: 'gray', borderWidth: 1}} placeholder='Write your name...'
                    onChangeText={(name) => this.setState({name})} />
                <Text style={{ marginTop: 10 }}>Welcome to this CI/CD course!, {this.state.name}!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        marginHorizontal: 16,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
    },
});