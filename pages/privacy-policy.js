import { siteConfig } from '@/lib/config'
import { getGlobalData } from '@/lib/db/getSiteData'

const PrivacyPolicy = (props) => {
  const { siteInfo } = props
  const companyName = siteInfo?.title || siteConfig('TITLE')
  const businessId = '95292891'

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Banner */}
      <div className="bg-gradient-to-r to-indigo-700 pt-16 pb-4">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">隱私權條款</h1>
          <p className="text-center text-gray-800 max-w-3xl mx-auto">
            保護您的隱私是我們的首要任務
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <article className="prose lg:prose-lg prose-slate mx-auto">
            <p className="text-lg text-gray-700 mb-8">非常歡迎您光臨「{companyName}」（以下簡稱本網站），為了讓您能夠安心使用本網站的各項服務與資訊，特此向您說明本網站的隱私權保護政策，以保障您的權益，請您詳閱下列內容：</p>

            <div className="space-y-8">
              <section>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">一、隱私權保護政策的適用範圍</h3>
                <p className="text-gray-600">隱私權保護政策內容，包括本網站如何處理在您使用網站服務時收集到的個人識別資料。隱私權保護政策不適用於本網站以外的相關連結網站，也不適用於非本網站所委託或參與管理的人員。</p>
              </section>

              <section>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">二、個人資料的蒐集、處理及利用方式</h3>
                <ul className="list-disc pl-6 space-y-3 text-gray-600">
                  <li>當您造訪本網站或使用本網站所提供之功能服務時，我們將視該服務功能性質，請您提供必要的個人資料，並在該特定目的範圍內處理及利用您的個人資料；非經您書面同意，本網站不會將個人資料用於其他用途。</li>
                  <li>本網站在您使用服務信箱、問卷調查等互動性功能時，會保留您所提供的姓名、電子郵件地址、聯絡方式及使用時間等。</li>
                  <li>於一般瀏覽時，伺服器會自行記錄相關行徑，包括您使用連線設備的IP位址、使用時間、使用的瀏覽器、瀏覽及點選資料記錄等，做為我們增進網站服務的參考依據，此記錄為內部應用，決不對外公佈。</li>
                  <li>為提供精確的服務，我們會將收集的問卷調查內容進行統計與分析，分析結果之統計數據或說明文字呈現，除供內部研究外，我們會視需要公佈統計數據及說明文字，但不涉及特定個人之資料。</li>
                  <li>您可以隨時向我們提出請求，以更正或刪除您的帳戶或本網站所蒐集的個人資料等隱私資訊。聯繫方式請見最下方聯繫管道。</li>
                </ul>
              </section>

              <section>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">三、資料之保護</h3>
                <ul className="list-disc pl-6 space-y-3 text-gray-600">
                  <li>本網站主機均設有防火牆、防毒系統等相關的各項資訊安全設備及必要的安全防護措施，加以保護網站及您的個人資料採用嚴格的保護措施，只由經過授權的人員才能接觸您的個人資料，相關處理人員皆簽有保密合約，如有違反保密義務者，將會受到相關的法律處分。</li>
                  <li>如因業務需要有必要委託其他單位提供服務時，本網站亦會嚴格要求其遵守保密義務，並且採取必要檢查程序以確定其將確實遵守。</li>
                </ul>
              </section>

              <section>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">四、網站對外的相關連結</h3>
                <p className="text-gray-600">本網站的網頁提供其他網站的網路連結，您也可經由本網站所提供的連結，點選進入其他網站。但該連結網站不適用本網站的隱私權保護政策，您必須參考該連結網站中的隱私權保護政策。</p>
              </section>

              <section>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">五、與第三人共用個人資料之政策</h3>
                <p className="text-gray-600 mb-4">本網站絕不會提供、交換、出租或出售任何您的個人資料給其他個人、團體、私人企業或公務機關，但有法律依據或合約義務者，不在此限。</p>
                <p className="text-gray-600 mb-4">前項但書之情形包括不限於：</p>
                <ul className="list-disc pl-6 space-y-3 text-gray-600">
                  <li>經由您書面同意。</li>
                  <li>法律明文規定。</li>
                  <li>為免除您生命、身體、自由或財產上之危險。</li>
                  <li>與公務機關或學術研究機構合作，基於公共利益為統計或學術研究而有必要，且資料經過提供者處理或蒐集著依其揭露方式無從識別特定之當事人。</li>
                  <li>當您在網站的行為，違反服務條款或可能損害或妨礙網站與其他使用者權益或導致任何人遭受損害時，經網站管理單位研析揭露您的個人資料是為了辨識、聯絡或採取法律行動所必要者。</li>
                  <li>有利於您的權益。</li>
                </ul>
              </section>

              <section>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">六、Cookie之使用</h3>
                <p className="text-gray-600">為了提供您最佳的服務，本網站會在您的電腦中放置並取用我們的Cookie，若您不願接受Cookie的寫入，您可在您使用的瀏覽器功能項中設定隱私權等級為高，即可拒絕Cookie的寫入，但可能會導至網站某些功能無法正常執行。</p>
              </section>

              <section>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">七、隱私權保護政策之修正</h3>
                <p className="text-gray-600">本網站隱私權保護政策將因應需求隨時進行修正，修正後的條款將刊登於網站上。</p>
              </section>

              <section className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">八、聯繫管道</h3>
                <p className="text-gray-600 mb-4">對於本站之隱私權政策有任何疑問，或者想提出變更、移除個人資料之請求，請藉由以下資訊聯繫我們：</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="font-medium mr-2">公司名稱：</span>
                    <span>{companyName}</span>
                  </li>
                  <li className="flex items-center">
                    <span className="font-medium mr-2">統一編號：</span>
                    <span>{businessId}</span>
                  </li>
                </ul>
              </section>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const props = await getGlobalData({ from: 'privacy-policy' })
  return {
    props
  }
}

export default PrivacyPolicy 