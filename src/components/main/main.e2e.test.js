import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main';
Enzyme.configure({adapter: new Adapter()});

it(`Heandler run when user click to link`, () => {
  const clickHandler = jest.fn();
  const mainScreen = shallow(<Main
    rentList={[`Beautiful & luxurious apartment at great location`]}
    onClickHead={clickHandler}/>);
  const headLink = mainScreen.find(`.header__logo-link`);
  headLink.simulate(`click`);
  expect(clickHandler).toHaveBeenCalledTimes(1);
});
