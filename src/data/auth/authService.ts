import { User } from '../../domain/models/User';

let mockUser: User | null = null;

export const loginUser = async (
    email: string,
    password: string
): Promise<User> => {
    if (!mockUser) throw new Error('Incorrect credentials');

    console.log('check login:', mockUser.email === email && mockUser.password === password);
    if (mockUser.email === email && mockUser.password === password) {
        return mockUser;
    } else {
        throw new Error('Incorrect credentials');
    }
};

export const signupUser = async (
    name: string,
    email: string,
    password: string
): Promise<User> => {
    mockUser = { name, email, password };
    return mockUser;
};
