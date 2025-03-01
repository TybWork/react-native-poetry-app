import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, Alert } from 'react-native';
import ShareIcon from '../assets/icons/ShareIcon';
import StarIcon from '../assets/icons/StarIcon';
import LockIcon from '../assets/icons/LockIcon';
import CategoryIcon from '../assets/icons/CategoryIcon';
import HeartIcon from '../assets/icons/HeartIcon';
import HomeIcon from '../assets/icons/HomeIcon';
import { colors, fonts } from '../utilities/colors';
import CrossIcon from '../assets/icons/CrossIcon';
import { useDispatch } from 'react-redux';
import { setTabIndex } from '../reduxStore/features/counterSlice';
import NavigationLink from './NavigationLink';

const CustomDrawerContent = (props) => {
    const dispatch = useDispatch()
    const handleOnPress = (type) => {
        if (type === 'Home') {
            props.navigation.navigate('Home');
            dispatch(setTabIndex(0))
        } else if (type === "Favourite") {
            props.navigation.navigate('Favourite');
            dispatch(setTabIndex(1))
        }
        else if (type === 'PrivacyPolicy') {
            // dispatch(setTabIndex(0))
            props.navigation.navigate('PrivacyPolicy')
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.drawerHeader}>
                <View style={styles.crossIcon}><CrossIcon onPress={() => props.navigation.closeDrawer()} /></View>
                <Text style={styles.headerText}>روحِ بیاں</Text>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.whiteContainer}>
                    <ScrollView contentContainerStyle={styles.drawerContent}>
                        <NavigationLink text={"Home"} urduText={'پہلا صفحہ'} icon={<HomeIcon />}
                            onPress={() => handleOnPress('Home')}
                        />
                        {/* <NavigationLink text={"Rate Us"} urduText={"ہماری حوصلہ افزائی کریں"} icon={<StarIcon fill='#FFCC00' />} onPress={() => props.navigation.navigate('Home')} /> */}
                        <NavigationLink text={"Favourites"} urduText={'آپ کی پسند'} icon={<HeartIcon fill='red' />} onPress={() => handleOnPress('Favourite')} />
                        <NavigationLink text={"Privacy Policy"} urduText={'قوائد و ضوابط'} icon={<LockIcon />} onPress={() => handleOnPress('PrivacyPolicy')} />
                        {/* <NavigationLink text={"Share"} urduText={"دوستوں کو بتائیں"} icon={<ShareIcon />} onPress={() => props.navigation.navigate('Home')} /> */}
                    </ScrollView>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerHeader: {
        backgroundColor: colors.secondryClr,
        height: 124,
        width: '100%',
        borderBottomLeftRadius: 40,
        paddingHorizontal: 24,
        paddingVertical: 12,
        position: 'relative'
    },
    crossIcon: {
        position: 'absolute',
        right: 12,
        top: 12,
        transform: 'scale(.8)',
        zIndex: 123
    },
    headerText: {
        fontSize: 36,
        textAlign: 'center',
        color: colors.primaryClr,
        top: '20%',
        fontFamily: fonts.urdu
    },
    contentContainer: {
        height: '100%',
        backgroundColor: colors.secondryClr,
        position: 'relative',
        overflow: 'hidden',
    },
    whiteContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        paddingVertical: 52,
        paddingHorizontal: 24,
        borderTopRightRadius: 40,
        backgroundColor: colors.primaryClr,
        overflow: 'scroll'
    },
    drawerContent: {
        gap: 20,
    }
});

export default CustomDrawerContent;
