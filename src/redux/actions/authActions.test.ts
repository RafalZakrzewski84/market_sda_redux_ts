import { setAuthState } from "./authActions";

describe('setAuthState()', () => {
    it('should return object of type action', () => {
        const authState = true;
        const result = setAuthState(authState);
        expect(result).not.toBeNull();
        expect(result).toHaveProperty('type');
        expect(result).toHaveProperty('payload');
    })

})