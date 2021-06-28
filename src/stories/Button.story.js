import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { View, Dimensions } from "react-native";

import { Button } from '../components/Button';

import { DEVICE_WIDTH, DEVICE_HEIGHT,  relativeHeight, getScaledValue, DEVICE_PADDING_WIDTH, BORDER_RADIUS } from '../config/Metrics';


storiesOf('Button', module)
.addDecorator(getStory => (
    <View style={{ flex: 1, marginVertical: 40, marginHorizontal: 50, marginTop: width/2 }}>{getStory()}</View>
  ))
  .add('default', () => (
    <Button onPress={action('tapped-default')}>Add Task</Button>
  ))
  .add('istextBtn', () => (
    <Button onPress={action('tapped-default')}>Add Task</Button>
  ))