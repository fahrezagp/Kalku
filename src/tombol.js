import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';

import Style from './style';

export default class Tombol extends Component {
    
    render() {
        return (
            <TouchableHighlight style={[Style.tombol, 
                this.props.highlight ? Style.tombolHighlighted : null]}></TouchableHighlight> )
                   
    }
    
}