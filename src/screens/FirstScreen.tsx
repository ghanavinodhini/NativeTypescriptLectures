import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity, SafeAreaViewBase, SafeAreaView } from 'react-native'
import { tokens } from '../../helpers/translation/appStrings'
import { translate } from '../../helpers/translation/translationConfig'
import { MaterialIcons } from '@expo/vector-icons'

const FirstScreen:  React.FC = (props:any) => {
    return (
        <SafeAreaView>
            <Text>{translate(tokens.screens.screen1.mainText)}</Text>
            <TouchableOpacity
                    style={styles.btnStyle}
                    onPress={() => props.navigation.navigate("SecondScreen")}>
                      <MaterialIcons name="arrow-forward" size={30} color="red" />
            <Text style={styles.buttonText}>{translate(tokens.screens.screen1.buttonText)}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default FirstScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    btnStyle: {
        padding: 25,
        borderRadius: 25,
        borderColor: "green",
        borderWidth: 2,
      },
      buttonText: {
        color: "black",
        fontSize: 15,
        fontWeight: "bold",
      },
})
