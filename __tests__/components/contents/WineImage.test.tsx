import { WineImage } from 'components/contents/WineImage'
import { shallow } from 'enzyme'
import * as React from 'react'

test('Valid image', () => {
    const baseUrl = 'http://anyway-grapes.jp/images/400px'
    const wineId = '11095'
    const wineImage = shallow(
        <WineImage id={wineId} baseUrl={baseUrl} className="wine-img" />
    )

    expect(wineImage.prop('alt')).toEqual(wineId)
    expect(wineImage.prop('src')).toEqual(`${baseUrl}/${wineId}.png`)
    expect(wineImage).toMatchSnapshot()
})
