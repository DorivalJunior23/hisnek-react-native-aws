import { StyleSheet } from "react-native";
import { Pressable, Text } from "react-native";

interface ButtonProps{
    text: string;
    onPress: ()=>void;
    containerStyles?: object;
}

export default function Button({text, onPress, containerStyles}: ButtonProps){
    return(
        <Pressable onPress={onPress} style={[styles.root, containerStyles]}>
            <Text style={[styles.text, containerStyles]}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    root:{
      backgroundColor: '#e47911',
      marginVertical: 10,
      height: 35,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#a15e1b',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    }
});