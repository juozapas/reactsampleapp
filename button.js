import React, {
    StyleSheet,
    Text,
    View,
    Platform,
    TouchableHighlight,
    RippleAndroid,
    Component
}
from 'react-native';

export default class Button extends Component {

    constructor(props) {
        super(props);
        this.style = props.style || this.getStyle();
    }

    buttonClicked() {
        console.log('button clicked!');
    }

    render() {
        var TouchableElement = TouchableHighlight;
        
        return (
            <View style={this.style.container}>
                <TouchableElement
                  style={this.style.button}
                  onPress={this.props.buttonClicked ? this.props.buttonClicked: this.buttonClicked}>
                  <View>
                      <Text style={this.style.buttonText}> {this.props.children}</Text>
                  </View>
                </TouchableElement>        
            </View>
        );
    }

    getStyle() {
        return StyleSheet.create({
            container: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                //backgroundColor: '#FFFF00'
            },
            button: {
                //textAlign: 'center',
                //backgroundColor: '#ffffff',
                marginBottom: 7,
                borderWidth: 3,
                borderColor: 'blue',
                borderRadius: 10,
                //border: '1px solid blue',
                borderRadius: 2
            }
        });

    }

}