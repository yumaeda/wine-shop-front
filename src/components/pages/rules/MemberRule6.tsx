/**
 * Renders member rule 6
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import MemberRule from './MemberRule'

/**
 * MemberRule6 component
 */
const MemberRule6: React.FC = () => (
    <MemberRule index={6} header="会員の禁止行為">
        <ol>
            <li>
                本サービス及び当社の商品等に関する情報について、営利を目的として利用するなど、私的利用以外の目的で利用する行為
                (ただし、当社が事前に書面で承諾した場合を除く)。
            </li>
            <li>
                当社のサーバーやその他のコンピュータに不正にアクセスする行為
            </li>
            <li>本サービスの運営を妨害する行為</li>
            <li>
                会員が当社に申告したEメールアドレスおよびパスワードを第三者に貸与・譲渡すること、または第三者と共用する行為
            </li>
            <li>クレジットカードを不正使用して本サービスを利用する行為</li>
            <li>他者のEメールアドレスおよびパスワードを不正に使用する行為</li>
            <li>
                当社または第三者の財産権、プライバシーその他の権利を侵害する行為
            </li>
            <li>当社または第三者に迷惑、不利益もしくは損害を与える行為</li>
            <li>犯罪行為その他法令に違反する行為または公序良俗に反する行為</li>
            <li>その他当社が不適切と判断する行為</li>
        </ol>
    </MemberRule>
)

export default MemberRule6
