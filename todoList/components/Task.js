import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.name}</Text>
      </View>
      <View style={styles.circular}>
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFFFFF',
        width:"335px",
        height:"53px",
        marginBottom:"20px",
        borderRadius: "10px"
      },
      itemLeft: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
        margin:"auto",
        marginLeft:"5px"
      },
      square: {
        width:"24px",
        height:"24px",
        backgroundColor: "rgba(47, 105, 255, 0.4)",
        borderRadius: "5px",
        marginRight:"10px"
      },
      itemText: {
        maxWidth: "90%",
      },
      circular: {
          borderRadius:"20px",
          borderColor:"#ff5733"
      },
});

export default Task;