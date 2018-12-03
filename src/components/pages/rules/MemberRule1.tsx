/**
 * Renders member rule 1
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import MemberRule from './MemberRule'

/**
 * MemberRule1 component
 */
const MemberRule1 = React.memo(() => (
    <MemberRule index={1} header="会員の定義">
        本規約に同意の上、当社が定める手続きに従い入会の申し込みを行う個人を「会員」と定めます。
    </MemberRule>
))

export default MemberRule1
