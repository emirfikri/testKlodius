import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors, spacing } from '../theme/theme';

export default function PrimaryButton({ title, onPress }: any) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        padding: spacing.md,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: spacing.sm,
    },
    text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});
