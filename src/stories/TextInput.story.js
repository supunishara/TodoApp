import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { View, Dimensions } from "react-native";

import TextInputComponent from '../components/TextInputComponent';

import { DEVICE_WIDTH, DEVICE_HEIGHT,  relativeHeight, getScaledValue, DEVICE_PADDING_WIDTH, BORDER_RADIUS } from '../config/Metrics';


storiesOf('Button', module)
.addDecorator(getStory => (
    <View>{getStory()}</View>
  ))
  .add('default', () => (
    <TextInputComponent onPress={action('tapped-default')}>Add Task</TextInputComponent>
  ))