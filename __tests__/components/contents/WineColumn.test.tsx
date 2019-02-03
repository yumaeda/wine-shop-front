import { WineColumn } from 'components/contents/WineColumn'
import { mount } from 'enzyme'
import * as React from 'react'
import { IWine } from 'states'

test('Valid image', () => {
    const wine: IWine = {
        barcode_number: '9414',
        combined_name: 'Riesling Vendanges Tardives Vorbourg1500ml',
        combined_name_jpn:
            'リースリング・ヴァンダンジュ・タルディヴ・フォルブルグ 1500ml',
        producer: 'Domaine Mur\u00e9',
        producer_jpn: '\u30c9\u30e1\u30fc\u30cc\u30fb\u30df\u30e5\u30fc\u30ec',
        vintage: '2015'
    }

    const jsx = (
        <table>
            <tbody>
                <tr>
                    <WineColumn key={wine.barcode_number} wine={wine} />
                </tr>
            </tbody>
        </table>
    )

    const wineColumn = mount(jsx)
    const td = wineColumn.find('.wine-column')
    expect(td.name()).toEqual('td')
    expect(td.find('a').prop('target')).toEqual('wine_detail')
    expect(td.find('div').text()).toEqual(
        '2015 リースリング・ヴァンダンジュ・タルディヴ・フォルブルグ 1500...'
    )
    expect(wineColumn).toMatchSnapshot()
})
