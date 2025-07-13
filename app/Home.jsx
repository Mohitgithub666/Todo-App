import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  View,
} from "react-native";
import { SafeAreaView } from "react-native";
import { Color } from "../Constant/Color";
import { moderateScale } from "react-native-size-matters";
import * as Icon from "@expo/vector-icons";

import Allitems from "../Components/Allitems";
import { useState } from "react";

import Bottom from "../Components/Bottom";
import Search from "../Components/Search";
const Data = [
  {
    id: 1,
    task: "Breakfast",
    isdone: false,
  },
  {
    id: 2,
    task: "Lunch",
    isdone: false,
  },
];
export default function Index() {
  const [view, Setview] = useState(0);
  const [data, SeData] = useState(Data);
  const [search, setSearch] = useState("");

  const FilterData = data.filter((item) => item.task.includes(search));

  return (
    <>
      <SafeAreaView style={styles.Container}>
        <Search search={search} setSearch={setSearch} />

        <View style={styles.category}>
          <TouchableOpacity
            style={[
              styles.catBtn,
              view === 0
                ? {
                    backgroundColor: Color.primary_color,
                    borderColor: Color.light_blu,
                  }
                : null,
            ]}
            onPress={() => Setview(0)}
          >
            <Icon.SimpleLineIcons
              name="notebook"
              size={20}
              color={view === 0 ? Color.pink :Color.light_fade}
            />
            <Text style={{ color: Color.light_fade }}>All Task</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.catBtn,
              view === 1
                ? {
                    backgroundColor: Color.primary_color,
                    borderColor: Color.light_blu,
                  }
                : null,
            ]}
            onPress={() => Setview(1)}
          >
            <Icon.Feather
              name="check-circle"
              size={20}
              color={view === 1 ? "#31D09E" :Color.light_fade}
            />
            <Text style={{ color: Color.light_fade }}>Complete</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.catBtn,
              view === 2
                ? {
                    backgroundColor: Color.primary_color,
                    borderColor: Color.light_blu,
                  }
                : null,
            ]}
            onPress={() => Setview(2)}
          >
            <Icon.Entypo name="circle" size={20} color={view === 2 ? Color.pink:Color.light_fade} />
            <Text style={{ color: Color.light_fade }}>Progress</Text>
          </TouchableOpacity>
        </View>

        

        <KeyboardAvoidingView
          behavior={Platform.OS === "android" ? "height" : "padding"}
          keyboardVerticalOffset={Platform.OS === "android" ? 0 : 100}
          style={{ flex: 1 }}
        >
          {view === 0 && <Allitems data={FilterData} setdata={SeData} name='All Task' />}
          {view === 1 && (
            <Allitems
              data={FilterData.filter((item) => item.isdone === true)}
              name='Complete Task'
            />
          )}
          {view === 2 && (
            <Allitems
              data={FilterData.filter((item) => item.isdone === false)}
              name='Progress Task'
            />
          )}

          <Bottom setdata={SeData} data={FilterData} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  Container: {
    paddingTop: Platform.OS === "android" ? moderateScale(50) : 0,
    flex: 1,
    backgroundColor: Color.bgcolor,
    paddingHorizontal: moderateScale(20),
  },

  category: {
    flexDirection: "row",
    marginTop: moderateScale(25),
    justifyContent: "space-around",
    
  },
  catBtn: {
    flexDirection: "row",
    gap: 5,
    borderWidth: moderateScale(1),
    borderColor: Color.light_fade,
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(10),
    borderRadius: 15,
  },
});
