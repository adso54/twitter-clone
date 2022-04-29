import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import BarItem from './index'
import {HouseIcon} from '../../assets/images'

test('Rendered BarItem match the snapshot', async () => {
    const component = render(BarItem({displayText: 'TEST', Icon: HouseIcon}))
    expect(component.getByText('TEST')).toBeInTheDocument()
    expect(component).toMatchSnapshot()
})