import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { View, Dimensions } from "react-native";

storiesOf('ActionSheetComponent', module)
.addDecorator(getStory => (
    <View>{getStory()}</View>
  ))
  .add('default', () => (
    <ActionSheetComponent ></ActionSheetComponent>
  ))
