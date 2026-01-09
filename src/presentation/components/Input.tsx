import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { colors, spacing } from '../theme/theme';

export default function Input(props: any) {
    return (
        <TextInput
            {...props}
            style={[styles.input, props.style]}
            placeholderTextColor={colors.textSecondary}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: colors.border,
        backgroundColor: colors.surface,
        padding: spacing.md,
        borderRadius: 8,
        marginBottom: spacing.md,
        fontSize: 16,
        color: colors.textPrimary,
    },
});
