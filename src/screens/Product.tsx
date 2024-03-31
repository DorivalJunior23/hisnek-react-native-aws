
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import product from "../../assets/data/product";
import QuantitySelector from "../components/ui/QuantitySelector";
import { useState } from "react";
import Button from "../components/ui/Button";
import ImageCarousel from "../components/ui/ImageCarousel";

export default function ProductScreen() {
  
    const [quantity, setQuantity] = useState(1);
    return (
        <ScrollView style={styles.root}>
            <Text style={styles.title}>{product.title}</Text>
            <ImageCarousel images={product.images}/>
            <Text style={styles.price}>from ${product.price}</Text>
            <Text style={styles.descritpion}>{product.description}</Text>
            <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
            <Button
                text='add to cart'
                onPress={() => { console.warn('add to cart') }}
                containerStyles={{backgroundColor: '#dca912',}}
            >
            </Button>
            <Button
                text='Buy Now'
                onPress={() => { console.warn('buy Now') }}
            > 
            </Button>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    root: {
        padding: 10,
        marginVertical: 10,
    },
    title: {
        fontWeight: 'bold',
    },
    price: {
        paddingVertical: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },
    descritpion: {
        marginVertical: 10,
        lineHeight: 20,
    },
    selector: {

    },

});
