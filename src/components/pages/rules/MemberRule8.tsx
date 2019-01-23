/**
 * Renders member rule 8
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import MemberRule from './MemberRule'

/**
 * MemberRule8 component
 */
const MemberRule8: React.FC = () => (
    <MemberRule index={8} header="サービスの停止及び中止">
        <ol>
            <li>
                当社は以下のいずれかの場合、会員への事前の通知、承諾なく、本サービスの停止、中止、または変更ができるものとします。
                <br />
                <ul className="registration__list">
                    <li>
                        本サービスの提供のためのコンピュータシステムの定期保守及び緊急保守の場合、システムトラブルが発生した場合
                    </li>
                    <li>
                        火災、天災、停電などの不可抗力により、本サービスの提供ができない場合
                    </li>
                    <li>
                        システム不良及び、第三者からの不正アクセス、コンピュータウィルスの感染等により、本サービスに関するシステムの運用が困難になった場合
                    </li>
                    <li>行政機関・司法機関から要請された場合</li>
                    <li>その他、当社が必要と判断した場合</li>
                </ul>
            </li>
            <li>
                前項により本サービスが停止、中止、変更等されたことにより会員が被った損害について、当社は一切責任を負わないものとします。{' '}
            </li>
        </ol>
    </MemberRule>
)

export default MemberRule8
