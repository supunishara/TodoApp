import React, { createRef, useRef } from "react";
import { TouchableOpacity, Text, StyleSheet, View, TextInput } from 'react-native';
import colors from '../config/colors';
import Button from './Button';
import { DEVICE_WIDTH, DEVICE_HEIGHT, relativeHeight, BORDER_RADIUS, DEVICE_PADDING_WIDTH, relativeWidth } from '../config/Metrics';



//Texy input component for adding detail  for a task
 const TextInputComponent = ({ title, placeholder, onChangeText}) => {
    return <View style={styles.container}>
        <TextInput value={title} editable={true} placeholder={placeholder} onChangeText={onChangeText}/>
    </View>;
};

const styles = StyleSheet.create({
    container: {
        width: DEVICE_PADDING_WIDTH,
        borderWidth:1,
        borderColor: colors.gray,
        borderRadius: BORDER_RADIUS,
        paddingVertical: relativeWidth(10),
        marginTop: relativeHeight(20),
        paddingLeft: relativeWidth(10)
    },

});

export default TextInputComponent;