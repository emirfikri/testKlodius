import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../app/context/AuthContext';
import Input from '../components/Input';
import PrimaryButton from '../components/PrimaryButton';
import { colors, spacing } from '../theme/theme';
import { isValidEmail } from '../../utils/validators';

export default function LoginScreen({ navigation }: any) {
    const { login } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [secure, setSecure] = useState(true);

    const handleLogin = async () => {
        if (!isValidEmail(email)) {
            setError('Invalid email format');
            return;
        }
        if (!password) {
            setError('Password is required');
            return;
        }
        try {
            await login(email, password);
        } catch (e: any) {
            setError(e.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome Back</Text>

            <Input placeholder="Email" value={email} onChangeText={setEmail} />
            <Input
                placeholder="Password"
                secureTextEntry={secure}
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity onPress={() => setSecure(!secure)}>
                <Text style={styles.link}>
                    {secure ? 'Show Password' : 'Hide Password'}
                </Text>
            </TouchableOpacity>

            {error ? <Text style={styles.error}>{error}</Text> : null}

            <PrimaryButton title="Login" onPress={handleLogin} />

            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.link}>Go to Signup</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: spacing.lg,
        justifyContent: 'center',
        backgroundColor: colors.background,
    },
    title: {
        fontSize: 26,
        fontWeight: '700',
        marginBottom: spacing.lg,
        textAlign: 'center',
        color: colors.textPrimary,
    },
    link: {
        color: colors.primary,
        textAlign: 'center',
        marginVertical: spacing.sm,
    },
    error: {
        color: colors.error,
        marginBottom: spacing.sm,
        textAlign: 'center',
    },
});
