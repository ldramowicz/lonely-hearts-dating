// This unit test spec uses Jest: https://facebook.github.io/jest/docs/en/getting-started.html
import React from 'react';
import MainApp from './MainApp';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
export { shallow, mount, configure };

it('renders without crashing', () => {
    shallow(<MainApp />);
});