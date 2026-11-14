/* PMLE 기초 정리 데이터: 주제별 개념 정리. related는 관련 문제 id.
   html 안에서 <button class="qref" data-id="N">QN</button>을 쓰면 해당 문제로 이동 */
var GUIDES = [
{
  id: "exam",
  title: "시험 가이드 · 출제 범위",
  updated: "2026-11-14",
  related: [],
  html: `
<section>
  <h2>0. 이 가이드를 쓰는 법</h2>
  <p>Google이 공개한 <b>Professional Machine Learning Engineer 認定試験ガイド</b>(일본어판, 5쪽)를 바탕으로 정리했습니다. 원문: <code>services.google.com/fh/files/misc/professional_machine_learning_engineer_exam_guide_japanese.pdf</code></p>
  <ul>
    <li><b>출제 비중</b>을 보고 어디에 시간을 쓸지 정합니다. 문제의 출제 빈도(<code>freq</code>)와 섹션(<code>section</code>) 판단도 이 범위를 기준으로 합니다.</li>
    <li>문제마다 소절 번호(예: 3.2)를 달아 두면 “통계” 탭에서 <mark>섹션별 정답률</mark>을 볼 수 있습니다.</li>
    <li>시험 가이드에 <b>이름이 직접 나온 서비스</b>는 출제 범위 안이라는 뜻입니다.</li>
    <li>사례 연구(事例紹介)는 없습니다.</li>
    <li>가이드 머리말: “<b>この試験はコーディングのスキルを直接評価するものではありません</b>”. Python·SQL 기초로 코드 조각을 읽을 수 있으면 됩니다.</li>
  </ul>
</section>

<section>
  <h2>1. 출제 비중</h2>
  <p>비중은 “<b>試験内容の約 〜%</b>(약)”입니다. 반올림 때문에 합하면 101%입니다.</p>
  <div class="tbl"><table><thead><tr><th>섹션</th><th>일본어 이름</th><th>비중</th></tr></thead><tbody>
    <tr><td class="strong">1. 로우코드 AI 솔루션 구축</td><td>ローコード AI ソリューションの構築</td><td>약 13%</td></tr><tr><td class="strong">2. 팀 내·팀 간 협업으로 데이터·모델 관리</td><td>チーム内およびチーム間の連携によるデータとモデルの管理</td><td>약 16%</td></tr><tr><td class="strong">3. 프로토타입을 ML 모델로 확장</td><td>プロトタイプの ML モデルへのスケーリング</td><td>약 21%</td></tr><tr><td class="strong">4. 모델 서빙·확장</td><td>モデルのサービングとスケーリング</td><td>약 20%</td></tr><tr><td class="strong">5. ML 파이프라인 자동화·오케스트레이션</td><td>ML パイプラインの自動化とオーケストレーション</td><td>약 18%</td></tr><tr><td class="strong">6. AI 솔루션 모니터링</td><td>AI ソリューションのモニタリング</td><td>약 13%</td></tr>
  </tbody></table></div>
  <p><b>특징</b>: 섹션 3(학습·확장, 약 21%)과 섹션 4(서빙, 약 20%)가 가장 큽니다. 둘을 합치면 40%가 넘으므로 <mark>Agent Platform의 커스텀 트레이닝·하드웨어 선택·엔드포인트 배포·확장</mark>이 중심입니다. 섹션마다 <b>생성 AI(Gemini 튜닝, Model Garden, LLM-as-a-Judge, Model Armor)</b> 항목이 섞여 있습니다.</p>
</section>

<section>
  <h2>2. 섹션별 출제 항목 (원문 표기)</h2>
  <h3>섹션 1: ローコード AI ソリューションの構築 (약 13%)</h3>
  <div class="tbl"><table><thead><tr><th>소절</th><th>원문</th><th>고려 사항</th></tr></thead><tbody>
    <tr><td class="strong">1.1</td><td>Gemini Enterprise Agent Platform で BigQuery ML または AutoML を使用した ML モデルの開発<br><small>BigQuery ML·AutoML로 ML 모델 개발</small></td><td>BigQuery ML または Agent Platform AutoML における、ビジネス課題に応じた各種モデル（分類、回帰、予測、クラスタリングなど）の構築 / BigQuery ML を使用した特徴量エンジニアリングまたは特徴量選択の実行 / BigQuery ML を使用した予測の生成 / Agent Platform AutoML を使用したモデルのトレーニング / BigQuery を使用した Gemini モデルのファインチューニング</td></tr>
    <tr><td class="strong">1.2</td><td>Google Cloud AI API または基盤モデルを使用した AI ソリューションの構築<br><small>Google Cloud AI API·기반 모델로 AI 솔루션 구축</small></td><td>Gemini Enterprise Agent Platform の Model Garden から、特定のタスクに応じたモデルの評価と選択 / 業界固有の API（Document AI API、Vision API、Translate API など）を使用したアプリケーションの構築 / 特定のユースケース向けのソリューションの構築とモデルのチューニング（Gemini、Imagen、Veo、Model Garden のサービスとしてのモデルなど） / 費用、レイテンシ、可用性を考慮した Gemini ベースのアプリケーションの最適化</td></tr>
  </tbody></table></div>

  <h3>섹션 2: チーム内およびチーム間の連携によるデータとモデルの管理 (약 16%)</h3>
  <div class="tbl"><table><thead><tr><th>소절</th><th>원문</th><th>고려 사항</th></tr></thead><tbody>
    <tr><td class="strong">2.1</td><td>ML 用データの探索と前処理<br><small>ML용 데이터 탐색·전처리</small></td><td>効率的なテスト、トレーニング、サービングのための、さまざまなデータタイプ（表形式、テキスト、画像など）の整理と探索 / 規模と複雑さに応じた、適切なデータ前処理ツールの選択（BigQuery [SQL]、Dataflow、Apache Spark、インメモリ Python フレームワークなど） / Gemini Enterprise Agent Platform Feature Store での特徴量の作成と統合 / データ プライバシーの確保と機密情報（個人を特定できる情報 [PII] など）の取り扱い</td></tr>
    <tr><td class="strong">2.2</td><td>ノートブック（Gemini Enterprise Agent Platform Workbench、Colab Enterprise など）を使用したモデルのプロトタイピング<br><small>노트북으로 모델 프로토타이핑</small></td><td>ノートブック環境の構築と実行時におけるコラボレーションとセキュリティのベスト プラクティスの適用 / Agent Platform Workbench または Colab Enterprise ノートブックでの一般的なフレームワーク（PyTorch、sklearn、JAX など）を使用したモデル開発 / ノートブック環境における、Model Garden のさまざまな基盤モデルとオープンソースモデルを使用したプロトタイプモデルの作成</td></tr>
    <tr><td class="strong">2.3</td><td>ML テストのトラッキングと実行<br><small>ML 실험 추적·실행</small></td><td>開発とテストに適した Google Cloud 環境（Gemini Enterprise Agent Platform の Experiments、Gemini Enterprise Agent Platform Pipelines、Kubeflow Pipelines など）をフレームワークに応じて選択 / 予測 AI ソリューションと生成 AI ソリューションの評価（モデル評価指標、LLM-as-a-Judge など） / モデルのアーティファクト、バージョン、リネージの追跡と比較（Agent Platform の Experiments、Gemini Enterprise Agent Platform ML Metadata など）</td></tr>
  </tbody></table></div>

  <h3>섹션 3: プロトタイプの ML モデルへのスケーリング (약 21%)</h3>
  <div class="tbl"><table><thead><tr><th>소절</th><th>원문</th><th>고려 사항</th></tr></thead><tbody>
    <tr><td class="strong">3.1</td><td>費用、複雑さ、レイテンシ、スケーラビリティを考慮し、タスクに応じたモデルの構築<br><small>비용·복잡도·지연·확장성을 고려한 모델 구축</small></td><td>モデルタイプの選択（ARIMA、DNN、LLM など） / プロダクトの選択（Agent Platform AutoML、BigQuery ML、Agent Platform Pipelines など） / デプロイ戦略の選択 / 解釈可能性要件のあるモデル手法</td></tr>
    <tr><td class="strong">3.2</td><td>モデルのトレーニング<br><small>모델 학습</small></td><td>Google Cloud（Cloud Storage、BigQuery など）上のトレーニング データ（表形式、テキスト、音声、画像、動画など）の整理 / さまざまなソースからの構造化データと非構造化データのトレーニング パイプラインへの取り込み / さまざまなソフトウェア開発キット（SDK）を使用したモデルのトレーニング（Agent Platform カスタム トレーニング、GKE 上の Kubeflow、Agent Platform AutoML、表形式ワークフローなど）と、Google Cloud でのトレーニングの整理 / ML モデルのトレーニング失敗のトラブルシューティング / ハイパーパラメータ チューニング / Agent Platform や Model Garden の基盤モデルのファインチューニングと、チューニングを検討すべきタイミング</td></tr>
    <tr><td class="strong">3.3</td><td>トレーニングに適したハードウェアの選択<br><small>학습용 하드웨어 선택</small></td><td>コンピューティング オプションとアクセラレータ オプションの評価（CPU、GPU、TPU など） / データ並列処理戦略とモデル並列処理戦略を用いた、GPU と TPU の分散トレーニングにおけるオプションの把握</td></tr>
  </tbody></table></div>

  <h3>섹션 4: モデルのサービングとスケーリング (약 20%)</h3>
  <div class="tbl"><table><thead><tr><th>소절</th><th>원문</th><th>고려 사항</th></tr></thead><tbody>
    <tr><td class="strong">4.1</td><td>モデルのサービング<br><small>모델 서빙</small></td><td>適切なサービス（Agent Platform、Model Garden、Cloud Run、GKE など）を使用した、バッチ推論とオンライン推論用のモデルのデプロイ / ビルド済みコンテナとカスタム コンテナを使用した、さまざまなフレームワーク（PyTorch、XGBoost など）のモデルのパッケージ化とサービング / Gemini Enterprise Agent Platform Model Registry でのモデルの整理とバージョン管理 / モデル バージョンを比較するためのモデル ロールアウト戦略（A/B テストやカナリア デプロイなど）の実装 / 推論の前処理と後処理のためのソリューションの開発</td></tr>
    <tr><td class="strong">4.2</td><td>オンライン モデル サービングのスケーリング<br><small>온라인 서빙 확장</small></td><td>Agent Platform Feature Store を使用した特徴の管理とサービング / パブリック エンドポイントとプライベート エンドポイントへのモデルのデプロイ / 適切なハードウェア（CPU、GPU、TPU、エッジなど）の選択 / スループットに基づいたサービング バックエンドのスケーリング（Gemini Enterprise Agent Platform Inference、コンテナ化されたサービングなど） / 本番環境でのトレーニングとサービングのための ML モデルのチューニング</td></tr>
  </tbody></table></div>

  <h3>섹션 5: ML パイプラインの自動化とオーケストレーション (약 18%)</h3>
  <div class="tbl"><table><thead><tr><th>소절</th><th>원문</th><th>고려 사항</th></tr></thead><tbody>
    <tr><td class="strong">5.1</td><td>エンドツーエンドの ML パイプラインの開発<br><small>엔드투엔드 ML 파이프라인 개발</small></td><td>データとモデルの検証 / マネージド サービスまたは非マネージド サービスを使用し、テンプレートまたはカスタム ソリューションから行うパイプラインの構築とオーケストレーション（Agent Platform Pipelines、Managed Service for Apache Airflow、Ray on Gemini Enterprise Agent Platform など） / トレーニングとサービングの間で一貫したデータ前処理の保証</td></tr>
    <tr><td class="strong">5.2</td><td>モデル再トレーニングの自動化<br><small>모델 재학습 자동화</small></td><td>適切な再トレーニング ポリシーの決定 / 継続的インテグレーション、継続的デリバリー、継続的トレーニング（CI / CD / CT）パイプライン（Cloud Build など）を使用したモデルのデプロイ</td></tr>
  </tbody></table></div>

  <h3>섹션 6: AI ソリューションのモニタリング (약 13%)</h3>
  <div class="tbl"><table><thead><tr><th>소절</th><th>원문</th><th>고려 사항</th></tr></thead><tbody>
    <tr><td class="strong">6.1</td><td>AI ソリューションに対するリスクの特定<br><small>AI 솔루션 위험 식별</small></td><td>適切なセキュリティ ツール（正規表現、安全フィルタ、Model Armor など）を使用し、データやモデルの意図しない悪用や漏洩（データの引き出し、悪意のあるプロンプト、LLM とのセンシティブ データの共有など）を防ぐ、安全な AI システムの構築 / 責任ある AI への取り組みへの準拠（バイアスのモニタリングなど） / Agent Platform におけるモデルの説明可能性（Agent Platform Inference など）</td></tr>
    <tr><td class="strong">6.2</td><td>AI ソリューションのモニタリング、テスト、トラブルシューティング<br><small>AI 솔루션 모니터링·테스트·문제 해결</small></td><td>Gemini Enterprise Agent Platform における Model Monitoring の設定と活用による、本番環境モデルの継続評価指標の確立 / 一般的な問題（トレーニング サービング スキュー、データドリフト、コンセプト ドリフト、特徴アトリビューションのドリフトなど）のモニタリング / 生成 AI ソリューションのモニタリング、テスト、評価</td></tr>
  </tbody></table></div>
</section>

<section>
  <h2>3. 서비스 이름 (새 이름으로 출제)</h2>
  <p>PMLE 일본어 시험 가이드는 <b>이미 새 이름</b>을 씁니다. 모의고사·옛 문서에 옛 이름이 나오면 새 이름으로 바꿔 읽습니다(자세한 표는 일본어 용어집).</p>
  <div class="tbl"><table><thead><tr><th>시험 가이드 표기(새 이름)</th><th>옛 이름</th></tr></thead><tbody>
    <tr><td class="strong">Gemini Enterprise Agent Platform (Agent Platform)</td><td>Vertex AI</td></tr>
    <tr><td class="strong">Agent Platform AutoML / Workbench / Pipelines / Experiments / ML Metadata / Feature Store / Model Registry / Model Monitoring</td><td>Vertex AI AutoML / Workbench / Pipelines / Experiments / ML Metadata / Feature Store / Model Registry / Model Monitoring</td></tr>
    <tr><td class="strong">Managed Service for Apache Airflow</td><td>Cloud Composer</td></tr>
    <tr><td class="strong">Ray on Gemini Enterprise Agent Platform</td><td>Ray on Vertex AI</td></tr>
    <tr><td class="strong">Gemini Enterprise Agent Platform Inference</td><td>Vertex AI 예측(Prediction)으로 보임(확인 필요)</td></tr>
  </tbody></table></div>
</section>

<section>
  <h2>4. 이전 시험에서 이미 다룬 범위</h2>
  <p>PDE·PCD 노트에 같은 서비스 문제가 있습니다(다른 시험 노트라 링크는 걸 수 없음). 홈에서 해당 시험 노트를 열어 검색하세요.</p>
  <div class="tbl"><table><thead><tr><th>PMLE 소절</th><th>겹치는 내용</th><th>참고할 노트</th></tr></thead><tbody>
    <tr><td class="strong">1.1, 3.1</td><td>BigQuery ML 모델 종류·CREATE MODEL·TRANSFORM, AI.GENERATE_TEXT</td><td>PDE (섹션 4)</td></tr>
    <tr><td class="strong">1.2</td><td>Model Garden, Gemini 앱 비용·지연, RAG Engine·Vector Search</td><td>PDE, PCA</td></tr>
    <tr><td class="strong">2.1, 4.2</td><td>Dataflow·Spark·BigQuery 전처리 선택, Feature Store, Sensitive Data Protection(PII)</td><td>PDE (섹션 2·4)</td></tr>
    <tr><td class="strong">4.1, 5.2</td><td>Cloud Run·GKE 배포, 트래픽 분할·카나리, Cloud Build CI/CD</td><td>PCD (섹션 1·2·3)</td></tr>
    <tr><td class="strong">5.1</td><td>Managed Service for Apache Airflow(옛 Composer) DAG 오케스트레이션</td><td>PDE (섹션 5)</td></tr>
    <tr><td class="strong">6.1</td><td>Model Armor, 책임 있는 AI</td><td>PCA</td></tr>
  </tbody></table></div>
</section>
`
},
{
  id: "s1",
  title: "1. 로우코드 AI 솔루션 구축 (13%)",
  updated: "2026-11-14",
  related: [],
  html: `
<section>
  <h2>0. 이 섹션</h2>
  <p><b>ローコード AI ソリューションの構築</b>(시험 내용의 약 13%). 문제를 반영할 때마다 아래 표의 “핵심 개념·판단 기준”을 채우고 노트 문제를 링크합니다.</p>
  <div class="tbl"><table><thead><tr><th>세트</th><th>문제 수</th><th>오답</th><th>찍음</th></tr></thead><tbody>
    <tr><td colspan="4">아직 문제가 없습니다</td></tr>
  </tbody></table></div>
</section>

<section>
  <h2>1.1 Gemini Enterprise Agent Platform で BigQuery ML または AutoML を使用した ML モデルの開発 (BigQuery ML·AutoML로 ML 모델 개발)</h2>
  <div class="tbl"><table><thead><tr><th>출제 항목</th><th>핵심 개념·판단 기준</th><th>노트 문제</th></tr></thead><tbody>
    <tr><td>BigQuery ML 또는 Agent Platform AutoML에서 과제별 모델(분류·회귀·예측·클러스터링) 구축<br><small>BigQuery ML または Agent Platform AutoML における、ビジネス課題に応じた各種モデル（分類、回帰、予測、クラスタリングなど）の構築</small></td><td>—</td><td>미출제</td></tr>
    <tr><td>BigQuery ML로 특징량 엔지니어링·특징량 선택<br><small>BigQuery ML を使用した特徴量エンジニアリングまたは特徴量選択の実行</small></td><td>—</td><td>미출제</td></tr>
    <tr><td>BigQuery ML로 예측 생성<br><small>BigQuery ML を使用した予測の生成</small></td><td>—</td><td>미출제</td></tr>
    <tr><td>Agent Platform AutoML로 모델 학습<br><small>Agent Platform AutoML を使用したモデルのトレーニング</small></td><td>—</td><td>미출제</td></tr>
    <tr><td>BigQuery로 Gemini 모델 미세 조정<br><small>BigQuery を使用した Gemini モデルのファインチューニング</small></td><td>—</td><td>미출제</td></tr>
  </tbody></table></div>
</section>

<section>
  <h2>1.2 Google Cloud AI API または基盤モデルを使用した AI ソリューションの構築 (Google Cloud AI API·기반 모델로 AI 솔루션 구축)</h2>
  <div class="tbl"><table><thead><tr><th>출제 항목</th><th>핵심 개념·판단 기준</th><th>노트 문제</th></tr></thead><tbody>
    <tr><td>Model Garden에서 작업에 맞는 모델 평가·선택<br><small>Gemini Enterprise Agent Platform の Model Garden から、特定のタスクに応じたモデルの評価と選択</small></td><td>—</td><td>미출제</td></tr>
    <tr><td>업계 특화 API(Document AI API, Vision API, Translate API 등)로 앱 구축<br><small>業界固有の API（Document AI API、Vision API、Translate API など）を使用したアプリケーションの構築</small></td><td>—</td><td>미출제</td></tr>
    <tr><td>사용 사례별 솔루션 구축·모델 튜닝(Gemini, Imagen, Veo, Model Garden의 서비스형 모델)<br><small>特定のユースケース向けのソリューションの構築とモデルのチューニング（Gemini、Imagen、Veo、Model Garden のサービスとしてのモデルなど）</small></td><td>—</td><td>미출제</td></tr>
    <tr><td>비용·지연 시간·가용성을 고려한 Gemini 앱 최적화<br><small>費用、レイテンシ、可用性を考慮した Gemini ベースのアプリケーションの最適化</small></td><td>—</td><td>미출제</td></tr>
  </tbody></table></div>
</section>
`
},
{
  id: "s2",
  title: "2. 팀 내·팀 간 협업으로 데이터·모델 관리 (16%)",
  updated: "2026-11-14",
  related: [],
  html: `
<section>
  <h2>0. 이 섹션</h2>
  <p><b>チーム内およびチーム間の連携によるデータとモデルの管理</b>(시험 내용의 약 16%). 문제를 반영할 때마다 아래 표의 “핵심 개념·판단 기준”을 채우고 노트 문제를 링크합니다.</p>
  <div class="tbl"><table><thead><tr><th>세트</th><th>문제 수</th><th>오답</th><th>찍음</th></tr></thead><tbody>
    <tr><td colspan="4">아직 문제가 없습니다</td></tr>
  </tbody></table></div>
</section>

<section>
  <h2>2.1 ML 用データの探索と前処理 (ML용 데이터 탐색·전처리)</h2>
  <div class="tbl"><table><thead><tr><th>출제 항목</th><th>핵심 개념·판단 기준</th><th>노트 문제</th></tr></thead><tbody>
    <tr><td>데이터 유형(표 형식·텍스트·이미지)별 정리·탐색<br><small>効率的なテスト、トレーニング、サービングのための、さまざまなデータタイプ（表形式、テキスト、画像など）の整理と探索</small></td><td>—</td><td>미출제</td></tr>
    <tr><td>규모·복잡도에 맞는 전처리 도구 선택(BigQuery SQL, Dataflow, Apache Spark, 인메모리 Python)<br><small>規模と複雑さに応じた、適切なデータ前処理ツールの選択（BigQuery [SQL]、Dataflow、Apache Spark、インメモリ Python フレームワークなど）</small></td><td>—</td><td>미출제</td></tr>
    <tr><td>Agent Platform Feature Store에서 특징 생성·통합<br><small>Gemini Enterprise Agent Platform Feature Store での特徴量の作成と統合</small></td><td>—</td><td>미출제</td></tr>
    <tr><td>데이터 프라이버시·기밀 정보(PII) 취급<br><small>データ プライバシーの確保と機密情報（個人を特定できる情報 [PII] など）の取り扱い</small></td><td>—</td><td>미출제</td></tr>
  </tbody></table></div>
</section>

<section>
  <h2>2.2 ノートブック（Gemini Enterprise Agent Platform Workbench、Colab Enterprise など）を使用したモデルのプロトタイピング (노트북으로 모델 프로토타이핑)</h2>
  <div class="tbl"><table><thead><tr><th>출제 항목</th><th>핵심 개념·판단 기준</th><th>노트 문제</th></tr></thead><tbody>
    <tr><td>노트북 환경 구축·실행 시 협업·보안 모범 사례<br><small>ノートブック環境の構築と実行時におけるコラボレーションとセキュリティのベスト プラクティスの適用</small></td><td>—</td><td>미출제</td></tr>
    <tr><td>Workbench·Colab Enterprise에서 PyTorch·sklearn·JAX로 모델 개발<br><small>Agent Platform Workbench または Colab Enterprise ノートブックでの一般的なフレームワーク（PyTorch、sklearn、JAX など）を使用したモデル開発</small></td><td>—</td><td>미출제</td></tr>
    <tr><td>노트북에서 Model Garden의 기반 모델·오픈소스 모델로 프로토타입<br><small>ノートブック環境における、Model Garden のさまざまな基盤モデルとオープンソースモデルを使用したプロトタイプモデルの作成</small></td><td>—</td><td>미출제</td></tr>
  </tbody></table></div>
</section>

<section>
  <h2>2.3 ML テストのトラッキングと実行 (ML 실험 추적·실행)</h2>
  <div class="tbl"><table><thead><tr><th>출제 항목</th><th>핵심 개념·판단 기준</th><th>노트 문제</th></tr></thead><tbody>
    <tr><td>프레임워크에 맞는 개발·실험 환경 선택(Experiments, Agent Platform Pipelines, Kubeflow Pipelines)<br><small>開発とテストに適した Google Cloud 環境（Gemini Enterprise Agent Platform の Experiments、Gemini Enterprise Agent Platform Pipelines、Kubeflow Pipelines など）をフレームワークに応じて選択</small></td><td>—</td><td>미출제</td></tr>
    <tr><td>예측 AI·생성 AI 평가(모델 평가 지표, LLM-as-a-Judge)<br><small>予測 AI ソリューションと生成 AI ソリューションの評価（モデル評価指標、LLM-as-a-Judge など）</small></td><td>—</td><td>미출제</td></tr>
    <tr><td>모델 아티팩트·버전·리니지 추적·비교(Experiments, ML Metadata)<br><small>モデルのアーティファクト、バージョン、リネージの追跡と比較（Agent Platform の Experiments、Gemini Enterprise Agent Platform ML Metadata など）</small></td><td>—</td><td>미출제</td></tr>
  </tbody></table></div>
</section>
`
},
{
  id: "s3",
  title: "3. 프로토타입을 ML 모델로 확장 (21%)",
  updated: "2026-11-14",
  related: [],
  html: `
<section>
  <h2>0. 이 섹션</h2>
  <p><b>プロトタイプの ML モデルへのスケーリング</b>(시험 내용의 약 21%). 문제를 반영할 때마다 아래 표의 “핵심 개념·판단 기준”을 채우고 노트 문제를 링크합니다.</p>
  <div class="tbl"><table><thead><tr><th>세트</th><th>문제 수</th><th>오답</th><th>찍음</th></tr></thead><tbody>
    <tr><td colspan="4">아직 문제가 없습니다</td></tr>
  </tbody></table></div>
</section>

<section>
  <h2>3.1 費用、複雑さ、レイテンシ、スケーラビリティを考慮し、タスクに応じたモデルの構築 (비용·복잡도·지연·확장성을 고려한 모델 구축)</h2>
  <div class="tbl"><table><thead><tr><th>출제 항목</th><th>핵심 개념·판단 기준</th><th>노트 문제</th></tr></thead><tbody>
    <tr><td>모델 유형 선택(ARIMA, DNN, LLM)<br><small>モデルタイプの選択（ARIMA、DNN、LLM など）</small></td><td>—</td><td>미출제</td></tr>
    <tr><td>제품 선택(AutoML, BigQuery ML, Agent Platform Pipelines)<br><small>プロダクトの選択（Agent Platform AutoML、BigQuery ML、Agent Platform Pipelines など）</small></td><td>—</td><td>미출제</td></tr>
    <tr><td>배포 전략 선택<br><small>デプロイ戦略の選択</small></td><td>—</td><td>미출제</td></tr>
    <tr><td>해석 가능성 요건이 있는 모델 기법<br><small>解釈可能性要件のあるモデル手法</small></td><td>—</td><td>미출제</td></tr>
  </tbody></table></div>
</section>

<section>
  <h2>3.2 モデルのトレーニング (모델 학습)</h2>
  <div class="tbl"><table><thead><tr><th>출제 항목</th><th>핵심 개념·판단 기준</th><th>노트 문제</th></tr></thead><tbody>
    <tr><td>Google Cloud(Cloud Storage, BigQuery)의 학습 데이터(표·텍스트·음성·이미지·동영상) 정리<br><small>Google Cloud（Cloud Storage、BigQuery など）上のトレーニング データ（表形式、テキスト、音声、画像、動画など）の整理</small></td><td>—</td><td>미출제</td></tr>
    <tr><td>여러 소스의 정형·비정형 데이터를 학습 파이프라인에 수집<br><small>さまざまなソースからの構造化データと非構造化データのトレーニング パイプラインへの取り込み</small></td><td>—</td><td>미출제</td></tr>
    <tr><td>여러 SDK로 학습(커스텀 트레이닝, GKE의 Kubeflow, AutoML, 표 형식 워크플로)<br><small>さまざまなソフトウェア開発キット（SDK）を使用したモデルのトレーニング（Agent Platform カスタム トレーニング、GKE 上の Kubeflow、Agent Platform AutoML、表形式ワークフローなど）と、Google Cloud でのトレーニングの整理</small></td><td>—</td><td>미출제</td></tr>
    <tr><td>학습 실패 문제 해결<br><small>ML モデルのトレーニング失敗のトラブルシューティング</small></td><td>—</td><td>미출제</td></tr>
    <tr><td>하이퍼파라미터 튜닝<br><small>ハイパーパラメータ チューニング</small></td><td>—</td><td>미출제</td></tr>
    <tr><td>기반 모델 미세 조정과 튜닝을 검토할 시점<br><small>Agent Platform や Model Garden の基盤モデルのファインチューニングと、チューニングを検討すべきタイミング</small></td><td>—</td><td>미출제</td></tr>
  </tbody></table></div>
</section>

<section>
  <h2>3.3 トレーニングに適したハードウェアの選択 (학습용 하드웨어 선택)</h2>
  <div class="tbl"><table><thead><tr><th>출제 항목</th><th>핵심 개념·판단 기준</th><th>노트 문제</th></tr></thead><tbody>
    <tr><td>컴퓨팅·가속기 옵션 평가(CPU, GPU, TPU)<br><small>コンピューティング オプションとアクセラレータ オプションの評価（CPU、GPU、TPU など）</small></td><td>—</td><td>미출제</td></tr>
    <tr><td>데이터 병렬·모델 병렬 분산 학습(GPU·TPU)<br><small>データ並列処理戦略とモデル並列処理戦略を用いた、GPU と TPU の分散トレーニングにおけるオプションの把握</small></td><td>—</td><td>미출제</td></tr>
  </tbody></table></div>
</section>
`
},
{
  id: "s4",
  title: "4. 모델 서빙·확장 (20%)",
  updated: "2026-11-14",
  related: [],
  html: `
<section>
  <h2>0. 이 섹션</h2>
  <p><b>モデルのサービングとスケーリング</b>(시험 내용의 약 20%). 문제를 반영할 때마다 아래 표의 “핵심 개념·판단 기준”을 채우고 노트 문제를 링크합니다.</p>
  <div class="tbl"><table><thead><tr><th>세트</th><th>문제 수</th><th>오답</th><th>찍음</th></tr></thead><tbody>
    <tr><td colspan="4">아직 문제가 없습니다</td></tr>
  </tbody></table></div>
</section>

<section>
  <h2>4.1 モデルのサービング (모델 서빙)</h2>
  <div class="tbl"><table><thead><tr><th>출제 항목</th><th>핵심 개념·판단 기준</th><th>노트 문제</th></tr></thead><tbody>
    <tr><td>배치·온라인 추론용 배포(Agent Platform, Model Garden, Cloud Run, GKE)<br><small>適切なサービス（Agent Platform、Model Garden、Cloud Run、GKE など）を使用した、バッチ推論とオンライン推論用のモデルのデプロイ</small></td><td>—</td><td>미출제</td></tr>
    <tr><td>사전 빌드·커스텀 컨테이너로 패키징·서빙(PyTorch, XGBoost)<br><small>ビルド済みコンテナとカスタム コンテナを使用した、さまざまなフレームワーク（PyTorch、XGBoost など）のモデルのパッケージ化とサービング</small></td><td>—</td><td>미출제</td></tr>
    <tr><td>Model Registry에서 모델 정리·버전 관리<br><small>Gemini Enterprise Agent Platform Model Registry でのモデルの整理とバージョン管理</small></td><td>—</td><td>미출제</td></tr>
    <tr><td>모델 버전 비교용 롤아웃 전략(A/B 테스트, 카나리)<br><small>モデル バージョンを比較するためのモデル ロールアウト戦略（A/B テストやカナリア デプロイなど）の実装</small></td><td>—</td><td>미출제</td></tr>
    <tr><td>추론 전처리·후처리<br><small>推論の前処理と後処理のためのソリューションの開発</small></td><td>—</td><td>미출제</td></tr>
  </tbody></table></div>
</section>

<section>
  <h2>4.2 オンライン モデル サービングのスケーリング (온라인 서빙 확장)</h2>
  <div class="tbl"><table><thead><tr><th>출제 항목</th><th>핵심 개념·판단 기준</th><th>노트 문제</th></tr></thead><tbody>
    <tr><td>Feature Store로 특징 관리·서빙<br><small>Agent Platform Feature Store を使用した特徴の管理とサービング</small></td><td>—</td><td>미출제</td></tr>
    <tr><td>공개·비공개 엔드포인트에 배포<br><small>パブリック エンドポイントとプライベート エンドポイントへのモデルのデプロイ</small></td><td>—</td><td>미출제</td></tr>
    <tr><td>하드웨어 선택(CPU, GPU, TPU, 엣지)<br><small>適切なハードウェア（CPU、GPU、TPU、エッジなど）の選択</small></td><td>—</td><td>미출제</td></tr>
    <tr><td>처리량 기반 서빙 백엔드 확장(Agent Platform Inference, 컨테이너 서빙)<br><small>スループットに基づいたサービング バックエンドのスケーリング（Gemini Enterprise Agent Platform Inference、コンテナ化されたサービングなど）</small></td><td>—</td><td>미출제</td></tr>
    <tr><td>프로덕션 학습·서빙용 모델 튜닝<br><small>本番環境でのトレーニングとサービングのための ML モデルのチューニング</small></td><td>—</td><td>미출제</td></tr>
  </tbody></table></div>
</section>
`
},
{
  id: "s5",
  title: "5. ML 파이프라인 자동화·오케스트레이션 (18%)",
  updated: "2026-11-14",
  related: [],
  html: `
<section>
  <h2>0. 이 섹션</h2>
  <p><b>ML パイプラインの自動化とオーケストレーション</b>(시험 내용의 약 18%). 문제를 반영할 때마다 아래 표의 “핵심 개념·판단 기준”을 채우고 노트 문제를 링크합니다.</p>
  <div class="tbl"><table><thead><tr><th>세트</th><th>문제 수</th><th>오답</th><th>찍음</th></tr></thead><tbody>
    <tr><td colspan="4">아직 문제가 없습니다</td></tr>
  </tbody></table></div>
</section>

<section>
  <h2>5.1 エンドツーエンドの ML パイプラインの開発 (엔드투엔드 ML 파이프라인 개발)</h2>
  <div class="tbl"><table><thead><tr><th>출제 항목</th><th>핵심 개념·판단 기준</th><th>노트 문제</th></tr></thead><tbody>
    <tr><td>데이터·모델 검증<br><small>データとモデルの検証</small></td><td>—</td><td>미출제</td></tr>
    <tr><td>파이프라인 구축·오케스트레이션(Agent Platform Pipelines, Managed Service for Apache Airflow, Ray on Agent Platform)<br><small>マネージド サービスまたは非マネージド サービスを使用し、テンプレートまたはカスタム ソリューションから行うパイプラインの構築とオーケストレーション（Agent Platform Pipelines、Managed Service for Apache Airflow、Ray on Gemini Enterprise Agent Platform など）</small></td><td>—</td><td>미출제</td></tr>
    <tr><td>학습·서빙 간 일관된 전처리<br><small>トレーニングとサービングの間で一貫したデータ前処理の保証</small></td><td>—</td><td>미출제</td></tr>
  </tbody></table></div>
</section>

<section>
  <h2>5.2 モデル再トレーニングの自動化 (모델 재학습 자동화)</h2>
  <div class="tbl"><table><thead><tr><th>출제 항목</th><th>핵심 개념·판단 기준</th><th>노트 문제</th></tr></thead><tbody>
    <tr><td>재학습 정책 결정<br><small>適切な再トレーニング ポリシーの決定</small></td><td>—</td><td>미출제</td></tr>
    <tr><td>CI/CD/CT 파이프라인(Cloud Build)으로 모델 배포<br><small>継続的インテグレーション、継続的デリバリー、継続的トレーニング（CI / CD / CT）パイプライン（Cloud Build など）を使用したモデルのデプロイ</small></td><td>—</td><td>미출제</td></tr>
  </tbody></table></div>
</section>
`
},
{
  id: "s6",
  title: "6. AI 솔루션 모니터링 (13%)",
  updated: "2026-11-14",
  related: [],
  html: `
<section>
  <h2>0. 이 섹션</h2>
  <p><b>AI ソリューションのモニタリング</b>(시험 내용의 약 13%). 문제를 반영할 때마다 아래 표의 “핵심 개념·판단 기준”을 채우고 노트 문제를 링크합니다.</p>
  <div class="tbl"><table><thead><tr><th>세트</th><th>문제 수</th><th>오답</th><th>찍음</th></tr></thead><tbody>
    <tr><td colspan="4">아직 문제가 없습니다</td></tr>
  </tbody></table></div>
</section>

<section>
  <h2>6.1 AI ソリューションに対するリスクの特定 (AI 솔루션 위험 식별)</h2>
  <div class="tbl"><table><thead><tr><th>출제 항목</th><th>핵심 개념·판단 기준</th><th>노트 문제</th></tr></thead><tbody>
    <tr><td>보안 도구(정규식, 안전 필터, Model Armor)로 데이터 유출·악성 프롬프트·민감 데이터 공유 방지<br><small>適切なセキュリティ ツール（正規表現、安全フィルタ、Model Armor など）を使用し、データやモデルの意図しない悪用や漏洩（データの引き出し、悪意のあるプロンプト、LLM とのセンシティブ データの共有など）を防ぐ、安全な AI システムの構築</small></td><td>—</td><td>미출제</td></tr>
    <tr><td>책임 있는 AI 준수(편향 모니터링)<br><small>責任ある AI への取り組みへの準拠（バイアスのモニタリングなど）</small></td><td>—</td><td>미출제</td></tr>
    <tr><td>모델 설명 가능성<br><small>Agent Platform におけるモデルの説明可能性（Agent Platform Inference など）</small></td><td>—</td><td>미출제</td></tr>
  </tbody></table></div>
</section>

<section>
  <h2>6.2 AI ソリューションのモニタリング、テスト、トラブルシューティング (AI 솔루션 모니터링·테스트·문제 해결)</h2>
  <div class="tbl"><table><thead><tr><th>출제 항목</th><th>핵심 개념·판단 기준</th><th>노트 문제</th></tr></thead><tbody>
    <tr><td>Model Monitoring으로 프로덕션 모델의 지속 평가 지표<br><small>Gemini Enterprise Agent Platform における Model Monitoring の設定と活用による、本番環境モデルの継続評価指標の確立</small></td><td>—</td><td>미출제</td></tr>
    <tr><td>학습-서빙 스큐·데이터 드리프트·콘셉트 드리프트·특징 기여도 드리프트 모니터링<br><small>一般的な問題（トレーニング サービング スキュー、データドリフト、コンセプト ドリフト、特徴アトリビューションのドリフトなど）のモニタリング</small></td><td>—</td><td>미출제</td></tr>
    <tr><td>생성 AI 모니터링·테스트·평가<br><small>生成 AI ソリューションのモニタリング、テスト、評価</small></td><td>—</td><td>미출제</td></tr>
  </tbody></table></div>
</section>
`
},
{
  id: "ja",
  title: "일본어 용어집 (시험 표기)",
  updated: "2026-11-14",
  related: [],
  html: `
<section>
  <h2>0. 읽는 법</h2>
  <p>이 표의 일본어 표기는 PMLE 일본어 시험 가이드와 Google Cloud 일본어 공식 문서(<code>docs.cloud.google.com/...?hl=ja</code>)에서 확인한 것만 씁니다. 확인하지 못한 표기는 “(확인 필요)”로 표시합니다. 문제를 반영하면서 새 용어를 추가합니다.</p>
  <p>PDE·PCA 노트의 용어집에 BigQuery ML·Feature Store·Model Registry 등의 일본어 표기가 이미 있습니다.</p>
</section>

<section>
  <h2>1. 시험 가이드에 나온 용어</h2>
  <div class="tbl"><table><thead><tr><th>영어</th><th>일본어 시험 표기</th><th>뜻·주의</th></tr></thead><tbody>
    <tr><td class="strong">low-code AI</td><td>ローコード AI ソリューション</td><td>섹션 1 이름. BigQuery ML·AutoML·AI API·기반 모델</td></tr>
    <tr><td class="strong">foundation model</td><td><mark>基盤モデル</mark></td><td>Gemini, Imagen, Veo 등. Model Garden에서 고름</td></tr>
    <tr><td class="strong">fine-tuning / tuning</td><td><mark>ファインチューニング</mark> / チューニング</td><td>“BigQuery を使用した Gemini モデルのファインチューニング”(1.1), 튜닝 시점(3.2)</td></tr>
    <tr><td class="strong">feature engineering / feature selection</td><td><mark>特徴量エンジニアリング</mark> / <mark>特徴量選択</mark></td><td>BigQuery ML로 수행(1.1). Feature Store 쪽은 “特徴量の作成と統合”(2.1), “特徴の管理とサービング”(4.2)</td></tr>
    <tr><td class="strong">classification / regression / forecasting / clustering</td><td><mark>分類</mark> / <mark>回帰</mark> / <mark>予測</mark> / <mark>クラスタリング</mark></td><td>주의: 가이드는 시계열 예측(forecasting)과 예측 생성(prediction) 모두 “予測”로 씀 → 문맥으로 구분</td></tr>
    <tr><td class="strong">industry-specific APIs</td><td><mark>業界固有の API</mark></td><td>Document AI API, Vision API, Translate API</td></tr>
    <tr><td class="strong">Model as a Service (MaaS)</td><td>Model Garden の<mark>サービスとしてのモデル</mark></td><td>Model Garden에서 서버 관리 없이 API로 쓰는 모델</td></tr>
    <tr><td class="strong">personally identifiable information (PII)</td><td><mark>個人を特定できる情報 [PII]</mark> / 機密情報</td><td>데이터 프라이버시(2.1). 비식별화는 Sensitive Data Protection</td></tr>
    <tr><td class="strong">in-memory Python framework</td><td>インメモリ Python フレームワーク</td><td>pandas 등. 작은 데이터 전처리(2.1)</td></tr>
    <tr><td class="strong">notebook / prototyping</td><td><mark>ノートブック</mark> / <mark>プロトタイピング</mark></td><td>Agent Platform Workbench, Colab Enterprise(2.2)</td></tr>
    <tr><td class="strong">ML experiments (tracking)</td><td><mark>ML テスト</mark>のトラッキングと実行</td><td>가이드 2.3 표기. 여기서 “テスト”는 소프트웨어 테스트가 아니라 <b>실험(experiment)</b></td></tr>
    <tr><td class="strong">LLM-as-a-Judge</td><td>LLM-as-a-Judge(영어 그대로)</td><td>LLM이 다른 모델 출력을 채점하는 생성 AI 평가(2.3)</td></tr>
    <tr><td class="strong">artifact / version / lineage</td><td>アーティファクト / バージョン / <mark>リネージ</mark></td><td>Experiments, ML Metadata로 추적(2.3)</td></tr>
    <tr><td class="strong">interpretability / explainability</td><td><mark>解釈可能性</mark>(3.1) / <mark>説明可能性</mark>(6.1)</td><td>해석 가능성 = 사람이 이해하기 쉬운 모델을 고르는 문제, 설명 가능성 = 예측 근거(특징 기여도)를 보여 주는 기능</td></tr>
    <tr><td class="strong">hyperparameter tuning</td><td><mark>ハイパーパラメータ チューニング</mark></td><td>3.2</td></tr>
    <tr><td class="strong">tabular workflows</td><td><mark>表形式ワークフロー</mark></td><td>AutoML 표 형식 학습 파이프라인(3.2)</td></tr>
    <tr><td class="strong">custom training</td><td>Agent Platform <mark>カスタム トレーニング</mark></td><td>3.2</td></tr>
    <tr><td class="strong">data parallelism / model parallelism</td><td><mark>データ並列処理</mark> / <mark>モデル並列処理</mark></td><td>분산 학습 전략(3.3)</td></tr>
    <tr><td class="strong">accelerator (GPU, TPU)</td><td><mark>アクセラレータ</mark></td><td>3.3, 4.2</td></tr>
    <tr><td class="strong">batch inference / online inference</td><td><mark>バッチ推論</mark> / <mark>オンライン推論</mark></td><td>4.1</td></tr>
    <tr><td class="strong">prebuilt container / custom container</td><td><mark>ビルド済みコンテナ</mark> / <mark>カスタム コンテナ</mark></td><td>4.1</td></tr>
    <tr><td class="strong">A/B testing / canary deployment</td><td>A/B テスト / <mark>カナリア デプロイ</mark></td><td>모델 롤아웃 전략(4.1)</td></tr>
    <tr><td class="strong">pre-processing / post-processing</td><td>推論の<mark>前処理</mark>と<mark>後処理</mark></td><td>4.1</td></tr>
    <tr><td class="strong">public endpoint / private endpoint</td><td><mark>パブリック エンドポイント</mark> / <mark>プライベート エンドポイント</mark></td><td>4.2</td></tr>
    <tr><td class="strong">edge</td><td><mark>エッジ</mark></td><td>하드웨어 선택(4.2)</td></tr>
    <tr><td class="strong">data and model validation</td><td><mark>データとモデルの検証</mark></td><td>5.1</td></tr>
    <tr><td class="strong">consistent preprocessing between training and serving</td><td>トレーニングとサービングの間で<mark>一貫したデータ前処理</mark></td><td>5.1. 어긋나면 학습-서빙 스큐</td></tr>
    <tr><td class="strong">retraining policy</td><td><mark>再トレーニング ポリシー</mark></td><td>5.2</td></tr>
    <tr><td class="strong">CI / CD / CT</td><td>継続的インテグレーション、継続的デリバリー、<mark>継続的トレーニング（CT）</mark></td><td>5.2</td></tr>
    <tr><td class="strong">safety filter / regular expression</td><td><mark>安全フィルタ</mark> / <mark>正規表現</mark></td><td>6.1. Model Armor와 함께</td></tr>
    <tr><td class="strong">data exfiltration / malicious prompt</td><td><mark>データの引き出し</mark> / <mark>悪意のあるプロンプト</mark> / センシティブ データの共有</td><td>6.1</td></tr>
    <tr><td class="strong">responsible AI / bias</td><td><mark>責任ある AI</mark> / <mark>バイアス</mark>のモニタリング</td><td>6.1</td></tr>
    <tr><td class="strong">training-serving skew</td><td><mark>トレーニング サービング スキュー</mark></td><td>6.2(PDE 문서 표기는 トレーニング・サービングスキュー)</td></tr>
    <tr><td class="strong">data drift / concept drift / feature attribution drift</td><td><mark>データドリフト</mark> / <mark>コンセプト ドリフト</mark> / <mark>特徴アトリビューションのドリフト</mark></td><td>6.2</td></tr>
    <tr><td class="strong">prompt engineering / context engineering</td><td>プロンプト エンジニアリング / コンテキスト エンジニアリング</td><td>가이드 머리말</td></tr>
    <tr><td class="strong">generative AI (GenAI)</td><td><mark>生成 AI</mark>（GenAI） / 予測 AI</td><td>“予測 AI ソリューションと生成 AI ソリューションの評価”(2.3)</td></tr>
  </tbody></table></div>
</section>

<section>
  <h2>2. 이름이 바뀐 서비스</h2>
  <div class="tbl"><table><thead><tr><th>현재 이름</th><th>옛 이름</th><th>시험에서 보이는 형태·주의</th></tr></thead><tbody>
    <tr><td class="strong">Gemini Enterprise Agent Platform (Agent Platform)</td><td>Vertex AI</td><td>시험 가이드가 새 이름으로 표기. 모의고사·옛 문서의 “Vertex AI ○○” → “Agent Platform ○○”</td></tr>
    <tr><td class="strong">Agent Platform AutoML</td><td>Vertex AI AutoML</td><td>1.1, 3.1, 3.2</td></tr>
    <tr><td class="strong">Agent Platform Workbench</td><td>Vertex AI Workbench</td><td>2.2. Colab Enterprise는 이름 그대로</td></tr>
    <tr><td class="strong">Agent Platform Pipelines</td><td>Vertex AI Pipelines</td><td>2.3, 3.1, 5.1. Kubeflow Pipelines(KFP)·TFX 파이프라인 실행</td></tr>
    <tr><td class="strong">Experiments / ML Metadata</td><td>Vertex AI Experiments / Vertex ML Metadata</td><td>2.3</td></tr>
    <tr><td class="strong">Agent Platform Feature Store</td><td>Vertex AI Feature Store</td><td>2.1, 4.2. 새 구조는 BigQuery가 오프라인 스토어(PDE 노트 참고)</td></tr>
    <tr><td class="strong">Model Registry</td><td>Vertex AI Model Registry</td><td>4.1</td></tr>
    <tr><td class="strong">Model Monitoring</td><td>Vertex AI Model Monitoring</td><td>6.2</td></tr>
    <tr><td class="strong">Gemini Enterprise Agent Platform Inference</td><td>Vertex AI Prediction(예측)으로 보임(확인 필요)</td><td>4.2, 6.1</td></tr>
    <tr><td class="strong">Ray on Gemini Enterprise Agent Platform</td><td>Ray on Vertex AI</td><td>5.1</td></tr>
    <tr><td class="strong">Managed Service for Apache Airflow</td><td>Cloud Composer</td><td>5.1. 일본어 문서 “Cloud Composer は Managed Service for Apache Airflow に進化します”</td></tr>
    <tr><td class="strong">Managed Service for Apache Spark</td><td>Dataproc</td><td>가이드 2.1은 “Apache Spark”로만 표기</td></tr>
    <tr><td class="strong">Embeddings API / Vector Search / RAG Engine</td><td>Vertex AI Embeddings / Vertex AI Vector Search / Vertex AI RAG Engine</td><td>가이드에 직접 이름은 없음. 생성 AI 앱 문제에 나올 수 있음</td></tr>
    <tr><td class="strong">Sensitive Data Protection</td><td>Cloud DLP</td><td>PII 처리(2.1)</td></tr>
    <tr><td class="strong">Gemini</td><td>PaLM 2 / PaLM API</td><td>보기에 PaLM이 보이면 옛 문제</td></tr>
    <tr><td class="strong">Looker Studio</td><td>Data Studio / Google データポータル</td><td>대시보드</td></tr>
  </tbody></table></div>
</section>
`
}
];
