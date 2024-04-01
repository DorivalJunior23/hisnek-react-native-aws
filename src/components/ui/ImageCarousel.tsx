import { useCallback, useState } from "react";
import { FlatList, Image, StyleSheet, View, useWindowDimensions } from "react-native";


export default function ImageCarousel({ images }: { images: [string] }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const windowWidth = useWindowDimensions().width;
    const onFlatlistUpdate = useCallback(({viewableItems}) => {
        if(viewableItems.length > 0){
            setActiveIndex(viewableItems[0].index || 0);
        }
    }, []);
    return (
        <View style={styles.root}>
            <FlatList
                data={images}
                renderItem={({ item }) => (
                    <Image style={[styles.image, { width: windowWidth - 40 }]} source={{ uri: item }} />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={windowWidth - 20}
                snapToAlignment={"center"}
                decelerationRate={'fast'}
                viewabilityConfig={{
                    viewAreaCoveragePercentThreshold: 50,
                }}
                onViewableItemsChanged={onFlatlistUpdate}
            />
            <View style={styles.dotsContainer}>
                {
                    images.map((image, index) => (
                        <View
                            key={index}
                            style={[
                                styles.dot,
                                {
                                    backgroundColor: index === activeIndex ? '#65b8c0' : '#ededed',
                                }
                            ]}
                        />
                    ))
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#fff',
        padding: 10,
    },
    image: {
        margin: 10,
        height: 300,
        resizeMode: 'contain',
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 25,
        borderWidth: 1,
        backgroundColor: '#ededed',
        borderColor: '#c9c9c9',
        margin: 5,
    },
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
});
