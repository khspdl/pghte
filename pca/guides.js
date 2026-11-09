/* 기초 정리 데이터: 주제별 개념 정리. related는 관련 문제 id.
   html 안에서 <button class="qref" data-id="N">QN</button>을 쓰면 해당 문제로 이동 */
var GUIDES = [
{
  id: "exam",
  title: "시험 가이드 · 출제 범위",
  updated: "2026-10-13",
  related: [9, 39, 40, 215, 223, 308, 315, 317, 321, 322, 339, 347, 419, 422, 424, 426, 435, 443, 444, 445, 502, 503, 505, 507, 509, 510, 513, 514, 524, 601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 902, 904, 905, 909],
  html: `
<section>
  <h2>0. 이 가이드를 쓰는 법</h2>
  <p>Google이 공개한 <b>Professional Cloud Architect 認定試験ガイド</b>(일본어판, 7쪽)를 바탕으로 정리했습니다. 원문: <code>services.google.com/fh/files/misc/professional_cloud_architect_exam_guide_japanese.pdf</code></p>
  <ul>
    <li><b>출제 비중</b>을 보고 어디에 시간을 쓸지 정합니다. 문제의 출제 빈도(<code>freq</code>) 판단도 이 범위와 비중을 기준으로 합니다.</li>
    <li>시험 가이드에 <b>이름이 직접 나온 서비스</b>는 출제 범위 안이라는 뜻입니다. 지금까지 노트에서 거의 다루지 않은 항목은 4장 “공백”에 모았습니다.</li>
    <li>일본어 항목 이름은 시험 문제에도 같은 말로 나올 가능성이 높아 그대로 적었습니다(일본어 용어집 탭과 같이 보세요).</li>
  </ul>
</section>

<section>
  <h2>1. 출제 비중</h2>
  <div class="tbl"><table><thead><tr><th>섹션</th><th>일본어 이름</th><th>비중</th><th>노트에서 주로 보는 가이드</th></tr></thead><tbody>
    <tr><td class="strong">1. 솔루션 아키텍처 설계·계획</td><td>クラウド ソリューション アーキテクチャの設計と計画</td><td><mark>약 25%</mark></td><td>데이터 저장소 선택, 서버리스, 네트워크, GKE (서비스 고르기 전반)</td></tr>
    <tr><td class="strong">2. 인프라 관리·프로비저닝</td><td>クラウド ソリューション インフラストラクチャの管理とプロビジョニング</td><td>약 17.5%</td><td>네트워크, 데이터 저장소 선택, GKE + <b>AI/ML(2.4·2.5)</b></td></tr>
    <tr><td class="strong">3. 보안·컴플라이언스 설계</td><td>セキュリティとコンプライアンスを考慮した設計</td><td>약 17.5%</td><td>보안·IAM</td></tr>
    <tr><td class="strong">4. 기술·비즈니스 프로세스 분석·개선</td><td>技術プロセスやビジネス プロセスの分析と改善</td><td>약 15%</td><td>CI/CD, 운영(DR) + <b>비즈니스 프로세스(4.2)</b></td></tr>
    <tr><td class="strong">5. 구현 관리</td><td>実装の管理</td><td>약 12.5%</td><td>CI/CD, GKE(도구), 데이터(이전 도구)</td></tr>
    <tr><td class="strong">6. 솔루션·운영 우수성 확보</td><td>ソリューションとオペレーション エクセレンスの確保</td><td>약 12.5%</td><td>운영·모니터링</td></tr>
  </tbody></table></div>
  <p><b>전략</b>: 섹션 1(25%)이 가장 크고, 섹션 1~3을 합치면 <mark>약 60%</mark>입니다. 이 세 섹션은 “요건을 읽고 서비스를 고르는” 문제라, 지금처럼 <b>키워드 → 서비스 선택</b> 연습을 계속하는 것이 가장 효율적입니다.</p>
</section>

<section>
  <h2>2. 모든 문제의 숨은 채점 기준: Well-Architected Framework</h2>
  <p>시험 가이드는 Google Cloud Well-Architected Framework의 6개 기둥(柱)이 <b>“시험 목표 전체에 암묵적·명시적으로 녹아 있다”</b>고 말합니다. 보기 두 개가 둘 다 동작할 때 어느 쪽이 더 나은지 고르는 기준이 이것입니다.</p>
  <div class="tbl"><table><thead><tr><th>기둥 (영어)</th><th>일본어</th><th>보기를 고를 때의 질문</th></tr></thead><tbody>
    <tr><td class="strong">Operational excellence</td><td>オペレーショナル エクセレンス</td><td>운영 부담이 적은가? 관리형·자동화인가? (cron·수동 작업 보기는 대개 오답)</td></tr>
    <tr><td class="strong">Security</td><td>セキュリティ</td><td>최소 권한인가? 키·비밀을 안전하게 다루는가?</td></tr>
    <tr><td class="strong">Reliability</td><td>信頼性</td><td>단일 장애점이 없는가? 장애에서 복구되는가?</td></tr>
    <tr><td class="strong">Performance optimization</td><td>パフォーマンス最適化</td><td>지연·처리량 요건을 맞추는가?</td></tr>
    <tr><td class="strong">Cost optimization</td><td>コスト最適化</td><td>요건을 넘는 과잉 구성은 아닌가? (Spot VM, 0까지 축소, lifecycle)</td></tr>
    <tr><td class="strong">Sustainability</td><td>サステナビリティ</td><td>탄소 배출이 적은 리전·효율적 자원 사용 (새로 추가된 기둥)</td></tr>
  </tbody></table></div>
</section>

<section>
  <h2>3. 사례 회사(事例紹介): 현행 4개 <button class="qref" data-id="902">공식 모의고사 Q2</button> <button class="qref" data-id="905">공식 모의고사 Q5</button></h2>
  <p>일부 문제는 가상 회사의 사례(ケーススタディ / 事例紹介)를 참조합니다. 시험 가이드에 실린 <mark>현행 사례는 4개</mark>이고, 그중 일부는 <b>Google Cloud 생성형 AI 솔루션</b>을 쓰는 회사입니다.</p>
  <div class="tbl"><table><thead><tr><th>사례</th><th>상태</th><th>노트의 문제</th></tr></thead><tbody>
    <tr><td class="strong">Altostrat Media</td><td><b>현행</b> (신규)</td><td>사례 연구 모의고사 Q1~Q15 (<button class="qref" data-id="601">사례 연구 Q1</button> <button class="qref" data-id="602">사례 연구 Q2</button> <button class="qref" data-id="603">사례 연구 Q3</button> <button class="qref" data-id="604">사례 연구 Q4</button> <button class="qref" data-id="605">사례 연구 Q5</button> <button class="qref" data-id="606">사례 연구 Q6</button> <button class="qref" data-id="607">사례 연구 Q7</button> <button class="qref" data-id="608">사례 연구 Q8</button> <button class="qref" data-id="609">사례 연구 Q9</button> <button class="qref" data-id="610">사례 연구 Q10</button> <button class="qref" data-id="611">사례 연구 Q11</button> <button class="qref" data-id="612">사례 연구 Q12</button> <button class="qref" data-id="613">사례 연구 Q13</button> <button class="qref" data-id="614">사례 연구 Q14</button> <button class="qref" data-id="615">사례 연구 Q15</button>)</td></tr>
    <tr><td class="strong">Cymbal Retail</td><td><b>현행</b> (신규)</td><td>사례 연구 모의고사 Q16~Q30 (<button class="qref" data-id="616">사례 연구 Q16</button> <button class="qref" data-id="617">사례 연구 Q17</button> <button class="qref" data-id="618">사례 연구 Q18</button> <button class="qref" data-id="619">사례 연구 Q19</button> <button class="qref" data-id="620">사례 연구 Q20</button> <button class="qref" data-id="621">사례 연구 Q21</button> <button class="qref" data-id="622">사례 연구 Q22</button> <button class="qref" data-id="623">사례 연구 Q23</button> <button class="qref" data-id="624">사례 연구 Q24</button> <button class="qref" data-id="625">사례 연구 Q25</button> <button class="qref" data-id="626">사례 연구 Q26</button> <button class="qref" data-id="627">사례 연구 Q27</button> <button class="qref" data-id="628">사례 연구 Q28</button> <button class="qref" data-id="629">사례 연구 Q29</button> <button class="qref" data-id="630">사례 연구 Q30</button>)</td></tr>
    <tr><td class="strong">EHR Healthcare</td><td><b>현행</b> (기존부터 계속)</td><td>공식 모의고사 Q2·Q3·Q4, 사례 연구 모의고사 Q31~Q45 (<button class="qref" data-id="631">사례 연구 Q31</button> <button class="qref" data-id="632">사례 연구 Q32</button> <button class="qref" data-id="633">사례 연구 Q33</button> <button class="qref" data-id="634">사례 연구 Q34</button> <button class="qref" data-id="635">사례 연구 Q35</button> <button class="qref" data-id="636">사례 연구 Q36</button> <button class="qref" data-id="637">사례 연구 Q37</button> <button class="qref" data-id="638">사례 연구 Q38</button> <button class="qref" data-id="639">사례 연구 Q39</button> <button class="qref" data-id="640">사례 연구 Q40</button> <button class="qref" data-id="641">사례 연구 Q41</button> <button class="qref" data-id="642">사례 연구 Q42</button> <button class="qref" data-id="643">사례 연구 Q43</button> <button class="qref" data-id="644">사례 연구 Q44</button> <button class="qref" data-id="645">사례 연구 Q45</button>)</td></tr>
    <tr><td class="strong">KnightMotives Automotive</td><td><b>현행</b> (신규)</td><td>사례 연구 모의고사 Q46~Q60 (<button class="qref" data-id="646">사례 연구 Q46</button> <button class="qref" data-id="647">사례 연구 Q47</button> <button class="qref" data-id="648">사례 연구 Q48</button> <button class="qref" data-id="649">사례 연구 Q49</button> <button class="qref" data-id="650">사례 연구 Q50</button> <button class="qref" data-id="651">사례 연구 Q51</button> <button class="qref" data-id="652">사례 연구 Q52</button> <button class="qref" data-id="653">사례 연구 Q53</button> <button class="qref" data-id="654">사례 연구 Q54</button> <button class="qref" data-id="655">사례 연구 Q55</button> <button class="qref" data-id="656">사례 연구 Q56</button> <button class="qref" data-id="657">사례 연구 Q57</button> <button class="qref" data-id="658">사례 연구 Q58</button> <button class="qref" data-id="659">사례 연구 Q59</button> <button class="qref" data-id="660">사례 연구 Q60</button>)</td></tr>
    <tr><td>Mountkirk Games, TerramEarth, Helicopter Racing League</td><td>이전 사례 (현행 목록에 없음)</td><td>공식 모의고사 Q5~Q10</td></tr>
  </tbody></table></div>
  <p>공식 모의고사의 Mountkirk·TerramEarth·HRL 문제는 <b>판단 기준 연습용</b>으로는 여전히 유효하지만, 실제 시험의 사례는 위 4개입니다. 4개 사례의 비즈니스·기술 요건과 예상 정답 방향은 <mark>“사례 연구 (事例紹介) 4개” 탭</mark>에 정리했습니다. 참고로 EHR Healthcare는 이전판과 내용이 같습니다.</p>
</section>

<section>
  <h2>4. 공백: 시험 가이드에 있지만 노트에서 거의 안 다룬 항목</h2>
  <p>2026-10-09 기준 노트 문제 229개를 검색해 센 것입니다. 모의고사 세트에서 이 항목이 나오면 특히 꼼꼼히 정리하세요.</p>
  <div class="tbl"><table><thead><tr><th>시험 가이드 항목</th><th>섹션</th><th>노트 문제 수</th><th>한 줄 요약</th></tr></thead><tbody>
    <tr><td class="strong">AI/ML: Gemini Enterprise Agent Platform, Agent Platform Pipelines, Model Garden, Gemini 모델, AI Hypercomputer, GPU·TPU</td><td>1.3, 2.4, 2.5</td><td>소수 (<button class="qref" data-id="39">Q39</button> <button class="qref" data-id="321">3세트 Q21</button> <button class="qref" data-id="424">4세트 Q24</button> <button class="qref" data-id="603">사례 연구 Q3</button> <button class="qref" data-id="604">사례 연구 Q4</button> <button class="qref" data-id="605">사례 연구 Q5</button> <button class="qref" data-id="611">사례 연구 Q11</button> <button class="qref" data-id="615">사례 연구 Q15</button> <button class="qref" data-id="616">사례 연구 Q16</button> <button class="qref" data-id="617">사례 연구 Q17</button> <button class="qref" data-id="619">사례 연구 Q19</button> <button class="qref" data-id="620">사례 연구 Q20</button> <button class="qref" data-id="621">사례 연구 Q21</button> <button class="qref" data-id="622">사례 연구 Q22</button> <button class="qref" data-id="628">사례 연구 Q28</button> <button class="qref" data-id="630">사례 연구 Q30</button> <button class="qref" data-id="649">사례 연구 Q49</button>)</td><td>시험 가이드가 <b>2.4·2.5 두 항목</b>을 AI에 씀. 가장 큰 공백</td></tr>
    <tr><td class="strong">Google AI API 구별 (Search, Conversation, Vision, Image, Video, Audio)</td><td>2.5</td><td>0</td><td>“어떤 사전 구축 API를 쓰나”(직접 모델 학습 X)</td></tr>
    <tr><td class="strong">Gemini Enterprise (AI 에이전트, NotebookLM)</td><td>2.5</td><td>0</td><td>업무 흐름에 에이전트·NotebookLM 통합</td></tr>
    <tr><td class="strong">Gemini Cloud Assist</td><td>1.2, 5.1</td><td>0</td><td>콘솔의 AI 도우미(설계·문제 해결·비용 분석). 두 섹션에 등장</td></tr>
    <tr><td class="strong">AI 보안: Model Armor, Sensitive Data Protection, 안전한 모델 배포</td><td>3.1</td><td>Model Armor 0</td><td>Model Armor = 프롬프트·응답의 인젝션·유해 콘텐츠·민감 정보 필터</td></tr>
    <tr><td class="strong">Google Cloud VMware Engine</td><td>2.3</td><td>0</td><td>VMware 환경을 그대로(리프트 앤 시프트) Google Cloud에서 실행</td></tr>
    <tr><td class="strong">Private Service Connect</td><td>1.3</td><td>0</td><td>서비스를 내부 IP 엔드포인트로 소비·공개 (Peering 없이)</td></tr>
    <tr><td class="strong">컨텍스트 인식 액세스, Chrome Enterprise Premium (구 BeyondCorp Enterprise)</td><td>3.1</td><td>1 (<button class="qref" data-id="904">공식 모의고사 Q4</button>)</td><td>제로 트러스트 원격 접근 (IAP + 기기·위치 조건)</td></tr>
    <tr><td class="strong">계층형 방화벽 정책</td><td>3.1</td><td>1 (<button class="qref" data-id="215">2세트 Q15</button>)</td><td>조직·폴더 단위 방화벽 규칙</td></tr>
    <tr><td class="strong">클라우드 에뮬레이터 (Bigtable, Spanner, Pub/Sub, Firestore)</td><td>5.2</td><td>0</td><td>로컬 개발·테스트를 비용 없이 (<code>gcloud emulators ...</code>)</td></tr>
    <tr><td class="strong">컴플라이언스: SOC 2, 데이터 주권</td><td>3.2</td><td>SOC 2 0</td><td>업계 인증 = 공유 책임 모델 속 Google 쪽 증빙</td></tr>
    <tr><td class="strong">비즈니스 프로세스: 이해관계자 관리, 변화 관리, 팀 스킬 준비, 고객 성공, CapEx/OpEx</td><td>4.2</td><td>2 (<button class="qref" data-id="339">3세트 Q39</button> <button class="qref" data-id="524">5세트 Q24</button>)</td><td>기술이 아닌 “조직·사람” 문제. 상식적 판단 + 클라우드는 CapEx → OpEx. 팀 역량은 <b>기존 팀 교육</b>, 비용은 <b>팀 전체의 비용 의식</b>이 Google 권장</td></tr>
  </tbody></table></div>
  <p>반대로 <b>이미 충분히 다룬 항목</b>: 네트워크 연결(Interconnect·VPN·Shared VPC), 저장소 선택, 로그·모니터링·SLO, CI/CD·배포 전략, IAM·Org Policy, Spot VM·비용, 이전(Migration Center·Migrate to VMs).</p>
</section>

<section>
  <h2>5. 섹션별 항목과 노트 연결</h2>
  <h3>섹션 1 (약 25%): 설계와 계획</h3>
  <div class="tbl"><table><thead><tr><th>항목</th><th>일본어</th><th>노트</th></tr></thead><tbody>
    <tr><td>비즈니스 요건: 기능·비기능 요건, 사업 연속성(BCP), 비용 최적화, 외부 시스템 통합 패턴, 데이터 이동, 트레이드오프, 워크로드 배치 전략(구축·구매·변경·폐기), KPI·ROI, 보안·컴플라이언스, 관측 가능성</td><td>機能要件と非機能要件, 事業継続計画, 外部システムとの統合パターン, ワークロード配置戦略, 重要業績評価指標（KPI）, 投資収益率（ROI）, オブザーバビリティ</td><td>통합 패턴 <button class="qref" data-id="510">5세트 Q10</button></td></tr>
    <tr><td>기술 요건: Well-Architected Framework, HA·장애 조치, 탄력성, 확장성, 성능·지연, Gemini Cloud Assist, 백업·복구</td><td>高可用性とフェイルオーバー, スケーラビリティ, バックアップとリカバリ</td><td>백업 <button class="qref" data-id="445">4세트 Q45</button></td></tr>
    <tr><td>네트워크·스토리지·컴퓨팅 설계: 온프레미스·멀티클라우드 통합, AI/ML, VPC·Peering·방화벽·LB·Shared VPC·PSC, 데이터 처리 선택, 저장소 유형, GKE·Cloud Run·Cloud Run functions, Spot VM·커스텀 머신 유형</td><td>共有 VPC, Private Service Connect, カスタム マシンタイプ</td><td>네트워크·데이터·서버리스 가이드 전반</td></tr>
    <tr><td>이전 계획: 기존 시스템 통합, 평가·이전(Migration Center), 이전 방법론·워크로드 테스트·네트워크 계획·의존성 계획, 소프트웨어 라이선스·재무 영향</td><td>移行計画, 依存関係計画, ソフトウェア ライセンス</td><td><button class="qref" data-id="315">3세트 Q15</button> <button class="qref" data-id="317">3세트 Q17</button> <button class="qref" data-id="347">3세트 Q47</button> <button class="qref" data-id="513">5세트 Q13</button> <button class="qref" data-id="514">5세트 Q14</button></td></tr>
    <tr><td>미래 개선: 클라우드 퍼스트 설계, 비즈니스 요구 변화</td><td>クラウド ファーストの設計アプローチ</td><td><button class="qref" data-id="424">4세트 Q24</button></td></tr>
  </tbody></table></div>
  <h3>섹션 2 (약 17.5%): 인프라 관리·프로비저닝</h3>
  <div class="tbl"><table><thead><tr><th>항목</th><th>일본어</th><th>노트</th></tr></thead><tbody>
    <tr><td>네트워크 토폴로지: 하이브리드, 멀티클라우드, 침입 방지·접근 제어·방화벽, VPC 설계·LB</td><td>ハイブリッド ネットワーキング, 侵入防止</td><td>네트워크 가이드</td></tr>
    <tr><td>스토리지: 할당, 보안·접근, 전송·지연, <b>데이터 보존·라이프사이클</b>, 증가 계획, 백업·복원</td><td>データ保持とデータ ライフサイクルの管理</td><td><button class="qref" data-id="505">5세트 Q5</button> <button class="qref" data-id="444">4세트 Q44</button></td></tr>
    <tr><td>컴퓨팅: <b>Spot과 표준 비교</b>, Compute Engine·GKE·서버리스 네트워킹·VMware Engine 네트워크 구성, 패치 관리, 컨테이너·서버리스</td><td>コンピューティングの変動性の構成（スポットと標準の比較）, パッチ管理</td><td><button class="qref" data-id="503">5세트 Q3</button> <button class="qref" data-id="509">5세트 Q9</button></td></tr>
    <tr><td>ML 워크플로: Agent Platform Pipelines, 데이터 통합 준비, AI Hypercomputer·GPU·TPU</td><td>エンドツーエンドの ML ワークフロー</td><td>공백 (4장). Pipelines + Model Registry + ML Metadata <button class="qref" data-id="649">사례 연구 Q49</button></td></tr>
    <tr><td>사전 구축 솔루션·API: Google AI API 구별, Gemini Enterprise(에이전트·NotebookLM), Model Garden 모델 통합</td><td>事前構築済みソリューション</td><td>공백 (4장)</td></tr>
  </tbody></table></div>
  <h3>섹션 3 (약 17.5%): 보안·컴플라이언스</h3>
  <div class="tbl"><table><thead><tr><th>항목</th><th>일본어</th><th>노트</th></tr></thead><tbody>
    <tr><td>IAM, 리소스 계층(조직·폴더·프로젝트), 키·암호화·비밀 관리, <b>직무 분리</b></td><td>リソース階層, <mark>職掌分散</mark></td><td><button class="qref" data-id="443">4세트 Q43</button></td></tr>
    <tr><td>보안 관리: 감사, VPC Service Controls, 컨텍스트 인식 액세스, 조직 정책, 계층형 방화벽 정책, Cloud KMS로 CMEK 관리</td><td>コンテキストアウェア アクセス, 階層型ファイアウォール ポリシー, 顧客管理の暗号鍵</td><td>보안 가이드</td></tr>
    <tr><td>안전한 원격 접근: IAP, 서비스 계정 권한 차용, Chrome Enterprise Premium, Workload Identity 연동</td><td>サービス アカウントの権限借用, Workload Identity 連携</td><td><button class="qref" data-id="9">Q9</button> <button class="qref" data-id="40">Q40</button></td></tr>
    <tr><td>소프트웨어 공급망 보호, <b>AI 보안</b>(Model Armor, Sensitive Data Protection)</td><td>ソフトウェア サプライ チェーンの保護</td><td><button class="qref" data-id="502">5세트 Q2</button> <button class="qref" data-id="308">3세트 Q8</button></td></tr>
    <tr><td>컴플라이언스: 의료 기록·아동·데이터 프라이버시, 데이터 주권, 신용카드·PII, SOC 2, 감사 로그</td><td>データ主権, 個人を特定できる情報（PII）</td><td><button class="qref" data-id="435">4세트 Q35</button> <button class="qref" data-id="419">4세트 Q19</button> <button class="qref" data-id="223">2세트 Q23</button></td></tr>
  </tbody></table></div>
  <h3>섹션 4 (약 15%): 기술·비즈니스 프로세스</h3>
  <div class="tbl"><table><thead><tr><th>항목</th><th>일본어</th><th>노트</th></tr></thead><tbody>
    <tr><td>기술: SDLC, CI/CD, 트러블슈팅·근본 원인 분석, 테스트·검증, 서비스 카탈로그, <b>장애 복구(DR)</b></td><td>根本原因の分析, サービス カタログ, <mark>障害復旧</mark></td><td><button class="qref" data-id="507">5세트 Q7</button> <button class="qref" data-id="322">3세트 Q22</button></td></tr>
    <tr><td>비즈니스: 이해관계자 관리, 변화 관리, 팀 평가·스킬 준비, 의사 결정, 고객 성공, 비용·리소스 최적화(CapEx/OpEx), 사업 연속성</td><td>ステークホルダー管理, チェンジ マネジメント, ビジネスの継続性</td><td><button class="qref" data-id="339">3세트 Q39</button> <button class="qref" data-id="524">5세트 Q24</button></td></tr>
  </tbody></table></div>
  <h3>섹션 5 (약 12.5%): 구현 관리</h3>
  <div class="tbl"><table><thead><tr><th>항목</th><th>일본어</th><th>노트</th></tr></thead><tbody>
    <tr><td>개발·운영팀 조언: 앱·인프라 배포, <b>API 관리(Apigee)</b>, 테스트(부하·단위·통합), 이전 도구, Gemini Cloud Assist</td><td>API 管理のベスト プラクティス</td><td><button class="qref" data-id="909">공식 모의고사 Q9</button></td></tr>
    <tr><td>프로그래밍 방식 조작: Cloud Shell 편집기·Cloud Code·Cloud Shell 터미널, gcloud·gsutil·bq, <b>에뮬레이터</b>, IaC(Terraform), Google API 접근 모범 사례, 클라이언트 라이브러리</td><td>クラウド エミュレータ, Infrastructure as Code</td><td><button class="qref" data-id="422">4세트 Q22</button></td></tr>
  </tbody></table></div>
  <h3>섹션 6 (약 12.5%): 운영 우수성</h3>
  <div class="tbl"><table><thead><tr><th>항목</th><th>일본어</th><th>노트</th></tr></thead><tbody>
    <tr><td>Well-Architected 운영 우수성 원칙, Google Cloud Observability(모니터링·로깅, 프로파일링·벤치마크, 알림 전략), 배포·릴리스 관리, 품질 관리, <b>신뢰성 확보(카오스 엔지니어링, 침투 테스트, 부하 테스트)</b></td><td>カオス エンジニアリング, ペネトレーション テスト, 負荷テスト</td><td>운영 가이드 <button class="qref" data-id="426">4세트 Q26</button></td></tr>
  </tbody></table></div>
</section>
`
},
{
  id: "case",
  title: "사례 연구 (事例紹介) 4개",
  updated: "2026-10-13",
  related: [9, 12, 15, 30, 39, 47, 50, 207, 220, 239, 316, 317, 318, 319, 321, 325, 326, 327, 331, 332, 337, 341, 342, 345, 406, 407, 416, 418, 420, 424, 429, 435, 438, 440, 444, 446, 502, 503, 505, 506, 510, 517, 522, 601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910],
  html: `
<section>
  <h2>0. 이 가이드를 쓰는 법</h2>
  <p>시험 가이드(일본어판)에 링크된 <mark>현행 사례 4개</mark>의 일본어 PDF를 회사별로 정리했습니다. 실제 시험에서는 화면 옆에 사례 원문이 함께 나옵니다. 그래도 미리 요건을 외워 두면 <b>“이 보기가 어느 요건을 충족하나”</b>를 바로 판단할 수 있어 시간을 크게 아낄 수 있습니다.</p>
  <ul>
    <li><b>읽는 순서:</b> ① 회사 한 줄 요약 → ② 기존 환경(무엇을 옮기나) → ③ 비즈니스·기술 요건(무엇을 만족해야 하나) → ④ 경영진 메시지(무엇을 가장 중시하나)</li>
    <li><b>사례 문제의 정답 조건:</b> 보기가 기술적으로 동작하는 것만으로는 부족하고, <mark>사례의 요건·제약과 충돌하지 않아야</mark> 합니다. 예를 들어 “당분간 옮기지 않는다”고 적힌 레거시 시스템을 옮기는 보기는 오답입니다.</li>
    <li>표의 <b>“예상 정답 방향”</b>은 요건 문장에서 추정한 것입니다(공식 정답 아님). 표의 일본어는 PDF 원문 그대로입니다.</li>
  </ul>
  <div class="tbl"><table><thead><tr><th>사례</th><th>원문 PDF (일본어판)</th></tr></thead><tbody>
    <tr><td class="strong">Altostrat Media</td><td><code>services.google.com/fh/files/misc/professional_cloud_architect_altostrat_media_case_study_japanese.pdf</code></td></tr>
    <tr><td class="strong">Cymbal Retail</td><td><code>services.google.com/fh/files/misc/professional_cloud_architect_cymbal_retail_case_study_japanese.pdf</code></td></tr>
    <tr><td class="strong">EHR Healthcare</td><td><code>services.google.com/fh/files/misc/professional_cloud_architect_ehr_healthcare_case_study_japanese.pdf</code></td></tr>
    <tr><td class="strong">KnightMotives Automotive</td><td><code>services.google.com/fh/files/misc/professional_cloud_architect_knightmotives_automotive_case_study_japanese.pdf</code></td></tr>
  </tbody></table></div>
  <p>2026-10-09 기준 영어판 PDF는 같은 주소 규칙으로는 열리지 않습니다(404). 시험 가이드 웹페이지(<code>cloud.google.com/learn/certification/guides/professional-cloud-architect?hl=ja</code>)의 「事例紹介」 링크는 <b>아직 이전 사례 4개</b>(EHR, HRL, Mountkirk, TerramEarth)를 가리키므로, 위 PDF를 기준으로 보세요.</p>
</section>

<section>
  <h2>1. 4개 사례 한눈에 비교</h2>
  <div class="tbl"><table><thead><tr><th>사례</th><th>업종 · 한 줄 요약</th><th>핵심 테마</th><th>기존 환경의 특징</th><th>경영진이 중시하는 것</th></tr></thead><tbody>
    <tr><td class="strong">Altostrat Media</td><td>미디어(팟캐스트·뉴스·다큐). 이미 GCP를 많이 쓰고 있음</td><td><mark>생성형 AI</mark>(요약·챗봇·메타데이터·유해 콘텐츠) + 하이브리드 GKE + 스토리지 비용</td><td>GKE, Cloud Storage, BigQuery, Cloud Run functions 사용 중. 수집·아카이브는 온프레미스. Prometheus + 메일 알림</td><td>신뢰성과 <b>비용 관리</b>(信頼性と費用管理は当社の最優先事項)</td></tr>
    <tr><td class="strong">Cymbal Retail</td><td>급성장하는 온라인 소매. 거대한 상품 카탈로그</td><td><mark>생성형 AI</mark>(카탈로그 자동 생성·이미지 생성) + 대화형 커머스 + 기술 스택 현대화</td><td>온프레미스·클라우드 혼합. MySQL, SQL Server, Redis, MongoDB. SFTP·ETL 배치. IVR(Interactive Voice Response, 음성 자동 응답) + 콜센터</td><td>운영 비용 절감, 정확한 카탈로그, 전환율·매출</td></tr>
    <tr><td class="strong">EHR Healthcare</td><td>의료 전자 기록 SaaS. 코로케이션 → GCP 이전</td><td><mark>하이브리드 이전·운영</mark>(가용성, 모니터링, 규제 준수)</td><td>코로케이션(곧 임대 만료), Kubernetes, MySQL·SQL Server·Redis·MongoDB, 온프레미스 보험사 연동, Microsoft AD, 메일 알림이 무시됨</td><td>설정 실수·용량 부족·제각각인 모니터링으로 생긴 <b>장애 줄이기</b></td></tr>
    <tr><td class="strong">KnightMotives Automotive</td><td>자동차 제조(BEV·하이브리드·ICE, 자율 주행)</td><td><mark>대규모 현대화</mark>(차량 AI, 데이터 수익화, 보안, EU 규제, 레거시 메인프레임)</td><td>대부분 온프레미스, 구형 메인프레임·ERP, 코드베이스 분산, 공장·지방 연결 문제, 과거 데이터 유출 사고</td><td>안전, 모든 모델에서 일관된 경험, <b>보안 최우선</b></td></tr>
  </tbody></table></div>
  <p><b>공통 패턴:</b> 4개 중 3개(Altostrat, Cymbal, EHR)가 “Kubernetes + 여러 DB + 오픈소스 모니터링 + 메일 알림”이라는 비슷한 기존 환경을 갖고 있습니다. 6장의 “공통 정답 패턴”을 먼저 익히면 세 사례를 한꺼번에 대비할 수 있습니다.</p>
</section>

<section>
  <h2>2. Altostrat Media (メディア)</h2>
  <p><b>개요:</b> 음성·동영상 콘텐츠를 다루는 미디어 기업입니다. Google Cloud의 생성형 AI로 콘텐츠 관리와 사용자 참여(추천, 자연어 대화, 셀프서비스 지원)를 현대화하고, 동적 가격·타깃 마케팅으로 매출을 늘리려 합니다. <mark>이미 GCP 위에 있다</mark>는 점이 다른 사례와 다릅니다. 그래서 “어디로 옮기나”보다 <b>“이미 있는 GCP 환경에 AI를 어떻게 붙이나”</b>를 묻는 문제가 나오기 쉽습니다.</p>
  <h3>기존 환경</h3>
  <div class="tbl"><table><thead><tr><th>영역</th><th>현재</th><th>문제에서 노릴 지점</th></tr></thead><tbody>
    <tr><td class="strong">배포 플랫폼</td><td>GKE (확장성·고가용성)</td><td>온프레미스에도 Kubernetes를 원함 → GKE Enterprise(fleet) 하이브리드</td></tr>
    <tr><td class="strong">미디어 라이브러리</td><td>Cloud Storage (문서·음성·동영상)</td><td>계속 늘어나는 저장 비용 → 스토리지 클래스·lifecycle·Autoclass</td></tr>
    <tr><td class="strong">분석</td><td>BigQuery (메인 DWH(Data Warehouse, 데이터 웨어하우스))</td><td>트렌드 분석·의사 결정 → BigQuery + BigQuery ML·Looker. 준실시간 개인화 추천·동적 가격용 전 세계 사용자 이벤트 수집 → <mark>Pub/Sub → Dataflow → BigQuery</mark>. 일일 Cloud Storage 배치·Cloud SQL 직접 삽입·Memorystore에만 저장 X <button class="qref" data-id="610">사례 연구 Q10</button></td></tr>
    <tr><td class="strong">이벤트 처리</td><td>Cloud Run functions (트랜스코딩·메타데이터 추출·추천)</td><td>이미 서버리스 이벤트 기반. 메타데이터 추출에 AI API를 붙이는 구조</td></tr>
    <tr><td class="strong">온프레미스</td><td>콘텐츠 수집(取り込み)·아카이브. 가까운 시일 안에 GCP로 이전 예정</td><td>안전하고 빠른 하이브리드 연결 + 대량 이전 수단</td></tr>
    <tr><td class="strong">ID</td><td>Google Identity + 서드파티 IdP(Identity Provider, ID 공급자)</td><td>ID 연동(SAML·OIDC SSO, Workforce Identity Federation). 앱 <b>사용자</b> 인증을 현대화하면서 Google·서드파티 IdP를 계속 지원 + 기존 로그인 흐름 유지 → <mark>기존 IdP와 연동한 Identity Platform</mark>. Google Workspace로 전면 교체·서비스 계정 키로 사용자 세션·자체 OAuth 코드 X <button class="qref" data-id="608">사례 연구 Q8</button></td></tr>
    <tr><td class="strong">모니터링</td><td>Cloud Monitoring + Prometheus, 알림은 주로 메일</td><td>Google Cloud Managed Service for Prometheus로 통합, 알림 채널 다양화 <button class="qref" data-id="517">5세트 Q17</button></td></tr>
  </tbody></table></div>
  <h3>비즈니스 요건 (ビジネス要件)</h3>
  <div class="tbl"><table><thead><tr><th>원문</th><th>뜻</th><th>예상 정답 방향</th></tr></thead><tbody>
    <tr><td>あらゆる環境で運用ワークフローのスピードと信頼性を高める。[Google Cloud + オンプレミス]</td><td>모든 환경(GCP + 온프레미스)에서 운영 워크플로의 속도·신뢰성 향상</td><td>GKE Enterprise fleet + Config Sync로 양쪽을 같은 방식으로 운영, Cloud Deploy <button class="qref" data-id="341">3세트 Q41</button> <button class="qref" data-id="438">4세트 Q38</button></td></tr>
    <tr><td>インフラストラクチャ管理を簡素化してアプリケーションを迅速にデプロイする。</td><td>인프라 관리를 단순화해 앱을 빠르게 배포</td><td>관리형 우선: GKE Autopilot, Cloud Run <button class="qref" data-id="506">5세트 Q6</button> <button class="qref" data-id="326">3세트 Q26</button>. “수동 노드 관리·확장 설정을 피함” → <mark>GKE Autopilot</mark>. 수동 노드 풀 GKE Standard·Compute Engine VM·비관리형 Kubernetes X <button class="qref" data-id="612">사례 연구 Q12</button></td></tr>
    <tr><td>メディア コンテンツの高可用性とスケーラビリティを維持しながら、クラウド ストレージの費用を最適化する。</td><td>가용성·확장성을 유지하면서 클라우드 스토리지 비용 최적화</td><td>접근 빈도에 따라 Nearline/Coldline/Archive, lifecycle 규칙 또는 Autoclass. 가용성 때문에 삭제·축소가 아닌 <b>클래스 전환</b> <button class="qref" data-id="332">3세트 Q32</button> <button class="qref" data-id="444">4세트 Q44</button></td></tr>
    <tr><td>24 時間 365 日のユーザー サポートを提供するプラットフォームで、自然言語によるやり取りを可能にする。</td><td>24시간 365일 사용자 지원 플랫폼에서 자연어 대화</td><td>Gemini 기반 대화형 에이전트(Conversational Agents / Dialogflow CX), 사내 문서를 근거로 답하는 RAG(Retrieval-Augmented Generation, 검색 증강 생성)</td></tr>
    <tr><td>メディア コンテンツの簡潔な要約を自動生成する。</td><td>콘텐츠 요약 자동 생성</td><td>Gemini 모델(멀티모달: 동영상·음성도 입력 가능)</td></tr>
    <tr><td>NLP とコンピュータ ビジョンを使用して、メディア アセットからリッチ メタデータを抽出する。</td><td>NLP(Natural Language Processing, 자연어 처리)·컴퓨터 비전으로 풍부한 메타데이터 추출</td><td>사전 학습 API(Video Intelligence, Vision, Speech-to-Text, Natural Language) 또는 Gemini. Cloud Storage 업로드 → Cloud Run functions(이벤트) → API → BigQuery에 저장</td></tr>
    <tr><td>不適切なコンテンツを検出してフィルタする。</td><td>부적절한 콘텐츠 탐지·필터</td><td>Vision API SafeSearch, Video Intelligence 부적절 콘텐츠 탐지. 생성형 AI의 입출력은 Model Armor. 업로드된 영상·음성이면 <mark>Cloud Storage 이벤트 → Cloud Run → Video Intelligence API + Speech-to-Text API, 결과는 BigQuery(감사 기록)</mark> <button class="qref" data-id="603">사례 연구 Q3</button></td></tr>
    <tr><td>メディア コンテンツを分析してトレンドを特定し、分析情報を引き出す。</td><td>콘텐츠 분석으로 트렌드·인사이트 도출</td><td>BigQuery(메타데이터 + 시청 데이터) + BigQuery ML·Looker <button class="qref" data-id="39">Q39</button></td></tr>
    <tr><td>データに基づいてコンテンツ戦略を策定し、意思決定を行う。</td><td>데이터 기반 콘텐츠 전략·의사 결정</td><td>BigQuery + Looker 대시보드</td></tr>
  </tbody></table></div>
  <h3>기술 요건 (技術要件)</h3>
  <div class="tbl"><table><thead><tr><th>원문</th><th>뜻</th><th>예상 정답 방향</th></tr></thead><tbody>
    <tr><td>一元化された管理プラットフォームを使用して、コンテナ化されたデプロイメントの CI / CD をモダナイズする。</td><td>하나로 통합된 관리 플랫폼으로 컨테이너 배포의 CI/CD 현대화</td><td>Cloud Build + Artifact Registry + Cloud Deploy, 대상은 GKE Enterprise fleet <button class="qref" data-id="429">4세트 Q29</button> <button class="qref" data-id="502">5세트 Q2</button>. GKE + 온프레미스 클러스터에 “정책 일관성 + 구성 드리프트 방지 + GitOps”면 <mark>GKE fleet + Config Sync + Cloud Deploy</mark>. Cloud Build에서 kubectl 직접 배포(push형, reconcile 없음)·Jenkins on Compute Engine·콘솔 수동 변경 X <button class="qref" data-id="602">사례 연구 Q2</button></td></tr>
    <tr><td>データの取り込みのための安全で高パフォーマンスなハイブリッド クラウド接続。</td><td>데이터 수집용 안전·고성능 하이브리드 연결</td><td><mark>Dedicated Interconnect를 서로 다른 edge availability domain에 이중화</mark>(끊김 없는 고처리량·예측 가능한 지연·SLA·회선 추가로 확장). HA VPN(인터넷), 단일 VLAN attachment(단일 장애 지점), Transfer Appliance(오프라인 배치)는 상시 수집 연결로 X <button class="qref" data-id="601">사례 연구 Q1</button>. 일회성 대량 아카이브 이전은 Transfer Appliance·Storage Transfer Service <button class="qref" data-id="345">3세트 Q45</button> <button class="qref" data-id="407">4세트 Q7</button> <button class="qref" data-id="319">3세트 Q19</button></td></tr>
    <tr><td>オンプレミスとクラウドの両方で、スケーラブルでパフォーマンスの高い Kubernetes 環境を提供する。</td><td>온프레미스와 클라우드 양쪽의 Kubernetes 환경</td><td><mark>GKE Enterprise</mark>(온프레미스 GKE 클러스터를 fleet로 함께 관리) <button class="qref" data-id="342">3세트 Q42</button>. “통합 정책 강제 + 일관된 관측성 + 단순한 수명 주기” → <mark>GKE fleet 관리 + Policy Controller</mark>. 클러스터별 독립 관리·GKE Standard + 수동 거버넌스(클라우드만)·Compute Engine 컨테이너 X <button class="qref" data-id="607">사례 연구 Q7</button></td></tr>
    <tr><td>増え続けるメディアのクラウド ストレージ費用を最適化する。</td><td>늘어나는 스토리지 비용 최적화</td><td>Autoclass / lifecycle 규칙 <button class="qref" data-id="505">5세트 Q5</button>. “드물게 읽히지만 <b>예측할 수 없이 다시 인기</b> + 가용성 + 관리 최소” → <mark>multi-region 버킷에 Autoclass</mark>(다시 읽히면 자동 Standard 승격) + 정리용 lifecycle(Delete). 전부 즉시 Archive(조회 요금)·수동 클래스 분리·lifecycle 없는 전부 Nearline X <button class="qref" data-id="606">사례 연구 Q6</button></td></tr>
    <tr><td>AI を活用した有害コンテンツの検出を設計する。</td><td>AI로 유해 콘텐츠 탐지 설계</td><td>위 비즈니스 요건의 SafeSearch·Model Armor. “자동 확장 + 이벤트 기반 + 감사용 예측 기록” → Cloud Run이 사전 학습 API(Video Intelligence·Speech-to-Text) 호출 + BigQuery 저장. GKE 맞춤 모델 + 파일 로그, <b>예약 BigQuery ML</b>(테이블 데이터용·배치), 주기적 오프라인 검토 X <button class="qref" data-id="603">사례 연구 Q3</button>. 추천 모델이 편향·유해 콘텐츠를 퍼뜨리지 않게 <b>지속적 평가·거버넌스</b> → <mark>Agent Platform Model Monitoring</mark>(+ 공정성 평가 파이프라인). 주기적 표본 수동 검토·정적 규칙 필터·Cloud Storage 예측 로그 X <button class="qref" data-id="611">사례 연구 Q11</button></td></tr>
    <tr><td>AI システムを監査可能にし、その意思決定を説明できるようにする。</td><td>AI 시스템을 감사 가능하게, 의사 결정을 설명 가능하게</td><td><mark>Gemini Enterprise Agent Platform + Vertex Explainable AI</mark>(설명 가능한 AI, 특성 기여도) + Model Monitoring(드리프트·스큐), 예측·설명 메타데이터는 BigQuery(감사 저장소), 모델·데이터 계보, Cloud Audit Logs. K8s 오픈소스 LLM(직접 구현)·Cloud Logging 내보내기(요청·응답만, “왜”가 없음)·전수 수동 검토 X <button class="qref" data-id="604">사례 연구 Q4</button>. 같은 플랫폼에서 “지속적 평가·드리프트”면 Model Monitoring <button class="qref" data-id="611">사례 연구 Q11</button>. AI 서비스를 승인되지 않은 프로젝트에서 못 쓰게 → <mark>조직 수준 IAM + Organization Policy로 API 사용 제한</mark>(<code>gcp.restrictServiceUsage</code>). VPC 방화벽·별도 결제 계정·프로젝트 라벨 X <button class="qref" data-id="613">사례 연구 Q13</button>. AI API로 민감 메타데이터가 경계 밖으로 <b>유출</b>되지 않게(하이브리드 포함, 코드 변경 없음) → <mark>VPC Service Controls</mark>. 아웃바운드 방화벽·모든 서브넷 PGA·균일한 버킷 수준 액세스 X <button class="qref" data-id="614">사례 연구 Q14</button></td></tr>
    <tr><td>LLM と会話型 AI を活用して、パーソナライズされたエクスペリエンスとコンテンツの拡散を可能にする。</td><td>LLM(Large Language Model, 대규모 언어 모델)·대화형 AI로 개인화</td><td>Gemini + 사용자 데이터(BigQuery)를 근거로 한 추천·대화. 카탈로그 대화형 검색(BigQuery 정형 + Cloud Storage 비정형 메타데이터, 재학습 최소) → <mark>Agent Platform의 RAG + 벡터 임베딩</mark>. Compute Engine 파인튜닝(데이터가 바뀔 때마다 재학습)·Dialogflow ES + Cloud SQL(인텐트 분류형)·키워드 검색 X <button class="qref" data-id="605">사례 연구 Q5</button></td></tr>
    <tr><td>自然言語理解を活用し、パーソナライズされたサポートを提供する高度なチャットボットを開発する。</td><td>자연어 이해로 개인화 지원 챗봇</td><td>Conversational Agents(Dialogflow CX) + Gemini</td></tr>
    <tr><td>さまざまなメディアの自動要約を行う。</td><td>다양한 미디어 자동 요약</td><td>Gemini 멀티모달</td></tr>
  </tbody></table></div>
  <p><b>출제 예상 포인트</b></p>
  <ul>
    <li><b>직접 학습 vs 사전 구축:</b> 요약·메타데이터·유해 콘텐츠는 <mark>사전 학습 모델(API·Gemini)로 충분</mark>합니다. 커스텀 모델을 처음부터 학습하는 보기는 “관리 단순화·비용” 요건 때문에 대개 오답입니다.</li>
    <li><b>비용 최우선 + 가용성 유지:</b> 스토리지 문제에서 “싸지만 가용성을 낮추는” 보기(단일 zone 등)는 함정입니다.</li>
    <li><b>알림이 메일 위주:</b> Cloud Monitoring alerting policy + 여러 알림 채널, Prometheus는 Managed Service for Prometheus로 통합하는 방향 <button class="qref" data-id="337">3세트 Q37</button>. “알림이 <b>자동 복구를 트리거</b>, 메일 수동 대응 X” → <mark>alerting policy + Pub/Sub 알림 채널 → Cloud Run</mark>. Prometheus 메일 알림·Logging → Cloud Storage 내보내기(보관)·Compute Engine 자체 스크립트 X <button class="qref" data-id="609">사례 연구 Q9</button></li>
  </ul>
</section>

<section>
  <h2>3. Cymbal Retail (オンライン小売)</h2>
  <p><b>개요:</b> 상품 분야가 넓은 급성장 온라인 소매업체로, 거대한 상품 카탈로그 관리가 늘 과제입니다. 원문은 현대화할 <b>3가지 핵심 영역</b>을 직접 나열합니다.</p>
  <div class="tbl"><table><thead><tr><th>핵심 영역</th><th>원문 요지</th><th>예상 정답 방향</th></tr></thead><tbody>
    <tr><td class="strong">① 카탈로그·콘텐츠 확충</td><td>カタログとコンテンツの拡充: 공급업체 정보에서 상품 속성·설명·이미지를 생성형 AI로 생성</td><td>Gemini(속성·설명 생성) <button class="qref" data-id="616">사례 연구 Q16</button>, 이미지 생성·편집 모델(Gemini 이미지 모델·Imagen) + Pub/Sub 이벤트 기반 <button class="qref" data-id="620">사례 연구 Q20</button></td></tr>
    <tr><td class="strong">② 대화형 커머스</td><td>商品検索による会話型コマース: 웹·모바일 앱에 AI 가상 에이전트, <mark>Google Cloud の Discovery AI</mark>로 관련 상품 검색</td><td><mark>Agent Platform 에이전트 + Agent Search</mark>(보기에서 Discovery AI는 이 이름으로 나옴. 상거래용은 AI Commerce Search ← Agent Search for commerce). 자연어 이해·의미 검색·사용자 이벤트 기반 개인화. K8s 오픈소스 챗봇 + MySQL 직접 조회·키워드 검색 + Redis·카탈로그 미연동 Dialogflow CX X <button class="qref" data-id="617">사례 연구 Q17</button></td></tr>
    <tr><td class="strong">③ 기술 스택 현대화</td><td>技術スタックのモダナイゼーション: 수작업·데이터 전송·오류 처리를 줄여 비용 절감, 서드파티 연동, 사전 예방적 모니터링·보안</td><td>관리형 DB 이전, 파일 연동을 관리형 통합으로, Cloud Monitoring·Logging 통합</td></tr>
  </tbody></table></div>
  <h3>기존 환경과 과제</h3>
  <div class="tbl"><table><thead><tr><th>현재</th><th>예상 정답 방향</th></tr></thead><tbody>
    <tr><td>온프레미스 + 클라우드 혼합</td><td>하이브리드 연결(Interconnect/HA VPN) <button class="qref" data-id="50">Q50</button></td></tr>
    <tr><td>MySQL, Microsoft SQL Server, Redis, MongoDB</td><td>MySQL·SQL Server → Cloud SQL(Database Migration Service), Redis → Memorystore, MongoDB → Firestore(MongoDB 호환) 또는 Marketplace의 MongoDB Atlas <button class="qref" data-id="47">Q47</button> <button class="qref" data-id="446">4세트 Q46</button></td></tr>
    <tr><td>Kubernetes 클러스터</td><td>GKE (관리 부담을 줄이려면 Autopilot) <button class="qref" data-id="506">5세트 Q6</button>. 컨테이너 앱 호스팅 비용 절감 + 확장성·신뢰성 → <mark>GKE Autopilot</mark>(범용 Pod는 Pod 요청량 기준 과금). 온프레미스 증설·비관리형 Kubernetes·Compute Engine MIG X <button class="qref" data-id="626">사례 연구 Q26</button></td></tr>
    <tr><td>SFTP 파일 전송, ETL 배치 등 레거시 파일 기반 연동</td><td><mark>이벤트 기반 Pub/Sub + Dataflow</mark>(재전송·데드 레터·관리형 처리로 오류 처리·운영 부담 개선. 야간 SFTP 유지 + 서버 증설·수동 업로드·온프레미스 단일 서버 X) <button class="qref" data-id="623">사례 연구 Q23</button>, 파일 대량 전송은 Cloud Storage + Storage Transfer Service, 운영 DB → 분석은 Datastream → BigQuery <button class="qref" data-id="618">사례 연구 Q18</button>, 앱 간 연동은 Application Integration <button class="qref" data-id="510">5세트 Q10</button> <button class="qref" data-id="440">4세트 Q40</button></td></tr>
    <tr><td>상품명·카테고리로 RDB(Relational Database, 관계형 DB)를 조회하는 자체 웹 앱</td><td>키워드 검색의 한계 → 자연어·의미 기반 검색(Discovery AI = Agent Search). 챗봇이 MySQL을 직접 조회하는 보기는 이 한계를 그대로 옮긴 것 <button class="qref" data-id="617">사례 연구 Q17</button></td></tr>
    <tr><td>IVR + 수동 주문 입력 콜센터</td><td>가상 에이전트가 1차 응대·셀프서비스 주문 → <b>콜센터 인건비 절감</b> 요건. <mark>CX Agent Studio(Dialogflow CX의 진화형) + 백엔드 API 도구(OpenAPI 도구, 서비스 계정·IAM 인증)</mark>로 거래까지 자율 처리. 정적 FAQ 챗봇·전부 상담원 연결·Cloud Run functions 이메일 후속 X <button class="qref" data-id="619">사례 연구 Q19</button></td></tr>
    <tr><td>Grafana, Nagios, Elastic 등 오픈소스 모니터링</td><td>Cloud Monitoring·Logging으로 일원화 <button class="qref" data-id="337">3세트 Q37</button>. 사전 모니터링 + 자동 복구 → <mark>alerting policy + Pub/Sub 알림 채널 → Cloud Run</mark>. Nagios + 메일 유지·Grafana 대시보드 추가·Elastic에 로그만 X <button class="qref" data-id="627">사례 연구 Q27</button></td></tr>
    <tr><td>과제: 수작업이 느리고 오류가 많음, <mark>데이터 사일로</mark>로 고객 여정 전체를 보기 어려움</td><td>BigQuery로 데이터 통합: 운영 DB(MySQL·SQL Server·MongoDB)는 그대로 두고 <mark>Datastream(CDC)으로 변경분을 BigQuery에 스트리밍</mark> → 개인화·추천 모델용 통합 분석 계층. ETL 배치 유지·Cloud SQL 복제본(가용성용)·야간 CSV X <button class="qref" data-id="618">사례 연구 Q18</button> <button class="qref" data-id="624">사례 연구 Q24</button></td></tr>
  </tbody></table></div>
  <h3>비즈니스 요건</h3>
  <div class="tbl"><table><thead><tr><th>원문</th><th>뜻</th><th>예상 정답 방향</th></tr></thead><tbody>
    <tr><td>商品カタログの拡充を自動化</td><td>카탈로그 확충 자동화(수작업·오류 감소, 정확성·일관성)</td><td>Gemini 생성 + HITL 검토(아래 기술 요건)</td></tr>
    <tr><td>商品を見つけやすくする</td><td>상품을 찾기 쉽게(검색 관련성)</td><td>Agent Search(Discovery AI) 검색 <button class="qref" data-id="617">사례 연구 Q17</button></td></tr>
    <tr><td>顧客エンゲージメントの向上</td><td>개인화 쇼핑 경험, 만족도↑, 반품률↓</td><td>대화형 에이전트 + 개인화 추천. 여러 시스템의 탐색·구매 데이터로 준실시간 개인화 → <mark>행동 이벤트를 BigQuery로 스트리밍</mark> → Agent Platform 추천 모델(주간 배치·Redis 수동 갱신·MongoDB에만 X) <button class="qref" data-id="624">사례 연구 Q24</button></td></tr>
    <tr><td>販売コンバージョンを向上</td><td>구매 전환율 향상</td><td>검색·추천 품질</td></tr>
    <tr><td>費用を削減: コールセンターのスタッフ費用とデータセンターのホスティング費用を削減</td><td>콜센터 인건비와 데이터 센터 호스팅비 절감</td><td>가상 에이전트(CX Agent Studio + 백엔드 API) <button class="qref" data-id="619">사례 연구 Q19</button> + 데이터 센터에서 GCP로 이전(컨테이너 앱은 GKE Autopilot <button class="qref" data-id="626">사례 연구 Q26</button>)</td></tr>
  </tbody></table></div>
  <h3>기술 요건</h3>
  <div class="tbl"><table><thead><tr><th>원문</th><th>뜻</th><th>예상 정답 방향</th></tr></thead><tbody>
    <tr><td>属性の生成</td><td>공급업체 데이터에서 상품 속성을 정확히 도출, <b>기존 카탈로그 구조에 맞게</b></td><td><mark>Agent Platform의 Gemini + 구조화 프롬프트</mark>(카탈로그 분류 체계·허용 값 제공, JSON 스키마 출력), 결과는 BigQuery 검토 대기 저장소. Compute Engine 파인튜닝 → MySQL 직접·Cloud Run functions → MongoDB 자동 갱신·BigQuery ML로 CSV에서 직접 X <button class="qref" data-id="616">사례 연구 Q16</button>. 새 카테고리에도 지속 가능하게 → 분류 체계는 데이터로 두고 <mark>응답 스키마(enum 허용 값) + 게시 전 검증</mark>. 앱 코드 하드코딩·자유 형식 출력·Redis에 저장만 X <button class="qref" data-id="630">사례 연구 Q30</button></td></tr>
    <tr><td>画像生成と画像補正</td><td>기본 이미지에서 색상 변형 생성, 배경 변경, 색 보정, 텍스트 오버레이</td><td><mark>Agent Platform 이미지 생성·편집 모델</mark>(Gemini 이미지 모델 <code>gemini-3-pro-image</code> 등, Imagen) + 업로드 이벤트 → Pub/Sub → Cloud Run 호출로 성수기 자동 확장. Compute Engine GPU 서버·Kubernetes job 렌더링·수작업 편집 X <button class="qref" data-id="620">사례 연구 Q20</button></td></tr>
    <tr><td>商品検索の自動化</td><td>자연어 요청을 처리해 관련 상품 반환</td><td>Agent Search(Discovery AI) + Agent Platform 에이전트 <button class="qref" data-id="617">사례 연구 Q17</button> <button class="qref" data-id="622">사례 연구 Q22</button></td></tr>
    <tr><td>スケーラビリティとパフォーマンス</td><td>거대한 카탈로그와 성장에 대응</td><td>관리형·자동 확장 서비스. 생성형 AI 대량 처리는 관리형 모델 API + Pub/Sub 이벤트 기반(GPU VM·Kubernetes 직접 운영 X) <button class="qref" data-id="620">사례 연구 Q20</button>. 검색 확장은 운영 DB에서 떼어 낸 <mark>Agent Search 색인</mark>(VM 크기 확대·Redis로 모든 검색·MySQL 직접 검색 X) <button class="qref" data-id="622">사례 연구 Q22</button>. 전 세계 사용자 지연 최소 + 중앙 색인 → <mark>글로벌 외부 Application LB</mark> + 리전별 대화 서비스, 색인은 Agent Search 하나 공유(단일 리전 K8s·내부 LB만·온프레미스 경유 X) <button class="qref" data-id="629">사례 연구 Q29</button></td></tr>
    <tr><td><mark>人間参加型（HITL）レビュー</mark></td><td>HITL(Human-in-the-loop, 사람 참여형) 검토: 생성 결과를 직원이 승인·거부·수정하는 UI. 승인 전에는 카탈로그에 반영하지 않음</td><td>생성 결과를 바로 운영 카탈로그에 쓰는 보기는 <b>오답</b>. 검토 대기 저장소 → 승인 시 반영. “directly to MySQL”, “update MongoDB automatically”가 이 함정 <button class="qref" data-id="616">사례 연구 Q16</button>. 상품 설명의 규정 준수·오표기 방지 + 수정·승인 추적 → <mark>스테이징 저장소 + HITL 검토 앱 + 감사 로그·버전 이력</mark>. 추론 후 자동 덮어쓰기·공급업체 직접 수정·Cloud Logging에만 저장 X <button class="qref" data-id="621">사례 연구 Q21</button></td></tr>
    <tr><td>データ セキュリティとコンプライアンス</td><td>상품 정보·가상 에이전트 대화 등 고객 데이터를 안전하게, 업계 규제 준수</td><td>Sensitive Data Protection(대화 로그의 개인정보 마스킹), VPC Service Controls, CMEK(Customer-Managed Encryption Keys, 고객 관리 암호화 키), Model Armor <button class="qref" data-id="15">Q15</button> <button class="qref" data-id="418">4세트 Q18</button>. 가상 에이전트 대화 데이터 + 프로젝트 간 무단 접근 방지 → <mark>VPC Service Controls + 최소 권한 IAM</mark>(CX Agent Studio API <code>ces.googleapis.com</code>도 VPC SC 지원, CX Insights API와 함께 제한). 프로젝트 수준 IAM만·서비스 계정 키 공유·공개 API 엔드포인트 X <button class="qref" data-id="625">사례 연구 Q25</button></td></tr>
  </tbody></table></div>
  <p><b>출제 예상 포인트</b></p>
  <ul>
    <li><b>HITL을 빼먹는 보기:</b> “생성형 AI 결과를 자동으로 카탈로그에 반영”은 자동화 요건만 보면 맞아 보이지만, HITL 요건을 어깁니다. 뼈대는 늘 <b>생성 → 스테이징 → 사람 검토·승인(이력) → 게시</b> <button class="qref" data-id="616">사례 연구 Q16</button> <button class="qref" data-id="621">사례 연구 Q21</button>.</li>
    <li><b>검색 품질 문제:</b> RDB의 LIKE 검색을 튜닝하거나 인덱스를 늘리는 보기보다 <mark>Discovery AI(관리형 상품 검색)</mark>가 요건에 맞습니다. 영어 보기에서는 <b>Agent Search</b>로 나옵니다 <button class="qref" data-id="617">사례 연구 Q17</button>. 확장성을 물어도 같은 답(검색 부하를 운영 DB에서 분리) <button class="qref" data-id="622">사례 연구 Q22</button>.</li>
    <li><b>생성형 AI 품질 유지:</b> 신상품·카테고리가 늘어 품질이 떨어지는지 보려면 <mark>Model Monitoring(드리프트) + 평가 데이터 세트(Gen AI Evaluation Service) + 자동 알림</mark>. 측정 없이 정기 재학습·수동 검토만은 오답 <button class="qref" data-id="628">사례 연구 Q28</button>.</li>
    <li><b>레거시 SFTP·ETL:</b> 사람이 스크립트를 짜는 방식보다 관리형 서비스(Storage Transfer Service, Dataflow, Application Integration)가 정답이 되기 쉽습니다 (“수작업·오류 처리 감소” 요건). 무엇을 옮기는지로 고릅니다: 파일·이벤트 = Pub/Sub + Dataflow <button class="qref" data-id="623">사례 연구 Q23</button>, DB 변경분 = Datastream <button class="qref" data-id="618">사례 연구 Q18</button>, SaaS 앱 = Application Integration.</li>
  </ul>
</section>

<section>
  <h2>4. EHR Healthcare (医療) <button class="qref" data-id="901">공식 모의고사 Q1</button> <button class="qref" data-id="902">공식 모의고사 Q2</button> <button class="qref" data-id="903">공식 모의고사 Q3</button> <button class="qref" data-id="904">공식 모의고사 Q4</button></h2>
  <p><b>개요:</b> 의료 전자 기록(電子カルテ) 소프트웨어를 다국적 의료 기관·병원·보험사에 SaaS로 제공합니다. 사업이 급성장해 확장, DR(Disaster Recovery, 재해 복구) 계획 조정, 지속적 배포가 필요하고, <mark>코로케이션 시설을 Google Cloud로 대체</mark>하기로 했습니다. 지속적 배포 + 구성 드리프트로 인한 장애 감소 → <mark>Cloud Build + Artifact Registry + Cloud Deploy</mark>(수동 배포 기간·노드 SSH 배포·월 1회 배포 X) <button class="qref" data-id="640">사례 연구 Q40</button>.</p>
  <p><b>이전판과 비교:</b> 이전 목록의 영어판 PDF(<code>master_case_study_ehr_healthcare.pdf</code>)와 새 일본어판을 문장 단위로 대조했더니 <mark>내용이 같습니다</mark>(번역만 다름). 그래서 공식 모의고사 Q1~Q4가 그대로 현행 사례 대비 연습이 됩니다.</p>
  <h3>기존 환경</h3>
  <div class="tbl"><table><thead><tr><th>현재</th><th>예상 정답 방향</th></tr></thead><tbody>
    <tr><td>여러 코로케이션 시설. 그중 한 곳은 <b>곧 임대 만료</b></td><td>그곳부터 빠르게 이전(일정 압박 → 리프트 앤 시프트 우선). 고객용 시스템은 이전하면서 멀티 리전 active/active로 <button class="qref" data-id="631">사례 연구 Q31</button></td></tr>
    <tr><td>웹 기반 고객용 앱, 다수가 최근 컨테이너화되어 Kubernetes 클러스터 그룹에서 실행</td><td>GKE, 여러 클러스터·환경은 GKE Enterprise fleet로 일관 관리</td></tr>
    <tr><td>MySQL, MS SQL Server, Redis, MongoDB</td><td><mark>엔진별 관리형 대응 + 단계적 이전</mark>: Cloud SQL(적절하면 AlloyDB), Memorystore for Redis, MongoDB 호환 Firestore 또는 MongoDB Atlas. VM 자체 설치·전부 BigQuery로 교체·DB만 온프레미스 유지 X <button class="qref" data-id="636">사례 연구 Q36</button></td></tr>
    <tr><td>보험사와의 레거시 파일·API 연동을 온프레미스에서 운영. <mark>몇 년 안에 교체 예정이며 지금은 업그레이드·이전 계획 없음</mark></td><td><b>옮기지 말고 연결</b>: 온프레미스에 두고 Interconnect/VPN으로 GCP와 연결. 이 시스템을 이전·재작성하는 보기는 오답 <button class="qref" data-id="632">사례 연구 Q32</button>. 연동 엔드포인트는 공개하지 않고 내부 IP로만 <button class="qref" data-id="643">사례 연구 Q43</button></td></tr>
    <tr><td>Microsoft Active Directory로 사용자 관리</td><td>GCDS(Google Cloud Directory Sync)로 Cloud Identity에 동기화 + SAML SSO <button class="qref" data-id="220">2세트 Q20</button></td></tr>
    <tr><td>각종 오픈소스 모니터링, <mark>메일 알림이 자주 무시됨</mark></td><td>Cloud Monitoring·Logging 일원화, alerting policy, SLO 기반 알림 <button class="qref" data-id="337">3세트 Q37</button> <button class="qref" data-id="342">3세트 Q42</button>. 보기 이름은 <mark>Google Cloud Observability</mark>(제품군 이름). 이메일 빈도 증가·Cloud Storage 보관 후 주간 검토·클러스터별 Prometheus+Grafana X <button class="qref" data-id="634">사례 연구 Q34</button></td></tr>
  </tbody></table></div>
  <h3>비즈니스 요건</h3>
  <div class="tbl"><table><thead><tr><th>원문</th><th>뜻</th><th>예상 정답 방향</th></tr></thead><tbody>
    <tr><td>新しい保険会社のオンボーディングをできる限り迅速化する。</td><td>새 보험사 온보딩을 최대한 빠르게</td><td>표준화된 API(Apigee)와 데이터 수집 인터페이스 <button class="qref" data-id="325">3세트 Q25</button>. 새 보험사는 표준 수집 파이프라인(Pub/Sub → Dataflow)에 게시만 하면 됨 <button class="qref" data-id="635">사례 연구 Q35</button>. 보험사별 격리 테스트 환경 + 관리 부담 최소 → <mark>IaC 템플릿(Terraform · Infrastructure Manager)으로 프로젝트·GKE 네임스페이스 + 정책·할당량</mark>(수동 VM·단일 공유 환경·물리 서버 X) <button class="qref" data-id="644">사례 연구 Q44</button></td></tr>
    <tr><td>顧客向けのすべてのシステムで 99.9% 以上の可用性を実現する。</td><td>고객용 시스템 99.9% 이상 가용성</td><td>regional(멀티 zone) GKE·Cloud SQL HA, 전역 LB <button class="qref" data-id="331">3세트 Q31</button>. 99.9% + 전 세계 지연 감소 + 확장에 맞는 DR → <mark>무상태 서비스 멀티 리전 active/active + 리전 간 데이터 복제 + 자동 장애 조치</mark>(DR 핫 패턴). 단일 리전 + 백업·단일 리전 멀티 zone·단일 zone + 콜드 스탠바이 X <button class="qref" data-id="631">사례 연구 Q31</button>. 비용 통제 + 비핵심 리포트는 느린 복구 허용 → <mark>핵심 고객용 서비스만 active/active, 비핵심은 warm standby(계층형 DR)</mark>. 전부 active/active·전부 콜드 + 수동·단일 리전 + 백업 X <button class="qref" data-id="645">사례 연구 Q45</button></td></tr>
    <tr><td>システムのパフォーマンスと使用状況を一元的に可視化し、プロアクティブな対応を可能にする。</td><td>성능·사용량을 한곳에서 보고 사전 대응</td><td>Cloud Monitoring 대시보드 + alerting policy <button class="qref" data-id="337">3세트 Q37</button></td></tr>
    <tr><td>医療の動向に関する知見の提供能力を高める。</td><td>의료 동향에 대한 인사이트 제공</td><td>BigQuery + Looker. 운영 워크로드와 분리 → <mark>BigQuery를 분석 웨어하우스로</mark>(Cloud SQL 운영 DB 직접 쿼리·Redis 집계·MongoDB 분석 저장소 X) <button class="qref" data-id="641">사례 연구 Q41</button></td></tr>
    <tr><td>すべての顧客についてレイテンシを低減する。</td><td>모든 고객의 지연 감소</td><td>전역 외부 Application LB, Cloud CDN, 고객 가까운 리전 <button class="qref" data-id="316">3세트 Q16</button> <button class="qref" data-id="901">공식 모의고사 Q1</button> <button class="qref" data-id="631">사례 연구 Q31</button>. 여러 나라 고객 + 확장 + 운영 단순 → <mark>global external Application LB + 멀티 리전 백엔드(자동 확장)</mark>. 리전별 Network LB만·단일 리전 + 큰 VM·코로케이션 경유 X <button class="qref" data-id="638">사례 연구 Q38</button></td></tr>
    <tr><td>規制遵守を維持する。</td><td>규제 준수 유지</td><td>HIPAA(Health Insurance Portability and Accountability Act, 미국 의료정보 보호법) BAA(Business Associate Agreement) 대상 제품만 사용, VPC Service Controls, 감사 로그 <button class="qref" data-id="435">4세트 Q35</button> <button class="qref" data-id="903">공식 모의고사 Q3</button>. 통제된 접근·감사 가능성·실수 노출 방지 → <mark>최소 권한 IAM + 중앙 감사 로그(+ 조직 정책 제약)</mark>. 공유 관리자 계정·공개 접근 + IP 허용 목록·CMEK 암호화만 X <button class="qref" data-id="637">사례 연구 Q37</button></td></tr>
    <tr><td>インフラストラクチャ管理費用を削減する。</td><td>인프라 관리 비용 절감</td><td>관리형 서비스(GKE Autopilot, Cloud SQL)</td></tr>
    <tr><td>保険会社のデータに基づいて業界の動向を予測し、レポートを生成する。</td><td>보험사 데이터로 업계 동향 예측·리포트</td><td>BigQuery ML 또는 Agent Platform, Looker 리포트 <button class="qref" data-id="641">사례 연구 Q41</button></td></tr>
  </tbody></table></div>
  <h3>기술 요건</h3>
  <div class="tbl"><table><thead><tr><th>원문</th><th>뜻</th><th>예상 정답 방향</th></tr></thead><tbody>
    <tr><td>オンプレミス システムとクラウド プロバイダの両方に接続できるようにすることで、保険会社への従来のインターフェースを維持する。</td><td>온프레미스와 클라우드 양쪽에 연결해 보험사용 기존 인터페이스 유지</td><td>하이브리드 연결 + 레거시는 그대로. 민감한 연동 엔드포인트 비공개 → <mark>Interconnect / HA VPN 사설 연결 + 내부 LB 등 사설 엔드포인트</mark>. 공개 API + OAuth·공개 + IP 허용 목록·공개 CDN X <button class="qref" data-id="643">사례 연구 Q43</button></td></tr>
    <tr><td>コンテナベースの顧客向けアプリケーションを一貫した方法で管理できるようにする。</td><td>컨테이너 앱을 일관된 방식으로 관리</td><td>GKE Enterprise fleet, Config Sync <button class="qref" data-id="438">4세트 Q38</button>. 보험사 온보딩용 새 환경까지 → <mark>GKE + 표준 템플릿 + GitOps 기반 프로비저닝</mark>. 보험사별 비관리형 K8s + 수동 구성·전부 MIG·전부 Cloud Run X <button class="qref" data-id="633">사례 연구 Q33</button></td></tr>
    <tr><td>オンプレミス システムと Google Cloud の間に安全かつ高速な接続を提供する。</td><td>온프레미스↔GCP 안전·고속 연결</td><td>Dedicated / Partner Interconnect <button class="qref" data-id="902">공식 모의고사 Q2</button> <button class="qref" data-id="345">3세트 Q45</button>. 레거시 연동 장기 유지 + 안전·고성능 → <mark>Dedicated Interconnect 이중화(서로 다른 エッジ アベイラビリティ ドメイン) + Cloud Router(BGP)</mark>. 인터넷 경유 HA VPN만·VPC 피어링·공인 IP 허용 목록 + TLS X <button class="qref" data-id="632">사례 연구 Q32</button></td></tr>
    <tr><td>一貫性のあるロギング、ログの保持、モニタリング、アラートの機能を提供する。</td><td>일관된 로깅·로그 보존·모니터링·알림</td><td>Cloud Logging(로그 버킷 보존 기간, sink로 장기 보관) + Cloud Monitoring <button class="qref" data-id="444">4세트 Q44</button> <button class="qref" data-id="12">Q12</button> = Google Cloud Observability <button class="qref" data-id="634">사례 연구 Q34</button>. 로깅 쪽만 물으면 <mark>Cloud Logging으로 표준화</mark>(GKE 자동 수집·sink·로그 기반 지표). 노드 로컬 저장·서드파티 도구만·상세 로깅 끄기 X <button class="qref" data-id="639">사례 연구 Q39</button></td></tr>
    <tr><td>複数のコンテナベース環境を維持、管理する。</td><td>여러 컨테이너 환경 유지·관리</td><td>fleet로 dev/staging/prod 클러스터를 함께 관리 <button class="qref" data-id="633">사례 연구 Q33</button></td></tr>
    <tr><td>環境のスケーリングとプロビジョニングを動的に行う。</td><td>환경 확장·프로비저닝을 동적으로</td><td>Autoscaling + IaC(Infrastructure as Code, 코드형 인프라: Terraform) <button class="qref" data-id="9">Q9</button> <button class="qref" data-id="30">Q30</button> <button class="qref" data-id="633">사례 연구 Q33</button> <button class="qref" data-id="644">사례 연구 Q44</button></td></tr>
    <tr><td>新しい保険会社からデータを取り込んで処理するためのインターフェースを作成する。</td><td>새 보험사 데이터 수집·처리 인터페이스</td><td>Apigee API + Pub/Sub·Dataflow 파이프라인 <button class="qref" data-id="418">4세트 Q18</button>. 급증 + 운영 부담 최소 → <mark>Pub/Sub 수집 + Dataflow 처리(→ BigQuery)</mark>. Cloud SQL 야간 배치·Compute Engine 자체 수집 서버·FTP + 수동 검증 X <button class="qref" data-id="635">사례 연구 Q35</button></td></tr>
  </tbody></table></div>
  <p><b>경영진 메시지의 단서:</b> 장애 원인으로 <mark>설정 실수(構成ミス), 트래픽 급증 시 용량 부족, 일관성 없는 모니터링</mark>을 꼽습니다. 그래서 IaC·자동 확장·통합 모니터링을 고르는 보기가 정답이 되기 쉽습니다. 실제로 설정 실수 → 표준 템플릿 + GitOps <button class="qref" data-id="633">사례 연구 Q33</button>·Cloud Build + Artifact Registry + Cloud Deploy <button class="qref" data-id="640">사례 연구 Q40</button>, 용량 부족 → <mark>HPA + cluster autoscaler</mark>(최대치 고정 노드 풀·수동 VM 확장·자동 확장 끄기 X) <button class="qref" data-id="642">사례 연구 Q42</button>, 모니터링 → Google Cloud Observability <button class="qref" data-id="634">사례 연구 Q34</button>.</p>
</section>

<section>
  <h2>5. KnightMotives Automotive (自動車)</h2>
  <p><b>개요:</b> BEV(Battery Electric Vehicle, 배터리 전기차)·하이브리드·ICE(Internal Combustion Engine, 내연기관)차와 자율 주행을 다루는 자동차 제조사입니다. BEV에만 최신 차내 경험이 있어 하이브리드·ICE의 평가가 나쁘고, <b>5년 안에 전 차종의 고객 경험을 현대화</b>하려 합니다. 4개 사례 중 <mark>범위가 가장 넓고</mark>, 기술 요건이 긴 문장으로 쓰여 있습니다.</p>
  <h3>기존 환경과 과제</h3>
  <div class="tbl"><table><thead><tr><th>현재</th><th>예상 정답 방향</th></tr></thead><tbody>
    <tr><td>IT 대부분이 온프레미스, 일부만 대형 퍼블릭 클라우드</td><td>하이브리드(멀티클라우드) 전략, 단계적 이전 <button class="qref" data-id="317">3세트 Q17</button></td></tr>
    <tr><td>공급망은 <b>구형 메인프레임</b>, ERP(Enterprise Resource Planning, 전사 자원 관리)도 낡아 프로모션·딜러 할인 적용이 어려움</td><td>한 번에 교체하지 않고 <mark>단계적 현대화</mark>: 레거시 앞에 API 계층(Apigee)을 두고 점진 교체 <button class="qref" data-id="325">3세트 Q25</button> <button class="qref" data-id="424">4세트 Q24</button>. 불안정한 백엔드로 인한 장애 감소 + 현대화 속도 → <mark>API 파사드 + 이벤트 기반(비동기) 통합</mark>. ERP·메인프레임 전체 재구축 먼저(빅뱅)·메인프레임 직접 공개 API·대리점별 온프레미스 K8s X <button class="qref" data-id="646">사례 연구 Q46</button>. 프로모션·딜러 할인을 빅뱅 없이 민첩하게 → <mark>가격·프로모션만 클라우드 네이티브 서비스로 + API·이벤트 스트림으로 레거시 연동</mark>(strangler 패턴). ERP 교체까지 프로모션 동결·딜러 수작업 할인·메인프레임 UI만 웹 복제 X <button class="qref" data-id="651">사례 연구 Q51</button></td></tr>
    <tr><td>딜러에게 새 장비를 살 예산이 없음</td><td>딜러 도구는 <b>브라우저 기반 웹 앱</b>(전용 하드웨어 X). 제약된 환경 + 복잡한 로컬 설치 X → <mark>클라우드 호스팅 보안 웹 기반 딜러 도구</mark>(저대역폭 최적화, 연결 끊김 허용). 딜러 온프레미스 서버·GPU 데스크톱 클라이언트·본사 직원만 X <button class="qref" data-id="655">사례 연구 Q55</button></td></tr>
    <tr><td>코드베이스가 여러 개로 차종 간에 단절, 하위 호환으로 인한 기술 부채</td><td>공통 플랫폼·공통 코드베이스로 통합. 5년 안에 일관된 UX + 지속 가능 → <mark>공통 플랫폼 계층(ID·텔레메트리·구성·AI 추론·UI·OTA)을 만들고 차종별 시스템을 단계적으로 이전</mark>. 코드베이스 따로 유지·차종별 병렬 재구축·구형 모델 지원 중단 X <button class="qref" data-id="654">사례 연구 Q54</button></td></tr>
    <tr><td>제조 공장의 네트워크, 지방·시골의 차량 연결성</td><td>공장↔본사: Interconnect·Network Connectivity Center(이중 경로 + Cloud Router <button class="qref" data-id="650">사례 연구 Q50</button>). 차량: 연결이 끊겨도 동작하는 설계(차량 쪽 처리 + 연결 시 일괄 전송). 실시간 AI 기능은 <mark>on-device 추론</mark> <button class="qref" data-id="647">사례 연구 Q47</button>. 차량·회사 양쪽을 묻는 엔드투엔드 문제는 <mark>차량 엣지 우선(store-and-forward + 우선순위 텔레메트리 + on-device 추론) + 회사 WAN·하이브리드 연결 강화</mark>. 서비스 센터 Wi-Fi만·공장만 개선·약하면 데이터 버림 X <button class="qref" data-id="660">사례 연구 Q60</button></td></tr>
    <tr><td>온라인 주문(BTO, 受注生産)이 불안정해 딜러와 관계 악화</td><td>신뢰성 높은 관리형 백엔드, 딜러에게 데이터·투명성 제공. 레거시와 딜러 사이를 API 파사드 + Pub/Sub 비동기 메시징(재시도·데드 레터·멱등 처리)으로 분리 <button class="qref" data-id="646">사례 연구 Q46</button>. 측정 가능한 신뢰성 개선 + 빠른 탐지 → <mark>딜러 핵심 워크플로의 SLI·SLO + 중앙 관측 가능성 + 자동 롤백·복구</mark>. 이메일 알림 증가·딜러 수동 보고·모니터링 없이 기능 끄기 X <button class="qref" data-id="657">사례 연구 Q57</button></td></tr>
    <tr><td>AI 인프라가 낡았고 기업 데이터가 <b>사일로화</b></td><td>BigQuery 중심 데이터 플랫폼 + Agent Platform·GPU/TPU. 실험·운영화·규정 준수 추적 → <mark>Gemini Enterprise Agent Platform + Pipelines + Model Registry + ML Metadata(계보)</mark>. Compute Engine 자체 관리 클러스터·메인프레임 학습·BigQuery만 X <button class="qref" data-id="649">사례 연구 Q49</button></td></tr>
    <tr><td><mark>과거에 데이터 유출 사고</mark> → 보안 최우선</td><td>Security Command Center, VPC Service Controls, CMEK, 최소 권한, 사고 대응 계획. 피해 범위(blast radius) 축소 + 거버넌스 → <mark>최소 권한 IAM + 조직 정책 + 중앙 로깅 + 사고 대응 runbook</mark>. 공유 관리자 계정·단일 서비스 계정 키·넓은 권한 + 모니터링만 X <button class="qref" data-id="652">사례 연구 Q52</button></td></tr>
  </tbody></table></div>
  <h3>비즈니스 요건 (문단 형식 원문의 요지)</h3>
  <div class="tbl"><table><thead><tr><th>원문 키워드</th><th>뜻</th><th>예상 정답 방향</th></tr></thead><tbody>
    <tr><td>ドライバーとのパーソナライズされた関係 / 全モデルにわたって一貫したエクスペリエンス</td><td>운전자와의 개인화 관계, 전 모델에 일관된 경험</td><td>공통 AI 플랫폼 + 고객 데이터 통합. 개인화 + 수익화 + 프라이버시 + EU 규정 → <mark>동의 기반 수집 + 비식별화·가명화 + 목적 제한 + 통제된 접근</mark>. 원시 운전자 ID 전면 연결·공유 공개 데이터 세트·제3자 직접 텔레메트리 접근 X <button class="qref" data-id="656">사례 연구 Q56</button></td></tr>
    <tr><td>より優れた受注生産モデル</td><td>더 나은 주문 생산 모델 → 딜러 재고 기간 단축, 딜러·고객 모두에게 투명성</td><td>주문·재고 데이터를 딜러와 실시간 공유</td></tr>
    <tr><td><mark>企業データを収益化</mark>して新しい技術への投資資金を調達</td><td>기업 데이터를 수익화해 투자 재원 마련</td><td>BigQuery 데이터 공유(Analytics Hub), 공유 전 비식별화(Sensitive Data Protection) <button class="qref" data-id="910">공식 모의고사 Q10</button>. 유출 이력 + EU 규정 + 지역별 파일럿까지 → <mark>거버넌스형 데이터 레이크/웨어하우스(리전별 데이터 위치 + 강한 IAM + 감사)</mark>. 전역 멀티 리전 버킷 하나·지역별 자체 보안·규제 안정까지 온프레미스 X <button class="qref" data-id="648">사례 연구 Q48</button></td></tr>
    <tr><td>セキュリティは最優先事項 / <mark>欧州連合（EU）のデータ保護規則を遵守</mark></td><td>보안 최우선, EU 데이터 보호 규정 준수(특히 자율 주행 플랫폼)</td><td>EU 리전에 데이터 보관 + Organization Policy의 리소스 위치 제한(<code>gcp.resourceLocations</code>), 필요하면 Assured Workloads <button class="qref" data-id="239">2세트 Q39</button> <button class="qref" data-id="321">3세트 Q21</button></td></tr>
    <tr><td>完全な自動運転機能 / 規制環境が緩やかな地域をターゲット</td><td>완전 자율 주행에 대규모 투자, 처음엔 규제가 느슨한 지역부터</td><td>지역마다 다른 규제 → 리전 선택·데이터 위치를 지역별로 설계. 자율 주행 시뮬레이션 + 데이터 이동 최소 + 증빙 단순화 → <mark>규제 경계에 맞춘 리전별 시뮬레이션·테스트 환경 + 중앙 거버넌스</mark>. 비용 때문에 글로벌 리전 하나·로컬 워크스테이션·딜러 외주 X <button class="qref" data-id="653">사례 연구 Q53</button></td></tr>
    <tr><td>従業員のスキルアップ / 優秀な人材の確保 / ビジネスチームと技術チーム間のコミュニケーション</td><td>직원 역량 강화, 인재 확보, 비즈니스·기술 팀 간 소통</td><td>시험 가이드 섹션 4(기술·비즈니스 프로세스)의 이해관계자·변경 관리 문제와 연결. 위험 감소 + 학습 가속 → <mark>플랫폼 팀의 paved road(표준 CI/CD·보안 기준선·템플릿) + 제품 단위 단계적 이전(측정 가능한 성과)</mark>. 완벽한 설계까지 대기·팀마다 도구 자유 선택·단일 벤더 전부 외주 X <button class="qref" data-id="659">사례 연구 Q59</button></td></tr>
  </tbody></table></div>
  <h3>기술 요건 (7개 문단)</h3>
  <div class="tbl"><table><thead><tr><th>주제</th><th>원문 요지</th><th>예상 정답 방향</th></tr></thead><tbody>
    <tr><td class="strong">차내 경험</td><td>AI 기능을 매끄럽게 통합한 일관된 UX, 구형 모델의 차량 HW·SW 업데이트, 지방에서도 실시간 AI·데이터 전송을 위한 신뢰할 수 있는 연결</td><td>Gemini 모델, OTA(Over-the-Air, 무선) 업데이트, 차량 텔레메트리 → Pub/Sub → Dataflow → BigQuery/Bigtable <button class="qref" data-id="207">2세트 Q7</button> <button class="qref" data-id="420">4세트 Q20</button>. 지방 연결 불안정 + 실시간 기능 + 전 차종 일관 UX → <mark>지연에 민감한 기능은 on-device 추론, 클라우드는 학습·OTA·텔레메트리 집계</mark>(엣지형 하이브리드). 상시 연결 요구 + 오프라인 시 기능 끔·전부 클라우드 추론 + 캐시·단일 중앙 리전 X <button class="qref" data-id="647">사례 연구 Q47</button>. 안정적 전송까지 → store-and-forward(로컬 버퍼 후 전송) + 우선순위 텔레메트리 <button class="qref" data-id="660">사례 연구 Q60</button></td></tr>
    <tr><td class="strong">네트워크</td><td>늘어나는 트래픽, <b>공장↔본사 연결성</b> 향상</td><td>Dedicated Interconnect, 여러 거점은 Network Connectivity Center <button class="qref" data-id="406">4세트 Q6</button>. 트래픽 증가 + 다운타임 최소 + 하이브리드 → <mark>Dedicated Interconnect 이중 경로 + Cloud Router(BGP 동적 라우팅)</mark>. 단일 VPN 터널·인터넷 전송 + 재시도·VPC 피어링 X <button class="qref" data-id="650">사례 연구 Q50</button></td></tr>
    <tr><td class="strong">IT 인프라 현대화</td><td>온프레미스와 클라우드의 장점을 함께 쓰는 <mark>하이브리드 클라우드 전략</mark>, 레거시를 <mark>段階的に</mark> 현대화·교체</td><td>GKE Enterprise, Migration Center로 평가 후 단계적 이전 <button class="qref" data-id="317">3세트 Q17</button> <button class="qref" data-id="506">5세트 Q6</button></td></tr>
    <tr><td class="strong">자율 주행 개발·테스트</td><td>최첨단 AI·ML 투자, 견고한 <b>시뮬레이션 환경</b>, 자율 주행 규제 준수</td><td>AI Hypercomputer·GPU/TPU, 대규모 시뮬레이션은 Spot VM·배치(비용) <button class="qref" data-id="503">5세트 Q3</button> <button class="qref" data-id="318">3세트 Q18</button>. 시뮬레이션 환경은 규제 경계에 맞춰 리전별로 <button class="qref" data-id="653">사례 연구 Q53</button></td></tr>
    <tr><td class="strong">데이터 수익화·인사이트</td><td>견고한 데이터 관리 플랫폼, 엄격한 보안·프라이버시, 확장 가능한 AI/ML 인프라</td><td>BigQuery + Dataplex(거버넌스) + Sensitive Data Protection + Agent Platform. 규칙은 중앙에서 하나로, 데이터 위치는 리전별로 <button class="qref" data-id="648">사례 연구 Q48</button></td></tr>
    <tr><td class="strong">보안·리스크 관리</td><td>사이버 위협·데이터 유출 방지 프레임워크, <b>사고 대응 계획</b>, 직원 보안 인식 교육</td><td>Security Command Center, Google Security Operations, VPC Service Controls <button class="qref" data-id="327">3세트 Q27</button>. 예방(최소 권한 IAM·조직 정책) + 탐지(중앙 로깅) + 대응(runbook)을 모두 갖춘 보기가 정답 <button class="qref" data-id="652">사례 연구 Q52</button></td></tr>
    <tr><td class="strong">딜러·고객 경험</td><td>온라인 BTO 시스템 개선, 판매·수리·재고를 효율화하는 딜러 도구, CRM(Customer Relationship Management, 고객 관계 관리) 도입</td><td>웹 기반 딜러 도구(Cloud Run 등) <button class="qref" data-id="655">사례 연구 Q55</button>, CRM은 SaaS(예: Salesforce) + Application Integration 연동 <button class="qref" data-id="510">5세트 Q10</button>. 여러 채널 고객 데이터 + 레거시 ERP 연동 + 사일로 X → <mark>고객 ID를 표준화하는 이벤트 기반 통합 계층</mark>. 부서별 CRM·온프레미스 DB에만·스프레드시트·SFTP X <button class="qref" data-id="658">사례 연구 Q58</button></td></tr>
  </tbody></table></div>
  <p><b>출제 예상 포인트</b></p>
  <ul>
    <li><b>“전부 한 번에”는 오답:</b> 메인프레임·ERP를 한 번에 재작성하거나 즉시 클라우드로 옮기는 보기보다 <mark>단계적 현대화·하이브리드</mark>가 원문 요건(段階的に)에 맞습니다. 실제로 “ERP·메인프레임 전체를 먼저 재구축한 뒤 BTO 현대화”는 오답이고 “API 파사드 + 이벤트 기반 통합”이 정답이었습니다 <button class="qref" data-id="646">사례 연구 Q46</button>. 프로모션 민첩화도 “ERP 교체까지 동결”이 아니라 새 가격 서비스 + API·이벤트 연동이 정답 <button class="qref" data-id="651">사례 연구 Q51</button>. 차내 코드베이스도 차종별 병렬 재구축이 아니라 공통 플랫폼 계층 + 단계적 이전 <button class="qref" data-id="654">사례 연구 Q54</button>.</li>
    <li><b>EU 규정:</b> “데이터를 EU 밖으로 내보내지 않는다”는 조직 정책(리소스 위치 제한)과 리전 선택으로 강제하는 보기가 정답이 되기 쉽습니다. 데이터 전략 문제에서는 “중앙 거버넌스 + 리전별 데이터 위치”가 정답, 전부 한곳·지역별 제각각·멈추기는 오답 <button class="qref" data-id="648">사례 연구 Q48</button>. 자율 주행 시뮬레이션도 “비용 때문에 글로벌 리전 하나”가 아니라 규제 경계별 리전 환경이 정답 <button class="qref" data-id="653">사례 연구 Q53</button>.</li>
    <li><b>딜러 예산:</b> 딜러에게 새 하드웨어를 요구하는 보기는 오답입니다. 실제로 딜러 온프레미스 서버·GPU가 필요한 데스크톱 클라이언트는 오답이고 “보안 웹 기반 딜러 도구”가 정답이었습니다 <button class="qref" data-id="655">사례 연구 Q55</button>.</li>
    <li><b>지방 연결성:</b> 차량이 항상 온라인이라고 가정하는 설계(매 요청마다 클라우드 호출)는 위험합니다. 실제로 “상시 연결 요구 + 오프라인이면 기능 끔”·“전부 클라우드 추론 + 캐시”는 오답이고 “지연에 민감한 기능은 on-device 추론”이 정답이었습니다 <button class="qref" data-id="647">사례 연구 Q47</button>. “차량과 공장↔본사 연결을 모두” 묻는 문제도 차량 엣지 우선 + 회사 WAN 강화가 정답, 공장만 개선·신호 약하면 데이터 버림은 오답 <button class="qref" data-id="660">사례 연구 Q60</button>.</li>
  </ul>
</section>

<section>
  <h2>6. 공통 정답 패턴</h2>
  <div class="tbl"><table><thead><tr><th>사례에 자주 나오는 상황</th><th>해당 사례</th><th>정답 방향</th><th>노트</th></tr></thead><tbody>
    <tr><td class="strong">온프레미스와 클라우드의 Kubernetes를 하나로 관리</td><td>Altostrat, EHR, (KnightMotives)</td><td>GKE Enterprise fleet + Config Sync + Policy Controller + Cloud Service Mesh</td><td><button class="qref" data-id="342">3세트 Q42</button> <button class="qref" data-id="438">4세트 Q38</button> <button class="qref" data-id="522">5세트 Q22</button> <button class="qref" data-id="602">사례 연구 Q2</button> <button class="qref" data-id="607">사례 연구 Q7</button></td></tr>
    <tr><td class="strong">안전·고속 하이브리드 연결</td><td>4개 모두</td><td>대용량·안정 = Dedicated Interconnect, PoP에서 멀거나 새 장비 불가 = Partner Interconnect, 저대역·저비용 = HA VPN</td><td><button class="qref" data-id="345">3세트 Q45</button> <button class="qref" data-id="902">공식 모의고사 Q2</button> <button class="qref" data-id="50">Q50</button></td></tr>
    <tr><td class="strong">MySQL·SQL Server·Redis·MongoDB 혼재</td><td>Cymbal, EHR</td><td>Cloud SQL, Memorystore, MongoDB 호환 관리형(Firestore with MongoDB compatibility / MongoDB Atlas)</td><td><button class="qref" data-id="47">Q47</button> <button class="qref" data-id="636">사례 연구 Q36</button></td></tr>
    <tr><td class="strong">오픈소스 모니터링 + 메일 알림(무시됨)</td><td>Altostrat, Cymbal, EHR</td><td>Cloud Monitoring·Logging 일원화, alerting policy + 알림 채널, SLO 기반 알림, Prometheus는 Managed Service for Prometheus</td><td><button class="qref" data-id="337">3세트 Q37</button> <button class="qref" data-id="342">3세트 Q42</button> <button class="qref" data-id="908">공식 모의고사 Q8</button> <button class="qref" data-id="609">사례 연구 Q9</button> <button class="qref" data-id="627">사례 연구 Q27</button> <button class="qref" data-id="634">사례 연구 Q34</button></td></tr>
    <tr><td class="strong">레거시 파일·API 연동</td><td>Cymbal, EHR, KnightMotives</td><td>EHR은 <b>옮기지 않고 연결</b>. Cymbal은 관리형 통합으로 현대화(수작업 감소 요건). KnightMotives는 불안정한 메인프레임·ERP 앞에 <b>API 파사드 + 이벤트 기반 통합</b>(빅뱅 재구축 X). 자주 바뀌는 기능(가격·프로모션)은 클라우드 네이티브 서비스로 떼어 냄. CRM은 고객 ID를 표준화한 이벤트 기반 통합 계층으로 ERP와 연결</td><td><button class="qref" data-id="510">5세트 Q10</button> <button class="qref" data-id="325">3세트 Q25</button> <button class="qref" data-id="646">사례 연구 Q46</button> <button class="qref" data-id="651">사례 연구 Q51</button> <button class="qref" data-id="658">사례 연구 Q58</button></td></tr>
    <tr><td class="strong">생성형 AI로 콘텐츠 생성·요약·대화</td><td>Altostrat, Cymbal, KnightMotives</td><td>사전 학습 모델(Gemini, Imagen) + RAG 우선, 처음부터 학습 X. “재학습 최소”면 파인튜닝도 X. 출력은 Model Armor·HITL로 통제. 파인튜닝용 GPU가 간헐적으로 필요 + 비용 통제·축소 → Agent Platform 맞춤 학습 작업(끝나면 GPU 반납, quota 상한)</td><td><button class="qref" data-id="321">3세트 Q21</button> <button class="qref" data-id="416">4세트 Q16</button> <button class="qref" data-id="605">사례 연구 Q5</button> <button class="qref" data-id="615">사례 연구 Q15</button> <button class="qref" data-id="616">사례 연구 Q16</button> <button class="qref" data-id="617">사례 연구 Q17</button> <button class="qref" data-id="619">사례 연구 Q19</button> <button class="qref" data-id="620">사례 연구 Q20</button> <button class="qref" data-id="621">사례 연구 Q21</button> <button class="qref" data-id="630">사례 연구 Q30</button></td></tr>
    <tr><td class="strong">개인정보·규제 데이터</td><td>Cymbal, EHR, KnightMotives</td><td>Sensitive Data Protection(비식별화), VPC Service Controls, CMEK, 리소스 위치 제한</td><td><button class="qref" data-id="903">공식 모의고사 Q3</button> <button class="qref" data-id="910">공식 모의고사 Q10</button> <button class="qref" data-id="435">4세트 Q35</button></td></tr>
    <tr><td class="strong">관리 부담·비용 절감</td><td>4개 모두</td><td>관리형·서버리스 우선(Autopilot, Cloud Run, Cloud SQL), 스토리지 클래스 최적화</td><td><button class="qref" data-id="506">5세트 Q6</button> <button class="qref" data-id="332">3세트 Q32</button></td></tr>
  </tbody></table></div>
</section>

<section>
  <h2>7. 이전 사례 (현행 목록에서 빠짐)</h2>
  <p>Mountkirk Games(게임), TerramEarth(중장비 IoT), Helicopter Racing League(스포츠 스트리밍)는 현행 시험 가이드에 없습니다. 공식 모의고사의 이 사례 문제는 <b>판단 기준 연습용</b>으로만 보세요. <button class="qref" data-id="905">공식 모의고사 Q5</button> <button class="qref" data-id="906">공식 모의고사 Q6</button> <button class="qref" data-id="907">공식 모의고사 Q7</button> <button class="qref" data-id="908">공식 모의고사 Q8</button> <button class="qref" data-id="909">공식 모의고사 Q9</button> <button class="qref" data-id="910">공식 모의고사 Q10</button></p>
</section>
`
},
{
  id: "gke",
  title: "GKE 기초 정리",
  updated: "2026-10-13",
  related: [3, 9, 11, 13, 16, 23, 26, 30, 38, 43, 201, 202, 210, 214, 232, 236, 243, 313, 318, 326, 342, 346, 350, 404, 405, 413, 422, 438, 506, 522, 537, 548, 602, 607, 612, 615, 626, 642, 906],
  html: `
<section>
  <h2>1. 큰 그림: 무엇이 무엇 안에 들어 있나</h2>
  <p><b>GKE</b>(Google Kubernetes Engine)는 Google이 관리해 주는 <b>쿠버네티스</b>입니다. 쿠버네티스는 “컨테이너를 여러 대의 서버에 알아서 배치하고, 죽으면 살리고, 부하에 따라 늘리고 줄이는” 관리 시스템입니다.</p>
  <pre><code>Cluster (클러스터: 전체 묶음)
├─ Control plane (두뇌: 스케줄링·상태 관리)   ← GKE에서는 Google이 관리
└─ Node pool (같은 사양 노드의 그룹)
   └─ Node (VM 1대, Compute Engine)            ← 노드마다 kubelet(에이전트)이 돎
      └─ Pod (앱 인스턴스 1개)
         └─ Container (실제 실행되는 컨테이너 이미지)</code></pre>
  <p>핵심: <mark>사람은 “이런 상태가 되게 해 줘”라고 선언(YAML)만 하고, 쿠버네티스가 그 상태를 계속 맞춰 줍니다.</mark> 예: “Pod 3개 유지” → 하나가 죽으면 자동으로 새로 띄움.</p>
  <p><b>도구도 층이 나뉩니다</b> <button class="qref" data-id="313">3세트 Q13</button>: <mark>클러스터(GCP 리소스) = gcloud</mark>(콘솔·Terraform·Infrastructure Manager도 가능), <mark>클러스터 안 오브젝트(Deployment YAML) = kubectl</mark>. 순서는 <code>gcloud container clusters create(-auto)</code> → <code>gcloud container clusters get-credentials</code> → <code>kubectl apply -f</code>. kubectl은 클러스터를 만들 수 없고, Infrastructure Manager는 Terraform으로 GCP 인프라를 만들 뿐 YAML 매니페스트를 배포하지 않습니다.</p>
  <p><b>이 도구들을 어디서 실행하나</b> <button class="qref" data-id="422">4세트 Q22</button>: 여러 컴퓨터를 옮겨 다니며 설치·업데이트 없이 쓰려면 <mark>Cloud Shell</mark>(브라우저, gcloud·kubectl·bq·cbt 사전 설치·자동 인증, 영구 홈 디렉터리). 관리용 VM은 VM 관리 부담, PC마다 설치는 요구와 반대.</p>
</section>

<section>
  <h2>2. 핵심 오브젝트</h2>
  <div class="tbl"><table><thead><tr><th>오브젝트</th><th>쉽게 말하면</th><th>언제 쓰나</th></tr></thead><tbody>
    <tr><td class="strong">Pod</td><td>컨테이너가 도는 최소 단위. 앱 인스턴스 1개</td><td>직접 만들기보다 아래 컨트롤러가 만들어 줌. <b>단독 Pod는 레플리카 수 유지·자가 복구 X</b> (Service가 가리켜도 죽으면 끝, <button class="qref" data-id="404">4세트 Q4</button>)</td></tr>
    <tr><td class="strong">Deployment</td><td>“이 Pod를 N개 유지, 업데이트는 롤링으로”라는 선언</td><td><b>일반적인 웹·API·워커</b> (상태 없음)</td></tr>
    <tr><td class="strong">StatefulSet</td><td>Pod마다 <b>고정 이름(app-0, app-1…)·고정 DNS·전용 디스크</b>를 주는 Deployment. 재시작·재배치돼도 이름 유지</td><td>DB 클러스터, Kafka, 분산 처리처럼 <b>서로를 이름으로 찾는</b> 앱 (<button class="qref" data-id="43">Q43</button>)</td></tr>
    <tr><td class="strong">DaemonSet</td><td><b>모든 노드에 1개씩</b> Pod를 띄움</td><td>로그 수집, 모니터링 에이전트</td></tr>
    <tr><td class="strong">Job / CronJob</td><td>한 번(또는 정해진 시각마다) 실행하고 끝나는 Pod</td><td>배치 작업, 정기 작업</td></tr>
    <tr><td class="strong">Service</td><td>여러 Pod 앞의 고정 주소(내부 로드밸런서). <b>Ready인 Pod에만</b> 트래픽 전달</td><td>Pod IP는 계속 바뀌므로 항상 Service로 접근</td></tr>
    <tr><td class="strong">Ingress / Gateway</td><td>외부 HTTP(S) 요청을 경로·호스트별로 Service에 나눠 줌. GKE에서는 Application Load Balancer가 <b>자동으로</b> 만들어짐 → 조합 문제에서 Cloud Load Balancing을 따로 고를 필요 없음 (<button class="qref" data-id="413">4세트 Q13</button>)</td><td>외부 공개 웹 서비스</td></tr>
    <tr><td class="strong">ConfigMap / Secret</td><td>설정값 / 비밀값(비밀번호 등)을 이미지 밖에서 주입</td><td>환경별 설정 분리 (<button class="qref" data-id="3">Q3</button>의 설정 오류 원인)</td></tr>
    <tr><td class="strong">Namespace</td><td>클러스터 안의 논리적 칸막이</td><td>팀·환경별 분리, 권한·할당량 구분</td></tr>
  </tbody></table></div>

  <p><b>Service 종류</b></p>
  <div class="tbl"><table><thead><tr><th>타입</th><th>접근 범위</th></tr></thead><tbody>
    <tr><td class="strong">ClusterIP</td><td>클러스터 <b>내부 전용</b> 주소 (기본값). 내부 마이크로서비스끼리는 <code>&lt;service&gt;.&lt;namespace&gt;.svc.cluster.local</code> DNS 이름으로 호출 → <b>Deployment + ClusterIP</b>가 기본 조합. Ingress IP로 내부 호출 X (<button class="qref" data-id="404">4세트 Q4</button>)</td></tr>
    <tr><td class="strong">NodePort</td><td>각 노드의 특정 포트로 노출</td></tr>
    <tr><td class="strong">LoadBalancer</td><td>외부 L4(TCP/UDP) 로드밸런서를 자동 생성. HTTPS 앱의 TLS·경로 라우팅은 Ingress (<button class="qref" data-id="548">5세트 Q48</button>)</td></tr>
    <tr><td class="strong">(Ingress)</td><td>외부 L7(HTTP/HTTPS) 로드밸런서, 경로 기반 라우팅</td></tr>
    <tr><td class="strong">Headless Service</td><td><code>clusterIP: None</code>. 로드밸런싱 없이 Pod마다 DNS 이름을 줌 → StatefulSet과 짝 (<code>app-0.svc.ns.svc.cluster.local</code>)</td></tr>
  </tbody></table></div>
</section>

<section>
  <h2>3. 배포와 헬스체크 <button class="qref" data-id="3">Q3</button></h2>
  <p><b>Rolling update</b>: 옛 Pod를 한 번에 끄지 않고 새 Pod를 하나씩 띄우며 교체합니다. <code>maxSurge</code>(동시에 추가로 띄울 수), <code>maxUnavailable</code>(동시에 빠져도 되는 수)로 속도를 조절합니다. 반대로 <b>Recreate</b> 전략은 옛 Pod를 <mark>전부 종료한 뒤</mark> 새 Pod를 만들어 그 사이 <b>중단</b>이 생기므로, “without interrupting customers” 요건이면 오답입니다 (<button class="qref" data-id="326">3세트 Q26</button>).</p>
  <p><b>새 이미지 배포 명령</b> <button class="qref" data-id="346">3세트 Q46</button>: 기존 Deployment를 <mark>수정</mark>하면 rolling update가 자동으로 시작됩니다 → <code>kubectl set image deployment/NAME 컨테이너=이미지:v2</code> 또는 매니페스트 수정 후 <code>kubectl apply -f</code>. Deployment를 <b>delete 후 다시 create</b>하면 그 사이 Pod가 0개라 중단되고 rollout 이력도 사라집니다. 이미지는 Deployment에 있지 Service(주소·라우팅)나 노드 풀(VM)에 있지 않습니다.</p>
  <p><b>Probe</b>(“찔러 보다”): kubelet이 컨테이너를 주기적으로 검사하는 자동 건강 검진입니다.</p>
  <div class="tbl"><table><thead><tr><th>Probe</th><th>질문</th><th>실패하면</th></tr></thead><tbody>
    <tr><td class="strong">readiness</td><td>요청 받을 준비가 됐나?</td><td>Service에서 <b>제외</b> (트래픽 차단, 재시작 안 함)</td></tr>
    <tr><td class="strong">liveness</td><td>살아 있나, 멈췄나?</td><td>컨테이너 <b>재시작</b></td></tr>
    <tr><td class="strong">startup</td><td>기동이 끝났나?</td><td>끝날 때까지 다른 probe 보류</td></tr>
  </tbody></table></div>
  <p>비유: readiness = “아직 준비 중이니 손님 보내지 마세요”, liveness = “쓰러졌으니 다시 깨우세요”.</p>
</section>

<section>
  <h2>4. 확장(스케일링) <button class="qref" data-id="11">Q11</button> <button class="qref" data-id="232">2세트 Q32</button> <button class="qref" data-id="405">4세트 Q5</button> <button class="qref" data-id="548">5세트 Q48</button></h2>
  <div class="tbl"><table><thead><tr><th>도구</th><th>무엇을 늘리나</th><th>언제 움직이나</th></tr></thead><tbody>
    <tr><td class="strong">HPA (Horizontal Pod Autoscaler)</td><td><b>Pod 개수</b></td><td>지정 지표가 목표치를 넘을 때</td></tr>
    <tr><td class="strong">VPA (Vertical Pod Autoscaler)</td><td>Pod 하나의 CPU·메모리 크기</td><td>요청량이 실제 사용량과 안 맞을 때</td></tr>
    <tr><td class="strong">CA (Cluster Autoscaler)</td><td><b>노드 개수</b></td><td>Pod가 자리가 없어 <b>Pending</b>일 때</td></tr>
    <tr><td class="strong">NAP (Node Auto-Provisioning)</td><td>노드 풀 자체를 새로 생성</td><td>기존 노드 풀 사양으로 감당이 안 될 때</td></tr>
  </tbody></table></div>
  <p>연쇄 흐름: <mark>부하 증가 → HPA가 Pod 추가 → 노드 자리 부족 → Pending → CA가 노드 추가</mark>. “트래픽 급증 + 과거 용량 계획 실패로 장애” → HPA + CA. 최대치에 맞춘 고정 노드 풀·수동 수직 확장·자동 확장 끄기는 오답 <button class="qref" data-id="642">사례 연구 Q42</button>.</p>
  <p><b>확장 함정</b> <button class="qref" data-id="405">4세트 Q5</button>: ① 노드 풀 뒤의 MIG에 <b>Compute Engine autoscaler를 직접 걸지 않음</b>(GKE 소유, 스케줄링을 모르고 충돌) → 노드는 반드시 CA. ② <code>maxSurge</code>·<code>maxUnavailable</code>은 <b>롤링 업데이트</b> 설정이지 확장이 아님. ③ HPA의 CPU %는 <code>requests.cpu</code> 기준이라 requests 필수. CA는 콘솔·gcloud 어느 쪽으로 켜도 같음.</p>
  <p><b>확장 + 노출 2×2 보기</b> <button class="qref" data-id="548">5세트 Q48</button>: “HTTPS 앱, replica와 클러스터 용량을 모두 자동 확장” → <mark>HPA + cluster autoscaling + Ingress</mark>. 줄마다 따로 판정: 확장은 HPA + CA(O) vs 노드 풀 MIG에 직접 autoscaling(X, HPA도 빠짐), 노출은 Ingress(L7 Application LB, TLS·경로 라우팅) vs Service type LoadBalancer(보통 L4 passthrough Network LB).</p>
  <p><b>CA 켜는 법</b> <button class="qref" data-id="232">2세트 Q32</button>: CA는 <b>노드 풀 단위</b> 설정이고 운영 중인 클러스터에서 바로 켤 수 있습니다(재생성 불필요).</p>
  <pre><code>gcloud container node-pools update general-pool --cluster=pulse-prod \
  --enable-autoscaling --min-nodes=2 --max-nodes=12     # 2~12 사이 자동 증감
gcloud container clusters resize pulse-prod --node-pool=general-pool --num-nodes=12   # 12로 고정 (자동 아님)</code></pre>
  <div class="tbl"><table><thead><tr><th>HPA 지표 종류</th><th>예시</th><th>어울리는 앱</th></tr></thead><tbody>
    <tr><td class="strong">Resource</td><td>CPU·메모리 사용률</td><td>계산 많은 웹·API</td></tr>
    <tr><td class="strong">Custom</td><td>초당 요청 수 등 앱 지표</td><td>요청 수가 부하를 잘 나타내는 앱</td></tr>
    <tr><td class="strong">External</td><td>Pub/Sub backlog 등 클러스터 밖 지표</td><td><b>큐 워커</b>, I/O 집약적 앱</td></tr>
  </tbody></table></div>
</section>

<section>
  <h2>5. 클러스터 선택지 <button class="qref" data-id="318">3세트 Q18</button></h2>
  <div class="tbl"><table><thead><tr><th>구분</th><th>선택지</th><th>특징</th></tr></thead><tbody>
    <tr><td class="strong" rowspan="2">운영 모드</td><td><b>Autopilot</b></td><td>노드를 Google이 관리. <b>Pod 단위 과금</b>. “운영 부담 최소”면 우선 후보</td></tr>
    <tr><td><b>Standard</b></td><td>노드를 직접 관리. 노드(VM) 단위 과금. 노드 세부 설정이 필요할 때</td></tr>
    <tr><td class="strong" rowspan="2">위치</td><td><b>Regional</b></td><td>control plane과 노드가 여러 존에 분산 → <b>존 장애에 강함</b> (프로덕션 권장)</td></tr>
    <tr><td><b>Zonal</b></td><td>단일 존. 저렴하지만 존 장애 시 영향</td></tr>
    <tr><td class="strong">네트워크</td><td><b>Private cluster</b> (private nodes)</td><td>노드에 외부 IP 없음. <b>인터넷(서드파티 API)으로 나가려면 Cloud NAT</b>(노드 primary + Pod secondary 범위 포함), Google API만이면 Private Google Access. 클러스터는 VPC-native(alias IP)가 권장, route-based는 구형 (<button class="qref" data-id="537">5세트 Q37</button>)</td></tr>
  </tbody></table></div>
  <p><b>“서버·노드·OS 관리 최소”와 GKE</b> <button class="qref" data-id="201">2세트 Q1</button>: “GKE는 무겁다”는 <b>Standard</b> 이야기입니다. <mark>Autopilot은 노드·노드 확장·OS 패치를 Google이 관리</mark>하고 사용자는 컨테이너·리소스 요청만 정의하므로, 관리 최소 요건의 정답 후보입니다. 보기에 “in Autopilot mode”가 적혀 있으면 지우지 마세요.</p>
  <p><b>Standard vs Autopilot, 한 단어 차이</b> <button class="qref" data-id="506">5세트 Q6</button>: “Kubernetes 경험 부족 + 빠른 시작 + 클러스터 인프라·확장·보안·유지보수를 <b>as much as possible</b> Google이” → 보기 C·D가 “앱·의존성 평가 + 마이그레이션 전략”까지 똑같고 모드만 다르면 <mark>Autopilot</mark>. Standard도 컨트롤 플레인은 Google이 관리하지만 <b>노드 풀·머신 유형·용량·업그레이드</b>는 팀 몫입니다. Compute Engine에 직접 설치한 Kubernetes(Cloud Build를 붙여도)는 운영 부담 그대로라 오답. 사례 문제에서도 같습니다: Altostrat “배포 가속 + <b>avoid manual node management and scaling configuration</b>” → Autopilot <button class="qref" data-id="612">사례 연구 Q12</button>. <b>비용</b>으로 물어도 같은 답: “컨테이너 앱 호스팅 비용 절감 + 확장성·신뢰성” → Autopilot. 문서상 범용 Pod는 <b>Pod 기준 과금</b>(요청한 리소스만큼), 특정 하드웨어(머신 시리즈·GPU)를 고른 Pod는 <b>노드 기준 과금</b>(하드웨어 + 노드 관리 프리미엄). Compute Engine MIG(VM 단위)·비관리형 Kubernetes는 오답 <button class="qref" data-id="626">사례 연구 Q26</button>.</p>
  <p><b>여러 리전 클러스터를 글로벌 입구 하나로: Multi Cluster Ingress</b> <button class="qref" data-id="350">3세트 Q50</button>: 다른 대륙 사용자의 <b>동적 요청</b>을 가까이서 처리하려면 그 리전에 클러스터를 추가하고, fleet에 등록한 뒤 <mark>Multi Cluster Ingress</mark>(또는 Gateway API 기반 multi-cluster Gateway)로 global external Application LB 하나(Anycast IP)에 묶습니다. 오답: 클러스터별 LoadBalancer Service + DNS에 IP 나열(글로벌 라우팅·빠른 장애 전환 없음), 기존 클러스터 + Cloud CDN(계산은 여전히 원래 리전), CPU·메모리 증설(거리는 그대로).</p>
  <p><b>GPU 용량 확보: reservation</b> <button class="qref" data-id="318">3세트 Q18</button>: GPU는 온디맨드로 못 구할 수 있으므로 Compute Engine <b>reservation</b>으로 zone·머신 유형·GPU를 미리 잡아 두고, GKE GPU 노드 풀의 <b>reservation affinity</b>로 소비합니다(속성이 정확히 일치해야 함). 여러 프로젝트(운영·연구)가 남는 용량을 나눠 쓰려면 <mark>shared reservation</mark>, Google 권장 구조는 <mark>예약만 관리하는 전용 owner 프로젝트(직접 소비 X) + 워크로드 프로젝트는 consumer</mark>. 오답: 단일 예약을 프로젝트 간에 이전, 운영 프로젝트를 owner로(동작은 하지만 권장 아님), 프로젝트별 따로 예약(격리돼 남는 용량 공유 불가).</p>
  <p><b>GPU가 간헐적으로 필요하면 “작업 단위로 빌리기”</b> <button class="qref" data-id="615">사례 연구 Q15</button>: “생성형 AI 파인튜닝에 GPU + 비용 통제 + 워크로드 격리 + 수요가 적을 때 축소” → <mark>Agent Platform 맞춤(서버리스) 학습 작업</mark>. 작업 동안만 GPU를 받고 끝나면 자동 반납, 프로젝트·리전 quota로 상한. 오답: <b>고정 크기</b> GKE GPU 노드 풀(쉬어도 과금. GKE라면 autoscaler 최소 0이 필요), CUD 전용 GPU VM(꾸준한 사용용), 온프레미스 GPU + Interconnect(자본 지출).</p>
</section>

<section>
  <h2>6. 보안</h2>
  <div class="tbl"><table><thead><tr><th>하고 싶은 것</th><th>사용할 기능</th></tr></thead><tbody>
    <tr><td>Pod가 <b>SA 키 없이</b> GCP API(Cloud Storage, Pub/Sub 등) 호출</td><td class="strong">Workload Identity Federation for GKE (쿠버네티스 SA ↔ IAM SA 연결)</td></tr>
    <tr><td>검증·서명된 이미지만 배포되게 강제</td><td class="strong">Binary Authorization</td></tr>
    <tr><td>컨테이너 이미지 저장·취약점 스캔</td><td class="strong">Artifact Registry + Artifact Analysis</td></tr>
    <tr><td>Pod 간 통신 허용·차단</td><td class="strong">Network Policy</td></tr>
    <tr><td>클러스터 안에서의 권한 (누가 어떤 오브젝트를 만들 수 있나)</td><td class="strong">Kubernetes RBAC (+ GCP 쪽은 IAM)</td></tr>
    <tr><td>누가 이미지를 바꾸고, 설정을 바꾸고, kubectl로 Secret을 봤나</td><td class="strong">GKE 감사 로그 + Cloud Audit Logs (읽기는 Data Access를 직접 켜야 함) (<button class="qref" data-id="202">2세트 Q2</button>)</td></tr>
  </tbody></table></div>
  <p>SA 키를 쓰지 않는 원칙은 <button class="qref" data-id="9">Q9</button>(Cloud Build impersonation)과 같습니다.</p>
</section>

<section>
  <h2>7. 트러블슈팅: Pod 상태로 원인 찾기 <button class="qref" data-id="236">2세트 Q36</button></h2>
  <div class="tbl"><table><thead><tr><th>상태</th><th>뜻</th><th>대표 원인·조치</th></tr></thead><tbody>
    <tr><td class="strong">Pending</td><td>들어갈 노드를 못 찾음</td><td>노드 자원 부족 → CA / 요청량(requests) 과다 확인</td></tr>
    <tr><td class="strong">CrashLoopBackOff</td><td>시작하자마자 계속 죽음</td><td>앱 오류·설정 누락 → <b>Cloud Logging에서 그 컨테이너로 필터</b> / <code>kubectl logs --previous</code>, liveness 설정 확인 (<button class="qref" data-id="236">2세트 Q36</button>)</td></tr>
    <tr><td class="strong">ImagePullBackOff</td><td>이미지를 못 가져옴</td><td>이미지 이름·태그 오타, Artifact Registry 읽기 권한</td></tr>
    <tr><td class="strong">OOMKilled</td><td>메모리 한도 초과로 강제 종료</td><td>memory limit 상향, VPA로 적정값 확인</td></tr>
    <tr><td class="strong">Running이지만 Ready 아님</td><td>readiness probe 실패</td><td>트래픽을 안 받는 상태. 설정·의존성 확인 (<button class="qref" data-id="3">Q3</button>)</td></tr>
  </tbody></table></div>
  <pre><code>kubectl get pods                    # 상태 목록
kubectl describe pod POD_NAME       # 이벤트(왜 Pending인지 등)
kubectl logs POD_NAME               # 앱 로그
kubectl logs POD_NAME --previous    # 직전에 죽은 컨테이너의 로그 (CrashLoopBackOff)
kubectl rollout status deploy/NAME  # 롤링 업데이트 진행 상황
kubectl rollout undo deploy/NAME    # 이전 버전으로 되돌리기
kubectl get hpa                     # HPA 현재 지표·목표·replica 수</code></pre>
  <p><b>지난 일까지 보려면 Cloud Logging</b>: <code>kubectl logs</code>는 지금 살아 있는 컨테이너의 최근 로그만 보여 줍니다. 간헐적 오류는 클러스터의 Cloud Logging 통합(<code>--logging=SYSTEM,WORKLOAD</code>)으로 로그를 쌓아 두고 GKE 대시보드·Logs Explorer에서 Pod별로 조사합니다. 꺼져 있다면 <mark>새 클러스터를 만들지 말고 기존 클러스터 설정만 업데이트</mark>합니다(<button class="qref" data-id="214">2세트 Q14</button>).</p>
  <p><b>어디를 볼까: 문제 위치별 로그</b> <button class="qref" data-id="236">2세트 Q36</button></p>
  <div class="tbl"><table><thead><tr><th>문제 위치</th><th>볼 곳</th></tr></thead><tbody>
    <tr><td><b>컨테이너 안의 앱</b> (stdout/stderr, 재시작 반복)</td><td class="strong">Cloud Logging <code>k8s_container</code>: cluster·namespace·Pod·container로 필터</td></tr>
    <tr><td>노드의 kubelet·컨테이너 런타임</td><td>노드(system) 로그</td></tr>
    <tr><td>VM 부팅·커널·OS (노드 자체가 응답 없음)</td><td>시리얼 포트 출력 (운영 가이드 8장)</td></tr>
  </tbody></table></div>
  <p><b>Google 컨테이너 운영·보안 모범 사례</b> <button class="qref" data-id="906">공식 모의고사 Q6</button>: 2개 선택형이면 <mark>privileged 컨테이너 금지</mark> + <mark>네이티브 로깅(stdout/stderr, 구조화 JSON)</mark>. 문서(Best practices for operating containers)의 다른 항목: 컨테이너당 앱 하나, stateless·immutable, 지표 노출, liveness·readiness probe, 읽을 수 있는 태그. 난독화 태그·그룹 securityContext 일괄 금지·usage metering(비용 배분)은 오답.</p>
  <p>몇 초 만에 죽는 컨테이너는 셸 접속(<code>kubectl exec</code>)이 안 될 수 있습니다. 로그는 컨테이너가 사라져도 Cloud Logging에 남습니다.</p>
</section>

<section>
  <h2>8. 어떤 컴퓨팅 서비스를 고르나 <button class="qref" data-id="13">Q13</button> <button class="qref" data-id="16">Q16</button></h2>
  <p>GKE가 항상 정답은 아닙니다. 문제에 <mark>“without maintaining clusters”</mark>처럼 클러스터 관리를 빼라는 조건이 있으면 GKE는 탈락입니다.</p>
  <div class="tbl"><table><thead><tr><th>상황</th><th>선택</th></tr></thead><tbody>
    <tr><td>컨테이너, HTTP 요청 기반, 서버 관리 싫음, 요청 없으면 0까지 축소</td><td class="strong">Cloud Run</td></tr>
    <tr><td>여러 서비스가 얽힌 마이크로서비스, 세밀한 제어, 쿠버네티스 생태계 필요</td><td class="strong">GKE (운영 부담 줄이려면 Autopilot)</td></tr>
    <tr><td>자동 확장 + 서버·노드·OS 관리 최소 (두 개 고르기)</td><td class="strong">GKE Autopilot + App Engine standard. MIG는 확장만 자동, OS 관리 남음 (<button class="qref" data-id="201">2세트 Q1</button>)</td></tr>
    <tr><td>아주 작은 앱(예: 0.15 vCPU, 192 MB) 여러 개를 머신에 촘촘히 배치</td><td class="strong">GKE: Pod <code>requests</code>로 빈 패킹(bin packing). MIG는 VM 1대 = 앱 1개라 e2-micro라도 남음 (<button class="qref" data-id="243">2세트 Q43</button>)</td></tr>
    <tr><td>OS 수준 제어, 레거시·특수 소프트웨어, 컨테이너화 어려움</td><td class="strong">Compute Engine (MIG)</td></tr>
    <tr><td>소스 코드만 올려 웹앱 운영, 지원 언어(Go·Java·Python 등), 급증·0까지 축소</td><td class="strong">App Engine standard (<button class="qref" data-id="16">Q16</button>)</td></tr>
    <tr><td>App Engine인데 비지원 언어·OS 패키지·네이티브 라이브러리 필요 (VM 기반, 기동 느림, 최소 1개 인스턴스)</td><td class="strong">App Engine flexible</td></tr>
    <tr><td>이벤트에 반응하는 짧은 함수</td><td class="strong">Cloud Run functions</td></tr>
  </tbody></table></div>
</section>

<section>
  <h2>9. Cloud Service Mesh (Istio)와 스케줄링 용어 <button class="qref" data-id="23">Q23</button> <button class="qref" data-id="342">3세트 Q42</button></h2>
  <p><b>Service Mesh</b>(서비스 메시): 마이크로서비스 간 통신을 <b>앱 코드 밖에서</b> 관리하는 계층입니다. 각 Pod 옆에 사이드카 프록시(Envoy)가 붙어 모든 요청을 가로채므로, 코드 수정 없이 설정(YAML)만으로 아래 기능을 씁니다. Cloud Service Mesh는 Google이 관리하는 Istio입니다(옛 Anthos Service Mesh).</p>
  <div class="tbl"><table><thead><tr><th>하고 싶은 것</th><th>Istio 기능</th></tr></thead><tbody>
    <tr><td>특정 서비스 장애·지연을 <b>일부러 만들어 시험</b></td><td class="strong">Fault injection (VirtualService abort / delay)</td></tr>
    <tr><td>새 버전에 트래픽 일부만 (canary)</td><td class="strong">VirtualService weight</td></tr>
    <tr><td>계속 실패하는 서비스 호출을 잠시 끊기</td><td class="strong">Circuit breaking (DestinationRule outlierDetection)</td></tr>
    <tr><td>재시도·타임아웃</td><td class="strong">VirtualService retries / timeout</td></tr>
    <tr><td>서비스 간 통신 암호화·상호 인증</td><td class="strong">mTLS (mutual TLS, 상호 TLS)</td></tr>
    <tr><td>서비스별 요청 수·지연·오류율을 코드 수정 없이 측정 → <b>SLO·SLO 알림</b></td><td class="strong">메시 텔레메트리 (Envoy) → Cloud Monitoring 서비스·SLO (<button class="qref" data-id="342">3세트 Q42</button>)</td></tr>
    <tr><td>메시가 <b>이미 켜져 있음</b> + 어느 마이크로서비스가 지연을 만드나</td><td class="strong">콘솔의 <b>Cloud Service Mesh 토폴로지 + 서비스 지표</b>(edge별 지연·오류율). Config Sync ClusterSelector·NamespaceSelector(구성 배포 대상 지정)·Istio 기본 프로필 재설치(관리형 메시와 충돌) X (<button class="qref" data-id="438">4세트 Q38</button>)</td></tr>
  </tbody></table></div>
  <p><b>스케줄링 용어</b>: 전부 “Pod를 어느 노드에 둘까”이며 장애 시험과는 무관합니다.</p>
  <div class="tbl"><table><thead><tr><th>용어</th><th>의미</th><th>예</th></tr></thead><tbody>
    <tr><td class="strong">Taint / Toleration</td><td>노드에 “출입 제한” 표시 / Pod의 “통과권”</td><td>GPU 노드에는 GPU Pod만</td></tr>
    <tr><td class="strong">Node affinity</td><td>“이런 label의 노드에 두고 싶다”</td><td>SSD 노드 선호</td></tr>
    <tr><td class="strong">Pod anti-affinity / topology spread</td><td>“같은 Pod끼리 같은 노드·존에 몰지 마라”</td><td>노드·존 장애 대비 분산</td></tr>
    <tr><td class="strong">PodDisruptionBudget</td><td>노드 점검 등으로 동시에 내려가도 되는 Pod 수 상한</td><td>항상 2개 이상 유지</td></tr>
  </tbody></table></div>
</section>

<section>
  <h2>10. Kubernetes 방식으로 GCP 리소스 관리: Config 3형제 <button class="qref" data-id="38">Q38</button></h2>
  <p>Pub/Sub topic, 버킷, 서비스 계정 같은 <b>GCP 리소스도 Kubernetes YAML로 선언</b>하고 kubectl·GitOps로 관리하는 방식입니다. 이름이 비슷하니 역할로 구분하세요.</p>
  <div class="tbl"><table><thead><tr><th>이름</th><th>역할</th><th>비유</th></tr></thead><tbody>
    <tr><td class="strong">Config Connector</td><td>GCP 리소스용 CRD(Custom Resource Definition)와 컨트롤러. YAML의 <code>PubSubTopic</code>을 보고 <mark>실제 GCP 리소스를 만들고 계속 맞춤</mark></td><td>주문서를 보고 물건을 만드는 공장</td></tr>
    <tr><td class="strong">Config Sync</td><td>Git(또는 OCI 이미지)의 YAML을 클러스터로 계속 동기화 (GitOps). <b>GCP 리소스를 직접 만들지는 못함</b></td><td>주문서를 공장에 배달하는 택배</td></tr>
    <tr><td class="strong">Policy Controller</td><td>정책 위반 YAML 거부 (OPA Gatekeeper 기반)</td><td>주문서 검사관</td></tr>
    <tr><td class="strong">Config Controller</td><td>위 셋이 <b>설치된 Google 관리형 컨트롤 플레인</b>. 설치·업그레이드 불필요</td><td>공장 + 택배 + 검사관 통째 위탁</td></tr>
  </tbody></table></div>
  <p>선택 기준: “Kubernetes-native IaC + 선언형 + <b>유지보수 최소</b>” → <mark>Config Controller</mark>. 기존 클러스터에 직접 설치해도 되면 Config Connector add-on. 쿠버네티스와 무관한 일반 IaC면 Terraform(Infrastructure Manager).</p>
  <p><b>여러 클러스터(다른 클라우드 포함)에 같은 구성 + 정책 강제</b> <button class="qref" data-id="522">5세트 Q22</button>: “GKE + Amazon EKS에 같은 구성·앱 정의 + 보안·규정 준수 계속 강제 + 중앙·Google 권장·자체 자동화 최소” → <mark>클러스터를 GKE fleet에 등록(EKS는 GKE attached clusters) + Config Sync(중앙 저장소 하나) + Policy Controller(OPA Gatekeeper 기반, admission 거부 + 지속 감사)</mark>. 오답: Argo CD + OPA + 자체 컨트롤러(직접 개발·운영), Crossplane + Flux + Kyverno(오픈소스 직접 운영, Crossplane은 인프라 생성용), Kustomize + 클러스터별 저장소 + 보안 스크립트(중앙 관리 깨짐, 스크립트는 우회 가능). 클러스터마다 다른 값은 저장소를 쪼개지 말고 ClusterSelector로 나눕니다.</p>
  <p><b>온프레미스 클러스터까지 GitOps로</b> <button class="qref" data-id="602">사례 연구 Q2</button>: Altostrat처럼 “GKE + 온프레미스 Kubernetes, 중앙 CI/CD, 정책 일관성, <mark>configuration drift 방지</mark>, GitOps” → <mark>GKE fleet 관리 + Config Sync + Cloud Deploy</mark>. 핵심은 Config Sync의 <b>reconcile 루프</b>(Git 상태로 계속 되돌림)입니다. Cloud Build에서 <code>kubectl apply</code>로 밀어 넣는 방식은 배포는 되지만 한 번 적용(push)이라 이후 손으로 바꾼 것을 되돌리지 못해 드리프트 방지·GitOps가 아닙니다. Jenkins는 직접 구현·운영, 콘솔 수동 변경은 드리프트의 원인입니다. 같은 사례에서 요건이 “<b>unified policy enforcement</b> + 일관된 관측성 + 단순한 수명 주기”로 바뀌면 정답은 <mark>GKE fleet 관리 + Policy Controller</mark>입니다 <button class="qref" data-id="607">사례 연구 Q7</button>. 요건 단어로 짝을 고르세요: policy·compliance → Policy Controller, drift·GitOps → Config Sync, 서비스 간 mTLS·트래픽 → Cloud Service Mesh.</p>
</section>

<section>
  <h2>11. 시험 함정 모음</h2>
  <div class="tbl"><table><thead><tr><th>함정</th><th>기억할 것</th></tr></thead><tbody>
    <tr><td>노드 외부 IP 금지 + Pod가 외부 항공·호텔 API 호출 → private nodes + Private Google Access / 외부 IP 없는 NAT 프록시 VM?</td><td>PGA는 Google API 전용. 프록시 VM도 나갈 길이 없음. <b>private nodes + Cloud NAT</b> (<button class="qref" data-id="537">5세트 Q37</button>)</td></tr>
    <tr><td>클러스터가 없는데 kubectl로 생성 / Deployment YAML을 Infrastructure Manager로 배포?</td><td>클러스터는 <b>gcloud</b>, YAML은 <b>kubectl apply</b>. 건물(클러스터)을 짓는 도구와 가구(오브젝트)를 놓는 도구가 다름 (<button class="qref" data-id="313">3세트 Q13</button>)</td></tr>
    <tr><td>GPU 예약을 운영·연구가 나눠 쓰기 → 예약을 이전 / 운영 프로젝트에 shared reservation?</td><td>이전 기능은 없고, 운영이 owner면 권장 아님. <b>전용 owner 프로젝트 + 둘 다 consumer</b> (<button class="qref" data-id="318">3세트 Q18</button>)</td></tr>
    <tr><td>새 이미지 배포 → Deployment를 지우고 다시 만들기 / Service 매니페스트에 이미지 / 노드 풀 MIG rolling update</td><td>삭제는 중단, Service·노드에는 이미지가 없음. <b>kubectl set image</b>(또는 apply)로 기존 Deployment 수정 (<button class="qref" data-id="346">3세트 Q46</button>)</td></tr>
    <tr><td>비정상 Pod에 트래픽이 감 → 노드(MIG) 헬스체크?</td><td><b>readiness probe.</b> 노드 헬스체크는 Pod 상태를 모름 (<button class="qref" data-id="3">Q3</button>)</td></tr>
    <tr><td>로그·지표가 안 쌓이는 클러스터 → 새 클러스터로 이전?</td><td>기존 클러스터에서 <b>Cloud Logging·Monitoring 통합 켜기</b>(최소 변경) (<button class="qref" data-id="214">2세트 Q14</button>)</td></tr>
    <tr><td>큰 노드(e2-standard-8)면 Pod를 더 많이 담으니 유리?</td><td>작은 워크로드엔 유휴 단위만 커짐. 배포 문제에서는 노드 크기보다 <b>latest 태그·default 네임스페이스·Pod 재시작</b>이 결정적 오답 신호 (<button class="qref" data-id="243">2세트 Q43</button>)</td></tr>
    <tr><td>처리량을 늘리려고 Cluster Autoscaler?</td><td>CA는 노드만 늘림. <b>Pod 수는 HPA</b> (<button class="qref" data-id="11">Q11</button>)</td></tr>
    <tr><td>큐 워커·I/O 집약적 앱을 CPU로 확장?</td><td><b>backlog(external metric)</b>로 확장 (<button class="qref" data-id="11">Q11</button>)</td></tr>
    <tr><td>Pod에서 GCP API 호출하려고 SA 키를 Secret에?</td><td><b>Workload Identity Federation for GKE</b></td></tr>
    <tr><td>“운영 부담 최소 + 컨테이너”인데 GKE Standard?</td><td><b>Autopilot</b> 또는 <b>Cloud Run</b> (<button class="qref" data-id="506">5세트 Q6</button>)</td></tr>
    <tr><td>Cloud Build로 배포를 자동화하면 자체 관리 Kubernetes도 운영 부담이 준다?</td><td>파이프라인 자동화일 뿐 컨트롤 플레인·노드·패치는 그대로 (<button class="qref" data-id="506">5세트 Q6</button>)</td></tr>
    <tr><td>“관리 최소”면 GKE는 무조건 탈락?</td><td>Standard만 탈락. <b>Autopilot</b>은 정답 후보 (<button class="qref" data-id="201">2세트 Q1</button>)</td></tr>
    <tr><td>GKE + Persistent Disk에 고객 데이터 저장?</td><td>Persistent Disk는 디스크일 뿐 DB가 아님. 관리형 DB(Firestore, Cloud SQL 등)를 써야 함 (<button class="qref" data-id="210">2세트 Q10</button>)</td></tr>
    <tr><td>MIG는 “managed”니까 관리 최소?</td><td>VM 개수·교체만 관리해 줌. 템플릿·OS 이미지·패치는 내 몫 (<button class="qref" data-id="201">2세트 Q1</button>)</td></tr>
    <tr><td>“수백만 사용자”니까 GKE?</td><td>규모는 변별력 없음. <b>“without clusters / deploy code”</b>면 App Engine·Cloud Run (<button class="qref" data-id="13">Q13</button>)</td></tr>
    <tr><td>“flexible”이니까 확장에 더 유리?</td><td>flexible은 VM이라 <b>기동 느림 + 0 축소 불가</b>. 급증·0 축소·지원 언어면 <b>standard</b> (<button class="qref" data-id="16">Q16</button>)</td></tr>
    <tr><td>서비스 하나의 장애를 시험하려고 노드 삭제·taint?</td><td>노드엔 여러 서비스가 섞임. <b>Service Mesh fault injection</b> (<button class="qref" data-id="23">Q23</button>)</td></tr>
    <tr><td>장애 시험인데 트래픽을 우회?</td><td>우회는 <b>완화</b>(장애를 숨김). 시험은 <b>fault injection</b> (<button class="qref" data-id="23">Q23</button>)</td></tr>
    <tr><td>“기존 배포가 트래픽을 버티는지 확인” → HPA 켜고 Pod 늘어나는지 보기?</td><td>확장 장치는 시험 대상일 뿐. <b>부하 테스트</b>로 p95 지연·오류율 측정 (<button class="qref" data-id="26">Q26</button>)</td></tr>
    <tr><td>비용 절감하려고 클러스터를 용도별로 분리?</td><td>노드를 나누기만 하면 총량·비용 그대로. <b>HPA + Cluster Autoscaler</b>로 한가할 때 축소 (<button class="qref" data-id="30">Q30</button>)</td></tr>
    <tr><td>비용 절감하려고 노드 풀 전체를 Spot VM으로?</td><td>언제든 회수 → 가용성 위반. <b>중단 가능한 배치만 별도 Spot 노드 풀</b> (<button class="qref" data-id="30">Q30</button>)</td></tr>
    <tr><td>존 장애에도 클러스터가 살아 있어야 함</td><td><b>Regional cluster</b></td></tr>
    <tr><td>Pod가 몇 초마다 재시작 → 모든 노드의 시리얼 포트 / 노드 로그 / 컨테이너에 셸 접속?</td><td>시리얼 포트는 VM 부팅용, 노드 로그는 너무 넓음, 셸은 열기 전에 죽음. <b>Cloud Logging에서 그 컨테이너로 필터</b> (<button class="qref" data-id="236">2세트 Q36</button>)</td></tr>
    <tr><td>기존 노드 풀에 노드 자동 증감 → resize / 인스턴스에 태그 / 클러스터 재생성?</td><td>resize는 고정 개수, 태그는 방화벽용, 재생성은 과함. <b>node-pools update --enable-autoscaling --min/max</b> (<button class="qref" data-id="232">2세트 Q32</button>)</td></tr>
    <tr><td>Pod 고정 hostname이 필요하면 PersistentVolume?</td><td>PV는 <b>데이터</b> 유지. <b>이름·네트워크 ID</b> 유지는 <b>StatefulSet</b> (+ headless Service) (<button class="qref" data-id="43">Q43</button>)</td></tr>
    <tr><td>멀티클라우드 클러스터 구성·정책 → Argo CD·Flux·Kyverno·OPA + 자체 컨트롤러?</td><td>가능은 하지만 직접 운영. “Google 권장·자체 자동화 최소”면 <b>fleet + Config Sync + Policy Controller</b> (<button class="qref" data-id="522">5세트 Q22</button>)</td></tr>
    <tr><td>Config Sync만 켜면 Git의 YAML로 GCP 리소스가 생긴다?</td><td>Config Sync는 배달만. 리소스를 만드는 건 <b>Config Connector</b>. 둘 다 관리형으로 들어 있는 게 <b>Config Controller</b> (<button class="qref" data-id="38">Q38</button>)</td></tr>
  </tbody></table></div>
</section>`
},
{
  id: "data",
  title: "데이터 저장소 선택",
  updated: "2026-10-13",
  related: [1, 10, 12, 14, 29, 34, 42, 45, 47, 204, 205, 206, 207, 209, 213, 217, 222, 227, 234, 238, 240, 242, 249, 250, 309, 314, 315, 317, 319, 324, 329, 330, 332, 333, 338, 340, 347, 402, 403, 408, 409, 411, 412, 414, 420, 421, 423, 424, 426, 440, 444, 445, 447, 448, 449, 503, 505, 510, 511, 514, 518, 525, 534, 535, 536, 539, 542, 543, 545, 547, 550, 606, 610, 618, 623, 624, 635, 636, 641, 645, 651, 654, 912, 913, 919],
  html: `
<section>
  <h2>1. 먼저 두 갈래로 나누기</h2>
  <pre><code>데이터를 어디에 둘까?
├─ 파일 그대로 (이미지, 로그 파일, 백업, CSV) ─────────→ Cloud Storage (객체 스토리지)
└─ 쿼리할 데이터베이스
   ├─ 분석 (대량을 훑어서 집계) = OLAP ──────────────→ BigQuery
   └─ 앱이 읽고 쓰는 운영 DB
      ├─ 관계형 (테이블·SQL·트랜잭션) = OLTP
      │   ├─ 한 리전, 일반 규모 ───────────────────→ Cloud SQL (고성능 PostgreSQL → AlloyDB)
      │   └─ 전 세계, 무제한 확장, 강한 일관성 ────────→ Spanner
      └─ NoSQL (테이블 아님)
          ├─ 초대용량 키-값·시계열, 밀리초 응답 ────────→ Bigtable
          ├─ 모바일·웹 앱의 문서(JSON)형 ─────────────→ Firestore
          └─ 캐시·세션 (메모리) ──────────────────────→ Memorystore</code></pre>
  <div class="tbl"><table><thead><tr><th>약어</th><th>원래 말</th><th>뜻</th></tr></thead><tbody>
    <tr><td class="strong">OLTP</td><td>Online Transaction Processing</td><td>트랜잭션 처리. 주문·결제처럼 작은 읽기·쓰기를 정확하고 빠르게</td></tr>
    <tr><td class="strong">OLAP</td><td>Online Analytical Processing</td><td>분석 처리. 대량 데이터를 훑어서 집계·추세 분석</td></tr>
    <tr><td class="strong">NoSQL</td><td>Not only SQL</td><td>테이블·JOIN 대신 키-값, 문서 등 다른 구조로 저장하는 DB</td></tr>
  </tbody></table></div>
</section>

<section>
  <h2>2. 서비스 한눈에 보기</h2>
  <div class="tbl"><table><thead><tr><th>서비스</th><th>한 줄 설명</th><th>규모</th><th>대표 용도</th></tr></thead><tbody>
    <tr><td class="strong">Cloud Storage</td><td>파일을 그대로 두는 객체 스토리지</td><td>사실상 무제한</td><td>백업, DR 사본, 이미지·동영상, 데이터 레이크 <button class="qref" data-id="14">Q14</button></td></tr>
    <tr><td class="strong">BigQuery</td><td>서버리스 분석용 DB(데이터 웨어하우스)</td><td>PB(페타바이트)</td><td>로그·매출 분석, BI 대시보드, 비용 분석 <button class="qref" data-id="1">Q1</button> <button class="qref" data-id="14">Q14</button></td></tr>
    <tr><td class="strong">Cloud SQL</td><td>관리형 MySQL / PostgreSQL / SQL Server</td><td>인스턴스당 최대 64TB</td><td>일반 웹앱 DB, 기존 DB 그대로 이전 <button class="qref" data-id="10">Q10</button></td></tr>
    <tr><td class="strong">AlloyDB</td><td>PostgreSQL 호환 고성능 DB</td><td>Cloud SQL보다 큼</td><td>성능이 더 필요한 PostgreSQL, 트랜잭션 + 분석 혼합</td></tr>
    <tr><td class="strong">Spanner</td><td>전 세계에 퍼지는 관계형 DB</td><td>무제한 수평 확장</td><td>글로벌 결제·재고, 99.999% 가용성, 강한 일관성</td></tr>
    <tr><td class="strong">Bigtable</td><td>초대용량 wide-column NoSQL</td><td>PB</td><td>IoT 센서, 광고 클릭, 모바일 앱 이벤트, 시계열, 금융 틱 데이터 (<button class="qref" data-id="207">2세트 Q7</button>)</td></tr>
    <tr><td class="strong">Firestore</td><td>문서형 NoSQL</td><td>자동 확장</td><td>모바일·웹 앱, 사용자 프로필, 실시간·오프라인 동기화</td></tr>
    <tr><td class="strong">Knowledge Catalog</td><td>데이터 자산 카탈로그·메타데이터·계보 + <b>data profiling·automatic data quality</b>. 옛 이름 Dataplex Universal Catalog(2026년 4월 개명)</td><td>BigQuery 등 지원 자산</td><td>누락값·중복·형식 불일치를 관리형으로 재고 반복 검사 (<button class="qref" data-id="534">5세트 Q34</button>)</td></tr>
    <tr><td class="strong">data lake / object table</td><td>データレイク / <mark>オブジェクト テーブル</mark>(BigQuery)</td><td>raw·landing·schema-on-read는 일본어 확인 필요 (<button class="qref" data-id="545">5세트 Q45</button>)</td></tr>
    <tr><td class="strong">Memorystore</td><td>관리형 Redis / Valkey / Memcached</td><td>메모리 크기</td><td>캐시, 세션, 순위표</td></tr>
    <tr><td class="strong">Cloud Logging</td><td>운영 로그 수집·검색·알림 (DB 아님)</td><td>-</td><td>지금 돌아가는 시스템의 로그 <button class="qref" data-id="12">Q12</button></td></tr>
  </tbody></table></div>
</section>

<section>
  <h2>3. 헷갈리는 쌍 구분하기 <button class="qref" data-id="234">2세트 Q34</button></h2>
  <div class="tbl"><table><thead><tr><th>헷갈리는 쌍</th><th>구분법</th></tr></thead><tbody>
    <tr><td class="strong">BigQuery vs Bigtable</td><td>이름만 비슷합니다. BigQuery = <b>전체를 훑는 분석(초~분)</b>, Bigtable = <b>키 하나를 밀리초에 읽고 쓰는 운영 DB</b>. 센서 초당 수십만 건 쓰기 + 실시간 차트면 Bigtable, 그 데이터를 나중에 분석하면 BigQuery (<button class="qref" data-id="250">2세트 Q50</button>). “ad hoc SQL 분석”이면 BigQuery, “low latency, high throughput, time series”면 Bigtable.</td></tr>
    <tr><td class="strong">Cloud SQL vs Spanner</td><td>둘 다 관계형. <b>한 리전·일반 규모</b>면 Cloud SQL, <b>여러 리전·전 세계·수평 확장·강한 일관성</b>이면 Spanner. Spanner는 비싸므로 “global”이 없으면 Cloud SQL. <b>엔진이 명시되면(“Microsoft SQL Server를 배포”) Spanner는 탈락</b>: 다른 엔진이라 스키마·쿼리·드라이버를 바꿔야 함 (<button class="qref" data-id="309">3세트 Q9</button>)</td></tr>
    <tr><td class="strong">Cloud SQL vs Compute Engine 자체 설치</td><td>기본은 관리형 Cloud SQL. 하지만 <b>엔진 고유 기능(SQL Server Always On availability groups, WSFC(Windows Server Failover Clustering))·OS 제어·더 짧은 장애 조치</b>가 필요하면 <mark>Compute Engine에 직접 구성</mark>도 정답이 됨. zone 장애 대비면 노드를 <b>다른 zone</b>에(subnet은 리전 리소스라 장애 분리 X) (<button class="qref" data-id="309">3세트 Q9</button>)</td></tr>
    <tr><td class="strong">Cloud SQL vs AlloyDB</td><td>둘 다 PostgreSQL 가능. <b>기본은 Cloud SQL</b>, “고성능·분석 쿼리도 같은 DB에서”면 AlloyDB.</td></tr>
    <tr><td class="strong">Firestore vs Bigtable</td><td>둘 다 NoSQL. <b>앱 개발용 문서 DB</b>(모바일, 오프라인 동기화)면 Firestore, <b>TB~PB급 초고속 처리량</b>이면 Bigtable.</td></tr>
    <tr><td class="strong">Datastore mode: Key lookup vs Query</td><td>엔터티의 <b>ID(키)를 이미 알면</b> 인덱스 검색 없이 <b>Key로 직접 조회(lookup)</b>, 여러 개면 <mark>한 번의 batch lookup</mark>(get_multi). Query는 “조건으로 찾을 때”만. 루트 엔터티는 kind + ID만으로 키 완성 (<button class="qref" data-id="213">2세트 Q13</button>).</td></tr>
    <tr><td class="strong">Datastore mode: 복합 인덱스 배포</td><td>속성 하나짜리 인덱스는 자동, <b>여러 속성 필터·정렬</b>은 복합 인덱스가 없으면 쿼리 오류. 정의는 <code>index.yaml</code>, 배포는 <mark><code>gcloud datastore indexes create index.yaml</code></mark>(또는 <code>gcloud app deploy index.yaml</code>), 생성은 비동기라 <code>indexes list</code>로 READY 확인. 기본 버킷에 복사·HTTP로 앱에 전송 X, 기존 인덱스 삭제 불필요(정리는 <code>indexes cleanup</code>) (<button class="qref" data-id="550">5세트 Q50</button>)</td></tr>
    <tr><td class="strong">Bigtable vs Cloud Monitoring (시계열)</td><td>둘 다 시계열을 다루지만 Bigtable은 <b>앱이 조회할 원본을 저장하는 DB</b>(차트·알림 없음), Cloud Monitoring은 <b>운영 지표를 보고 알림받는 서비스</b>. “운영팀이 KPI를 지연 없이 monitor”면 <mark>Cloud Monitoring</mark> (<button class="qref" data-id="217">2세트 Q17</button>).</td></tr>
    <tr><td class="strong">Cloud Logging vs BigQuery</td><td>Cloud Logging = <b>현재 운영 로그</b> 보기·알림. 장기 보관·대규모 분석은 <b>sink로 BigQuery나 Cloud Storage</b>로 내보냄 (<button class="qref" data-id="1">Q1</button>).</td></tr>
    <tr><td class="strong">Memorystore vs Firestore (세션)</td><td>Memorystore = <b>메모리 캐시</b>(빠르지만 재시작·축출 시 유실 가능), Firestore = <b>영구 저장</b>. “세션을 며칠 유지 + 저지연”이면 <mark>Memorystore 캐시 + Firestore(Datastore mode) 원본</mark>. 단순 키-값 세션에 Cloud SQL은 과하고, Persistent Disk는 DB가 아님 (<button class="qref" data-id="47">Q47</button>).</td></tr>
    <tr><td class="strong">Dataproc vs Dataflow</td><td>둘 다 처리 도구. <b>기존 Spark·Hadoop·Hive를 최소 변경으로</b>면 Dataproc(관리형 클러스터), <b>Apache Beam·스트리밍·새 파이프라인</b>이면 Dataflow(서버리스). Dataflow로 Spark 작업을 옮기려면 Beam으로 재작성해야 함 (<button class="qref" data-id="209">2세트 Q9</button>). Dataproc의 현재 이름은 <b>Managed Service for Apache Spark</b>. 비용 절감 + 중단 허용이면 <mark>Spot VM을 보조 워커(secondary worker)로</mark>, 마스터·기본 워커는 표준 VM (<button class="qref" data-id="242">2세트 Q42</button>).</td></tr>
    <tr><td class="strong">Cloud Storage vs BigQuery</td><td>Cloud Storage = <b>파일 보관</b>(쿼리 안 됨), BigQuery = <b>쿼리</b>. 같이 쓰는 경우가 많음: 원본은 Cloud Storage, 분석은 BigQuery (<button class="qref" data-id="14">Q14</button>).</td></tr>
  </tbody></table></div>
  <p><b>스트리밍 수집은 세 칸: 받기 → 가공 → 분석 저장</b> <button class="qref" data-id="610">사례 연구 Q10</button> <button class="qref" data-id="623">사례 연구 Q23</button>: “전 세계 사용자 상호작용 이벤트 + 준실시간 추천·동적 가격 + BigQuery 직접 통합” → <mark>Pub/Sub(받기) → Dataflow(윈도우·보강) → BigQuery(분석)</mark>. 가공이 필요 없으면 Pub/Sub <b>BigQuery subscription</b>으로 Dataflow를 생략할 수 있습니다. 오답은 한 칸을 엉뚱하게 채운 것: 일일 Cloud Storage 배치(늦음), Cloud SQL 직접 삽입(트랜잭션 DB, 쓰기 병목), Memorystore에만(캐시, 비영구·분석 없음). 레거시 SFTP·배치 ETL을 현대화하고 <b>오류 처리</b>를 개선하라는 문제도 같은 Pub/Sub + Dataflow: Pub/Sub 재전송(at-least-once)·데드 레터 토픽, Dataflow의 Pub/Sub 중복 제거(exactly-once)가 근거 <button class="qref" data-id="623">사례 연구 Q23</button>. 여러 시스템의 행동 이벤트로 준실시간 개인화도 같은 결론(BigQuery로 스트리밍, 직접 쓰면 Storage Write API) <button class="qref" data-id="624">사례 연구 Q24</button>. EHR의 “새 보험사 데이터 수집·처리 인터페이스 + 급증 + 운영 부담 최소”도 같은 세 칸이고, 오답은 Cloud SQL 야간 배치·Compute Engine 자체 수집 서버·FTP + 수동 검증 <button class="qref" data-id="635">사례 연구 Q35</button>.</p>
  <p><b>팀끼리 DB 선택 의견이 갈릴 때</b> <button class="qref" data-id="234">2세트 Q34</button>: “개발팀은 Spanner, 재무팀은 VM 위 PostgreSQL(싸 보여서)” 같은 문제에서 아키텍트는 <mark>결론을 찍어 주지 않고 TCO(Total Cost of Ownership, 총소유비용) 분석 + 의사결정 워크숍</mark>으로 함께 결정하게 합니다.</p>
  <ul>
    <li>TCO = 인프라 요금 + <b>인력(DBA·온콜)</b> + 운영(패치·백업·장애 조치) + 가용성·장애 비용 + 확장 한계 + 위험. VM 요금만 보면 자체 관리가 싸 보이지만 숨은 비용을 넣으면 순위가 바뀔 수 있습니다.</li>
    <li>오답 패턴: 중간값(Cloud SQL) 타협안 바로 추천, 한쪽 안의 설계 제공, Well-Architected Framework의 유리한 원칙만 골라 정당화. Cloud SQL은 TCO의 <b>세 번째 후보</b>로 넣어 비교합니다.</li>
    <li>MIG는 VM을 교체할 뿐 DB 복제·장애 조치를 만들지 않습니다. MIG만으로 HA DB가 되지 않습니다.</li>
  </ul>
  <p><b>BigQuery dataset이란</b> <button class="qref" data-id="409">4세트 Q9</button>: project . dataset . table 구조에서 테이블·view를 담는 묶음. RDB의 schema(PostgreSQL)·database(MySQL)와 비슷하지만 <mark>권한 경계 + 데이터 위치</mark>이기도 합니다.</p>
  <div class="tbl"><table>
    <tr><th>BigQuery</th><th>PostgreSQL</th><th>MySQL</th></tr>
    <tr><td>project . <b>dataset</b> . table</td><td>database . <b>schema</b> . table</td><td>(서버) . <b>database</b> . table</td></tr>
  </table></div>
  <div class="tbl"><table>
    <tr><th>dataset이 정하는 것</th><th>뜻</th><th>시험 포인트</th></tr>
    <tr><td><b>접근 권한 단위</b></td><td>dataset에 준 Data Viewer 등은 안의 <b>모든 테이블·view</b>에 적용</td><td>원본 dataset 권한 = PII 테이블까지 보임 → view는 <b>다른 dataset</b>으로 (<button class="qref" data-id="409">4세트 Q9</button>)</td></tr>
    <tr><td><b>데이터 위치(location)</b></td><td>생성 시 리전·멀티리전(US, EU, asia-northeast1 …) 지정, <b>이후 변경 불가</b></td><td>한 쿼리에서는 <b>같은 location</b>의 dataset끼리만 조인. 데이터 레지던시</td></tr>
    <tr><td><b>기본 설정</b></td><td>기본 table expiration · partition expiration · CMEK</td><td><code>default_partition_expiration</code> (<button class="qref" data-id="402">4세트 Q2</button>)</td></tr>
    <tr><td>(쿼리 비용은 아님)</td><td>비용은 <b>job을 실행한 프로젝트</b>에 청구</td><td>프로젝트에 Job User + dataset에 Data Viewer (<button class="qref" data-id="324">3세트 Q24</button>)</td></tr>
  </table></div>
</section>

<section>
  <h2>4. Cloud Storage 클래스와 위치 <button class="qref" data-id="332">3세트 Q32</button> <button class="qref" data-id="338">3세트 Q38</button> <button class="qref" data-id="539">5세트 Q39</button> <button class="qref" data-id="542">5세트 Q42</button></h2>
  <div class="tbl"><table><thead><tr><th>Storage class</th><th>이런 데이터</th><th>최소 보관 기간</th><th>비용 성격</th></tr></thead><tbody>
    <tr><td class="strong">Standard</td><td>자주 읽음</td><td>없음</td><td>보관비 높음, 읽기 무료</td></tr>
    <tr><td class="strong">Nearline</td><td>월 1회 정도</td><td>30일</td><td>보관비 ↓, 읽을 때 비용</td></tr>
    <tr><td class="strong">Coldline</td><td>분기 1회 정도</td><td>90일</td><td>보관비 ↓↓, 읽기 비용 ↑</td></tr>
    <tr><td class="strong">Archive</td><td>연 1회 미만 (규정 보관, DR)</td><td>365일</td><td>보관비 최저, 읽기 비용 최고</td></tr>
  </tbody></table></div>
  <p><b>Lifecycle rule</b>: “30일 지나면 Nearline, 1년 지나면 Archive, 7년 지나면 삭제”처럼 자동으로 옮기고 지우는 규칙. <b>Autoclass</b>: 접근 패턴을 보고 클래스를 자동으로 바꿔 줌.</p>
  <p><b>lifecycle vs Autoclass: 접근 패턴을 예측할 수 있나</b> <button class="qref" data-id="606">사례 연구 Q6</button>: “나이가 들면 덜 읽힘”처럼 <b>예측 가능</b>하면 lifecycle 규칙(SetStorageClass), Altostrat 아카이브 미디어처럼 “드물게 읽히지만 <mark>예측할 수 없이 다시 인기</mark>”면 <mark>Autoclass</mark>입니다. Autoclass는 30일 미접근 → Nearline → 90일 → Coldline → 365일 → Archive(터미널 클래스를 Archive로 지정한 경우, 기본은 Nearline까지)로 내리고, <b>읽히면 즉시 Standard로 올리며</b>, 조회 요금 대신 관리 요금을 받습니다. 주의: Autoclass 버킷에는 <b>SetStorageClass·matchesStorageClass lifecycle 규칙을 같이 못 둡니다</b>(Delete 같은 정리 규칙은 가능). 오답: 전부 즉시 Archive(조회 요금 최고·365일 최소 보관), 수동 분리(예측 필요), 전부 Nearline 고정.</p>
  <p><b>클래스는 보관 기간이 아니라 “조회 빈도”로</b> <button class="qref" data-id="332">3세트 Q32</button>: “최근 45일 저지연 + 이후 <mark>분기 1회</mark> 조회 + 7년 보관 + 비용 최소” = 45일 후 <b>Coldline</b>. Archive는 보관비가 가장 싸도 <b>연 1회 미만</b>용이라 분기마다 수 TB를 읽으면 조회 요금이 절약분을 잡아먹습니다. 미끼 요소: “몇 초 지연 허용”(Cloud Storage는 모든 클래스가 즉시 온라인 조회, 복원 대기 없음), “7년 보관”(Coldline 90일·Archive 365일 최소 기간을 이미 넘음). 대용량 장기 보관은 BigQuery 장기 요금보다 Cloud Storage 콜드 클래스가 쌉니다.</p>
  <p><b>초당 수천 건 쓰기: 객체 이름 설계</b> <button class="qref" data-id="338">3세트 Q38</button>: Cloud Storage는 객체 이름(키) 순서로 범위를 나눠 처리하므로, 이름이 <b>타임스탬프·일련번호로 시작</b>하면 새 쓰기가 한쪽 끝에 몰려 <mark>핫스팟</mark>(지연·429/503)이 생깁니다. 이름 앞에 <mark>무작위(해시) 접두사</mark>를 붙여 분산하세요(Bigtable row key와 같은 원리, <button class="qref" data-id="207">2세트 Q7</button>). 손실 위험을 줄이려면 레코드를 큰 묶음이 아니라 <b>하나씩</b>, 메타데이터를 <b>같은 업로드에</b> 넣어 올리고, 지수 백오프 재시도·체크섬을 씁니다. 버킷을 주기적으로 새로 만드는 것은 해법이 아닙니다.</p>
  <p><b>가끔 나는 429·5xx는 재시도로 견디기</b> <button class="qref" data-id="542">5세트 Q42</button>: Cloud Storage는 429(요청 속도·한도 초과)와 대부분의 5xx(서버 측 일시 문제)를 <b>일시적 오류</b>로 봅니다. 정답은 <mark>잘린 지수 백오프(truncated exponential backoff) + 지터 + 최대 재시도 횟수</mark>이고, <b>멱등(idempotent) 작업</b>이나 <code>ifGenerationMatch</code> 같은 요청 전제 조건으로 보호된 쓰기만 재시도합니다. 공식 클라이언트 라이브러리가 기본으로 해 주므로 재시도 계층을 또 얹지 않습니다. 오답: gRPC로 바꾸기(gRPC도 일시 오류를 받음), multi-region으로 옮기기(429는 우리 요청 속도 문제), <b>요청마다 Service Health 확인</b>(대규모 장애 알림용이라 우리 429·짧은 5xx는 안 뜸). 429가 <b>계속</b> 많으면 재시도가 아니라 위의 이름 분산·점진적 증가가 해법입니다.</p>
  <p><b>위치</b>: region(한 리전, 가장 저렴) / dual-region(두 리전, 리전 장애 대비) / multi-region(대륙 단위, 전 세계 배포용).</p>
  <p><b>전 세계 사용자가 자주 받는 파일</b> <button class="qref" data-id="539">5세트 Q39</button>: <mark>multi-region 버킷 하나 + Standard</mark>(더 줄이려면 앞에 Cloud CDN). 버킷 위치는 <b>region·dual-region·multi-region</b> 단위라 “zone마다 버킷”은 없는 설계이고, multi-region 버킷을 여러 개 두고 복제하면 동기화·요청 라우팅을 직접 만들어야 해서 오답입니다.</p>
  <p><b>원본 보존 + 재처리 = 처리 전에 raw 버킷</b> <button class="qref" data-id="545">5세트 Q45</button>: “이미지·텍스트·로그·파트너 피드, 형식이 예고 없이 바뀜, <b>받은 그대로</b> 보존해 새·수정 파이프라인으로 다시 처리” → <mark>Cloud Storage raw(landing) 버킷에 변환 없이 저장 → 파이프라인이 버킷에서 읽기 → 결과는 BigQuery·curated 버킷</mark>(데이터 레이크, schema-on-read). 함정은 <b>“Process … first”</b>: 저장소가 Cloud Storage여도 처리 결과만 남으면 원본이 사라져 오답입니다. BigQuery 테이블에 바로 적재도 스키마 해석이 필요해 형식 변경·이미지에 약합니다(object table도 객체는 Cloud Storage에 있음).</p>
</section>

<section>
  <h2>5. 데이터 옮기기 <button class="qref" data-id="205">2세트 Q5</button> <button class="qref" data-id="315">3세트 Q15</button> <button class="qref" data-id="317">3세트 Q17</button> <button class="qref" data-id="329">3세트 Q29</button> <button class="qref" data-id="330">3세트 Q30</button> <button class="qref" data-id="347">3세트 Q47</button></h2>
  <div class="tbl"><table><thead><tr><th>상황</th><th>도구</th></tr></thead><tbody>
    <tr><td>파일을 빠른 회선으로 올리기 (전송 시간이 몇 시간~며칠), 추가 서비스·개발 비용 최소</td><td class="strong">gcloud storage cp (병렬·resumable·체크섬). 12TB ÷ 2Gbps ≈ 13시간이면 Transfer Appliance·Dataflow·상용 ETL X (<button class="qref" data-id="514">5세트 Q14</button>)</td></tr>
    <tr><td>업로드 후 모든 객체가 원본과 같은지 <b>독립 확인</b>, 네트워크 요금·구현 노력 최소</td><td class="strong"><code>gcloud storage hash --skip-md5</code>(로컬 CRC32C, Base64) vs <code>gcloud storage ls -L</code>(객체 CRC32C 메타데이터) 비교. 전부 다운로드 후 SHA-256·diff(요금·시간), CRC32C 계산용 Java 앱(불필요한 개발) X. 메타데이터에 SHA-256은 없고, MD5는 composite object에 없음 (<button class="qref" data-id="535">5세트 Q35</button>)</td></tr>
    <tr><td>Cloud Storage 버킷 ↔ 버킷 (리전·프로젝트 간), 1TB 초과, 중단 후 재개 + 새·변경 객체만</td><td class="strong">Storage Transfer Service 전송 작업 (버킷 간은 <b>기본 증분</b>, 관리형 재시도·추적). Google 권장 기준: 리전 간 1TB 초과. cp(증분 작업 아님)·rsync(클라이언트 실행)·Cloud Composer(직접 구현) X (<button class="qref" data-id="525">5세트 Q25</button>)</td></tr>
    <tr><td>다른 클라우드(S3 등)나 온프레미스에서 대량·정기 전송</td><td class="strong">Storage Transfer Service. 다른 클라우드의 S3 호환 스토리지 14TB를 빠르고 저렴하게 → 클라우드 간 직접 전송(중간 서버 X, 사용료 X). 워크스테이션 gsutil mv·Transfer Appliance·데이터 센터 경유 X (<button class="qref" data-id="440">4세트 Q40</button>)</td></tr>
    <tr><td>수십~수백 TB, 회선이 느려 몇 주 이상 걸림, 또는 회선을 업무에 써야 함</td><td class="strong">Transfer Appliance (물리 장비 배송: 복사 → finalize → 반송 → Google이 버킷에 적재·복호화) (<button class="qref" data-id="319">3세트 Q19</button>). PB 규모면 <b>여러 대 병렬</b>(장비당 최대 약 300TB). 개인 휴대용 디스크 배송은 지원 X (<button class="qref" data-id="408">4세트 Q8</button>)</td></tr>
    <tr><td>SaaS·다른 DWH 데이터를 BigQuery로 정기 적재</td><td class="strong">BigQuery Data Transfer Service</td></tr>
    <tr><td>MySQL·PostgreSQL 등을 Cloud SQL·AlloyDB로 이전</td><td class="strong">Database Migration Service (continuous) 또는 외부 소스 → Cloud SQL replica 지속 복제 후 promote (<button class="qref" data-id="330">3세트 Q30</button>)</td></tr>
    <tr><td>여러 DB 엔진(MySQL·SQL Server·Redis·MongoDB)을 관리 비용↓ + 리팩터링 최소로 이전</td><td class="strong">엔진별 관리형 대응: Cloud SQL·AlloyDB / Memorystore for Redis / MongoDB 호환 Firestore·MongoDB Atlas + 단계적 이전. VM 자체 설치(관리 그대로)·BigQuery로 전부 교체(트랜잭션 불가) X (<button class="qref" data-id="636">사례 연구 Q36</button>)</td></tr>
    <tr><td>운영 DB 변경분을 실시간으로 BigQuery에 복제 (CDC: Change Data Capture, 변경 데이터 캡처)</td><td class="strong">Datastream (서버리스 CDC. 소스: MySQL·Oracle·PostgreSQL(AlloyDB 포함)·SQL Server·MongoDB·Spanner. 여러 운영 DB 사일로를 BigQuery 하나로 통합 <button class="qref" data-id="618">사례 연구 Q18</button>. 문서상 Salesforce 등 일부 앱 소스(일부 Preview)도 생겼지만, SaaS 앱끼리 연결·필드 매핑·업무 동기화는 Application Integration, <button class="qref" data-id="510">5세트 Q10</button>)</td></tr>
    <tr><td>이전 전 기존 환경(VM·SAP) 탐색·평가: 인벤토리, 의존성 매핑, 대상 추천, 빠른 비용 추정·TCO</td><td class="strong">Migration Center (<button class="qref" data-id="315">3세트 Q15</button>, <button class="qref" data-id="329">3세트 Q29</button>). vSphere API 스크립트·Pricing Calculator 수동 입력은 수작업, Config Connector는 리소스 생성 도구</td></tr>
    <tr><td>온프레미스·타 클라우드 VM을 Compute Engine으로 옮기기</td><td class="strong">Migrate to Virtual Machines (<button class="qref" data-id="317">3세트 Q17</button>)</td></tr>
  </tbody></table></div>
  <p><b>DB cutover: 덤프 vs 지속 복제</b> <button class="qref" data-id="330">3세트 Q30</button>: <b>cutover</b> = 마지막에 운영을 옛 DB에서 새 DB로 넘기는 순간. “손실 0 + cutover 다운타임 최소”면 <mark>지속 복제 → 지연(lag) 0 확인 → 앱 잠깐 중지 → replica promote → 연결 전환</mark>. 앱이 도는 중에 찍은 mysqldump는 <b>그 이후 변경이 빠지고</b>(손실), 앱을 멈추고 덤프하면 덤프~import 전체가 <b>다운타임</b>, 이중 쓰기는 앱 재설계·불일치 위험. Cloud SQL Auth Proxy는 접속 도구일 뿐 복제를 하지 않습니다. 앱 계층은 먼저 Compute Engine으로 옮겨 Cloud VPN으로 온프레미스 DB를 계속 쓰게 해 두면 DB 이전과 분리됩니다.</p>
  <p><b>밀접하게 묶인 중요 시스템: 웨이브로 단계적 이전</b> <button class="qref" data-id="347">3세트 Q47</button>: “한 번에 옮기는 위험 회피 + 의존성 고려 + 전환 전 성능 검증” = <mark>의존성 매핑 → 이전 웨이브(밀접한 계층은 같은 웨이브) → 단계적 이전 → 웨이브마다 지연·가용성 검증 → 기준 충족 시 전환</mark>. 오답: 빅뱅(한 유지보수 창에 전부), Interconnect 깔고 DB만 먼저(밀접 계층 분리로 지연↑), 이전 전 전면 마이크로서비스 리팩터링(이전과 현대화는 분리).</p>
  <p><b>모놀리스 장기 현대화: 단계적 마이크로서비스 + 이벤트 기반</b> <button class="qref" data-id="424">4세트 Q24</button>: “모놀리스 + 밀접 결합 + 느린 릴리스 + <b>장기</b> 현대화 + 향후 데이터·AI” = <mark>기능을 하나씩 떼어 내는 단계적 분리(strangler fig) + Pub/Sub 비동기 이벤트 + 모델은 Gemini Enterprise Agent Platform endpoint</mark>. 오답: 컨테이너화 + GKE + Cloud SQL(포장만 바뀌고 한 덩어리·공유 DB 그대로), ML endpoint만 붙이기(전술적 개선), Datastream + BigQuery ML(데이터 플랫폼만 개선). <b>이전(migration)</b>이 목적이면 웨이브 단위 이전(위 3세트 Q47), <b>현대화(modernization)</b>가 목적이면 마이크로서비스 분리로 구분하세요. 사례 연구에서도 차종별로 갈라진 코드베이스는 공통 플랫폼 계층을 만들고 하나씩 그 위로 옮기며 <button class="qref" data-id="654">사례 연구 Q54</button>, KnightMotives의 낡은 메인프레임·ERP는 “교체 완료까지 대기”가 아니라 <mark>가격·프로모션 같은 기능부터 클라우드 네이티브 서비스로 만들고 API·이벤트로 레거시와 연동</mark>하는 것이 정답이었습니다 <button class="qref" data-id="651">사례 연구 Q51</button>.</p>
  <p><b>VM 이전의 Google 권장 순서</b> <button class="qref" data-id="317">3세트 Q17</button>: <mark>평가(Migration Center) → 계획(의존 관계로 웨이브 + runbook) → 이전(Migrate to Virtual Machines) → 최적화</mark>. Migrate to Virtual Machines는 VMware 쪽에 Migrate Connector 하나만 두고(게스트 에이전트 X) <b>지속 복제 → 테스트 클론 → cutover(최종 동기화)</b>로 다운타임을 줄입니다. 오답 패턴: 평가 없이 VM을 하나씩 이전, 디스크 이미지 수동 import(변경분 복제·테스트 클론 없음 → 다운타임 김), 서드파티 에이전트 설치.</p>
  <p>감 잡기: 1Gbps 회선으로 <b>100TB ≈ 9일</b>, 100Mbps면 ≈ 90일. 하루 기준으로는 <b>1Gbps ≈ 10TB/일, 2Gbps ≈ 20TB/일, 100Mbps ≈ 1TB/일</b>.</p>
  <p><b>반대 방향 함정: 크기가 커 보여도 회선이 충분하면 온라인</b> <button class="qref" data-id="514">5세트 Q14</button> <button class="qref" data-id="536">5세트 Q36</button>: 12TB ÷ 2Gbps ≈ <mark>13.3시간</mark>. 장비 주문·배송·반송·적재에 며칠~몇 주가 걸리는 Transfer Appliance보다 <b>회선으로 바로 올리는 쪽이 빠르고 싸므로</b> “빠르게 + 추가 서비스·개발 비용 최소”면 <mark>gcloud storage cp</mark>. 기준은 데이터 <b>크기</b>가 아니라 <b>전송 시간</b>입니다. 이미 파일이고 변환이 없으면 Dataflow·상용 ETL도 과합니다. 같은 12TB·2Gbps에 <b>“이미 만든 DB export + 운영 DB 부하 금지”</b>가 붙은 변형(<button class="qref" data-id="536">5세트 Q36</button>)은 <mark>압축 + <code>gsutil -m</code> 병렬 업로드</mark>가 정답이고, “운영 DB에서 직접 읽는” Dataflow·ETL은 부하 때문에도 탈락합니다. <code>gsutil -m</code>·압축이 Q18에선 오답, 여기선 정답인 이유는 <b>회선 대비 전송량</b>(150Mbps에 매일 12TB는 불가, 2Gbps에 일회성 12TB는 가능)입니다. gsutil은 레거시라 새 작업은 gcloud storage(기본 병렬).</p>
  <p><b>일회성 + 매일 지속 전송: 두 요건을 따로 계산</b> <button class="qref" data-id="518">5세트 Q18</button>: “아카이브 780TB + 이후 매일 12TB, 인터넷 150Mbps” → 아카이브는 780TB ÷ 150Mbps ≈ 482일이라 <mark>Transfer Appliance</mark>. 매일 분은 <mark>일일 전송량 × 8 ÷ 86,400초</mark> = 12TB/일 ≈ <b>1.11Gbps를 24시간 내내</b> 필요 → 150Mbps 위의 방법(Cloud VPN, <code>gsutil -m</code> 병렬, 압축)은 전부 회선 한계에 막힘 → <mark>Dedicated Interconnect</mark>(10/100Gbps) 또는 Direct Peering으로 회선 자체를 새로. 보기 첫 줄이 같으면 <b>다른 줄만 비교</b>하세요. VPN은 암호화 터널일 뿐 대역폭을 늘리지 않습니다.</p>
  <p><b>보기의 리전 이름까지 대조</b> <button class="qref" data-id="525">5세트 Q25</button>: “europe-west1 → asia-northeast1, 3.6TB, 중단 시 재개 + 새·변경 객체만”에서 <code>gcloud storage rsync</code> 보기는 “새·변경 객체만”에 딱 맞아 보이지만 <mark>대상이 europe-north1</mark>이라 요건 위반입니다. 도구가 마음에 들어도 마지막에 <b>리전·버킷 이름·숫자</b>를 문제와 한 글자씩 대조하세요. 정답은 Storage Transfer Service입니다. 같은 “파일 옮기기”라도 <b>출발지</b>로 나뉩니다: 온프레미스 + 회선 충분 + 추가 서비스 최소 = gcloud storage cp(5세트 Q14), 버킷 ↔ 버킷 1TB 초과 = STS, 다른 클라우드 = STS(4세트 Q40), 회선 부족 = Transfer Appliance.</p>
  <p><b>Storage Transfer Service(STS)는 “클라우드 간” 전용이 아닙니다</b> <button class="qref" data-id="525">5세트 Q25</button>: 이름 그대로 <mark>Cloud Storage로(또는 Cloud Storage에서) 데이터를 옮기는 관리형 전송 서비스</mark>이고, 출발지가 다른 클라우드든, 같은 Google Cloud의 다른 버킷이든, 온프레미스든 상관없습니다. 공통점은 “작업(job)으로 만들어 관리형으로 실행 + 증분 + 재시도 + 일정 + 모니터링”입니다.</p>
  <div class="tbl"><table><thead><tr><th>출발지 (source)</th><th>도착지 (sink)</th><th>방식</th><th>노트</th></tr></thead><tbody>
    <tr><td class="strong">Cloud Storage 버킷</td><td>Cloud Storage 버킷 (다른 리전·프로젝트)</td><td>에이전트 없음, 기본 증분</td><td><button class="qref" data-id="525">5세트 Q25</button></td></tr>
    <tr><td class="strong">Amazon S3 · S3 호환 스토리지 · Azure Blob Storage</td><td>Cloud Storage</td><td>에이전트 없음 (클라우드 간 직접)</td><td><button class="qref" data-id="440">4세트 Q40</button></td></tr>
    <tr><td class="strong">URL 목록 (공개 HTTP/HTTPS)</td><td>Cloud Storage</td><td>에이전트 없음</td><td></td></tr>
    <tr><td class="strong">온프레미스 파일 시스템 (POSIX) · HDFS</td><td>Cloud Storage</td><td>온프레미스에 <b>전송 에이전트</b>(転送エージェント) 설치</td><td>회선이 충분할 때. 부족하면 Transfer Appliance</td></tr>
    <tr><td class="strong">Cloud Storage</td><td>파일 시스템</td><td>에이전트</td><td>다운로드 방향도 지원</td></tr>
  </tbody></table></div>
  <p>그래서 “클라우드 간”은 STS가 할 수 있는 일 <b>중 하나</b>일 뿐입니다. 시험에서 “버킷 ↔ 버킷 대량 + 증분·재시도·추적”, “S3 → Cloud Storage”, “온프레미스에서 정기 전송(에이전트)”이 모두 STS로 나옵니다. 반대로 <b>STS가 아닌 것</b>: 온프레미스 일회성 + 회선 충분 + 추가 서비스 최소 = gcloud storage cp, 회선으로 몇 주 이상 = Transfer Appliance, SaaS·다른 DWH → BigQuery 정기 적재 = <b>BigQuery</b> Data Transfer Service(이름이 비슷하지만 다른 서비스).</p>
  <p><mark>데이터량 ÷ 회선 속도를 먼저 계산</mark>하세요 (<button class="qref" data-id="205">2세트 Q5</button>): 620TB ÷ 900Mbps ≈ <b>64일</b>(회선 100% 사용 시). 기한이 50일이고 회선을 프로덕션과 공유한다면 회선을 거치는 방법(Storage Transfer Service 에이전트, gcloud 병렬 업로드)은 전부 탈락 → Transfer Appliance. Storage Transfer Service는 회선을 <b>잘 쓰게</b> 해 줄 뿐 병목을 넘지 못합니다. 곧 닫을 시설에 Interconnect를 새로 놓는 것도 일회성 이전엔 과합니다. resumable·streaming 같은 <b>업로드 방식</b>을 바꿔도 회선 병목은 그대로이고, Transfer Appliance 데이터 적재는 Google이 하므로 Cloud Data Fusion 같은 별도 서비스는 오답입니다 (<button class="qref" data-id="319">3세트 Q19</button>).</p>
</section>

<section>
  <h2>6. 스토리지 종류: 객체 · 파일 · 블록 <button class="qref" data-id="29">Q29</button> <button class="qref" data-id="222">2세트 Q22</button> <button class="qref" data-id="227">2세트 Q27</button> <button class="qref" data-id="238">2세트 Q38</button> <button class="qref" data-id="240">2세트 Q40</button> <button class="qref" data-id="249">2세트 Q49</button> <button class="qref" data-id="333">3세트 Q33</button></h2>
  <p>데이터베이스가 아니라 “파일을 어디에 두나” 문제입니다. <mark>데이터를 어떤 단위로 다루나</mark>로 나눕니다.</p>
  <div class="tbl"><table><thead><tr><th>종류</th><th>접근 방식</th><th>서비스</th><th>여러 VM 동시 사용</th><th>언제</th></tr></thead><tbody>
    <tr><td class="strong">객체 (Object)</td><td>HTTP API, 객체 이름(키)</td><td>Cloud Storage</td><td>무제한</td><td>대용량·비정형 파일, 백업, 데이터 레이크, ML 학습 데이터</td></tr>
    <tr><td class="strong">파일 (File)</td><td>NFS 마운트, 폴더 경로</td><td>Filestore</td><td>O (공유 목적)</td><td>공유 홈 디렉터리, 파일 잠금·부분 수정이 필요한 레거시 앱, <b>VM 수백 대가 같은 작업 공간을 동시에 읽고 쓰는 렌더링·배치</b> (<button class="qref" data-id="333">3세트 Q33</button>). 공유하려면 <mark>인스턴스 하나</mark>를 모두가 마운트(zone마다 따로 만들면 서로 다른 파일 시스템). PD multi-writer는 소수 VM용 블록이라 대체 불가</td></tr>
    <tr><td class="strong">병렬 파일</td><td>고성능 병렬 파일 시스템</td><td>Parallelstore / Managed Lustre</td><td>O</td><td>HPC, 대규모 AI 학습의 초고속 I/O</td></tr>
    <tr><td class="strong">블록 (Block)</td><td>VM에 붙이는 디스크</td><td>Persistent Disk / Hyperdisk</td><td>원칙적으로 1대 (읽기 전용 공유 가능)</td><td>부팅 디스크, VM 위 DB</td></tr>
    <tr><td class="strong">리전 블록</td><td>VM에 붙이는 디스크, <b>같은 리전 두 zone에 동기 복제</b></td><td>Regional PD / Hyperdisk Balanced HA</td><td>1대 (장애 시 다른 zone VM에 force-attach)</td><td>zone 장애에도 최신 데이터로 빠르게 복구 (<button class="qref" data-id="222">2세트 Q22</button>)</td></tr>
    <tr><td class="strong">로컬 블록</td><td>VM 물리 서버의 SSD</td><td>Local SSD</td><td>1대, VM 종료 시 사라짐</td><td>임시 스크래치, 캐시, <b>백업 스테이징</b>(덤프를 빨리 쓰고 바로 Cloud Storage로, <button class="qref" data-id="227">2세트 Q27</button>). <mark>세션·부팅 디스크·영구 데이터에는 쓰지 않음</mark> (<button class="qref" data-id="47">Q47</button>). Spot VM이 회수돼도 사라지므로 checkpoint는 PD·Cloud Storage에 (<button class="qref" data-id="503">5세트 Q3</button>)</td></tr>
  </tbody></table></div>
  <p><b>PD 성능은 크기에 비례</b> <button class="qref" data-id="240">2세트 Q40</button>: Persistent Disk는 <mark>클수록 IOPS·처리량 한도가 올라가고</mark>(SSD PD는 GB당 약 30 IOPS), VM vCPU 수에 따른 상한이 따로 있습니다. 그래서 “storage performance가 병목”이면 공간이 남아도 <b>디스크를 키웁니다</b>(실행 중 resize 가능, 이후 파일 시스템 확장). 메모리 증설·DB 엔진 교체·BigQuery 이전은 디스크 병목을 건드리지 않습니다. 크기와 별개로 IOPS를 지정하려면 Hyperdisk. 디스크는 늘리기만 가능하고 줄일 수 없습니다.</p>
  <p><b>PD 용량을 무중단으로 늘리는 순서</b> <button class="qref" data-id="249">2세트 Q49</button>: 디스크와 파일 시스템은 <mark>별개의 두 단계</mark>입니다. ① 콘솔·gcloud로 디스크 크기 증가(VM 실행 중 가능) → ② VM 안에서 파일 시스템 확장(ext4는 <code>resize2fs</code>, XFS는 <code>xfs_growfs</code>, 마운트된 채로 가능). 파티션이 있는 디스크면 그 사이에 <code>growpart</code>로 파티션부터 늘립니다. 오답 패턴: VM 중지(불필요한 중단), fdisk(파티션 도구라 파일 시스템을 못 늘림), 새 디스크로 복사(과함). 확장 전 snapshot 권장.</p>
  <p><b>VM 디스크 장애 대비</b> (<button class="qref" data-id="222">2세트 Q22</button>): RPO(Recovery Point Objective, 잃어도 되는 데이터 양)·RTO(Recovery Time Objective, 복구까지 시간)로 고릅니다.</p>
  <div class="tbl"><table><thead><tr><th>방식</th><th>RPO</th><th>RTO</th><th>막는 장애</th></tr></thead><tbody>
    <tr><td class="strong">예약 Snapshot</td><td>마지막 스냅샷 시점 (그 뒤 데이터 손실)</td><td>김 (디스크 생성 + VM 구성)</td><td>zone·region 장애, <b>데이터 손상·실수 삭제</b></td></tr>
    <tr><td class="strong">Regional PD + 인스턴스 템플릿</td><td><mark>≈ 0</mark> (동기 복제)</td><td><mark>짧음</mark> (보조 zone VM에 바로 연결)</td><td><b>zone 장애</b>만 (다른 리전 VM엔 못 붙임)</td></tr>
    <tr><td class="strong">Backup and DR Service (backup plan + backup vault)</td><td>마지막 백업 시점</td><td>김 (백업에서 복원)</td><td>zone·region 장애, 손상·삭제 + <b>별도 보안 프로젝트에 강제 보존</b>(최소 보존 기간 동안 관리자도 삭제 불가) (<button class="qref" data-id="445">4세트 Q45</button>)</td></tr>
  </tbody></table></div>
  <p>“백업을 <b>복구팀만 접근하는 별도 프로젝트</b>에 + N일 <b>삭제 불가</b> + 완전 자동” = <mark>Backup and DR Service의 backup vault</mark> <button class="qref" data-id="445">4세트 Q45</button>. snapshot schedule은 같은 프로젝트 안에서만 동작하고, PD 스냅샷은 Cloud Storage 객체가 아니라서 버킷으로 내보내 lifecycle·Bucket Lock으로 관리할 수 없습니다. 스냅샷 라벨(만료일)은 메타데이터일 뿐 보존을 강제하지 못합니다.</p>
  <p>“zone 장애 + most current data + shortest recovery” = <mark>Regional PD</mark>. 동기 복제라 손상·삭제도 함께 복제되므로 스냅샷 백업은 따로 둡니다.</p>
  <p><b>“every N minutes”는 RPO N분</b> <button class="qref" data-id="547">5세트 Q47</button>: 같은 리전 두 zone의 active-standby VM, 지연 민감 거래 데이터, “latest committed data + minimal recovery time” → <mark>regional SSD PD + 장애 시 standby VM에 force-attach</mark>(죽은 VM에서 정상 detach가 안 되므로 강제 연결). 오답: 45분마다 스냅샷 → 새 디스크 복원(RPO 45분·RTO 김), Local SSD + 30분 rsync(Local SSD는 임시, RPO 30분, 복사 중 불일치), Cloud Storage FUSE로 버킷 마운트(POSIX 아님·잠금·부분 쓰기 X·지연 큼, DB 저장소로 비권장).</p>
  <p><b>단일 writer 레거시 앱의 HA</b> <button class="qref" data-id="314">3세트 Q14</button>: “여러 서버에서 동시에 활성 불가 + 한 인스턴스만 데이터 볼륨에 쓰기 + failover 중 짧은 중단 허용”이면 <mark>다른 zone의 active/standby VM(unmanaged instance group) + Regional PD</mark>. 장애 시 standby에 force-attach → 마운트 → 앱 시작. <b>Filestore는 여러 VM이 동시에 쓰는 공유 파일</b>이라 이런 앱엔 손상 위험, <b>MIG는 같은 VM 여러 대를 동시에 활성</b>으로 굴리므로 오답입니다.</p>
  <p><b>Cloud SQL 가용성 구성</b> <button class="qref" data-id="238">2세트 Q38</button>: 이름에 속지 마세요. read replica는 <b>읽기용</b>, zone 장애 대비는 <b>HA standby</b>입니다.</p>
  <div class="tbl"><table><thead><tr><th>구성</th><th>복제</th><th>자동 failover</th><th>읽기 처리</th><th>막는 장애</th></tr></thead><tbody>
    <tr><td class="strong">HA (regional instance): 같은 리전 다른 zone standby</td><td><mark>동기</mark></td><td><mark>O</mark></td><td>X</td><td>인스턴스·<b>zone</b> 장애 (2세트 Q38)</td></tr>
    <tr><td>Read replica (같은 리전)</td><td>비동기</td><td>X (수동 승격)</td><td>O</td><td>읽기 부하 분산</td></tr>
    <tr><td>Cross-region read replica</td><td>비동기</td><td>X (승격 = DR)</td><td>O</td><td><b>리전</b> 장애 (<button class="qref" data-id="10">Q10</button>, <button class="qref" data-id="206">2세트 Q6</button>)</td></tr>
  </tbody></table></div>
  <p>HA standby는 <b>다른 리전에 둘 수 없습니다</b>. VM의 Regional PD와 같은 원리(같은 리전 두 zone 동기 복제)입니다.</p>
  <p><b>질문의 동사로 기능을 고르기</b> <button class="qref" data-id="340">3세트 Q40</button>: “<mark>recover</mark> after failure + <mark>lose the smallest number of transactions</mark>”는 가용성이 아니라 <b>복구 시점(RPO)</b> 문제 → <b>자동 백업(기준 사본) + 바이너리 로그 PITR(백업 이후 변경)</b>. 둘 중 하나만으론 부족합니다(백업만이면 마지막 백업 시점까지, binlog만이면 출발점 없음). read replica·반동기 복제는 “계속 돌게/읽기 분산”용이고 실수·손상까지 복사되므로 <mark>복제는 백업이 아닙니다</mark>.</p>
  <div class="tbl"><table><thead><tr><th>요건 동사</th><th>기능</th></tr></thead><tbody>
    <tr><td>recover, minimize data loss (RPO)</td><td class="strong">자동 백업 + PITR (binlog)</td></tr>
    <tr><td>remain available (instance·zone 장애)</td><td class="strong">HA</td></tr>
    <tr><td>offload reads / region DR</td><td class="strong">read replica / cross-region replica</td></tr>
  </tbody></table></div>
  <p><b>Cloud SQL 용량 관리: 무엇이 자동이고 무엇이 아닌가</b> <button class="qref" data-id="449">4세트 Q49</button></p>
  <div class="tbl"><table><thead><tr><th>요구</th><th>자동?</th><th>대응</th><th>함정</th></tr></thead><tbody>
    <tr><td>스토리지 고갈 방지</td><td><mark>O</mark></td><td><b>automatic storage increase</b> (늘면 줄일 수 없음, 상한 지정 가능)</td><td>“70% 알림 → 수동 증설”</td></tr>
    <tr><td>CPU N% 미만 유지</td><td><mark>X</mark></td><td>Cloud Monitoring 알림 → <b>machine type 증설</b>(재시작 발생)</td><td>“즉시 고정 48 vCPU”(측정 없는 과잉·고정)</td></tr>
    <tr><td>복제 지연 N초 미만</td><td>X</td><td><code>replica_lag</code> 알림 → 원인 진단(쓰기량·긴 쿼리·잠금) → 모놀리식이면 <b>샤딩</b></td><td>Memorystore 캐시(읽기만 줄임, 복제는 쓰기 적용 문제)</td></tr>
  </tbody></table></div>
  <p><b>DB 하나만 빠르게 백업</b> (<button class="qref" data-id="227">2세트 Q27</button>): 스냅샷은 <b>디스크 통째</b>(블록 단위)라 디스크에 DB가 여러 개면 하나만 고를 수 없습니다. DB 단위는 <b>mysqldump(논리 백업)</b>. “빠르게 + 운영 PD 성능 소모 금지”면 <mark>mysqldump → Local SSD(임시 작업대) → gcloud storage cp로 Cloud Storage</mark>. Local SSD는 사라져도 되는 중간 단계로만 쓰므로 영구성 문제가 없습니다. FUSE로 버킷에 직접 쓰기는 네트워크를 거쳐 느리고, PD를 더 붙여도 VM 단위 PD 처리량·IOPS 한도를 운영 PD와 나눠 씁니다.</p>
  <p><b>Cloud Storage FUSE (gcsfuse)</b>: 버킷을 VM·Pod에 <b>폴더처럼 마운트</b>해 파일 경로로 읽게 해 주는 번역기입니다. <mark>“데이터는 Cloud Storage + 앱은 파일 경로 + 복사본 금지”</mark>면 정답. 모든 POSIX 동작(잠금, 부분 덮어쓰기)을 지원하지는 않으므로 대량 읽기에 적합하고, 잦은 수정이 필요한 앱은 Filestore입니다(<button class="qref" data-id="411">4세트 Q11</button>). GKE에서는 Cloud Storage FUSE CSI driver로 씁니다.</p>
  <p><b>Cloud Storage 데이터 보호 기능 구분</b> <button class="qref" data-id="34">Q34</button>: 이름이 비슷해서 헷갈리지만 역할이 전부 다릅니다.</p>
  <div class="tbl"><table><thead><tr><th>기능</th><th>하는 일</th><th>언제</th></tr></thead><tbody>
    <tr><td class="strong">Object Versioning</td><td>덮어쓰기·삭제 시 이전 세대(generation)를 noncurrent 버전으로 보관</td><td><mark>이전 버전 조회, 실수로 덮어쓰기·삭제 복구</mark></td></tr>
    <tr><td class="strong">Soft delete</td><td>삭제된 객체를 일정 기간(기본 7일) 복구 가능하게 보관. 덮어쓰기 이력은 없음</td><td>삭제 사고 대비 안전망</td></tr>
    <tr><td class="strong">Retention policy / Bucket Lock</td><td>지정 기간 동안 삭제·교체 <b>금지</b>. Lock하면 되돌릴 수 없음</td><td>규제·법적 보존 (WORM(Write Once Read Many, 한 번 쓰고 여러 번 읽기))</td></tr>
    <tr><td class="strong">Object Lifecycle Management</td><td>조건(나이, 버전 수 등)에 맞으면 삭제·스토리지 클래스 변경</td><td>비용 절감, 오래된 noncurrent 버전 정리 (Versioning과 짝). <mark>“N일 지난 객체 자동 삭제”는 Delete + age</mark>, gcloud는 JSON 파일(<code>--lifecycle-file</code>). cron 스크립트로 지우는 보기는 오답 (<button class="qref" data-id="204">2세트 Q4</button>)</td></tr>
    <tr><td class="strong">Pub/Sub notifications</td><td>객체 생성·삭제 등 이벤트 메시지 발행. 데이터는 보관 안 함</td><td>이벤트 기반 처리 트리거</td></tr>
  </tbody></table></div>
  <p><b>조합 패턴</b> <button class="qref" data-id="45">Q45</button>: “실수로 삭제·교체해도 <b>빠르게 복구</b>” + “관리자도 <b>N년간 삭제·변경 불가</b>” → <mark>Object Versioning + Retention policy + Bucket Lock</mark>. Versioning이 이전 세대를 남기고, 잠긴 보존 정책이 그 세대들을 N년간 지킵니다. Lifecycle은 “N년 뒤 자동 삭제”일 뿐 그 전 삭제를 막지 못하고, IAM은 관리자가 바꿀 수 있으며, 복사(Storage Transfer)는 복사본도 지울 수 있어 불변이 아닙니다.</p>
  <p><b>보존은 버킷에, 조직 정책은 가드레일</b> <button class="qref" data-id="543">5세트 Q43</button>: “7년간 삭제·덮어쓰기 불가, 개정본은 새 객체로” → <mark>버킷에 7년 retention policy + Bucket Lock</mark>(개정본이 새 이름이라 Versioning 불필요). 함정은 Organization Policy 제약 <code>constraints/storage.retentionPolicySeconds</code>를 조직·프로젝트에 거는 보기입니다. 이 제약은 <b>버킷을 만들거나 보존 정책을 바꿀 때 허용·필수 기간을 강제</b>할 뿐, 기존 버킷에 보존을 걸지도 잠그지도 않습니다(보조 가드레일로는 유용). CMEK 키 순환은 기밀성이라 무관합니다.</p>
  <p><b>기록마다 만료일이 다를 때</b> <button class="qref" data-id="505">5세트 Q5</button>: “인수한 기록, 원래 생성일에 따라 만료일이 제각각, 조기 삭제 방지 + 끝나면 즉시 자동 삭제” → <mark>Cloud Storage + Object Lifecycle Management</mark>. 업로드일 ≠ 원래 생성일이라 <code>age</code> 대신 객체마다 <code>Custom-Time</code>을 넣고 <code>daysSinceCustomTime</code> 조건으로 Delete. 조기 삭제는 버킷 retention policy(기간이 모두 같을 때) 또는 <b>Object Retention Lock</b>(객체별 retain-until)이 막습니다. Drive 수동 삭제, 비식별화 후 영구 보관, 야간 배치 스크립트는 오답.</p>
</section>

<section>
  <h2>7. 시험 키워드 → 서비스</h2>
  <div class="tbl"><table><thead><tr><th>문제에 이런 말이 나오면</th><th>후보</th></tr></thead><tbody>
    <tr><td>files accessed frequently from around the world, minimize download latency</td><td class="strong">multi-region 버킷 + Standard (+ Cloud CDN). zone별 regional 버킷·multi-region 버킷 여러 개 복제 X (<button class="qref" data-id="539">5세트 Q39</button>)</td></tr>
    <tr><td>independently confirm uploaded objects are identical to local files, minimize network charges and effort</td><td class="strong">CRC32C 비교: gcloud storage hash vs gcloud storage ls -L (다운로드 X) (<button class="qref" data-id="535">5세트 Q35</button>)</td></tr>
    <tr><td>missing values, duplicates, inconsistent formats, profile the data, repeatable data-quality checks, managed</td><td class="strong">Cloud Storage → BigQuery → <b>Knowledge Catalog(옛 Dataplex) data profiling + automatic data quality</b>. Workbench 노트북 수작업·온프레미스 직접 스캔 X (<button class="qref" data-id="534">5세트 Q34</button>)</td></tr>
    <tr><td>petabyte, ad hoc SQL analytics, data warehouse, BI, complex OLAP across hundreds of TB</td><td class="strong">BigQuery (Spanner·Cloud SQL은 OLTP, Firestore는 문서 NoSQL) (<button class="qref" data-id="421">4세트 Q21</button>)</td></tr>
    <tr><td>insights, reports, predictions, keep operational workloads isolated from analytics</td><td class="strong">BigQuery 분석 웨어하우스(+ BigQuery ML). 운영 DB(Cloud SQL)에 직접 분석 쿼리·Redis 집계·MongoDB 분석 저장소 X (<button class="qref" data-id="641">사례 연구 Q41</button>)</td></tr>
    <tr><td>BigQuery logs deleted automatically after N days, minimize storage and query costs</td><td class="strong">시간 파티션 테이블 + <b>partition expiration</b> (table expiration은 테이블째 삭제, 기본 동작은 삭제 없음·long-term 요금 전환만, DELETE 스크립트 X) (<button class="qref" data-id="402">4세트 Q2</button>)</td></tr>
    <tr><td>archive, backup, DR copy, unstructured files, data lake</td><td class="strong">Cloud Storage</td></tr>
    <tr><td>preserve every file exactly as received, formats change without notice, rerun new or corrected pipelines</td><td class="strong">처리 전에 Cloud Storage raw 버킷 → 파이프라인이 버킷에서 읽음. “Process first”는 저장소가 맞아도 X (<button class="qref" data-id="545">5세트 Q45</button>)</td></tr>
    <tr><td>lift and shift MySQL/PostgreSQL, relational, single region</td><td class="strong">Cloud SQL</td></tr>
    <tr><td>zonal outage, second zone in the same region, most current data, shortest recovery (VM)</td><td class="strong">인스턴스 템플릿 + Regional PD (보조 zone에서 force-attach), 스냅샷 아님 (<button class="qref" data-id="222">2세트 Q22</button>, <button class="qref" data-id="547">5세트 Q47</button>: 45분 스냅샷·Local SSD+rsync·Cloud Storage FUSE X)</td></tr>
    <tr><td>Microsoft SQL Server, remain available if any single zone fails</td><td class="strong">Compute Engine + Always On AG + WSFC, 노드를 다른 zone (Spanner X, 다른 subnet X). 해설은 Cloud SQL HA의 약 60초 장애 조치를 이유로 이쪽을 택함 (<button class="qref" data-id="309">3세트 Q9</button>)</td></tr>
    <tr><td>Cloud SQL recover after catastrophic failure, lose the smallest number of committed transactions (choose two)</td><td class="strong">자동 백업 + 바이너리 로그 PITR (read replica·semisync 복제 X) (<button class="qref" data-id="340">3세트 Q40</button>)</td></tr>
    <tr><td>Cloud SQL remain available if the instance or its zone fails</td><td class="strong">HA 활성화: 같은 리전 다른 zone standby (read replica 아님) (<button class="qref" data-id="238">2세트 Q38</button>)</td></tr>
    <tr><td>~100 TB logs: test serverless analytics + keep as long-term DR backup (choose two)</td><td class="strong">BigQuery에 로드 + Cloud Storage(Coldline·Archive)에 업로드. Cloud SQL·Cloud Logging·Bigtable X (<button class="qref" data-id="913">공식 모의고사 Q13</button>)</td></tr>
    <tr><td>1,000 sensors report every second, inconsistent device connectivity</td><td class="strong">기기가 연결될 때 Pub/Sub 공유 topic에 publish. 영구 연결(VM·App Engine)·Cloud SQL 기기별 테이블 X (<button class="qref" data-id="912">공식 모의고사 Q12</button>)</td></tr>
    <tr><td>MySQL on Compute Engine, cannot restart until maintenance, improve performance quickly and cheaply</td><td class="strong">SSD PD 크기 온라인 확장(성능 ∝ 크기·vCPU). 메모리 증설은 재시작 필요, 다른 DB·BigQuery 이전 X (<button class="qref" data-id="919">공식 모의고사 Q19</button>)</td></tr>
    <tr><td>standby did not take over, reduce the chance of discovering failover problems during a real outage</td><td class="strong"><b>정기 failover 훈련</b>(<code>gcloud sql instances failover</code>) + 앱 재연결 확인. 머신 증설(성능)·백업 증가(RPO)·엔진 교체 X (<button class="qref" data-id="412">4세트 Q12</button>)</td></tr>
    <tr><td>verify the service on a regional MIG remains available when one zone fails</td><td class="strong">한 zone의 VM을 멈추는 계획된 장애 시뮬레이션 + API 가용성·지연·오류율 관찰. read replica 수동 failover X (read replica는 HA standby 아님) (<button class="qref" data-id="426">4세트 Q26</button>)</td></tr>
    <tr><td>recover in another region, RPO minutes, RTO tens of minutes (Cloud SQL)</td><td class="strong">cross-region read replica → promote + 복구 리전 인프라를 Terraform으로 (warm standby) (<button class="qref" data-id="10">Q10</button>, <button class="qref" data-id="206">2세트 Q6</button>)</td></tr>
    <tr><td>99.9%, automated failover for critical services, accept slower recovery for non-critical reporting, controlling costs</td><td class="strong">계층형 DR: 핵심 고객용 서비스 active/active, 비핵심 리포트 warm standby. “전부 active/active”(과잉)·“전부 콜드 + 수동”(부족)·단일 리전 + 백업 X (<button class="qref" data-id="645">사례 연구 Q45</button>)</td></tr>
    <tr><td>back up one selected database, finish quickly, not consume production Persistent Disk performance</td><td class="strong">mysqldump → Local SSD(스테이징) → Cloud Storage (스냅샷 아님) (<button class="qref" data-id="227">2세트 Q27</button>)</td></tr>
    <tr><td>engineering team vs finance team disagree, help select financially and technically appropriate</td><td class="strong">TCO 분석(인프라·인력·운영·가용성·확장·위험) + 의사결정 워크숍 (<button class="qref" data-id="234">2세트 Q34</button>)</td></tr>
    <tr><td>disk nearly full, expand Persistent Disk, least service interruption, ext4 without partition table</td><td class="strong">콘솔에서 PD resize → 마운트된 채로 resize2fs (VM 중지·fdisk·새 디스크 X) (<button class="qref" data-id="249">2세트 Q49</button>)</td></tr>
    <tr><td>storage performance is the main limitation (PD)</td><td class="strong">Persistent Disk 크기 확대 (크기 ∝ IOPS·처리량), 메모리·엔진 교체 아님 (<button class="qref" data-id="240">2세트 Q40</button>)</td></tr>
    <tr><td>global, horizontally scalable, strongly consistent, relational, 99.999%</td><td class="strong">Spanner</td></tr>
    <tr><td>relational database that remains highly available during a regional failure, many concurrent writes</td><td class="strong">multi-region Spanner. Cloud SQL HA는 한 리전 안 zone 간이라 X, Firestore·Bigtable은 NoSQL이라 X (<button class="qref" data-id="448">4세트 Q48</button>)</td></tr>
    <tr><td>time series, IoT, low latency, high throughput, HBase, events per second</td><td class="strong">Bigtable (row key는 타임스탬프로 시작 X → 핫스팟, <button class="qref" data-id="207">2세트 Q7</button>, <button class="qref" data-id="250">2세트 Q50</button>). 초당 수십만 쓰기 + 정해진 속성으로 정확 일치 실시간 조회 = Bigtable (BigQuery X), 간헐적 트래픽이면 앞단은 Cloud Run (<button class="qref" data-id="414">4세트 Q14</button>)</td></tr>
    <tr><td>Bigtable hotspot detected, read latency increased, reduce future hotspots</td><td class="strong"><b>row key 재설계</b>: deviceId·hash prefix를 타임스탬프 앞에 두어 키 공간에 고르게 분산 (노드 2배·GC 정책·HBase API 교체 X). Key Visualizer로 진단, row key는 제자리 수정 불가 → 새 테이블로 이전 (<button class="qref" data-id="420">4세트 Q20</button>)</td></tr>
    <tr><td>mobile, offline sync, document, real-time updates</td><td class="strong">Firestore</td></tr>
    <tr><td>already has the identifiers, retrieve several entities, minimize overhead</td><td class="strong">Key 생성 → batch lookup (query 아님) (<button class="qref" data-id="213">2세트 Q13</button>)</td></tr>
    <tr><td>cache, session, sub-millisecond</td><td class="strong">Memorystore</td></tr>
    <tr><td>session state, resume after days, low latency + durable</td><td class="strong">Memorystore + Firestore in Datastore mode (<button class="qref" data-id="47">Q47</button>)</td></tr>
    <tr><td>VM disk-image exports, templates, thumbnails, logs (파일)</td><td class="strong">Cloud Storage + 버킷별 lifecycle (<button class="qref" data-id="47">Q47</button>)</td></tr>
    <tr><td>hundreds of TB, limited / shared bandwidth, one-time, deadline</td><td class="strong">Transfer Appliance (<button class="qref" data-id="205">2세트 Q5</button>, <button class="qref" data-id="319">3세트 Q19</button>, <button class="qref" data-id="408">4세트 Q8</button>: 1.6PB ÷ 500Mbps ≈ 296일 &gt; 8주)</td></tr>
    <tr><td>3.6 TB bucket europe-west1 → asia-northeast1, resume after interruption, copy only new or modified objects</td><td class="strong">Storage Transfer Service (기본 증분). rsync 보기는 대상 리전(europe-north1)이 다름, cp·Cloud Composer X (<button class="qref" data-id="525">5세트 Q25</button>)</td></tr>
    <tr><td>780 TB archive + 12 TB every day, 150 Mbps internet</td><td class="strong">아카이브 = Transfer Appliance, 매일 = Dedicated Interconnect / Direct Peering (12TB/일 ≈ 1.11Gbps). Cloud VPN·gsutil -m·압축 X (<button class="qref" data-id="518">5세트 Q18</button>)</td></tr>
    <tr><td>12 TB, 2-Gbps connection, complete quickly, minimize additional service and development costs</td><td class="strong">gcloud storage cp (≈13시간). Transfer Appliance(배송 왕복)·Dataflow·상용 ETL X (<button class="qref" data-id="514">5세트 Q14</button>)</td></tr>
    <tr><td>12-TB export already created, 2 Gbps, quickly, minimize cost, avoid workload on the production database</td><td class="strong">export 파일 압축 + gsutil -m 병렬 업로드. DB를 다시 읽는 Dataflow·ETL, Transfer Appliance X (<button class="qref" data-id="536">5세트 Q36</button>)</td></tr>
    <tr><td>existing Spark / Hadoop / Hive jobs, minimal code changes</td><td class="strong">Dataproc = Managed Service for Apache Spark (<button class="qref" data-id="209">2세트 Q9</button>)</td></tr>
    <tr><td>Hadoop jobs + reduce compute costs + tolerate worker interruptions</td><td class="strong">Managed Service for Apache Spark + Spot VM 보조 워커 (직접 설치 X, 표준 VM만 X) (<button class="qref" data-id="242">2세트 Q42</button>)</td></tr>
    <tr><td>Apache Beam, unified batch and streaming pipeline</td><td class="strong">Dataflow</td></tr>
    <tr><td>millions of events continuously, detect within seconds + complex daily reports on the same data, minimize cluster maintenance</td><td class="strong">Dataflow(스트리밍) + BigQuery(분석). 상시 Dataproc 클러스터(운영 부담·리소스 경합)·Dataprep(시각적 정제 도구)·Firestore(운영 DB) X (<button class="qref" data-id="447">4세트 Q47</button>)</td></tr>
    <tr><td>ingest user interaction data globally with minimal latency, near-real-time recommendations, integrate directly with BigQuery</td><td class="strong">Pub/Sub → Dataflow → BigQuery. daily batch·Cloud SQL·Memorystore only X (<button class="qref" data-id="610">사례 연구 Q10</button>)</td></tr>
    <tr><td>events from multiple regions, process only once + strict chronological order, deduplicate and order before a legacy API</td><td class="strong">Pub/Sub → Dataflow (event ID로 중복 제거 + event time·watermark로 정렬). Pub/Sub 단독은 ordering key 하나·한 리전 안에서만 순서 보장, Cloud Operations Suite는 관측만, Cloud SQL은 저장소 (<button class="qref" data-id="511">5세트 Q11</button>)</td></tr>
    <tr><td>delete objects older than N days automatically, minimal effort</td><td class="strong">Object Lifecycle Management: Delete + age (<button class="qref" data-id="204">2세트 Q4</button>)</td></tr>
    <tr><td>each record has a different expiration date, prevent premature deletion, remove as soon as retention ends</td><td class="strong">Cloud Storage + Object Lifecycle Management(Custom-Time 조건 Delete) + 보존 잠금. Drive 수동·비식별화 영구 보관·야간 스크립트 X (<button class="qref" data-id="505">5세트 Q5</button>)</td></tr>
    <tr><td>rarely accessed, compliance retention for years</td><td class="strong">Cloud Storage Archive + lifecycle / retention policy</td></tr>
    <tr><td>recent N days low latency, older reviewed quarterly, retain for years, minimize cost</td><td class="strong">lifecycle: N일 후 Standard → <b>Coldline</b> (Archive는 연 1회 미만용) (<button class="qref" data-id="332">3세트 Q32</button>)</td></tr>
    <tr><td>ordinary file paths, no copy, dataset in a bucket, ML training</td><td class="strong">Cloud Storage FUSE (<button class="qref" data-id="29">Q29</button>)</td></tr>
    <tr><td>thousands of objects per second, minimize risk of losing records</td><td class="strong">레코드별 개별 업로드(메타데이터 포함) + randomized prefix + 버킷 하나 (<button class="qref" data-id="338">3세트 Q38</button>)</td></tr>
    <tr><td>shared file system, NFS, multiple VMs, home directories, hundreds of rendering workers read and write</td><td class="strong">Filestore 인스턴스 하나 (리전이면 Enterprise) (<button class="qref" data-id="333">3세트 Q33</button>, <button class="qref" data-id="411">4세트 Q11</button>: 확장되는 VM들이 POSIX 파일을 동시에 수정. VM마다 PD·regional PD X, Cloud Storage FUSE는 POSIX 비호환 X)</td></tr>
    <tr><td>earlier copies, accidental overwrite or deletion, roll back</td><td class="strong">Object Versioning (<button class="qref" data-id="34">Q34</button>)</td></tr>
    <tr><td>logs retained for three years, searchable for 30 days, minimize cost, protect from premature deletion</td><td class="strong">Logging sink → Cloud Storage + lifecycle(Coldline) + retention policy + Bucket Lock (BigQuery 30일 파티션 만료 = 삭제 X, <button class="qref" data-id="444">4세트 Q44</button>)</td></tr>
    <tr><td>cannot be deleted or modified for N years, regulatory, even by administrators</td><td class="strong">Retention policy + Bucket Lock (+ Versioning이면 복구까지, <button class="qref" data-id="45">Q45</button>, <button class="qref" data-id="423">4세트 Q23</button>, <button class="qref" data-id="543">5세트 Q43</button>: IAM 역할·ACL·CMEK 키 순환·조직 정책 retentionPolicySeconds 제약만으로는 보존 보장 X)</td></tr>
    <tr><td>metrics preserved for 7 years, regulatory dispute or legal proceeding</td><td class="strong">Cloud Monitoring 지표 → Cloud Storage 내보내기 + retention policy + Bucket Lock (기본 보존 최대 24개월 X, 자주 분석 안 하면 BigQuery보다 Cloud Storage) (<button class="qref" data-id="403">4세트 Q3</button>)</td></tr>
    <tr><td>queries / bytes per user in BigQuery, last N days (≤180)</td><td class="strong">INFORMATION_SCHEMA.JOBS (<button class="qref" data-id="42">Q42</button>, <button class="qref" data-id="1">Q1</button>)</td></tr>
  </tbody></table></div>
  <p>참고: Dataflow(스트림·배치 가공), Dataproc(Hadoop·Spark), Pub/Sub(메시지 전달)는 <b>저장소가 아니라 처리·전달 도구</b>입니다. “어디에 저장하나” 문제에서 끼워 넣는 오답으로 자주 나옵니다.</p>
</section>`
}
,
{
  id: "serverless",
  title: "서버리스 (App Engine · Cloud Run)",
  updated: "2026-10-13",
  related: [13, 16, 18, 40, 201, 210, 216, 230, 306, 307, 310, 326, 336, 348, 414, 432, 448, 508, 509, 510, 533, 603, 618, 658],
  html: `
<section>
  <h2>1. 큰 그림: 서버리스란</h2>
  <p><b>Serverless</b>(서버리스)는 서버가 없다는 뜻이 아니라 <mark>서버를 내가 관리하지 않는다</mark>는 뜻입니다. 코드나 컨테이너만 올리면 확장, 패치, 헬스 체크, 로드 밸런싱은 Google이 합니다. 요청이 없으면 <b>0까지 줄어</b> 비용도 거의 나오지 않습니다.</p>
  <p><b>관리 범위로 본 컴퓨팅 서비스</b>: 아래로 갈수록 내가 관리할 게 줄어듭니다.</p>
  <div class="tbl"><table><thead><tr><th>분류</th><th>서비스</th><th>내가 올리는 것</th><th>내가 관리하는 것</th></tr></thead><tbody>
    <tr><td class="strong">IaaS (Infrastructure as a Service, 인프라 서비스)</td><td>Compute Engine (+MIG)</td><td>VM 이미지</td><td>OS, 패치, 확장 설정, 앱</td></tr>
    <tr><td class="strong">CaaS (Containers as a Service, 컨테이너 서비스)</td><td>GKE</td><td>컨테이너 + Kubernetes YAML</td><td>클러스터·Kubernetes 오브젝트, 앱</td></tr>
    <tr><td class="strong">서버리스 컨테이너</td><td><b>Cloud Run</b></td><td>컨테이너 이미지 (또는 소스)</td><td>앱만</td></tr>
    <tr><td class="strong">PaaS (Platform as a Service, 플랫폼 서비스)</td><td><b>App Engine</b></td><td>소스 코드 + <code>app.yaml</code></td><td>앱만</td></tr>
    <tr><td class="strong">FaaS (Functions as a Service, 함수 서비스)</td><td><b>Cloud Run functions</b> (옛 Cloud Functions)</td><td>함수 코드</td><td>함수만</td></tr>
  </tbody></table></div>
  <p>시험 문장 신호: <mark>“without provisioning servers / managing OS / maintaining clusters”</mark>, <mark>“minimal operational overhead”</mark>, <mark>“scale to zero”</mark>가 보이면 서버리스 쪽부터 검토합니다 (<button class="qref" data-id="13">Q13</button>).</p>
</section>

<section>
  <h2>2. App Engine 구조</h2>
  <pre><code>Project
└─ Application (프로젝트당 딱 1개, 리전은 처음 정하면 변경 불가)
   └─ Service (기능별 단위: default, api, admin ...)
      └─ Version (배포본: v1, v2 ... 동시에 여러 개 공존 가능)
         └─ Instance (실제 실행 단위, 자동 확장)</code></pre>
  <p>핵심: <mark>새로 배포할 때마다 version이 하나 생기고, 옛 version은 지우기 전까지 남습니다.</mark> 그래서 트래픽 비율만 바꾸면 canary·롤백이 됩니다 (4번 참고).</p>
  <div class="tbl"><table><thead><tr><th>파일·명령</th><th>역할</th></tr></thead><tbody>
    <tr><td class="strong"><code>app.yaml</code></td><td>service 설정 (runtime, 확장 방식, 인스턴스 클래스)</td></tr>
    <tr><td class="strong"><code>dispatch.yaml</code></td><td>URL 경로별로 어느 service로 보낼지 (<code>/api/*</code> → api service)</td></tr>
    <tr><td class="strong"><code>cron.yaml</code></td><td>정해진 시각에 URL 호출 (정기 작업). App Engine Cron Service. 핸들러가 <b>Pub/Sub에 발행</b>하면 다른 곳(Compute Engine 등)의 처리기와 느슨하게 결합 (<button class="qref" data-id="533">5세트 Q33</button>)</td></tr>
    <tr><td class="strong"><code>gcloud app deploy</code></td><td>배포. <code>--no-promote</code>면 트래픽 없이 배포만</td></tr>
  </tbody></table></div>
</section>

<section>
  <h2>3. App Engine standard vs flexible <button class="qref" data-id="16">Q16</button> <button class="qref" data-id="348">3세트 Q48</button></h2>
  <p>이름만 보면 flexible(유연한)이 좋아 보이지만, <mark>standard가 기본이고 flexible은 특수한 경우용</mark>입니다. flexible의 “유연”은 “실행 환경을 마음대로 바꿀 수 있다”는 뜻이지 “트래픽 변화에 유연하다”가 아닙니다.</p>
  <div class="tbl"><table><thead><tr><th>항목</th><th>standard</th><th>flexible</th></tr></thead><tbody>
    <tr><td class="strong">돌아가는 곳</td><td>Google 관리 샌드박스</td><td>Compute Engine VM(Virtual Machine, 가상 머신) 위 Docker</td></tr>
    <tr><td class="strong">인스턴스 기동</td><td><b>수 초</b></td><td><b>수 분</b></td></tr>
    <tr><td class="strong">0까지 축소</td><td><b>O</b></td><td><b>X</b> (버전마다 최소 1개)</td></tr>
    <tr><td class="strong">언어</td><td>사전 구성 runtime: Go, Java, Python, Node.js, PHP, Ruby</td><td>위 언어 + custom runtime(Dockerfile)으로 아무 언어나</td></tr>
    <tr><td class="strong">OS 패키지·네이티브 라이브러리</td><td>설치 불가</td><td>설치 가능</td></tr>
    <tr><td class="strong">VM SSH 접속</td><td>불가</td><td>가능</td></tr>
    <tr><td class="strong">내 VPC·온프레미스 사설 IP</td><td><b>VPC 밖</b> → 커넥터(Serverless VPC Access / Direct VPC egress) + VPN 필요 (<button class="qref" data-id="509">5세트 Q9</button>)</td><td><b>VPC 안 VM</b> → VPN만으로 내부 IP 연결 (<button class="qref" data-id="348">3세트 Q48</button>)</td></tr>
    <tr><td class="strong">과금</td><td>인스턴스 시간</td><td>VM의 vCPU·메모리·디스크</td></tr>
  </tbody></table></div>
  <p><b>확장 방식</b> (<code>app.yaml</code>의 scaling):</p>
  <div class="tbl"><table><thead><tr><th>방식</th><th>동작</th><th>용도</th></tr></thead><tbody>
    <tr><td class="strong">automatic</td><td>요청률·지연 시간으로 자동 증감, 0까지 가능</td><td>일반 웹·API (기본값)</td></tr>
    <tr><td class="strong">basic</td><td>요청이 오면 띄우고, 한동안 없으면 끔</td><td>간헐적 작업</td></tr>
    <tr><td class="strong">manual</td><td>지정한 개수를 계속 유지</td><td>메모리에 상태를 오래 들고 있어야 하는 작업</td></tr>
  </tbody></table></div>
  <p><b>App Engine Memcache와 cache-aside</b> <button class="qref" data-id="508">5세트 Q8</button>: App Engine standard에 붙은 메모리 캐시(legacy bundled service, 새 앱은 Memorystore). “자주 요청되는 Cloud SQL 조회를 줄이고 빠르게” → <mark>dedicated Memcache + 쿼리·파라미터 해시를 키로 cache-aside</mark>(먼저 캐시 확인 → miss면 DB 조회 후 만료 시간과 함께 저장).</p>
  <div class="tbl"><table><thead><tr><th>선택지</th><th>좋은 쪽</th><th>나쁜 쪽</th></tr></thead><tbody>
    <tr><td class="strong">등급</td><td><b>dedicated</b>: 앱 전용 용량, 적중률 예측 가능</td><td>shared: 무료지만 best-effort, 언제든 밀려남</td></tr>
    <tr><td class="strong">키 설계</td><td><b>결과마다 고유 키</b>. 해시는 결정적이라 같은 쿼리+파라미터 = 항상 같은 키 → 재사용</td><td>단일 키(<code>cached_schedules</code>): 하나 보려고 전부 역직렬화, 동시 쓰기 덮어씀, 밀려나면 전부 소실</td></tr>
    <tr><td class="strong">채우는 시점</td><td><b>요청 시</b>(cache-aside): 실제 쓰이는 것만</td><td>cron으로 주기적 미리 채우기: 안 쓰는 결과도 DB 조회</td></tr>
  </tbody></table></div>
</section>

<section>
  <h2>4. 트래픽 분할과 배포 전략 <button class="qref" data-id="18">Q18</button> <button class="qref" data-id="306">3세트 Q6</button> <button class="qref" data-id="310">3세트 Q10</button></h2>
  <p>한 service 안에서 <b>version별 비율</b>로 요청을 나누는 내장 기능입니다. LB(Load Balancer, 부하 분산기)나 VPC를 따로 만들 필요가 없습니다.</p>
  <pre><code>gcloud app deploy --version=v2 --no-promote     # 배포만, 트래픽 0
gcloud app services set-traffic default \\
    --splits=v1=0.95,v2=0.05 --split-by=cookie  # canary 5%
gcloud app services set-traffic default --splits=v2=1   # 전체 전환 (migrate)
gcloud app services set-traffic default --splits=v1=1   # 롤백</code></pre>
  <p><b>배포와 승격을 다른 팀이</b> <button class="qref" data-id="310">3세트 Q10</button>: “개발자는 트래픽 없이 운영에 배포·테스트, 외부 운영사가 승인된 version을 승격, 인프라 관리 없음”이면 <mark>App Engine</mark>. 새 version은 <code>v2-dot-SERVICE-dot-PROJECT.appspot.com</code> 같은 version 전용 URL로 테스트합니다.</p>
  <div class="tbl"><table><thead><tr><th>역할</th><th>할 수 있음</th><th>할 수 없음</th></tr></thead><tbody>
    <tr><td class="strong">App Engine Deployer</td><td>version 배포·삭제 (<code>--no-promote</code>)</td><td>트래픽 배분 변경</td></tr>
    <tr><td class="strong">App Engine Service Admin</td><td>트래픽 배분·migrate, version 시작/중지</td><td>코드 배포</td></tr>
  </tbody></table></div>
  <div class="tbl"><table><thead><tr><th>분할 기준</th><th>특징</th></tr></thead><tbody>
    <tr><td class="strong">cookie</td><td>같은 사용자는 계속 같은 version. 세션 있는 웹사이트에 적합</td></tr>
    <tr><td class="strong">ip</td><td>같은 IP는 같은 version. IP가 바뀌면 흔들림</td></tr>
    <tr><td class="strong">random</td><td>요청마다 무작위. 상태 없는 API에 적합</td></tr>
  </tbody></table></div>
  <p><b>배포 전략 용어</b></p>
  <div class="tbl"><table><thead><tr><th>전략</th><th>방식</th></tr></thead><tbody>
    <tr><td class="strong">Canary</td><td>새 버전에 일부 트래픽(예: 5%)만 보내 검증 후 늘림</td></tr>
    <tr><td class="strong">Rolling</td><td>인스턴스를 몇 대씩 차례로 새 버전으로 교체</td></tr>
    <tr><td class="strong">Blue/Green</td><td>새 환경을 통째로 준비하고 한 번에 전환, 문제 시 즉시 복귀</td></tr>
    <tr><td class="strong">A/B test</td><td>사용자 그룹별로 다른 버전을 보여 주고 비즈니스 지표 비교</td></tr>
  </tbody></table></div>
  <p><b>플랫폼별 canary 도구</b>: 문제의 플랫폼에 맞는 도구인지가 정답을 가릅니다.</p>
  <div class="tbl"><table><thead><tr><th>플랫폼</th><th>canary 방법</th></tr></thead><tbody>
    <tr><td class="strong">App Engine</td><td>같은 service에 새 <b>version</b> + traffic splitting</td></tr>
    <tr><td class="strong">Cloud Run · Knative serving</td><td>같은 service에 새 <b>revision</b>(<code>--no-traffic</code>) + revision별 트래픽 % (예: <code>update-traffic --to-revisions=new=8,old=92</code>). Knative serving은 GKE 위의 Cloud Run(옛 Cloud Run for Anthos)이라 방식이 같음. 별도 service + 외부 LB, 서비스 메시 추가는 과함 (<button class="qref" data-id="306">3세트 Q6</button>)</td></tr>
    <tr><td class="strong">Compute Engine</td><td><b>MIG</b>(Managed Instance Group, 관리형 인스턴스 그룹) rolling update, 두 번째 템플릿에 <code>targetSize</code></td></tr>
    <tr><td class="strong">GKE</td><td>Deployment rolling update, 비율 분할은 Gateway API·Cloud Service Mesh·Cloud Deploy</td></tr>
  </tbody></table></div>
</section>

<section>
  <h2>5. Cloud Run</h2>
  <p><b>컨테이너를 올리면 URL이 생기고, 요청에 맞춰 자동 확장하며 0까지 줄어드는</b> 서버리스입니다. 컨테이너라서 언어·라이브러리 제약이 없습니다. 요즘 Google이 권장하는 신규 서버리스 선택지입니다.</p>
  <div class="tbl"><table><thead><tr><th>형태</th><th>용도</th></tr></thead><tbody>
    <tr><td class="strong">Cloud Run services</td><td>HTTP 요청을 받는 웹·API. 요청이 없으면 0</td></tr>
    <tr><td class="strong">Cloud Run jobs</td><td>요청 없이 실행하고 끝나는 배치 작업 (Cloud Scheduler로 정기 실행)</td></tr>
    <tr><td class="strong">Cloud Run functions</td><td>이벤트(Pub/Sub 메시지, Cloud Storage 업로드 등)에 반응하는 짧은 함수. 옛 이름 Cloud Functions</td></tr>
  </tbody></table></div>
  <div class="tbl"><table><thead><tr><th>설정·용어</th><th>의미</th></tr></thead><tbody>
    <tr><td class="strong">Revision</td><td>배포할 때마다 생기는 불변 스냅샷. App Engine의 version에 해당</td></tr>
    <tr><td class="strong">Concurrency</td><td>인스턴스 1개가 동시에 처리하는 요청 수 (기본 80). App Engine standard보다 인스턴스 효율이 좋은 이유</td></tr>
    <tr><td class="strong">min-instances</td><td>최소 인스턴스 수. 1 이상이면 cold start(0에서 첫 요청 시 기동 지연)를 피함, 대신 상시 비용</td></tr>
    <tr><td class="strong">max-instances</td><td>최대 인스턴스 수. 뒤쪽 DB가 연결 폭주로 죽지 않게 상한</td></tr>
    <tr><td class="strong">Ingress</td><td>누가 호출할 수 있나: <code>All</code>(기본, run.app 직접 포함) / <code>Internal</code>(VPC 내부만) / <code>Internal and Cloud Load Balancing</code>(내부 + 외부 Application LB 경유만). “Cloud Armor를 반드시 거치게, run.app 우회 차단”이면 마지막 것 + serverless NEG (<button class="qref" data-id="216">2세트 Q16</button>)</td></tr>
    <tr><td class="strong">VPC 연결</td><td>Cloud Run은 <b>VPC 밖</b>에서 돌므로 사설 IP의 Cloud SQL·AlloyDB·Memorystore에 바로 못 감. <mark>Direct VPC egress</mark>(connector 없이 서브넷 직접 사용, 신규 권장) 또는 Serverless VPC Access connector로 VPC 안으로 가는 길을 만듦. 같은 리전·연결 문자열 변경·DB 교체로는 길이 안 생김 (<button class="qref" data-id="307">3세트 Q7</button>)</td></tr>
    <tr><td class="strong">Service identity</td><td>서비스마다 전용 서비스 계정을 붙여 최소 권한으로 API 호출 (키 파일 불필요)</td></tr>
  </tbody></table></div>
  <p><b>GitHub → Cloud Run 자동 배포</b> <button class="qref" data-id="40">Q40</button>: <mark>Cloud Build GitHub integration으로 저장소 연결 → production 브랜치 push 트리거 → build → Artifact Registry push → <code>gcloud run deploy</code></mark>. Cloud Build는 자기 서비스 계정으로 인증하므로 키를 저장할 필요가 없습니다. Cloud Run 콘솔의 “Continuous deployment 설정”도 내부적으로 이 트리거를 만들어 줍니다. GitHub Actions를 쓸 거라면 키 대신 <b>Workload Identity Federation</b>.</p>
</section>

<section>
  <h2>6. App Engine vs Cloud Run vs 나머지: 어떻게 고르나 <button class="qref" data-id="230">2세트 Q30</button></h2>
  <div class="tbl"><table><thead><tr><th>문제 속 조건</th><th>선택</th></tr></thead><tbody>
    <tr><td>컨테이너, HTTP, 서버 관리 싫음, 0까지 축소</td><td class="strong">Cloud Run</td></tr>
    <tr><td>stateless 컨테이너, 몇 초 만에 급증, 무중단 배포 + 점진 검증 + 빠른 롤백</td><td class="strong">Cloud Run (요청 기반 자동 확장 + revision 트래픽 분할). GKE Recreate(중단), VM 1대(단일 장애점), MIG + CPU 확장(관리 부담·반응 늦음)은 X (<button class="qref" data-id="326">3세트 Q26</button>)</td></tr>
    <tr><td>소스 코드만 배포, 지원 언어, 급증·0 축소 (선택지에 Cloud Run 없음)</td><td class="strong">App Engine standard (<button class="qref" data-id="16">Q16</button>)</td></tr>
    <tr><td>App Engine인데 비지원 언어·OS 패키지·네이티브 라이브러리</td><td class="strong">App Engine flexible</td></tr>
    <tr><td>이벤트(파일 업로드, 메시지)에 반응하는 짧은 처리</td><td class="strong">Cloud Run functions</td></tr>
    <tr><td>fully managed + 요청 없으면 0 축소 + 유휴 비용 없음 (영업시간만 쓰는 MVP)</td><td class="strong">Cloud Run functions / Cloud Run / App Engine standard 중 보기에 있는 것. flexible·Compute Engine·GKE는 X (<button class="qref" data-id="230">2세트 Q30</button>)</td></tr>
    <tr><td>초당 수십만 요청 피크 + 몇 시간씩 요청 0 + 비용 최소 (DB는 Bigtable)</td><td class="strong">Cloud Run (요청 기반 확장 + 0 축소). Compute Engine MIG는 VM 관리·느린 확장·유휴 비용 (<button class="qref" data-id="414">4세트 Q14</button>)</td></tr>
    <tr><td>정기 배치, HTTP 없이 실행 후 종료</td><td class="strong">Cloud Run jobs + Cloud Scheduler</td></tr>
    <tr><td>Compute Engine 처리기를 정기 실행 + <b>loose coupling</b> + 운영 최소</td><td class="strong">관리형 cron(App Engine Cron Service / Cloud Scheduler) → <b>Pub/Sub topic</b> → CE가 구독. 직접 호출(강한 결합, 처리기 다운 시 유실)·스케줄링만을 위한 GKE CronJob(클러스터 운영) X. 소비자는 멱등 처리 (<button class="qref" data-id="533">5세트 Q33</button>)</td></tr>
    <tr><td>Kubernetes 이식성, 사이드카·복잡한 마이크로서비스, 세밀한 제어</td><td class="strong">GKE (Autopilot)</td></tr>
    <tr><td>OS 제어, GPU 특수 구성, 레거시·상주 프로세스</td><td class="strong">Compute Engine + MIG</td></tr>
    <tr><td>Linux VM에서 도는 네이티브 프로그램(C++ 테스트·배치)을 재작성 없이 더 많이 병렬로</td><td class="strong">Compute Engine MIG + autoscaling. App Engine(HTTP 요청 기반, 런타임 제한)·Dataproc(Hadoop 작업으로 재작성)은 X (<button class="qref" data-id="336">3세트 Q36</button>)</td></tr>
  </tbody></table></div>
  <p><b>관리 책임 사다리</b> <button class="qref" data-id="201">2세트 Q1</button>: Compute Engine VM(전부 내가) → MIG(확장만 자동, OS는 내가) → GKE Standard(노드 관리) → <mark>GKE Autopilot · App Engine standard · Cloud Run</mark>(코드·컨테이너만). “서버·노드·OS 관리 최소 + 자동 확장”이면 맨 끝 칸에서 고릅니다.</p>
  <p><b>단, 시험은 보기 안에서의 상대 평가</b> (<button class="qref" data-id="210">2세트 Q10</button>): 2세트 Q1에선 더 나은 보기(GKE Autopilot)가 있어 MIG가 오답이었지만, 2세트 Q10에선 경쟁 보기가 <mark>Persistent Disk를 DB로 사용</mark>, <mark>VM 한 대</mark>처럼 치명적 결함이 있어 <b>MIG autoscaling + Bigtable</b>이 차선 정답이 됐습니다. 두 개 고르기는 치명적 결함 보기부터 지우세요.</p>
  <p>비유: App Engine standard는 <b>가구 딸린 원룸</b>(짐만 들고 입주), flexible은 <b>빈 사무실 임대</b>(인테리어 자유, 대신 준비가 오래 걸리고 비워도 임대료), Cloud Run은 <b>공유 오피스</b>(내 짐(컨테이너)을 들고 가면 쓴 만큼만 냄), GKE는 <b>건물 통째 관리</b>입니다.</p>
  <p><b>연결·조율 서비스 고르기</b> <button class="qref" data-id="510">5세트 Q10</button>: “Salesforce·ServiceNow·Cloud SQL을 연결 + 서로 다른 스키마의 필드 매핑·변환 + 준실시간 동기화 + <b>application-to-application integration</b>용 관리형” → <mark>Application Integration + Integration Connectors + data mapping</mark>(Google Cloud의 iPaaS(Integration Platform as a Service, 통합 플랫폼 서비스)). 여러 채널(주문·정비·차내)의 고객 데이터를 CRM·레거시 ERP·분석에 나눠 주면서 사일로를 만들지 않으려면 <mark>고객 ID를 표준화한 이벤트 기반 통합 계층(Pub/Sub 백본)</mark>을 두고, SaaS CRM과의 매핑은 Application Integration이 맡습니다 <button class="qref" data-id="658">사례 연구 Q58</button>.</p>
  <div class="tbl"><table><thead><tr><th>서비스</th><th>한마디로</th><th>언제</th></tr></thead><tbody>
    <tr><td class="strong">Application Integration</td><td>업무 앱끼리 통역사</td><td>SaaS·DB 커넥터, 필드 매핑·변환, 동기화</td></tr>
    <tr><td class="strong">Workflows</td><td>서비스 호출 순서 지휘자</td><td>Cloud Run·API를 단계별 호출(재시도·분기). 매핑은 직접 코딩</td></tr>
    <tr><td class="strong">Eventarc</td><td>이벤트 배달부</td><td>버킷 업로드·감사 로그 등 이벤트를 Cloud Run 등에 전달</td></tr>
    <tr><td class="strong">Pub/Sub</td><td>메시지 우체통</td><td>비동기 메시지 전달. 커넥터·변환 없음</td></tr>
    <tr><td class="strong">Datastream</td><td>DB 변경분 복사기(CDC)</td><td>MySQL·PostgreSQL·Oracle·SQL Server·MongoDB 등 → BigQuery·Cloud Storage (분석용 통합 <button class="qref" data-id="618">사례 연구 Q18</button>). 앱 간 필드 매핑·동기화는 X</td></tr>
    <tr><td class="strong">Cloud Composer</td><td>배치 파이프라인 스케줄러(Airflow)</td><td>ETL 작업 의존성·일정 관리</td></tr>
  </tbody></table></div>
  <p><b>업로드 이벤트 + 사전 학습 AI API</b> <button class="qref" data-id="603">사례 연구 Q3</button>: “업로드된 영상·음성의 유해 콘텐츠 탐지 + 자동 확장 + 이벤트 기반 + 감사용 예측 기록” → <mark>Cloud Storage 업로드 → Eventarc → Cloud Run → Video Intelligence API·Cloud Speech-to-Text API, 결과는 BigQuery</mark>. 모델 학습·서버 운영 없이 API와 Cloud Run이 자동 확장합니다. 함정은 <b>예약 BigQuery ML</b>: BigQuery ML은 BigQuery 테이블의 정형 데이터를 SQL로 다루는 도구라 동영상·오디오를 직접 분석하지 못하고, “scheduled”는 이벤트 기반이 아닙니다. BigQuery는 결과를 <b>저장</b>하는 자리입니다.</p>
</section>

<section>
  <h2>7. 시험 함정 모음</h2>
  <div class="tbl"><table><thead><tr><th>함정</th><th>기억할 것</th></tr></thead><tbody>
    <tr><td>App Engine → VPN 너머 온프레미스 DB에 Private Google Access / 온프레미스용 Private Google Access / private services access?</td><td>앞의 둘은 목적지가 Google API, PSA는 Google 관리형 서비스 producer 네트워크용. 서버리스를 VPC에 넣는 <b>Serverless VPC Access connector</b>(또는 Direct VPC egress) (<button class="qref" data-id="509">5세트 Q9</button>)</td></tr>
    <tr><td>Memcache 해시 키는 요청마다 달라져 캐시가 안 쌓인다? 단일 키가 깔끔하다?</td><td>해시는 결정적: 같은 쿼리+파라미터 = 같은 키. 단일 키는 통째 역직렬화·덮어쓰기·한꺼번에 소실. <b>dedicated + 해시 키 cache-aside</b> (<button class="qref" data-id="508">5세트 Q8</button>)</td></tr>
    <tr><td>“수백만 사용자”니까 GKE?</td><td>규모는 변별력 없음. <b>“without clusters”</b>면 서버리스 (<button class="qref" data-id="13">Q13</button>)</td></tr>
    <tr><td>“flexible”이니까 확장에 유리?</td><td>flexible은 VM이라 <b>기동 느림 + 0 불가</b>. 급증·0 축소면 standard (<button class="qref" data-id="16">Q16</button>)</td></tr>
    <tr><td>Knative serving canary → 새 버전을 별도 service로 + 외부 LB로 분할?</td><td>새 버전은 <b>같은 service의 새 revision</b>, 비율 분할은 내장 (<button class="qref" data-id="306">3세트 Q6</button>)</td></tr>
    <tr><td>App Engine canary에 MIG rolling update?</td><td>MIG는 Compute Engine 전용. <b>version + traffic splitting</b> (<button class="qref" data-id="18">Q18</button>)</td></tr>
    <tr><td>“트래픽 없이 운영에 배포 + 다른 팀이 승격”에 GKE·Compute Engine?</td><td>구현은 가능하지만 승격 절차·라우팅을 직접 만들어야 함. “avoid managing infrastructure”면 <b>App Engine version + Deployer / Service Admin</b> (<button class="qref" data-id="310">3세트 Q10</button>)</td></tr>
    <tr><td>canary를 위해 별도 App Engine application + LB?</td><td>application은 프로젝트당 1개. <b>같은 service의 version</b>으로 (<button class="qref" data-id="18">Q18</button>)</td></tr>
    <tr><td>Cloud Run에 IAP를 켜면 LB·Cloud Armor 우회가 막힌다?</td><td>IAP는 사용자 인증일 뿐 WAF도 아니고 LB 경유도 강제하지 않음. <b>ingress Internal and Cloud Load Balancing</b> (<button class="qref" data-id="216">2세트 Q16</button>)</td></tr>
    <tr><td>Cloud Endpoints로 앱을 호스팅?</td><td>Endpoints는 API 관리(인증·할당량)일 뿐, 앱은 다른 곳에서 돎 (<button class="qref" data-id="13">Q13</button>)</td></tr>
    <tr><td>App Engine standard + “Cloud VPN만”으로 온프레미스 사설 DB / App Engine firewall로 공개 DB 제한</td><td>standard는 VPC 밖이라 커넥터도 필요, App Engine firewall은 <b>들어오는</b> 요청용. 보기 중 완전한 건 <b>flexible + Cloud VPN</b> (<button class="qref" data-id="348">3세트 Q48</button>)</td></tr>
    <tr><td>서버리스에서 사설 IP Cloud SQL·AlloyDB 접속이 안 됨 → 같은 리전으로 옮기기 / 공개 IP 제거 / DB 교체?</td><td>모두 경로를 안 만듦. <b>Direct VPC egress / Serverless VPC Access connector</b> (<button class="qref" data-id="307">3세트 Q7</button>)</td></tr>
    <tr><td>“유휴 비용 없이 0 축소”에 App Engine flexible / GKE (Pod 0개)</td><td>flexible은 버전마다 최소 1개 VM, GKE는 Pod를 0으로 해도 클러스터 비용이 남음. <b>Cloud Run functions</b> 등 (<button class="qref" data-id="230">2세트 Q30</button>)</td></tr>
    <tr><td>API는 Cloud Run이니 DB는 Cloud SQL이어도 “유휴 비용 없음”?</td><td>Cloud SQL·Spanner는 인스턴스가 <b>상시 과금</b>(HA면 standby 추가). 조건은 <b>스택 전체</b>에 걸림 → <b>Cloud Storage backend bucket + Cloud Run functions + Firestore</b>. Cloud CDN은 캐시일 뿐 오리진이 아님 (<button class="qref" data-id="432">4세트 Q32</button>)</td></tr>
    <tr><td>관리형이 편하니 VM용 C++ 배치·테스트도 App Engine으로?</td><td>App Engine은 <b>웹 요청에 응답</b>하는 플랫폼(런타임·요청 시간 제한). 기존 VM 프로그램은 <b>Compute Engine MIG</b>가 재작성 최소 (<button class="qref" data-id="336">3세트 Q36</button>)</td></tr>
    <tr><td>첫 요청이 느림(cold start)</td><td><b>min-instances</b>(Cloud Run) / <code>min_instances</code>(App Engine)를 1 이상</td></tr>
    <tr><td>컨테이너 앱을 여러 리전에서 + 관리 최소 → 리전마다 GKE 클러스터 / 단일 GKE + 글로벌 LB?</td><td>GKE 여러 개는 클러스터 관리 부담, 단일 클러스터는 한 리전에 묶임. <b>리전별 Cloud Run + serverless NEG + 글로벌 외부 Application LB</b>, DB는 multi-region Spanner (<button class="qref" data-id="448">4세트 Q48</button>)</td></tr>
    <tr><td>App Engine 리전을 바꾸고 싶음</td><td>변경 불가. <b>새 프로젝트</b>에 다시 만들어야 함</td></tr>
    <tr><td>Cloud Run 배포에 Config Sync?</td><td>Config Sync는 Kubernetes(GKE) 구성 동기화용. Cloud Run은 Cloud Build에서 <b><code>gcloud run deploy</code></b> (<button class="qref" data-id="40">Q40</button>)</td></tr>
    <tr><td>CI/CD 인증용 서비스 계정 키를 저장소나 Secret Manager에?</td><td>Cloud Build는 <b>자기 서비스 계정</b>으로 충분. 외부 CI는 <b>Workload Identity Federation</b> (<button class="qref" data-id="40">Q40</button>)</td></tr>
  </tbody></table></div>
</section>`
}
,
{
  id: "network",
  title: "네트워크 (VPC · 방화벽 · 연결 · 부하 분산)",
  updated: "2026-10-13",
  related: [5, 6, 19, 21, 27, 31, 37, 49, 50, 208, 215, 216, 218, 219, 224, 225, 245, 248, 301, 314, 316, 325, 328, 331, 345, 350, 406, 407, 439, 441, 443, 446, 501, 504, 509, 518, 520, 527, 528, 529, 532, 537, 544, 601, 629, 631, 632, 638, 643, 650, 901, 902, 909, 911, 914, 915],
  html: `
<section>
  <h2>1. 큰 그림: GCP 네트워크의 뼈대</h2>
  <p>GCP 네트워크 문제는 대부분 다음 네 가지 질문 중 하나입니다.</p>
  <div class="tbl"><table><thead><tr><th>질문</th><th>다루는 것</th><th>이 가이드</th></tr></thead><tbody>
    <tr><td class="strong">무엇을 막고 무엇을 통과시키나?</td><td>방화벽 규칙, 우선순위</td><td>3장</td></tr>
    <tr><td class="strong">네트워크끼리 어떻게 잇나?</td><td>VPC ↔ VPC, 온프레미스 ↔ VPC</td><td>4장, 5장</td></tr>
    <tr><td class="strong">외부 IP 없는 VM은 어떻게 드나드나?</td><td>IAP, Cloud NAT, Private Google Access</td><td>6장</td></tr>
    <tr><td class="strong">사용자 트래픽을 어떻게 받나?</td><td>Load Balancer, Cloud CDN</td><td>7장</td></tr>
  </tbody></table></div>
  <p>GCP 네트워크의 가장 큰 특징: <mark>VPC는 글로벌, 서브넷은 리전</mark>. 하나의 VPC 안에 도쿄·오사카·미국 서브넷을 두면 별도 설정 없이 내부 IP로 바로 통신합니다. (AWS는 VPC가 리전 단위라 여기서 많이 헷갈립니다.)</p>
</section>

<section>
  <h2>2. VPC 기본 용어</h2>
  <div class="tbl"><table><thead><tr><th>용어</th><th>의미</th></tr></thead><tbody>
    <tr><td class="strong">VPC (Virtual Private Cloud, 가상 사설 네트워크)</td><td>프로젝트 안의 사설 네트워크. <b>글로벌</b> 리소스</td></tr>
    <tr><td class="strong">Subnet (서브넷)</td><td>VPC 안의 IP 대역. <b>리전</b> 리소스. 예: <code>10.10.0.0/24</code> (asia-northeast1)</td></tr>
    <tr><td class="strong">CIDR (Classless Inter-Domain Routing)</td><td>IP 대역 표기법. <code>/24</code> = 256개, <code>/16</code> = 65,536개. 숫자가 작을수록 넓음</td></tr>
    <tr><td class="strong">Primary / Secondary range</td><td>서브넷의 기본 대역(primary) = VM의 주 내부 IP. 보조 대역(secondary) = <b>GKE Pod·Service IP</b>, VM의 <b>alias IP</b>. <mark>secondary도 subnet route가 생기는 실제 주소</mark>라 온프레미스와 겹치면 똑같이 충돌 (<button class="qref" data-id="527">5세트 Q27</button>)</td></tr>
    <tr><td class="strong">Auto mode / Custom mode VPC</td><td>auto는 리전마다 서브넷 자동 생성(대역 고정 → 겹치기 쉬움). <b>프로덕션은 custom mode</b></td></tr>
    <tr><td class="strong">내부 IP / 외부 IP</td><td>내부 IP는 VPC 안에서만. 외부 IP가 있으면 인터넷에서 직접 도달 가능 → 보안상 없애는 추세</td></tr>
    <tr><td class="strong">Shared VPC</td><td>한 <b>host 프로젝트</b>의 VPC를 여러 <b>service 프로젝트</b>가 같이 씀. 네트워크는 중앙팀, 앱은 각 팀. <b>같은 조직 안</b>에서만. IAM은 프로젝트 단위라 <b>프로젝트를 나눠야 권한이 나뉨</b>(같은 프로젝트의 Compute Admin은 네트워크도 수정 가능). 앱팀은 서브넷에 <code>compute.networkUser</code>만 받아 VM을 붙이기만 함 (<button class="qref" data-id="443">4세트 Q43</button>)</td></tr>
    <tr><td class="strong">Cloud Router</td><td>BGP(Border Gateway Protocol, 경로 교환 프로토콜)로 경로를 자동 교환하는 관리형 라우터. VPN·Interconnect·Cloud NAT에 필요</td></tr>
    <tr><td class="strong">Network tag / Service account</td><td>방화벽 규칙을 “어느 VM에 적용할지” 지정하는 표식. 서비스 계정 기반이 더 안전(태그는 VM 편집 권한만 있으면 바꿀 수 있음)</td></tr>
  </tbody></table></div>
</section>

<section>
  <h2>3. 방화벽 규칙과 우선순위 <button class="qref" data-id="37">Q37</button> <button class="qref" data-id="49">Q49</button> <button class="qref" data-id="218">2세트 Q18</button></h2>
  <p><b>규칙 1. 숫자가 작을수록 먼저</b></p>
  <ul>
    <li>범위 <code>0</code>(가장 먼저) ~ <code>65535</code>(가장 나중), 기본값 <code>1000</code>.</li>
    <li>숫자가 작은 규칙부터 대조해서 <mark>처음 매칭된 규칙의 결과(allow/deny)로 끝</mark>. 뒤 규칙은 보지 않습니다.</li>
    <li>같은 숫자에서 allow와 deny가 둘 다 맞으면 <b>deny 승</b>.</li>
    <li>priority는 “점수”가 아니라 <b>대기 번호</b>. 번호가 빠를수록 먼저 심사받습니다.</li>
  </ul>
  <p><b>규칙 2. 보이지 않는 암묵적 규칙 (65535, 맨 마지막, 삭제 불가)</b></p>
  <div class="tbl"><table><thead><tr><th>방향</th><th>암묵적 규칙</th><th>결과</th><th>그래서</th></tr></thead><tbody>
    <tr><td class="strong">Ingress (들어옴)</td><td>implied <b>deny</b></td><td>규칙 없으면 다 차단</td><td>필요한 것만 <b>allow 추가</b></td></tr>
    <tr><td class="strong">Egress (나감)</td><td>implied <b>allow</b></td><td>규칙 없으면 다 허용</td><td>막으려면 <mark>deny-all egress를 직접 생성</mark></td></tr>
  </tbody></table></div>
  <p><b>Egress 허용 목록 패턴</b> (Q37 정답)</p>
  <pre><code>우선순위  규칙                        AD행            인터넷행
  200     allow egress → 필요한 목적지   ✔ 허용 (끝)     ↓
 1200     deny  egress → 0.0.0.0/0                       ✔ 차단 (끝)
65535     implied allow egress          (도달 안 함)     (도달 안 함)</code></pre>
  <p><b>계층 간 통신 제어 패턴</b> (Q49): 같은 VPC의 3계층(frontend → app → DB)에서 frontend → DB만 막으려면, 계층마다 <b>network tag</b>(또는 서비스 계정)를 붙이고 <mark>필요한 방향만 ingress allow</mark>합니다. ingress는 implied deny라서 규칙이 없는 frontend → DB는 자동 차단. 방화벽은 <b>stateful</b>이라 응답 트래픽용 규칙은 필요 없습니다.</p>
  <pre><code>allow  source-tag=frontend-tier   → target-tag=processing-tier  tcp:8080
allow  source-tag=processing-tier → target-tag=database-tier    tcp:5432
(frontend-tier → database-tier 규칙 없음 = implied deny로 차단)</code></pre>
  <p><b>자동 확장으로 IP가 계속 바뀔 때</b>(<button class="qref" data-id="218">2세트 Q18</button>): IP 대신 역할 이름(tag)으로 규칙을 쓰고, <mark>tag를 인스턴스 템플릿에 넣으면</mark> 새로 생긴 VM에도 규칙이 자동 적용됩니다(규칙 수정 0). DNS 호스트 이름은 방화벽 선택자가 아니고, 서비스 계정을 붙여 “앱에서 인가”하는 건 네트워크 통제가 아닙니다.</p>
  <div class="tbl"><table><thead><tr><th>방화벽 대상 지정</th><th>붙이는 권한</th><th>쓰는 곳</th></tr></thead><tbody>
    <tr><td class="strong">Network tag</td><td>VM 편집 권한이면 누구나</td><td>VPC 방화벽 규칙 (가장 흔한 시험 정답)</td></tr>
    <tr><td class="strong">Service account</td><td>IAM으로 통제 (SA 사용 권한)</td><td>VPC 방화벽 규칙 (더 엄격, 실무 권장)</td></tr>
    <tr><td class="strong">Secure tag</td><td>IAM으로 통제 (tagUser)</td><td>계층형·네트워크 방화벽 정책 (<button class="qref" data-id="215">2세트 Q15</button>)</td></tr>
  </tbody></table></div>
  <div class="tbl"><table><thead><tr><th>도구</th><th>역할</th><th>보안 경계?</th></tr></thead><tbody>
    <tr><td class="strong">Subnet</td><td>IP 대역을 리전·용도별로 나눔. 같은 VPC 서브넷끼리는 자동 경로로 통신됨</td><td>X</td></tr>
    <tr><td class="strong">Route</td><td>패킷을 어디(next hop)로 보낼지</td><td>X</td></tr>
    <tr><td class="strong">VPC firewall rule</td><td>통신 허용·차단 (tag·서비스 계정·IP·포트 기준)</td><td><mark>O</mark></td></tr>
  </tbody></table></div>
  <p><b>방화벽·네트워크 로그 구분</b> (<button class="qref" data-id="208">2세트 Q8</button>)</p>
  <div class="tbl"><table><thead><tr><th>도구</th><th>무엇을</th><th>켜는 단위</th></tr></thead><tbody>
    <tr><td class="strong">Firewall Rules Logging</td><td>어떤 <b>규칙</b>이 어떤 연결을 허용/거부했나</td><td><mark>규칙마다</mark> (기본 꺼짐)</td></tr>
    <tr><td class="strong">Firewall Insights</td><td>위 로그를 분석해 안 쓰이는·너무 넓은·가려진(shadowed) 규칙을 알려 줌. 로그가 없으면 빈 화면</td><td>-</td></tr>
    <tr><td class="strong">VPC Flow Logs</td><td>VM이 주고받은 <b>네트워크 흐름</b>(샘플링). Flow Analyzer로 분석</td><td>서브넷마다 (기본 꺼짐)</td></tr>
    <tr><td class="strong">Connectivity Tests</td><td>설정만 보고 A→B가 왜 안 되는지 진단</td><td>-</td></tr>
  </tbody></table></div>
  <p><b>계층형 방화벽 정책</b>: 조직·폴더 수준의 Hierarchical firewall policy가 <b>VPC 규칙보다 먼저</b> 평가됩니다. 결과로 allow / deny / <code>goto_next</code>(아래 수준에 위임)를 줄 수 있어, “조직 전체에서 이 포트는 절대 금지” 같은 규칙을 강제할 때 씁니다.</p>
  <ul>
    <li><b>“중앙 관리 · 기존과 미래 프로젝트에 자동 적용 · 프로젝트 관리자가 덮어쓸 수 없음”</b> = 계층형 방화벽 정책. 프로젝트별 VPC 규칙(Terraform으로 배포해도)은 프로젝트 관리자가 바꿀 수 있어 탈락.</li>
    <li><b>붙이는 위치는 요건 범위에 딱 맞게</b>: “운영 환경만”이면 운영 폴더마다, 조직 루트에 걸면 개발·사전 운영까지 막힘.</li>
    <li><b>대상 지정은 secure tag</b>: IAM으로 붙일 권한을 통제할 수 있어 “승인된 VM만 443 허용”이 가능. network tag는 VM 편집 권한만 있으면 누구나 붙임.</li>
    <li><b>Organization Policy는 방화벽이 아님</b>: 외부 IP 금지(<code>compute.vmExternalIpAccess</code>)는 설정을 막을 뿐, 포트·출발지·대상 규칙은 표현 못 함 (<button class="qref" data-id="215">2세트 Q15</button>).</li>
  </ul>
</section>

<section>
  <h2>4. VPC와 VPC 연결 <button class="qref" data-id="5">Q5</button> <button class="qref" data-id="27">Q27</button> <button class="qref" data-id="225">2세트 Q25</button> <button class="qref" data-id="248">2세트 Q48</button></h2>
  <div class="tbl"><table><thead><tr><th>방식</th><th>특징</th><th>IP 대역 겹침</th><th>언제</th></tr></thead><tbody>
    <tr><td class="strong">VPC Network Peering</td><td>Google 내부망으로 직결. 지연 낮고 게이트웨이 비용 없음. 다른 조직 간도 가능. <b>전이 라우팅 안 됨</b>(A–B, B–C 연결해도 A–C 불가)</td><td><mark>하나라도 겹치면 불가</mark> (모든 서브넷 경로를 통째로 교환)</td><td>대역이 전혀 안 겹치는 두 VPC (Q5)</td></tr>
    <tr><td class="strong">HA VPN + Cloud Router</td><td>IPsec 암호화 터널. 99.99% SLA(Service Level Agreement, 서비스 수준 약정)(터널 2개). 터널당 약 3Gbps</td><td>광고할 대역을 <b>골라서</b> 교환 → 겹치는 대역은 빼면 됨</td><td>일부 대역이 겹치는 두 VPC (Q27)</td></tr>
    <tr><td class="strong">Private Service Connect</td><td>특정 서비스 하나만 엔드포인트(내부 IP)로 게시·소비</td><td>상관없음</td><td>“서비스 하나만” 다른 VPC·조직에 제공</td></tr>
    <tr><td class="strong">Shared VPC</td><td>애초에 네트워크 하나를 여러 프로젝트가 공유. <b>같은 네트워크라 프로젝트끼리 경로가 있음</b>(격리는 방화벽에 의존)</td><td>해당 없음</td><td>같은 조직 안의 여러 프로젝트, 중앙 관리 + 내부 통신 허용</td></tr>
    <tr><td class="strong">Network Connectivity Center</td><td>허브 앤 스포크로 여러 VPC·온프레미스를 묶음</td><td>허브 설정에 따름</td><td>연결할 네트워크가 많을 때</td></tr>
    <tr><td class="strong">다중 NIC VM</td><td>VM 하나에 NIC(Network Interface Card, 네트워크 인터페이스)를 여러 개 달아 각각 다른 VPC 서브넷에 직접 연결. <b>VPC끼리는 연결되지 않음</b></td><td>안 겹쳐야 함 (VM 안에서 라우팅)</td><td>VPC는 격리, <mark>VM 하나만 예외</mark> (<button class="qref" data-id="225">2세트 Q25</button>)</td></tr>
  </tbody></table></div>
  <p><b>연결 범위로 고르기</b> (<button class="qref" data-id="225">2세트 Q25</button>): Peering·VPN·NCC는 <b>네트워크 전체</b>를 잇고, 다중 NIC는 <b>VM 하나</b>만 여러 VPC에 걸칩니다. 다중 NIC 제약: NIC는 VM 생성 때만 추가 가능(기존 VM이면 새로 만들어 교체), 각 NIC는 서로 다른 VPC, 서브넷은 VM과 같은 리전, 응답이 맞는 NIC로 나가도록 게스트 OS 정책 라우팅 필요. <b>Cloud Router</b>는 BGP로 경로를 알려 주는 안내원일 뿐, VPN·Interconnect 같은 연결 없이 혼자서는 VPC를 잇지 못합니다.</p>
  <p><b>허브 앤 스포크: Peering의 비전이성을 격리에 이용</b> <button class="qref" data-id="248">2세트 Q48</button>: “공유 서비스(러너·Artifact Registry)는 모든 환경과 통신, <mark>환경끼리는 네트워크 경로가 없어야 함</mark>”이면 환경마다 별도 VPC를 만들고 <b>허브 VPC와만 Peering</b>합니다. A–허브, B–허브를 이어도 A–B는 통하지 않습니다.</p>
  <pre><code>        platform-tools VPC (허브)
        /         |          \
   dev VPC    staging VPC    prod VPC     ← 스포크끼리 경로 없음</code></pre>
  <p>Shared VPC 하나에 모든 환경을 붙이면 같은 네트워크라 경로가 생깁니다(방화벽으로 막는 것 ≠ 경로 없음). 풀 메시 Peering은 환경끼리 직접 연결되므로 정반대입니다. 이미지 pull은 Peering이 아니라 <b>Private Google Access</b>(또는 PSC)로 Artifact Registry에.</p>
  <p>함정 포인트(Q27): “<b>Several subnet ranges overlap, but the applications use unique ranges</b>” → 앱 대역이 안 겹쳐도 네트워크 어딘가에 겹침이 있으면 <b>Peering은 불가</b>. 선택 광고가 가능한 VPN + Cloud Router가 정답.</p>
</section>

<section>
  <h2>5. 온프레미스와 Google Cloud 연결 (하이브리드) <button class="qref" data-id="31">Q31</button> <button class="qref" data-id="50">Q50</button> <button class="qref" data-id="224">2세트 Q24</button> <button class="qref" data-id="528">5세트 Q28</button></h2>
  <div class="tbl"><table><thead><tr><th>항목</th><th>HA VPN</th><th>Partner Interconnect</th><th>Dedicated Interconnect</th></tr></thead><tbody>
    <tr><td class="strong">경로</td><td><mark>공용 인터넷</mark> 위 IPsec 터널</td><td>통신사 회선 (인터넷 안 거침)</td><td>자사 전용 물리 회선 (인터넷 안 거침)</td></tr>
    <tr><td class="strong">지연·손실</td><td>인터넷 상태에 따라 변동</td><td>안정</td><td>가장 안정·예측 가능</td></tr>
    <tr><td class="strong">대역폭</td><td>터널당 약 3Gbps</td><td>50Mbps ~ 50Gbps</td><td>회선당 10 / 100 / 400Gbps. 여러 회선을 묶어 증설 (40Gbps = 10G × 4)</td></tr>
    <tr><td class="strong">구축</td><td>수 분, 저렴</td><td>중간</td><td>수 주, 가장 비쌈. colocation 시설까지 회선을 끌어와야 함</td></tr>
    <tr><td class="strong">암호화</td><td>기본 IPsec</td><td colspan="2">기본 없음 → 필요하면 MACsec 또는 HA VPN over Interconnect</td></tr>
  </tbody></table></div>
  <p><b>고르는 순서</b>: ① 인터넷 품질이 문제거나 대용량·안정 필수? → Interconnect. 아니면 HA VPN. ② colocation에 직접 갈 수 있고 10Gbps 이상? → Dedicated. 아니면 Partner.</p>
  <p><b>숫자로 거르기</b> <button class="qref" data-id="528">5세트 Q28</button>: “비공개 + <mark>40Gbps 이상</mark>” → VPN 터널 1개(≈ 1~3Gbps)는 탈락, <b>Dedicated Interconnect</b>. 보기에 <b>Cloud CDN</b>이 섞이면 지웁니다. CDN은 인터넷 사용자에게 캐시를 나눠 주는 서비스라 VPC ↔ 온프레미스 연결 수단이 아닙니다(“video”라는 단어가 미끼). Interconnect는 VPC의 <code>VLAN attachment</code> + <code>Cloud Router</code>에서 끝납니다.</p>
  <p><b>“uninterrupted + SLA”면 이중화까지</b> <button class="qref" data-id="601">사례 연구 Q1</button>: Altostrat처럼 “이전 기간 내내 대용량 업로드, 예측 가능한 지연, SLA 보장 가용성, 재설계 없는 확장” → <mark>Dedicated Interconnect, 서로 다른 edge availability domain에 이중화</mark>. Interconnect라도 <b>VLAN attachment 하나</b>면 단일 장애 지점이라 오답입니다(SLA는 99.9%·99.99% 이중화 토폴로지에만). HA VPN은 인터넷 위라 지연 예측 불가, Transfer Appliance는 오프라인 일회성 이전용입니다.</p>
  <p><b>Partner를 고르는 신호</b> <button class="qref" data-id="902">공식 모의고사 Q2</button>: <mark>Google PoP에서 100km 이상 떨어짐 + 새 하드웨어 구매 불가(기존 방화벽의 저대역 포트) + RFC 1918 사설 IP + 인터넷은 SLA 없음</mark> → Partner Interconnect. Dedicated는 colocation 시설 + 10Gbps 광 포트가 필요하고, Carrier Peering은 Google 공개 서비스용이라 사설 IP 통신이 안 됩니다.</p>
  <p><b>HA VPN 구성과 SLA</b> (<button class="qref" data-id="50">Q50</button> <button class="qref" data-id="520">5세트 Q20</button>): HA VPN 게이트웨이 하나에 외부 IP 인터페이스가 2개 있고, <mark>두 인터페이스에 터널을 하나씩 걸면 99.99% SLA</mark>(Google 쪽). 이게 최소 구성입니다. 터널 1개면 이중화 없음(99.9%). 게이트웨이·터널을 더 늘려도 SLA는 99.99%에서 안 오르고 비용(터널 시간당 요금)만 늘어납니다. 늘리는 건 대역폭이 더 필요할 때뿐. <b>Classic VPN</b>은 구형으로, BGP 동적 라우팅이 2025-08-01 지원 중단되었고(새 터널은 정적 라우팅만) SLA는 <b>99.9%</b>까지입니다. 인터페이스·외부 IP가 1개라 같은 게이트웨이의 두 터널이 <b>같은 피어 IP에 연결될 수도 없습니다</b>. 비용 최적화는 “가장 싼 보기”가 아니라 <mark>요건을 모두 충족하는 것 중 가장 싼 보기</mark>입니다. Classic VPN 터널 1개(가장 쌈, 99.9%)는 99.99% 요건이면 함정입니다.</p>
  <p><b>HA VPN 게이트웨이는 리전 리소스</b> <button class="qref" data-id="439">4세트 Q39</button>: VPC·방화벽·경로는 글로벌이지만 <mark>HA VPN 게이트웨이·VPN 터널·Cloud Router·VLAN attachment는 리전</mark>입니다. 하나의 VPC에서 두 리전 배포가 각각 온프레미스 VPN이 필요하면 <b>리전마다 HA VPN 게이트웨이 + 터널 + Cloud Router</b>. “global HA VPN gateway”는 존재하지 않는 리소스라 오답이고, VPC Network Peering(VPC↔VPC)·Shared VPC(프로젝트 간 공유)는 온프레미스 연결 수단이 아닙니다. 한 리전 연결의 경로를 다른 리전에도 쓰려면 dynamic routing mode = global.</p>
  <p><b>SLA를 위한 이중화</b>: Interconnect 회선 1개는 SLA 없음. 99.9% = 같은 metro 회선 2개, 99.99% = 2개 metro에 회선 4개.</p>
  <p><b>IP 대역이 겹칠 때</b> <button class="qref" data-id="224">2세트 Q24</button> <button class="qref" data-id="27">Q27</button>: 같은 주소가 양쪽에 있으면 라우터는 패킷을 옆 서버로 보낼지 터널 건너편으로 보낼지 모릅니다. 요건의 범위로 고릅니다.</p>
  <div class="tbl"><table><thead><tr><th>요건</th><th>방법</th><th>결과</th></tr></thead><tbody>
    <tr><td><b>처음 설계</b>(이전 시작 전) — VPN으로 회사망과 연결 예정</td><td class="strong">VPC의 <b>모든</b> 서브넷 대역(primary + secondary)을 회사망과 겹치지 않게</td><td>겹침 자체가 없음. primary만·secondary만 고유는 X (<button class="qref" data-id="527">5세트 Q27</button>)</td></tr>
    <tr><td><b>모든</b> 워크로드 양방향, 모호함 없이</td><td class="strong">겹치는 쪽 renumber → HA VPN + Cloud Router</td><td>모든 주소가 유일. 근본 해결 (2세트 Q24)</td></tr>
    <tr><td>겹치지 않는 <b>일부</b>만 통신하면 됨</td><td class="strong">Cloud Router custom advertisement로 겹치는 대역 제외</td><td>겹친 대역은 연결 안 됨 (Q27)</td></tr>
    <tr><td>renumber 불가, 주소 변환 허용</td><td class="strong">Hybrid NAT (Private NAT의 한 종류)</td><td>변환용 대역 필요. 운영 복잡</td></tr>
  </tbody></table></div>
  <p>주소 → 경로 → 방화벽 순서로 생각합니다. 주소 충돌은 맨 앞 단계 문제라 <b>방화벽(통과 여부만 결정)</b>이나 <b>Public NAT(인터넷 아웃바운드용)</b>로는 고칠 수 없습니다. Cloud Router도 주소를 새로 할당해 주지 않고, 바뀐 대역을 BGP로 광고할 뿐입니다.</p>
  <p>참고: <b>Direct Peering / Carrier Peering</b>은 VPC가 아니라 <b>Google 공개 서비스(Workspace, Google API)</b>에 직접 연결하는 방식입니다. VPC 내부 IP에는 닿지 않습니다. 반대로 말하면 <mark>목적지가 Cloud Storage(공개 API)라면 Direct Peering으로도 고대역 업로드가 가능</mark>합니다. “매일 12TB를 Cloud Storage로”에 “Dedicated Interconnect 또는 Direct Peering”은 정답입니다(<button class="qref" data-id="518">5세트 Q18</button>). 다만 SLA·비공개 연결이 필요하면 Google은 Cloud Interconnect를 권장합니다. <b>Cloud VPN은 기존 인터넷 회선 위의 암호화 터널</b>이라 회선 대역폭을 늘리지 못합니다.</p>
  <p><b>“내부 IP + 대용량 + 일정한 고처리량·최저 지연”</b> <button class="qref" data-id="345">3세트 Q45</button> <button class="qref" data-id="406">4세트 Q6</button> <button class="qref" data-id="632">사례 연구 Q32</button>: <mark>Dedicated Interconnect</mark>. 온프레미스 DB(6TB, 잦은 대량 갱신)를 GCP로 지속 복제하는 경우도 같음(셀프 VPN VM은 VM 성능이 상한 + 관리 부담, NAT·TLS 게이트웨이는 라우팅 연결이 아님). EHR처럼 “레거시 연동을 몇 년간 온프레미스에 + 안전·고성능”도 Dedicated Interconnect 이중화 + Cloud Router. 문서상 99.99% SLA는 최소 4개 연결(메트로 2곳 × 서로 다른 エッジ アベイラビリティ ドメイン 2개). 인터넷 경유 HA VPN만·VPC 피어링(GCP 안끼리)·공인 IP + TLS는 오답 <button class="qref" data-id="632">사례 연구 Q32</button>. 같은 EHR에서 “민감한 연동 엔드포인트를 공개하지 않음”이 핵심이면 회선 종류보다 <mark>사설 연결(Interconnect 또는 HA VPN) + 내부 LB·사설 엔드포인트</mark>가 답이고, 공개 + OAuth·공개 + IP 허용 목록·공개 CDN은 모두 공개 엔드포인트가 전제라 오답 <button class="qref" data-id="643">사례 연구 Q43</button>. KnightMotives의 “공장↔본사 트래픽 증가 + 다운타임 최소 + 하이브리드”도 Dedicated Interconnect 이중 경로 + Cloud Router가 정답, 단일 VPN 터널·인터넷 전송·VPC 피어링(GCP 안끼리)은 오답 <button class="qref" data-id="650">사례 연구 Q50</button>.</p>
  <p><b>주 연결 + 백업 연결 (DR)</b> <button class="qref" data-id="407">4세트 Q7</button>: 고대역 주 경로 = <mark>Dedicated Interconnect</mark>, 안전한 백업 = <mark>HA VPN</mark>(IPsec 암호화 + VPC 내부 IP). 둘 다 Cloud Router BGP에 붙이고 VPN 쪽 MED를 높여 평소엔 대기 → Interconnect 장애 시 자동 전환. <b>Direct Peering</b>(공개 Google 서비스용, VPC 경로·암호화·SLA 없음)과 <b>Transfer Appliance</b>(배송하는 일회성 이전 장비)는 지속 연결·백업 경로가 될 수 없음. Cloud VPN·OpenVPN은 인터넷을 지나 지연이 흔들리고 Cloud VPN은 터널당 약 1~3Gbps 한계, Direct Peering은 내부 IP 불가. Interconnect는 기본 암호화가 없으므로 필요하면 MACsec 또는 HA VPN over Cloud Interconnect.</p>
</section>

<section>
  <h2>6. 외부 IP 없는 VM의 출입구 <button class="qref" data-id="21">Q21</button> <button class="qref" data-id="301">3세트 Q1</button></h2>
  <div class="tbl"><table><thead><tr><th>방향</th><th>목적</th><th>서비스</th></tr></thead><tbody>
    <tr><td class="strong">밖 → 안</td><td>관리자가 VM에 SSH·RDP 접속</td><td><b>IAP TCP forwarding</b> (IAP(Identity-Aware Proxy, ID 기반 접근 프록시)). 방화벽에 <code>35.235.240.0/20</code> 허용 + <code>roles/iap.tunnelResourceAccessor</code></td></tr>
    <tr><td class="strong">안 → 밖 (인터넷)</td><td>VM이 패키지 다운로드, 외부 API 호출</td><td><b>Cloud NAT</b> (나가는 것만, 들어오는 연결은 불가). Cloud Router에 붙여 만들고 쓸 서브넷만 지정 가능 (<button class="qref" data-id="504">5세트 Q4</button>)</td></tr>
    <tr><td class="strong">안 → Google API</td><td>VM이 Cloud Storage, BigQuery 등 호출</td><td><b>Private Google Access</b> (서브넷 단위로 켬). 예: 설치 파일을 비공개 버킷에 올리고 VM이 <code>gsutil cp</code>로 받기 (<button class="qref" data-id="301">3세트 Q1</button>)</td></tr>
    <tr><td class="strong">온프레미스 → Google API</td><td>VPN·Interconnect로 연결된 온프레미스 서버가 BigQuery 등 호출(인터넷 경유 X)</td><td><b>Private Google Access for on-premises hosts</b>: Cloud Router가 <code>199.36.153.4/30</code>(restricted) 또는 <code>199.36.153.8/30</code>(private)을 온프레미스로 광고 + 온프레미스 DNS에서 <code>*.googleapis.com</code> → 그 도메인. VPC SC와 함께면 restricted (<button class="qref" data-id="529">5세트 Q29</button>)</td></tr>
    <tr><td class="strong">안 → 특정 Google API를 내부 IP로</td><td>API를 VPC 내부 엔드포인트로</td><td>Private Service Connect for Google APIs</td></tr>
    <tr><td class="strong">서버리스 → VPC·온프레미스 사설 IP</td><td>App Engine·Cloud Run·functions가 VPC 안 DB나 VPN 너머 온프레미스 DB 조회</td><td><b>Serverless VPC Access connector</b> / Direct VPC egress (서버리스는 VPC 밖). Private Google Access·private services access는 대상이 Google API·관리형 서비스라 X (<button class="qref" data-id="509">5세트 Q9</button>)</td></tr>
  </tbody></table></div>
  <p><b>PGA는 “Google 서비스끼리의 연결”이 아닙니다</b> <button class="qref" data-id="529">5세트 Q29</button>: <mark>공인 IP·인터넷 없이 Google API에 닿는 길</mark>이고, 출발지가 <b>VM</b>이면 서브넷 설정, <b>온프레미스</b>면 VPN·Interconnect 위로 특수 VIP 대역 광고 + DNS 설정입니다. 다만 둘 다 <b>길</b>일 뿐이라 데이터 유출 방지(VPC Service Controls)를 대신하지 못합니다.</p>
  <p><b>방화벽은 길을 만들지 않습니다</b> (<button class="qref" data-id="301">3세트 Q1</button>): egress 방화벽에 “Cloud Storage IP 범위만 허용”을 넣어도 외부 IP·NAT·Private Google Access가 없으면 갈 길이 없습니다. 게다가 Google API 전용 고정 IP 범위라는 것도 없습니다. 방화벽은 <b>허용·차단</b>, 경로는 <b>Private Google Access·Cloud NAT</b>가 만듭니다.</p>
  <p><b>방향과 목적지로 고르기</b> <button class="qref" data-id="504">5세트 Q4</button>: “내부 IP만 있는 VM이 <b>인터넷의 서드파티 저장소</b>에서 OS 업데이트를 받아야 함, 개별 외부 IP 금지” → <mark>Cloud NAT(Public NAT) + 소스 서브넷에 해당 서브넷 지정</mark>. GKE도 같습니다: 노드 외부 IP 금지 + Pod가 외부 API 호출이면 <b>private nodes + Cloud NAT</b> (<button class="qref" data-id="537">5세트 Q37</button>). Private Google Access는 목적지가 Google API일 때만, IAP TCP forwarding·bastion은 사람이 <b>들어오는</b> 방향이라 오답입니다.</p>
  <p>Bastion(점프 서버)은 IAP가 대체하는 옛 방식입니다. 외부 IP를 가진 VM을 하나 더 관리해야 하므로 “운영 최소·외부 IP 금지” 조건이면 IAP가 정답입니다.</p>
</section>

<section>
  <h2>7. 부하 분산 · Cloud CDN · Cloud Armor <button class="qref" data-id="6">Q6</button> <button class="qref" data-id="19">Q19</button> <button class="qref" data-id="216">2세트 Q16</button> <button class="qref" data-id="245">2세트 Q45</button> <button class="qref" data-id="314">3세트 Q14</button> <button class="qref" data-id="316">3세트 Q16</button> <button class="qref" data-id="325">3세트 Q25</button> <button class="qref" data-id="328">3세트 Q28</button> <button class="qref" data-id="331">3세트 Q31</button> <button class="qref" data-id="532">5세트 Q32</button></h2>
  <div class="tbl"><table><thead><tr><th>Load Balancer</th><th>계층</th><th>범위</th><th>언제</th></tr></thead><tbody>
    <tr><td class="strong">Global external Application LB</td><td>L7 (HTTP/HTTPS)</td><td>글로벌 (Anycast IP 하나)</td><td>전 세계 웹·API, 가까운 리전으로 자동 라우팅, Cloud CDN·Cloud Armor 연동</td></tr>
    <tr><td class="strong">Regional external / internal Application LB</td><td>L7</td><td>리전</td><td>데이터 위치 제한, 내부 마이크로서비스</td></tr>
    <tr><td class="strong">External / Internal proxy Network LB</td><td>L4 (TCP, SSL)</td><td>글로벌 또는 리전</td><td>HTTP가 아닌 TCP 서비스. 예전 이름 SSL proxy·TCP proxy LB. URL 경로 라우팅 불가 (<button class="qref" data-id="544">5세트 Q44</button>)</td></tr>
    <tr><td class="strong">External / Internal passthrough Network LB</td><td>L4 (TCP/UDP)</td><td>리전</td><td>클라이언트 IP 그대로 보존, UDP, 게임·VoIP(Voice over IP, 인터넷 전화)</td></tr>
  </tbody></table></div>
  <p><b>WebSocket·서버 로컬 세션 앱</b> <button class="qref" data-id="328">3세트 Q28</button>: Application LB는 <mark>WebSocket을 지원</mark>합니다(HTTP upgrade로 시작). 긴 연결은 <b>backend service timeout</b>을 늘리고, 세션이 처음 서버 메모리에만 있으면 <b>session affinity</b>(client IP, generated cookie 등)로 같은 백엔드에 보냅니다. affinity는 <b>best effort</b>라 백엔드 장애·확장·축소 시 깨질 수 있으므로 장기적으로는 세션 외부화(Memorystore). “지금 배포”를 묻는 문제면 WebSocket 교체·전면 재설계가 아니라 <b>개발자 + 운영팀이 LB와 affinity 옵션을 함께 검토</b>가 정답.</p>
  <p><b>LB는 “주소”를, Apigee는 “API 계약”을 고정</b> <button class="qref" data-id="325">3세트 Q25</button>: 지금은 모놀리스를 빠르게 이전하고 <mark>나중에 백엔드 API의 경로·payload·URL이 바뀔 예정</mark>이면, 소비자를 <b>Apigee API facade</b>에 연결해 계약을 고정하고 뒤쪽 변화는 경로 재작성·payload 변환·라우팅으로 흡수합니다(strangler fig 패턴). internal LB + 예약 IP·Service Directory는 주소만 고정해 소비자가 여전히 원래 API 모양에 묶이고, DB 직접 접근은 스키마에 결합됩니다.</p>
  <p><b>프로토콜부터 확인</b> <button class="qref" data-id="314">3세트 Q14</button>: “<mark>raw TCP</mark>”, UDP, HTTP가 아닌 프로토콜이면 <b>Network LB</b>. Application LB는 HTTP/HTTPS(L7) 전용이라 나머지 구성이 완벽해도 오답입니다. 백엔드는 stateless·수평 확장이면 MIG, <b>한 대만 활성인 레거시 앱</b>이면 unmanaged instance group(active/standby) + LB failover backend.</p>
  <p><b>active-active vs active-standby</b> <button class="qref" data-id="331">3세트 Q31</button> <button class="qref" data-id="314">3세트 Q14</button>: 갈림길은 <mark>“동시에 여러 대가 돌아도 되나?”</mark>입니다.</p>
  <div class="tbl"><table><thead><tr><th>요건</th><th>구성</th><th>오답 패턴</th></tr></thead><tbody>
    <tr><td>stateless, <b>평소 모든 인스턴스가 처리</b>, 인스턴스·zone 장애 시 <b>자동 용량 복구</b></td><td class="strong">regional MIG 하나 + LB + health check (+ autohealing)</td><td>primary + failover MIG(active-passive라 평소 놂), unmanaged(자동 재생성 X), 가중치 DNS(캐시로 즉시 전환 X)</td></tr>
    <tr><td>레거시, <b>한 대만 활성</b>, 단일 writer 디스크</td><td class="strong">unmanaged active/standby(다른 zone) + Regional PD + failover backend</td><td>MIG(여러 대 동시 활성), Filestore(동시 쓰기)</td></tr>
    <tr><td><b>리전 전체 장애</b>에도 가용 + 사용자가 <b>주소를 바꾸지 않음</b></td><td class="strong">리전마다 regional MIG(같은 프로젝트) + global external Application LB(Anycast IP) + health check (<button class="qref" data-id="532">5세트 Q32</button>). 99.9% + 전 세계 지연 + 확장에 맞는 DR이면 무상태 서비스 멀티 리전 active/active + 리전 간 데이터 복제 <button class="qref" data-id="631">사례 연구 Q31</button></td><td>개별 VM을 LB에 직접(백엔드는 instance group·NEG), 온프레미스 서버로 직접 failover(hybrid NEG·연결 필요), 다른 프로젝트 MIG를 한 backend service에 직접(cross-project service referencing 필요)</td></tr>
    <tr><td><b>전 세계 사용자</b>의 지연 최소 + 데이터(색인)는 중앙</td><td class="strong">global external Application LB + 리전별 백엔드(가장 가까운 정상 백엔드로), 공유 백엔드(Agent Search 등)는 하나 <button class="qref" data-id="629">사례 연구 Q29</button> <button class="qref" data-id="638">사례 연구 Q38</button></td><td>단일 리전 클러스터(먼 사용자 지연), 내부 LB만(인터넷 사용자 못 받음), 온프레미스 경유(홉 증가), 리전별 Network LB만(L4·리전 범위), 단일 리전 + VM 크기 증가</td></tr>
  </tbody></table></div>
  <p><b>LB 백엔드의 계층</b> <button class="qref" data-id="532">5세트 Q32</button>: <mark>forwarding rule(IP) → target proxy → URL map → backend service(+ health check) → instance group·NEG → VM</mark>. VM은 항상 그룹(MIG·unmanaged)이나 NEG를 거쳐 붙습니다. 보기에 “add the individual VMs <b>directly</b>”, “connect … <b>directly</b> to one backend service”처럼 “directly”가 보이면 의심하세요. 앱 계층을 두 리전에 두어도 DB·세션 같은 상태를 리전 간 복제하지 않으면 실제 DR이 되지 않습니다.</p>
  <p><b>Cloud CDN(Content Delivery Network, 콘텐츠 전송 네트워크)</b>: Global external Application LB 뒤에서 켜는 옵션. 전 세계 edge에 정적 콘텐츠 사본을 캐시합니다.</p>
  <ul>
    <li><b>해외 사용자만 느림</b> → 원인은 거리. 정적 파일은 CDN, 동적 처리는 멀티 리전 MIG를 Global LB 뒤에 (Q19).</li>
    <li><b>캐시 적중률이 낮음</b> → <b>cache key</b>에서 불필요한 요소(프로토콜, 쿼리 문자열 등)를 빼서 같은 콘텐츠를 하나로 합침 (Q6).</li>
    <li><b>Cloud Storage의 인기 영상이 재시도해야 재생됨</b> → 영상이 VM을 거치지 않게. LB의 <b>URL map</b>으로 <code>/videos/*</code>는 <b>backend bucket(Cloud Storage) + Cloud CDN</b>, 앱 요청은 backend service(MIG)로 (<button class="qref" data-id="245">2세트 Q45</button>). Cloud Storage FUSE·Filestore·Cloud SQL로 옮겨도 여전히 VM이 전달하므로 오답.</li>
  </ul>
  <pre><code>LB ─ URL map ─┬─ /api/*    → backend service → MIG
              └─ /videos/* → backend bucket  → Cloud Storage (+ Cloud CDN)</code></pre>
  <p><b>입구 하나로 API 버전 나누기</b> <button class="qref" data-id="501">5세트 Q1</button>: “기존 도메인·DNS 레코드·SSL 인증서를 그대로 쓰면서 개정 API도 제공” → LB 프론트엔드(IP·인증서)는 그대로 두고 <mark>버전별 backend service + URL map path rule</mark>(<code>/v1/*</code> → 기존, <code>/v2/*</code> → 개정). LB 추가(새 IP → DNS 변경), 기존 고객 호스트명 이동, 구 버전 앱이 프록시(결합·장애 전파)는 오답. 서브도메인으로 나누면 host rule, 비율로 나누면 weighted backend services.</p>
  <p><b>경로 라우팅 + 양 구간 암호화</b> <button class="qref" data-id="544">5세트 Q44</button>: “전 세계 사용자, <code>/catalog</code>·<code>/checkout</code>·<code>/accounts</code>를 다른 백엔드로, 클라이언트→LB와 LB→백엔드 모두 암호화” → <mark>global external Application LB + HTTPS 프론트엔드(target HTTPS proxy + 인증서) + URL map + backend service 프로토콜 HTTPS</mark>. 오답: SSL proxy LB(지금의 external proxy Network LB)는 <b>L4</b>라 URL 경로를 못 봄(MIG를 붙여도 마찬가지), URL map 없는 forwarding rule은 입구일 뿐, cross-region <b>internal</b> ALB는 URL map이 있어도 VPC 안 클라이언트용.</p>
  <p><b>전 세계 사용자 지연 줄이기 = 콘텐츠를 둘로 나누기</b> <button class="qref" data-id="316">3세트 Q16</button>: <mark>동적·개인화(캐시 불가)</mark> → Global external Application LB(가까운 엣지에서 연결 받아 Google 망으로 백엔드까지), <mark>정적·영상(캐시 가능)</mark> → Cloud CDN. 두 개 고르기면 이 둘이 한 쌍입니다.</p>
  <div class="tbl"><table><thead><tr><th>제품</th><th>위치</th><th>용도</th></tr></thead><tbody>
    <tr><td class="strong">Cloud CDN</td><td>전 세계 엣지</td><td>CSS·JS·이미지·일반 영상 등 웹 콘텐츠</td></tr>
    <tr><td class="strong">Media CDN</td><td>전 세계 엣지</td><td><b>초대용량 영상 스트리밍·대형 다운로드</b>. 작은 웹 자산용 X</td></tr>
    <tr><td class="strong">Memorystore</td><td>한 리전의 VPC 안</td><td>앱 서버가 쓰는 내부 캐시·세션. <b>인터넷에 노출 X</b></td></tr>
  </tbody></table></div>
  <p><b>증상 두 개 = 캐시 두 계층</b> <button class="qref" data-id="446">4세트 Q46</button>: “여러 지역에서 <b>이미지·영상</b> 페이지가 느림” → <mark>Cloud CDN</mark>(엣지), “<b>반복 상품 조회</b>로 응답 지연” → <mark>Memorystore for Redis</mark>(앱 데이터 캐시). Cloud Run <code>concurrency</code>는 인스턴스당 동시 요청 수(처리량·비용 조절)일 뿐 거리·반복 조회를 없애지 못하고, 올리면 요청당 지연이 오히려 늘 수 있습니다. GKE Autopilot 이전·DB 교체(Bigtable→Spanner)도 지연 원인과 무관합니다.</p>
  <h3>Cloud Armor 기초 <button class="qref" data-id="216">2세트 Q16</button></h3>
  <p><b>Cloud Armor</b> = 외부 Application LB에 붙이는 <b>WAF(Web Application Firewall, 웹 애플리케이션 방화벽)</b> + <b>DDoS(Distributed Denial of Service, 분산 서비스 거부) 방어</b>. 요청이 백엔드에 닿기 전에 Google 엣지에서 검사합니다. VPC 방화벽이 “IP·포트”를 본다면, Cloud Armor는 <b>HTTP 요청 내용</b>까지 봅니다.</p>
  <div class="tbl"><table><thead><tr><th>기능</th><th>예</th></tr></thead><tbody>
    <tr><td class="strong">사전 구성 WAF 규칙</td><td>SQL injection, XSS(Cross-Site Scripting, 악성 스크립트 삽입) 등 OWASP Top 10 차단</td></tr>
    <tr><td class="strong">IP·지역 허용/거부</td><td>특정 IP 대역 차단, 특정 국가만 허용 (<code>origin.region_code</code>)</td></tr>
    <tr><td class="strong">Rate limiting</td><td>클라이언트당 분당 N회 초과 시 차단·제한</td></tr>
    <tr><td class="strong">DDoS 방어</td><td>L3/L4는 기본 제공, L7은 Adaptive Protection(이상 트래픽 자동 탐지), Managed Protection Plus(유료 고급)</td></tr>
    <tr><td class="strong">봇 관리</td><td>reCAPTCHA Enterprise 연동</td></tr>
    <tr><td class="strong">Preview 모드</td><td>규칙을 실제로 막지 않고 로그만 남겨 영향 확인 후 적용</td></tr>
  </tbody></table></div>
  <ul>
    <li><mark>Cloud Armor는 LB의 백엔드 서비스에 붙는다</mark> → LB를 거치지 않는 요청은 검사받지 않습니다. DNS가 Cloud Armor를 가리키는 구조는 없습니다.</li>
    <li><b>우회 차단 = 백엔드 쪽 잠금</b>: Cloud Run·App Engine은 ingress <code>Internal and Cloud Load Balancing</code>(run.app 직접 호출 거부) + serverless NEG로 LB에 연결. VM 백엔드는 외부 IP 제거 + VPC 방화벽에서 Google LB 대역(35.191.0.0/16, 130.211.0.0/22)만 허용.</li>
    <li><b>Cloud Armor vs IAP</b>: Cloud Armor = “이 <b>요청</b>이 공격인가?”(공개 서비스), IAP = “이 <b>사람</b>이 허용된 사용자인가?”(사내 앱). IAP는 WAF 검사를 하지 않습니다.</li>
    <li><b>Serverless NEG</b>: LB 백엔드로 Cloud Run·App Engine·Cloud Run functions를 연결하는 어댑터. 서버리스에는 VM 네트워크 인터페이스가 없어 VPC 방화벽이 적용되지 않습니다.</li>
  </ul>
</section>

<section>
  <h2>8. 시험 함정 모음</h2>
  <div class="tbl"><table><thead><tr><th>함정</th><th>실제</th></tr></thead><tbody>
    <tr><td>HA니까 다중 zone MIG + Filestore + Application LB?</td><td>“동시에 한 대만 활성 + 단일 writer + raw TCP”면 <b>unmanaged active/standby(다른 zone) + Regional PD + Network LB</b>. 구성이 다 맞아도 LB가 L7이면 오답 (<button class="qref" data-id="314">3세트 Q14</button>)</td></tr>
    <tr><td>전 세계 응답 속도 → Memorystore를 인터넷에 노출 / Media CDN으로 CSS·JS / 버킷에 앱 전체</td><td>Memorystore는 리전 내부 캐시, Media CDN은 대용량 스트리밍, 버킷은 로직 실행 불가. <b>Global external Application LB(동적) + Cloud CDN(정적)</b> (<button class="qref" data-id="316">3세트 Q16</button>)</td></tr>
    <tr><td>나중에 API 구조가 바뀔 모놀리스 → internal LB + 예약 IP / Service Directory로 소비자 보호</td><td>주소만 고정, API 모양은 그대로 노출. <b>Apigee API facade</b>로 계약 고정 (<button class="qref" data-id="325">3세트 Q25</button>)</td></tr>
    <tr><td>WebSocket은 LB가 지원 안 하니 HTTP 스트리밍으로 / 로컬 세션이니 WebSocket까지 빼고 재설계</td><td>Application LB는 WebSocket 지원. 로컬 세션은 <b>session affinity</b>(best effort) + timeout 검토 (<button class="qref" data-id="328">3세트 Q28</button>)</td></tr>
    <tr><td>모든 인스턴스가 평소 처리 + 자동 복구 → regional MIG 두 개를 primary/failover로</td><td>failover는 active-passive라 평소 두 번째가 놂. <b>regional MIG 하나</b>로 active-active (<button class="qref" data-id="331">3세트 Q31</button>)</td></tr>
    <tr><td>아시아 사용자 지연 → 기존 GKE + Cloud CDN / 클러스터별 LB IP를 DNS에</td><td>CDN은 동적 계산을 옮기지 않고, DNS 나열은 글로벌 라우팅이 아님. <b>아시아 클러스터 추가 + Multi Cluster Ingress</b> (<button class="qref" data-id="350">3세트 Q50</button>)</td></tr>
    <tr><td>priority 숫자가 크면 더 중요하다?</td><td><mark>작을수록 먼저</mark>. 200이 1200보다 먼저 평가 (Q37)</td></tr>
    <tr><td>계층마다 서브넷을 나누면 격리된다? / route로 통신을 막는다?</td><td>서브넷·경로는 보안 경계가 아님. 방화벽 규칙 + tag (Q49)</td></tr>
    <tr><td>Firewall Insights가 비어 있으면 VPC Flow Logs를 켠다?</td><td>Firewall Insights의 원천은 <b>Firewall Rules Logging</b>. 규칙마다 켜기 (<button class="qref" data-id="208">2세트 Q8</button>)</td></tr>
    <tr><td>egress에도 implied deny가 있다?</td><td>없음. egress는 <b>implied allow</b>. 막으려면 deny-all을 직접 (Q37)</td></tr>
    <tr><td>통신할 앱의 대역만 안 겹치면 Peering 가능?</td><td>불가. VPC 전체 서브넷 중 하나라도 겹치면 안 됨 (Q27)</td></tr>
    <tr><td>온프레미스와 IP가 겹치는데 “모든 워크로드” 양방향 → 광고 제외 / 겹치는 대역 방화벽 deny / Public NAT?</td><td>광고 제외는 일부만 연결, 방화벽은 막을 뿐, Public NAT는 인터넷용. <b>겹치는 쪽 renumber</b> 후 HA VPN + Cloud Router (<button class="qref" data-id="224">2세트 Q24</button>)</td></tr>
    <tr><td>Peering으로 A–B, B–C를 이으면 A–C도 통신?</td><td>불가. 전이 라우팅 없음. VPN + Cloud Router나 NCC</td></tr>
    <tr><td>중앙 팀이 여러 환경 프로젝트에 배포 + 환경끼리 경로 없어야 함 → Shared VPC?</td><td>Shared VPC는 한 네트워크라 환경끼리 경로가 있음. <b>별도 VPC + 허브와만 Peering</b> (<button class="qref" data-id="248">2세트 Q48</button>)</td></tr>
    <tr><td>VPC 셋은 격리 + VM 하나만 다른 VPC와 통신 → Cloud Router 광고 / Peering 체인 / VPN 체인?</td><td>Cloud Router는 연결이 아님, Peering은 전이 안 됨, Peering·VPN은 VPC 전체를 이음. <b>다중 NIC VM</b> (<button class="qref" data-id="225">2세트 Q25</button>)</td></tr>
    <tr><td>가용성 최고 = HA VPN 게이트웨이 2개·터널 4개?</td><td>HA VPN 1개 + 터널 2개로 이미 99.99%(최고). 더 늘리면 비용만 (Q50, <button class="qref" data-id="520">5세트 Q20</button>)</td></tr>
    <tr><td>99.99% + 비용 최소 → Classic VPN 터널 2개 / 터널 1개(가장 쌈)</td><td>Classic VPN은 99.9%까지. 요건 미달이면 싸도 오답 (<button class="qref" data-id="520">5세트 Q20</button>)</td></tr>
    <tr><td>VPN 터널을 늘리면 인터넷 지연·손실이 해결?</td><td>같은 인터넷이라 그대로. 전용 연결(Interconnect)로 (Q31)</td></tr>
    <tr><td>Interconnect는 기본 암호화?</td><td>아님. MACsec 또는 HA VPN over Interconnect</td></tr>
    <tr><td>외부 IP 없는 VM이 Cloud Storage를 쓰려면 egress 방화벽에 Cloud Storage IP만 허용?</td><td>방화벽은 경로를 만들지 않음. <b>서브넷에 Private Google Access</b> (<button class="qref" data-id="301">3세트 Q1</button>)</td></tr>
    <tr><td>외부 IP 없는 VM에 SSH하려면 Cloud NAT?</td><td>NAT는 나가는 것만. 들어오는 SSH는 IAP (Q21)</td></tr>
    <tr><td>인기 영상이 느리면 Cloud Storage FUSE·Filestore로 VM에 붙여 스트리밍?</td><td>여전히 고정 VM이 병목, 엣지 캐시 없음. <b>backend bucket + Cloud CDN</b> (<button class="qref" data-id="245">2세트 Q45</button>)</td></tr>
    <tr><td>해외가 느리면 DB read replica?</td><td>느린 대상이 정적 파일이면 CDN + 멀티 리전 (Q19)</td></tr>
    <tr><td>운영 VM의 인터넷 인바운드 기본 거부 + 승인 VM만 443 → 외부 IP 금지 Org Policy?</td><td>Org Policy는 패킷 필터가 아님. <b>운영 폴더에 계층형 방화벽 정책 + secure tag</b>. 조직 루트에 걸면 개발까지 막힘 (<button class="qref" data-id="215">2세트 Q15</button>)</td></tr>
    <tr><td>Cloud Run 앞에 LB + Cloud Armor만 두면 끝?</td><td>run.app 직접 호출로 우회 가능. <b>ingress Internal and Cloud Load Balancing</b>으로 뒷문을 잠가야 함. IAP·DNS·VPC 방화벽으로는 못 막음 (<button class="qref" data-id="216">2세트 Q16</button>)</td></tr>
    <tr><td>IP가 바뀌는 계층을 나누려면 VPC를 계층마다? / DNS 이름으로 허용?</td><td>같은 VPC에서 <b>network tag + 방화벽</b>, tag는 인스턴스 템플릿에. VPC를 나누면 다시 연결해야 하고, DNS는 패킷을 막지 않음 (<button class="qref" data-id="218">2세트 Q18</button>)</td></tr>
    <tr><td>Cloud Storage 접근을 사무실 IP로 제한 → VPC 방화벽 / VPN + Private Google Access?</td><td>방화벽은 VM 패킷용, VPN은 경로만. Google API 접근 위치 제한은 <b>VPC Service Controls + access level</b> (<button class="qref" data-id="219">2세트 Q19</button>, 보안 가이드 6장)</td></tr>
    <tr><td>Shared VPC로 다른 조직과 공유?</td><td>같은 조직 안에서만. 다른 조직은 Peering·VPN·PSC</td></tr>
  </tbody></table></div>
</section>

<section>
  <h2>9. 시험 키워드 → 서비스</h2>
  <div class="tbl"><table><thead><tr><th>문제에 이런 말이 나오면</th><th>후보</th></tr></thead><tbody>
    <tr><td>which firewall rules are used, Firewall Insights empty</td><td class="strong">Firewall Rules Logging을 규칙마다 활성화 (<button class="qref" data-id="208">2세트 Q8</button>)</td></tr>
    <tr><td>tiers, allow only required communication, block direct access</td><td class="strong">VPC firewall rules + network tags / service accounts (<button class="qref" data-id="49">Q49</button>)</td></tr>
    <tr><td>two VPCs, non-overlapping, internal IP, low latency</td><td class="strong">VPC Network Peering</td></tr>
    <tr><td>overlapping ranges, advertise only specific prefixes</td><td class="strong">HA VPN + Cloud Router custom advertisement</td></tr>
    <tr><td>acquired company, overlapping with on-premises, all workloads, bidirectional, without ambiguous routing</td><td class="strong">겹치는 쪽 renumber → HA VPN + Cloud Router (<button class="qref" data-id="224">2세트 Q24</button>)</td></tr>
    <tr><td>overlapping address spaces, translate, cannot renumber</td><td class="strong">Hybrid NAT (Private NAT)</td></tr>
    <tr><td>VPCs must otherwise remain isolated, only one VM is the exception</td><td class="strong">다중 NIC VM (nic0/nic1/nic2를 각 VPC에) (<button class="qref" data-id="225">2세트 Q25</button>)</td></tr>
    <tr><td>expose one service to another VPC / organization</td><td class="strong">Private Service Connect</td></tr>
    <tr><td>central network team, multiple projects, same organization</td><td class="strong">Shared VPC</td></tr>
    <tr><td>network team manages all VPCs but must not access instances / data, platform team administers Compute Engine</td><td class="strong">Shared VPC: host 프로젝트(Compute Network Admin) + service 프로젝트(Compute Admin) + 서브넷 Compute Network User. 한 프로젝트에 두 역할 X(Compute Admin이 네트워크도 수정), 독립 VPC 2개 + VPN·Peering X (<button class="qref" data-id="443">4세트 Q43</button>)</td></tr>
    <tr><td>shared services project reaches every environment, network paths between environments must not exist</td><td class="strong">허브 앤 스포크 VPC Peering (Peering은 전이 안 됨) (<button class="qref" data-id="248">2세트 Q48</button>)</td></tr>
    <tr><td>on-premises, encrypted, quick setup, low cost</td><td class="strong">HA VPN</td></tr>
    <tr><td>low bandwidth, highest practical availability, minimize cost</td><td class="strong">HA VPN 1개 + 터널 2개 (99.99%, <button class="qref" data-id="50">Q50</button>)</td></tr>
    <tr><td>average 450 kbps, 99.99% availability, minimize networking costs</td><td class="strong">HA VPN 게이트웨이 1개 + 터널 2개 → 온프레미스 게이트웨이 1개. Classic VPN·HA VPN 2개+터널 4개 X (<button class="qref" data-id="520">5세트 Q20</button>)</td></tr>
    <tr><td>privately connect VPC to on-premises, at least 40 Gbps</td><td class="strong">VPC + Dedicated Interconnect. VPN 터널 1개·Cloud CDN X (<button class="qref" data-id="528">5세트 Q28</button>)</td></tr>
    <tr><td>latency / packet loss across the internet, high throughput, dedicated</td><td class="strong">Dedicated Interconnect (또는 Partner) (<button class="qref" data-id="345">3세트 Q45</button>)</td></tr>
    <tr><td>videos / static files in Cloud Storage, popular content, retries, content-delivery performance</td><td class="strong">Global external Application LB + backend bucket + Cloud CDN, 앱은 URL map으로 MIG (<button class="qref" data-id="245">2세트 Q45</button>)</td></tr>
    <tr><td>revised API + existing version, same domain name, DNS record, SSL certificate</td><td class="strong">버전별 backend service + URL map path-based routing (<button class="qref" data-id="501">5세트 Q1</button>)</td></tr>
    <tr><td>no external IP, SSH / RDP to VM</td><td class="strong">IAP TCP forwarding</td></tr>
    <tr><td>no external IP, download updates from internet</td><td class="strong">Cloud NAT (소스 서브넷 지정) (<button class="qref" data-id="504">5세트 Q4</button>)</td></tr>
    <tr><td>no external IP, access Cloud Storage / BigQuery, transfer an installation package</td><td class="strong">Private Google Access + Cloud Storage (<button class="qref" data-id="301">3세트 Q1</button>)</td></tr>
    <tr><td>allow only X outbound, block everything else</td><td class="strong">allow(작은 숫자) + deny-all egress(큰 숫자)</td></tr>
    <tr><td>autoscaling, changing IP addresses, approved tiers and ports</td><td class="strong">network tag(인스턴스 템플릿) + VPC 방화벽 source/target tag (<button class="qref" data-id="218">2세트 Q18</button>)</td></tr>
    <tr><td>three tiers in one VPC scale independently, web→API→DB only, no web↔DB, fewest steps</td><td class="strong">계층별 network tag + 태그 기반 방화벽 규칙(source tag → target tag). 서브넷·route는 허용·차단 X (<button class="qref" data-id="915">공식 모의고사 Q15</button>). “strict isolation”이면 계층별 <b>전용 서비스 계정</b>을 source·target으로(IAM으로 통제되어 tag보다 엄격, 한 규칙 안에서 tag·SA 혼용 불가), LB→포털은 LB 프록시·health check 대역만. Cloud NAT·Cloud Armor·서브넷 간 전 포트 허용·서브넷 Peering X (<button class="qref" data-id="441">4세트 Q41</button>)</td></tr>
    <tr><td>MIG behind LB, VMs terminate and restart every minute, curl works, no public IP</td><td class="strong">health check 소스 대역(35.191.0.0/16, 130.211.0.0/22)을 허용하는 방화벽 규칙 확인 → autohealing 반복 중단 (<button class="qref" data-id="914">공식 모의고사 Q14</button>)</td></tr>
    <tr><td>future-proof hybrid, compatible with on-premises network</td><td class="strong">custom mode VPC + 온프레미스와 <b>겹치지 않는 CIDR</b> 계획 + Interconnect. default·auto mode VPC X (<button class="qref" data-id="911">공식 모의고사 Q11</button>)</td></tr>
    <tr><td>migrating in stages, communicate through Cloud VPN, every system routed correctly, primary / secondary range</td><td class="strong">모든 서브넷 대역을 회사망과 겹치지 않게. “primary는 회사망 대역 + secondary만 고유”, 그 반대 모두 X. 같은 CIDR 공유(Hybrid Subnets)는 특수 구성 (<button class="qref" data-id="527">5세트 Q27</button>)</td></tr>
    <tr><td>organization-wide firewall rule</td><td class="strong">Hierarchical firewall policy</td></tr>
    <tr><td>centrally managed, existing and future projects, cannot be overridden by project administrators (방화벽)</td><td class="strong">해당 폴더에 Hierarchical firewall policy + secure tag 대상 (<button class="qref" data-id="215">2세트 Q15</button>)</td></tr>
    <tr><td>global users, single IP, static content, latency</td><td class="strong">Global external Application LB + Cloud CDN</td></tr>
    <tr><td>deliver existing video hosted on another public cloud to new regions</td><td class="strong">Cloud CDN + 외부 오리진(internet NEG)으로 캐시. 멀티 리전 버킷 직접 제공·리전별 복제 X, Apigee 캐시는 512KB 제한 (<button class="qref" data-id="909">공식 모의고사 Q9</button>)</td></tr>
    <tr><td>DDoS, SQL injection, XSS, WAF, rate limit, block countries</td><td class="strong">Cloud Armor (외부 Application LB에 연결)</td></tr>
    <tr><td>DDoS from the same IP ranges, prevent DoS traffic from entering the VPC, slow old servers</td><td class="strong">외부 HTTP(S) LB + Cloud Armor + Compute Engine으로 이전. VPC 방화벽은 VM 수준이라 VPC 진입 방지 X, 내부 LB·IAP는 익명 공개 사이트 X (<button class="qref" data-id="901">공식 모의고사 Q1</button>)</td></tr>
    <tr><td>every request must pass Cloud Armor, prevent bypassing the LB, run.app URL</td><td class="strong">Cloud Run ingress Internal and Cloud Load Balancing + serverless NEG (<button class="qref" data-id="216">2세트 Q16</button>)</td></tr>
    <tr><td>preserve client IP, UDP</td><td class="strong">Passthrough Network LB</td></tr>
    <tr><td>remain available if an entire region becomes unavailable, without changing the website address (Compute Engine)</td><td class="strong">두 리전에 regional MIG + global external Application LB + health check. 개별 VM 직접·온프레미스 직접·cross-project 미구성 X (<button class="qref" data-id="532">5세트 Q32</button>)</td></tr>
  </tbody></table></div>
</section>`
}
,
{
  id: "cicd",
  title: "CI/CD · 배포 자동화",
  updated: "2026-10-13",
  related: [2, 3, 9, 18, 23, 26, 35, 38, 40, 41, 46, 203, 221, 229, 231, 233, 243, 304, 308, 312, 322, 341, 410, 413, 415, 416, 424, 429, 502, 507, 512, 522, 538, 602, 604, 605, 611, 615, 628, 633, 640, 644, 649, 659],
  html: `
<section>
  <h2>1. 큰 그림: CI/CD란</h2>
  <p><b>CI</b>(Continuous Integration, 지속적 통합)는 코드를 커밋할 때마다 자동으로 빌드·테스트하는 것, <b>CD</b>(Continuous Delivery/Deployment, 지속적 전달·배포)는 그 결과물을 자동으로 환경에 내보내는 것입니다. 시험이 묻는 핵심은 하나입니다.</p>
  <p style="font-size:17px"><mark>사람은 코드를 커밋하고 승인만 한다. 빌드·배포·롤백은 파이프라인이 한다.</mark></p>
  <pre><code>개발자 commit/merge
   │  (트리거)
   ▼
Cloud Build ── unit test → 빌드(한 번만) → Artifact Registry에 push (태그 = commit hash)
   │
   ▼
Cloud Deploy / Cloud Build ── staging 배포 → 통합·인수 테스트 → [승인] → prod 배포(같은 이미지) → smoke test
   │
   ▼
Cloud Run / GKE / MIG / App Engine (실행 환경)</code></pre>
  <p>이 흐름이 있으면 <b>소스 저장소 = 진짜 상태(system of record)</b>가 됩니다. 운영 환경을 손으로 고치면 소스와 어긋나고(드리프트), 다음 배포 때 문제가 되살아납니다.</p>
</section>

<section>
  <h2>2. GCP CI/CD 도구 지도</h2>
  <div class="tbl"><table><thead><tr><th>단계</th><th>도구</th><th>한 줄 설명</th></tr></thead><tbody>
    <tr><td>소스</td><td class="strong">GitHub · GitLab · Bitbucket</td><td>Cloud Build와 연결(repositories 2nd gen). Cloud Source Repositories는 신규 고객에게 더 이상 제공되지 않음</td></tr>
    <tr><td>빌드·테스트</td><td class="strong">Cloud Build</td><td>서버리스 빌드 실행기. 트리거(push·PR·태그)로 자동 실행, 단계는 <code>cloudbuild.yaml</code>에 정의 <button class="qref" data-id="2">Q2</button> <button class="qref" data-id="40">Q40</button></td></tr>
    <tr><td>산출물 저장</td><td class="strong">Artifact Registry</td><td>컨테이너 이미지·언어 패키지 저장소. 취약점 스캔, immutable tags 지원 (Container Registry의 후속)</td></tr>
    <tr><td>환경 간 배포·승격</td><td class="strong">Cloud Deploy</td><td>dev → staging → prod 순차 승격, 승인, canary, 롤백을 관리형으로. 대상: GKE, Cloud Run 등. render·deploy는 <b>Cloud Build 작업자</b>에서 실행되므로, private endpoint GKE면 그 VPC에 연결된 <mark>Cloud Build private pool</mark>을 target의 <code>executionConfigs</code>에 지정 (<button class="qref" data-id="341">3세트 Q41</button>)</td></tr>
    <tr><td>배포 허용 검사</td><td class="strong">Binary Authorization</td><td>서명(attestation)된 검증 이미지만 GKE·Cloud Run에 배포 허용</td></tr>
    <tr><td>비밀 값</td><td class="strong">Secret Manager</td><td>앱이 쓰는 API 키·DB 비밀번호. 코드·이미지·빌드 설정에 넣지 않음</td></tr>
    <tr><td>인프라</td><td class="strong">Terraform · Infrastructure Manager</td><td>IaC(Infrastructure as Code, 코드로 인프라 관리). Infrastructure Manager는 Google 관리형 Terraform 실행기 <button class="qref" data-id="41">Q41</button>. <b>선언형 + 상태 관리</b>라 DR 환경을 매번 똑같이 만들고 지울 수 있음. gcloud 스크립트는 명령형(순서·부분 실패·상태를 사람이 관리) <button class="qref" data-id="538">5세트 Q38</button></td></tr>
    <tr><td>ML 모델 개발·배포 (MLOps)</td><td class="strong">Gemini Enterprise Agent Platform (구 Vertex AI)</td><td>노트북·custom training(여러 프레임워크)·Pipelines·Model Registry·endpoint·모니터링을 한 플랫폼에서. 규정 준수용 모델·데이터셋 추적 = ML Metadata·계보(lineage) <button class="qref" data-id="649">사례 연구 Q49</button>. <b>Cloud Deploy는 앱(컨테이너) 배포용이라 모델 배포의 답이 아님</b>, AutoML은 유연성 낮음, Colab Enterprise는 노트북뿐 <button class="qref" data-id="416">4세트 Q16</button>. 앱 쪽에서는 모델을 endpoint로 분리 서빙하고 이벤트(Pub/Sub)로 연결하면 앱과 독립적으로 버전·배포 <button class="qref" data-id="424">4세트 Q24</button></td></tr>
    <tr><td>AI 추천·예측을 설명 가능하게 + 거버넌스·감사</td><td class="strong">Agent Platform + Vertex Explainable AI</td><td>특성 기여도로 “왜”를 설명, Model Monitoring으로 드리프트·스큐 감시, 예측·설명은 BigQuery에 저장. Cloud Logging 내보내기는 요청·응답 기록뿐 <button class="qref" data-id="604">사례 연구 Q4</button></td></tr>
    <tr><td>운영 모델 출력의 지속적 평가·거버넌스, 편향·유해 패턴 확산 방지</td><td class="strong">Agent Platform Model Monitoring (+ 평가 파이프라인)</td><td>드리프트·스큐·성능 저하를 계속 감시하고 알림. 편향 자체는 공정성 모델 평가, 생성형 출력은 Gen AI Evaluation Service. 요건 동사로 구분: explain → Explainable AI, monitor → Model Monitoring, filter → Model Armor <button class="qref" data-id="611">사례 연구 Q11</button>. 신상품·카테고리 추가로 생성형 AI 품질 저하 감시 → Model Monitoring + 평가 데이터 세트(Gen AI Evaluation Service, 적응형 루브릭) + 자동 알림. 수동 검토만·측정 없는 분기별 재학습·Cloud Storage 보관 X <button class="qref" data-id="628">사례 연구 Q28</button></td></tr>
    <tr><td>GPU 파인튜닝·학습이 간헐적 + 비용 통제·격리·축소</td><td class="strong">Agent Platform 맞춤 학습 작업 (serverless training)</td><td>작업 동안만 GPU, 끝나면 반납, quota로 상한. 고정 크기 GPU 노드 풀·CUD·온프레미스 GPU X. Gemini 튜닝이면 관리형 튜닝이 먼저 <button class="qref" data-id="615">사례 연구 Q15</button></td></tr>
    <tr><td>LLM이 내 데이터로 답(대화형 검색) + 재학습 최소</td><td class="strong">RAG (Agent Platform RAG Engine·Vector Search, 벡터 임베딩)</td><td>지식은 색인에, 모델은 그대로. 적응 단계는 가벼운 순으로 프롬프트 → RAG → 파인튜닝 → 처음부터 학습. 파인튜닝은 말투·형식용이지 자주 바뀌는 사실 데이터용이 아님 <button class="qref" data-id="605">사례 연구 Q5</button></td></tr>
    <tr><td>Kubernetes 앱 패키징</td><td class="strong">Helm</td><td>앱 YAML 묶음(chart) + <code>values.yaml</code>로 템플릿 렌더링 → 팀·환경별 설치(release). “reusable packages from configurable templates” = Helm. Infrastructure Manager(인프라 IaC)와 다름 <button class="qref" data-id="413">4세트 Q13</button></td></tr>
    <tr><td>오픈소스 CI/CD 서버</td><td class="strong">Jenkins</td><td>Jenkinsfile 파이프라인으로 빌드·테스트·배포. GCP 관리형 대안은 Cloud Build + Cloud Deploy <button class="qref" data-id="413">4세트 Q13</button></td></tr>
    <tr><td>Kubernetes 방식 구성</td><td class="strong">Config Sync · Config Controller</td><td>Git의 YAML을 클러스터·GCP 리소스에 자동 동기화(GitOps) <button class="qref" data-id="38">Q38</button></td></tr>
    <tr><td>VM 이미지</td><td class="strong">Packer + 커스텀 이미지</td><td>VM 이미지에 미리 설치(baking)해서 인스턴스 템플릿으로 배포 <button class="qref" data-id="41">Q41</button></td></tr>
  </tbody></table></div>
</section>

<section>
  <h2>3. 파이프라인 단계 순서 <button class="qref" data-id="2">Q2</button></h2>
  <div class="tbl"><table><thead><tr><th>순서</th><th>단계</th><th>포인트</th></tr></thead><tbody>
    <tr><td>1</td><td class="strong">Unit test</td><td>빌드 전에. 빠르고 싸니까 가장 먼저 실패시킴</td></tr>
    <tr><td>2</td><td class="strong">빌드 → Artifact Registry push</td><td><mark>Build once</mark>: 이미지는 딱 한 번 만들고 환경마다 재빌드하지 않음</td></tr>
    <tr><td>3</td><td class="strong">Staging 배포 + 통합·인수(acceptance) 테스트</td><td>프로덕션과 같은 구성에서 비즈니스 요건 검증</td></tr>
    <tr><td>4</td><td class="strong">승인(approval)</td><td>사람은 여기서 “승인”만. Cloud Build 승인 또는 Cloud Deploy promotion <button class="qref" data-id="9">Q9</button></td></tr>
    <tr><td>5</td><td class="strong">Prod 배포 (promote)</td><td>staging에서 검증한 <b>같은 이미지(digest)</b>를 승격</td></tr>
    <tr><td>6</td><td class="strong">Smoke test</td><td>배포 직후 최소 동작 확인. 프로덕션에서 무거운 테스트는 하지 않음</td></tr>
  </tbody></table></div>
  <p><b>테스트 종류 정리</b></p>
  <div class="tbl"><table><thead><tr><th>테스트</th><th>무엇을 확인</th></tr></thead><tbody>
    <tr><td class="strong">Unit</td><td>함수·클래스 하나가 맞게 동작하나</td></tr>
    <tr><td class="strong">Integration</td><td>서비스·DB 등 여러 부품이 함께 잘 동작하나</td></tr>
    <tr><td class="strong">Acceptance</td><td>비즈니스 요건을 만족하나 (staging)</td></tr>
    <tr><td class="strong">Smoke</td><td>배포 직후 핵심 기능이 살아 있나 (prod)</td></tr>
    <tr><td class="strong">Load</td><td>예상 트래픽에서 지연·오류 목표(SLO, Service Level Objective, 서비스 수준 목표)를 지키나 <button class="qref" data-id="26">Q26</button></td></tr>
    <tr><td class="strong">Fault injection</td><td>특정 서비스가 느리거나 실패할 때 전체가 버티나 <button class="qref" data-id="23">Q23</button></td></tr>
  </tbody></table></div>
  <p><b>빌드를 빠르게: Dockerfile 두 원칙</b> <button class="qref" data-id="203">2세트 Q3</button></p>
  <ul>
    <li><b>자주 바뀌는 것은 아래로 (레이어 캐시)</b>: Docker는 입력이 바뀐 줄부터 아래를 전부 다시 실행합니다. <code>COPY requirements.txt</code> → <code>pip install</code> → <code>COPY . .</code> 순서로 두면 소스만 고칠 때 의존성 설치(수 분)를 캐시로 건너뜁니다.</li>
    <li><b>이미지는 작게</b>: <code>ubuntu</code> + Python 수동 설치 대신 <code>python:3.12-slim</code>/<code>-alpine</code>, 필요하면 multi-stage build. push·pull이 줄어 롤아웃·스케일 아웃도 빨라집니다.</li>
  </ul>
  <p>그 밖에: <code>.dockerignore</code>, Cloud Build 캐시(<code>--cache-from</code>, Kaniko), 더 큰 Cloud Build 머신 타입, GKE Image streaming. <mark>GKE 노드를 키우는 건 빌드 시간·이미지 크기와 무관</mark>합니다.</p>
</section>

<section>
  <h2>4. 산출물 관리와 추적 <button class="qref" data-id="35">Q35</button></h2>
  <p>“지금 운영 중인 컨테이너가 어느 소스에서 왔나”를 답할 수 있어야 합니다. 추적 ID는 <b>배포되는 산출물(이미지)</b>에 붙입니다.</p>
  <div class="tbl"><table><thead><tr><th>방법</th><th>의미</th></tr></thead><tbody>
    <tr><td class="strong">태그 = commit hash</td><td>Cloud Build의 <code>$SHORT_SHA</code>/<code>$COMMIT_SHA</code>. 소스와 1:1 대응 → 추적·롤백 가능</td></tr>
    <tr><td class="strong">digest (<code>@sha256:…</code>)</td><td>이미지 내용의 지문. 태그가 바뀌어도 정확히 같은 이미지를 보장</td></tr>
    <tr><td class="strong">Immutable tags</td><td>Artifact Registry에서 같은 태그 덮어쓰기 금지</td></tr>
    <tr><td class="strong">SemVer 태그</td><td>SemVer(Semantic Versioning, 의미 있는 버전 번호, 예: <code>v1.4.2</code>)는 사람용. commit hash와 병행</td></tr>
    <tr><td class="strong">Binary Authorization</td><td>파이프라인이 서명한 이미지만 배포 허용 (공급망 보안)</td></tr>
  </tbody></table></div>
  <p><code>latest</code>는 프로덕션에서 쓰지 않습니다. 고유하지 않아서 “무엇이 배포됐는지”, “어디로 롤백할지”를 알 수 없습니다. <button class="qref" data-id="243">2세트 Q43</button></p>
  <ul>
    <li><code>imagePullPolicy: Always</code>로 바꿔도 해결되지 않습니다. latest가 바뀌면 기존 Pod는 옛 이미지, 새 Pod는 새 이미지로 <b>버전이 섞입니다</b>.</li>
    <li>고유 버전 태그(또는 digest)면 <code>IfNotPresent</code>로 노드 캐시를 재사용해도 안전합니다.</li>
    <li>새 버전은 Pod 재시작이 아니라 <b>Deployment의 image 필드를 바꿔</b> rolling update로 배포합니다(기록·롤백이 남음). 환경은 staging → production 네임스페이스로 나누고 같은 이미지를 승격합니다.</li>
  </ul>
</section>

<section>
  <h2>5. 파이프라인의 인증과 보안 <button class="qref" data-id="9">Q9</button> <button class="qref" data-id="40">Q40</button> <button class="qref" data-id="229">2세트 Q29</button></h2>
  <p>원칙: <mark>장기 키(서비스 계정 JSON 키)를 만들지 않는다.</mark> 단기 토큰으로 필요한 만큼만.</p>
  <div class="tbl"><table><thead><tr><th>상황</th><th>방법</th></tr></thead><tbody>
    <tr><td>Cloud Build가 GCP 리소스에 배포</td><td class="strong">Cloud Build 서비스 계정(SA, Service Account) + 최소 IAM 역할</td></tr>
    <tr><td>파이프라인이 다른 SA 권한을 잠깐 빌림 (예: Terraform prod 적용)</td><td class="strong">Service account impersonation (단기 토큰)</td></tr>
    <tr><td>GitHub Actions 등 <b>외부</b> CI가 GCP에 접근</td><td class="strong">WIF(Workload Identity Federation, 워크로드 ID 제휴)</td></tr>
    <tr><td>개발자에게 prod 권한을 주지 않고 배포</td><td class="strong">파이프라인 SA만 prod 권한 (직무 분리)</td></tr>
    <tr><td>앱이 쓰는 비밀 값</td><td class="strong">Secret Manager (빌드·배포 자격 증명과 별개)</td></tr>
    <tr><td>조직 전체에서 SA 키 생성 금지</td><td class="strong">Organization Policy <code>iam.disableServiceAccountKeyCreation</code></td></tr>
  </tbody></table></div>
  <p><b>Shift-left 보안: 파이프라인 안에서 결함 찾기</b> <button class="qref" data-id="229">2세트 Q29</button>: “빠른 배포 유지 + 운영 전에 보안 결함 자동 발견”이면 사람 승인 대신 <mark>자동 검사를 파이프라인 앞단에</mark> 넣습니다.</p>
  <div class="tbl"><table><thead><tr><th>통제</th><th>보장하는 것</th><th>결함을 찾나</th></tr></thead><tbody>
    <tr><td class="strong">소스 코드 보안 분석 (SAST, Static Application Security Testing)</td><td><b>우리가 쓴 코드</b>의 인젝션·하드코딩 비밀번호 등</td><td><b>O</b></td></tr>
    <tr><td class="strong">취약점 스캔 (Artifact Analysis)</td><td><b>가져다 쓴</b> 라이브러리·OS 패키지의 알려진 CVE(Common Vulnerabilities and Exposures). Artifact Registry 자동 스캔 / 온디맨드 스캔을 빌드 단계에</td><td><b>O</b></td></tr>
    <tr><td>서명 + 신뢰 저장소 + Binary Authorization</td><td>승인된 빌드에서 나왔고 변조되지 않음 (공급망 무결성)</td><td>X (취약한 이미지도 서명될 수 있음)</td></tr>
    <tr><td>보안 전문가가 모든 커밋 승인</td><td>-</td><td>병목. 고위험 변경에만</td></tr>
    <tr><td>stub 단위 테스트</td><td>기능이 계약대로 동작</td><td>X</td></tr>
  </tbody></table></div>
  <p>흐름: <code>commit → SAST → 빌드 → 취약점 스캔 → (통과 시 attestation) → Binary Authorization → 배포</code>. 심각도 기준을 넘으면 빌드를 실패시킵니다.</p>
  <p><b>탐지 + 차단 = 두 겹(defense-in-depth)</b> <button class="qref" data-id="502">5세트 Q2</button>: “취약 이미지 식별 + critical 이미지의 production 승격 차단, 두 개 고르기” → <mark>Artifact Analysis 보고서 검토</mark>(가시성·심각도·fix 여부 판단) + <mark>스캔 활성화·critical이면 배포 차단</mark>(파이프라인 게이트 / Binary Authorization). 둘 다 Artifact Analysis라 중복처럼 보이지만 역할이 “보고 판단”과 “자동으로 막기”로 다릅니다. 빌드 <b>전</b> 이미지 스캔(이미지가 아직 없음), 이미지 안 보안 정책(런타임 통제 아님), Shielded GKE Nodes(노드 VM 무결성)는 오답.</p>
  <p><b>환경 단계별 승격 강제: 앞 환경을 통과한 이미지만 다음 환경으로</b> <button class="qref" data-id="512">5세트 Q12</button>: “sandbox → QA → live, 개발자 배포 자율성은 유지 + 테스트 통과 이미지만 live + 관리형·최소 노력” → <mark>Binary Authorization 클러스터별 정책 + CI가 단계 통과마다 attestation 생성</mark>. QA 클러스터는 “sandbox-passed”, live 클러스터는 “qa-passed” attestation을 요구하고, 증명이 없으면 배포 권한이 있어도 거부됩니다. attestation은 태그가 아니라 <b>이미지 digest</b>에 붙습니다. 오답: lifecycle hook(컨테이너 시작 시 실행이라 생성 자체를 못 막고 매니페스트에서 뺄 수 있음), 사내 규칙(강제력 없음), 자체 admission webhook(같은 일을 직접 개발·운영, Binary Authorization이 그 관리형 버전).</p>
  <p><b>공급망 산출물: 누가 만들고, 누가 막고, 누가 모아 보나</b> <button class="qref" data-id="308">3세트 Q8</button></p>
  <div class="tbl"><table><thead><tr><th>요구 사항 / 역할</th><th>서비스</th></tr></thead><tbody>
    <tr><td>알려진 취약점 탐지 + <b>SBOM</b>(Software Bill of Materials, 소프트웨어 자재 명세서)</td><td class="strong">Artifact Analysis (Artifact Registry와 함께) = 만듦</td></tr>
    <tr><td>어떻게 빌드됐는지 검증 가능한 기록 (<b>build provenance</b>)</td><td class="strong">Cloud Build (<code>requestedVerifyOption: VERIFIED</code>) = 만듦</td></tr>
    <tr><td>attestation 없는 이미지 배포 차단</td><td>Binary Authorization = 막음 (스캔·SBOM 안 만듦)</td></tr>
    <tr><td>조직 전체 보안 결과 집계</td><td>Security Command Center = 모아 봄 (provenance·SBOM 안 만듦)</td></tr>
    <tr><td>GCP 리소스·IAM 목록</td><td>Cloud Asset Inventory (이미지 안 패키지는 모름)</td></tr>
  </tbody></table></div>
</section>

<section>
  <h2>6. 배포 전략 <button class="qref" data-id="18">Q18</button> <button class="qref" data-id="3">Q3</button> <button class="qref" data-id="221">2세트 Q21</button> <button class="qref" data-id="410">4세트 Q10</button></h2>
  <div class="tbl"><table><thead><tr><th>전략</th><th>방식</th><th>언제</th></tr></thead><tbody>
    <tr><td class="strong">Rolling</td><td>몇 대씩 차례로 교체</td><td>기본. 무중단, 추가 자원 적음</td></tr>
    <tr><td class="strong">Canary</td><td>일부 트래픽(예: 5%)만 새 버전 → 지표 확인 후 확대</td><td>위험한 변경, 실제 트래픽으로 검증</td></tr>
    <tr><td class="strong">Blue/Green</td><td>새 환경을 통째로 띄우고 한 번에 전환</td><td>즉시 전환·즉시 복귀가 필요할 때 (자원 2배)</td></tr>
    <tr><td class="strong">A/B test</td><td>사용자 그룹별로 다른 버전, 비즈니스 지표 비교</td><td>기능 효과 측정 (배포 안전성 목적 아님)</td></tr>
  </tbody></table></div>
  <p><b>“스테이징에선 정상, 운영에서만 문제”</b> <button class="qref" data-id="410">4세트 Q10</button>: 운영 데이터 크기·캐시·의존성 경합·실사용자 행동은 스테이징으로 완전히 재현되지 않습니다. “<mark>영향 고객 최소 + 전체 배포 전 감지</mark>”면 <b>canary</b>(소수 비율 → 지표 비교 → 점진 확대, 이상 시 중단). 릴리스 횟수 줄이기(변경이 쌓여 더 커짐)·릴리스 작게 하기(여전히 전원 배포)·스테이징 부하 늘리기(보완책일 뿐)는 오답.</p>
  <p><b>반대로 “production 전에 검증”이면 canary·blue/green은 오답</b> <button class="qref" data-id="507">5세트 Q7</button>: “각 릴리스를 <b>non-production</b> 환경에서 테스트한 뒤 production 승인” → <mark>staging 배포·검증 → 승인 → production 승격</mark>(예: Jenkins가 Git tag 감시, <code>testing-*</code> 태그는 staging, 통과 후 <code>prod-*</code> 태그로 같은 버전을 production). blue/green으로 prod 직행(롤백만 쉬움), prod 배포 후 테스트, 15% canary는 모두 <b>이미 production 안</b>이라 사전 검증이 아닙니다.</p>
  <p><b>플랫폼별 도구</b>: 문제의 플랫폼에 내장된 기능이 정답입니다. 다른 플랫폼의 도구를 가져오면 오답.</p>
  <div class="tbl"><table><thead><tr><th>플랫폼</th><th>canary / rolling</th></tr></thead><tbody>
    <tr><td class="strong">App Engine</td><td>새 version + traffic splitting</td></tr>
    <tr><td class="strong">Cloud Run</td><td>새 revision(<code>--no-traffic</code>) + revision별 트래픽 %</td></tr>
    <tr><td class="strong">Compute Engine</td><td>MIG(Managed Instance Group, 관리형 인스턴스 그룹) rolling update (<code>maxSurge</code>/<code>maxUnavailable</code>), canary는 두 번째 템플릿에 <code>targetSize</code></td></tr>
    <tr><td class="strong">GKE</td><td>Deployment rolling update + <b>readiness probe</b>(준비 안 된 Pod에 트래픽 차단). 비율 canary는 Gateway API · Cloud Service Mesh · Cloud Deploy</td></tr>
  </tbody></table></div>
  <p><b>MIG 업데이트 작업 구분</b> (<button class="qref" data-id="221">2세트 Q21</button>): 새 템플릿을 “언제, 어느 VM에” 적용하느냐의 차이입니다.</p>
  <div class="tbl"><table><thead><tr><th>작업</th><th>기존 VM</th><th>새로 생기는 VM</th><th>언제</th></tr></thead><tbody>
    <tr><td class="strong">Rolling update: Proactive (Automatic)</td><td>새 템플릿으로 점진 교체·재시작</td><td>새 템플릿</td><td>새 버전을 지금 전부 배포</td></tr>
    <tr><td class="strong">Rolling update: Opportunistic (Selective)</td><td><mark>그대로</mark></td><td><mark>새 템플릿</mark></td><td>급하지 않음, 기존 VM을 건드리지 말 것</td></tr>
    <tr><td class="strong">Rolling restart</td><td>재시작만 (템플릿 그대로)</td><td>-</td><td>설정 반영·복구용 재기동</td></tr>
    <tr><td class="strong">Rolling replace</td><td>삭제 후 재생성</td><td>-</td><td>VM을 새로 만들어 교체</td></tr>
  </tbody></table></div>
</section>

<section>
  <h2>7. 롤백: 되돌리는 것도 파이프라인으로 <button class="qref" data-id="46">Q46</button> <button class="qref" data-id="233">2세트 Q33</button></h2>
  <p>배포 후 장애가 났고 이전 버전이 안정적이었다면, <b>고치기 전에 먼저 롤백</b>합니다. 원인 조사는 롤백해 둔 상태에서 따로 합니다.</p>
  <pre><code>git revert &lt;문제 커밋&gt; → 파이프라인 재실행 → 새 산출물(= 이전 코드) → rolling 배포
   소스도 정상            기록이 남음            템플릿·이미지도 정상     무중단</code></pre>
  <div class="tbl"><table><thead><tr><th>롤백 방법</th><th>판정</th><th>이유</th></tr></thead><tbody>
    <tr><td>소스 revert → 파이프라인 재실행</td><td class="strong">정석</td><td>소스·산출물·운영이 모두 일치, 이력 남음</td></tr>
    <tr><td>Cloud Deploy rollback (이전 release로 재배포)</td><td class="strong">OK</td><td>파이프라인 도구의 공식 기능. 이후 소스도 revert</td></tr>
    <tr><td>템플릿만 수동 교체 + VM 전부 삭제</td><td class="strong">오답</td><td>소스는 여전히 문제 코드(드리프트), 일괄 삭제는 서비스 중단</td></tr>
    <tr><td>VM·컨테이너에 접속해 직접 수정·파일 교체</td><td class="strong">오답</td><td>autohealing·재생성 시 사라짐, 감사·재현 불가</td></tr>
  </tbody></table></div>
  <p>App Engine(<code>set-traffic --splits=v1=1</code>), Cloud Run(이전 revision에 100%)은 트래픽만 돌리는 즉시 롤백도 가능합니다. 이 경우에도 이후 소스를 revert해서 다음 배포 때 문제가 되살아나지 않게 합니다.</p>
  <p><b>DB 스키마가 바뀌는 배포의 롤백</b> <button class="qref" data-id="233">2세트 Q33</button>: 트래픽은 즉시 되돌릴 수 있어도 <b>DB 상태는 못 되돌립니다</b>. 그래서 스키마를 <mark>expand-and-contract(확장 후 축소)</mark>로 바꿔 이전 버전과 새 버전이 같은 DB에서 동시에 동작하게 합니다.</p>
  <pre><code>① Expand  : 새 열·테이블 추가만 (기존 열 유지)       ← 별도 마이그레이션 파이프라인, 한 번만
② 앱 배포 : 새 revision에 5% → 25% → 100%           ← 문제 시 이전 revision 100% (DB도 호환)
③ Contract: 옛 열 삭제 (롤백이 더 이상 필요 없을 때)</code></pre>
  <div class="tbl"><table><thead><tr><th>보기</th><th>판정</th><th>이유</th></tr></thead><tbody>
    <tr><td>별도 마이그레이션 파이프라인 + 하위 호환 스키마 + 점진적 트래픽</td><td class="strong">정답</td><td>이전 revision도 동작 → 즉시 롤백 가능</td></tr>
    <tr><td>컨테이너 시작 시 마이그레이션 실행</td><td class="strong">오답</td><td>인스턴스가 동시에 여러 개 떠서 동시 실행·잠금 경합·cold start 지연</td></tr>
    <tr><td>:latest 태그 + 수동 스키마 변경</td><td class="strong">오답</td><td>이전 버전 식별 불가(Q35), 실수·드리프트</td></tr>
    <tr><td>스키마 먼저 변경 + 즉시 100% 전환</td><td class="strong">오답</td><td>이전 revision이 깨져 롤백 무의미, 카나리 없음</td></tr>
  </tbody></table></div>
</section>

<section>
  <h2>8. 인프라도 코드로: IaC와 불변 인프라 <button class="qref" data-id="9">Q9</button> <button class="qref" data-id="38">Q38</button> <button class="qref" data-id="41">Q41</button> <button class="qref" data-id="231">2세트 Q31</button> <button class="qref" data-id="304">3세트 Q4</button> <button class="qref" data-id="312">3세트 Q12</button> <button class="qref" data-id="322">3세트 Q22</button></h2>
  <div class="tbl"><table><thead><tr><th>상황</th><th>도구</th></tr></thead><tbody>
    <tr><td>일반 GCP 인프라를 코드로 (관리형 실행)</td><td class="strong">Infrastructure Manager (Terraform 기반)</td></tr>
    <tr><td>Terraform을 CI/CD로: PR엔 plan, 승인 후 apply</td><td class="strong">Cloud Build + 트리거 + 승인 + SA impersonation</td></tr>
    <tr><td>GCP 리소스를 Kubernetes YAML로, 관리형</td><td class="strong">Config Controller</td></tr>
    <tr><td>Git의 K8s 구성을 여러 클러스터에 동기화</td><td class="strong">Config Sync</td></tr>
    <tr><td>same configurations across GKE and EKS clusters, continuously enforce security policies, Google-recommended</td><td class="strong">GKE fleet + Config Sync(중앙 저장소) + Policy Controller (<button class="qref" data-id="522">5세트 Q22</button>)</td></tr>
    <tr><td>centralized CI/CD for GKE and on-premises Kubernetes, prevent configuration drift, GitOps</td><td class="strong">GKE fleet + Config Sync + Cloud Deploy. Cloud Build + kubectl 직접 배포 X. 새 환경을 템플릿으로 빠르게 늘리는 것까지면 GKE + 표준 템플릿 + GitOps 프로비저닝 <button class="qref" data-id="633">사례 연구 Q33</button> (<button class="qref" data-id="602">사례 연구 Q2</button>)</td></tr>
    <tr><td>continuous deployment, update SaaS rapidly, reduce outages caused by configuration drift</td><td class="strong">Cloud Build(빌드·테스트) + Artifact Registry(불변 이미지) + Cloud Deploy(환경별 단계적 승격·승인·롤백). 수동 배포 기간 + 변경 티켓·노드 SSH 배포·월 1회 배포 X (<button class="qref" data-id="640">사례 연구 Q40</button>)</td></tr>
    <tr><td>VM이 빨리 떠야 하고 설치할 게 많음</td><td class="strong">커스텀 이미지에 미리 설치(baking) + 인스턴스 템플릿</td></tr>
    <tr><td>VM 한 대의 stateless 앱을 자동 확장·축소</td><td class="strong">디스크 → 커스텀 이미지 → 인스턴스 템플릿 → autoscaled MIG (<button class="qref" data-id="231">2세트 Q31</button>)</td></tr>
  </tbody></table></div>
  <p><b>IaC는 비용 거버넌스 도구이기도 합니다</b> <button class="qref" data-id="312">3세트 Q12</button>: “<mark>prevent uncontrolled resource creation</mark>, <mark>consistent, repeatable processes</mark>”면 IaC. 모듈에 필수 labels(department·cost-center)·승인된 머신 유형·리전을 넣고 코드 리뷰 + 파이프라인으로만 만들게 하면 난립과 비용이 줄고, labels로 부서별 비용 귀속도 됩니다.</p>
  <p><b>표준 아키텍처를 셀프서비스로: Service Catalog</b> <button class="qref" data-id="322">3세트 Q22</button>: “사전 승인된 아키텍처 + 개발자 셀프서비스 + 안전한 기본값 + <mark>배포마다 수동 승인 없음</mark>”이면 플랫폼팀이 보안 설정(로깅·네트워크·최소 권한)을 넣은 <b>Terraform 구성을 Service Catalog에 게시</b>하고 IAM으로 공유합니다. 승인은 <b>템플릿 게시 때 한 번</b>, 배포는 셀프서비스. Cloud Build는 템플릿 테스트용으로 쓰고, 배포마다 승인 게이트를 두면 금지 조건 위반입니다(“승인이 필요하다”는 요건이면 반대로 Cloud Build 승인이 정답, <button class="qref" data-id="9">Q9</button>). Monitoring 알림은 사후 탐지, Organization Policy·IAM Recommender는 경계·사후 권장이라 보완 수단입니다.</p>
  <p><b>VM 리소스 관계</b> <button class="qref" data-id="231">2세트 Q31</button>: <code>디스크 → 커스텀 이미지 → 인스턴스 템플릿 → MIG</code>. 순서가 빠지거나 뒤집힌 보기는 오답입니다.</p>
  <div class="tbl"><table><thead><tr><th>리소스</th><th>정체</th><th>무엇으로 만드나</th></tr></thead><tbody>
    <tr><td class="strong">Snapshot</td><td>디스크 <b>백업</b>. 존에 안 묶이는 전역 리소스라 <b>다른 리전·프로젝트</b>에서 바로 새 디스크로 복원 가능 (<button class="qref" data-id="304">3세트 Q4</button>)</td><td>디스크</td></tr>
    <tr><td class="strong">Custom image</td><td>부팅 디스크 <b>복제용 원본</b>(골든 이미지)</td><td>디스크, 스냅샷, 다른 이미지 (템플릿으로는 X)</td></tr>
    <tr><td class="strong">Instance template</td><td>VM <b>설계도</b>(설정만, 데이터 없음)</td><td>이미지 등을 참조</td></tr>
    <tr><td class="strong">MIG</td><td>템플릿으로 찍어 낸 동일 VM 묶음</td><td><mark>반드시 인스턴스 템플릿</mark> (이미지로 직접 X)</td></tr>
  </tbody></table></div>
  <p><b>Cloud Storage의 이미지 파일은 부팅 디스크가 아닙니다</b> (<button class="qref" data-id="304">3세트 Q4</button>): <code>.tar.gz</code>·VMDK·dd raw 파일은 먼저 <mark>커스텀 이미지로 import</mark>해야 VM을 만들 수 있습니다. Compute Engine 안에서 복제할 땐 export·import 없이 스냅샷(또는 이미지)을 바로 쓰고, dd·netcat 같은 수동 블록 복사는 오답입니다.</p>
  <p><b>불변 인프라(immutable infrastructure)</b>: 운영 중인 서버를 고치지 않고, <mark>새 이미지·템플릿을 만들어 통째로 교체</mark>합니다. MIG·GKE·Cloud Run은 언제든 인스턴스를 다시 만들기 때문에, 서버 안에서 한 수동 변경은 결국 사라집니다. 그래서 시험에서 “SSH로 접속해서 고친다”는 거의 항상 오답입니다.</p>
  <p><b>Infrastructure Manager 도입의 “business risk”</b> <button class="qref" data-id="415">4세트 Q15</button>: <mark>사람</mark>(엔지니어가 Terraform·IaC를 모름 → 교육 비용·이전 지연·설정 실수) + <mark>범위</mark>(GCP 리소스 전용 → 온프레미스 프로비저닝 도구는 계속 따로 운영). 리소스 삭제 가능·서비스 계정 필요는 <b>정상 기능</b>(IAM·preview·abandon으로 통제)이라 비즈니스 위험이 아니고, “언젠가 deprecated”는 일반론, Python 템플릿은 옛 Deployment Manager 이야기.</p>
</section>

<section>
  <h2>9. 시험 함정 모음</h2>
  <div class="tbl"><table><thead><tr><th>함정</th><th>실제</th></tr></thead><tbody>
    <tr><td>빌드·롤아웃이 느리니 GKE 노드를 큰 머신으로</td><td>빌드는 노드에서 안 함. Dockerfile 순서(캐시) + 작은 베이스 이미지 (<button class="qref" data-id="203">2세트 Q3</button>)</td></tr>
    <tr><td>기존 VM은 건드리지 말고 앞으로만 새 템플릿 → proactive rolling update(속도 조절)</td><td>proactive는 결국 기존 VM을 교체. <b>opportunistic(Selective)</b> (<button class="qref" data-id="221">2세트 Q21</button>)</td></tr>
    <tr><td>latest 태그 + imagePullPolicy Always + Pod 재시작이면 항상 최신이 배포됨</td><td>Pod마다 버전이 섞이고 배포 기록이 없음. <b>고유 버전 태그 + Deployment image 변경</b> (<button class="qref" data-id="243">2세트 Q43</button>)</td></tr>
    <tr><td>스냅샷을 Cloud Storage에 이미지 파일로 내보내 새 VM 부팅 디스크로 바로 선택</td><td>Cloud Storage 파일은 import 없이 부팅 불가. <b>스냅샷을 대상 프로젝트·리전에서 바로 사용</b> (<button class="qref" data-id="304">3세트 Q4</button>)</td></tr>
    <tr><td>환경마다 이미지를 다시 빌드</td><td>Build once, promote. 테스트한 것과 같은 이미지를 배포 (Q2)</td></tr>
    <tr><td>prod에서 integration·load test</td><td>무거운 테스트는 staging, prod는 smoke test (Q2)</td></tr>
    <tr><td>“production 전 비운영 환경 검증”에 blue/green prod 직행 / prod 배포 후 테스트 / 15% canary</td><td>셋 다 production 안. <b>staging 검증 → 승인 → 승격</b> (<button class="qref" data-id="507">5세트 Q7</button>)</td></tr>
    <tr><td>이미지 태그에 빌드 시각·<code>latest</code></td><td>commit hash 태그 (Q35)</td></tr>
    <tr><td>SA 키를 만들어 CI에 저장</td><td>Cloud Build SA / impersonation / WIF (Q9, Q40)</td></tr>
    <tr><td>개발자에게 prod 권한 부여</td><td>파이프라인 SA만, 사람은 승인만 (Q9)</td></tr>
    <tr><td>“이전 템플릿으로 바꾸고 VM 전부 삭제”</td><td>파이프라인 우회 + 중단. 소스 revert → 재배포 (Q46)</td></tr>
    <tr><td>VM에 SSH 접속해 수정·파일 교체</td><td>autohealing으로 사라짐, 드리프트 (Q46)</td></tr>
    <tr><td>App Engine canary에 LB·새 프로젝트</td><td>같은 service의 version + traffic splitting (Q18)</td></tr>
    <tr><td>MIG를 커스텀 이미지로 직접 / 템플릿으로 이미지 만들기</td><td>MIG는 반드시 템플릿, 이미지는 디스크·스냅샷으로. <b>디스크 → 이미지 → 템플릿 → MIG</b> (<button class="qref" data-id="231">2세트 Q31</button>)</td></tr>
    <tr><td>DB 마이그레이션을 컨테이너 시작 때 / 스키마 먼저 바꾸고 100% 전환</td><td>동시 실행·이전 버전 파손. <b>별도 파이프라인 + 하위 호환(expand-and-contract) + 점진적 트래픽</b> (<button class="qref" data-id="233">2세트 Q33</button>)</td></tr>
    <tr><td>롤링 업데이트 중 비정상 Pod에 트래픽</td><td>readiness probe (liveness는 재시작용) (Q3)</td></tr>
    <tr><td>SBOM·provenance·취약점 보고서를 Security Command Center / Binary Authorization / Cloud Asset Inventory로 생성?</td><td>SCC는 집계, Binary Authorization은 배포 차단, Asset Inventory는 리소스 목록. 생성은 <b>Cloud Build(provenance) + Artifact Analysis(스캔·SBOM)</b> (<button class="qref" data-id="308">3세트 Q8</button>)</td></tr>
    <tr><td>Cloud Deploy가 private GKE에 연결 실패 → custom target / VPC SC / default VPC의 private pool</td><td>원인은 작업자가 VPC 밖. <b>클러스터 VPC에 연결된 private pool</b>을 target 실행 환경으로 (<button class="qref" data-id="341">3세트 Q41</button>)</td></tr>
    <tr><td>표준·보안 기본값을 지키게 → 모든 Terraform 배포를 Cloud Build에서 관리자 승인 대기</td><td>“배포마다 수동 승인 없이”가 요건이면 병목·금지 조건 위반. <b>승인된 Terraform을 Service Catalog로 셀프서비스</b> (<button class="qref" data-id="322">3세트 Q22</button>)</td></tr>
    <tr><td>보안 결함을 찾으려고 모든 커밋에 보안 전문가 승인 / 이미지 서명</td><td>승인은 병목, 서명은 무결성이지 결함 발견이 아님. <b>SAST + 취약점 스캔</b>을 파이프라인에 (<button class="qref" data-id="229">2세트 Q29</button>)</td></tr>
    <tr><td>취약 이미지 차단에 빌드 전 이미지 스캔 / 이미지 안 보안 정책 / Shielded GKE Nodes</td><td>이미지는 빌드 후에만 스캔 가능, 런타임 제한은 NetworkPolicy·securityContext, Shielded는 노드 VM 무결성. <b>Artifact Analysis 보고서 검토 + critical이면 배포 차단</b> (<button class="qref" data-id="502">5세트 Q2</button>)</td></tr>
  </tbody></table></div>
</section>

<section>
  <h2>10. 시험 키워드 → 정답</h2>
  <div class="tbl"><table><thead><tr><th>키워드</th><th>정답 방향</th></tr></thead><tbody>
    <tr><td>automatically build and test on every commit</td><td class="strong">Cloud Build trigger</td></tr>
    <tr><td>tiny instances (0.15 vCPU), place multiple instances efficiently, deploy tested releases reliably</td><td class="strong">GKE + 고유 버전 태그 이미지 + staging → production 네임스페이스 승격 (<button class="qref" data-id="243">2세트 Q43</button>)</td></tr>
    <tr><td>copy of a VM in another project and region, refresh without manually copying disk contents</td><td class="strong">부팅 디스크 standard snapshot → 대상 프로젝트에서 사용 → 새 VM (<button class="qref" data-id="304">3세트 Q4</button>)</td></tr>
    <tr><td>store container images, vulnerability scanning</td><td class="strong">Artifact Registry</td></tr>
    <tr><td>MIG, new template, do not restart or replace existing VMs, future VMs only</td><td class="strong">Rolling update opportunistic (Selective) (<button class="qref" data-id="221">2세트 Q21</button>)</td></tr>
    <tr><td>promote across dev / staging / prod, approval</td><td class="strong">Cloud Deploy</td></tr>
    <tr><td>on push to a branch, test → build → deploy to GKE dev only if tests pass, prevent developers from bypassing</td><td class="strong">Cloud Build trigger(테스트 → 빌드 → Artifact Registry) → Cloud Deploy release + 클러스터 배포 권한은 배포 서비스 계정만. 로컬 pre-commit hook·GitHub post-commit hook(없음)·취약점 스캔으로 테스트 대체 X (<button class="qref" data-id="429">4세트 Q29</button>)</td></tr>
    <tr><td>Cloud Deploy / Cloud Build cannot connect to private GKE control plane</td><td class="strong">Cloud Build private pool connected to that VPC (Cloud Deploy target executionConfigs) (<button class="qref" data-id="341">3세트 Q41</button>)</td></tr>
    <tr><td>only deploy verified / signed images</td><td class="strong">Binary Authorization</td></tr>
    <tr><td>only images that passed earlier environment tests reach live, developers retain deployment autonomy, managed, minimal effort</td><td class="strong">Binary Authorization 환경별 정책 + CI가 테스트 통과마다 attestation. lifecycle hook·조직 규칙·자체 admission controller X (<button class="qref" data-id="512">5세트 Q12</button>)</td></tr>
    <tr><td>detect known vulnerabilities, verifiable information about how the image was built, software bill of materials</td><td class="strong">Cloud Build + Artifact Registry + Artifact Analysis (<button class="qref" data-id="308">3세트 Q8</button>)</td></tr>
    <tr><td>maintain release pace, automatically identify security defects before production</td><td class="strong">CI/CD에 소스 코드 보안 분석(SAST) + 취약점 스캔(Artifact Analysis) (<button class="qref" data-id="229">2세트 Q29</button>)</td></tr>
    <tr><td>trace deployed container to source revision</td><td class="strong">image tag = commit hash</td></tr>
    <tr><td>no long-lived credentials, GitHub → GCP</td><td class="strong">Cloud Build GitHub integration / WIF</td></tr>
    <tr><td>approval before production, no keys</td><td class="strong">Cloud Build approval + SA impersonation</td></tr>
    <tr><td>release caused problems, previous release stable</td><td class="strong">소스 revert → 파이프라인 재배포</td></tr>
    <tr><td>small percentage of users, new version</td><td class="strong">canary (플랫폼 내장 기능)</td></tr>
    <tr><td>infrastructure as code, managed Terraform</td><td class="strong">Infrastructure Manager</td></tr>
    <tr><td>isolated environment per new tenant/provider, testing without risking production, minimize administrative overhead</td><td class="strong">IaC 템플릿(Terraform · Infrastructure Manager)으로 프로젝트·GKE 네임스페이스 + IAM·ResourceQuota·조직 정책을 함께 생성. 수동 VM·단일 공유 환경·물리 서버 X (<button class="qref" data-id="644">사례 연구 Q44</button>)</td></tr>
    <tr><td>standardized, pre-approved architectures, self-service, secure defaults, no manual approval per deployment</td><td class="strong">Service Catalog + approved Terraform configurations (<button class="qref" data-id="322">3세트 Q22</button>)</td></tr>
    <tr><td>attribute spending to departments, prevent uncontrolled resource creation, repeatable processes</td><td class="strong">standardized labels·tags + IaC (<button class="qref" data-id="312">3세트 Q12</button>)</td></tr>
    <tr><td>Kubernetes-style config for GCP resources</td><td class="strong">Config Controller</td></tr>
    <tr><td>fast VM startup, many packages</td><td class="strong">custom image (baking)</td></tr>
    <tr><td>return traffic immediately to previous release, database changes must not break previous revision</td><td class="strong">별도 마이그레이션 파이프라인 + backward-compatible schema + Cloud Run gradual traffic (<button class="qref" data-id="233">2세트 Q33</button>)</td></tr>
    <tr><td>stateless app on a single VM, add/reduce capacity automatically</td><td class="strong">custom image → instance template → autoscaled MIG (<button class="qref" data-id="231">2세트 Q31</button>)</td></tr>
    <tr><td>container build and rollout slow, source changes often</td><td class="strong">의존성 먼저 COPY·설치 + 작은 베이스 이미지 (<button class="qref" data-id="203">2세트 Q3</button>)</td></tr>
    <tr><td>improve communication between business and technical teams, upskill employees, reduce risk, accelerate learning</td><td class="strong">플랫폼 팀이 paved road(표준 CI/CD·보안 기준선·템플릿) 제공 + 제품 단위 단계적 이전(측정 가능한 성과). 완벽한 설계까지 대기·팀마다 도구 자유·전부 외주 X (<button class="qref" data-id="659">사례 연구 Q59</button>)</td></tr>
  </tbody></table></div>
</section>`
}
,
{
  id: "security",
  title: "보안 · IAM",
  updated: "2026-10-13",
  related: [7, 9, 12, 15, 20, 21, 22, 32, 33, 40, 44, 48, 202, 211, 215, 216, 219, 220, 223, 237, 239, 241, 244, 247, 302, 303, 305, 320, 321, 323, 324, 327, 335, 409, 418, 431, 433, 435, 437, 513, 516, 519, 523, 529, 530, 540, 541, 546, 608, 613, 614, 625, 637, 652, 653, 656, 903, 904, 907, 910, 916, 917],
  html: `
<section>
  <h2>1. 큰 그림: 보안을 다섯 질문으로 나누기</h2>
  <p>보안 문제는 보기마다 그럴듯한 보안 용어가 섞여 나옵니다. 먼저 <mark>요건이 다섯 질문 중 어디에 해당하는지</mark>부터 정하면 오답이 빨리 지워집니다.</p>
  <div class="tbl"><table><thead><tr><th>질문</th><th>영역</th><th>대표 도구</th></tr></thead><tbody>
    <tr><td><b>누구인가?</b></td><td>신원(Identity)</td><td>Cloud Identity · Google Workspace 계정, Google 그룹, 서비스 계정, Workforce / Workload Identity Federation</td></tr>
    <tr><td><b>무엇을 할 수 있나?</b></td><td>권한(Authorization)</td><td>IAM 역할·조건·Deny, Organization Policy</td></tr>
    <tr><td><b>어디로 들어오고 나가나?</b></td><td>네트워크</td><td>방화벽, IAP, VPC Service Controls, Cloud Armor (네트워크 가이드 참고)</td></tr>
    <tr><td><b>데이터는 안전한가?</b></td><td>데이터 보호</td><td>암호화 키(CMEK·HSM·EKM), Sensitive Data Protection(DLP), 디지털 서명</td></tr>
    <tr><td><b>무슨 일이 있었나?</b></td><td>감사·탐지</td><td>Cloud Audit Logs, Security Command Center, Access Transparency</td></tr>
  </tbody></table></div>
  <p>시험 전반에 깔린 원칙 세 가지: <b>최소 권한</b>(필요한 것만, 필요한 곳에만, 필요한 기간만), <b>사람 대신 그룹</b>, <b>장기 키를 만들지 않기</b>.</p>
  <p><b>규정 준수는 공동 책임 모델</b> <button class="qref" data-id="323">3세트 Q23</button>: Google은 클라우드 <b>자체</b>(데이터센터·하드웨어·서비스 기반)의 보안과 인증을, 고객은 클라우드 <b>안에서 만든 것</b>(앱 설계·설정·권한·데이터 처리 방식)을 책임집니다. GDPR·HIPAA·PCI DSS 문제에서 “Google 인증이 있으니 <b>자동</b> 준수”, “콘솔에서 <b>준수 설정 하나</b> 켜기”, “스캐너 하나로 <b>모든</b> 공백 찾기”는 오답이고, 정답은 <mark>요건에 맞는 보안·개인정보 통제를 직접 설계</mark>(by design and by default)입니다. Google 도구(IAM, 암호화·CMEK, 위치 제한, Sensitive Data Protection, Audit Logs, Assured Workloads)는 그 설계를 <b>돕는</b> 역할입니다.</p>
  <p><b>“이 서비스로 PCI DSS 준수가 가능한가?”</b> <button class="qref" data-id="541">5세트 Q41</button>: 보기는 대개 세 갈래입니다. “App Engine만 가능 / 공유 인프라라 불가”(지나치게 비관), “Google이 인증받았으니 모든 서비스 자동 사용”(지나치게 낙관), <mark>“GKE 등 적격(in-scope) 서비스의 기능을 고객이 구성해 준수 환경을 만든다”</mark>(정답). Google 인증은 <b>범위 목록에 든 서비스</b>와 <b>Google 몫의 통제</b>에만 적용되므로, 고객은 쓰는 서비스가 모두 범위 안인지 확인하고 CDE(Cardholder Data Environment, 카드 소지자 데이터 환경) 분리·비공개 클러스터·네트워크 정책·IAM 최소 권한·암호화·이미지 스캔·감사 로그를 직접 갖춥니다.</p>
  <p><b>Google 쪽 인증 증거는 Compliance Reports Manager</b> <button class="qref" data-id="530">5세트 Q30</button>: ISO/IEC 27001 감사 준비로 “Google Cloud 인프라·통제의 <b>현재 공식</b> 인증 문서”가 필요하면 <mark>Compliance Reports Manager에 로그인해 인증서(ISO/IEC 27001 등)·SOC 보고서를 받기</mark>. 오답: 독립 감사인으로 Google 인프라 재인증(Google은 이미 제3자 인증, 감사인은 <b>우리 ISMS</b>를 심사), 인터넷 검색 사본(만료·범위 누락·비공식), <b>Cloud Audit Logs</b>로 요청(우리 리소스의 “누가 무엇을 언제” 기록일 뿐 인증서 창구가 아님). 인증서는 Google 몫의 증거일 뿐이라 우리 앱은 여전히 공동 책임 모델에 따라 직접 통제를 입증합니다.</p>
  <p><b>HIPAA BAA 비대상 제품은 “쓰지 말자”가 아니라 끈다</b> <button class="qref" data-id="435">4세트 Q35</button>: PHI는 BAA가 적용되는 제품에서만 처리해야 하므로, 비대상 제품·API는 <mark>비활성화(disable)</mark>합니다. 켜 둔 채 사용 중지만 지시하면 기존 앱·자동화·권한 있는 사용자가 실수로 호출할 수 있습니다. 다시 켜지 못하게 하려면 조직 정책 <code>gcp.restrictServiceUsage</code> 또는 Assured Workloads(HIPAA). 같은 문제의 비용 쪽 답: 중단 허용 배치 = <b>Spot VM</b>.</p>
</section>

<section>
  <h2>2. 리소스 계층과 상속 <button class="qref" data-id="44">Q44</button> <button class="qref" data-id="7">Q7</button> <button class="qref" data-id="244">2세트 Q44</button> <button class="qref" data-id="523">5세트 Q23</button> <button class="qref" data-id="540">5세트 Q40</button></h2>
  <pre><code>Organization (회사 도메인에 1개)     ← 전사 IAM · Organization Policy
 ├─ Folder: 부서 / 환경            ← 부서 관리자에게 위임
 │    └─ Project                    ← 리소스·결제 단위
 │         └─ 리소스 (버킷, 데이터셋, VM …)
 └─ Folder …</code></pre>
  <ul>
    <li>IAM 정책은 <mark>위에서 아래로 상속</mark>되고, 형제 Folder끼리는 영향이 없습니다.</li>
    <li>최종 권한 = 내 리소스 + 모든 상위에서 받은 권한의 <b>합집합</b>. allow 정책은 <mark>더하기만</mark> 됩니다. 위에서 넓게 준 권한을 아래에서 좁은 역할로 덮어쓸 수 없습니다. 보기 패턴 <button class="qref" data-id="523">5세트 Q23</button>: “프로젝트 정책만(A) / 프로젝트가 상속을 제한(B) / <mark>합친다(C)</mark> / 모든 수준에 공통인 것만=교집합(D)” → 합집합. 프로젝트에서 사용자를 지워도 조직에서 상속된 권한은 남습니다.</li>
    <li>권한을 빼려면: ① 위에서 준 바인딩을 걷어내고 필요한 곳에만 다시 주거나 ② <b>IAM Deny policy</b>로 막습니다.</li>
    <li>진짜 별개의 회사가 아니면 Organization을 여러 개 만들지 않습니다(상속이 끊김).</li>
  </ul>
  <p><b>환경별 Folder와 생성 권한 위치</b> <button class="qref" data-id="244">2세트 Q44</button>: “개발자는 개발 프로젝트만 만들고 운영은 못 건드림 + 운영에 추가 제한”이면</p>
  <pre><code>Organization        ← 공통 Organization Policy
 ├─ Development     ← 개발자에게 Project Creator (여기에만), No organization 프로젝트도 여기로
 ├─ Production      ← 추가 제한 정책, 운영팀만
 └─ (나중에) Staging / Shared Services  ← Folder만 추가</code></pre>
  <ul>
    <li>Project Creator를 <b>조직 수준</b>에 주면 상속으로 Production 아래에도 만들 수 있고, 만든 사람은 그 프로젝트의 Owner가 됩니다 → 오답.</li>
    <li>“No organization” 프로젝트는 조직 정책을 상속받지 않습니다. 조직 안 Folder로 옮겨야 중앙 관리가 됩니다.</li>
    <li>추가 제한은 프로젝트마다가 아니라 <b>Folder 한 곳</b>에 걸어야 새 프로젝트에도 자동 적용됩니다.</li>
  </ul>
  <p><b>부서별 Folder 설계: “범위를 정확히 덮는 가장 높은 노드에 한 번”</b> <button class="qref" data-id="540">5세트 Q40</button>: 독립된 세 부서 + 감사팀이면 <mark>Organization 하나 + 부서별 Folder</mark>. 위치 제한(<code>gcp.resourceLocations</code>)·부서 관리 그룹 역할은 <b>부서 Folder</b>에(미래 프로젝트도 자동), 운영·개발을 다른 팀이 관리하면 <b>프로젝트 분리</b>, 실험은 <b>샌드박스 전용 Folder</b>, 전사 읽기는 <b>Organization 수준 roles/viewer</b> 한 번. 오답: 모든 프로젝트를 조직 직속 + network tag·서비스 계정으로 구분(계층 경계 아님), 부서마다 Organization(상속 끊김·중복), 부서당 프로젝트 하나 + 프로젝트마다 roles/browser(환경 분리 불가, Browser는 리소스 못 봄).</p>
</section>

<section>
  <h2>3. IAM 기본: 누구에게 · 어떤 역할을 · 어디에 <button class="qref" data-id="32">Q32</button> <button class="qref" data-id="247">2세트 Q47</button></h2>
  <p>IAM 정책 = <b>principal</b>(누구) + <b>role</b>(권한 묶음) + <b>리소스</b>(어디에) 바인딩입니다.</p>
  <div class="tbl"><table><thead><tr><th>역할 종류</th><th>설명</th><th>시험 판정</th></tr></thead><tbody>
    <tr><td class="strong">Basic (Owner / Editor / Viewer)</td><td>프로젝트 전체에 걸친 넓은 권한</td><td>거의 항상 오답 (최소 권한 위반)</td></tr>
    <tr><td class="strong">Predefined</td><td>서비스별로 Google이 만든 역할 (예: <code>roles/bigquery.dataViewer</code>)</td><td>기본 정답</td></tr>
    <tr><td class="strong">Custom</td><td>권한(permission)을 골라 직접 만든 역할</td><td>predefined로 딱 맞는 게 없을 때</td></tr>
  </tbody></table></div>
  <p><b>Cloud Storage는 “uniform bucket-level access + 그룹에 IAM”</b> <button class="qref" data-id="335">3세트 Q35</button>: Google 권장은 버킷에 <mark>uniform bucket-level access(UBLA)</mark>를 켜 ACL을 끄고 <b>IAM만</b> 쓰는 것. 그룹(Google Workspace)에 버킷별로 최소 권한 역할(읽기면 <code>roles/storage.objectViewer</code>)을 주면 입·퇴사는 그룹 구성원만 바꾸면 되고, 접근은 개인 계정으로 Audit Logs에 남습니다. 오답: fine-grained + default object ACL(IAM·ACL 이중 관리, default ACL은 <b>새 객체에만</b>), objectAdmin(삭제까지 가능), signed URL(가진 사람 누구나 → 신원과 연결 안 됨).</p>
  <p><b>BigQuery로 보는 “어디에 주나”</b> (Q32, <button class="qref" data-id="324">3세트 Q24</button>): 쿼리 <b>실행</b> 권한(Job User)은 비용이 청구될 <b>프로젝트</b>에, 데이터 <b>읽기</b> 권한(Data Viewer)은 필요한 <b>데이터셋</b>에만. <mark>쿼리 비용은 데이터가 있는 곳이 아니라 작업(job)이 실행된 프로젝트에 청구</mark>되므로, 여러 프로젝트의 데이터를 중앙 프로젝트 비용으로 쿼리하려면 중앙에 Job User, 데이터 쪽에 Data Viewer. 더 잘게는 테이블 IAM · Authorized View(<button class="qref" data-id="409">4세트 Q9</button>) · column-level(policy tag) · row-level security.</p>
  <div class="tbl"><table><thead><tr><th>역할</th><th>쿼리 실행 (jobs.create)</th><th>데이터셋 생성</th><th>데이터 읽기</th></tr></thead><tbody>
    <tr><td class="strong">BigQuery Job User</td><td>O</td><td>X</td><td>X</td></tr>
    <tr><td class="strong">BigQuery User</td><td>O</td><td><b>O</b> (Job User보다 넓음)</td><td>X</td></tr>
    <tr><td class="strong">BigQuery Data Viewer</td><td>X</td><td>X</td><td>O (읽기 전용)</td></tr>
  </tbody></table></div>
  <p><b>조직 전체 읽기 전용</b> <button class="qref" data-id="247">2세트 Q47</button>: “조직과 모든 프로젝트의 리소스를 보되 수정·IAM 변경 불가”면 <mark>Organization Viewer + Viewer를 조직 수준에</mark> 부여합니다(폴더·프로젝트로 상속, 미래 프로젝트 포함).</p>
  <div class="tbl"><table><thead><tr><th>역할</th><th>볼 수 있는 것</th><th>바꿀 수 있는 것</th></tr></thead><tbody>
    <tr><td class="strong">Browser</td><td>조직·폴더·프로젝트 목록(계층), 프로젝트 IAM 정책</td><td>없음 · <b>프로젝트 안 리소스는 못 봄</b></td></tr>
    <tr><td class="strong">Organization Viewer</td><td>조직 리소스 자체</td><td>없음</td></tr>
    <tr><td class="strong">Viewer</td><td>프로젝트 안 대부분의 리소스</td><td>없음</td></tr>
    <tr><td class="strong">Security Reviewer</td><td>IAM 정책 등 보안 설정</td><td>없음 (실무 보안 감사용)</td></tr>
    <tr><td class="strong">Owner / Organization Administrator</td><td>전부 / 조직 계층</td><td>리소스·IAM / 조직 전체 IAM → 읽기 전용이면 탈락</td></tr>
  </tbody></table></div>
  <p><b>그룹에 부여</b>: 사람마다 역할을 붙이지 말고 Google 그룹에 역할을 주고, 사람은 그룹에 넣고 뺍니다. 입·퇴사, 감사가 간단해집니다.</p>
  <p><b>그룹 + Folder, 두 축 모두</b> <button class="qref" data-id="546">5세트 Q46</button>: “부서마다 프로젝트를 <b>자주 만들고 없앰</b> + 부서원은 같은 권한 + 중앙 가시성·IAM 유지보수 최소” → <mark>부서별 Google 그룹 + 부서별 Folder에 그룹 역할 한 번 + 프로젝트는 Folder 안에</mark>. “누구에게”(개인 → 그룹)와 “어디에”(프로젝트마다 → Folder) 중 하나만 고친 보기는 오답입니다: 그룹을 프로젝트마다 부여(새 프로젝트마다 바인딩 추가·폐기 때 정리), Folder에 개인을 직접 부여(입·퇴사마다 Folder 정책 수정).</p>
</section>

<section>
  <h2>4. IAM 고급: 조건 · 거부 · 일시 권한 · 조직 정책 <button class="qref" data-id="33">Q33</button> <button class="qref" data-id="239">2세트 Q39</button></h2>
  <div class="tbl"><table><thead><tr><th>기능</th><th>하는 일</th><th>이럴 때</th></tr></thead><tbody>
    <tr><td class="strong">IAM Conditions</td><td>바인딩에 조건(CEL 식) 추가: <code>request.time</code>, <code>resource.name</code>, 태그</td><td>“9월 한 달만”, “이 접두사 버킷만” (Q33)</td></tr>
    <tr><td class="strong">IAM Deny policy</td><td>allow보다 먼저 평가되는 거부 규칙</td><td>상속된 권한을 예외적으로 막기 (Q7, Q32)</td></tr>
    <tr><td class="strong">PAM</td><td>PAM(Privileged Access Manager, 권한 접근 관리자): 요청 → 승인 → 기한부 권한 상승</td><td>긴급할 때만 잠깐 관리자 권한 (JIT, Just-In-Time)</td></tr>
    <tr><td class="strong">Organization Policy</td><td>“무엇을 <b>만들 수 있나</b>”를 제한하는 제약 조건 (사람 기준 아님)</td><td>외부 IP 금지(승인 VM만 허용: <code>compute.vmExternalIpAccess</code> + allowedValues, <button class="qref" data-id="239">2세트 Q39</button>), 허용 리전 제한, SA 키 생성 금지, 공개 버킷 금지, <b>외부 ID에 역할 부여 금지(Domain Restricted Sharing)</b></td></tr>
    <tr><td class="strong">Policy Troubleshooter / Analyzer</td><td>“왜 이 사람이 접근되나 / 안 되나”, “누가 이 리소스에 접근 가능한가”</td><td>권한 원인 추적·감사</td></tr>
  </tbody></table></div>
  <p><b>IAM vs Organization Policy</b>: IAM은 “<b>누가</b> 무엇을 할 수 있나”, Organization Policy는 “<b>누구든</b> 이런 설정은 못 한다”. Owner라도 Organization Policy 제약은 넘을 수 없습니다.</p>
  <p><b>특정 API를 승인된 프로젝트만: IAM + <code>gcp.restrictServiceUsage</code></b> <button class="qref" data-id="613">사례 연구 Q13</button>: “AI 서비스(Agent Platform·Vision·Speech-to-Text)를 조직 안 <b>승인되지 않은 프로젝트</b>에서 못 쓰게” → <mark>조직 수준 IAM(승인된 그룹·SA에만 역할) + Organization Policy로 API 사용 제한</mark>. 조직 노드에서 <code>constraints/gcp.restrictServiceUsage</code>로 해당 API를 거부하고 AI 전용 폴더에서만 재정의해 허용하면 새 프로젝트도 자동으로 막힙니다. 오답: VPC 방화벽(VM 간 패킷용, 관리형 API 호출은 IAM으로 판정), 별도 결제 계정(비용 귀속), 프로젝트 라벨(메타데이터). 데이터가 경계 밖으로 <b>나가는</b> 것을 막는 문제면 VPC Service Controls입니다.</p>
  <p><b>외부 ID에 IAM 역할 부여 금지: Domain Restricted Sharing</b> <button class="qref" data-id="433">4세트 Q33</button>: “프로젝트 관리자가 조직 밖 사용자에게 역할을 못 주게 + 중앙 + 앞으로의 변경” = 조직 노드에 <code>iam.managed.allowedPolicyMembers</code>(구 <code>iam.allowedPolicyMemberDomains</code>)를 걸고 <mark>회사 조직 principal set + 승인된 예외만 허용</mark>. IAM 정책 갱신 시점에 거부되는 <b>예방 통제</b>입니다. 소급 적용 X(기존 외부 바인딩은 따로 정리), 켜기 전 dry-run·Policy Simulator로 서비스 에이전트 영향 확인. 오답: “2시간마다 스캔해서 삭제”(Cloud Run function·Owner 스크립트 = 사후 대응, 노출 시간), SA 생성 금지(다른 위험).</p>
  <p><b>승인된 VM만 외부 IP</b> <button class="qref" data-id="239">2세트 Q39</button>: 조직 노드에 <code>constraints/compute.vmExternalIpAccess</code>를 걸고 <code>allowedValues</code>에 <code>projects/P/zones/Z/instances/NAME</code>을 나열합니다. 모든 폴더·프로젝트가 상속합니다. <b>소급 적용 안 됨</b>(기존 외부 IP는 따로 정리). 경로 삭제·별도 VPC·Cloud NAT는 “패킷 경로”일 뿐 <mark>외부 IP 할당 자체</mark>를 막지 못해 오답입니다.</p>
  <p><b>Organization Policy vs 계층형 방화벽 정책</b>: 둘 다 조직·폴더에 붙여 상속되지만, Organization Policy는 “이런 <b>설정</b>을 만들 수 있나”(외부 IP 할당 등), 계층형 방화벽 정책은 “이 <b>패킷</b>이 지나갈 수 있나”(포트·출발지·대상)를 정합니다. “인바운드 기본 거부 + 승인된 VM만 443 허용”은 방화벽의 언어입니다 (<button class="qref" data-id="215">2세트 Q15</button>, 네트워크 가이드 3장).</p>
</section>

<section>
  <h2>5. 직원 계정 연동 · 서비스 계정과 키 없는 인증 <button class="qref" data-id="9">Q9</button> <button class="qref" data-id="40">Q40</button> <button class="qref" data-id="22">Q22</button> <button class="qref" data-id="220">2세트 Q20</button></h2>
  <p><b>사람(직원) 계정: 기존 회사 계정으로 Google Cloud 쓰기</b> (<button class="qref" data-id="220">2세트 Q20</button>)</p>
  <div class="tbl"><table><thead><tr><th>할 일</th><th>질문</th><th>도구</th></tr></thead><tbody>
    <tr><td class="strong">프로비저닝 (계정 옮기기)</td><td>Google 쪽에 이 사람·그룹이 있나? (IAM 역할을 줄 대상)</td><td><b>GCDS</b>(Google Cloud Directory Sync): AD → Cloud Identity <mark>단방향</mark> 동기화, 비밀번호는 안 옮김</td></tr>
    <tr><td class="strong">인증 (로그인)</td><td>지금 로그인하는 사람이 진짜인가?</td><td><b>SAML SSO</b>: Google이 회사 IdP(AD FS, Entra ID, Okta)로 넘겨 비밀번호 확인</td></tr>
  </tbody></table></div>
  <ul>
    <li>“on-premises AD가 기준 + 기존 자격 증명으로” = <mark>GCDS + SAML SSO</mark>. 둘 중 하나만 있는 보기는 불완전.</li>
    <li>오답 도구: Admin SDK Directory API(Google 쪽 계정 <b>관리용</b> API, 인증 기능 없음), IAP(특정 앱 문지기), AD 복제본 DC(Microsoft 복제 기능, GCDS와 무관).</li>
    <li>Google 쪽에 계정을 만들지 않고 외부 IdP로 바로 콘솔 접근하려면 <b>Workforce Identity Federation</b>(일부 서비스 제약 있음).</li>
  </ul>
  <p><b>앱 사용자 계정은 또 다른 축: Identity Platform</b> <button class="qref" data-id="608">사례 연구 Q8</button>: 직원이 Google Cloud에 들어오는 문제(GCDS·SAML SSO·Workforce Identity Federation)와 달리, <b>내 앱의 시청자·고객</b>이 로그인하는 문제는 <mark>Identity Platform</mark>(CIAM(Customer Identity and Access Management, 고객 ID 관리))입니다. “Google Identity와 서드파티 IdP를 <b>계속 지원</b> + 기존 로그인 흐름을 깨지 않고” → <mark>기존 IdP와 연동한 Identity Platform</mark>(OIDC·SAML·소셜). 오답: 외부 IdP를 <b>Google Workspace로 전면 교체</b>(직원용 제품이고 “계속 지원”과 정면 충돌), 서비스 계정 키로 사용자 세션(사람이 아닌 프로그램 신원), 앱 코드에 자체 OAuth 토큰 처리(관리형이 있음).</p>
  <p><b>프로그램 계정</b>:</p>
  <p>서비스 계정(SA, Service Account)은 <b>사람이 아니라 프로그램</b>의 신원입니다. 원칙: <mark>JSON 키 파일을 만들지 않는다</mark>(유출되면 끝, 만료가 없음). 대신 단기 토큰을 씁니다.</p>
  <div class="tbl"><table><thead><tr><th>누가 GCP API를 호출하나</th><th>키 없이 인증하는 방법</th></tr></thead><tbody>
    <tr><td>GCP 위의 코드 (VM, Cloud Run, Cloud Build …)</td><td class="strong">연결된 SA + ADC(Application Default Credentials, 기본 자격 증명 자동 탐색). 워크로드 전용 사용자 관리 SA + 리소스 단위 최소 역할 (<button class="qref" data-id="437">4세트 Q37</button>)</td></tr>
    <tr><td>GKE의 Pod</td><td class="strong">Workload Identity Federation for GKE (Kubernetes SA ↔ IAM)</td></tr>
    <tr><td>파이프라인이 다른 SA 권한을 잠깐 빌림</td><td class="strong">Service account impersonation (Q9)</td></tr>
    <tr><td>GCP 밖의 워크로드 (AWS, Azure, GitHub Actions, 온프레미스)</td><td class="strong">Workload Identity Federation</td></tr>
    <tr><td>외부 회사 IdP(Identity Provider, 신원 제공자) 계정의 <b>사람</b>이 콘솔 로그인</td><td class="strong">Workforce Identity Federation</td></tr>
    <tr><td><b>내 앱의 고객·사용자</b>가 Google·서드파티 IdP·소셜 계정으로 로그인</td><td class="strong">Identity Platform (IdP 연동, ID 토큰 발급) <button class="qref" data-id="608">사례 연구 Q8</button></td></tr>
    <tr><td>조직 전체에서 SA 키 생성 자체를 금지</td><td class="strong">Organization Policy <code>iam.disableServiceAccountKeyCreation</code></td></tr>
  </tbody></table></div>
  <p><b>access scope는 권한을 주지 않는다</b> <button class="qref" data-id="437">4세트 Q37</button>: VM access scope는 레거시 <b>제한</b> 장치라 IAM 권한을 더 좁힐 수만 있습니다. 권장 = scope는 <code>cloud-platform</code>, 실제 권한은 SA의 IAM 역할로. 오답 패턴: IAM 제거 + scope로 권한 부여, 수동 OAuth 토큰을 Cloud Storage에 두고 배포, 인증을 위해 Cloud Run function 중계(VM이 함수에 다시 인증해야 해서 문제만 이동).</p>
  <p>앱이 쓰는 비밀 값(DB 비밀번호, 외부 API 키)은 <b>Secret Manager</b>에 둡니다. 코드·이미지·환경 변수 파일에 넣지 않습니다.</p>
</section>

<section>
  <h2>6. 데이터 보호: 암호화 키 · 민감 정보 · VPC Service Controls <button class="qref" data-id="20">Q20</button> <button class="qref" data-id="15">Q15</button> <button class="qref" data-id="219">2세트 Q19</button> <button class="qref" data-id="223">2세트 Q23</button> <button class="qref" data-id="237">2세트 Q37</button> <button class="qref" data-id="241">2세트 Q41</button> <button class="qref" data-id="320">3세트 Q20</button> <button class="qref" data-id="321">3세트 Q21</button> <button class="qref" data-id="327">3세트 Q27</button></h2>
  <p><b>암호화 키 사다리</b>: 아래로 갈수록 통제권이 커지고 운영 부담도 커집니다. 요건이 요구하는 만큼만 내려갑니다.</p>
  <div class="tbl"><table><thead><tr><th>방식</th><th>키는 누가·어디서</th><th>이럴 때</th></tr></thead><tbody>
    <tr><td class="strong">Google 기본 암호화</td><td>Google이 자동 관리</td><td>특별한 요구 없음 (모든 데이터는 기본 암호화됨)</td></tr>
    <tr><td class="strong">CMEK (Cloud KMS, software)</td><td>CMEK(Customer-Managed Encryption Keys, 고객 관리 암호화 키). 내가 KMS에서 순환·폐기·권한 통제. 서비스(Cloud Storage 버킷·BigQuery dataset)에 <b>기본 키</b>로 붙이면 서비스가 투명하게 암·복호화</td><td>“키를 직접 통제·순환 + 처리 작업은 원시 키를 다루지 않게” (<button class="qref" data-id="519">5세트 Q19</button>)</td></tr>
    <tr><td class="strong">CMEK + HSM protection level (Cloud HSM)</td><td>HSM(Hardware Security Module, 하드웨어 보안 모듈) 안에서만 키 생성·사용, Google이 HSM 운영</td><td>“FIPS 140-2 Level 3 HSM 필수” (Q20)</td></tr>
    <tr><td class="strong">CMEK + key import (키 가져오기)</td><td>키 자료는 <b>회사(온프레미스 HSM)에서 생성</b> → 감싸서(wrap) Cloud KMS에 가져옴 → 이후 CMEK로 사용</td><td>“키를 온프레미스 HSM에서 생성해야” (<button class="qref" data-id="516">5세트 Q16</button>)</td></tr>
    <tr><td class="strong">Cloud EKM</td><td>EKM(External Key Manager, 외부 키 관리자). 키가 Google 밖 제3자 시스템에</td><td>“Google도 키에 접근 불가해야”</td></tr>
    <tr><td class="strong">CSEK</td><td>CSEK(Customer-Supplied Encryption Keys, 고객 제공 키). 요청마다 키를 직접 전달</td><td>Compute Engine 디스크·Cloud Storage 한정, 드묾</td></tr>
  </tbody></table></div>
  <p><b>키를 “어디서 생성”하나 vs “어디에 두나”</b> <button class="qref" data-id="516">5세트 Q16</button>: “키 자료를 온프레미스 HSM에서 생성”이면 <mark>key import → Cloud KMS → BigQuery dataset 기본 CMEK</mark>. Cloud KMS에서 생성하면 출처 위반입니다. “키가 계속 Google 밖에 있어야”라면 Cloud EKM입니다. 또 하나의 함정은 <b>보호 대상</b>입니다. Cloud Storage 소스 파일을 CMEK로 암호화해도 BigQuery 저장 데이터와는 별개라서, BigQuery를 보호하려면 키를 <b>dataset(테이블·프로젝트) 기본 CMEK</b>로 붙여야 합니다. Dataflow로 직접 복호화하는 단계도 필요 없습니다(BigQuery가 봉투 암호화를 자동 처리). 가져온 키는 <b>자동 순환이 안 됩니다</b>.</p>
  <p><b>CMEK는 “서비스에 붙인다”</b> <button class="qref" data-id="519">5세트 Q19</button>: “Cloud Storage 객체 키를 보안팀이 통제·주기 순환 + Spark 작업이 원시 키를 다루지 않게” → <mark>Cloud KMS 키를 버킷 기본 CMEK로</mark>(+ Cloud Storage 서비스 에이전트에 Encrypter/Decrypter 역할, 자동 순환 일정). 오답: Cloud KMS <b>Encrypt API로 파일을 직접 암호화</b>(작은 데이터·DEK용이라 크기 제한, 봉투 암호화·복호화 코드를 직접), GPG 클라이언트 측 암호화(키 배포·순환을 직접), CSEK(요청마다 원시 키, 버킷 기본 키 불가, 분실 시 복구 불가). 순환하면 새 기본 버전은 이후 객체에만 쓰이고, 기존 객체는 rewrite해야 새 버전으로 바뀝니다.</p>
  <p><b>Cloud Storage CSEK 지정 방법</b> <button class="qref" data-id="241">2세트 Q41</button>: CSEK는 <b>객체 요청마다</b> 키를 건네므로 버킷에 붙이지 않습니다. 도구마다 방법이 다릅니다: <mark>gsutil = <code>~/.boto</code> 파일 <code>[GSUtil]</code> 섹션 <code>encryption_key</code></mark>, gcloud storage = <code>--encryption-key</code> 플래그. “gsutil + --encryption-key”, “gcloud config에 키 저장”, “버킷 생성 시 CSEK”는 오답. 버킷의 모든 새 객체를 자동으로 내 키로 하려면 CMEK의 default KMS key입니다.</p>
  <p><b>민감 정보(PII, Personally Identifiable Information, 개인 식별 정보)</b></p>
  <div class="tbl"><table><thead><tr><th>요건</th><th>도구</th></tr></thead><tbody>
    <tr><td>텍스트·파일 속 카드번호·주민번호를 찾아 가리기·지우기</td><td class="strong">Sensitive Data Protection (DLP API) inspect + de-identify (Q15)</td></tr>
    <tr><td>외부 데이터의 PII를 GCP에 <b>저장조차 하면 안 됨</b>, 정제본만 BigQuery</td><td class="strong"><b>Dataflow 파이프라인 안에서</b> DLP deidentify → BigQuery. 원본을 버킷·BigQuery에 먼저 올리면(정제는 나중) 이미 저장 위반, retention policy·Bucket Lock은 오히려 못 지우게 함, 열 이름 제외는 자유 텍스트 PII를 놓침 (<button class="qref" data-id="418">4세트 Q18</button>)</td></tr>
    <tr><td>어느 BigQuery·버킷에 민감 정보가 있는지 찾기</td><td class="strong">Sensitive Data Protection discovery</td></tr>
    <tr><td>가린 값을 권한자만 복원</td><td class="strong">DLP 가역 tokenization (KMS 키 사용)</td></tr>
    <tr><td>개인 데이터로 개인화·수익화 + EU 규정 준수</td><td class="strong">동의 기반 수집 + 비식별화·가명화(가역 tokenization) + 목적 제한(목적별 데이터 세트·IAM) + 통제된 공유. 원시 ID 전면 연결·공개 데이터 세트·제3자 직접 접근 X (<button class="qref" data-id="656">사례 연구 Q56</button>)</td></tr>
    <tr><td>개인의 삭제 요청(erase)에 대응</td><td class="strong">모든 테이블에 고유 subject ID → 요청 검증 후 그 ID의 행을 BigQuery <code>DELETE</code>. 뷰 필터(은폐)·ID 해시(가명화)·민감 열 분류(거버넌스)는 삭제가 아님 (<button class="qref" data-id="320">3세트 Q20</button>)</td></tr>
    <tr><td>카드 결제는 받되 PCI DSS 범위 최소 + 결제 추세 분석</td><td class="strong">토큰화 서비스 + token vault, 분석계엔 토큰·비민감 속성만 (<button class="qref" data-id="223">2세트 Q23</button>)</td></tr>
    <tr><td>BigQuery PII 열은 특정 팀만, 다른 팀엔 나머지 열만 (비용 최소)</td><td class="strong"><b>authorized view</b>: <mark>별도 dataset</mark>에 민감 열을 뺀 <b>logical</b> view → 원본 dataset이 그 view를 승인 → 팀엔 view dataset Data Viewer + 프로젝트 Job User. 같은 dataset의 일반 view는 원본 권한이 필요해 PII 노출, materialized view는 저장·갱신 비용 (<button class="qref" data-id="409">4세트 Q9</button>). view 없이 열 단위로 막으려면 policy tag(column-level security)</td></tr>
    <tr><td>민감 데이터가 프로젝트 경계 밖으로 새지 않게 (유출 방지)</td><td class="strong">VPC Service Controls (서비스 경계)</td></tr>
    <tr><td>IAM 권한은 있지만 회사 네트워크에서만 Cloud Storage·BigQuery 접근</td><td class="strong">VPC Service Controls + access level (IP CIDR) (<button class="qref" data-id="219">2세트 Q19</button>)</td></tr>
  </tbody></table></div>
  <p><b>VPC Service Controls(VPC SC) 기초</b> <button class="qref" data-id="219">2세트 Q19</button>: Cloud Storage·BigQuery 같은 <b>Google 관리형 API</b> 주위에 울타리(service perimeter)를 칩니다. 요청은 <mark>① IAM(누가) + ② 경계(어디서 왔나)</mark> 두 관문을 모두 통과해야 합니다. 이름에 VPC가 있지만 VM 방화벽이 아니라 <b>API 요청 단위</b> 통제입니다.</p>
  <div class="tbl"><table><thead><tr><th>구성 요소</th><th>뜻</th></tr></thead><tbody>
    <tr><td class="strong">Service perimeter</td><td>보호할 프로젝트 + 서비스(storage, bigquery …) 묶음. 안↔밖 데이터 이동 차단</td></tr>
    <tr><td class="strong">Access level (Access Context Manager)</td><td>믿을 요청 조건: 출발지 IP(CIDR), 사용자·SA, 기기 상태, 지역</td></tr>
    <tr><td class="strong">Ingress / Egress policy</td><td>경계를 넘는 특정 주체·서비스만 예외 허용</td></tr>
    <tr><td class="strong">Dry-run mode</td><td>막지 않고 위반 로그만 → 영향 확인 후 적용</td></tr>
    <tr><td class="strong">Restricted services</td><td>경계가 보호할 API 목록. <mark>목록에 넣은 서비스만 보호</mark>되므로 실제 쓰는 API를 정확히 (<button class="qref" data-id="237">2세트 Q37</button>)</td></tr>
  </tbody></table></div>
  <p><b>VPC SC는 “처리 위치”를 정하지 않습니다</b> <button class="qref" data-id="321">3세트 Q21</button>: VPC SC는 경계 밖으로 <b>빼 가는 것</b>을 막을 뿐, 관리형 서비스가 데이터를 <b>어디서 처리하는지</b>는 바꾸지 못합니다. “데이터와 모델 추론이 모두 특정 국가 안에서” 같은 data residency 요건이면 <mark>그 리전에 내가 리소스를 배포</mark>합니다. 생성형 AI라면 Model Garden의 오픈 모델(Gemma)을 해당 리전(예: 도하 me-central1) 전용 엔드포인트에 배포하고, 버킷·로그·아티팩트도 같은 리전에 둡니다. 리소스 생성 위치 강제는 Organization Policy <code>gcp.resourceLocations</code>. 지역마다 규제가 다른 워크로드(자율 주행 시뮬레이션 등)는 규제 경계별 리전 환경을 두고 IAM·로깅·감사만 중앙에서 하나로 겁니다 <button class="qref" data-id="653">사례 연구 Q53</button>.</p>
  <p><b>restricted services에 넣을 API 예</b> <button class="qref" data-id="237">2세트 Q37</button>: Cloud Storage <code>storage.googleapis.com</code>, BigQuery <code>bigquery.googleapis.com</code>, Agent Platform(옛 Vertex AI) <code>aiplatform.googleapis.com</code>, Workbench 노트북 <code>notebooks.googleapis.com</code>. 구형 <code>ml.googleapis.com</code>(AI Platform)이나 관련 없는 API(Document AI의 <code>document.googleapis.com</code>)를 넣으면 실제 서비스가 경계 밖에 남습니다. 같은 VPC SC 보기가 둘이면 <b>API 이름이 맞는 쪽</b>을 고릅니다.</p>
  <p><b>규정 준수 범위(PCI DSS) 줄이기</b> <button class="qref" data-id="223">2세트 Q23</button>: PCI DSS(Payment Card Industry Data Security Standard, 카드 데이터 보안 기준)의 범위는 <mark>원본 카드번호(PAN, Primary Account Number)가 저장·처리·전송되는 곳 + 그와 연결된 곳</mark>으로 정해집니다. 이 영역을 CDE(Cardholder Data Environment, 카드 소지자 데이터 환경)라고 합니다.</p>
  <div class="tbl"><table><thead><tr><th>방법</th><th>범위가 줄어드나</th></tr></thead><tbody>
    <tr><td class="strong">토큰화 (원본은 token vault에만)</td><td><b>O</b>. 토큰만 다루는 시스템은 범위 밖 가능 → 정답</td></tr>
    <tr><td>별도 프로젝트 / 서브넷 분리</td><td>보조 수단. 원본이 남아 있으면 그 시스템은 그대로 범위</td></tr>
    <tr><td>라벨 붙이기</td><td><b>X</b>. 목록 정리용 메타데이터일 뿐</td></tr>
  </tbody></table></div>
  <p><b>유출 방지 = 경계(VPC SC) + 길(Private Google Access)</b> <button class="qref" data-id="327">3세트 Q27</button> <button class="qref" data-id="529">5세트 Q29</button>: “악의적 직원·<mark>탈취된 자격 증명</mark>·침해된 워크로드·<mark>잘못된 권한</mark>으로 BigQuery 데이터가 승인된 환경 밖으로 나가는 것”을 막으려면 IAM만으로는 부족합니다(IAM이 뚫린 상황이 전제). 프로젝트를 <b>VPC SC 경계</b>에 넣고 BigQuery를 restricted service로, 온프레미스(Cloud VPN)는 <b>하이브리드 Private Google Access</b>(restricted.googleapis.com)로 경계 안 API에 비공개 접근합니다. PGA만 켜는 보기는 길만 있고 경계가 없어 오답. Private Service Connect만 켜는 보기도 같은 이유(길만)로 오답이고, “서비스 계정 하나에 BigQuery Job User + Storage Object Viewer만 남기고 나머지 IAM 전부 제거”도 오답입니다(IAM은 “누가”만 정하고, 그 계정이 탈취되면 끝. 역할 조합도 BigQuery 읽기 권한이 아님) (<button class="qref" data-id="529">5세트 Q29</button>). 사례 문제에서도 같습니다: Altostrat “AI 검토·추천 API로 민감 메타데이터가 승인된 경계 밖으로 exfiltrate 안 되게 + 하이브리드 + 조직 수준 + 코드 변경 없음” → VPC Service Controls. 아웃바운드 방화벽(VM 패킷), 모든 서브넷 PGA(길만), 균일한 버킷 수준 액세스(IAM 정리)는 오답 <button class="qref" data-id="614">사례 연구 Q14</button>. 같은 사례의 “승인되지 않은 프로젝트가 <b>호출</b> 못 하게”는 IAM + Organization Policy입니다 (<button class="qref" data-id="613">사례 연구 Q13</button>). 가상 에이전트 대화 데이터처럼 AI 시스템이 다루는 데이터도 같은 답: <b>최소 권한 IAM(누가) + VPC SC 경계(어디서·어디로)</b>. CX Agent Studio API(<code>ces.googleapis.com</code>)는 VPC SC GA 지원이며, 제한할 때 CX Insights API(<code>contactcenterinsights.googleapis.com</code>)도 함께 넣습니다. 서비스 계정 키 공유·공개 엔드포인트 + 토큰은 오답 <button class="qref" data-id="625">사례 연구 Q25</button>.</p>
  <p>헷갈리는 것 구분: <b>VPC 방화벽</b> = VM 패킷(Cloud Storage엔 무관), <b>Cloud VPN + Private Google Access</b> = 사무실에서 가는 <b>길</b>만 만들 뿐 다른 길을 막지 않음, <b>IAP + access level</b> = 같은 “조건부 접근”을 웹앱에 적용.</p>
  <h3>규정상 전용 물리 하드웨어: sole-tenant node <button class="qref" data-id="302">3세트 Q2</button></h3>
  <p><b>Sole-tenant node</b> = 우리 회사 VM만 올라가는 전용 물리 서버(다른 Google 고객과 공유 X). VM 배치는 <mark>node affinity</mark>로 지정합니다. network tag는 방화벽 대상 지정용이라 배치와 무관합니다.</p>
  <div class="tbl"><table><thead><tr><th>affinity 단위</th><th>key</th><th>보장</th></tr></thead><tbody>
    <tr><td class="strong">노드 그룹</td><td><code>compute.googleapis.com/node-group-name</code></td><td>우리 전용 서버 묶음 중 어딘가</td></tr>
    <tr><td class="strong">개별 노드</td><td><code>compute.googleapis.com/node-name</code></td><td><b>특정 물리 서버 하나</b> → “고객마다 다른 물리 서버”면 이것</td></tr>
    <tr><td class="strong">커스텀 라벨</td><td>노드 템플릿 라벨 (예: <code>tenant=a</code>)</td><td>그 라벨을 가진 노드들</td></tr>
  </tbody></table></div>
  <p><b>라이선스 지참(BYOL, Bring Your Own License)도 sole-tenant</b> <button class="qref" data-id="513">5세트 Q13</button>: “기존 Windows Server 라이선스를 계속 + 계약상 전용 하드웨어에서만” → <mark>가상 디스크를 <code>--byol</code>로 이미지 가져오기 + 그 이미지를 부팅 디스크로 + sole-tenant node에 VM</mark>. Google 공개 이미지는 <b>주문형(on-demand) 라이선스</b>(프리미엄 이미지 요금)라 기존 라이선스가 넘어오지 않고, 가져온 디스크를 <b>데이터 디스크</b>로 붙이면 OS는 여전히 Google 이미지입니다. BYOL Windows의 정품 인증은 회사의 MAK·KMS로 직접 합니다.</p>
</section>

<section>
  <h2>7. 암호 기술 기초: 무엇이 무엇을 보장하나 <button class="qref" data-id="48">Q48</button> <button class="qref" data-id="15">Q15</button></h2>
  <div class="tbl"><table><thead><tr><th>기술</th><th>보장하는 것</th><th>한 줄 설명</th></tr></thead><tbody>
    <tr><td class="strong">암호화 (대칭/비대칭)</td><td>기밀성: 남이 못 읽음</td><td>키로 잠그고 키로 풂. 공유 키는 “특정 개인”을 증명 못 함</td></tr>
    <tr><td class="strong">해시 (SHA-256)</td><td>무결성: 바뀌었는지 확인</td><td>되돌릴 수 없는 지문. 키가 없으므로 출처 증명은 안 됨</td></tr>
    <tr><td class="strong">디지털 서명</td><td>무결성 + <mark>출처 증명 + 부인 방지</mark></td><td>보낸 사람 <b>private key로 서명</b>, 받는 사람이 <b>public key로 검증</b> (Q48). 감사 기록이 진짜·무수정임을 나중에 증명할 때도 기록마다 서명 (<button class="qref" data-id="211">2세트 Q11</button>)</td></tr>
    <tr><td class="strong">TLS (HTTPS)</td><td>전송 중 기밀성·무결성 + 서버 인증</td><td>클라이언트↔서버 <b>구간</b>만 보호. 메시지에 증거가 남지 않음</td></tr>
    <tr><td class="strong">mTLS</td><td>TLS + 클라이언트도 인증서로 인증</td><td>서비스 간 상호 인증 (Cloud Service Mesh 등)</td></tr>
    <tr><td class="strong">비식별화 (DLP)</td><td>민감한 부분만 제거·치환</td><td>나머지 데이터는 그대로 쓸 수 있음 (Q15)</td></tr>
  </tbody></table></div>
  <p>방향 주의: <b>서명</b>은 내 private key로 만들고 내 public key로 검증. <b>기밀성 암호화</b>는 받는 사람 public key로 잠그고 받는 사람 private key로 풂. GCP에서 서명 키는 Cloud KMS 비대칭 키(<code>ASYMMETRIC_SIGN</code>)로 관리합니다.</p>
</section>

<section>
  <h2>8. 임시 · 외부 · 원격 접근 <button class="qref" data-id="22">Q22</button> <button class="qref" data-id="33">Q33</button> <button class="qref" data-id="21">Q21</button> <button class="qref" data-id="305">3세트 Q5</button></h2>
  <div class="tbl"><table><thead><tr><th>상황</th><th>방법</th></tr></thead><tbody>
    <tr><td>Google 계정 없는 사용자에게 파일 하나 잠깐 업·다운로드</td><td class="strong">Signed URL (V4, 최대 7일) (Q22). 업로드는 PUT용, 다운로드는 GET용으로 발급. 사람마다 객체 이름을 달리 (<button class="qref" data-id="305">3세트 Q5</button>)</td></tr>
    <tr><td>브라우저 JavaScript가 버킷에 직접 요청</td><td class="strong">버킷 CORS 설정 + Signed URL (Q22)</td></tr>
    <tr><td>Google 계정 있는 외부인에게 기간 한정 권한 (누가 접근했는지 식별)</td><td class="strong">그룹 + IAM Condition <code>request.time</code> (Q33)</td></tr>
    <tr><td>외부 IP·VPN 없이 VM에 SSH/RDP</td><td class="strong">IAP TCP forwarding (Q21)</td></tr>
    <tr><td>VPN 폐지, <b>온프레미스</b> 웹 앱을 BeyondCorp(제로 트러스트)로 + Google Workspace SSO</td><td class="strong">앱을 가리키는 <b>IAP 커넥터</b>(온프레미스 앱용 IAP). Google 그룹만·Cloud Armor(인증 X)·App Engine 역할 X (<button class="qref" data-id="904">공식 모의고사 Q4</button>)</td></tr>
    <tr><td>사내 웹 앱을 VPN 없이 직원에게만</td><td class="strong">IAP for HTTPS</td></tr>
    <tr><td>VM SSH 키를 개인별로 나눠 주지 않고 IAM으로 관리</td><td class="strong">OS Login (+ 2단계 인증)</td></tr>
  </tbody></table></div>
</section>

<section>
  <h2>9. 감사 · 탐지 <button class="qref" data-id="12">Q12</button> <button class="qref" data-id="202">2세트 Q2</button> <button class="qref" data-id="303">3세트 Q3</button></h2>
  <div class="tbl"><table><thead><tr><th>도구</th><th>무엇을</th></tr></thead><tbody>
    <tr><td class="strong">Cloud Audit Logs: Admin Activity</td><td>설정 변경(누가 VM·네트워크를 만들고 권한을 바꿨나). <b>항상 켜짐, 무료</b>. 예: 낯선 VPC를 만든 사람 → Logs Explorer에서 <code>resource.type="gce_network"</code> + <code>methodName="v1.compute.networks.insert"</code> → <code>principalEmail</code> 확인 (<button class="qref" data-id="303">3세트 Q3</button>)</td></tr>
    <tr><td class="strong">Cloud Audit Logs: Data Access</td><td>데이터 읽기·쓰기. 대부분 <b>기본 꺼짐</b>(BigQuery는 기본 켜짐), 켜면 비용·양 증가. <mark>“첫날부터 기록”이면 운영 전에 켜 둬야 함</mark> (<button class="qref" data-id="202">2세트 Q2</button>)</td></tr>
    <tr><td class="strong">로그 장기 보관·분석</td><td>Log sink → BigQuery / Cloud Storage. 조직 전체는 aggregated sink</td></tr>
    <tr><td class="strong">GKE 감사 로그</td><td><code>kubectl</code> 요청(Kubernetes API server)을 Cloud Audit Logs로. 이미지 변경·exec는 Admin Activity, Secret·Pod 조회는 Data Access (<button class="qref" data-id="202">2세트 Q2</button>)</td></tr>
    <tr><td class="strong">Security Command Center</td><td>잘못된 설정(공개 버킷, 열린 방화벽), 취약점, 위협 탐지를 한 화면에. <b>탐지 결과(finding)</b>일 뿐 모든 요청 기록은 아님 (<button class="qref" data-id="202">2세트 Q2</button>)</td></tr>
    <tr><td class="strong">Access Transparency / Access Approval</td><td>Google 직원이 내 데이터에 접근한 기록 / 접근 전 내 승인 요구</td></tr>
  </tbody></table></div>
</section>

<section>
  <h2>10. 시험 함정 모음</h2>
  <div class="tbl"><table><thead><tr><th>함정</th><th>실제</th></tr></thead><tbody>
    <tr><td>삭제 요청 → 뷰에서 그 사람 행을 걸러 냄 / 식별자를 salted hash로 교체</td><td>뷰는 원본이 남는 은폐, 해시는 건강 정보가 남는 가명화. <b>subject ID로 행 DELETE</b> (<button class="qref" data-id="320">3세트 Q20</button>)</td></tr>
    <tr><td>“추론까지 국내에서” → 관리형 API를 VPC Service Controls 경계 안에</td><td>VPC SC는 유출 방지지 처리 위치 보장이 아님. <b>그 리전에 모델을 직접 배포</b>(Model Garden Gemma → 리전 전용 엔드포인트) (<button class="qref" data-id="321">3세트 Q21</button>)</td></tr>
    <tr><td>Google Cloud가 GDPR 인증을 받았으니 그 위의 앱도 자동 준수 / 콘솔의 GDPR 설정 / Web Security Scanner로 모든 공백 탐지</td><td>공동 책임 모델. 앱의 통제는 <b>고객이 설계</b>. 스위치는 없고, 스캐너는 웹 취약점만 봄 (<button class="qref" data-id="323">3세트 Q23</button>)</td></tr>
    <tr><td>GKE는 공유 인프라라 PCI DSS 불가 / App Engine만 가능 / Google PCI 인증이 있으니 모든 서비스를 카드 데이터에 자동 사용</td><td>GKE 등 <b>적격 서비스</b>를 고객이 올바르게 구성하면 가능. 인증은 지정 서비스·Google 몫에만 (<button class="qref" data-id="541">5세트 Q41</button>)</td></tr>
    <tr><td>Google Cloud의 ISO/IEC 27001 인증서를 Cloud Audit Logs로 요청 / 감사인 고용해 Google 인프라 재인증 / 인터넷 검색 사본</td><td>Google 인증서·SOC 보고서는 <b>Compliance Reports Manager</b>. Audit Logs는 우리 리소스 활동 기록 (<button class="qref" data-id="530">5세트 Q30</button>)</td></tr>
    <tr><td>데이터 유출 방지에 Private Google Access만 / IAM 정리만</td><td>PGA는 길, IAM은 자격 증명이 뚫리면 무력. <b>VPC Service Controls 경계 + 하이브리드 PGA</b> (<button class="qref" data-id="327">3세트 Q27</button> <button class="qref" data-id="529">5세트 Q29</button>)</td></tr>
    <tr><td>위에서 Editor를 주고 아래 리소스에서 Viewer로 좁히기</td><td>allow는 더하기만. 위 바인딩 제거 또는 Deny (Q7)</td></tr>
    <tr><td>프로젝트 allow 정책이 상속된 권한을 제한한다 / 모든 수준에 공통인 권한만 유효</td><td>allow는 <b>더하기만</b>(합집합). 줄이려면 deny 정책·상위 바인딩 제거 (<button class="qref" data-id="523">5세트 Q23</button>)</td></tr>
    <tr><td>개발자에게 Project Creator를 조직 수준에 + Production Folder에 제한 정책</td><td>상속으로 Production 아래에도 생성 가능. <b>Development Folder에만</b> 부여 (<button class="qref" data-id="244">2세트 Q44</button>)</td></tr>
    <tr><td>프로젝트가 자주 생기는데 그룹에 <b>프로젝트마다</b> 역할 부여 / Folder에 <b>개인</b>을 직접 부여</td><td>그룹 + Folder 둘 다. Folder에 그룹 역할 한 번이면 새 프로젝트는 자동 상속, 입·퇴사는 구성원만 변경 (<button class="qref" data-id="546">5세트 Q46</button>)</td></tr>
    <tr><td>개발 프로젝트는 조직 밖(No organization)에서 자유롭게</td><td>조직 정책 상속이 안 됨 → 중앙 관리 불가. 조직 안 Development Folder로 (<button class="qref" data-id="244">2세트 Q44</button>)</td></tr>
    <tr><td>모든 프로젝트를 둘러봐야 하니 Browser</td><td>Browser는 계층(목록)만, 프로젝트 안 리소스는 못 봄. 리소스 읽기는 <b>Viewer</b> (<button class="qref" data-id="247">2세트 Q47</button> <button class="qref" data-id="540">5세트 Q40</button>)</td></tr>
    <tr><td>부서 정책을 “현재 프로젝트”에 개별 적용 / 부서 구분을 network tag·서비스 계정으로 / 부서마다 Organization</td><td>미래 프로젝트가 빠지고, tag·SA는 계층 경계가 아니며, 조직을 나누면 상속이 끊김. <b>부서 Folder에 정책·역할</b> (<button class="qref" data-id="540">5세트 Q40</button>)</td></tr>
    <tr><td>고객마다 다른 물리 서버 → sole-tenant 노드 그룹 이름으로 affinity / network tag</td><td>그룹은 그 안 아무 노드, tag는 방화벽용. <b>개별 노드 이름으로 node affinity</b> (<button class="qref" data-id="302">3세트 Q2</button>)</td></tr>
    <tr><td>누가 네트워크를 만들었나 → Data Access 로그 / Monitoring 알림 / VM 로그인 기록</td><td>생성은 <b>Admin Activity</b>. 알림은 기록이 아니고, VM 로그인은 컨트롤 플레인 작업과 무관 (<button class="qref" data-id="303">3세트 Q3</button>)</td></tr>
    <tr><td>계정 없는 외부인에게 기간 한정 업로드 → 업로드 앱 + Cloud Identity / 버킷 비밀번호</td><td>앱은 과하고 Cloud Identity는 계정 발급 필요, 버킷 비밀번호는 없는 기능. <b>Signed URL (PUT, 만료 지정)</b> (<button class="qref" data-id="305">3세트 Q5</button>)</td></tr>
    <tr><td>그룹별 버킷 접근을 단순하게 → fine-grained 유지 + default object ACL</td><td>ACL은 IAM과 이중 관리, default ACL은 새 객체에만. <b>UBLA + 그룹에 IAM 역할</b> (<button class="qref" data-id="335">3세트 Q35</button>)</td></tr>
    <tr><td>쿼리만 하면 되는데 청구 프로젝트에 BigQuery User / 데이터 프로젝트에 Job User</td><td>User는 데이터셋 생성까지 포함(최소 권한 X), 데이터 쪽 Job User는 비용이 그쪽에 청구. <b>청구 프로젝트 Job User + 데이터 쪽 Data Viewer</b> (<button class="qref" data-id="324">3세트 Q24</button>)</td></tr>
    <tr><td>프로젝트에 Data Viewer를 줘서 데이터셋 일부만 읽게</td><td>프로젝트 전체 데이터셋이 열림. 데이터셋에 부여 (Q32)</td></tr>
    <tr><td>Cloud Scheduler로 권한을 넣었다 뺐다</td><td>IAM Condition <code>request.time</code>으로 자동 만료 (Q33)</td></tr>
    <tr><td>“포트·대상별 인바운드 허용/거부를 중앙 강제” → Organization Policy</td><td>Org Policy는 설정 제약. 패킷 규칙은 <b>계층형 방화벽 정책</b>(요건 범위의 폴더에) (<button class="qref" data-id="215">2세트 Q15</button>)</td></tr>
    <tr><td>공개 서비스의 웹 공격 차단·LB 우회 방지에 IAP</td><td>IAP는 “누구인가” 인증. 요청 검사는 <b>Cloud Armor</b>, 우회 방지는 백엔드 ingress 잠금 (<button class="qref" data-id="216">2세트 Q16</button>, 네트워크 가이드 7장)</td></tr>
    <tr><td>회사 네트워크에서만 버킷 접근 → VPC 방화벽 / VPN + Private Google Access / 시간별 권한 스케줄</td><td>방화벽은 VM용, VPN은 길만, 스케줄은 시간 기준. <b>VPC Service Controls + access level</b> (<button class="qref" data-id="219">2세트 Q19</button>)</td></tr>
    <tr><td>AD 계정으로 Google Cloud 로그인 → Directory API로 AD에 비밀번호 확인 / GCDS로 AD 복제</td><td>Directory API는 관리용, GCDS는 사용자·그룹을 Cloud Identity로 옮기는 도구. <b>GCDS + SAML SSO</b> (<button class="qref" data-id="220">2세트 Q20</button>)</td></tr>
    <tr><td>승인 VM만 외부 IP → 기본 경로 삭제 / 별도 VPC / Cloud NAT</td><td>모두 할당 자체를 막지 못함. <b>Org Policy vmExternalIpAccess + allowedValues</b> (<button class="qref" data-id="239">2세트 Q39</button>)</td></tr>
    <tr><td>부서마다 Organization</td><td>Organization 1개 + 부서별 Folder (Q44)</td></tr>
    <tr><td>SA 키를 만들어 CI·코드에 저장</td><td>연결된 SA / impersonation / WIF (Q9, Q40)</td></tr>
    <tr><td>“HSM 필수”에 CSEK나 EKM</td><td>Google이 운영하는 HSM = Cloud KMS HSM level (Q20)</td></tr>
    <tr><td>PCI 범위 축소에 라벨·별도 프로젝트·서브넷</td><td>원본 카드번호가 남으면 범위 그대로. <b>토큰화</b>로 원본이 닿는 곳 자체를 줄임 (<button class="qref" data-id="223">2세트 Q23</button>)</td></tr>
    <tr><td>ML 데이터·모델 유출 방지에 Private Google Access / VPC Flow Logs</td><td>PGA는 길, Flow Logs는 기록일 뿐 차단 안 함. <b>VPC SC 경계 + aiplatform·notebooks API</b> (<button class="qref" data-id="237">2세트 Q37</button>)</td></tr>
    <tr><td>gsutil로 CSEK → --encryption-key 플래그 / gcloud config / 버킷 생성 시 지정</td><td>플래그는 gcloud storage 것, CSEK는 객체 단위. <b>.boto [GSUtil] encryption_key</b> (<button class="qref" data-id="241">2세트 Q41</button>)</td></tr>
    <tr><td>PII 제거에 암호화·해시</td><td>찾아서 가리기 = DLP de-identify (Q15)</td></tr>
    <tr><td>“누가 보냈는지 증명”에 TLS·대칭 암호화</td><td>보낸 사람 private key로 디지털 서명 (Q48)</td></tr>
    <tr><td>감사 기록 진본성 증명에 복제·DB 권한 제한·JSON 저장</td><td>막는 것 ≠ 증명. 기록마다 디지털 서명 (<button class="qref" data-id="211">2세트 Q11</button>)</td></tr>
    <tr><td>“누가 무엇을 했나” 기록에 SCC·Binary Authorization·로깅 에이전트</td><td>Cloud Audit Logs (+ Data Access 활성화) (<button class="qref" data-id="202">2세트 Q2</button>)</td></tr>
    <tr><td>VM SSH에 외부 IP·bastion·VPN</td><td>IAP TCP forwarding (Q21)</td></tr>
    <tr><td>브라우저 직접 업로드에 서버 자격 증명(ADC)을 브라우저로</td><td>서버가 Signed URL만 발급 (Q22)</td></tr>
  </tbody></table></div>
</section>

<section>
  <h2>11. 시험 키워드 → 정답</h2>
  <div class="tbl"><table><thead><tr><th>키워드</th><th>정답 방향</th></tr></thead><tbody>
    <tr><td>dedicated physical hardware, each client on a different physical server</td><td class="strong">Sole-tenant node + node affinity (node-name) (<button class="qref" data-id="302">3세트 Q2</button>)</td></tr>
    <tr><td>continue using existing Windows Server licenses, licensing permits dedicated cloud hardware</td><td class="strong">--byol 이미지 가져오기 → 부팅 디스크 + sole-tenant node. 공개 이미지(주문형)·데이터 디스크 첨부·일반 가져오기 X (<button class="qref" data-id="513">5세트 Q13</button>)</td></tr>
    <tr><td>identify the principal and request that created a resource</td><td class="strong">Logs Explorer → Admin Activity 감사 로그 (<code>*.insert</code> 메서드, principalEmail) (<button class="qref" data-id="303">3세트 Q3</button>)</td></tr>
    <tr><td>least privilege, only what is needed</td><td class="strong">predefined role을 가장 좁은 리소스에, 그룹에 부여</td></tr>
    <tr><td>regulatory compliance, controlled access, auditability, prevent accidental data exposure</td><td class="strong">최소 권한 IAM + 중앙 Cloud Audit Logs(집계 sink) + 조직 정책 제약. 공유 관리자 계정·IP 허용 목록 공개 접근·CMEK만 X (<button class="qref" data-id="637">사례 연구 Q37</button>)</td></tr>
    <tr><td>reduce the blast radius, improve governance, past breaches, incident-response plan</td><td class="strong">최소 권한 IAM + 조직 정책 + 중앙 로깅 + 구조화된 사고 대응 runbook(예방·탐지·대응). 공유 관리자 계정·단일 서비스 계정 키·넓은 접근 + 모니터링만 X (<button class="qref" data-id="652">사례 연구 Q52</button>)</td></tr>
    <tr><td>read-only visibility into the organization and resources in every project, must not modify resources or IAM</td><td class="strong">Organization Viewer + Viewer (조직 수준) (<button class="qref" data-id="247">2세트 Q47</button>)</td></tr>
    <tr><td>company-wide policy, departments manage their own</td><td class="strong">Organization + Folder</td></tr>
    <tr><td>developers create non-production projects only, additional restrictions on production, flexible for staging later</td><td class="strong">Development·Production Folder, Project Creator는 Development Folder에만 (<button class="qref" data-id="244">2세트 Q44</button>)</td></tr>
    <tr><td>override / block inherited permission</td><td class="strong">IAM Deny policy</td></tr>
    <tr><td>effective IAM allow policy, role at organization + role on project</td><td class="strong">프로젝트 정책 + 상속된 폴더·조직 정책의 합집합 (교집합·하위가 제한 X) (<button class="qref" data-id="523">5세트 Q23</button>)</td></tr>
    <tr><td>only during a specific period, automatically expire</td><td class="strong">IAM Condition (request.time)</td></tr>
    <tr><td>temporary elevated access with approval</td><td class="strong">PAM (Privileged Access Manager)</td></tr>
    <tr><td>prevent anyone from creating external IPs / restrict regions</td><td class="strong">Organization Policy</td></tr>
    <tr><td>only approved VM instances can have external IPs, centrally enforced across the organization</td><td class="strong">constraints/compute.vmExternalIpAccess + allowedValues (VM URI) (<button class="qref" data-id="239">2세트 Q39</button>)</td></tr>
    <tr><td>no service account keys, external CI / AWS</td><td class="strong">Workload Identity Federation</td></tr>
    <tr><td>on-premises Active Directory is authoritative, use existing corporate credentials</td><td class="strong">GCDS → Cloud Identity + SAML SSO (<button class="qref" data-id="220">2세트 Q20</button>)</td></tr>
    <tr><td>employees sign in with corporate IdP (non-Google)</td><td class="strong">Workforce Identity Federation (또는 Cloud Identity SSO)</td></tr>
    <tr><td>control key rotation / revoke key</td><td class="strong">CMEK (Cloud KMS)</td></tr>
    <tr><td>control and periodically rotate keys for Cloud Storage objects, avoid managing raw keys in processing jobs</td><td class="strong">Cloud KMS 키를 버킷 기본 CMEK로. KMS Encrypt 직접 호출·GPG·CSEK X (<button class="qref" data-id="519">5세트 Q19</button>)</td></tr>
    <tr><td>FIPS 140-2 Level 3, HSM</td><td class="strong">Cloud KMS HSM protection level</td></tr>
    <tr><td>key material generated in on-premises HSM, not within Google Cloud, BigQuery</td><td class="strong">외부 생성 키를 Cloud KMS로 import + BigQuery dataset 기본 CMEK. KMS에서 생성·소스 파일만 암호화·Dataflow 복호화 X (<button class="qref" data-id="516">5세트 Q16</button>)</td></tr>
    <tr><td>keys outside Google</td><td class="strong">Cloud EKM</td></tr>
    <tr><td>customer-supplied encryption key, automation uses gsutil</td><td class="strong">.boto 파일 [GSUtil] encryption_key (<button class="qref" data-id="241">2세트 Q41</button>)</td></tr>
    <tr><td>mask / redact PII, credit card numbers</td><td class="strong">Sensitive Data Protection (DLP)</td></tr>
    <tr><td>PCI DSS scope as small as possible, analytics still needs payment trends</td><td class="strong">토큰화 + token vault, 분석계엔 토큰·비민감 속성 (<button class="qref" data-id="223">2세트 Q23</button>)</td></tr>
    <tr><td>prevent data exfiltration, service perimeter</td><td class="strong">VPC Service Controls. 암호화·IAM 역할·ACL로는 반출 방지 X (<button class="qref" data-id="903">공식 모의고사 Q3</button>)</td></tr>
    <tr><td>APIs cannot exfiltrate data outside approved perimeters, hybrid, organization level, without code changes</td><td class="strong">VPC Service Controls (+ access level·restricted.googleapis.com). 방화벽·PGA·uniform bucket-level access X (<button class="qref" data-id="614">사례 연구 Q14</button>)</td></tr>
    <tr><td>VPC Service Controls but allow developers to use Cloud Shell, no full access to managed services</td><td class="strong">민감 데이터 프로젝트에만 서비스 경계 + 개발자는 경계에 넣지 않음 (Cloud Shell은 경계 밖 취급). 전체 경계·전 개발자 access level X (<button class="qref" data-id="907">공식 모의고사 Q7</button>)</td></tr>
    <tr><td>protect PII (credit cards) while personalizing recommendations</td><td class="strong">Cloud DLP(Sensitive Data Protection)로 비식별화 후 제공. AutoML·수동 ML은 익명화 도구 X (<button class="qref" data-id="910">공식 모의고사 Q10</button>)</td></tr>
    <tr><td>prevent granting IAM roles to external identities, centrally, future changes</td><td class="strong">조직 수준 Domain Restricted Sharing (<code>iam.managed.allowedPolicyMembers</code>). 주기적 스캔·삭제 함수·스크립트 X (<button class="qref" data-id="433">4세트 Q33</button>)</td></tr>
    <tr><td>store DB credentials for many microservices securely</td><td class="strong"><b>Secret Manager</b> + 서비스별 서비스 계정에 필요한 시크릿만 secretAccessor. 소스 코드·환경 변수·ACL 설정 파일은 평문 X, 환경 변수는 Secret Manager에서 주입받는 통로로만 (<button class="qref" data-id="916">공식 모의고사 Q16</button>, <button class="qref" data-id="431">4세트 Q31</button>)</td></tr>
    <tr><td>security team must see all resources in the organization (Google-recommended roles)</td><td class="strong">조직 뷰어 + 프로젝트 뷰어. Owner·조직 관리자·네트워크 관리자는 과도 (<button class="qref" data-id="917">공식 모의고사 Q17</button>)</td></tr>
    <tr><td>ML models and datasets must not leave approved projects (Agent Platform, Workbench)</td><td class="strong">VPC SC 경계 + aiplatform.googleapis.com · notebooks.googleapis.com (<button class="qref" data-id="237">2세트 Q37</button>)</td></tr>
    <tr><td>have IAM permissions but access only from the corporate network (Cloud Storage, BigQuery)</td><td class="strong">VPC Service Controls + access level (CIDR) (<button class="qref" data-id="219">2세트 Q19</button>)</td></tr>
    <tr><td>verify sender, not altered, non-repudiation</td><td class="strong">디지털 서명 (private key)</td></tr>
    <tr><td>prove audit records are authentic and not modified</td><td class="strong">각 기록에 Cloud KMS 디지털 서명 (+ 해시 체인) (<button class="qref" data-id="211">2세트 Q11</button>)</td></tr>
    <tr><td>users without Google accounts, temporary file access / upload for N hours</td><td class="strong">Signed URL (업로드는 PUT, 만료 N시간) (<button class="qref" data-id="22">Q22</button>, <button class="qref" data-id="305">3세트 Q5</button>)</td></tr>
    <tr><td>SSH without external IP</td><td class="strong">IAP TCP forwarding</td></tr>
    <tr><td>who changed what, audit</td><td class="strong">Cloud Audit Logs (Admin Activity)</td></tr>
    <tr><td>who read / accessed Secrets or data, attributable, from day one</td><td class="strong">Data Access audit logs를 운영 전에 활성화 (<button class="qref" data-id="202">2세트 Q2</button>)</td></tr>
    <tr><td>misconfigurations, vulnerabilities across organization</td><td class="strong">Security Command Center</td></tr>
    <tr><td>AI services cannot be accessed from unauthorized projects within the organization</td><td class="strong">조직 수준 IAM + Organization Policy로 API 제한 (gcp.restrictServiceUsage). 방화벽·결제 계정·라벨 X (<button class="qref" data-id="613">사례 연구 Q13</button>)</td></tr>
  </tbody></table></div>
</section>`
},
{
  id: "ops",
  title: "운영 · 모니터링",
  updated: "2026-10-13",
  related: [1, 11, 12, 14, 17, 26, 28, 36, 202, 208, 212, 214, 217, 226, 228, 235, 246, 311, 312, 315, 334, 337, 339, 342, 343, 344, 349, 401, 402, 403, 412, 417, 419, 425, 426, 427, 428, 430, 434, 436, 442, 444, 450, 503, 511, 515, 517, 521, 524, 526, 531, 538, 549, 609, 627, 634, 639, 657, 905, 908, 918],
  html: `
<section>
  <h2>1. 큰 그림: 질문마다 도구가 하나씩</h2>
  <p>Google Cloud의 운영 도구 모음은 <b>Google Cloud Observability</b>(예전 이름 Stackdriver / Cloud Operations Suite)입니다. 보기에 여러 도구가 섞여 나오므로, 먼저 <mark>요건이 어떤 질문인지</mark>부터 정합니다. 보기에 제품군 이름 “Google Cloud Observability” 하나만 나오면, “여러 도구 사일로 + 메일 알림 무시 + 일관된 로깅·보존” 같은 <b>중앙화</b> 요건의 정답입니다 <button class="qref" data-id="634">사례 연구 Q34</button>.</p>
  <p><b>함정: 관측 도구는 데이터를 가공하지 않습니다</b> <button class="qref" data-id="511">5세트 Q11</button>. “이벤트를 중복 제거·정렬해 전달”처럼 <mark>데이터 경로에서 일을 하는</mark> 요건에 Cloud Operations Suite(Observability)를 고르면 오답입니다. 지표·로그로 지연·실패를 <b>보여 줄</b> 뿐이고, 가공은 Dataflow 같은 처리 엔진의 몫입니다.</p>
  <div class="tbl"><table><thead><tr><th>질문</th><th>도구</th><th>비유</th></tr></thead><tbody>
    <tr><td><b>무슨 일이 있었나?</b> (문장으로 된 기록)</td><td class="strong">Cloud Logging</td><td>일지</td></tr>
    <tr><td><b>얼마나?</b> (숫자로 된 추세: CPU, 지연 시간, 요청 수)</td><td class="strong">Cloud Monitoring</td><td>계기판</td></tr>
    <tr><td><b>요청이 어느 구간에서 느린가?</b> (서비스 간 호출)</td><td class="strong">Cloud Trace</td><td>택배 배송 추적</td></tr>
    <tr><td><b>어느 코드(함수)가 CPU·메모리를 먹나?</b></td><td class="strong">Cloud Profiler</td><td>코드 건강검진</td></tr>
    <tr><td><b>어떤 예외(에러)가 몇 번 났나?</b></td><td class="strong">Error Reporting</td><td>에러 모아 보기</td></tr>
    <tr><td><b>누가 무엇을 바꿨나·읽었나?</b></td><td class="strong">Cloud Audit Logs</td><td>출입 기록 (보안 가이드 9장)</td></tr>
    <tr><td><b>VM이 멈췄다, 부팅이 안 된다</b></td><td class="strong">시리얼 포트 출력 (serial console)</td><td>블랙박스</td></tr>
  </tbody></table></div>
  <p>운영 문제의 공통 원칙: <b>고치기 전에 관측</b>, <b>평균 말고 백분위수</b>, <b>사람이 보는 대신 알림</b>, <b>로그는 목적지(sink)로 내보내 보관·분석</b>.</p>
</section>

<section>
  <h2>2. Cloud Logging: 로그의 종류와 흐름 <button class="qref" data-id="12">Q12</button></h2>
  <div class="tbl"><table><thead><tr><th>로그 종류</th><th>예</th><th>수집 방법</th></tr></thead><tbody>
    <tr><td class="strong">플랫폼(서비스) 로그</td><td>Cloud Run 요청 로그, LB 로그, VPC Flow Logs, Firewall Rules Logging</td><td>서비스가 자동 전송 (일부는 직접 켜야 함, <button class="qref" data-id="208">2세트 Q8</button>)</td></tr>
    <tr><td class="strong">사용자(앱) 로그</td><td>앱이 stdout/stderr에 쓴 로그</td><td>Cloud Run·App Engine·GKE는 자동(GKE는 workload logging이 꺼져 있으면 클러스터 설정으로 켬, <button class="qref" data-id="214">2세트 Q14</button>), <mark>VM은 Ops Agent 필요</mark></td></tr>
    <tr><td class="strong">감사 로그</td><td>Admin Activity, Data Access, System Event</td><td>자동 (Data Access는 켜야 함, <button class="qref" data-id="202">2세트 Q2</button>)</td></tr>
  </tbody></table></div>
  <pre><code>로그 발생 → <b>Log Router</b> ─┬─ _Required 버킷 (감사 로그, 400일, 변경 불가)
                         ├─ _Default 버킷 (기본 30일, 기간 변경 가능)
                         └─ <b>sink</b> → 사용자 로그 버킷 / BigQuery / Cloud Storage / Pub/Sub
                         (exclusion filter로 필요 없는 로그는 버려 비용 절감)</code></pre>
  <ul>
    <li><b>Log Analytics</b>: 로그 버킷을 업그레이드하면 Cloud Logging 안에서 SQL로 로그를 분석할 수 있습니다.</li>
    <li><b>로그 기반 지표(log-based metric)</b>: “ERROR 로그 수”처럼 로그를 숫자로 바꿔 Cloud Monitoring 차트·알림에 씁니다.</li>
    <li>보존 기간을 늘리거나 잠그려면 사용자 정의 로그 버킷의 retention 설정 / 버킷 잠금(locked)을 씁니다.</li>
    <li><b>여러 컨테이너 환경의 일관된 로깅·보존 + 빠른 장애 조사</b> <button class="qref" data-id="639">사례 연구 Q39</button>: 정답은 “Cloud Logging으로 표준화”. 오답은 노드 로컬 저장(노드가 사라지면 유실), 서드파티 도구<b>만</b>(통합 약함), 비용 때문에 상세 로깅 끄기(비용은 <mark>exclusion filter·보존 기간</mark>으로 줄임).</li>
  </ul>
</section>

<section>
  <h2>3. VM 안쪽 다루기: Ops Agent(관측) · VM Manager(패치·관리) <button class="qref" data-id="12">Q12</button> <button class="qref" data-id="17">Q17</button> <button class="qref" data-id="36">Q36</button> <button class="qref" data-id="226">2세트 Q26</button> <button class="qref" data-id="526">5세트 Q26</button></h2>
  <p>Compute Engine은 VM <b>바깥</b>에서 볼 수 있는 것(CPU 사용률, 디스크 I/O, 네트워크 바이트)만 기본 제공합니다. VM <b>안쪽</b>을 보려면 <mark>Ops Agent</mark>(로그 + 지표를 함께 수집하는 에이전트)를 설치해야 합니다.</p>
  <div class="tbl"><table><thead><tr><th>보고 싶은 것</th><th>에이전트 없이</th><th>Ops Agent 설치 후</th></tr></thead><tbody>
    <tr><td>CPU 사용률</td><td>O</td><td>O</td></tr>
    <tr><td><b>메모리 사용률</b>, 디스크 사용률(용량 %)</td><td class="strong">X</td><td>O</td></tr>
    <tr><td>OS 로그(syslog), 앱 로그 파일, 프로세스</td><td>X</td><td>O</td></tr>
    <tr><td>Nginx·MySQL 같은 서드파티 앱 지표</td><td>X</td><td>O (통합 설정)</td></tr>
  </tbody></table></div>
  <ul>
    <li>VM이 많으면 <b>agent policy</b>로 에이전트를 일괄 설치·유지합니다.</li>
    <li>구형 Logging agent / Monitoring agent(두 개)는 Ops Agent 하나로 통합됐습니다. 보기에 구형 에이전트가 나오면 Ops Agent 쪽이 정답일 가능성이 큽니다.</li>
    <li>메모리 기준 MIG(Managed Instance Group, 관리형 인스턴스 그룹) 자동 확장도 Ops Agent 지표가 있어야 가능합니다(Q36).</li>
  </ul>
  <p><b>VM Manager</b> <button class="qref" data-id="226">2세트 Q26</button>: Ops Agent가 VM 안을 <b>보는</b> 에이전트라면, VM Manager는 VM 안의 OS를 <b>고치는</b> 도구 모음입니다. 각 VM의 <b>OS Config agent</b>(Google 공개 이미지에 대부분 기본 포함)가 OS Config API의 지시를 받아 실행합니다. SSH로 한 대씩 들어가 <code>apt upgrade</code>를 치는 일을 대신합니다.</p>
  <div class="tbl"><table><thead><tr><th>기능</th><th>하는 일</th><th>이럴 때</th></tr></thead><tbody>
    <tr><td class="strong">Patch (OS patch management)</td><td>OS·보안 업데이트를 즉시(patch job) 또는 예약(patch deployment)으로 적용. Debian은 APT, 재부팅 제어, 준수 현황 보고</td><td>“설정을 마친 VM에 OS·보안 업데이트를 수작업 최소로” (2세트 Q26), “VM 360대에 정기적으로 + 자체 자동화 최소 + 패치 결과 중앙 가시성” → <b>반복 patch deployment</b> (<button class="qref" data-id="526">5세트 Q26</button>). patch job = 지금 한 번, patch deployment = 일정 반복</td></tr>
    <tr><td class="strong">OS policies</td><td>원하는 패키지·설정 상태를 선언해 유지</td><td>“모든 VM에 특정 패키지·설정 유지”</td></tr>
    <tr><td class="strong">OS inventory / Vulnerability reports</td><td>설치 패키지 목록, 알려진 취약점(CVE, Common Vulnerabilities and Exposures) 보고</td><td>“어떤 VM에 무엇이 깔렸나, 취약한 VM은?”</td></tr>
  </tbody></table></div>
  <p>패치 방식 구분: <b>기존 VM을 유지하며 패치</b> = VM Manager Patch / <b>VM을 교체해 업데이트(불변 인프라)</b> = 새 이미지 → 인스턴스 템플릿 → MIG rolling update / <b>컨테이너</b> = 베이스 이미지로 재빌드·재배포(재시작만으로는 그대로). 새 공개 이미지는 새 디스크를 만들 때만 쓰이고 기존 VM을 바꾸지 않습니다.</p>
</section>

<section>
  <h2>4. Cloud Monitoring: 지표 · 대시보드 · 알림 <button class="qref" data-id="217">2세트 Q17</button></h2>
  <div class="tbl"><table><thead><tr><th>기능</th><th>하는 일</th><th>이럴 때</th></tr></thead><tbody>
    <tr><td class="strong">지표(metric)</td><td>시간에 따른 숫자. Google Cloud 지표는 자동, VM 내부는 Ops Agent, <b>앱 고유 KPI는 user-defined metric</b>(앱이 OpenTelemetry·Monitoring API로 직접 전송), 로그에서 뽑으면 log-based metric</td><td>CPU, latency, 큐 길이, 배차 실패 수</td></tr>
    <tr><td class="strong">대시보드</td><td>지표를 차트로 모아 보기</td><td>운영 현황 한눈에</td></tr>
    <tr><td class="strong">알림 정책(alerting policy)</td><td>조건(예: p99 latency &gt; 300ms가 5분)이 맞으면 이메일·Slack·PagerDuty 등으로 알림</td><td>“사람이 계속 지켜보지 않고”</td></tr>
    <tr><td class="strong">Uptime check</td><td>전 세계 여러 위치에서 URL·포트를 주기적으로 호출해 살아 있는지 확인</td><td>“외부에서 서비스가 접속되는지”</td></tr>
    <tr><td class="strong">Metrics scope</td><td>한 프로젝트(스코핑 프로젝트)에서 여러 프로젝트의 지표를 함께 보기</td><td>“여러 프로젝트를 한 화면에서 모니터링”</td></tr>
    <tr><td class="strong">커스텀 대시보드</td><td>콘솔에서 원하는 지표 차트를 골라 배치. 지표가 들어오면 바로 반영</td><td>“운영팀이 앱 KPI를 지연 없이 보기” (<button class="qref" data-id="217">2세트 Q17</button>)</td></tr>
    <tr><td class="strong">Managed Service for Prometheus</td><td>Prometheus 방식 지표를 관리형으로 수집·저장. <b>PromQL 그대로</b>, 저장소는 Cloud Monitoring과 같은 전역 백엔드. GKE 밖(온프레미스·다른 클라우드)에서도 수집</td><td>“이미 Prometheus/PromQL + 관리 최소 + 하이브리드·멀티클라우드” (<button class="qref" data-id="517">5세트 Q17</button>). 환경마다 Prometheus Operator(직접 운영)·대시보드만(수집 경로 없음)·자체 플랫폼 개발은 오답</td></tr>
  </tbody></table></div>
  <p><b>알림 → 자동 복구: 알림 채널을 Pub/Sub로</b> <button class="qref" data-id="609">사례 연구 Q9</button>: “하이브리드·AI 워크로드 사전 모니터링 + 알림이 <mark>자동으로 복구 워크플로를 트리거</mark>, 메일 수동 대응 X” → <mark>Cloud Monitoring alerting policy + Pub/Sub(또는 webhook) 알림 채널 → Cloud Run·Workflows가 조치</mark>. 사람이 받을 채널(메일·Slack·PagerDuty)과 프로그램이 받을 채널(Pub/Sub·webhook)은 같은 정책에 함께 달 수 있습니다. Pub/Sub 채널은 Monitoring 알림 서비스 에이전트에 토픽 게시 권한이 필요하고, 복구 로직은 멱등 + 횟수 제한으로 만듭니다. 오답: Prometheus 메일 알림(사람 대응 그대로), Logging → Cloud Storage(보관일 뿐), Compute Engine 자체 스크립트. Cymbal 버전도 같은 답: Nagios + 메일·Grafana 대시보드 추가·Elastic에 로그만은 오답 <button class="qref" data-id="627">사례 연구 Q27</button>.</p>
  <p><b>모니터링 vs 분석</b>: “<b>지금</b> 이상 있나, 바로 알려 줘”(초~1분) = <mark>Cloud Monitoring</mark>(수집·차트·알림 일체형). “지난달 추세, 경영 보고서”(분~시간 OK) = BigQuery + Data Studio. Bigtable·Firestore에 저장하고 시각화를 붙이는 조립형 보기는 운영 모니터링 문제에서 거의 오답입니다(<button class="qref" data-id="217">2세트 Q17</button>). 라벨에 user_id 같은 고유값을 넣으면 시계열이 폭증하니 피합니다.</p>
</section>

<section>
  <h2>5. 어떤 지표를 볼까: 골든 시그널 <button class="qref" data-id="212">2세트 Q12</button></h2>
  <p>SRE(Site Reliability Engineering, 사이트 신뢰성 엔지니어링)의 <b>4대 골든 시그널</b>: latency, traffic, errors, saturation. 문제는 “무엇을 재고 싶은가”를 묻고, 보기는 비슷한 이름의 지표를 섞어 냅니다.</p>
  <div class="tbl"><table><thead><tr><th>지표</th><th>무엇을 재나</th><th>단위</th><th>질문 문구</th></tr></thead><tbody>
    <tr><td class="strong">Latency (지연 시간)</td><td>요청 <b>하나</b>가 끝나기까지 걸린 시간</td><td>ms (p50/p95/p99)</td><td>how long, response time, slow</td></tr>
    <tr><td class="strong">Traffic = QPS / RPS</td><td>1초에 들어오는 요청 <b>개수</b></td><td>req/s</td><td>how many requests, demand, spike</td></tr>
    <tr><td class="strong">Throughput (처리량)</td><td>1초에 처리한 데이터 <b>양</b></td><td>MB/s</td><td>how much data, capacity</td></tr>
    <tr><td class="strong">Errors</td><td>실패한 요청 비율</td><td>% (5xx 비율 등)</td><td>failures, error rate</td></tr>
    <tr><td class="strong">Saturation (포화도)</td><td>자원이 얼마나 꽉 찼나</td><td>CPU·메모리 %, 큐 길이</td><td>near capacity, resource limits</td></tr>
  </tbody></table></div>
  <ul>
    <li><mark>“per second”가 붙은 지표(QPS, throughput)는 시간이 아니라 시간당 양</mark>입니다. “how long”이면 latency뿐입니다.</li>
    <li>평균은 일부 느린 요청을 숨깁니다. latency는 <b>분포의 백분위수</b>로 봅니다: p50 = 보통 사용자, p95·p99 = 가장 느린 일부 사용자.</li>
  </ul>
</section>

<section>
  <h2>6. SLI · SLO · SLA와 error budget · 부하 테스트 <button class="qref" data-id="26">Q26</button> <button class="qref" data-id="228">2세트 Q28</button> <button class="qref" data-id="342">3세트 Q42</button> <button class="qref" data-id="246">2세트 Q46</button> <button class="qref" data-id="531">5세트 Q31</button></h2>
  <div class="tbl"><table><thead><tr><th>용어</th><th>뜻</th><th>예</th></tr></thead><tbody>
    <tr><td class="strong">SLI (Service Level Indicator, 서비스 수준 지표)</td><td>실제로 재는 값</td><td>300ms 안에 끝난 요청의 비율</td></tr>
    <tr><td class="strong">SLO (Service Level Objective, 서비스 수준 목표)</td><td>내부 목표치</td><td>30일 동안 요청의 99.9%가 300ms 이내</td></tr>
    <tr><td class="strong">SLA (Service Level Agreement, 서비스 수준 계약)</td><td>고객과의 계약. 어기면 보상</td><td>월 가용성 99.5% 미만이면 크레딧 지급</td></tr>
    <tr><td class="strong">Error budget (오류 예산)</td><td>100% − SLO. 허용된 실패량</td><td>99.9% → 한 달 약 43분까지 실패 허용</td></tr>
  </tbody></table></div>
  <ul>
    <li>SLO는 SLA보다 <b>엄격하게</b> 잡습니다(계약을 어기기 전에 먼저 알아채도록).</li>
    <li>Error budget이 남으면 새 기능 배포를 진행하고, 다 쓰면 배포를 멈추고 안정화에 집중합니다.</li>
    <li>Cloud Monitoring에서 서비스에 SLO를 정의하고, <b>burn rate</b>(예산을 소모하는 속도) 알림을 걸 수 있습니다.</li>
    <li><b>알림 피로 + “SLO를 어길 수 있을 때만 호출”</b> <button class="qref" data-id="531">5세트 Q31</button>: <mark>원인(cause)이 아니라 증상(symptom)으로 호출</mark> = error budget <b>burn rate</b> 알림. 예: 99.95%·30일이면 예산 ≈ 21.6분어치 실패, “18시간 안에 소진” = 정상 속도의 720÷18 = <b>40배</b>. 오답: 인스턴스마다 CPU·메모리·디스크·네트워크 알림(원인, 장애 1건에 알림 여러 개), <b>모든 WARN·ERROR 로그</b> 알림(심각도 ≠ 고객 영향, 소음 증가), MIG 인스턴스 수(자동 확장으로 정상 변동). 실무는 fast burn = 호출, slow burn = 티켓. 원인 지표는 대시보드·진단용으로 남김.</li>
    <li><b>SLO 언어를 알아보기</b> <button class="qref" data-id="342">3세트 Q42</button>: “<mark>450ms 넘는 요청의 비율이 허용 수준을 N분 초과하면 알림</mark>” = 지연 기반 SLI(450ms 이내 = good) + SLO(목표 비율) + SLO alerting policy. SLO는 <b>서비스</b> 단위라 서비스별 요청 지연 지표가 먼저 필요하고, GKE(Enterprise)에서는 <b>Cloud Service Mesh</b>(Envoy)가 코드 수정 없이 그 지표를 만들어 줍니다. Profiler(코드 CPU·메모리), Trace(샘플 추적), Config Sync(구성 동기화)는 오답.</li>
    <li><b>의미 있는 SLO 쓰기</b> <button class="qref" data-id="908">공식 모의고사 Q8</button>: <mark>“2xx를 반환하는 요청 99%” + “100ms 이내 반환 요청 99%”</mark>처럼 SLI(무엇을 어떻게 재나)가 명확해야 합니다. “서버 가용성 99.9%”(측정 정의 없음), “GCP 가용성과 동일”(남의 지표), “주간 총 가동 시간·평균 응답 시간”(목표 없음·꼬리 지연 숨김)은 오답.</li>
    <li><b>“측정 가능한 신뢰성 개선 + 빠른 탐지”</b> <button class="qref" data-id="657">사례 연구 Q57</button>: KnightMotives의 불안정한 온라인 주문 시스템은 <mark>딜러 핵심 워크플로(주문 제출·가격 검증)의 SLI·SLO 정의 + 중앙 관측 가능성(로그·지표·트레이스) + 자동 롤백·복구</mark>. 이메일 알림 늘리기(알림 피로)·딜러 수동 보고(탐지 지연)·모니터링 없이 기능 끄기(효과 확인 불가)는 오답.</li>
    <li>“출시 전에 목표를 버티는지 확인” = <b>부하 테스트</b>(Q26). 모니터링은 운영 중 관측이고 부하를 만들지 않습니다.</li>
  </ul>
  <p><b>부하 테스트 설계 원칙</b> <button class="qref" data-id="228">2세트 Q28</button>: <mark>안전하게(격리) + 현실적으로(데이터 계층까지) + 원인을 찾을 수 있게(관측)</mark>.</p>
  <div class="tbl"><table><thead><tr><th>O (넣어야 할 요건)</th><th>X (오답 보기)</th></tr></thead><tbody>
    <tr><td><b>별도 프로젝트</b>의 운영 유사 환경 (할당량·비용·권한 격리)</td><td>운영 환경에 <b>자주</b> 부하 → 고객 영향, 비용, 할당량 소진</td></tr>
    <tr><td>앱 계층 + <b>데이터 계층(Bigtable·DB)</b>의 지연·처리량·사용률</td><td><b>모든</b> 외부 서비스가 전체 부하를 감당 → 속도 제한·요금·계약 위반. mock·stub으로 대체</td></tr>
    <tr><td><b>부하 생성기와 대상 양쪽</b>의 상세 로그·지표 (병목 위치 판단)</td><td>운영 트랜잭션 <b>전부</b> 기록·재생 → 개인정보 노출, 쓰기 중복. 대표 워크로드 모델이면 충분</td></tr>
    <tr><td>부하를 <b>점진적으로</b> 증가, 테스트 시간 통제</td><td>확장 장치(HPA·MIG)가 늘어나는지만 확인 (Q26)</td></tr>
  </tbody></table></div>
  <p>“every / all / frequently against production” 같은 극단적인 표현은 오답 신호입니다.</p>
  <p><b>복원력(resiliency) 테스트: 부하 + 장애를 동시에</b> <button class="qref" data-id="246">2세트 Q46</button>: “공개 후에도 SLA를 유지하는지 검증”이면 부하만(용량 계획)이나 장애만으로는 부족합니다.</p>
  <div class="tbl"><table><thead><tr><th>조건</th><th>O</th><th>X</th></tr></thead><tbody>
    <tr><td>부하</td><td><b>익명화한 실제 요청 재생</b></td><td>무작위 합성 요청 (실제 분포와 다름)</td></tr>
    <tr><td>확장 범위</td><td><b>모든</b> 확장 계층이 확장될 때까지 + 고정 계층(DB) 감시</td><td>한 계층만 / 사용률 75%까지만</td></tr>
    <tr><td>장애</td><td>설계의 장애 단위: <b>존 하나 전체</b> 종료</td><td>두 존에 걸쳐 무작위 종료</td></tr>
    <tr><td>대상</td><td><b>공개 전</b> 통제된 환경, 반복 가능</td><td>실제 사용자를 늘리며 장애 주입 (출시 방법과 혼동)</td></tr>
  </tbody></table></div>
</section>

<section>
  <h2>7. 원인 진단 도구: Trace · Profiler · Error Reporting <button class="qref" data-id="311">3세트 Q11</button> <button class="qref" data-id="417">4세트 Q17</button></h2>
  <div class="tbl"><table><thead><tr><th>도구</th><th>알 수 있는 것</th><th>알 수 없는 것</th></tr></thead><tbody>
    <tr><td class="strong">Cloud Trace</td><td>요청 하나가 서비스 A → B → DB를 거치며 <b>어느 구간에서 몇 ms</b> 썼나 (분산 추적)</td><td>함수 단위 CPU 사용</td></tr>
    <tr><td class="strong">Cloud Profiler</td><td>운영 중 <b>어느 함수가 CPU·메모리를 많이 쓰나</b> (부하 낮음, 상시 켜 둠)</td><td>서비스 간 지연</td></tr>
    <tr><td class="strong">Error Reporting</td><td>로그 속 예외(stack trace)를 <b>같은 종류끼리 묶어</b> 횟수·처음 발생 시각 표시, 새 에러 알림</td><td>성능</td></tr>
    <tr><td class="strong">Cloud Debugger</td><td>(지원 종료) 운영 중 코드 스냅샷</td><td>— 보기에 나오면 보통 오답</td></tr>
  </tbody></table></div>
  <p>도구들은 <b>원인을 찾는</b> 용도입니다. 부하를 만들거나(부하 테스트), 문제를 고치지(자동 확장, 머신 변경) 않습니다.</p>
  <p><b>분산 추적이 동작하는 방식</b> <button class="qref" data-id="311">3세트 Q11</button>: 요청 하나 = <b>trace</b>, 서비스별 작업 = <b>span</b>(같은 trace ID 공유). <mark>W3C traceparent</mark> 헤더가 trace ID를 다음 서비스로 넘기고, <mark>OpenTelemetry 자동 계측</mark>이 헤더 추출·주입과 span 생성을 코드 수정 없이 해 줍니다. 로그에 <code>trace</code>·<code>spanId</code>가 붙으면 Logs Explorer에서 trace별로 로그를 모아 볼 수 있습니다.</p>
  <div class="tbl"><table><thead><tr><th>신호</th><th>단위</th><th>“요청 하나의 경로”를 보여 주나</th></tr></thead><tbody>
    <tr><td class="strong">로그</td><td>서비스·Pod별 개별 기록</td><td>X (Pod 이름·시각 검색은 부정확)</td></tr>
    <tr><td class="strong">지표</td><td>많은 요청을 합친 시계열</td><td>X (추세·감지용)</td></tr>
    <tr><td class="strong">추적 (trace)</td><td>요청 하나</td><td><b>O</b></td></tr>
  </tbody></table></div>
</section>

<section>
  <h2>8. 장애 대응 순서 <button class="qref" data-id="28">Q28</button> <button class="qref" data-id="17">Q17</button> <button class="qref" data-id="214">2세트 Q14</button> <button class="qref" data-id="235">2세트 Q35</button> <button class="qref" data-id="401">4세트 Q1</button></h2>
  <pre><code>① 관측: Cloud Monitoring(언제부터, 얼마나) + Cloud Logging(무슨 일) 같은 시간대로 맞춰 보기
② 변경 확인: Cloud Audit Logs로 그 시각에 누가 무엇을 바꿨나
③ 좁히기: Cloud Trace(어느 구간) / Profiler(어느 코드) / Error Reporting(어떤 예외)
④ VM이 응답 없음·부팅 실패: 시리얼 포트 출력(커널·부팅 메시지), 필요하면 interactive serial console
⑤ 그 다음에 조치: 머신 유형 변경, 자동 확장, 롤백 …</code></pre>
  <ul>
    <li>“<b>first</b> / <b>before making changes</b>”가 있으면 정답은 조치가 아니라 <mark>관측(증거 수집)</mark>입니다(Q28).</li>
    <li><b>예외: 배포 직후 문제 + 이전 정상 버전 있음</b> → 원인이 이미 좁혀졌으므로 <mark>먼저 롤백(완화)</mark>, 조사는 <b>개발·스테이징</b>에서 Cloud Trace·Cloud Logging으로. ISP·지원 케이스부터 하거나 문제 버전을 운영에 다시 올려 디버깅하는 보기는 오답(<button class="qref" data-id="235">2세트 Q35</button>). 순서: <b>완화 → 진단 → 수정(점진적 재배포)</b>.</li>
    <li><b>재현 안 되는 간헐적 오류 + 로그 수집이 꺼져 있음</b>: 기존 환경에서 로그 수집만 켜고 다음 발생을 기다려 잡습니다. 새 클러스터로 옮기기는 변경이 크고 증상 조건까지 바꿀 수 있습니다. 알림(Prometheus 등)은 “났다”만 알려 줄 뿐 원인은 로그에 있습니다(<button class="qref" data-id="214">2세트 Q14</button>).</li>
    <li><b>GKE 앱 → Cloud SQL Auth Proxy 사이드카 → Cloud SQL 연결 오류 + post-mortem</b>: 먼저 Logs Explorer에서 앱 컨테이너·프록시 컨테이너·Cloud SQL 로그를 <mark>같은 시간대로 대조</mark>해 어느 구간에서 끊겼는지 봅니다. DB 재시작·백업 복원·전체 Pod 재시작은 다운타임을 늘리고 증거를 지웁니다. 프록시 서비스 계정에 필요한 역할은 <b>Cloud SQL Client</b>입니다(<button class="qref" data-id="401">4세트 Q1</button>).</li>
    <li>VM 안쪽 OS 문제에 Audit Logs는 쓸모가 없습니다. Audit Logs는 “누가 VM을 재시작했나” 같은 바깥 작업 기록입니다(Q17).</li>
    <li>디스크를 조사해야 하면 스냅샷 → 새 디스크 → 다른 VM에 붙여서 봅니다.</li>
    <li><b>MIG VM이 health check 실패로 계속 재생성돼 들어가 볼 틈이 없음</b> <button class="qref" data-id="515">5세트 Q15</button>: 재생성의 주체는 <mark>autohealing</mark>이므로 <b>autohealing health check를 MIG에서 임시로 제거</b> + 관리자 SSH 키를 프로젝트 전체 SSH 키에 추가 → 조사·수정 후 health check 복원. autoscaling 끄기(개수 조절일 뿐, 이미 꺼져 있다고 하면 함정), rolling restart(재시작을 더 할 뿐), Viewer 역할(SSH 키도 안 넣고 재생성도 안 멈춤)은 오답. 시작 직후 실패면 <b>initial delay</b>가 너무 짧은지도 확인합니다.</li>
  </ul>
</section>

<section>
  <h2>9. 지표로 자동 확장하기 <button class="qref" data-id="11">Q11</button> <button class="qref" data-id="36">Q36</button></h2>
  <div class="tbl"><table><thead><tr><th>상황</th><th>확장 신호</th></tr></thead><tbody>
    <tr><td>CPU를 쓰는 웹·API 서버</td><td class="strong">CPU 사용률</td></tr>
    <tr><td>HTTP 요청이 몰리는 서버 (LB 뒤)</td><td class="strong">LB serving capacity (RPS(Requests Per Second, 초당 요청 수)·사용률)</td></tr>
    <tr><td>Pub/Sub 큐에서 일을 가져오는 워커</td><td class="strong">backlog: <code>num_undelivered_messages</code> (Q11)</td></tr>
    <tr><td>메모리를 많이 쓰는 VM</td><td class="strong">Ops Agent 지표 <code>memory/percent_used</code>, state = used (Q36, <button class="qref" data-id="521">5세트 Q21</button>)</td></tr>
    <tr><td>정해진 시간대에 트래픽 증가</td><td class="strong">Schedule-based autoscaling</td></tr>
  </tbody></table></div>
  <p><b>지표는 맞는데 이미 max</b> <button class="qref" data-id="428">4세트 Q28</button>: 모든 인스턴스가 CPU 포화 + MIG가 <mark>configured maximum size</mark>에 도달 + DB는 정상 = autoscaler가 상한에 막힌 것 → <b>max 인스턴스 수 상향</b>(+ 리전 quota 확인). 재시작(순차·SSH)은 바쁜 정상 프로세스를 끊을 뿐 용량을 늘리지 않고, 신호를 메모리로 바꾸는 것은 병목과 무관합니다.</p>
  <p><b>설정 화면 검사 순서: 지표 → 필터 → 목표 → 유형</b> <button class="qref" data-id="521">5세트 Q21</button>: 지표(percent_used)·목표(75)·유형(GAUGE)이 다 맞는데 확장이 안 되면 <b>필터</b>를 봅니다. <code>state = "used" AND state = "buffered" AND …</code>처럼 <mark>같은 라벨에 서로 다른 값을 AND</mark>로 걸면 시계열 하나는 state 값이 하나뿐이라 <b>일치 0개</b> → 자동 확장기가 지표를 못 받음 → <code>state = "used"</code> 하나로. DELTA_PER_MINUTE(누적 카운터용), bytes_used(목표 75가 75바이트가 됨), free 25(방향 반대, Q36)는 오답.</p>
  <p>원칙: <mark>부하와 같은 방향으로 움직이는, 부하를 가장 직접 나타내는 지표</mark>를 고릅니다. 큐 워커인데 CPU, 메모리인데 free(남은 양)는 방향이나 대상이 어긋난 신호입니다.</p>
</section>

<section>
  <h2>10. 로그 내보내기 · 보관 · 비용 <button class="qref" data-id="1">Q1</button> <button class="qref" data-id="14">Q14</button></h2>
  <div class="tbl"><table><thead><tr><th>요건</th><th>sink 목적지 / 설정</th></tr></thead><tbody>
    <tr><td>로그를 SQL로 분석, 대시보드</td><td class="strong">BigQuery (또는 Log Analytics)</td></tr>
    <tr><td>이미 Cloud Logging에 있는 로그를 <b>복사 없이</b> SQL로 + 대화형 BI 대시보드</td><td class="strong">로그 버킷 업그레이드(Observability Analytics) → <b>linked BigQuery dataset</b>(읽기 전용, 원본 그대로) → BigQuery SQL → <b>Data Studio</b>. Pub/Sub·Cloud Storage 내보내기는 복제·관리 부담, Cloud Monitoring 대시보드는 지표용 (<button class="qref" data-id="349">3세트 Q49</button>)</td></tr>
    <tr><td><b>지표</b>를 수년 보존 (Monitoring 기본은 최대 24개월, 일부 6주), 법적 분쟁 대비</td><td class="strong">Monitoring API로 내보내기 → <b>Cloud Storage</b> + retention policy + Bucket Lock. 자주 SQL 분석이면 BigQuery (<button class="qref" data-id="403">4세트 Q3</button>)</td></tr>
    <tr><td>수년간 저비용 보관, 규정 준수</td><td class="strong">Cloud Storage (Archive class, retention policy + Bucket Lock)</td></tr>
    <tr><td>VM 로그 하루 수백 GB, N년 보존, 처음 30일만 검색, 조기 삭제 방지</td><td class="strong">Ops Agent → Cloud Logging(30일 검색) + sink → Cloud Storage + lifecycle 30일 후 Coldline + retention policy + Bucket Lock. cron 업로드 X, <b>BigQuery 파티션 만료는 삭제</b>라 보존 X (<button class="qref" data-id="444">4세트 Q44</button>)</td></tr>
    <tr><td>특정 로그(예: Cloud VPN 이벤트)만 14개월 내구성 보관, 조사·규정 준수</td><td class="strong">sink + <b>inclusion filter</b> → Cloud Storage + retention policy. Firewall Rules Logging(다른 로그 소스)·Monitoring 대시보드(지표 시각화일 뿐)·Pub/Sub(전달 수단, 메시지 보존 최대 31일) X (<button class="qref" data-id="450">4세트 Q50</button>)</td></tr>
    <tr><td>Splunk 같은 외부 SIEM으로 실시간 전송</td><td class="strong">Pub/Sub</td></tr>
    <tr><td>조직 내 모든 프로젝트 로그를 한곳에</td><td class="strong">조직·폴더 수준 <b>aggregated sink</b> (<code>--include-children</code>)</td></tr>
    <tr><td><b>특정 폴더</b>(예: Production)의 프로젝트만 + 새 프로젝트도 자동</td><td class="strong"><b>그 폴더</b>에 aggregated sink(include children) → 중앙 운영 프로젝트 버킷. 조직 sink는 dev·test까지 수집, 프로젝트별 sink는 새 프로젝트 누락. writer identity에 버킷 쓰기 권한 (<button class="qref" data-id="419">4세트 Q19</button>)</td></tr>
    <tr><td>필요 없는 대량 로그로 비용이 많이 나옴</td><td class="strong">exclusion filter (수집 단계에서 제외)</td></tr>
    <tr><td>Cloud Logging 안에서 보관 기간만 늘리기</td><td class="strong">사용자 정의 로그 버킷 retention 설정</td></tr>
    <tr><td>BigQuery 로그 테이블을 N일 뒤 자동 삭제 + 쿼리 비용 절감</td><td class="strong">시간 파티션 + <b>partition expiration</b> (<button class="qref" data-id="402">4세트 Q2</button>)</td></tr>
  </tbody></table></div>
  <p>비용은 Logging과 다른 데이터입니다. “누가 무엇을 했나” = Audit Logs, “얼마를, 어느 팀이” = <b>Billing export to BigQuery + 라벨</b>(Q1).</p>
  <p><b>이전 전 비용 추정과 이전 후 비용 관리</b> <button class="qref" data-id="315">3세트 Q15</button> <button class="qref" data-id="312">3세트 Q12</button> <button class="qref" data-id="334">3세트 Q34</button> <button class="qref" data-id="339">3세트 Q39</button> <button class="qref" data-id="343">3세트 Q43</button></p>
  <div class="tbl"><table><thead><tr><th>요구 사항</th><th>정답</th><th>오답 패턴</th></tr></thead><tbody>
    <tr><td>(이전 전) 기존 온프레미스 VM·SAP 기준 빠른 예비 비용 추정</td><td class="strong">Migration Center (SAP 계산기 포함)</td><td>Cloud Asset Inventory(GCP 안만 봄), pricing calculator에 수동 예측 입력, 파트너 상세 평가(느림)</td></tr>
    <tr><td>부서별 지출 귀속 (showback·chargeback)</td><td class="strong">표준 labels·tags</td><td>데이터를 어디로 옮겨도 라벨이 없으면 못 나눔</td></tr>
    <tr><td>상세 비용 분석</td><td class="strong">Cloud Billing export → BigQuery (기본 기능)</td><td>Cloud Scheduler로 Cloud SQL에 내보내기</td></tr>
    <tr><td>무분별한 생성 방지 + 반복 가능한 절차</td><td class="strong">IaC (Terraform · Infrastructure Manager)</td><td>-</td></tr>
    <tr><td>예산 초과 알림</td><td class="strong">Cloud Billing budget + 임계값</td><td>Cloud Monitoring 서비스 상태 알림</td></tr>
    <tr><td>(조직) 이미 성과를 낸 내부 팀의 기술 격차 해소, 비용 최소 목표</td><td class="strong">기존 팀 교육 예산 + 역할별 Google Cloud 인증 로드맵 (<button class="qref" data-id="339">3세트 Q39</button>). PCA 가이드의 “비즈니스 프로세스(팀 역량 평가·기술 격차)” 영역</td><td>외부 컨설턴트 예산(경험 없는 팀·특수·긴급일 때만), 고정 납기일(계획이 아님)</td></tr>
    <tr><td>수요를 예측할 수 없는 시험 단계, 비용 낮게 + Google 권장 비용 관리 관행</td><td class="strong">Free Tier + <b>지속 사용 할인(SUD, 자동)</b> + <b>개발팀 비용 관리 교육</b>(팀 전체 비용 의식) (<button class="qref" data-id="524">5세트 Q24</button>)</td><td>약정 사용 할인(CUD: 1·3년 약정이라 덜 써도 요금), 비용 전담 직원 채용(시험 단계엔 과함, 비용 책임이 엔지니어링 결정과 분리됨)</td></tr>
    <tr><td>사용 패턴이 일정한 앱, 최저 비용으로 충분한 머신 유형을 모름</td><td class="strong">비슷한 크기 VM 하나 + Ops Agent(메모리까지 수집) + 평상시 트래픽 → Compute Engine <b>machine type 추천</b>(rightsizing, 최근 8일 기준) 적용 (<button class="qref" data-id="343">3세트 Q43</button>)</td><td>최소 머신 + MIG 자동 확장(대수만 조정), 여러 크기 + 스트레스 테스트(한계 기준·과대 선택), App Engine flexible로 크기 복사(재플랫폼)</td></tr>
    <tr><td>업무 시간에만 쓰는 테스트·샌드박스 VM</td><td class="strong">Cloud Scheduler → Cloud Run function으로 퇴근 후 중지·출근 전 시작 (또는 instance schedule). 중지하면 vCPU·메모리 요금 0, 디스크·고정 IP는 남음 (<button class="qref" data-id="334">3세트 Q34</button>)</td><td>작은 머신으로 변경(요금 남음), 운영 VM에서 스크립트, CPU 자동 확장(시간표 모름), Spot(밤새 켜짐·업무 중 선점)</td></tr>
  </tbody></table></div>
</section>

<section>
  <h2>11. 자주 틀리는 함정</h2>
  <div class="tbl"><table><thead><tr><th>함정</th><th>실제</th></tr></thead><tbody>
    <tr><td>DR 훈련 중 앱 동작 관측·문제 해결을 Cloud Audit Logs로 / 복구 환경을 gcloud 스크립트로 재구성</td><td>Audit Logs는 “누가 무엇을 바꿨나”뿐, 지연·오류율·트래픽 전환은 <b>Cloud Monitoring·Logging</b>. 반복 재구성은 선언형 <b>Infrastructure Manager</b> (<button class="qref" data-id="538">5세트 Q38</button>)</td></tr>
    <tr><td>“서빙 성능을 본다 = throughput”</td><td>요청 하나의 소요 시간이면 <b>latency</b>. throughput은 초당 데이터 양 (<button class="qref" data-id="212">2세트 Q12</button>)</td></tr>
    <tr><td>공개 전 SLA 검증 → 실제 사용자를 점점 늘리며 리소스 종료</td><td>점진적 공개는 출시 방법. 고객 영향·재현 불가. <b>익명화 요청 재생 + 모든 계층 확장 + 존 하나 종료</b> (<button class="qref" data-id="246">2세트 Q46</button>)</td></tr>
    <tr><td>평균 latency만 보면 충분하다</td><td>느린 일부 사용자가 숨음 → <b>p95·p99</b></td></tr>
    <tr><td>VM 메모리 사용률은 기본으로 보인다</td><td><b>Ops Agent</b>가 있어야 보임 (Q12, Q36)</td></tr>
    <tr><td>OS·커널 장애를 Audit Logs로 조사</td><td>Audit Logs는 바깥 작업 기록. OS 안쪽은 Logging + 시리얼 콘솔 (Q17)</td></tr>
    <tr><td>실시간·시계열·대용량 KPI 모니터링 → Bigtable + Data Studio</td><td>동사가 “monitor”면 <b>user-defined metric → Cloud Monitoring 대시보드</b>. Bigtable은 DB라 차트·알림이 없고 Data Studio는 BI 리포트 (<button class="qref" data-id="217">2세트 Q17</button>)</td></tr>
    <tr><td>로그를 켜려고 새 클러스터를 만들어 이전 / 알림을 걸면 원인을 알 수 있다</td><td>기존 클러스터에서 <b>workload logging만 켜기</b>. 알림은 발생 사실만, 원인은 <b>로그</b> (<button class="qref" data-id="214">2세트 Q14</button>)</td></tr>
    <tr><td>MIG VM이 계속 재생성 → autoscaling을 끈다</td><td>autoscaling은 <b>개수</b> 조절. 재생성은 <b>autohealing(health check)</b>. 조사하려면 health check를 임시로 해제 (<button class="qref" data-id="515">5세트 Q15</button>)</td></tr>
    <tr><td>원인 모를 성능 저하 → 바로 머신 키우기</td><td>먼저 <b>Logging + Monitoring으로 관측</b> (Q28)</td></tr>
    <tr><td>배포 직후 지연 → ISP 조사 / 지원 케이스 먼저 / 문제 버전을 운영에 다시 올려 디버깅</td><td>원인은 새 버전. <b>즉시 롤백 → 스테이징에서 Trace·Logging</b> (<button class="qref" data-id="235">2세트 Q35</button>)</td></tr>
    <tr><td>현실적인 부하 테스트 = 운영 트랜잭션 전부 기록·재생 / 운영 환경에 자주</td><td>개인정보 노출·쓰기 중복·고객 영향. <b>별도 프로젝트 + 데이터 계층 측정 + 양쪽 로그·지표</b> (<button class="qref" data-id="228">2세트 Q28</button>)</td></tr>
    <tr><td>서비스 간 요청 추적 → gateway에서 request-id 만들어 모든 팀이 수동으로 로그에 / Pod 이름·시각으로 로그 검색 / 오류 지표 대시보드</td><td>수동 상관 로직은 요건 위반, 로그 검색은 부정확, 지표는 집계. <b>Cloud Trace + OpenTelemetry 자동 계측 + W3C traceparent + 로그 연동</b> (<button class="qref" data-id="311">3세트 Q11</button>)</td></tr>
    <tr><td>Billing 데이터를 Cloud Scheduler로 Cloud SQL에 내보내기 / 비용 관리에 Monitoring 서비스 알림</td><td>Billing export는 기본 기능으로 <b>BigQuery</b>, 비용 알림은 <b>budget</b>. 부서별 귀속은 <b>labels</b> (<button class="qref" data-id="312">3세트 Q12</button>)</td></tr>
    <tr><td>GKE 감시를 위해 노드 스크립트 → Pub/Sub → BigQuery → Looker Studio / 외부 알림 SW / 장애마다 대시보드</td><td>GKE 지표·대시보드·알림은 <b>기본 제공</b>. 사전 정의 GKE 대시보드 + alerting policy를 미리 (<button class="qref" data-id="337">3세트 Q37</button> <button class="qref" data-id="549">5세트 Q49</button>)</td></tr>
    <tr><td>Cloud Trace로 부하를 걸어 확인</td><td>Trace는 진단만. 버티는지 확인은 <b>부하 테스트</b> (Q26)</td></tr>
    <tr><td>Firewall Insights가 비면 VPC Flow Logs를 켠다</td><td><b>Firewall Rules Logging</b>을 규칙마다 켠다 (<button class="qref" data-id="208">2세트 Q8</button>)</td></tr>
    <tr><td>Data Access 감사 로그는 자동으로 남는다</td><td>대부분 서비스에서 <b>기본 꺼짐</b>, 운영 전에 켠다 (<button class="qref" data-id="202">2세트 Q2</button>)</td></tr>
    <tr><td>큐 워커를 CPU로 확장</td><td>큐 워커는 <b>backlog</b>로 (Q11)</td></tr>
    <tr><td>지표 7년 보존 → Cloud Monitoring 기본 보존에 맡긴다</td><td>기본은 <b>최대 24개월</b>(일부 6주)·다운샘플링. 직접 <b>Cloud Storage</b>로 내보내고 Bucket Lock (<button class="qref" data-id="403">4세트 Q3</button>)</td></tr>
    <tr><td>zone 하나 장애 대비인데 “더 안전하게” 멀티 리전 / 멀티 리전 VM + 일일 스냅샷</td><td>요구 범위(zone)를 넘는 멀티 리전은 과잉 비용, 스냅샷은 다운타임이 있는 <b>복구</b>(가용성 아님). <b>regional MIG</b> + 남은 zone으로 감당할 용량. 모든 zone 동시 장애 = 리전 장애로 별도 요구 (<button class="qref" data-id="436">4세트 Q36</button>)</td></tr>
    <tr><td>regional MIG 서비스의 zone 장애 내성 검증 → read replica 만들어 수동 failover</td><td>read replica는 failover 대상이 아니고(HA standby만), DB만 시험함. <b>한 zone의 VM을 멈추는 장애 시뮬레이션 + API 지표 관찰</b> (<button class="qref" data-id="426">4세트 Q26</button>)</td></tr>
    <tr><td>HA failover가 실제 장애 때 실패 → 머신 키우기 / 백업 더 자주</td><td>증설은 성능, 백업은 RPO 대책. failover 자체는 <b>정기 훈련으로 미리 일으켜 보고 앱 재연결 확인</b> (<button class="qref" data-id="412">4세트 Q12</button>)</td></tr>
    <tr><td>폴더의 모든 프로젝트 로그 수집 → 프로젝트마다 sink</td><td>“새 프로젝트 자동 포함”이면 탈락. <b>폴더에 aggregated sink</b> 하나로 상속 (<button class="qref" data-id="419">4세트 Q19</button>)</td></tr>
    <tr><td>로그 장기 보관은 Cloud Logging 기본 버킷에</td><td>_Default는 30일. 장기·저비용이면 sink → <b>Cloud Storage</b></td></tr>
    <tr><td>VM OS 패치 → Config Sync + Ops Agent / Cloud Build + Cloud Deploy / Scheduler + SSH 스크립트</td><td>Config Sync는 Kubernetes용, Ops Agent는 <b>보는</b> 에이전트, Cloud Deploy는 앱 릴리스용, SSH 스크립트는 직접 구현. 패치는 <b>VM Manager + OS Config agent</b> (<button class="qref" data-id="526">5세트 Q26</button>)</td></tr>
    <tr><td>설정이 많은 VM의 OS 업데이트 → 새 Debian 이미지마다 VM 교체 / 컨테이너 재시작</td><td>새 이미지는 기존 VM을 안 바꾸고 교체는 일이 많음, 재시작은 이미지 그대로. <b>VM Manager Patch</b> (<button class="qref" data-id="226">2세트 Q26</button>)</td></tr>
  </tbody></table></div>
</section>

<section>
  <h2>12. 키워드 → 정답 빠른 표</h2>
  <div class="tbl"><table><thead><tr><th>문제 속 표현</th><th>정답 방향</th></tr></thead><tbody>
    <tr><td>how long each request takes, response time</td><td class="strong">Latency (p95/p99)</td></tr>
    <tr><td>small percentage of requests slow, which individual microservice contributes the most latency</td><td class="strong">Cloud Trace 계측 + 서비스별 span (Monitoring 대시보드·요청마다 custom metric·timeout 단축 X) (<button class="qref" data-id="417">4세트 Q17</button>)</td></tr>
    <tr><td>number of requests, traffic spikes</td><td class="strong">QPS / RPS</td></tr>
    <tr><td>already use Prometheus and PromQL, on-premises + other clouds, scale globally, minimal administration</td><td class="strong">Google Cloud Managed Service for Prometheus (<button class="qref" data-id="517">5세트 Q17</button>)</td></tr>
    <tr><td>cannot predict demand, keep trial costs low, Google-recommended cost-management practices</td><td class="strong">Free Tier + SUD + 팀 교육. CUD·전담 직원 채용 X (<button class="qref" data-id="524">5세트 Q24</button>)</td></tr>
    <tr><td>MIG memory autoscaling does not scale out, filter state = used AND buffered AND cached AND slab</td><td class="strong">필터를 state = "used"로 (AND = 일치 0개). DELTA_PER_MINUTE·bytes_used·free 25 X (<button class="qref" data-id="521">5세트 Q21</button>)</td></tr>
    <tr><td>MIG VMs recreated seconds after startup, fail autohealing health check, autoscaling already off, admin needs SSH time</td><td class="strong">autohealing health check 임시 제거 + 프로젝트 전체 SSH 키에 관리자 키 (<button class="qref" data-id="515">5세트 Q15</button>)</td></tr>
    <tr><td>resiliency testing, maintain SLA, public launch, two zones, autoscaled tiers</td><td class="strong">익명화한 실제 요청 재생 → 모든 확장 계층 확장 + 동시에 존 하나 종료 (<button class="qref" data-id="246">2세트 Q46</button>)</td></tr>
    <tr><td>amount of data served, MB/s, capacity</td><td class="strong">Throughput</td></tr>
    <tr><td>monitor application KPIs with minimal delay, operations team</td><td class="strong">User-defined metrics → Cloud Monitoring 커스텀 대시보드 (<button class="qref" data-id="217">2세트 Q17</button>)</td></tr>
    <tr><td>notify the team, without manually watching</td><td class="strong">Cloud Monitoring alerting policy</td></tr>
    <tr><td>alerts must automatically trigger remediation workflows rather than manual email responses</td><td class="strong">alerting policy + Pub/Sub 알림 채널 → Cloud Run (<button class="qref" data-id="609">사례 연구 Q9</button>)</td></tr>
    <tr><td>is the site reachable from around the world</td><td class="strong">Uptime check</td></tr>
    <tr><td>monitor multiple projects in one place</td><td class="strong">Metrics scope</td></tr>
    <tr><td>reuse a custom dashboard in another project, minimize manual work</td><td class="strong">대시보드 JSON 정의 내보내기 → 가져오기 (URL 공유·수동 재작성 X) (<button class="qref" data-id="344">3세트 Q44</button>)</td></tr>
    <tr><td>fastest built-in method, investigate GKE service degradation, proactive notifications</td><td class="strong">사전 정의 GKE 대시보드 → 커스텀 대시보드 → alerting policy (<button class="qref" data-id="337">3세트 Q37</button> <button class="qref" data-id="549">5세트 Q49</button>)</td></tr>
    <tr><td>several GKE clusters, metrics scope, identify cluster failures quickly, notify when thresholds crossed</td><td class="strong">같은 답. 사전 정의 GKE 대시보드 + 재사용 대시보드 + alerting policy를 <b>장애 전에</b>. 장애마다 대시보드·VM 위 별도 알림 SW·노드 스크립트 파이프라인 X (<button class="qref" data-id="549">5세트 Q49</button>)</td></tr>
    <tr><td>VM memory / OS logs / application log files</td><td class="strong">Ops Agent</td></tr>
    <tr><td>which service in the call chain is slow</td><td class="strong">Cloud Trace</td></tr>
    <tr><td>trace one request across every microservice, without custom correlation logic</td><td class="strong">Cloud Trace + OpenTelemetry automatic instrumentation + W3C traceparent (<button class="qref" data-id="311">3세트 Q11</button>)</td></tr>
    <tr><td>which function uses the most CPU in production</td><td class="strong">Cloud Profiler</td></tr>
    <tr><td>group exceptions, new errors</td><td class="strong">Error Reporting</td></tr>
    <tr><td>count of specific log entries as a metric / alert on log</td><td class="strong">Log-based metric</td></tr>
    <tr><td>VM unresponsive, boot failure, kernel panic</td><td class="strong">Serial port output</td></tr>
    <tr><td>cannot reproduce, intermittent errors, fewest changes, logs not enabled</td><td class="strong">기존 환경에서 로그 수집 켜고 다음 발생 시 로그 조사 (<button class="qref" data-id="214">2세트 Q14</button>)</td></tr>
    <tr><td>first step, before making changes</td><td class="strong">Logging + Monitoring로 증거 수집</td></tr>
    <tr><td>verify it handles expected load before launch</td><td class="strong">Load test</td></tr>
    <tr><td>analyze logs with SQL</td><td class="strong">Sink → BigQuery / Log Analytics</td></tr>
    <tr><td>auditors review IAM policy changes across projects, centralize, easy to query, expose only relevant data</td><td class="strong">Cloud Audit Logs → aggregated sink → BigQuery + IAM·authorized view(감사인별 행·열 제한). Monitoring 알림(이력 X)·Cloud Storage 버킷(쿼리·선택 공개 불편)·함수→Cloud SQL X. sink는 소급 X (<button class="qref" data-id="442">4세트 Q42</button>)</td></tr>
    <tr><td>anonymized usage reports, delete PII after a period, minimize cost (audit logs)</td><td class="strong">감사 로그 → BigQuery(파티션 만료) + Looker Studio(구 데이터 포털). Cloud Storage는 쿼리 X, Pub/Sub는 저장소 X, PD는 비쌈 (<button class="qref" data-id="905">공식 모의고사 Q5</button>)</td></tr>
    <tr><td>dev VMs start/stop several times a day, finance must see costs (choose two)</td><td class="strong">상태는 Persistent Disk에 두고 시작·중지 + BigQuery 결제 내보내기 + labels로 그룹별 비용. --auto-delete는 삭제 때만, Local SSD는 중지 시 소실, 라벨은 지표 X (<button class="qref" data-id="918">공식 모의고사 Q18</button>)</td></tr>
    <tr><td>workstation VMs used only on weekdays during working hours, idle most of the week, reduce compute cost</td><td class="strong"><b>instance schedule</b>(업무 전 자동 시작·업무 후 자동 중지, 최대 15분 지연 감안). 3년 CUD(밤·주말에도 약정 비용)·N2 교체·MIG autoscaling(개인 워크스테이션 삭제 위험) X (<button class="qref" data-id="434">4세트 Q34</button>)</td></tr>
    <tr><td>retain logs for years cheaply</td><td class="strong">Sink → Cloud Storage (Archive)</td></tr>
    <tr><td>send logs to third-party SIEM</td><td class="strong">Sink → Pub/Sub</td></tr>
    <tr><td>automatically investigate suspicious events as soon as they appear, event-driven</td><td class="strong">Sink(포함 필터) → Pub/Sub → Cloud Run function. Cloud Scheduler·BigQuery 주기 쿼리는 폴링, Cloud Storage sink는 시간 단위 배치 (<button class="qref" data-id="425">4세트 Q25</button>)</td></tr>
    <tr><td>all projects in the organization</td><td class="strong">Aggregated sink (조직·폴더)</td></tr>
    <tr><td>reduce logging cost</td><td class="strong">Exclusion filter</td></tr>
    <tr><td>internal reliability target / allowed failures</td><td class="strong">SLO / error budget</td></tr>
    <tr><td>repeatable disaster-recovery exercises, rebuild the recovery environment, visibility into application behavior</td><td class="strong">Infrastructure Manager(Terraform) + Cloud Operations Suite(Monitoring·Logging). gcloud 스크립트·Audit Logs X (<button class="qref" data-id="538">5세트 Q38</button>)</td></tr>
    <tr><td>overlooking notifications because of the volume, paging only for conditions that could violate the SLO</td><td class="strong">error budget burn rate 알림(증상 기반). CPU·메모리 원인 알림·WARN/ERROR 로그 알림·인스턴스 수 X (<button class="qref" data-id="531">5세트 Q31</button>)</td></tr>
    <tr><td>problem began only after the deployment, previous version was fine</td><td class="strong">이전 known-good 버전으로 즉시 롤백 → 비운영 환경에서 Cloud Trace·Cloud Logging 조사 (<button class="qref" data-id="235">2세트 Q35</button>)</td></tr>
    <tr><td>load-testing platform requirements (choose three)</td><td class="strong">별도 프로젝트 + 데이터 계층(Bigtable) 측정 + 부하 생성기·대상 양쪽 로그·지표 (<button class="qref" data-id="228">2세트 Q28</button>)</td></tr>
    <tr><td>GPU batch, flexible completion times, can restart after interruptions, minimize cost, preserve completed work when instances are reclaimed</td><td class="strong">Spot VM + GPU + Persistent Disk에 주기적 checkpoint. reclaim(회수) = preempt(선점). 표준 VM(비쌈)·Local SSD(선점 시 소실)·Cloud Run functions(ephemeral 저장소) X (<button class="qref" data-id="503">5세트 Q3</button>)</td></tr>
    <tr><td>Spot VMs can be preempted, save state / clean up before the VM stops</td><td class="strong">메타데이터 <code>shutdown-script</code>(내용) 또는 <code>shutdown-script-url</code>(gs:// 스크립트 <b>파일</b> 위치). 정리 시간 약 30초(best effort). xinetd·uptime check·/etc/rc6.d X (<button class="qref" data-id="427">4세트 Q27</button>)</td></tr>
    <tr><td>shutdown scripts do not always finish on scale-in, cleanup must run independently of the VM</td><td class="strong">VM 삭제 감사 로그 → Logging sink → Pub/Sub → Cloud Run function(멱등). 꺼지는 VM에서 대기·재시작·Pub/Sub publish는 같은 실패 지점 (<button class="qref" data-id="430">4세트 Q30</button>)</td></tr>
    <tr><td>OS package and security updates, minimal ongoing manual work (VM)</td><td class="strong">VM Manager Patch (patch deployment) (<button class="qref" data-id="226">2세트 Q26</button>)</td></tr>
    <tr><td>~360 Ubuntu/RHEL VMs, install OS security updates regularly, minimize custom automation, centralized patch results</td><td class="strong">VM Manager + OS Config agent + 반복 patch deployment (<button class="qref" data-id="526">5세트 Q26</button>)</td></tr>
  </tbody></table></div>
</section>`
},
{
  id: "ja",
  title: "일본어 용어집 (시험 표기)",
  updated: "2026-10-13",
  related: [241, 301, 302, 424, 443, 501, 502, 503, 504, 505, 506, 509, 510, 511, 513, 514, 515, 516, 518, 519, 522, 523, 524, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 634, 636, 638, 644, 645, 646, 647, 648, 649, 651, 652, 654, 656, 659, 660, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919],
  html: `
<section>
  <h2>0. 읽는 법</h2>
  <p>일본어 시험 문제는 서비스 이름을 <b>영어 그대로 두는 경우</b>(Cloud Storage, BigQuery, Cloud NAT, Spot VM)와 <b>일본어로 번역하는 경우</b>(永続ディスク, 共有 VPC, 限定公開の Google アクセス)가 섞여 있습니다. <mark>번역되는 쪽이 함정</mark>입니다. 같은 서비스가 문서에 따라 영어·일본어 두 표기로 다 나오기도 합니다(Persistent Disk = 永続ディスク).</p>
  <p>이 표의 일본어 표기는 Google Cloud 일본어 공식 문서(<code>docs.cloud.google.com/...?hl=ja</code>)와 공식 모의고사(일본어 원문)에서 확인한 것입니다. 확인하지 못한 표기는 “(확인 필요)”로 표시했습니다. 표기 띄어쓰기(<code>サービス アカウント</code>처럼 가타카나 단어 사이 공백)도 문서 그대로입니다.</p>
  <p>열 구성: <b>영어 | 일본어 시험 표기 | 뜻·주의</b>. <mark>노란 표시</mark>는 영어와 모양이 크게 달라 놓치기 쉬운 표기입니다.</p>
</section>

<section>
  <h2>1. 이름이 바뀐 서비스 · 일본어 이름이 다른 서비스 <button class="qref" data-id="905">공식 모의고사 Q5</button></h2>
  <p><b>“データポータル”은 틀린 번역이 아닙니다.</b> Data Studio의 일본어 공식 이름이 <b>Google データポータル</b>였고, 이름이 Looker Studio로 바뀐 지금도 <mark>일본어 공식 제품 페이지 제목은 “データポータル”</mark>입니다(<code>cloud.google.com/looker-studio?hl=ja</code>). 그래서 일본어 문제에서 データポータル이 보이면 <b>Looker Studio(= 옛 Data Studio)</b>로 읽으면 됩니다. 공식 모의고사 Q5에도 “Google データポータルを使用してレポートを生成する”로 나옵니다.</p>
  <div class="tbl"><table><thead><tr><th>현재 이름</th><th>옛 이름 / 일본어 표기</th><th>시험에서 보이는 형태·주의</th></tr></thead><tbody>
    <tr><td class="strong">Looker Studio</td><td>Data Studio / <mark>Google データポータル</mark></td><td>일본어 문서는 지금도 データポータル. BI(Business Intelligence) 대시보드·보고서</td></tr>
    <tr><td class="strong">Sensitive Data Protection</td><td>Cloud DLP(Data Loss Prevention) / <mark>機密データの保護</mark></td><td>Cloud DLP가 機密データの保護의 일부가 됨. API 이름은 지금도 “Cloud Data Loss Prevention API（DLP API）”. de-identification = <mark>匿名化</mark>, inspection = 検査</td></tr>
    <tr><td class="strong">Cloud Run functions</td><td>Cloud Functions</td><td>영어 그대로. 옛 문제는 Cloud Functions(第 2 世代 = 2세대)로 나옴</td></tr>
    <tr><td class="strong">Artifact Registry</td><td>Container Registry</td><td>Container Registry는 非推奨(지원 중단 예정). 보기에 둘 다 있으면 Artifact Registry</td></tr>
    <tr><td class="strong">Spot VM</td><td>プリエンプティブル VM(Preemptible VM)</td><td>회수(reclaim)는 문서에서 <mark>プリエンプト</mark>(선점). 둘 다 중단 허용 배치용 (<button class="qref" data-id="503">5세트 Q3</button>)</td></tr>
    <tr><td class="strong">Cloud Logging · Cloud Monitoring</td><td>Stackdriver</td><td>옛 문제에 Stackdriver Logging/Monitoring으로 나올 수 있음 (확인 필요: 일본어 문서 표기)</td></tr>
    <tr><td class="strong">GKE Enterprise / Cloud Service Mesh</td><td>Anthos / Anthos Service Mesh</td><td>멀티 클러스터·하이브리드 관리. (확인 필요: 일본어 문서 표기)</td></tr>
    <tr><td class="strong">Gemini Enterprise Agent Platform</td><td>Vertex AI</td><td><mark>일본어 시험 가이드가 이 이름을 그대로 씀</mark>(“Gemini Enterprise Agent Platform”, “Agent Platform Pipelines”). 옛 문제·문서는 Vertex AI (<button class="qref" data-id="424">4세트 Q24</button>). 문서 제목: Gemini Enterprise Agent Platform Pipelines の概要, Model Registry の概要, Gemini Enterprise Agent Platform <mark>ML メタデータ</mark>の概要, パイプライン アーティファクトの<mark>リネージ</mark>を追跡する <button class="qref" data-id="649">사례 연구 Q49</button></td></tr>
    <tr><td class="strong">CX Agent Studio</td><td>Dialogflow CX (← Dialogflow ES) / Conversational Agents</td><td>일본어 문서도 영어 그대로(“CX Agent Studio は、次の利点を備えた Dialogflow CX の進化を表しています”). 정식 이름 Customer Experience Agent Studio. 외부 API 연결 = <mark>OpenAPI ツール</mark>, 대화형 에이전트 = 会話エージェント <button class="qref" data-id="619">사례 연구 Q19</button></td></tr>
    <tr><td class="strong">Agent Search / AI Commerce Search</td><td>Vertex AI Search / Agent Search for commerce (← Vertex AI Search for commerce)</td><td>일본어 문서도 영어 그대로(“Agent Search を使用すると…”, “AI Commerce Search を実装できます”). Cymbal 사례 원문의 <mark>Google Cloud の Discovery AI</mark>(商品検索による会話型コマース)가 가리키는 상품 검색·추천 계열 <button class="qref" data-id="617">사례 연구 Q17</button> <button class="qref" data-id="622">사례 연구 Q22</button></td></tr>
    <tr><td class="strong">Knowledge Catalog</td><td>Dataplex Universal Catalog (← Dataplex)</td><td>2026년 4월 10일 개명(일본어 문서 “Dataplex Universal Catalog は Knowledge Catalog と呼ばれるように”). 일본어 문서도 영어 그대로. data profiling = <mark>データ プロファイリング</mark>(データ プロファイル スキャン), automatic data quality = <mark>自動データ品質</mark>(データ品質スキャン) (<button class="qref" data-id="534">5세트 Q34</button>)</td></tr>
    <tr><td class="strong">Managed Service for Apache Spark</td><td>Dataproc</td><td>일본어 문제는 Dataproc으로 나올 가능성이 큼</td></tr>
    <tr><td class="strong">Google Workspace</td><td>G Suite</td><td>공식 모의고사에도 Google Workspace로 나옴</td></tr>
    <tr><td class="strong">Chrome Enterprise Premium</td><td>BeyondCorp Enterprise</td><td>시험 가이드 표기는 Chrome Enterprise Premium (<button class="qref" data-id="904">공식 모의고사 Q4</button>)</td></tr>
    <tr><td class="strong">Google Cloud Observability</td><td>Cloud Operations suite (← Stackdriver)</td><td>시험 가이드 섹션 6 표기. 문제엔 옛 이름 “Cloud Operations Suite”도 나옴 (<button class="qref" data-id="538">5세트 Q38</button>)</td></tr>
    <tr><td class="strong">Infrastructure Manager</td><td>Infrastructure Manager (Infra Manager)</td><td>일본어 문서도 영어 그대로. IaC = Infrastructure as Code（IaC） (<button class="qref" data-id="538">5세트 Q38</button>)</td></tr>
  </tbody></table></div>
</section>

<section>
  <h2>2. 컴퓨트 · GKE</h2>
  <div class="tbl"><table><thead><tr><th>영어</th><th>일본어 시험 표기</th><th>뜻·주의</th></tr></thead><tbody>
    <tr><td class="strong">Managed Instance Group (MIG)</td><td>マネージド インスタンス グループ</td><td>공식 모의고사 Q14 (<button class="qref" data-id="914">공식 모의고사 Q14</button>)</td></tr>
    <tr><td class="strong">instance template</td><td>インスタンス テンプレート</td><td></td></tr>
    <tr><td class="strong">autohealing / autoscaling</td><td><mark>自動修復</mark> / 自動スケーリング</td><td>“자동 복구”를 修復라고 씀 (<button class="qref" data-id="515">5세트 Q15</button>)</td></tr>
    <tr><td class="strong">health check / initial delay</td><td>ヘルスチェック / 初期遅延</td><td>autohealing 문서 표기</td></tr>
    <tr><td class="strong">project-wide SSH keys / project metadata</td><td>プロジェクト全体の SSH 認証鍵 / プロジェクト メタデータ</td><td>SSH key = <mark>SSH 認証鍵</mark>. OS Login은 영어 그대로</td></tr>
    <tr><td class="strong">stateful MIG</td><td>ステートフル MIG</td><td></td></tr>
    <tr><td class="strong">Persistent Disk</td><td>Persistent Disk / <mark>永続ディスク</mark></td><td>두 표기 다 나옴. 공식 모의고사는 永続ディスク</td></tr>
    <tr><td class="strong">Local SSD / Hyperdisk</td><td>ローカル SSD / Hyperdisk</td><td>Local SSD = 一時的(일시적), 선점·중지 시 소실</td></tr>
    <tr><td class="strong">Spot VM / preempt</td><td>Spot VM / プリエンプト</td><td>(<button class="qref" data-id="503">5세트 Q3</button>)</td></tr>
    <tr><td class="strong">Shielded GKE Nodes</td><td><mark>シールドされた GKE ノード</mark></td><td>Shielded VM = シールドされた VM 계열 (<button class="qref" data-id="502">5세트 Q2</button>)</td></tr>
    <tr><td class="strong">node pool</td><td>ノードプール</td><td></td></tr>
    <tr><td class="strong">Horizontal Pod Autoscaler / cluster autoscaler</td><td><mark>水平 Pod 自動スケーリング</mark> / <mark>クラスタの自動スケーリング</mark></td><td>문서 제목: 水平 Pod 自動スケーリング, GKE クラスタの自動スケーリングについて. Ingress·Service는 영어 그대로 (<button class="qref" data-id="548">5세트 Q48</button>)</td></tr>
    <tr><td class="strong">patch job / patch deployment / patch compliance</td><td>パッチジョブ / パッチデプロイ / パッチ コンプライアンス</td><td>VM Manager·OS Config エージェント는 영어 그대로 (<button class="qref" data-id="526">5세트 Q26</button>)</td></tr>
    <tr><td class="strong">fleet / attached clusters / source of truth</td><td><mark>フリート</mark> / <mark>GKE 接続クラスタ</mark> / 信頼できる情報源</td><td>Config Sync·Policy Controller는 영어 그대로, constraint = 制約 (<button class="qref" data-id="522">5세트 Q22</button>)</td></tr>
    <tr><td class="strong">Identity Platform / federated identity provider</td><td>Identity Platform (영어 그대로) / <mark>連携 ID プロバイダ</mark>(フェデレーション ID プロバイダ)</td><td>Identity Platform 인증 문서 표기. IdP는 약어 그대로 (<button class="qref" data-id="608">사례 연구 Q8</button>)</td></tr>
    <tr><td class="strong">fleet management / policy bundle / observability</td><td><mark>フリート管理</mark> / ポリシー バンドル / <mark>オブザーバビリティ</mark></td><td>문서 제목: フリート管理, Policy Controller の概要(Policy Controller는 영어 그대로) (<button class="qref" data-id="607">사례 연구 Q7</button>)</td></tr>
    <tr><td class="strong">Infrastructure Manager / blueprint / infrastructure as code</td><td>Infrastructure Manager (영어 그대로) / <mark>ブループリント</mark> / Infrastructure as Code（IaC）</td><td>문서 제목 “Infrastructure Manager の概要”, 본문 “Terraform 構成（ブループリントとも呼ばれます）” <button class="qref" data-id="644">사례 연구 Q44</button></td></tr>
    <tr><td class="strong">edge hybrid pattern / connected devices / federated learning</td><td><mark>エッジ型ハイブリッド パターン</mark> / コネクテッド デバイス / <mark>フェデレーション ラーニング</mark></td><td>문서 제목: エッジ型ハイブリッド パターン, Google Cloud のコネクテッド デバイス アーキテクチャ, クロスサイロ / クロスデバイス フェデレーション ラーニング. on-device inference의 일본어 표기는 (확인 필요) <button class="qref" data-id="647">사례 연구 Q47</button>. store-and-forward의 일본어 표기도 (확인 필요) <button class="qref" data-id="660">사례 연구 Q60</button></td></tr>
    <tr><td class="strong">event-driven architecture / API façade / idempotency</td><td><mark>イベント ドリブン アーキテクチャ（EDA）</mark> / API ファサード (확인 필요) / べき等性 / strangler 패턴 (확인 필요)</td><td>문서 제목 “Pub/Sub を使用したイベント ドリブン アーキテクチャ”. “イベント ドリブン” 띄어쓰기 주의. 문서의 단계적 이전은 “段階的な移行” <button class="qref" data-id="646">사례 연구 Q46</button> <button class="qref" data-id="651">사례 연구 Q51</button></td></tr>
    <tr><td class="strong">platform team / developer platform / paved road</td><td>デベロッパー プラットフォーム チーム / <mark>デベロッパー プラットフォーム</mark> / paved road (확인 필요)</td><td>엔터프라이즈 애플리케이션 블루프린트 문서 제목 “エンタープライズ デベロッパー プラットフォームをデプロイする” <button class="qref" data-id="659">사례 연구 Q59</button></td></tr>
    <tr><td class="strong">modular design</td><td><mark>モジュラー設計</mark></td><td>문서 제목 “モジュラー設計を推進する”(Well-Architected Framework). 공통 플랫폼 계층 + 단계적 이전 <button class="qref" data-id="654">사례 연구 Q54</button></td></tr>
    <tr><td class="strong">configuration drift / reconcile / continuous delivery</td><td><mark>構成のドリフト</mark> / (状態を)自動的に調整 / 継続的デリバリー</td><td>Config Sync 문서: 信頼できる情報源を継続的にモニタリングし…自動的に調整. Cloud Deploy = 継続的デリバリー パイプライン (<button class="qref" data-id="602">사례 연구 Q2</button>)</td></tr>
    <tr><td class="strong">Video Intelligence API / Cloud Speech-to-Text / explicit content detection</td><td>Video Intelligence API / Cloud Speech-to-Text (영어 그대로) / <mark>動画内の不適切なコンテンツを検出する</mark></td><td>문서 제목 기준. 사례의 “有害コンテンツの検出”과 짝 (<button class="qref" data-id="603">사례 연구 Q3</button>)</td></tr>
    <tr><td class="strong">Vertex Explainable AI / feature attribution / Model Monitoring / skew·drift</td><td>Vertex Explainable AI (영어 그대로) / <mark>特徴アトリビューション</mark> / <mark>モデル モニタリング</mark> / 特徴のスキューとドリフト</td><td>문서 제목: Vertex Explainable AI の概要, モデル モニタリングの概要 (<button class="qref" data-id="604">사례 연구 Q4</button>)</td></tr>
    <tr><td class="strong">model evaluation for fairness / data bias metrics / Gen AI Evaluation Service</td><td><mark>公平性に関するモデル評価</mark> / データバイアス指標·モデルバイアス指標 / Gen AI Evaluation Service</td><td>Agent Platform 문서 표기. Model Monitoring = モデル モニタリング. adaptive rubrics = <mark>適応型ルーブリック</mark>, static rubrics = 静的ルーブリック (<button class="qref" data-id="611">사례 연구 Q11</button> <button class="qref" data-id="628">사례 연구 Q28</button>)</td></tr>
    <tr><td class="strong">serverless (custom) training / fine-tuning / quota</td><td><mark>サーバーレス トレーニング</mark> / ファイン チューニング·チューニング / <mark>割り当て</mark></td><td>문서 제목: サーバーレス トレーニングの概要. quota는 “割り当て”로 씀 (<button class="qref" data-id="615">사례 연구 Q15</button>)</td></tr>
    <tr><td class="strong">image generation / image editing</td><td><mark>画像生成</mark> / <mark>画像編集</mark></td><td>Agent Platform 일본어 문서 “Gemini を使用して、テキスト プロンプトから画像を生成できます”, “Gemini では画像の編集とマルチターン編集が改善され”. Cymbal 원문 요건은 画像生成と画像補正 <button class="qref" data-id="620">사례 연구 Q20</button></td></tr>
    <tr><td class="strong">structured output / human-in-the-loop</td><td><mark>構造化出力</mark> / 人間参加型（HITL）</td><td>構造化出力는 Agent Platform 문서 메뉴 표기, response schema = <mark>レスポンス スキーマ</mark>(“モデルのレスポンスは常に定義されたスキーマに従います”) <button class="qref" data-id="630">사례 연구 Q30</button>, HITL 표기는 Cymbal 사례 원문 (“人間参加型（HITL）レビュー”) (<button class="qref" data-id="616">사례 연구 Q16</button>). 아키텍처 문서의 human-in-the-loop pattern = <mark>人間参加型パターン</mark>(본문에 ヒューマン イン ザ ループ パターン도 섞여 나옴) <button class="qref" data-id="621">사례 연구 Q21</button></td></tr>
    <tr><td class="strong">RAG Engine / Vector Search / embedding model</td><td>RAG Engine (영어 그대로) / <mark>ベクトル検索</mark> / <mark>エンベディング モデル</mark></td><td>문서 제목: Gemini Enterprise Agent Platform の RAG Engine の概要, ベクトル検索. RAG는 약어 그대로 (<button class="qref" data-id="605">사례 연구 Q5</button>)</td></tr>
    <tr><td class="strong">Autopilot mode / Standard mode</td><td>Autopilot モード / Standard モード</td><td>(<button class="qref" data-id="506">5세트 Q6</button> <button class="qref" data-id="612">사례 연구 Q12</button> <button class="qref" data-id="626">사례 연구 Q26</button>)</td></tr>
    <tr><td class="strong">sole-tenant node / sole-tenancy</td><td><mark>単一テナントノード</mark> / 単一テナンシー</td><td>(<button class="qref" data-id="513">5세트 Q13</button> <button class="qref" data-id="302">3세트 Q2</button>)</td></tr>
    <tr><td class="strong">BYOL (bring your own license) / on-demand license / premium image</td><td><mark>お客様所有ライセンスの使用</mark>(BYOL) / オンデマンド ライセンス / プレミアム イメージ</td><td>BYOL 문서 제목이 “お客様所有ライセンスの使用”. 본문은 BYOL도 그대로 씀</td></tr>
    <tr><td class="strong">privileged container</td><td>特権付きコンテナ</td><td>공식 모의고사 Q6 (<button class="qref" data-id="906">공식 모의고사 Q6</button>)</td></tr>
  </tbody></table></div>
</section>

<section>
  <h2>3. 스토리지 · 데이터</h2>
  <div class="tbl"><table><thead><tr><th>영어</th><th>일본어 시험 표기</th><th>뜻·주의</th></tr></thead><tbody>
    <tr><td class="strong">Firestore with MongoDB compatibility</td><td><mark>MongoDB 互換の Firestore</mark></td><td>일본어 문서 제목 “MongoDB 互換の Firestore のドキュメント”. 어순이 영어와 반대 <button class="qref" data-id="636">사례 연구 Q36</button></td></tr>
    <tr><td class="strong">change data capture (CDC)</td><td><mark>変更データ キャプチャ（CDC）</mark></td><td>Datastream 일본어 문서 “サーバーレスで使いやすい変更データ キャプチャ（CDC）およびレプリケーション サービス”, 백필 = バックフィル, 스트림 = ストリーム, 연결 프로필 = 接続プロファイル <button class="qref" data-id="618">사례 연구 Q18</button></td></tr>
    <tr><td class="strong">Object Lifecycle Management</td><td>オブジェクトのライフサイクル管理</td><td>(<button class="qref" data-id="505">5세트 Q5</button>)</td></tr>
    <tr><td class="strong">retention policy / Bucket Lock</td><td><mark>保持ポリシー</mark> / バケットロック</td><td>retention = <b>保持</b>. 공식 모의고사 Q13 “保持する”. 잠그기 = 保持ポリシーのロック(元に戻すことができません). 객체 단위는 オブジェクト保持ロック. 조직 정책 제약 retentionPolicySeconds = バケット保持ポリシーの期間（秒） (<button class="qref" data-id="543">5세트 Q43</button>)</td></tr>
    <tr><td class="strong">Object Retention Lock</td><td>オブジェクト保持ロック</td><td></td></tr>
    <tr><td class="strong">Object Versioning / noncurrent version</td><td>オブジェクトのバージョニング / <mark>非現行バージョン</mark></td><td></td></tr>
    <tr><td class="strong">soft delete</td><td><mark>削除（復元可能）</mark></td><td>영어와 전혀 다른 모양</td></tr>
    <tr><td class="strong">storage class</td><td>ストレージ クラス</td><td>Standard / Nearline / Coldline / Archive, Autoclass는 영어 그대로 (문서 제목도 “Autoclass”) (<button class="qref" data-id="606">사례 연구 Q6</button>)</td></tr>
    <tr><td class="strong">dual-region / multi-region</td><td>デュアルリージョン / マルチリージョン</td><td>(<button class="qref" data-id="539">5세트 Q39</button>)</td></tr>
    <tr><td class="strong">regional Persistent Disk / force-attach</td><td><mark>リージョン ディスク</mark>(リージョン Persistent Disk, リージョン永続ディスク 표기도 있음) / <mark>強制的にアタッチ</mark></td><td>문서 제목: リージョン ディスクの障害を管理する. Cloud Storage FUSE는 영어 그대로 (<button class="qref" data-id="547">5세트 Q47</button>)</td></tr>
    <tr><td class="strong">signed URL</td><td>署名付き URL</td><td></td></tr>
    <tr><td class="strong">Firestore in Datastore mode / composite index</td><td>Firestore in Datastore mode(<mark>Datastore モード</mark>) / <mark>複合インデックス</mark></td><td>문서 제목: インデックス | Firestore in Datastore mode (<button class="qref" data-id="550">5세트 Q50</button>)</td></tr>
    <tr><td class="strong">checksum / data validation</td><td>チェックサム / データの検証</td><td>CRC32C·MD5는 영어 그대로 (<button class="qref" data-id="535">5세트 Q35</button>)</td></tr>
    <tr><td class="strong">retry strategy / truncated exponential backoff / jitter / idempotency / request preconditions</td><td>再試行の方法 / <mark>切り捨てバイナリ指数バックオフ</mark>·ジッターを伴う指数バックオフ / ジッター / <mark>べき等性</mark> / リクエストの前提条件(HTTP 前提条件)</td><td>“べき等”은 멱등. Service Health는 문서에서 Personalized Service Health(영어 그대로) (<button class="qref" data-id="542">5세트 Q42</button>)</td></tr>
    <tr><td class="strong">uniform bucket-level access</td><td>均一なバケットレベルのアクセス</td><td></td></tr>
    <tr><td class="strong">partitioned table / expiration / clustering</td><td>パーティション分割テーブル / 有効期限 / クラスタ化</td><td>BigQuery</td></tr>
    <tr><td class="strong">high availability / read replica / failover</td><td>高可用性 / リードレプリカ / フェイルオーバー</td><td>Cloud SQL</td></tr>
    <tr><td class="strong">point-in-time recovery (PITR)</td><td>ポイントインタイム リカバリ</td><td></td></tr>
    <tr><td class="strong">Application Integration / Integration Connectors</td><td>영어 그대로 / データ マッピング タスク</td><td>(<button class="qref" data-id="510">5세트 Q10</button>)</td></tr>
    <tr><td class="strong">data transfer options / transfer agent / network bandwidth</td><td>データ転送オプション / 転送エージェント / ネットワーク帯域幅</td><td>Transfer Appliance·Storage Transfer Service는 영어 그대로 (<button class="qref" data-id="514">5세트 Q14</button>)</td></tr>
    <tr><td class="strong">App Engine Cron Service / cron job</td><td>App Engine Cron サービス / cron ジョブ</td><td>(<button class="qref" data-id="533">5세트 Q33</button>)</td></tr>
    <tr><td class="strong">subscription / subscriber / acknowledgment deadline</td><td>サブスクリプション / サブスクライバー / 確認応答期限</td><td>Pub/Sub. ack = 確認応答 (<button class="qref" data-id="533">5세트 Q33</button>)</td></tr>
    <tr><td class="strong">message ordering / ordering key</td><td><mark>メッセージの順序指定</mark> / 順序指定キー</td><td>Pub/Sub (<button class="qref" data-id="511">5세트 Q11</button>)</td></tr>
    <tr><td class="strong">dead-letter topic / at-least-once</td><td><mark>デッドレター トピック</mark> / at-least-once</td><td>Pub/Sub 일본어 문서 “デッドレター”, Dataflow 일본어 문서 “Pub/Sub は at-least-once メッセージ配信を実行します”(영어 그대로) <button class="qref" data-id="623">사례 연구 Q23</button></td></tr>
    <tr><td class="strong">BigQuery Storage Write API / streaming ingestion</td><td>BigQuery Storage Write API / <mark>ストリーミング取り込み</mark></td><td>일본어 문서 “BigQuery のための統一されたデータの取り込み API です。ストリーミング取り込みとバッチ読み込みの機能を 1 つの高性能 API にまとめたもの”. exactly-once = 正確に 1 回 <button class="qref" data-id="624">사례 연구 Q24</button></td></tr>
    <tr><td class="strong">BigQuery subscription (Pub/Sub)</td><td>BigQuery サブスクリプション</td><td>문서 제목 기준. Dataflow 없이 Pub/Sub → BigQuery 직접 (<button class="qref" data-id="610">사례 연구 Q10</button>)</td></tr>
    <tr><td class="strong">exactly-once delivery (Pub/Sub) / exactly-once processing (Dataflow)</td><td><mark>1 回限りの配信</mark> / exactly-once 処理</td><td>Pub/Sub은 일본어, Dataflow 문서는 영어 그대로 씀</td></tr>
    <tr><td class="strong">deduplication / watermark / event time</td><td>重複除去·重複排除 / ウォーターマーク / イベント時間</td><td>Dataflow 문서에 두 표기가 섞여 있음</td></tr>
  </tbody></table></div>
</section>

<section>
  <h2>4. 네트워크</h2>
  <div class="tbl"><table><thead><tr><th>영어</th><th>일본어 시험 표기</th><th>뜻·주의</th></tr></thead><tbody>
    <tr><td class="strong">Private Google Access</td><td><mark>限定公開の Google アクセス</mark></td><td>가장 큰 함정. “Private”가 限定公開(제한 공개)로 바뀜 (<button class="qref" data-id="301">3세트 Q1</button>)</td></tr>
    <tr><td class="strong">Private Google Access for on-premises hosts</td><td><mark>オンプレミス ホスト用の限定公開の Google アクセス</mark></td><td>VPN·Interconnect 너머 온프레미스에서 Google API로 가는 길. VPC SC와 함께면 restricted.googleapis.com (<button class="qref" data-id="509">5세트 Q9</button> <button class="qref" data-id="529">5세트 Q29</button>)</td></tr>
    <tr><td class="strong">private services access</td><td>プライベート サービス アクセス</td><td>限定公開の Google アクセス와 <b>다른 기능</b>. 일본어에선 이름이 오히려 덜 헷갈림</td></tr>
    <tr><td class="strong">Private Service Connect</td><td>Private Service Connect</td><td>영어 그대로</td></tr>
    <tr><td class="strong">Serverless VPC Access connector</td><td>サーバーレス VPC アクセス コネクタ</td><td>(<button class="qref" data-id="509">5세트 Q9</button>)</td></tr>
    <tr><td class="strong">Direct VPC egress</td><td><mark>ダイレクト VPC 下り（外向き）</mark></td><td>egress = 下り（外向き）, ingress = 上り（内向き）</td></tr>
    <tr><td class="strong">egress / ingress</td><td><mark>下り（外向き）</mark> / <mark>上り（内向き）</mark></td><td>방화벽 규칙 방향에도 같은 표기</td></tr>
    <tr><td class="strong">Shared VPC / host project / service project</td><td>共有 VPC / ホスト プロジェクト / サービス プロジェクト</td><td>(<button class="qref" data-id="443">4세트 Q43</button>)</td></tr>
    <tr><td class="strong">VPC Network Peering</td><td>VPC ネットワーク ピアリング</td><td>Carrier Peering = キャリア ピアリング, <mark>Direct Peering = ダイレクト ピアリング</mark> (<button class="qref" data-id="518">5세트 Q18</button>)</td></tr>
    <tr><td class="strong">external / internal IP address, subnet</td><td>外部 IP アドレス / 内部 IP アドレス, サブネット</td><td></td></tr>
    <tr><td class="strong">primary / secondary IPv4 range, alias IP range, subnet route</td><td>プライマリ IPv4 アドレス範囲 / セカンダリ IPv4 範囲, エイリアス IP 範囲, サブネット ルート</td><td>secondary = GKE Pod·Service, alias IP용 (<button class="qref" data-id="527">5세트 Q27</button>)</td></tr>
    <tr><td class="strong">Hybrid Subnets</td><td>ハイブリッド サブネット</td><td>온프레미스와 같은 CIDR을 공유하며 VM을 하나씩 이전하는 특수 기능 (<button class="qref" data-id="527">5세트 Q27</button>)</td></tr>
    <tr><td class="strong">firewall rule / network tag</td><td>ファイアウォール ルール / ネットワーク タグ</td><td></td></tr>
    <tr><td class="strong">Cloud NAT / Cloud Router</td><td>영어 그대로</td><td>Public NAT도 영어 그대로, NAT gateway = NAT ゲートウェイ (<button class="qref" data-id="504">5세트 Q4</button> <button class="qref" data-id="537">5세트 Q37</button>)</td></tr>
    <tr><td class="strong">private nodes / private cluster</td><td><mark>限定公開ノード</mark> / 限定公開クラスタ</td><td>Private Google Access와 같은 “限定公開”. 설정 화면은 “プライベート ノードを有効にする”도 보임 (<button class="qref" data-id="537">5세트 Q37</button>)</td></tr>
    <tr><td class="strong">VPC-native cluster / route-based cluster</td><td>VPC ネイティブ クラスタ / ルートベース クラスタ</td><td>(<button class="qref" data-id="537">5세트 Q37</button>)</td></tr>
    <tr><td class="strong">(global) external Application Load Balancer</td><td>グローバル外部アプリケーション ロードバランサ</td><td>internal = 内部ロードバランサ. 일본어 문서: Google Front End（GFE）に実装されるグローバル ロードバランサ. regional Network LB = <mark>外部パススルー ネットワーク ロードバランサ</mark>(문서 제목 “バックエンド サービスベースの外部パススルー ネットワーク ロードバランサの概要”) (<button class="qref" data-id="901">공식 모의고사 Q1</button> <button class="qref" data-id="629">사례 연구 Q29</button> <button class="qref" data-id="638">사례 연구 Q38</button>)</td></tr>
    <tr><td class="strong">external proxy Network Load Balancer (SSL proxy) / encryption to the backends</td><td>外部プロキシ ネットワーク ロードバランサ(SSL プロキシ) / <mark>ロードバランサからバックエンドへの暗号化</mark></td><td>(<button class="qref" data-id="544">5세트 Q44</button>)</td></tr>
    <tr><td class="strong">URL map / backend service / backend bucket</td><td>URL マップ / バックエンド サービス / バックエンド バケット</td><td>(<button class="qref" data-id="501">5세트 Q1</button>)</td></tr>
    <tr><td class="strong">health check / serverless NEG</td><td>ヘルスチェック / サーバーレス NEG</td><td></td></tr>
    <tr><td class="strong">regional MIG / unmanaged instance group / network endpoint group (NEG)</td><td>リージョン マネージド インスタンス グループ / 非マネージド インスタンス グループ / ネットワーク エンドポイント グループ</td><td>(<button class="qref" data-id="532">5세트 Q32</button>)</td></tr>
    <tr><td class="strong">cross-project service referencing / anycast IP</td><td>プロジェクト間のサービス参照 / エニーキャスト IP アドレス</td><td>“プレミアム ティア上のグローバル エニーキャスト外部 IP アドレス” (<button class="qref" data-id="532">5세트 Q32</button>)</td></tr>
    <tr><td class="strong">HA VPN / tunnel</td><td>HA VPN / トンネル</td><td>Dedicated·Partner Interconnect도 영어 그대로</td></tr>
    <tr><td class="strong">VLAN attachment / edge availability domain / colocation facility</td><td>VLAN アタッチメント / エッジ アベイラビリティ ドメイン / コロケーション施設</td><td>Interconnect 이중화는 서로 다른 エッジ アベイラビリティ ドメイン에. 문서 표기: 大都市圏（メトロ）, クリティカルな本番環境 = 99.99% (<button class="qref" data-id="528">5세트 Q28</button> <button class="qref" data-id="632">사례 연구 Q32</button>)</td></tr>
    <tr><td class="strong">IAP TCP forwarding</td><td><mark>IAP の TCP 転送</mark></td><td>forwarding = 転送. 문서 제목은 “TCP 転送に IAP を使用する”</td></tr>
    <tr><td class="strong">network policy (GKE)</td><td>ネットワーク ポリシー</td><td>공식 모의고사 Q1</td></tr>
  </tbody></table></div>
</section>

<section>
  <h2>5. 보안 · IAM <button class="qref" data-id="903">공식 모의고사 Q3</button> <button class="qref" data-id="907">공식 모의고사 Q7</button></h2>
  <div class="tbl"><table><thead><tr><th>영어</th><th>일본어 시험 표기</th><th>뜻·주의</th></tr></thead><tbody>
    <tr><td class="strong">Organization Policy / constraint / inheritance</td><td>組織のポリシー / <mark>制約</mark> / 継承</td><td></td></tr>
    <tr><td class="strong">Restrict service usage (<code>gcp.restrictServiceUsage</code>)</td><td>リソース使用量の制限</td><td>일본어 문서 제목 기준(영어 제목은 “Restrict service usage”) (<button class="qref" data-id="613">사례 연구 Q13</button>)</td></tr>
    <tr><td class="strong">resource location restriction (gcp.resourceLocations) / folder</td><td>リソース ロケーションの制約(制限) / フォルダ</td><td>(<button class="qref" data-id="540">5세트 Q40</button>)</td></tr>
    <tr><td class="strong">data governance / data residency</td><td>データ ガバナンス / <mark>データ所在地</mark></td><td>문서 제목 “BigQuery のデータ ガバナンスの概要”, Assured Workloads 문서 “データ所在地” <button class="qref" data-id="648">사례 연구 Q48</button></td></tr>
    <tr><td class="strong">Google Groups / IAM inheritance</td><td><mark>Google グループ</mark> / 継承(フォルダレベルで付与したロールは継承されます)</td><td>(<button class="qref" data-id="546">5세트 Q46</button>)</td></tr>
    <tr><td class="strong">least privilege</td><td>最小権限</td><td>“最小権限の原則”</td></tr>
    <tr><td class="strong">blast radius / incident response / runbook·playbook</td><td><mark>影響範囲</mark> / インシデント対応 / ランブック・プレイブック</td><td>blast radius를 “影響範囲”로 씀(“潜在的な影響の範囲（つまり、影響範囲）”). 문서 제목 “インシデントと問題を管理する” <button class="qref" data-id="652">사례 연구 Q52</button></td></tr>
    <tr><td class="strong">predefined / basic / custom role</td><td>事前定義ロール / 基本ロール / カスタムロール</td><td>basic role = 옛 primitive role</td></tr>
    <tr><td class="strong">service account / key / impersonation</td><td>サービス アカウント / サービス アカウント キー / <mark>権限借用</mark></td><td>impersonation이 権限借用(권한 빌려 쓰기)</td></tr>
    <tr><td class="strong">Workload Identity Federation</td><td>Workload Identity 連携</td><td>federation = 連携</td></tr>
    <tr><td class="strong">VPC Service Controls / service perimeter</td><td>VPC Service Controls / <mark>サービス境界</mark></td><td>access level = アクセスレベル, perimeter bridge = ブリッジ, dry run = <mark>ドライラン</mark> (<button class="qref" data-id="614">사례 연구 Q14</button> <button class="qref" data-id="625">사례 연구 Q25</button>)</td></tr>
    <tr><td class="strong">allow policy / deny policy / inheritance / effective policy</td><td><mark>許可ポリシー</mark> / <mark>拒否ポリシー</mark> / 継承 / 有効なポリシー</td><td>resource hierarchy = リソース階層, principal access boundary = プリンシパル アクセス境界 (<button class="qref" data-id="523">5세트 Q23</button>)</td></tr>
    <tr><td class="strong">customer-managed encryption key (CMEK)</td><td>顧客管理の暗号鍵（CMEK）</td><td>(<button class="qref" data-id="516">5세트 Q16</button>)</td></tr>
    <tr><td class="strong">key rotation / default key / CSEK</td><td><mark>鍵のローテーション</mark> / デフォルトの鍵 / <mark>顧客指定の暗号鍵</mark>（CSEK）</td><td>CMEK = 顧客<b>管理</b>, CSEK = 顧客<b>指定</b>. 한 글자 차이 주의 (<button class="qref" data-id="519">5세트 Q19</button> <button class="qref" data-id="241">2세트 Q41</button>)</td></tr>
    <tr><td class="strong">key import / key material / wrap</td><td><mark>鍵のインポート</mark> / 鍵マテリアル / ラップ</td><td>key = <b>鍵</b>(かぎ). “키 자료” = 鍵マテリアル</td></tr>
    <tr><td class="strong">shared responsibility model / Compliance Reports Manager</td><td>責任共有モデル / Compliance Reports Manager(영어 그대로)</td><td>ISO/IEC 27001·SOC 보고서도 영어 그대로 (<button class="qref" data-id="530">5세트 Q30</button>)</td></tr>
    <tr><td class="strong">PCI DSS / cardholder data environment (CDE) / QSA / segmentation</td><td>PCI DSS(영어 그대로) / <mark>カード会員データ環境</mark>(CDE) / <mark>認定セキュリティ評価機関</mark>(QSA) / セグメンテーション·セグメント化</td><td>GKE 문서에서는 shared responsibility를 <b>共有責任モデル</b>로 씀(責任共有モデル과 둘 다 나옴). 가이드 제목: GKE における PCI DSS コンプライアンス (<button class="qref" data-id="541">5세트 Q41</button>)</td></tr>
    <tr><td class="strong">Admin Activity / Data Access audit logs</td><td>管理アクティビティ監査ログ / データアクセス監査ログ</td><td>공식 모의고사 Q5 “監査ログ”</td></tr>
    <tr><td class="strong">Binary Authorization attestation / attestor</td><td>Binary Authorization <mark>証明書</mark> / 認証者</td><td>attestation이 証明書(“인증서”처럼 보임). SSL 인증서(SSL 証明書)와 헷갈리지 말 것 (<button class="qref" data-id="502">5세트 Q2</button>)</td></tr>
    <tr><td class="strong">Sensitive Data Protection, de-identification</td><td>機密データの保護, <mark>匿名化</mark></td><td>1장 참고</td></tr>
    <tr><td class="strong">pseudonymization / re-identification / tokenization</td><td><mark>仮名化</mark> / 再識別 / トークン化</td><td>문서 “仮名化”: 仮名化는 トークン化·サロゲート置換이라고도 부름. 동의(consent)의 문서 표기는 (확인 필요) <button class="qref" data-id="656">사례 연구 Q56</button></td></tr>
  </tbody></table></div>
</section>

<section>
  <h2>6. 운영 · CI/CD · 비용</h2>
  <div class="tbl"><table><thead><tr><th>영어</th><th>일본어 시험 표기</th><th>뜻·주의</th></tr></thead><tbody>
    <tr><td class="strong">RTO / RPO / cold · warm · hot (DR patterns)</td><td><mark>復旧時間目標（RTO）</mark> / <mark>復旧時点目標（RPO）</mark> / コールド · ウォーム · ホット</td><td>DR 계획 가이드 일본어판 표기. 콜드 = 예비 타이어 없음(멈춤), 웜 = 예비 타이어로 교체(잠시 멈춤), 핫 = 런플랫 타이어(계속 달림). 워크로드별로 등급을 나누면 계층형 DR <button class="qref" data-id="645">사례 연구 Q45</button> <button class="qref" data-id="631">사례 연구 Q31</button></td></tr>
    <tr><td class="strong">sink / aggregated sink / Log Router</td><td>シンク / 集約シンク / ログルーター</td><td></td></tr>
    <tr><td class="strong">log bucket / exclusion / inclusion filter</td><td>ログバケット / 除外フィルタ / 包含フィルタ</td><td></td></tr>
    <tr><td class="strong">metrics / log-based metrics</td><td><mark>指標</mark> / ログベースの指標</td><td>metric = 指標(“지표”). KPI 뜻이 아님</td></tr>
    <tr><td class="strong">alerting policy / uptime check / notification channel</td><td>アラート ポリシー / 稼働時間チェック / 通知チャネル</td><td>uptime = 稼働時間. 문서 제목은 “通知チャンネル”, 본문은 “通知チャネル”로 둘 다 쓰임 <button class="qref" data-id="634">사례 연구 Q34</button></td></tr>
    <tr><td class="strong">notification channel</td><td><mark>通知チャンネル</mark></td><td>문서 제목: 通知チャンネルを作成して管理する. “チャネル”가 아니라 “チャンネル” (<button class="qref" data-id="609">사례 연구 Q9</button> <button class="qref" data-id="627">사례 연구 Q27</button>)</td></tr>
    <tr><td class="strong">metrics scope / predefined (Google Cloud) dashboards / custom dashboard</td><td><mark>指標スコープ</mark> / Google Cloud ダッシュボード(Google Cloud サービスのダッシュボード) / カスタム ダッシュボード</td><td>“사전 정의 대시보드”는 문서상 Google Cloud ダッシュボード로 부름 (<button class="qref" data-id="549">5세트 Q49</button>)</td></tr>
    <tr><td class="strong">SLO / error budget</td><td>サービスレベル目標（SLO） / エラー バジェット</td><td>공식 모의고사 Q8 “可用性を 99.9% とする SLO”</td></tr>
    <tr><td class="strong">burn rate / fast burn · slow burn alert</td><td>バーンレート / fast burn = (확인 필요) · slow burn = 低速バーン アラート</td><td>문서 표기 “エラー バジェットのバーンレート” (<button class="qref" data-id="531">5세트 Q31</button>)</td></tr>
    <tr><td class="strong">committed use discounts (CUD)</td><td><mark>確約利用割引</mark></td><td>spend-based / resource-based = 費用ベース / リソースベースのコミットメント. 수요 불확실이면 X (<button class="qref" data-id="524">5세트 Q24</button>)</td></tr>
    <tr><td class="strong">sustained use discounts (SUD)</td><td><mark>継続利用割引</mark></td><td>약정 없이 자동 적용 (<button class="qref" data-id="524">5세트 Q24</button>)</td></tr>
    <tr><td class="strong">budget alert / threshold</td><td>予算アラート / しきい値</td><td></td></tr>
    <tr><td class="strong">billing export to BigQuery</td><td>Cloud Billing データを BigQuery にエクスポート</td><td>labels = ラベル, tags = タグ (<button class="qref" data-id="918">공식 모의고사 Q18</button>)</td></tr>
    <tr><td class="strong">canary deployment</td><td>カナリア デプロイ</td><td>blue/green·staging의 일본어 문서 표기는 확인 필요 (ブルーグリーン デプロイ, ステージング環境으로 나올 가능성이 큼)</td></tr>
  </tbody></table></div>
</section>

<section>
  <h2>7. 문제 문장에 자주 나오는 일본어</h2>
  <p>서비스 이름이 아니라 <b>요건</b>을 나타내는 표현입니다. 이 단어가 정답을 고르는 열쇠인 경우가 많습니다. 공식 모의고사 원문에서 확인한 표현 위주입니다.</p>
  <div class="tbl"><table><thead><tr><th>일본어</th><th>뜻</th><th>영어 문제의 대응 표현</th></tr></thead><tbody>
    <tr><td class="strong">費用を最小限に抑える / コスト削減</td><td>비용 최소화 / 비용 절감</td><td>minimize cost, reduce cost (<button class="qref" data-id="905">공식 모의고사 Q5</button>)</td></tr>
    <tr><td class="strong">運用オーバーヘッドを最小限に</td><td>운영 부담 최소</td><td>minimize operational overhead</td></tr>
    <tr><td class="strong">可用性 / レイテンシ / スループット</td><td>가용성 / 지연 시간 / 처리량</td><td>availability / latency / throughput</td></tr>
    <tr><td class="strong">移行</td><td>이전(마이그레이션)</td><td>migrate, migration</td></tr>
    <tr><td class="strong">ベスト プラクティス / 推奨</td><td>모범 사례 / 권장</td><td>best practice / recommended</td></tr>
    <tr><td class="strong">どうすればよいですか</td><td>어떻게 해야 합니까 (문제 끝)</td><td>What should you do?</td></tr>
    <tr><td class="strong">2 つ選択してください</td><td>두 개 고르기</td><td>Choose two. (<button class="qref" data-id="906">공식 모의고사 Q6</button>)</td></tr>
    <tr><td class="strong">永続的 / 一時的</td><td>영구적(durable) / 일시적(ephemeral)</td><td>(<button class="qref" data-id="503">5세트 Q3</button>)</td></tr>
    <tr><td class="strong">保持する</td><td>보존하다(retain)</td><td>retain, preserve</td></tr>
    <tr><td class="strong">サービス拒否（DoS）/ 分散型サービス拒否攻撃（DDoS）</td><td>서비스 거부 / 분산 서비스 거부 공격</td><td>DoS / DDoS</td></tr>
  </tbody></table></div>
</section>
<section>
  <h2>8. 시험 가이드(일본어판)에 나오는 표현</h2>
  <p>“시험 가이드 · 출제 범위” 탭의 원문 표기입니다. 시험 문제도 이 어휘를 쓸 가능성이 높습니다.</p>
  <div class="tbl"><table><thead><tr><th>일본어</th><th>뜻</th><th>영어</th></tr></thead><tbody>
    <tr><td class="strong">事例紹介 / ケーススタディ</td><td>사례 연구</td><td>case study</td></tr>
    <tr><td class="strong">機能要件 / 非機能要件</td><td>기능 요건 / 비기능 요건</td><td>functional / non-functional requirements</td></tr>
    <tr><td class="strong">事業継続計画 / ビジネスの継続性</td><td>사업 연속성 계획 / 사업 연속성</td><td>business continuity planning (BCP)</td></tr>
    <tr><td class="strong"><mark>障害復旧</mark></td><td>재해 복구</td><td>disaster recovery (DR). “災害復旧”가 아님</td></tr>
    <tr><td class="strong"><mark>職掌分散</mark></td><td>직무 분리</td><td>separation of duties</td></tr>
    <tr><td class="strong">オブザーバビリティ</td><td>관측 가능성</td><td>observability</td></tr>
    <tr><td class="strong">高可用性とフェイルオーバー</td><td>고가용성과 장애 조치</td><td>high availability and failover</td></tr>
    <tr><td class="strong">ワークロード配置戦略</td><td>워크로드 배치 전략</td><td>workload placement strategy (build, buy, modify, deprecate)</td></tr>
    <tr><td class="strong">重要業績評価指標（KPI） / 投資収益率（ROI）</td><td>핵심 성과 지표 / 투자 수익률</td><td>KPI / ROI</td></tr>
    <tr><td class="strong">依存関係計画</td><td>의존성 계획</td><td>dependency planning</td></tr>
    <tr><td class="strong">コンテキストアウェア アクセス</td><td>컨텍스트 인식 액세스</td><td>context-aware access</td></tr>
    <tr><td class="strong">階層型ファイアウォール ポリシー</td><td>계층형 방화벽 정책</td><td>hierarchical firewall policies</td></tr>
    <tr><td class="strong">リソース階層（組織、フォルダ、プロジェクト）</td><td>리소스 계층</td><td>resource hierarchy</td></tr>
    <tr><td class="strong">データ主権</td><td>데이터 주권</td><td>data sovereignty</td></tr>
    <tr><td class="strong">個人を特定できる情報（PII）</td><td>개인 식별 정보</td><td>PII</td></tr>
    <tr><td class="strong">ソフトウェア サプライ チェーンの保護</td><td>소프트웨어 공급망 보호</td><td>software supply chain security</td></tr>
    <tr><td class="strong">根本原因の分析</td><td>근본 원인 분석</td><td>root cause analysis</td></tr>
    <tr><td class="strong">ステークホルダー管理 / チェンジ マネジメント</td><td>이해관계자 관리 / 변화 관리</td><td>stakeholder / change management</td></tr>
    <tr><td class="strong">コンピューティングの変動性（スポットと標準の比較）</td><td>컴퓨팅 가변성 (Spot vs 표준)</td><td>compute volatility (Spot vs standard)</td></tr>
    <tr><td class="strong">クラウド エミュレータ</td><td>클라우드 에뮬레이터</td><td>emulators</td></tr>
    <tr><td class="strong">カオス エンジニアリング / ペネトレーション テスト / 負荷テスト</td><td>카오스 엔지니어링 / 침투 테스트 / 부하 테스트</td><td>chaos engineering / penetration testing / load testing</td></tr>
    <tr><td class="strong">本番環境</td><td>운영(프로덕션) 환경</td><td>production</td></tr>
  </tbody></table></div>
</section>
`
}
];
