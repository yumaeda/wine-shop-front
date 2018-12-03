/**
 * Renders member rule 11
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import MemberRule from './MemberRule'

/**
 * MemberRule11 component
 */
const MemberRule11 = React.memo(() => (
    <MemberRule index={11} header="会員の退会">
        <ol>
            <li>
                会員は、随時退会することが可能です。退会を希望する場合には、会員本人が退会手続きを行って下さい。
            </li>
            <li>
                退会する際に、弊社が付与しているポイント残高がある場合は、ポイント残高も抹消されます。
            </li>
        </ol>
    </MemberRule>
))

export default MemberRule11
