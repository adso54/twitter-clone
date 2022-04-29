import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import NewTwitt from './index'

test('Rendered MainBar match the snapshot', async () => {
    const component = render(NewTwitt())
    expect(component).toMatchSnapshot()
})