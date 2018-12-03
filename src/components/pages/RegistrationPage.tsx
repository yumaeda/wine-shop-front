/**
 * Renders entrance of registration page
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { Link } from 'react-router-dom'
import { IUserContext, UserContext } from '../../context/UserContext'
import PageTemplate from './PageTemplate'
import MemberRule1 from './rules/MemberRule1'
import MemberRule10 from './rules/MemberRule10'
import MemberRule11 from './rules/MemberRule11'
import MemberRule12 from './rules/MemberRule12'
import MemberRule13 from './rules/MemberRule13'
import MemberRule2 from './rules/MemberRule2'
import MemberRule3 from './rules/MemberRule3'
import MemberRule4 from './rules/MemberRule4'
import MemberRule5 from './rules/MemberRule5'
import MemberRule6 from './rules/MemberRule6'
import MemberRule7 from './rules/MemberRule7'
import MemberRule8 from './rules/MemberRule8'
import MemberRule9 from './rules/MemberRule9'

/**
 * RegistrationPage component
 */
const RegistrationPage = React.memo(() => (
    <PageTemplate>
        <div className="contents">
            <div className="registration">
                <div>
                    <p>
                        Anyway-Grapes（本店）ではオンライン会員を募集しています。
                        会員登録は無料かつ簡単に出来、オンライン会員限定の特典がご利用頂けます。是非この機会にご登録下さい。
                    </p>
                    <h4 className="registration__subheader">
                        特典1) ブルゴーニュ・ワイン最大20%OFF!!!!
                    </h4>
                    <p>
                        近年高騰が続くブルゴーニュ・ワインが通常価格から最大20%OFFでご購入頂けます(一部対象外の商品もございます)。
                    </p>
                    <h4 className="registration__subheader">
                        特典2) ブルゴーニュを除くワイン最大10%OFF!!
                    </h4>
                    <p>
                        ブルゴーニュ地方以外のワインも通常価格から最大10%OFFでご購入頂けます(一部対象外の商品もございます)。
                    </p>
                    <h4 className="registration__subheader">
                        特典3) お買い物がスムーズに
                    </h4>
                    <p>
                        住所、お電話番号等ご登録頂く事で、購入時面倒な住所入力等を省く事ができ、スムーズに決済を行う事が可能です。
                    </p>
                    <p className="registration__notice">
                        ※1.&nbsp;この特典はオンラインショップの特典となっており店頭ではご利用頂けませんのでご了承ください。
                        <br />
                        ※2.&nbsp;会員価格でご購入の場合、お買い上げ金額20,000円毎に、一個口（1〜12本）分の送料が無料になります（九州、沖縄、北海道を含む離島は除く）。
                        <br />
                        ※3.&nbsp;会員価格でご購入頂くには、会員登録後に必ずログインしてから商品をご購入ください。
                    </p>
                </div>
                <h4 className="registration__subheader">ネット会員規約</h4>
                <div className="member-rules">
                    <MemberRule1 />
                    <MemberRule2 />
                    <MemberRule3 />
                    <MemberRule4 />
                    <MemberRule5 />
                    <MemberRule6 />
                    <MemberRule7 />
                    <MemberRule8 />
                    <MemberRule9 />
                    <MemberRule10 />
                    <MemberRule11 />
                    <MemberRule12 />
                    <MemberRule13 />
                </div>
                <div className="registration__footer">
                    <Link to="/" className="registration__footer-button">
                        同意しない
                    </Link>

                    <UserContext.Consumer>
                        {(ctx: IUserContext) => (
                            <a
                                className="registration__footer-button"
                                href={`${ctx.siteUrl}/register.php"`}
                            >
                                同意する
                            </a>
                        )}
                    </UserContext.Consumer>
                </div>
            </div>
        </div>
    </PageTemplate>
))

export default RegistrationPage
