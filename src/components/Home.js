import React, { createRef, useRef, Component } from "react";
import { TouchableOpacity, Text, StyleSheet, View, Dimensions } from 'react-native';
import colors from '../config/colors';
import Button from './Button';
import Card from './Card';
import { DEVICE_WIDTH, DEVICE_HEIGHT, relativeHeight, getScaledValue, } from '../config/Metrics';
import ActionSheetComponent from './ActionSheetComponent';
import PropTypes from "prop-types";
import { addTask, removeTask, markTask } from "../actions";
import { connect } from "react-redux";

//home class where everything is handled. this is the Main Screen
class Home extends Component {

    constructor(props) {
        super(props);
        this.childRef = React.createRef(null);
    }

    //map and render cards
    renderCards = () => {
        return this.props.tasks.map((item, index) => {
            return (
                <Card
                    text={item.title}
                    action={() => this.props.removeTask(index)}
                    isMarkedAction={()=> this.props.markTask(index)}
                    isMarked={item.isMarked}
                />
            );
        });
    };

    render() {
        return <View style={styles.container}>
            <View style={styles.headerStyle}>
                <Text style={styles.titleStyle}>Home</Text>
                <Button children='Add Task' istextBtn={true} action={() => {
                    this.childRef.current.openSheet();
                }} />
            </View>
            <ActionSheetComponent ref={(ref) => (this.childRef.current = ref)} />
            <View style={styles.lowerView}>
                {this.renderCards()}
            </View>
        </View>
    }
};

const styles = StyleSheet.create({
    container: {
        width: DEVICE_WIDTH,
        height: DEVICE_HEIGHT,
    },
    headerStyle: {
        width: DEVICE_WIDTH,
        height: relativeHeight(100),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    titleStyle: {
        color: colors.gray,
        fontSize: getScaledValue(25),
        fontStyle: 'normal',
        letterSpacing: 0,
        textAlign: 'center',
    },
    lowerView: {
        width: DEVICE_WIDTH,
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: relativeHeight(50)
    }
});

Home.propTypes = {
    tasks: PropTypes.array.isRequired,
    addTask: PropTypes.func.isRequired
};

const mapStateToProps = ({ tasks }) => {
    return tasks;
};

const mapDispatchToProps = dispatch => {
    return {
      addTask: payload => dispatch(addTask(payload)),
      removeTask: payload => dispatch(removeTask(payload)),
      markTask: payload => dispatch(markTask(payload))
    };
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

