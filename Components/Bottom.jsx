import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import * as Icon from "@expo/vector-icons";
import { moderateScale, scale } from "react-native-size-matters";
import { Color } from "../Constant/Color";
import { useState } from "react";

const Bottom = ({ data, setdata }) => {
  const [text, setText] = useState("");

  const handleAdditem = () => {
    const newitem = {
      id: Math.random(),
      task: text,
      isdone: false,
    };
    if (text) {
      setdata([...data, newitem]);
      setText("");
      
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textinput}
        placeholder="Enter task"
        placeholderTextColor={Color.light_fade}
        value={text}
        onChangeText={(item) => setText(item)}
      />

      <Icon.AntDesign
        style={styles.Plusicon}
        name="plus"
        size={scale(20)}
        color="white"
        onPress={() => handleAdditem()}
      />
    </View>
  );
};

export default Bottom;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    width: "100%",
    position: "absolute",

    zIndex: 50,
    bottom: 10,

    paddingHorizontal: moderateScale(15),
  },

  Plusicon: {
    backgroundColor: Color.pink,
    padding: moderateScale(15),
    borderRadius: 50,
  },
  textinput: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Color.light_fade,
    paddingHorizontal: moderateScale(15),
   fontWeight:'700',
   
    flex: 1,
    color: Color.light_fade,
  },
});
