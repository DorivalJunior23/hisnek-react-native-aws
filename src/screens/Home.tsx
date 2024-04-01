import { FlatList, StyleSheet, View } from 'react-native';
import ProductCard from '../components/ui/card/ProductCard';
import { useEffect, useState } from 'react';
import { generateClient } from "aws-amplify/api";
import { listProducts } from "../graphql/queries";
import { Product } from '../constant/Product'

const client = generateClient()

export default function HomeScreen() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const allProductsResponse = await client.graphql({
          query: listProducts, // Using graphqlOperation for clarity
        });
        const allProducts = allProductsResponse.data.listProducts.items as Product[]; // Type cast for safety
        setProducts(allProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, [])
  return (
    <View style={styles.page}>

      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard item={item} />}
        keyExtractor={({ id }) => id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },

});
