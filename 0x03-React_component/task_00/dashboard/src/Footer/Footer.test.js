import Footer from './Footer';
import React from 'react';
import { shallow } from 'enzyme';

describe('<Footer />', () => {
    it('Footer render without crashing', () => {
        const footer = shallow(<Footer />);
        expect(footer.exists()).toBe(true);
    });
    it('Footer at the very least render the text "Copyright"', () => {
        const footer = shallow(<Footer />);
        expect(footer.text()).toContain('Copyright');
    });
});
