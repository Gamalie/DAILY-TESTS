// Import the function to be tested
import { mostAppearing} from './mostAppering.js';
import {describe,expect,it} from 'vitest'

// Test case
describe('#mostAppearing', () => {
  it('should return the most appearing number in a value',()=> {
    expect(mostAppearing(1,2,3,2)).toBe(2)})
  it('should return the most appearing character in a value',()=> {
        expect(mostAppearing('sally')).toBe('l')});
});