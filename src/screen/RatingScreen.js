import React, { useState } from 'react'
import { StyleSheet, View, Text, FlatList, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'

const RatingScreen = ({ navigation }) => {
    const List = [
        { id: 1, name: "bella", rate: 'https://www.cambridge.org/elt/blog/wp-content/uploads/2019/07/Blushed-Smiling-Emoji-Free-Download-IOS-Emojis.png', date: '15/12/2022', recipe: 'Ham Sandwich' },
        { id: 2, name: 'jeena', rate: 'https://www.cambridge.org/elt/blog/wp-content/uploads/2019/07/Blushed-Smiling-Emoji-Free-Download-IOS-Emojis.png', date: '15/12/2022', recipe: 'Ham Sandwich' },
        { id: 3, name: "bella", rate: 'https://www.cambridge.org/elt/blog/wp-content/uploads/2019/07/Blushed-Smiling-Emoji-Free-Download-IOS-Emojis.png', date: '15/12/2022', recipe: 'Ham Sandwich' },
        { id: 4, name: 'jeena', rate: 'https://www.cambridge.org/elt/blog/wp-content/uploads/2019/07/Blushed-Smiling-Emoji-Free-Download-IOS-Emojis.png', date: '15/12/2022', recipe: 'Ham Sandwich' },
        { id: 5, name: "bella", rate: 'https://www.cambridge.org/elt/blog/wp-content/uploads/2019/07/Blushed-Smiling-Emoji-Free-Download-IOS-Emojis.png', date: '15/12/2022', recipe: 'Ham Sandwich' },
        { id: 6, name: 'jeena', rate: 'https://www.cambridge.org/elt/blog/wp-content/uploads/2019/07/Blushed-Smiling-Emoji-Free-Download-IOS-Emojis.png', date: '15/12/2022', recipe: 'Ham Sandwich' },
        { id: 7, name: "bella", rate: 'https://www.cambridge.org/elt/blog/wp-content/uploads/2019/07/Blushed-Smiling-Emoji-Free-Download-IOS-Emojis.png', date: '15/12/2022', recipe: 'Ham Sandwich' },
        { id: 8, name: 'jeena', rate: 'https://www.cambridge.org/elt/blog/wp-content/uploads/2019/07/Blushed-Smiling-Emoji-Free-Download-IOS-Emojis.png', date: '15/12/2022', recipe: 'Ham Sandwich' },
        { id: 9, name: "bella", rate: 'https://www.cambridge.org/elt/blog/wp-content/uploads/2019/07/Blushed-Smiling-Emoji-Free-Download-IOS-Emojis.png', date: '15/12/2022', recipe: 'Ham Sandwich' },
        { id: 10, name: 'jeena', rate: 'https://www.cambridge.org/elt/blog/wp-content/uploads/2019/07/Blushed-Smiling-Emoji-Free-Download-IOS-Emojis.png', date: '15/12/2022', recipe: 'Ham Sandwich' },
    ]
    const [rating, setRating] = useState(List)

    const renderItem = ({ item }) => {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10, marginTop: 10 }}>
                <Text style={{ fontSize: 14, }}>{item.date}</Text>
                <Text style={{ fontSize: 14, right: 15 }} >{item.name}</Text>
                <Text style={{ fontSize: 14, right: 10 }}>{item.recipe}</Text>
                <Image
                    source={{ uri: item.rate }}
                    style={{ height: 20, width: 20, right: 10 }}
                />
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header
                showHeaderTitle
                headerTitle={'Rating'}
                onBackPress={() => navigation.pop()}
            />
            <View style={{}}>
                <Text style={{ fontSize: 25, fontWeight: 'bold', margin: 10 }}>Rating</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10 }}>
                    <Text style={{ fontSize: 18, fontWeight: '800' }}>Date</Text>
                    <Text style={{ fontSize: 18, fontWeight: '800' }} >Name</Text>
                    <Text style={{ fontSize: 18, fontWeight: '800' }}>Recipe</Text>
                    <Text style={{ fontSize: 18, fontWeight: '800' }} >Rating</Text>
                </View>
            </View>
            <FlatList
                data={List}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: 'green'
    }

})
export default RatingScreen