/**
 * Renders member rule 3
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import MemberRule from './MemberRule'

/**
 * MemberRule3 component
 */
const MemberRule3 = React.memo(() => (
    <MemberRule index={3} header="ログインID、パスワードの管理">
        <ol>
            <li>
                会員は自己の責任においてログインID（Eメールアドレス）、パスワードを厳重に管理することとし、第三者に譲渡・貸与できないものとします。
            </li>
            <li>
                ログインID、パスワードを用いて、本サービス上で行われた意思表示は、会員本人の意思表示とみなし、そのために生じる支払い等の責任はすべて会員が負うものとします。
            </li>
        </ol>
    </MemberRule>
))

export default MemberRule3
