import React from "react"
import { View, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity,} from "react-native"
import matchaa from "./assets/matchaa.jpg"
import plus from "./assets/plus.png"
import star from "./assets/star.png"
import tika from "./assets/tika.jpeg"



const products = [
    {id: '1', name: 'Coffee matcha', description: 'with matcha', image: require('./assets/coffee_matcha.webp'), price: '$4.50', rating: 4.8},
    {id: '2', name: 'Cookies', description: 'with matcha', image: require('./assets/cookies.jpg'), price: '$3.80', rating: 4.9},
    {id: '3', name: 'drink matcha', description: 'with matcha', image: require('./assets/drink_matcha.jpeg'), price: '$4.00', rating: 4.5},
    {id: '4', name: 'es cream', description: 'with matcha', image: require('./assets/es_cream.webp'), price: '$3.00', rating: 4.8},

];

const matcha =() => {
    return(
        <View style={{backgroundColor:"#E4CDAF" ,}}>
            <ScrollView>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 63, marginLeft: 30 , marginRight: 30}}>
                    <View style={{flexDirection: 'column'}}>
                        <Text style={styles.Lokasi}>
                            Location
                        </Text>
                        <Text style={{width:143, height:18, fontFamily:"sora", fontWeight:"600", fontSize:14, lineHeight:17.64, color: "#8B5A2B"}}>
                            Sukabumi, Indonesia.
                        </Text>
                    </View>
                    <View>
                        <Image source={tika} style={styles.Avatar}></Image>
                    </View>
                </View>

                <View style={{marginTop: 20, justifyContent: 'center', alignItems:'center' }}>
                    <TextInput placeholder="Search matcha" 
                    style={styles.search}></TextInput>
                </View>

                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 ,}}>
                    <Image source={matchaa} style={{ width: 380, height: 150, borderRadius: 14 }} />
                </View>


                <ScrollView horizontal={true} style={styles.ScrollView}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Coffee matcha</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttoncase}>
                        <Text style={styles.buttonTextcase}>Cookies</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttoncase}>
                        <Text style={styles.buttonTextcase}>drink matcha</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttoncase}>
                        <Text style={styles.buttonTextcase}>es cream</Text>
                    </TouchableOpacity>
                    
                </View>
                </ScrollView>
                <View style={styles.cardWrapper}>
                    {products.map(product => (
                        <View key={product.id} style={styles.cardContainer}>
                            <Image source={product.image} style={styles.cardImage}/>
                            <Image source={star} style={styles.iconStar}></Image>
                            <Text style={styles.rating}>{product.rating}</Text>
                        
                            <Text style={styles.cardTitle}>{product.name}</Text>
                            <Text style={styles.cardDescription}>{product.description}</Text>
                            <Text style={styles.cardPrice}>{product.price}
                            </Text>
                                <Image source={plus} style={styles.ikonplus}></Image>
                        </View>
                    ))}

                </View>
            </ScrollView>
        </View>
    )
}


export default matcha;

const styles = StyleSheet.create({
    Avatar: {
        width: 44,
        height: 44,
        borderRadius:10,
    },

    Lokasi: {
        width: 60,
        height: 15,
        color:"#8B5A2B",
        fontWeight:"500",
        fontSize:14,
        lineHeight:16.12,
        letterSpacing:1,
        fontFamily:"sora"
    },

    search:{
        paddingLeft: 20,
        borderRadius: 16,
        width: 380,
        height: 52,
        borderWidth: 2,
        borderColor: '#D2B48C',
        backgroundColor: "#C67C4E"
    },

    ScrollView: {
        marginTop: 20,
        marginLeft: 25,
    },

    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        backgroundColor:  "#C67C4E",
        borderRadius: 12,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginRight: 11,
    },

    buttoncase: {
        backgroundColor: "#C49A6A",
        borderRadius: 12,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginRight: 11,
    },

    buttonText: {
        fontWeight: "600",
        fontFamily: "sora",
        fontSize: 14,
        color: "#8B5A2B",
    },

    buttonTextcase: {
        fontWeight: "600",
        fontFamily: "sora",
        fontSize: 14,
        color: '#D2B48C',

    },

    cardWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        margin: 10,
        marginTop: 70
    },

    cardContainer: {
        backgroundColor: "#f0d9c0",
        borderRadius: 12,
        padding: 4,
        marginTop:-50,
        marginBottom:70,
        width: '45%', 
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,

    },
    cardTitle: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#4B3C30",
        marginTop:10,
        marginLeft:5
    },

    cardImage: {
        width: '100%',
        height: 130,
        borderRadius:10,
    },

    cardDescription: {
        marginTop: 1,
        fontSize: 14,
        marginLeft:7,
        color: "#4B3C30",
    },

    cardPrice: {
        marginTop: 10,
        fontSize: 20,
        marginLeft:10,
        fontWeight: 'bold',
        color:"#4B3C30",

    },

    ikonplus: {
        marginHorizontal: 100,
        marginTop: -30,
        width: 35,
        height: 35
    },

    iconStar: {
        position:"absolute",
        width: 20,
        height:20,
        marginLeft:9,
        marginTop:5
    },

    rating: {
        position: "absolute",
        color: "#4B3C30",
        fontWeight: "bold",
        marginTop: 5,
        marginLeft: 35,
    }
    
});

