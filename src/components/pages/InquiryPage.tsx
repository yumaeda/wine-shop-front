/**
 * Renders inquiry page
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'

const mail = 'mailto:mail@anyway-grapes.jp'

/**
 * InquiryPage component
 */
export const InquiryPage: React.SFC = () => (
    <div>
        <span>Mail to: </span>
        <a href={`mailto:${mail}`}>{mail}</a>
    </div>
)
