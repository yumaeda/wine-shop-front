/**
 * Renders member rule
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'

/**
 * Interface for MemberRule
 */
interface IMemberRule {
    index: number
    header: string
}

/**
 * MemberRule component
 */
const MemberRule = React.memo<IMemberRule>(props => (
    <>
        <h4>{`第${props.index}条: ${props.header}`}</h4>
        <p>{props.children}</p>
    </>
))

export default MemberRule
