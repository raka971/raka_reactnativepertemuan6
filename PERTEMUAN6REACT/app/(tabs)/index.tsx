import React from "react";
import {View, ScrollView} from 'react-native';
// import SampleComponent from './samplecomponent';
// import StylingReactNativeComponent from './stylingreactnativecomponent';
import FlexBox from "./pages/materiflexbox";
import Position from "./pages/PositionReactNative";

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent /> */}
        {/* <StylingReactNativeComponent /> */}
        <FlexBox />
        <Position />
      </ScrollView>
    </View>
  );
};

export default App;