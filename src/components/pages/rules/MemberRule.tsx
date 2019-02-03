/**
 * Renders member rule
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'

/**
 * Props interface for MemberRule
 */
interface IProps {
    children: any
    header: string
    index: number
}

/**
 * MemberRule component
 */
const MemberRule: React.FC<IProps> = props => {
    const { children, header, index } = props

    return (
        <>
            <h4>{`第${index}条: ${header}`}</h4>
            <p>{children}</p>
        </>
    )
}

export default React.memo(MemberRule)
