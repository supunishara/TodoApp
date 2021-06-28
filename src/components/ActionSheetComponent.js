import React, { useState, useEffect, forwardRef, useRef, useImperativeHandle, } from "react";
import { TouchableOpacity, Text, StyleSheet, View, Dimensions } from 'react-native';
import colors from '../config/colors';
import Button from './Button';
import TextInputComponent from './TextInputComponent';
import { DEVICE_WIDTH, DEVICE_HEIGHT, relativeHeight, getScaledValue, } from '../config/Metrics';
import ActionSheet from "react-native-actions-sheet";
import { addTask } from "../actions";
import { useSelector, useDispatch } from 'react-redux'

//action sheet which popup when adding a task
const ActionSheetComponent = forwardRef((props, ref) => {
    const dispatch = useDispatch()
    const actionSheetRef = useRef();
    const [changeText, setChangeText] = useState({});

    useImperativeHandle(
        ref,
        () => ({
            openSheet() {
                actionSheetRef.current?.setModalVisible(true);
            }
        }),
    )
    return (
        <ActionSheet ref={actionSheetRef} >
            <View style={styles.container}>
                <Text style={styles.titleStyle}>Create a task</Text>
                <TextInputComponent placeholder='Task Title' onChangeText={value => setChangeText(value)}/>
                <Button children='Add' istextBtn={false} action={() => {
                    actionSheetRef.current?.setModalVisible(false);
                    dispatch(addTask(changeText))
                }} />
            </View>
        </ActionSheet>
    )
});

const styles = StyleSheet.create({
    container: {
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:relativeHeight(30)
    },
    titleStyle: {
        color: colors.gray,
        fontSize: getScaledValue(25),
        fontStyle: 'normal',
        letterSpacing: 0,
        textAlign: 'center',
        marginTop: relativeHeight(20)
    }
});



export default ActionSheetComponent;