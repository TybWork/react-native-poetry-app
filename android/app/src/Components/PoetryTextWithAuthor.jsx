import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { colors, fonts } from '../utilities/colors'

const PoetryTextWithAuthor = ({ poetryTextArr = [], poet, time }) => {

    const [updatedTime, setupdatedTime] = useState('')
    useEffect(() => {
        const createdAt = new Date(time)
        setupdatedTime(`${createdAt.getDate()}/${createdAt.getMonth() + 1}/${createdAt.getFullYear()}`)
    }, [])
    return (
        <View style={styles.wrapper}>
            {
                poetryTextArr.map((item, index) =>
                    <Text key={index} style={styles.text}>{item || ['poetry line 1', 'poetry line 2']}</Text>
                )
            }
            <View style={styles.timeContainer}>
                <Text style={styles.poet}>{poet}</Text>
                <Text style={styles.time}>{updatedTime || ''}</Text>
            </View>
        </View >
    )
}

export default PoetryTextWithAuthor

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 12,
    },
    text: {
        color: colors.primaryClr,
        fontFamily: fonts.urdu,
        fontSize: 20,
        textAlign: 'center'
    },
    poet: {
        color: colors.primaryClr,
        fontFamily: fonts.urdu,
        fontSize: 16,
        textDecorationLine: 'underline',
        textAlign: 'left',
    },
    timeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    time: {
        fontSize: 10,
        color: colors.primaryClr
    }

})