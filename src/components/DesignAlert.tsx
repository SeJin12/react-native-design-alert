import React from 'react';
import {
    ColorValue,
    DimensionValue,
    Image,
    ImageSourcePropType,
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

interface Props {
    visible: boolean;
    type: 'success' | 'warn';
    themeColor: 'blue' | 'red';
    title: string;
    message?: string;
    onClose: () => void;
    onSubmit: () => void;
    animationType?: 'none' | 'slide' | 'fade' | undefined;
    alertBoxWidth?: DimensionValue;
    alertBoxminHeight?: DimensionValue;
    alertBoxHeight?: DimensionValue;
    alertBoxBackgroundColor?: ColorValue
    buttonHeight?: number
    buttonletterSpacing?: number
    backgroundColor?: ColorValue
    buttonConfirmTextColor?: ColorValue
    buttonConfirmText?: string,
    buttonCancelBackgroundColor?: ColorValue
    buttonCancelTextColor?: ColorValue
    buttonCancelText?: string
    isImageSource?: boolean
    imageSuccessSource?: ImageSourcePropType
    imageWarnSource?: ImageSourcePropType
    buttonConfirmBackgroundColor?: ColorValue
}

const DesignAlert = ({
    visible,
    type,
    themeColor,
    title,
    message,
    onClose,
    onSubmit,
    animationType = 'none',
    alertBoxWidth = '80%',
    alertBoxminHeight = 160,
    alertBoxHeight = 160,
    alertBoxBackgroundColor = 'white',
    buttonHeight = 40,
    buttonletterSpacing = 1,
    backgroundColor = 'rgba(0, 0, 0, 0.2)',
    buttonConfirmTextColor = 'white',
    buttonConfirmText = 'Done',
    buttonCancelBackgroundColor = 'white',
    buttonCancelTextColor = 'black',
    buttonCancelText = 'Cancel',
    isImageSource = false,
    imageSuccessSource = undefined,
    imageWarnSource = undefined,
    buttonConfirmBackgroundColor = undefined
}: Props) => {

    const getImageSource = (type: string, themeColor: string) => {
        if (isImageSource === true) {
            if (imageSuccessSource !== undefined && type === 'success') {
                return imageSuccessSource;
            } else if (imageWarnSource !== undefined && type === 'warn') {
                return imageWarnSource;
            }
        }
        if (type === 'success') {
            if (themeColor === 'blue') {
                return require('../assets/blue_success.png');
            } else if (themeColor === 'red') {
                return require('../assets/red_success.png');
            }
        } else if (type === 'warn') {
            if (themeColor === 'blue') {
                return require('../assets/blue_warn.png');
            } else if (themeColor === 'red') {
                return require('../assets/red_warn.png');
            }
        }
    }

    return (
        <Modal visible={visible} animationType={animationType} transparent>
            <View style={StyleSheet.compose(styles.container, {
                backgroundColor,
            })}>
                <View style={StyleSheet.compose(styles.alertBox, {
                    width: alertBoxWidth,
                    minHeight: alertBoxminHeight,
                    height: alertBoxHeight,
                    backgroundColor: alertBoxBackgroundColor
                })}>
                    <View style={styles.imageBox}>
                        <Image
                            source={
                                getImageSource(type, themeColor)
                            }
                            resizeMode="center"
                            style={styles.imageBoxIcon}
                        />
                    </View>
                    <View style={styles.contentBox}>
                        <View style={styles.titleBox}>
                            <Text style={styles.title}>{title}</Text>
                        </View>
                        {!!message && (
                            <View style={styles.titleBox}>
                                <Text style={styles.subTitle}>{message}</Text>
                            </View>
                        )}
                    </View>
                    <View style={styles.buttonContainer}>
                        {type === 'success' && (
                            <TouchableOpacity
                                style={StyleSheet.compose(styles.button, {
                                    backgroundColor: buttonConfirmBackgroundColor !== undefined ? buttonConfirmBackgroundColor : themeColor === 'blue' ? '#4f6cc9' : '#ea0b5f',
                                    height: buttonHeight,
                                })}
                                onPress={onSubmit}>
                                <Text style={StyleSheet.compose(styles.buttonConfirmText, {
                                    letterSpacing: buttonletterSpacing,
                                    color: buttonConfirmTextColor
                                })}>{buttonConfirmText}</Text>
                            </TouchableOpacity>
                        )}
                        {type !== 'success' && (
                            <TouchableOpacity
                                style={StyleSheet.compose(styles.buttonConfirm, {
                                    backgroundColor: buttonConfirmBackgroundColor !== undefined ? buttonConfirmBackgroundColor : themeColor === 'blue' ? '#4f6cc9' : '#ea0b5f',
                                    height: buttonHeight
                                })}
                                onPress={onSubmit}>
                                <Text style={StyleSheet.compose(styles.buttonConfirmText, {
                                    letterSpacing: buttonletterSpacing,
                                    color: buttonConfirmTextColor
                                })}>{buttonConfirmText}</Text>
                            </TouchableOpacity>
                        )}
                        {type !== 'success' && (
                            <TouchableOpacity
                                style={StyleSheet.compose(styles.buttonCancel, {
                                    height: buttonHeight,
                                    backgroundColor: buttonCancelBackgroundColor
                                })}
                                onPress={onClose}>
                                <Text style={StyleSheet.compose(styles.buttonCancelText, {
                                    letterSpacing: buttonletterSpacing,
                                    color: buttonCancelTextColor
                                })}>{buttonCancelText}</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    alertBox: {
        borderRadius: 21,

    },
    imageBox: {
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        height: 60,
        marginTop: 2
    },
    imageBoxIcon: {
        height: 50,
        width: 50,
    },
    contentBox: {
        flex: 1,
        paddingTop: 5,
        paddingBottom: 10
    },
    titleBox: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '700',
    },
    subTitle: {
        fontSize: 12,
        textAlign: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: 'transparent'
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    buttonConfirm: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 20,
    },
    buttonCancel: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 20,
    },
    buttonConfirmText: {
        fontWeight: '700'
    },
    buttonCancelText: {
        fontWeight: '700'
    },
});

export {
    DesignAlert
};