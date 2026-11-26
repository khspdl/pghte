/* PAA 기초 정리 데이터: 주제별 개념 정리. related는 관련 문제 id.
   html 안에서 <button class="qref" data-id="N">QN</button>을 쓰면 해당 문제로 이동 */
var GUIDES = [
{
  id: "exam",
  title: "시험 가이드 · 출제 범위",
  updated: "2026-11-26",
  related: [],
  html: `
<section>
  <h2>0. 이 가이드를 쓰는 법</h2>
  <p>Google이 공개한 <b>Professional Agentic Architect 認定試験ガイド</b>(일본어판, 4쪽)를 바탕으로 정리했습니다. 영어판과 대조해 다른 곳은 따로 밝혔습니다. 원문: <code>services.google.com/fh/files/misc/professional_agentic_architect_exam_guide_japanese.pdf</code></p>
  <ul>
    <li><b>시험 형식</b>(공식 자격증 페이지): 2시간, 50~60문항 객관식, 영어·일본어. <mark>하이브리드 자격증</mark>으로, 감독관이 있는 객관식 시험과 <b>Google Skills 실습(ラボ) 평가</b>를 함께 봅니다.</li>
    <li><b>권장 경험</b>: 클라우드 솔루션 구축·운영 3년 이상, 그중 Google Cloud에서 에이전트 솔루션 구축 1년 이상.</li>
    <li>가이드 머리말의 인물상: LLM 활용, <b>エージェント設計パターン</b>(에이전트 설계 패턴) 적용, <mark>コードの記述</mark>(코드 작성), 데이터 소스 통합 경험. PMLE 가이드와 달리 <b>코드를 쓰는 능력</b>이 전제입니다(ADK, Agents CLI, Antigravity).</li>
    <li>사례 연구(事例紹介)는 가이드에 없습니다.</li>
    <li>문제마다 소절 번호(예: 3.2)를 달면 “통계” 탭에서 <mark>섹션별 정답률</mark>을 볼 수 있습니다. 시험 가이드에 <b>이름이 직접 나온 도구</b>(4장 목록)는 출제 범위 안이라는 뜻입니다.</li>
    <li>모의고사가 나오기 전에는 Google Skills 학습 내용을 섹션별 정리(“핵심 개념·판단 기준” 열)에 요약해 채웁니다.</li>
  </ul>
</section>

<section>
  <h2>1. 출제 비중</h2>
  <p>비중은 “<b>試験内容の約 〜%</b>(약)”입니다. 합계 100%.</p>
  <div class="tbl"><table><thead><tr><th>섹션</th><th>일본어 이름</th><th>비중</th></tr></thead><tbody>
    <tr><td class="strong">1. 로우코드 도구로 에이전트 구축</td><td>ローコード ツールを使用したエージェントの構築</td><td>약 13%</td></tr>
    <tr><td class="strong">2. 앱 개발에 코딩 에이전트 활용</td><td>アプリケーション開発におけるコーディング エージェントの使用</td><td>약 17%</td></tr>
    <tr><td class="strong">3. 커스텀 에이전트 개발</td><td>カスタム エージェントの開発</td><td>약 33%</td></tr>
    <tr><td class="strong">4. 에이전트 워크플로 평가·배포</td><td>エージェント ワークフローの評価とデプロイ</td><td>약 22%</td></tr>
    <tr><td class="strong">5. 에이전트 워크플로 보안·거버넌스</td><td>エージェント ワークフローのセキュリティとガバナンス</td><td>약 15%</td></tr>
  </tbody></table></div>
  <p><b>특징</b>: 섹션 3(커스텀 에이전트 개발, 약 33%)이 3분의 1이고, 섹션 4(평가·배포, 약 22%)를 더하면 55%입니다. <mark>ADK로 만들고 → 평가하고 → Agent Runtime·Cloud Run·GKE에 배포</mark>하는 흐름이 중심입니다. 섹션 2(코딩 에이전트)는 Antigravity·Claude Code·MCP 같은 <b>개발 도구로서의 에이전트</b>를 다루는 이 시험만의 범위입니다.</p>
</section>

<section>
  <h2>2. 섹션별 출제 항목 (원문 표기)</h2>
  <h3>섹션 1: ローコード ツールを使用したエージェントの構築 (약 13%)</h3>
  <div class="tbl"><table><thead><tr><th>소절</th><th>원문</th><th>고려 사항</th></tr></thead><tbody>
    <tr><td class="strong">1.1</td><td>ローコード ツールを使用してエージェント ワークフローとエージェントの動作を構成する<br><small>로우코드 도구로 에이전트 워크플로·동작 구성</small></td><td>Gemini Enterprise ツールを使用して、状態ベースのワークフロー（ページ、遷移ルート、イベント ハンドラ）を構成する（例: Gemini Enterprise Workflow Builder、Customer Experience Agent Studio [CX Agent Studio]） / エージェントの動作をガイドするシステム指示とコンソール内プロンプト テンプレート（例: 少数ショット、Chain-of-Thought）を作成する（例: Workflow Builder、CX Agent Studio）</td></tr>
    <tr><td class="strong">1.2</td><td>エンタープライズ データを Gemini Enterprise に接続する<br><small>기업 데이터를 Gemini Enterprise에 연결</small></td><td>企業独自のデータソースに安全に接続してクエリを実行できるようにエージェントを構成する（例: Gemini Enterprise、エージェント検索） / 非構造化マルチモーダル データ（例: 動画、音声、画像）をエージェント ワークフローに取り込んで処理する</td></tr>
  </tbody></table></div>
  <h3>섹션 2: アプリケーション開発におけるコーディング エージェントの使用 (약 17%)</h3>
  <div class="tbl"><table><thead><tr><th>소절</th><th>원문</th><th>고려 사항</th></tr></thead><tbody>
    <tr><td class="strong">2.1</td><td>コーディング エージェントを効果的に使用する<br><small>코딩 에이전트를 효과적으로 사용</small></td><td>Model Context Protocol（MCP）サーバー、カスタムスキル、ツールへのアクセスを使用してコーディング エージェントを構成する（例: Antigravity、Google Cloud 上の Claude Code） / 安全なサンドボックスでコーディング エージェントを使用する（例: Google Kubernetes Engine [GKE]、Cloud Workstations、Antigravity） / コーディング エージェントを使用して、ソースコードのリファクタリング、実行ランタイムの最適化、アプリケーション レイヤの脆弱性に対するパッチ適用を行う</td></tr>
    <tr><td class="strong">2.2</td><td>エンタープライズ ワークフロー向けにコーディング エージェントをカスタマイズする<br><small>기업 워크플로에 맞게 코딩 에이전트 커스터마이즈</small></td><td>Antigravity を使用してスキル、プラグイン、拡張機能フック、ルール、サブエージェントを作成する / Agents CLI で Antigravity を強化し、エージェントの構築と、デプロイされたエージェントのスケーリング、管理、最適化を行う</td></tr>
  </tbody></table></div>
  <h3>섹션 3: カスタム エージェントの開発 (약 33%)</h3>
  <div class="tbl"><table><thead><tr><th>소절</th><th>원문</th><th>고려 사항</th></tr></thead><tbody>
    <tr><td class="strong">3.1</td><td>コードでエージェント ワークフローを設計、構築する<br><small>코드로 에이전트 워크플로 설계·구축</small></td><td>費用、セキュリティ、エージェント アーキテクチャを考慮して、適切な言語モデル（例: 大規模言語モデル [LLM] か小規模言語モデル [SLM] か、セルフホスト型か Software as a Service [SaaS] か、オープンソース ソフトウェア [OSS] か商用 LLM か）を選択、構成する / オープンソース ライブラリを使用してカスタム エージェントを構築する（例: Agent Development Kit [ADK]） / セッションとメモリを構成する（例: Agent Platform メモリバンク、マネージド セッション） / Agents CLI を使用してスキルを構成する（例: プラグイン、エージェント モードか人間モードか）</td></tr>
    <tr><td class="strong">3.2</td><td>企業の専門分野に関する知識を統合する<br><small>기업 도메인 지식 통합</small></td><td>ベクトル データベースなどの適切なサービスを使用して、検索拡張生成（RAG）パイプラインとベクトル取得システム（例: エンベディング モデル、類似性のスコアリング、再ランキング）を設計、構成、管理する（例: Vector Search、Agent Retrieval） / エージェントの権限を構成する（例: Agent Identity） / Google Cloud ツール（例: Agent Registry、Google Cloud MCP サーバー）を使用して、事前構築済みの機能とカスタム機能を構成する（例: マネージド データベース、API インテグレーション、およびエージェントをサードパーティの SaaS ツールやリモート サーバーに接続する MCP サーバー向けのカスタム インテグレーション レイヤ）</td></tr>
    <tr><td class="strong">3.3</td><td>エージェント ワークフローのオーケストレーションと調整を行う<br><small>에이전트 워크플로 오케스트레이션·조정</small></td><td>エージェント プロトコル（例: MCP、Agent2Agent [A2A]）を使用して、エージェントのオーケストレーションを行う / Google Cloud ツールを使用して、マルチエージェントのハンドオフとワークフロー（例: 並列エージェント、シーケンシャル エージェント、グラフ ワークフロー）を選択、調整する（例: Agent Identity、Agent Registry、Agent Runtime、エージェント ポリシー）</td></tr>
  </tbody></table></div>
  <h3>섹션 4: エージェント ワークフローの評価とデプロイ (약 22%)</h3>
  <div class="tbl"><table><thead><tr><th>소절</th><th>원문</th><th>고려 사항</th></tr></thead><tbody>
    <tr><td class="strong">4.1</td><td>開発環境と本番環境でエージェントを評価する<br><small>개발·프로덕션 환경에서 에이전트 평가</small></td><td>エージェントの評価用のテストセット（例: ゴールデン データ、プロンプト、エッジケース）を作成する / 確立された成功基準に基づいてエージェントのツール実行を評価する継続評価パイプラインを作成する / 適切な評価フレームワークとツール（例: ADK 評価ツール（evalset）、Agent Platform Gen AI evaluation service、カスタム自動評価ツール）を決定する / ゴールデン データセットに照らしてエージェント システムを評価し、エージェントの回答と検索の品質を評価する（例: ADK の使用）</td></tr>
    <tr><td class="strong">4.2</td><td>本番環境ワークロードをデプロイしてスケーリングする<br><small>프로덕션 워크로드 배포·확장</small></td><td>ユースケース、要件、費用に基づいて最適なデプロイ ランタイムを選択する（例: Agent Runtime、Cloud Run、GKE） / エージェントの問題（例: ドリフト、ツール呼び出し遅延、エージェントの推論ループ、システム障害）のトラブルシューティングを行う / パフォーマンス、信頼性、費用を考慮してエージェントのモニタリングと最適化を行う（例: 論理エラー、遅延のボトルネック、ハルシネーションの特定）</td></tr>
  </tbody></table></div>
  <h3>섹션 5: エージェント ワークフローのセキュリティとガバナンス (약 15%)</h3>
  <div class="tbl"><table><thead><tr><th>소절</th><th>원문</th><th>고려 사항</th></tr></thead><tbody>
    <tr><td class="strong">5.1</td><td>エージェントのセキュリティとガバナンスを構成する<br><small>에이전트 보안·거버넌스 구성</small></td><td>認証と安全なツール実行を実装する（例: OAuth 2.0 を使用したエージェントからツールへの API 呼び出し） / Agent Identity を使用してプリンシパル アクセス境界（PAB）ポリシーを構成する / トラフィックをモニタリングし、エージェントを追跡するように Agent Gateway を構成する / エージェントのガバナンスとポリシー適用を設計し、構成する（例: Agent Registry、Model Armor）</td></tr>
    <tr><td class="strong">5.2</td><td>安全なエージェントの動作と実行を実装する<br><small>안전한 에이전트 동작·실행 구현</small></td><td>適切な安全フレームワークとガードレールを設計する（例: Agent Gateway、Model Armor、人間参加型 [HITL]） / データへの安全なアクセスと ID 伝播を構成する（例: Agent Gateway、Agent Registry）</td></tr>
  </tbody></table></div>
</section>

<section>
  <h2>3. 출제 대상 도구 (この試験の対象となるツール)</h2>
  <p>가이드 4쪽의 목록입니다. 일본어판과 영어판이 <b>한 줄씩 다릅니다</b>: 일본어판에는 <mark>Auth Manager（OAuth 2.0）</mark>가 있고, 영어판에는 <mark>Gen AI evaluation service</mark>가 있습니다(일본어판은 4.1 본문에만 나옴). 둘 다 범위로 보고 공부합니다.</p>
  <div class="tbl"><table><thead><tr><th>영어</th><th>일본어판 표기</th><th>관련 소절</th><th>메모</th></tr></thead><tbody>
    <tr><td class="strong">Agent Development Kit (ADK)</td><td>Agent Development Kit（ADK）</td><td>3.1, 4.1</td><td>오픈소스 에이전트 개발 프레임워크. 평가 도구 evalset 포함</td></tr>
    <tr><td class="strong">Agent Gateway</td><td>Agent Gateway</td><td>5.1, 5.2</td><td>에이전트 트래픽 모니터링·추적, 가드레일, ID 전파</td></tr>
    <tr><td class="strong">Agent Identity</td><td>Agent Identity</td><td>3.2, 3.3, 5.1</td><td>에이전트 권한, PAB 정책</td></tr>
    <tr><td class="strong">Agent Registry</td><td>Agent Registry</td><td>3.2, 3.3, 5.1, 5.2</td><td>에이전트·기능 등록, 거버넌스</td></tr>
    <tr><td class="strong">Agent Retrieval and Vector Search</td><td>Agent Retrieval と Vector Search</td><td>3.2</td><td>RAG·벡터 검색</td></tr>
    <tr><td class="strong">Agent Runtime (formerly Agent Engine)</td><td>Agent Runtime（<mark>旧称 Agent Engine</mark>）</td><td>3.3, 4.2</td><td>에이전트 배포 런타임. Cloud Run·GKE와 선택 문제</td></tr>
    <tr><td class="strong">Agent Search (formerly Vertex AI Search)</td><td><mark>エージェント検索</mark>（旧称 Vertex AI Search）</td><td>1.2</td><td>일본어판은 カタカナ 이름(エージェント検索)</td></tr>
    <tr><td class="strong">Agentic protocols (A2A, MCP)</td><td>エージェント プロトコル（例: Agent2Agent [A2A]、MCP）</td><td>3.3</td><td>—</td></tr>
    <tr><td class="strong">Agents CLI in Agent Platform</td><td>Agent Platform の Agents CLI</td><td>2.2, 3.1</td><td>스킬·플러그인, 에이전트 모드/인간 모드</td></tr>
    <tr><td class="strong">Antigravity (CLI, SDK, App)</td><td>Antigravity（CLI、SDK、アプリ）</td><td>2.1, 2.2</td><td>코딩 에이전트. 스킬·플러그인·훅·규칙·서브에이전트</td></tr>
    <tr><td class="strong">(일본어판에만 있음)</td><td><mark>Auth Manager（OAuth 2.0）</mark></td><td>5.1</td><td>영어판 목록에는 없음</td></tr>
    <tr><td class="strong">BigQuery</td><td>BigQuery</td><td>—</td><td>—</td></tr>
    <tr><td class="strong">Cloud Run</td><td>Cloud Run</td><td>4.2</td><td>—</td></tr>
    <tr><td class="strong">Cloud SQL</td><td>Cloud SQL</td><td>—</td><td>—</td></tr>
    <tr><td class="strong">Cloud Storage</td><td>Cloud Storage</td><td>—</td><td>—</td></tr>
    <tr><td class="strong">Firestore</td><td>Firestore</td><td>—</td><td>세션·상태 저장 후보</td></tr>
    <tr><td class="strong">Gemini Enterprise</td><td>Gemini Enterprise</td><td>1.1, 1.2</td><td>Workflow Builder, 데이터 연결</td></tr>
    <tr><td class="strong">Gemini LLMs</td><td>Gemini LLM</td><td>3.1</td><td>—</td></tr>
    <tr><td class="strong">Gen AI evaluation service (영어판에만 목록)</td><td>Agent Platform Gen AI evaluation service(4.1 본문)</td><td>4.1</td><td>일본어판 도구 목록에는 없고 4.1 본문에만 나옴</td></tr>
    <tr><td class="strong">Google Cloud Observability (Cloud Logging, Cloud Trace)</td><td>Google Cloud Observability（Cloud Logging と Cloud Trace）</td><td>4.2</td><td>—</td></tr>
    <tr><td class="strong">Google Kubernetes Engine (GKE)</td><td>Google Kubernetes Engine（GKE）</td><td>2.1, 4.2</td><td>샌드박스, 배포 런타임</td></tr>
    <tr><td class="strong">Memorystore for Redis</td><td>Memorystore for Redis</td><td>—</td><td>캐시·세션 저장 후보</td></tr>
    <tr><td class="strong">Model Armor</td><td>Model Armor</td><td>5.1, 5.2</td><td>프롬프트·응답 필터(프롬프트 인젝션, 민감 정보)</td></tr>
    <tr><td class="strong">Model Context Protocol (MCP) servers</td><td>Model Context Protocol（MCP）サーバー</td><td>2.1, 3.2</td><td>—</td></tr>
    <tr><td class="strong">Model Garden</td><td>Model Garden</td><td>3.1</td><td>모델 선택</td></tr>
    <tr><td class="strong">RAG Engine</td><td>RAG Engine</td><td>3.2</td><td>—</td></tr>
    <tr><td class="strong">Sensitive Data Protection</td><td>Sensitive Data Protection</td><td>—</td><td>민감 정보 탐지·비식별화. 소절 본문엔 없지만 5장 데이터 보호와 연결</td></tr>
    <tr><td class="strong">Skill Registry</td><td>Skill Registry</td><td>2.2, 3.1</td><td>—</td></tr>
    <tr><td class="strong">Workflow Builder (formerly Agent Designer)</td><td>Workflow Builder（<mark>旧称 Agent Designer</mark>）</td><td>1.1</td><td>—</td></tr>
  </tbody></table></div>
  <p>BigQuery·Cloud SQL·Cloud Storage·Firestore·Memorystore는 소절 본문에 이름이 없고 목록에만 있습니다. 에이전트의 <b>데이터 소스·세션/메모리·캐시 저장소</b>로 선택지에 나올 가능성이 큽니다(추정).</p>
</section>

<section>
  <h2>4. 이전 시험에서 이미 다룬 범위</h2>
  <p>다른 시험 노트는 탭 맨 위의 시험 버튼으로 이동해 볼 수 있습니다(문제 링크는 시험 안에서만 동작).</p>
  <div class="tbl"><table><thead><tr><th>PAA 범위</th><th>겹치는 노트</th><th>무엇을 가져오면 되나</th></tr></thead><tbody>
    <tr><td>4.2 배포 런타임 선택(Cloud Run·GKE)</td><td>PCD 섹션 1·3, PCA</td><td>Cloud Run vs GKE 선택 기준, 오토스케일링, 트래픽 분할. 여기에 <b>Agent Runtime</b>(관리형 에이전트 런타임)이라는 세 번째 선택지가 추가됨</td></tr>
    <tr><td>4.2 모니터링(Cloud Logging·Cloud Trace)</td><td>PCD 섹션 1·4(관측 가능성)</td><td>로그·트레이스로 지연 병목 찾기. 에이전트에서는 <b>도구 호출 지연·추론 루프</b>를 트레이스로 찾음</td></tr>
    <tr><td>2.1 샌드박스(Cloud Workstations, GKE)</td><td>PCD 섹션 2(개발 환경)</td><td>Cloud Workstations = 관리형 개발 환경</td></tr>
    <tr><td>3.2 RAG·임베딩·Vector Search</td><td>PDE(RAG·임베딩), PMLE 가이드</td><td>임베딩 → 벡터 검색 → 재순위 흐름, AI.GENERATE_EMBEDDING</td></tr>
    <tr><td>5.1 OAuth 2.0, 서비스 계정, 최소 권한</td><td>PCD 섹션 1·4(인증), PCA 보안</td><td>사용자 대신 호출 = OAuth, 서비스 간 = 서비스 계정. 에이전트용 ID는 <b>Agent Identity</b></td></tr>
    <tr><td>5.x Model Armor, Sensitive Data Protection</td><td>PCA·PMLE 가이드, PDE(DLP)</td><td>Model Armor = 프롬프트·응답 필터, SDP = 민감 정보 탐지·마스킹</td></tr>
    <tr><td>3.1 Model Garden, LLM 선택</td><td>PMLE 가이드 1.2</td><td>비용·지연·보안으로 모델 고르기</td></tr>
  </tbody></table></div>
</section>
`
},
{
  id: "s1",
  title: "1. 로우코드 도구로 에이전트 구축 (13%)",
  updated: "2026-11-26",
  related: [],
  html: `
<section>
  <h2>0. 이 섹션</h2>
  <p><b>ローコード ツールを使用したエージェントの構築</b>(시험 내용의 약 13%). 학습 내용·문제를 반영할 때마다 아래 표의 “핵심 개념·판단 기준”을 채우고 노트 문제를 링크합니다.</p>
  <div class="tbl"><table><thead><tr><th>세트</th><th>문제 수</th><th>오답</th><th>찍음</th></tr></thead><tbody>
    <tr><td colspan="4">아직 문제가 없습니다</td></tr>
  </tbody></table></div>
</section>

<section>
  <h2>1.1 ローコード ツールを使用してエージェント ワークフローとエージェントの動作を構成する (로우코드 도구로 에이전트 워크플로·동작 구성)</h2>
  <div class="tbl"><table><thead><tr><th>출제 항목</th><th>핵심 개념·판단 기준</th><th>노트 문제</th></tr></thead><tbody>
    <tr><td>Gemini Enterprise 도구로 상태 기반 워크플로(페이지, 전환 경로, 이벤트 핸들러) 구성 (예: Gemini Enterprise Workflow Builder, CX Agent Studio)<br><small>Gemini Enterprise ツールを使用して、状態ベースのワークフロー（ページ、遷移ルート、イベント ハンドラ）を構成する（例: Gemini Enterprise Workflow Builder、Customer Experience Agent Studio [CX Agent Studio]）</small></td><td>—</td><td>미출제</td></tr>
    <tr><td>에이전트 동작을 이끄는 시스템 지시·콘솔 내 프롬프트 템플릿(few-shot, Chain-of-Thought) 작성 (예: Workflow Builder, CX Agent Studio)<br><small>エージェントの動作をガイドするシステム指示とコンソール内プロンプト テンプレート（例: 少数ショット、Chain-of-Thought）を作成する（例: Workflow Builder、CX Agent Studio）</small></td><td>—</td><td>미출제</td></tr>
  </tbody></table></div>
</section>

<section>
  <h2>1.2 エンタープライズ データを Gemini Enterprise に接続する (기업 데이터를 Gemini Enterprise에 연결)</h2>
  <div class="tbl"><table><thead><tr><th>출제 항목</th><th>핵심 개념·판단 기준</th><th>노트 문제</th></tr></thead><tbody>
    <tr><td>기업 고유 데이터 소스에 안전하게 연결·쿼리하도록 에이전트 구성 (예: Gemini Enterprise, 에이전트 검색)<br><small>企業独自のデータソースに安全に接続してクエリを実行できるようにエージェントを構成する（例: Gemini Enterprise、エージェント検索）</small></td><td>—</td><td>미출제</td></tr>
    <tr><td>비정형 멀티모달 데이터(동영상·음성·이미지)를 에이전트 워크플로에 수집·처리<br><small>非構造化マルチモーダル データ（例: 動画、音声、画像）をエージェント ワークフローに取り込んで処理する</small></td><td>—</td><td>미출제</td></tr>
  </tbody></table></div>
</section>
`
},
{
  id: "s2",
  title: "2. 앱 개발에 코딩 에이전트 활용 (17%)",
  updated: "2026-11-26",
  related: [],
  html: `
<section>
  <h2>0. 이 섹션</h2>
  <p><b>アプリケーション開発におけるコーディング エージェントの使用</b>(시험 내용의 약 17%). 학습 내용·문제를 반영할 때마다 아래 표의 “핵심 개념·판단 기준”을 채우고 노트 문제를 링크합니다.</p>
  <div class="tbl"><table><thead><tr><th>세트</th><th>문제 수</th><th>오답</th><th>찍음</th></tr></thead><tbody>
    <tr><td colspan="4">아직 문제가 없습니다</td></tr>
  </tbody></table></div>
</section>

<section>
  <h2>2.1 コーディング エージェントを効果的に使用する (코딩 에이전트를 효과적으로 사용)</h2>
  <div class="tbl"><table><thead><tr><th>출제 항목</th><th>핵심 개념·판단 기준</th><th>노트 문제</th></tr></thead><tbody>
    <tr><td>MCP 서버·커스텀 스킬·도구 접근으로 코딩 에이전트 구성 (예: Antigravity, Google Cloud의 Claude Code)<br><small>Model Context Protocol（MCP）サーバー、カスタムスキル、ツールへのアクセスを使用してコーディング エージェントを構成する（例: Antigravity、Google Cloud 上の Claude Code）</small></td><td>—</td><td>미출제</td></tr>
    <tr><td>안전한 샌드박스에서 코딩 에이전트 사용 (예: GKE, Cloud Workstations, Antigravity)<br><small>安全なサンドボックスでコーディング エージェントを使用する（例: Google Kubernetes Engine [GKE]、Cloud Workstations、Antigravity）</small></td><td>—</td><td>미출제</td></tr>
    <tr><td>코딩 에이전트로 소스 코드 리팩터링, 실행 런타임 최적화, 애플리케이션 계층 취약점 패치<br><small>コーディング エージェントを使用して、ソースコードのリファクタリング、実行ランタイムの最適化、アプリケーション レイヤの脆弱性に対するパッチ適用を行う</small></td><td>—</td><td>미출제</td></tr>
  </tbody></table></div>
</section>

<section>
  <h2>2.2 エンタープライズ ワークフロー向けにコーディング エージェントをカスタマイズする (기업 워크플로에 맞게 코딩 에이전트 커스터마이즈)</h2>
  <div class="tbl"><table><thead><tr><th>출제 항목</th><th>핵심 개념·판단 기준</th><th>노트 문제</th></tr></thead><tbody>
    <tr><td>Antigravity로 스킬·플러그인·확장 기능 훅·규칙·서브에이전트 작성<br><small>Antigravity を使用してスキル、プラグイン、拡張機能フック、ルール、サブエージェントを作成する</small></td><td>—</td><td>미출제</td></tr>
    <tr><td>Agents CLI로 Antigravity를 보강해 에이전트 구축, 배포된 에이전트의 확장·관리·최적화<br><small>Agents CLI で Antigravity を強化し、エージェントの構築と、デプロイされたエージェントのスケーリング、管理、最適化を行う</small></td><td>—</td><td>미출제</td></tr>
  </tbody></table></div>
</section>
`
},
{
  id: "s3",
  title: "3. 커스텀 에이전트 개발 (33%)",
  updated: "2026-11-26",
  related: [],
  html: `
<section>
  <h2>0. 이 섹션</h2>
  <p><b>カスタム エージェントの開発</b>(시험 내용의 약 33%). 학습 내용·문제를 반영할 때마다 아래 표의 “핵심 개념·판단 기준”을 채우고 노트 문제를 링크합니다.</p>
  <div class="tbl"><table><thead><tr><th>세트</th><th>문제 수</th><th>오답</th><th>찍음</th></tr></thead><tbody>
    <tr><td colspan="4">아직 문제가 없습니다</td></tr>
  </tbody></table></div>
</section>

<section>
  <h2>3.1 コードでエージェント ワークフローを設計、構築する (코드로 에이전트 워크플로 설계·구축)</h2>
  <div class="tbl"><table><thead><tr><th>출제 항목</th><th>핵심 개념·판단 기준</th><th>노트 문제</th></tr></thead><tbody>
    <tr><td>비용·보안·에이전트 아키텍처를 고려한 언어 모델 선택·구성 (LLM vs SLM, 셀프 호스팅 vs SaaS, OSS vs 상용 LLM)<br><small>費用、セキュリティ、エージェント アーキテクチャを考慮して、適切な言語モデル（例: 大規模言語モデル [LLM] か小規模言語モデル [SLM] か、セルフホスト型か Software as a Service [SaaS] か、オープンソース ソフトウェア [OSS] か商用 LLM か）を選択、構成する</small></td><td>—</td><td>미출제</td></tr>
    <tr><td>오픈소스 라이브러리로 커스텀 에이전트 구축 (예: ADK)<br><small>オープンソース ライブラリを使用してカスタム エージェントを構築する（例: Agent Development Kit [ADK]）</small></td><td>—</td><td>미출제</td></tr>
    <tr><td>세션·메모리 구성 (예: Agent Platform 메모리 뱅크, 관리형 세션)<br><small>セッションとメモリを構成する（例: Agent Platform メモリバンク、マネージド セッション）</small></td><td>—</td><td>미출제</td></tr>
    <tr><td>Agents CLI로 스킬 구성 (예: 플러그인, 에이전트 모드 vs 인간 모드)<br><small>Agents CLI を使用してスキルを構成する（例: プラグイン、エージェント モードか人間モードか）</small></td><td>—</td><td>미출제</td></tr>
  </tbody></table></div>
</section>

<section>
  <h2>3.2 企業の専門分野に関する知識を統合する (기업 도메인 지식 통합)</h2>
  <div class="tbl"><table><thead><tr><th>출제 항목</th><th>핵심 개념·판단 기준</th><th>노트 문제</th></tr></thead><tbody>
    <tr><td>벡터 DB 등으로 RAG 파이프라인·벡터 검색 시스템(임베딩 모델, 유사도 점수, 재순위) 설계·구성·관리 (예: Vector Search, Agent Retrieval)<br><small>ベクトル データベースなどの適切なサービスを使用して、検索拡張生成（RAG）パイプラインとベクトル取得システム（例: エンベディング モデル、類似性のスコアリング、再ランキング）を設計、構成、管理する（例: Vector Search、Agent Retrieval）</small></td><td>—</td><td>미출제</td></tr>
    <tr><td>에이전트 권한 구성 (예: Agent Identity)<br><small>エージェントの権限を構成する（例: Agent Identity）</small></td><td>—</td><td>미출제</td></tr>
    <tr><td>Agent Registry·Google Cloud MCP 서버로 사전 빌드·커스텀 기능 구성 (관리형 DB, API 통합, 서드파티 SaaS·원격 서버에 연결하는 MCP 서버용 커스텀 통합 계층)<br><small>Google Cloud ツール（例: Agent Registry、Google Cloud MCP サーバー）を使用して、事前構築済みの機能とカスタム機能を構成する（例: マネージド データベース、API インテグレーション、およびエージェントをサードパーティの SaaS ツールやリモート サーバーに接続する MCP サーバー向けのカスタム インテグレーション レイヤ）</small></td><td>—</td><td>미출제</td></tr>
  </tbody></table></div>
</section>

<section>
  <h2>3.3 エージェント ワークフローのオーケストレーションと調整を行う (에이전트 워크플로 오케스트레이션·조정)</h2>
  <div class="tbl"><table><thead><tr><th>출제 항목</th><th>핵심 개념·판단 기준</th><th>노트 문제</th></tr></thead><tbody>
    <tr><td>에이전트 프로토콜(MCP, A2A)로 에이전트 오케스트레이션<br><small>エージェント プロトコル（例: MCP、Agent2Agent [A2A]）を使用して、エージェントのオーケストレーションを行う</small></td><td>—</td><td>미출제</td></tr>
    <tr><td>멀티에이전트 핸드오프·워크플로(병렬, 순차, 그래프 워크플로) 선택·조정 (예: Agent Identity, Agent Registry, Agent Runtime, 에이전트 정책)<br><small>Google Cloud ツールを使用して、マルチエージェントのハンドオフとワークフロー（例: 並列エージェント、シーケンシャル エージェント、グラフ ワークフロー）を選択、調整する（例: Agent Identity、Agent Registry、Agent Runtime、エージェント ポリシー）</small></td><td>—</td><td>미출제</td></tr>
  </tbody></table></div>
</section>
`
},
{
  id: "s4",
  title: "4. 에이전트 워크플로 평가·배포 (22%)",
  updated: "2026-11-26",
  related: [],
  html: `
<section>
  <h2>0. 이 섹션</h2>
  <p><b>エージェント ワークフローの評価とデプロイ</b>(시험 내용의 약 22%). 학습 내용·문제를 반영할 때마다 아래 표의 “핵심 개념·판단 기준”을 채우고 노트 문제를 링크합니다.</p>
  <div class="tbl"><table><thead><tr><th>세트</th><th>문제 수</th><th>오답</th><th>찍음</th></tr></thead><tbody>
    <tr><td colspan="4">아직 문제가 없습니다</td></tr>
  </tbody></table></div>
</section>

<section>
  <h2>4.1 開発環境と本番環境でエージェントを評価する (개발·프로덕션 환경에서 에이전트 평가)</h2>
  <div class="tbl"><table><thead><tr><th>출제 항목</th><th>핵심 개념·판단 기준</th><th>노트 문제</th></tr></thead><tbody>
    <tr><td>에이전트 평가용 테스트 세트(골든 데이터, 프롬프트, 엣지 케이스) 작성<br><small>エージェントの評価用のテストセット（例: ゴールデン データ、プロンプト、エッジケース）を作成する</small></td><td>—</td><td>미출제</td></tr>
    <tr><td>성공 기준에 따라 에이전트의 도구 실행을 평가하는 지속 평가 파이프라인 작성<br><small>確立された成功基準に基づいてエージェントのツール実行を評価する継続評価パイプラインを作成する</small></td><td>—</td><td>미출제</td></tr>
    <tr><td>평가 프레임워크·도구 결정 (ADK 평가 도구(evalset), Agent Platform Gen AI evaluation service, 커스텀 자동 평가 도구)<br><small>適切な評価フレームワークとツール（例: ADK 評価ツール（evalset）、Agent Platform Gen AI evaluation service、カスタム自動評価ツール）を決定する</small></td><td>—</td><td>미출제</td></tr>
    <tr><td>골든 데이터셋으로 에이전트 응답·검색 품질 평가 (예: ADK)<br><small>ゴールデン データセットに照らしてエージェント システムを評価し、エージェントの回答と検索の品質を評価する（例: ADK の使用）</small></td><td>—</td><td>미출제</td></tr>
  </tbody></table></div>
</section>

<section>
  <h2>4.2 本番環境ワークロードをデプロイしてスケーリングする (프로덕션 워크로드 배포·확장)</h2>
  <div class="tbl"><table><thead><tr><th>출제 항목</th><th>핵심 개념·판단 기준</th><th>노트 문제</th></tr></thead><tbody>
    <tr><td>사용 사례·요구 사항·비용에 맞는 배포 런타임 선택 (Agent Runtime, Cloud Run, GKE)<br><small>ユースケース、要件、費用に基づいて最適なデプロイ ランタイムを選択する（例: Agent Runtime、Cloud Run、GKE）</small></td><td>—</td><td>미출제</td></tr>
    <tr><td>에이전트 문제 해결 (드리프트, 도구 호출 지연, 추론 루프, 시스템 장애)<br><small>エージェントの問題（例: ドリフト、ツール呼び出し遅延、エージェントの推論ループ、システム障害）のトラブルシューティングを行う</small></td><td>—</td><td>미출제</td></tr>
    <tr><td>성능·신뢰성·비용 관점의 모니터링·최적화 (논리 오류, 지연 병목, 환각 식별)<br><small>パフォーマンス、信頼性、費用を考慮してエージェントのモニタリングと最適化を行う（例: 論理エラー、遅延のボトルネック、ハルシネーションの特定）</small></td><td>—</td><td>미출제</td></tr>
  </tbody></table></div>
</section>
`
},
{
  id: "s5",
  title: "5. 에이전트 워크플로 보안·거버넌스 (15%)",
  updated: "2026-11-26",
  related: [],
  html: `
<section>
  <h2>0. 이 섹션</h2>
  <p><b>エージェント ワークフローのセキュリティとガバナンス</b>(시험 내용의 약 15%). 학습 내용·문제를 반영할 때마다 아래 표의 “핵심 개념·판단 기준”을 채우고 노트 문제를 링크합니다.</p>
  <div class="tbl"><table><thead><tr><th>세트</th><th>문제 수</th><th>오답</th><th>찍음</th></tr></thead><tbody>
    <tr><td colspan="4">아직 문제가 없습니다</td></tr>
  </tbody></table></div>
</section>

<section>
  <h2>5.1 エージェントのセキュリティとガバナンスを構成する (에이전트 보안·거버넌스 구성)</h2>
  <div class="tbl"><table><thead><tr><th>출제 항목</th><th>핵심 개념·판단 기준</th><th>노트 문제</th></tr></thead><tbody>
    <tr><td>인증·안전한 도구 실행 구현 (예: OAuth 2.0으로 에이전트→도구 API 호출)<br><small>認証と安全なツール実行を実装する（例: OAuth 2.0 を使用したエージェントからツールへの API 呼び出し）</small></td><td>—</td><td>미출제</td></tr>
    <tr><td>Agent Identity로 PAB(Principal Access Boundary, 주 구성원 액세스 경계) 정책 구성<br><small>Agent Identity を使用してプリンシパル アクセス境界（PAB）ポリシーを構成する</small></td><td>—</td><td>미출제</td></tr>
    <tr><td>트래픽 모니터링·에이전트 추적을 위한 Agent Gateway 구성<br><small>トラフィックをモニタリングし、エージェントを追跡するように Agent Gateway を構成する</small></td><td>—</td><td>미출제</td></tr>
    <tr><td>에이전트 거버넌스·정책 적용 설계·구성 (예: Agent Registry, Model Armor)<br><small>エージェントのガバナンスとポリシー適用を設計し、構成する（例: Agent Registry、Model Armor）</small></td><td>—</td><td>미출제</td></tr>
  </tbody></table></div>
</section>

<section>
  <h2>5.2 安全なエージェントの動作と実行を実装する (안전한 에이전트 동작·실행 구현)</h2>
  <div class="tbl"><table><thead><tr><th>출제 항목</th><th>핵심 개념·판단 기준</th><th>노트 문제</th></tr></thead><tbody>
    <tr><td>안전 프레임워크·가드레일 설계 (Agent Gateway, Model Armor, HITL(Human-in-the-Loop, 사람 개입))<br><small>適切な安全フレームワークとガードレールを設計する（例: Agent Gateway、Model Armor、人間参加型 [HITL]）</small></td><td>—</td><td>미출제</td></tr>
    <tr><td>데이터 안전 접근·ID 전파 구성 (예: Agent Gateway, Agent Registry)<br><small>データへの安全なアクセスと ID 伝播を構成する（例: Agent Gateway、Agent Registry）</small></td><td>—</td><td>미출제</td></tr>
  </tbody></table></div>
</section>
`
},
{
  id: "ja",
  title: "일본어 용어집 (시험 표기)",
  updated: "2026-11-26",
  related: [],
  html: `
<section>
  <h2>0. 읽는 법</h2>
  <p>이 표의 일본어 표기는 PAA 일본어 시험 가이드와 Google Cloud 일본어 공식 문서(<code>docs.cloud.google.com/...?hl=ja</code>)에서 확인한 것만 씁니다. 확인하지 못한 것은 “(확인 필요)”로 표시합니다. 학습 내용·문제를 반영하면서 새 용어를 추가합니다.</p>
  <p>도구 이름의 일본어판 표기는 “시험 가이드 · 출제 범위” 3장 표에 있습니다.</p>
</section>

<section>
  <h2>1. 시험 가이드에 나온 용어</h2>
  <div class="tbl"><table><thead><tr><th>영어</th><th>일본어 시험 표기</th><th>뜻·주의</th></tr></thead><tbody>
    <tr><td class="strong">agentic workflow</td><td><mark>エージェント ワークフロー</mark></td><td>시험 전체의 핵심어</td></tr>
    <tr><td class="strong">agent design pattern</td><td>エージェント設計パターン</td><td>머리말</td></tr>
    <tr><td class="strong">low-code tools</td><td>ローコード ツール</td><td>섹션 1</td></tr>
    <tr><td class="strong">state-based workflow (pages, transition routes, event handlers)</td><td><mark>状態ベースのワークフロー</mark>（ページ、<mark>遷移ルート</mark>、イベント ハンドラ）</td><td>1.1. 페이지·전환 경로·이벤트 핸들러는 Dialogflow CX에서 쓰던 개념(확인 필요)</td></tr>
    <tr><td class="strong">system instructions</td><td><mark>システム指示</mark></td><td>1.1. 모델에 주는 역할·규칙</td></tr>
    <tr><td class="strong">in-console prompt template</td><td>コンソール内プロンプト テンプレート</td><td>1.1</td></tr>
    <tr><td class="strong">few-shot / chain-of-thought</td><td><mark>少数ショット</mark> / Chain-of-Thought</td><td>1.1. few-shot은 일본어로 표기됨에 주의</td></tr>
    <tr><td class="strong">enterprise proprietary data sources</td><td>企業独自のデータソース</td><td>1.2</td></tr>
    <tr><td class="strong">unstructured multimodal data</td><td>非構造化マルチモーダル データ</td><td>1.2. 동영상·음성·이미지</td></tr>
    <tr><td class="strong">coding agent</td><td><mark>コーディング エージェント</mark></td><td>섹션 2</td></tr>
    <tr><td class="strong">custom skills</td><td>カスタムスキル</td><td>2.1</td></tr>
    <tr><td class="strong">secure sandbox</td><td>安全なサンドボックス</td><td>2.1</td></tr>
    <tr><td class="strong">refactor / patch vulnerabilities</td><td>リファクタリング / 脆弱性に対するパッチ適用</td><td>2.1</td></tr>
    <tr><td class="strong">skills, plugins, extensions hooks, rules, subagents</td><td>スキル、プラグイン、<mark>拡張機能フック</mark>、ルール、<mark>サブエージェント</mark></td><td>2.2</td></tr>
    <tr><td class="strong">LLM vs SLM</td><td>大規模言語モデル [LLM] / <mark>小規模言語モデル [SLM]</mark></td><td>3.1</td></tr>
    <tr><td class="strong">self-hosted / proprietary LLM</td><td><mark>セルフホスト型</mark> / <mark>商用 LLM</mark></td><td>3.1. proprietary = 商用(상용)으로 번역됨</td></tr>
    <tr><td class="strong">Memory Bank / managed sessions</td><td>Agent Platform <mark>メモリバンク</mark> / <mark>マネージド セッション</mark></td><td>3.1</td></tr>
    <tr><td class="strong">agent mode vs human mode</td><td>エージェント モード / 人間モード</td><td>3.1 Agents CLI</td></tr>
    <tr><td class="strong">retrieval-augmented generation (RAG)</td><td><mark>検索拡張生成（RAG）</mark></td><td>3.2</td></tr>
    <tr><td class="strong">embedding model / similarity scoring / reranking</td><td><mark>エンベディング モデル</mark> / 類似性のスコアリング / <mark>再ランキング</mark></td><td>3.2</td></tr>
    <tr><td class="strong">vector retrieval system</td><td>ベクトル取得システム</td><td>3.2</td></tr>
    <tr><td class="strong">prebuilt / custom capabilities</td><td>事前構築済みの機能 / カスタム機能</td><td>3.2</td></tr>
    <tr><td class="strong">custom integration layer</td><td>カスタム インテグレーション レイヤ</td><td>3.2</td></tr>
    <tr><td class="strong">multiagent handoff</td><td>マルチエージェントの<mark>ハンドオフ</mark></td><td>3.3</td></tr>
    <tr><td class="strong">parallel / sequential agents, graph workflow</td><td><mark>並列エージェント</mark> / <mark>シーケンシャル エージェント</mark> / グラフ ワークフロー</td><td>3.3. ADK의 ParallelAgent·SequentialAgent에 대응</td></tr>
    <tr><td class="strong">agent policies</td><td>エージェント ポリシー</td><td>3.3</td></tr>
    <tr><td class="strong">golden data / edge cases</td><td><mark>ゴールデン データ</mark> / エッジケース</td><td>4.1</td></tr>
    <tr><td class="strong">continuous evaluation pipeline</td><td><mark>継続評価パイプライン</mark></td><td>4.1</td></tr>
    <tr><td class="strong">custom autoraters</td><td><mark>カスタム自動評価ツール</mark></td><td>4.1. autorater = 모델이 채점하는 평가자</td></tr>
    <tr><td class="strong">drift / tool invocation latency / reasoning loops</td><td>ドリフト / <mark>ツール呼び出し遅延</mark> / <mark>推論ループ</mark></td><td>4.2</td></tr>
    <tr><td class="strong">hallucination</td><td><mark>ハルシネーション</mark></td><td>4.2</td></tr>
    <tr><td class="strong">Principal Access Boundary (PAB)</td><td><mark>プリンシパル アクセス境界（PAB）</mark></td><td>5.1</td></tr>
    <tr><td class="strong">guardrails</td><td>ガードレール</td><td>5.2</td></tr>
    <tr><td class="strong">human-in-the-loop (HITL)</td><td><mark>人間参加型 [HITL]</mark></td><td>5.2</td></tr>
    <tr><td class="strong">identity propagation</td><td><mark>ID 伝播</mark></td><td>5.2. 사용자 ID를 에이전트→도구로 넘김</td></tr>
  </tbody></table></div>
</section>

<section>
  <h2>2. 이름이 바뀐 서비스</h2>
  <p>학습 자료·문제집이 옛 이름을 쓰면 원문은 그대로 두고, 분석에는 새 이름을 씁니다.</p>
  <div class="tbl"><table><thead><tr><th>옛 이름</th><th>새 이름</th><th>일본어 시험 표기</th><th>근거</th></tr></thead><tbody>
    <tr><td>Agent Engine</td><td class="strong">Agent Runtime</td><td>Agent Runtime（旧称 Agent Engine）</td><td>가이드 4쪽</td></tr>
    <tr><td>Vertex AI Search</td><td class="strong">Agent Search</td><td><mark>エージェント検索</mark>（旧称 Vertex AI Search）</td><td>가이드 4쪽. 일본어판만 カタカナ 번역</td></tr>
    <tr><td>Agent Designer</td><td class="strong">Workflow Builder</td><td>Workflow Builder（旧称 Agent Designer）</td><td>가이드 4쪽</td></tr>
    <tr><td>Vertex AI</td><td class="strong">Gemini Enterprise Agent Platform (Agent Platform)</td><td>Agent Platform</td><td>PMLE 가이드 기준. PAA 가이드는 “Agent Platform メモリバンク”, “Agent Platform の Agents CLI”처럼 씀</td></tr>
    <tr><td>Dialogflow CX (추정)</td><td class="strong">Customer Experience Agent Studio (CX Agent Studio)</td><td>Customer Experience Agent Studio [CX Agent Studio]</td><td>옛 이름과의 대응은 확인 필요</td></tr>
  </tbody></table></div>
</section>
`
}
];
