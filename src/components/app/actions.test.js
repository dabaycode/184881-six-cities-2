import {changeCity, changeSortType} from './actions';

describe(`App actions creator work correctly`, () => {
  it(`App actions creator return change city type when city was changed`, () => {
    expect(changeCity(`Moscow`)).toEqual({type: `CHANGE_CITY`, payload: `Moscow`});
  });

  it(`App actions creator return change sort type with sort type when sort type was changed`, () => {
    expect(changeSortType(`Popular`)).toEqual({type: `CHANGE_SORT_TYPE`, payload: `Popular`});
  });
});
