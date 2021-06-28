import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { DEVICE_WIDTH, BORDER_RADIUS, relativeHeight, getScaledValue, relativeWidth, DEVICE_PADDING_WIDTH } from '../config/Metrics';

import colors from '../config/colors';

const TaskList = ({
  action,
  children = '',
  istextBtn = false,
}) => {
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
});

export default TaskList;