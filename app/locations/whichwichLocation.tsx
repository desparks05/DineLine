import { useNavigation } from '@react-navigation/native';
import { navigate } from 'expo-router/build/global-state/routing';
import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Pressable, ScrollView, Button } from 'react-native';
//@ts-ignore
import { RawSelectList, SelectList } from 'react-native-dropdown-select-list';
import { Link, Stack } from 'expo-router';



export default function whichwichLocation() {

    return (
        <SafeAreaView style={styles.container}>
            <Link href="/locations/zenLocation" style={styles.navBack}>Back</Link>

            <Link href="/locations/thesliceLocation" style={styles.navForward}>Next</Link>

            <Text style={styles.locationHeader}>
                Which-Wich
            </Text>
            <View style={styles.box1}>
                <Text>
                    Estimated Wait
                </Text>
            </View>
            <View style={styles.box2}>
                <Text>
                    Quality Rating
                </Text>
            </View>
            <View style={styles.box3}>
                <Text>
                    Hours of Operation
                </Text>
            </View>
            <View style={styles.box4}>
                <Text>
                    Graph
                </Text>
            </View>
            <View style={styles.reviewButton}>
                <Pressable>
                    <Text>
                        Add a Review!
                    </Text>
                </Pressable>
            </View>
            <View style={styles.reviewBox}>
                <ScrollView>
                    <Text style={styles.review}>
                        Review
                    </Text>
                    <Text style={styles.review}>
                        Review
                    </Text>
                    <Text style={styles.review}>
                        Review
                    </Text>
                    <Text style={styles.review}>
                        Review
                    </Text>
                    <Text style={styles.review}>
                        Review
                    </Text>
                    <Text style={styles.review}>
                        Review
                    </Text>
                    <Text style={styles.review}>
                        Review
                    </Text>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        marginHorizontal: 'auto',
        width: 425,
        backgroundColor: '#0033a0'
    },
    navBack: {
        position: 'absolute',
        top: 20,
        left: 30,
        borderWidth: 2,
        width: 60,
        height: 30,
        textAlign: 'center',
        textDecorationLine: 'underline',
    },
    navForward: {
        position: 'absolute',
        top: 20,
        right: 30,
        borderWidth: 2,
        width: 60,
        height: 30,
        textAlign: 'center',
        textDecorationLine: 'underline',
    },
    locationHeader: {
        fontSize: 30,
        textAlign: 'center',
        color: 'white',
        justifyContent: 'center'
    },
    box1: {
        position: 'absolute',
        top: 70,
        left: 10,
        width: 140,
        height: 76,
        borderWidth: 2,
        backgroundColor: 'white'
    },
    box2: {
        position: 'absolute',
        top: 157,
        left: 10,
        width: 140,
        height: 77,
        borderWidth: 2,
        backgroundColor: 'white'
    },
    box3: {
        position: 'absolute',
        top: 244,
        left: 10,
        width: 140,
        height: 76,
        borderWidth: 2,
        backgroundColor: 'white'
    },
    box4: {
        position: 'absolute',
        top: 70,
        right: 10,
        width: 250,
        height: 250,
        borderWidth: 2,
        backgroundColor: 'white'
    },
    reviewButton: {
        position: 'absolute',
        justifyContent: 'center',
        top: 330,
        left: 137.5,
        width: 125,
        height: 55,
        borderWidth: 5,
        backgroundColor: 'white'
    },
    reviewBox: {
        position: 'absolute',
        top: 395,
        left: 10,
        width: 405,
        height: 350,
        borderWidth: 5,
        backgroundColor: 'white'
    },
    review: {
        position: 'relative',
        width: 375,
        height: 75,
        borderWidth: 3,
        backgroundColor: 'gray'
    }

});