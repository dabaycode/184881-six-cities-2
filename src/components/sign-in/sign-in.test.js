import renderer from 'react-test-renderer';
import SignIn from './sign-in';

it(`SignIn page correctly renders`, () => {
  const tree = renderer
      .create(<SignIn
        loginSubmitHandler={jest.fn()}
      />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
