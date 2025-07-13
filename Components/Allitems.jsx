import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Color } from "../Constant/Color";
import { moderateScale, scale } from "react-native-size-matters";
import * as Icon from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { useState } from "react";

const Allitems = ({ data, setdata,name }) => {
  const [Ischecked, setChecked] = useState(false);

  const removeItem = (id) => {
    const remove = data.filter((item) => item.id !== id);
    setdata(remove);
  };

  const checkHandler = (id) => {
    let Data = data;
    const index = Data.findIndex((item) => item.id === id);
    Data[index].isdone = !Data[index].isdone;
    setdata(Data);
    setChecked(!Ischecked);
  };

  return (
    <View style={styles.container}>
      <View style={styles.Heading_box}>
      <Text style={styles.Heading}>{name}</Text>
       <Text style={styles.Headlength}>{data.length}</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ gap: 15, paddingBottom: 80 }}
        renderItem={({ item, index }) => {
          return (
            <>
              <View key={index} style={styles.box}>
                <View style={{ flexDirection: "row", gap: 15 }}>
                  <TouchableOpacity
                    key={index}
                    onPress={() => checkHandler(item.id)}
                  >
                    <Checkbox
                      value={item.isdone}
                      onValueChange={() => checkHandler(item.id)}
                      style={styles.Checkbox}
                    />
                  </TouchableOpacity>
                  <Text
                    style={[
                      styles.txt,
                      item.isdone
                        ? { textDecorationLine: "line-through" }
                        : null,
                    ]}
                  >
                    {item.task}
                  </Text>
                </View>

                <TouchableOpacity
                  style={styles.delcon}
                  onPress={() => removeItem(item.id)}
                >
                  <Icon.MaterialIcons
                    name="delete-outline"
                    size={scale(20)}
                    color="white"
                  />
                </TouchableOpacity>
              </View>
            </>
          );
        }}
      />
    </View>
  );
};

export default Allitems;

const styles = StyleSheet.create({
  container: {
    marginTop: moderateScale(15),

    flex: 1,
  },

  box: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    backgroundColor: Color.primary_color,
    paddingVertical: moderateScale(15),
    paddingHorizontal: moderateScale(15),
    borderRadius: 20,
  },
  txt: {
    color: Color.light_fade,
  },
  delcon: {
    backgroundColor: "#ee4242e1",
    paddingVertical: moderateScale(5),
    paddingHorizontal: moderateScale(5),
    borderRadius: 10,
  },
  Checkbox: {
    borderRadius: 50,
    borderColor: Color.pink,
  },
  Heading: {
    padding: moderateScale(10),
    fontSize: scale(20),
    fontWeight: "800",
    color:Color.grey
  },
  Heading_box:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    gap:5,
    paddingHorizontal:10,
    marginBottom:20,
  },
  Headlength:{
    borderWidth:1,
     borderColor:Color.light_fade,
     paddingVertical:5,
     paddingHorizontal:10,
     fontSize:scale(15),
     fontWeight:'800',
     color:"#31D09E",
     borderRadius:10
  }

});
