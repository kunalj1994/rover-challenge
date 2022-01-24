import { render } from '@testing-library/react';
import { shallow } from 'enzyme';

import Form from '../form'
import Home from '../home'

describe('Testing form', () => {
    it('renders the Home component correctly', () => {
        render(<Home />)
    })

    it('should render the form element', () => {
        const component = shallow(<Home />)
        expect(component.find(Form)).toHaveLength(1);
    })
})
