import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import Sidebar from './index'

test('Rendered Sidebar match the snapshot', async () => {
    const component = render(Sidebar())
    expect(component).toMatchSnapshot()
})