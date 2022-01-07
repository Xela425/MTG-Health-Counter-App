import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableHighlight, TextInput, Image, ImageBackground, Dimensions } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;


export default class App extends Component {
    state = {
        inputValue: 'Input Number',
        P1_Health: 20,
        P2_Health: 20,
        P3_Health: 20,
        P4_Health: 20,
        Add_or_Subtract: '+',
    };
    calculateHealthP1 = (amount) => {
        if (this.state.Add_or_Subtract == '+') {
            this.state.P1_Health = this.state.P1_Health + amount
        } else if (this.state.Add_or_Subtract == '-') {
            this.state.P1_Health = this.state.P1_Health - amount
        }
    };
    calculateHealthP2 = (amount) => {
        if (this.state.Add_or_Subtract == '+') {
            this.state.P2_Health = this.state.P2_Health + amount
        } else if (this.state.Add_or_Subtract == '-') {
            this.state.P2_Health = this.state.P2_Health - amount
        }
    };
    calculateHealthP3 = (amount) => {
        if (this.state.Add_or_Subtract == '+') {
            this.state.P3_Health = this.state.P3_Health + amount
        } else if (this.state.Add_or_Subtract == '-') {
            this.state.P3_Health = this.state.P3_Health - amount
        }
    };
    calculateHealthP4 = (amount) => {
        if (this.state.Add_or_Subtract == '+') {
            this.state.P4_Health = this.state.P4_Health + amount
        } else if (this.state.Add_or_Subtract == '-') {
            this.state.P4_Health = this.state.P4_Health - amount
        }
    };
    updateScreen = () => {
        this.setState({ 
            
        })
    };
    swapSign = () => {
        if (this.state.Add_or_Subtract == '+') {
            this.state.Add_or_Subtract = '-'
        } else if (this.state.Add_or_Subtract == '-') {
            this.state.Add_or_Subtract = '+'
        }
    };
    

