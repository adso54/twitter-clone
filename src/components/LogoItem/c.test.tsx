import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import '@testing-library/react'
import LogoItem from './index'
import {LogoIcon} from '../../assets/images'

test('Rendered LogoItem match the snapshot', async () => {
    const component = render(LogoItem({Icon: LogoIcon}))
    expect(component).toMatchSnapshot()
})