import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { View, Dimensions } from "react-native";

import Card from '../components/Card';


storiesOf('Card', module)
  .addDecorator(getStory => (
    <View>{getStory()}</View>
  ))
  .add('default', () => (
    <Card 
      text={'Hello World'}
      action={() => console.log('Hello World')}/>
  ))