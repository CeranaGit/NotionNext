import { siteConfig } from '@/lib/config'
import { getGlobalData } from '@/lib/db/getSiteData'

const TermsOfService = (props) => {
  const { siteInfo } = props
  const companyName = siteInfo?.title || siteConfig('TITLE')
  const businessId = '95292891'

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Banner */}
      <div className="bg-gradient-to-r to-indigo-700 pt-16 pb-4">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">服務條款</h1>
          <p className="text-center text-gray-800 max-w-3xl mx-auto">
            請詳閱以下服務條款內容
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <article className="prose lg:prose-lg prose-slate mx-auto">
            <p className="text-lg text-gray-700 mb-8">歡迎您使用本網站，本網站是由「{companyName}」營運（以下簡稱&ldquo;本網站&rdquo;）提供的服務。請仔細閱讀以下服務條款（以下簡稱&ldquo;本條款&rdquo;），一旦您使用本網站，即表示您同意遵守本條款。</p>

            <div className="space-y-8">
              <section>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">一、服務內容</h3>
                <p className="text-gray-600">本網站提供的服務包括但不限於：</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>網站設計與開發服務</li>
                  <li>技術諮詢服務</li>
                  <li>數位行銷服務</li>
                  <li>其他相關專業服務</li>
                </ul>
              </section>

              <section>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">二、用戶資格</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>使用本網站服務的用戶必須具備完全的民事行為能力。</li>
                  <li>若用戶為未成年人，需在其監護人指導下使用本網站。</li>
                </ul>
              </section>

              <section>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">三、智慧財產權</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>本網站及其所使用的所有內容（包括但不限於文字、圖像、音頻、視頻等）均受著作權、商標權及其他相關法律的保護。</li>
                  <li>未經本網站書面許可，任何人不得擅自使用、複製、修改、傳播或以其他方式使用上述內容。</li>
                </ul>
              </section>

              <section>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">四、責任限制</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>本網站對因不可抗力或其他非本網站過錯原因造成的服務中斷或損失不承擔責任。</li>
                  <li>用戶同意使用本網站服務所存在的風險將完全由其自己承擔。</li>
                </ul>
              </section>

              <section>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">五、隱私保護</h3>
                <p className="text-gray-600">本網站重視用戶的隱私保護，將按照隱私政策處理用戶的個人資料。詳細內容請參閱本網站的隱私權政策。</p>
              </section>

              <section>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">六、條款修改</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>本網站有權根據需要修改本條款，修改後的條款將在本網站公佈。</li>
                  <li>用戶繼續使用本網站即視為接受修改後的條款。</li>
                </ul>
              </section>

              <section>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">七、其他</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>本條款的解釋、效力及糾紛解決均適用中華民國之法律。</li>
                  <li>若本條款的任何條款被視為無效或不可執行，該條款應在必要的最低限度內被修改或刪除，且不影響其他條款的有效性和可執行性。</li>
                </ul>
              </section>

              <section className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">八、聯繫管道</h3>
                <p className="text-gray-600 mb-4">如對本服務條款有任何疑問，請通過以下方式聯繫我們：</p>
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
  const props = await getGlobalData({ from: 'terms-of-service' })
  return {
    props
  }
}

export default TermsOfService 