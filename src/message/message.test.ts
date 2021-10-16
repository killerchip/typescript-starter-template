import { getMessage } from './message';

test('gets Hello World message', () => {
    expect(getMessage()).toBe('Hello world');
});
