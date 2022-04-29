import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import MainBar from './index'

test('Rendered MainBar match the snapshot', async () => {
    const component = render(MainBar())
    expect(component).toMatchSnapshot()
})