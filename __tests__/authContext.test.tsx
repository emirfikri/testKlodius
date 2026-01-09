import React from 'react';
import { renderHook, act } from '@testing-library/react-native';
import { AuthProvider, AuthContext } from '../src/app/context/AuthContext';

describe('AuthContext', () => {
    it('signup sets user', async () => {
        const wrapper = ({ children }: any) => (
            <AuthProvider>{children}</AuthProvider>
        );

        const { result } = renderHook(
            () => React.useContext(AuthContext),
            { wrapper }
        );

        await act(async () => {
            await result.current.signup('Emir', 'emir@mail.com', '123456');
        });

        expect(result.current.user?.email).toBe('emir@mail.com');
        expect(result.current.user?.name).toBe('Emir');
    });
});
