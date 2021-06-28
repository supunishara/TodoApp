import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { DEVICE_WIDTH, BORDER_RADIUS, relativeHeight, getScaledValue, relativeWidth, DEVICE_PADDING_WIDTH } from '../config/Metrics';

import colors from '../config/colors';

//button component 
const Button = ({
  action,
  children = '',
  istextBtn = false,
}) => {
  const containerStyles = [styles.container];
  const textStyles = [styles.text];

  //if Button is a just a text show below Styles
  if (istextBtn) {
    containerStyles.push(styles.textBtnStyle);
    textStyles.push(styles.textOutline);
  }else{
    containerStyles.push(styles.defaultBtnStyle);
  }

  return (
    <TouchableOpacity style={containerStyles} onPress={action}>
      <Text style={textStyles}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.gray,
    paddingHorizontal: relativeWidth(10),
    paddingVertical: relativeHeight(5),
  },
  textBtnStyle: {
    position: 'absolute',
    right: relativeWidth(20)
  },

  text: {
    color: colors.gray,
    alignSelf: 'center',
    fontSize: getScaledValue(15),
    fontWeight: '500',

  },
  textOutline: {
    color: colors.gray,
  },
  defaultBtnStyle:{
    backgroundColor: colors.primary,
    width: DEVICE_PADDING_WIDTH,
    paddingVertical: relativeWidth(10),
    marginTop: relativeHeight(20),
    borderRadius: BORDER_RADIUS
  }
});

export default Button;