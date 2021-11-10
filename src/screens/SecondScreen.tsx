import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { tokens } from "../../helpers/translation/appStrings";
import { translate } from "../../helpers/translation/translationConfig";

const SecondScreen = () => {
  return (
    <View style={styles.container}>
      <Text>{translate(tokens.screens.screen2.mainText)}</Text>
    </View>
  );
};

export default SecondScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});