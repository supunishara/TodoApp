import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { View, Dimensions } from "react-native";
import TaskList from '../components/TaskList';


storiesOf('TaskList', module)
.addDecorator(getStory => (
    <View>{getStory()}</View>
  ))
  .add("with cards", () => {
    return <TaskList />;
  });