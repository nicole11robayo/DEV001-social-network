export const signInWithEmailAndPassword = jest.fn((email) => Promise.resolve({ user: { email } }));
export const GoogleAuthProvider = jest.fn();
export const signInWithPopup = jest.fn(GoogleAuthProvider);
export const getAuth = jest.fn();
export const createUserWithEmailAndPassword = jest.fn(() => Promise.resolve({}));
