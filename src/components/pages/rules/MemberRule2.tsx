/**
 * Renders member rule 2
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import MemberRule from './MemberRule'

/**
 * MemberRule2 component
 */
const MemberRule2: React.FC = () => (
    <MemberRule index={2} header="本規約の範囲及び変更">
        <ol>
            <li>
                本規約は、有限会社
                誠屋（以下「当社」とします）がインターネットにより提供するサービス（以下「本サービス」とします）を、前条で定義された「会員」が利用することに伴うすべての事項にわたり適用されるものとします。
            </li>
            <li>
                当社は、会員の承諾なしに本規約を変更できるものとします。なお、変更後の会員規約は当社の定める方法により会員に通知した時点、もしくは本サイトに掲載した時点から効力が生じます。
            </li>
            <li>
                本規約の変更に伴い、会員に不利益、損害が発生した場合、当社はその責任を一切負わないものとします。
            </li>
        </ol>
    </MemberRule>
)

export default MemberRule2
