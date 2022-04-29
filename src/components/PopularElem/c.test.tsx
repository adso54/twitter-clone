import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import PopularElement from './index'

test('Rendered PopularElement match the snapshot', async () => {
    const testProps: PopularElement = {header:"Header",name: "Some name", tweets: 666, titleId: "someId"}
    const component = render(PopularElement(testProps))
    expect(component).toMatchSnapshot()
})