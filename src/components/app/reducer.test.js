import appReducer, {INITIAL_STATE} from './reducer';

describe(`App reducer work correctly`, () => {
  it(`App reducer without additional parameters should return initial state`, () => {
    expect(appReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it(`App reducer with city parameter should change state city`, () => {
    expect(appReducer(INITIAL_STATE, {type: `CHANGE_CITY`, payload: `Moscow`})).toEqual({...INITIAL_STATE, city: `Moscow`});
  });

  it(`App reducer with offers parameter should change state offers`, () => {
    expect(appReducer(INITIAL_STATE, {type: `CHANGE_OFFERS`, payload: [`test`]})).toEqual({...INITIAL_STATE, offers: [`test`]});
  });

  it(`App reducer with sort parameter should change state sort type`, () => {
    expect(appReducer(INITIAL_STATE, {type: `CHANGE_SORT_TYPE`, payload: `test`})).toEqual({...INITIAL_STATE, sortType: `test`});
  });

  it(`App reducer with reset type should reset state`, () => {
    expect(appReducer(INITIAL_STATE, {type: `RESET`, payload: `test`})).toEqual(INITIAL_STATE);
  });
});
