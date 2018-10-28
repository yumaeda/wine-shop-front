import * as React from 'react';
import { shallow } from 'enzyme';
import { WineImage } from '../../../src/components/contents/WineImage';

test('Valid image', () => {
    const baseUrl = 'http://anyway-grapes.jp/images/400px';
    const wineId = '11095';
    const wineImage = shallow(<WineImage id={ wineId } baseUrl={ baseUrl } className="wine-img" />);

    expect(wineImage.prop('alt')).toEqual(wineId);
    expect(wineImage.prop('src')).toEqual(`${baseUrl}/${wineId}.png`);
    expect(wineImage).toMatchSnapshot();
});
