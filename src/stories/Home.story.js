import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { View, Dimensions } from "react-native";
import Provider from "../components/Provider";
import  Home from '../components/Home';


storiesOf('Home', module)
.addDecorator(getStory => <Provider>{getStory()}</Provider>)
  .add('default', () => (
    <Home />
  ))