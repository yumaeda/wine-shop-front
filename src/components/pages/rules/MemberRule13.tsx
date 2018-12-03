/**
 * Renders member rule 13
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import MemberRule from './MemberRule'

/**
 * MemberRule13 component
 */
const MemberRule13 = React.memo(() => (
    <MemberRule index={13} header="準拠法および管轄裁判所">
        本規約の履行及び解釈に関しては、日本国法が適用されるものとし、本規約に関わる一切の紛争は、当社本店所在地を管轄する地方裁判所を第一審の専属管轄裁判所とします。
    </MemberRule>
))

export default MemberRule13
