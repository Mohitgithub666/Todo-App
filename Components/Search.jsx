import { StyleSheet, Text, TextInput, View } from "react-native";
import { Color } from "../Constant/Color";
import Icon from "react-native-vector-icons/Feather";
import { moderateScale, scale } from "react-native-size-matters";
import { useState } from "react";
const Search = ({ search, setSearch }) => {
  return (
    <View style={styles.Search}>
      <Icon name="search" size={30} color={Color.light_fade} />
      <TextInput
        style={{
          paddingHorizontal: moderateScale(10),
          color: Color.light_fade,
          flex: 1,
        }}
        placeholder="search"
        placeholderTextColor={Color.light_fade}
        value={search}
        onChangeText={(e) => setSearch(e)}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  Search: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: scale(1),
    borderColor: Color.light_fade,

    borderRadius: 10,
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(5),
  },
});
