/**
 * Renders add to cart button with the wine price info
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { IWine } from '../../interfaces/IWine'
import * as CartUtility from '../../lib/CartUtility'
import AddToCartColumn from './AddToCartColumn'

/**
 * AddToCart component
 */
export class AddToCart extends React.Component<IWine> {
    /**
     * Return JSX to render
     */
    public render(): React.ReactElement<AddToCart> {
        const item: CartUtility.ICartItem = this.props
        if (!CartUtility.isPurchasable(item)) {
            return <span className="wine-info__soldout">Sold Out</span>
        }

        const price = +this.props.price
        const memberPrice =
            this.props.member_price > 0 ? +this.props.member_price : price

        const cartJsx = (
            <tr>
                <td>
                    <span className="wine-info__price">
                        {price.toLocaleString()}
                    </span>
                    円 (税抜)
                    <br />
                    <span className="wine-info__member-price">
                        会員価格：<span>{memberPrice.toLocaleString()}</span>円
                        (税抜)
                    </span>
                </td>
                <AddToCartColumn
                    code={this.props.barcode_number}
                    stock={this.props.stock}
                />
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
