import {reducer} from './reducer';
import mockOffers from './mocks/offers';

describe('Reducer work correctly', () => {
    it('Reducer without additional parameters should return initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            city: `Amsterdam`,
            offers: mockOffers,
        });
    });
});
