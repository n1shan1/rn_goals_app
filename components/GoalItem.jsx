import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";

const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#5fdbcf" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
      >
        <Text style={styles.textStyle}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,

    color: "white",
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  textStyle: {
    color: "white",
    padding: 8,
  },
});

export default GoalItem;
