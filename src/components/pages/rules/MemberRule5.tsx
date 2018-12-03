/**
 * Renders member rule 5
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import MemberRule from './MemberRule'

/**
 * MemberRule5 component
 */
const MemberRule5 = React.memo(() => (
    <MemberRule index={5} header="個人情報の利用">
        <ol>
            <li>
                会員から取得する個人情報は以下のとおりとします。
                <br />
                <ul className="registration__list">
                    <li>氏名</li>
                    <li>住所／電話番号</li>
                    <li>Eメールアドレス</li>
                    <li>生年月日</li>
                    <li>
                        クレジットカード情報（名義、番号、有効期限、セキュリティコード）
                    </li>
                </ul>
            </li>
            <li>
                会員の個人情報は、以下のような場合に利用するものとします。
                <br />
                <ul className="registration__list">
                    <li>
                        個人情報の登録・変更の完了をお知らせするためのメール発信
                    </li>
                    <li>ご注文の完了、発送をお知らせするためのメール発信</li>
                    <li>商品の配送</li>
                    <li>商品代金の決済</li>
                    <li>
                        当社からの情報提供（メールマガジン発信、ダイレクトメールの発送）
                    </li>
                    <li>各種メールまたは電話によるお問い合わせの返答</li>
                    <li>会員によるコメントや画像の投稿</li>
                    <li>当社が本サービスに関連して利用者に連絡をする場合</li>
                </ul>
            </li>
            <li>
                本サービスの利用の際に取得した会員の個人情報について、当社は以下の各号に該当する場合を除き、会員の事前の承諾なく、第三者に開示または提供しないものとします。
                <br />
                <ul className="registration__list">
                    <li>商品の配送時</li>
                    <li>お支払決済時</li>
                    <li>
                        公的機関からの法令に基づいた要請等があり、提供が必要と当社において判断した時
                    </li>
                </ul>
            </li>
            <li>
                会員は、当社が本条第2項に定める目的により会員にメールを送信することに同意するものとし、受信を拒否する場合はその旨を当社に通知するものとします。
            </li>
        </ol>
    </MemberRule>
))

export default MemberRule5
