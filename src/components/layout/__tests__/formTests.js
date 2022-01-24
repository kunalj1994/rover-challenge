import { render } from '@testing-library/react';
import { shallow } from 'enzyme';

import Form from '../form'

describe('Testing form', () => {
    const setOutput = jest.fn()

    it('renders the form component correctly', () => {
        render(<Form setOutput={setOutput} />)
    })

    it('should render the necessary input fields', () => {
        const component = shallow(<Form setOutput={setOutput} />)
        expect(component.find('input')).toHaveLength(3);
    })

    it('should render the move rover button', () => {
        const component = shallow(<Form setOutput={setOutput} />)
        expect(component.find('button')).toHaveLength(1);
    })

})
