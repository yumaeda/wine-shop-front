/**
 * Renders member rule 7
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import MemberRule from './MemberRule'

/**
 * MemberRule7 component
 */
const MemberRule7: React.FC = () => (
    <MemberRule index={7} header="著作権などの帰属">
        <ol>
            <li>
                本サービスのページや本サービスによって送信されたメールに掲載されている画像、デザイン、文章等に関する著作権または商標権、その他の知的財産権は、すべて当社またはその他の著作権者等の正当な権利者に帰属するものであり、会員はこれらの権利を侵害する行為を行わないものとします。
            </li>
            <li>
                本条の規約に違反したことにより発生した問題や賠償について、当社は一切の責任を負わないものとします。
            </li>
        </ol>
    </MemberRule>
)

export default MemberRule7
