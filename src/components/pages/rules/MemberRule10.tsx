/**
 * Renders member rule 10
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import MemberRule from './MemberRule'

/**
 * MemberRule10 component
 */
const MemberRule10: React.FC = () => (
    <MemberRule index={10} header="会員の資格の停止および喪失">
        <ol>
            <li>
                当社は、特定の会員が次の各号に該当すると判断した場合には、事前に通知することなく当該会員による本サービスの利用停止、当該会員のパスワードの変更、または当該会員の会員資格の取消しを行うことができるものとします。これにより当該会員に何らかの損害が生じたとしても、当社は一切責任を負わないものとします。
                <br />
                <ul className="registration__list">
                    <li>会員に法令または本規約に違反する行為があった場合</li>
                    <li>会員に本サービス利用に関して不正行為があった場合</li>
                    <li>
                        一定回数以上のパスワードの入力ミスがあるなど会員のセキュリティを確保するために必要な場合
                    </li>
                    <li>未成年者が親権者の同意を得ず会員登録を行った場合</li>
                    <li>その他当社が必要と判断した場合</li>
                </ul>
            </li>
            <li>
                本条により、会員資格の取消しが行われた場合、当該会員に対し当社が付与しているポイント残高も抹消されます。
            </li>
        </ol>
    </MemberRule>
)

export default MemberRule10
