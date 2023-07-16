import renderer from 'react-test-renderer';
import Home from './index';

const renderTree = (tree) => renderer.create(tree);
describe('<Home>', () => {
  it('should render component', () => {
    expect(renderTree(<Home />).toJSON()).toMatchSnapshot();
  });
});
