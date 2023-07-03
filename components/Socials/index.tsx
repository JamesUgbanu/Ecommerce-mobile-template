import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useTranslation } from "react-i18next";
import { styles } from './styles';
import SvgIcon from '../../components/SvgIcon';

type SocialsProps = {
    spacing?: number;
    width?: number;
    height?: number;
    loginOrRegisterText?: string;
};

const Socials = (props: SocialsProps) => {
    const { t } = useTranslation();
    const {
        width = 24,
        height = 24,
        spacing = 10,
        loginOrRegisterText
    } = props

    return (
        <View>
            <Text>{loginOrRegisterText}</Text>
            <View style={styles.socials}>
                <TouchableOpacity style={styles.socialButton}>
                    <SvgIcon name="google" width={width} height={height} />
                </TouchableOpacity>
                <View style={{ marginHorizontal: spacing }} />
                <TouchableOpacity style={styles.socialButton}>
                    <SvgIcon name="facebook" width={width} height={height} />
                </TouchableOpacity>
            </View>
        </View>
    );
}


export default Socials;