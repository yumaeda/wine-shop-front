/**
 * Renders member rule 4
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import MemberRule from './MemberRule'

/**
 * MemberRule4 component
 */
const MemberRule4 = React.memo(() => (
    <MemberRule index={4} header="個人情報の申告">
        <ol>
            <li>
                会員は、入会申請時および当社からの依頼により己の情報を申告する際、いかなる虚偽の申告も行わないものとします。
            </li>
            <li>
                会員が申告した情報は、個人情報として当社が厳重に管理します。当社は、原則として会員の承諾なしに個人情報の修正・変更をしないものとします。
            </li>
            <li>
                会員は、当社に申告した情報に変更が生じた場合、速やかに当社に届け出るものとします。
            </li>
            <li>
                変更手続きがなされなかったことにより生じた損害について、当社は一切責任を負いません。また、変更手続きがなされた場合でも、変更手続き以前に受け付けた取引は、変更される前の個人情報に基づいて処理されますのでご注意ください。
            </li>
        </ol>
    </MemberRule>
))

export default MemberRule4
