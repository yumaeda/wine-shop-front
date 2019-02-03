/**
 * Renders add to cart input and button
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import { IUserContext, UserContext } from 'context/UserContext'
import * as React from 'react'

/**
 * Props for AddToCartColumn
 */
interface IProps {
    code: string
    stock: number
}

/**
 * AddToCartColumn component
 */
class AddToCartColumn extends React.PureComponent<IProps> {
    /**
     * Return JSX to render
     */
    public render() {
        const label = 'Qty: '
        const { code, stock } = this.props
        if (stock <= 0) {
            return null
        }

        return (
            <td>
                {label}
                <input
                    type="number"
                    defaultValue="1"
                    min="1"
                    max={stock}
                    className="wine-info__qty-input"
                />
                <UserContext.Consumer>
                    {(ctx: IUserContext) => (
                        <img
                            id={code}
                            className="wine-info__cart-image"
                            src={`${ctx.siteUrl}/campaign/add_to_cart.png`}
                            onClick={this.handleAddToCart}
                        />
                    )}
                </UserContext.Consumer>
            </td>
        )
    }

    /**
     * Event handler for clicking add to cart button
     */
    private handleAddToCart = (event: React.MouseEvent<HTMLElement>): void => {
        event.preventDefault()
        alert('Add to cart!!')
    }
}

export default AddToCartColumn