    render() {
        return (
            <View style={styles.container}>
                
                
                    <View style = {{flexDirection: 'row', justifyContent: 'center',}}>
                        <Image
                            source={{ uri: 'https://managathering.com/images/colorless.png' }}
                            style={{ height: deviceWidth/6, width: deviceWidth/6, }}
                        />
                        <Image
                            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Magicthegathering-logo.svg/1280px-Magicthegathering-logo.svg.png' }}
                            style={{ height: deviceWidth/6, width: 3.5 * deviceWidth/6}}
                        />
                        <Image
                            source={{ uri: 'https://managathering.com/images/colorless.png' }}
                            style={{ height: deviceWidth/6, width: deviceWidth/6 }}
                        />
                    </View>
                    <View style = {styles.counterTitleRow}>
                        <Text style = {styles.healthCounterTitle}>
                            P 1
                        </Text>
                        <Text style = {styles.healthCounterTitle}>
                            P 2
                        </Text>
                        <Text style = {styles.healthCounterTitle}>
                            P 3
                        </Text>
                        <Text style = {styles.healthCounterTitle}>
                            P 4
                        </Text>
                    </View>
                    <View style = {styles.counterRow}>
                        <View style = {styles.healthCounter}>
                            <Text style = {styles.healthCounterText}>
                                {this.state.P1_Health}
                            </Text>
                        </View>
                        <View style = {styles.healthCounter}>
                            <Text style = {styles.healthCounterText}>
                                {this.state.P2_Health}
                            </Text>
                        </View>
                        <View style = {styles.healthCounter}>
                            <Text style = {styles.healthCounterText}>
                                {this.state.P3_Health}
                            </Text>
                        </View>
                        <View style = {styles.healthCounter}>
                            <Text style = {styles.healthCounterText}>
                                {this.state.P4_Health}
                            </Text>
                        </View>
                    </View>
                    <View style = {styles.buttonRow}>
                        
                        <TouchableHighlight style = {styles.updateButton}
                            onPress={() => {
                                this.calculateHealthP1(1);
                                this.updateScreen();
                            }}
                        >
                            <Text style = {styles.buttonText}>
                                {this.state.Add_or_Subtract} 1
                            </Text>
                        </TouchableHighlight>
                        <TouchableHighlight style = {styles.updateButton}
                            onPress={() => {
                                this.calculateHealthP2(1);
                                this.updateScreen();
                            }}
                        >
                            <Text style = {styles.buttonText}>
                                {this.state.Add_or_Subtract} 1
                            </Text>
                        </TouchableHighlight>
                        <TouchableHighlight style = {styles.updateButton}
                            onPress={() => {
                                this.calculateHealthP3(1);
                                this.updateScreen();
                            }}
                        >
                            <Text style = {styles.buttonText}>
                                {this.state.Add_or_Subtract} 1
                            </Text>
                        </TouchableHighlight>
                        <TouchableHighlight style = {styles.updateButton}
                            onPress={() => {
                                this.calculateHealthP4(1);
                                this.updateScreen();
                            }}
                        >
                            <Text style = {styles.buttonText}>
                                {this.state.Add_or_Subtract} 1
                            </Text>
                        </TouchableHighlight>
                    </View>
                    <View style = {styles.buttonRow}>
                        <TouchableHighlight style = {styles.updateButton}
                            onPress={() => {
                                this.calculateHealthP1(5);
                                this.updateScreen();
                            }}
                        >
                            <Text style = {styles.buttonText}>
                                {this.state.Add_or_Subtract} 5
                            </Text>
                        </TouchableHighlight>
                        <TouchableHighlight style = {styles.updateButton}
                            onPress={() => {
                                this.calculateHealthP2(5);
                                this.updateScreen();
                            }}
                        >
                            <Text style = {styles.buttonText}>
                                {this.state.Add_or_Subtract} 5
                            </Text>
                        </TouchableHighlight>
                        <TouchableHighlight style = {styles.updateButton}
                            onPress={() => {
                                this.calculateHealthP3(5);
                                this.updateScreen();
                            }}
                        >
                            <Text style = {styles.buttonText}>
                                {this.state.Add_or_Subtract} 5
                            </Text>
                        </TouchableHighlight>
                        <TouchableHighlight style = {styles.updateButton}
                            onPress={() => {
                                this.calculateHealthP4(5);
                                this.updateScreen();
                            }}
                        >
                            <Text style = {styles.buttonText}>
                                {this.state.Add_or_Subtract} 5
                            </Text>
                        </TouchableHighlight>
                    </View>
                        
                    <View style = {{alignItems: 'center',}}>
                        <TouchableHighlight 
                            onPress={() => {
                                this.swapSign()
                                this.updateScreen()
                            }}
                        >
                            <View style = {styles.mathModeButton}>
                                <Text style = {styles.mathModeButtonText}>
                                    Add/Subtract Mode
                                </Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View style = {{flexDirection: 'row',}}>
                        <View style = {styles.pickPlayerBox}>
                            <Text style = {styles.pickPlayerText}>
                                ^P1
                            </Text>
                        </View>
                        <View style = {styles.inputBox}>
                            <TextInput style={styles.inputBoxText}
                                value={this.state.inputValue}
                                onChangeText={(inputValue) => this.setState({inputValue})}
                            />
                        </View>
                    </View>
                    <View style = {{alignItems: 'center', }}>
                        <TouchableHighlight
                            onPress={() => {
                                alert('Alert Message!')
                            }}
                        >
                        <View style = {styles.applyButton}>
                            <Text style = {styles.applyButtonText}>
                                Apply
                            </Text>
                        </View>
                        </TouchableHighlight>
                        
                        <Image
                            source={{ uri: 'https://iconape.com/wp-content/files/mj/247767/svg/247767.svg' }}
                            style={{width: deviceHeight/4, height: deviceHeight/4,}}
                        />
                    </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3800B2',
    },
    healthCounter: {
        margin:deviceWidth/50,
        backgroundColor: '#33373A',
        borderWidth: 2,
        height: deviceWidth/5,
        justifyContent: 'center',
        textAlign: 'center',
        width: deviceWidth/5,
    },
    buttonRow: {
        flexDirection: 'row', 
        height: deviceWidth/10, 
        justifyContent: 'center',  
        alignItems: 'center',
        margin: deviceWidth/50,
    },
    counterRow: {
        flexDirection: 'row',
        height: deviceWidth/5,
        justifyContent: 'center',
        margin: deviceWidth/50,
    },
    counterTitleRow: {
        height: deviceWidth/15, 
        flexDirection: 'row', 
        justifyContent: 'center'
    },
    healthCounterTitle: {
        margin: deviceWidth/50,
        width: deviceWidth/5,
        color: 'white',
        textAlign: 'center',
        fontSize: deviceWidth/20
    },
    healthCounterText: {
        fontSize: deviceWidth/10,
        color: 'white',
        
        
    },
    buttonText: {
        color: 'white',
        fontSize: deviceWidth/20,
        
        
    },
    updateButton: {
        width: deviceWidth/5,
        margin: deviceWidth/50,
        backgroundColor: '#33373A',
        borderWidth: 2,
        height: deviceWidth/8,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    mathModeButton: {
        width: 2* deviceWidth/3, 
        height: deviceWidth/10, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#33373A', 
        margin: deviceWidth/60, 
        borderWidth: 2,
        
    },
    mathModeButtonText: {
        color: 'white',
        
    },
    applyButton: {
        
        
    },
    pickPlayerBox: {
        width: deviceWidth/5, 
        height: deviceWidth/7.5, 
        backgroundColor: '#33373A', 
        margin: deviceWidth/60, 
        borderWidth: 2, 
        alignItems: 'center', 
        justifyContent: 'center',
        
    },
    pickPlayerText: {
        fontSize: deviceWidth/12,
        color: 'white',
        
    },
    inputBox: {
        flex: 1, 
        height: deviceWidth/7.5,
        backgroundColor: '#33373A', 
        margin: 5, 
        borderWidth: 2, 
        justifyContent: 'center',
        
    },
    inputBoxText: {
        fontSize: deviceWidth/15,
        margin: 5,
        color: 'white',
        
    },
    applyButton: {
        height: deviceWidth/12, 
        width: deviceWidth/6, 
        backgroundColor: '#33373A', 
        margin: deviceWidth/60, 
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    applyButtonText: {
        color: 'white',
        
        
    },
    background: {
        
        
    },
    
});