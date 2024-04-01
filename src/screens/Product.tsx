
import { StyleSheet, Text, ScrollView, View } from "react-native";
import product from "../../assets/data/product";
import QuantitySelector from "../components/ui/QuantitySelector";
import { useEffect, useState } from "react";
import Button from "../components/ui/Button";
import ImageCarousel from "../components/ui/ImageCarousel";
import { useRoute } from "@react-navigation/native";
import { generateClient } from "aws-amplify/api";
import { getProduct } from "../graphql/queries";
import { Product } from "../constant/Product";
import { ActivityIndicator } from "react-native-paper";
import { createCartProduct } from '../graphql/mutations';



const client = generateClient()

export default function ProductScreen() {

    const [quantity, setQuantity] = useState(1);
    const route = useRoute();
    const [product, setProduct] = useState<Product>();
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const oneProductResponse = await client.graphql({
                    query: getProduct,
                    variables: { id: `${route.params.id}` }
                });
                const oneProduct = oneProductResponse.data.getProduct as Product; // Type cast for safety
                setProduct(oneProduct);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, [])

    async function onAddToCart() {
        try {
            const newCartProduct = await client.graphql({
                query: createCartProduct,
                variables: {
                    input: {
                        "quantity": quantity,
                        "products": product.title
                    }
                }
            });
        } catch (error) {
            console.error('Error add to cart:', error);
        }
    }

    if (!product) {
        return <View style={styles.loading}><ActivityIndicator /></View>
    }
    return (
        <ScrollView style={styles.root}>
            <Text style={styles.title}>{product.title}</Text>
            <ImageCarousel images={product.images} />
            <Text style={styles.price}>from ${product.price.toFixed(2)}</Text>
            <Text style={styles.descritpion}>{product.description}</Text>
            <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
            <Button
                text='add to cart'
                onPress={onAddToCart}
                containerStyles={{ backgroundColor: '#dca912', }}
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
    loading: {
        justifyContent: 'center',
        alignSelf: 'center',
        flex: 1
    },

});
