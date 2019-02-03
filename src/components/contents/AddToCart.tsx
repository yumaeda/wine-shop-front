/**
 * Renders add to cart button with the wine price info
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import AddToCartColumn from 'components/contents/AddToCartColumn'
import * as CartUtility from 'lib/CartUtility'
import * as React from 'react'
import { IWine } from 'states/IWine'

/**
 * AddToCart component
 */
export class AddToCart extends React.Component<IWine> {
    /**
     * Return JSX to render
     */
    public render(): React.ReactElement<AddToCart> {
        const item: CartUtility.ICartItem = this.props
        const { barcode_number, member_price, price, stock } = this.props
        if (!CartUtility.isPurchasable(item)) {
            return <span className="wine-info__soldout">Sold Out</span>
        }

        const memberPrice =
            member_price > 0 ? Number(member_price) : Number(price)

        const cartJsx = (
            <tr>
                <td>
                    <span className="wine-info__price">
                        {Number(price).toLocaleString()}
                    </span>
                    円 (税抜)
                    <br />
                    <span className="wine-info__member-price">
                        会員価格：<span>{memberPrice.toLocaleString()}</span>円
                        (税抜)
                    </span>
                </td>
                <AddToCartColumn code={barcode_number} stock={stock} />
            </tr>
        )

        const preOrderJsx = CartUtility.isComingSoon(item) ? (
            <tr>
                <td colSpan={2}>
                    <br />
                    <p className="wine-info__preorder">{`${
                        item.etc
                    }入荷予定。`}</p>
                    <p>入荷の翌日以降の発送となります。</p>
                </td>
            </tr>
        ) : null

        return (
            <table>
                <tbody>
                    {cartJsx}
                    {preOrderJsx}
                </tbody>
            </table>
        )
    }
}
