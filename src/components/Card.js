import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { DEVICE_PADDING_WIDTH, BORDER_RADIUS, relativeWidth, relativeHeight, getScaledValue } from '../config/Metrics';
import colors from '../config/colors';
import { Entypo, MaterialIcons } from '@expo/vector-icons';

//card component which shows added cards
const Card = ({ text, action, isMarked, isMarkedAction }) => {

    //whenever card is marked, fill this primary color
    let markViewStyle = isMarked ? colors.primary :  null
    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.markViewContainer, {backgroundColor: markViewStyle}]} onPress={isMarkedAction}>
                <MaterialIcons name="done" size={17} color={colors.white} />
            </TouchableOpacity>
            <View style={styles.detailView}>
                <Text style={styles.titleStyle}>{text}</Text>
            </View>
            <TouchableOpacity style={styles.deleteView} onPress={action}>
                <Entypo name="cross" size={25} color={colors.error} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: BORDER_RADIUS,
        borderWidth: 1,
        borderColor: colors.gray,
        paddingHorizontal: relativeWidth(10),
        paddingVertical: relativeHeight(10),
        width: DEVICE_PADDING_WIDTH,
        marginTop: relativeHeight(10),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleStyle: {
        color: colors.gray,
        fontSize: getScaledValue(25),
        fontStyle: 'normal',
        letterSpacing: 0,
        // textAlign: 'center',
    },
    detailView: {
        flex: 1,
        paddingLeft: relativeWidth(15)
    },
    deleteView: {
        height: relativeHeight(30),
        width: relativeHeight(30),
        justifyContent: 'center',
        alignItems: 'center',
    },
    markViewContainer:{
        height: relativeHeight(30),
        width: relativeHeight(30),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: relativeHeight(60),
        borderWidth:0.5,
        borderColor: colors.gray,
    }
});

Card.propTypes = {
    text: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired
};

export default Card;
