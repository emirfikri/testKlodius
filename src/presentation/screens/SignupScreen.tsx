import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../app/context/AuthContext';
import Input from '../components/Input';
import PrimaryButton from '../components/PrimaryButton';
import { colors, spacing } from '../theme/theme';
import { isValidEmail } from '../../utils/validators';

export default function SignupScreen({ navigation }: any) {
    const { signup } = useContext(AuthContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secure, setSecure] = useState(true);
    const [error, setError] = useState('');

    const handleSignup = async () => {
        if (!name || !email || !password) {
            setError('All fields are required');
            return;
        }

        if (!isValidEmail(email)) {
            setError('Invalid email format');
            return;
        }

        if (password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }

        try {
            await signup(name, email, password);
        } catch (e: any) {
            setError(e.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create Account</Text>

            <Input placeholder="Name" value={name} onChangeText={setName} />
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

            <PrimaryButton title="Signup" onPress={handleSignup} />

            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.link}>Go to Login</Text>
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
