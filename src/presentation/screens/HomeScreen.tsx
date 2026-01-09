import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AuthContext } from '../../app/context/AuthContext';
import PrimaryButton from '../components/PrimaryButton';
import { colors, spacing } from '../theme/theme';

export default function HomeScreen() {
    const { user, logout } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home</Text>

            <View style={styles.card}>
                <Text style={styles.label}>Name</Text>
                <Text>{user?.name}</Text>

                <Text style={styles.label}>Email</Text>
                <Text>{user?.email}</Text>
            </View>

            <PrimaryButton title="Logout" onPress={logout} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: spacing.lg,
        backgroundColor: colors.background,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        marginBottom: spacing.lg,
    },
    card: {
        backgroundColor: colors.surface,
        padding: spacing.md,
        borderRadius: 8,
        marginBottom: spacing.lg,
    },
    label: {
        fontWeight: '600',
        marginTop: spacing.sm,
    },
});
