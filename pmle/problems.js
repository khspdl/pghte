/* PMLE 문제 데이터: 새 문제는 배열 끝에 추가 (id 순서 유지)
   id 규칙: 1세트는 문제 번호 그대로(1~99), N세트(N≥2)는 N*100 + 번호 (예: 2세트 5번 → 205), 공식 모의고사는 900 + 번호
   question, options, explanation은 {en: 원문, ko: 한국어 번역} 형태
   section은 시험 가이드 소절 번호("3.2", 여러 개면 ["1.1","4.1"]) */

/* 모의고사 세트 목록. 새 세트를 시작하면 여기에 추가 */
var SETS = [
  { id: 1, name: "1세트" }
];

var PROBLEMS = [
{
  id: 1,
  title: "BigQuery에 쌓인 3년치 일별 매출로 90일 매장별 예측, SQL만·공휴일 효과·계절성 → BigQuery ML ARIMA_PLUS + ML.FORECAST",
  added: "2026-11-27",
  tags: ["BigQuery ML", "ARIMA_PLUS", "ML.FORECAST", "시계열 예측", "공휴일 효과", "로우코드"],
  mine: "D",
  correct: "D",
  section: "1.1",
  freq: "high",
  freqNote: "시험 가이드 1.1의 “BigQuery ML … 予測 … の構築”, “BigQuery ML を使用した予測の生成”, 3.1의 “モデルタイプの選択（ARIMA…）”에 바로 해당합니다. <b>“SQL만 + 시계열 + 계절성·공휴일 → ARIMA_PLUS, 예측값은 ML.FORECAST”</b>는 BigQuery ML 문제의 기본 패턴입니다.",
  question: {
    en: "小売企業のデータ アナリストが、過去 3 年分の日次売上データを BigQuery に蓄積しています。今後 90 日間の店舗別売上を予測したいのですが、チームに Python の実装経験者はおらず、SQL のみで完結させたいと考えています。祝日効果と季節性も考慮する必要があります。最も適したアプローチはどれですか。",
    ko: "소매 기업의 데이터 분석가가 과거 3년분의 일별 매출 데이터를 BigQuery에 축적하고 있습니다. 앞으로 90일간의 매장별 매출을 예측하고 싶지만, 팀에 Python 구현 경험자가 없어 SQL만으로 끝내고 싶어 합니다. 공휴일 효과와 계절성도 고려해야 합니다. 가장 적합한 접근 방식은 무엇입니까?"
  },
  options: {
    A: { en: "BigQuery ML で LINEAR_REG モデルを作成し、日付を数値特徴量として与える", ko: "BigQuery ML에서 LINEAR_REG 모델을 만들고, 날짜를 수치 특징량으로 준다" },
    B: { en: "Agent Platform のカスタム トレーニングで PyTorch の LSTM モデルを実装する", ko: "Agent Platform의 커스텀 트레이닝으로 PyTorch LSTM 모델을 구현한다" },
    C: { en: "Agent Platform Workbench でノートブックを作成し、statsmodels で SARIMA を実装する", ko: "Agent Platform Workbench에서 노트북을 만들고, statsmodels로 SARIMA를 구현한다" },
    D: { en: "BigQuery ML で ARIMA_PLUS モデルを作成し、ML.FORECAST で予測する", ko: "BigQuery ML에서 ARIMA_PLUS 모델을 만들고, ML.FORECAST로 예측한다" }
  },
  explanation: {
    A: { en: "線形回帰は時系列の季節性や自己相関を明示的に扱えず、祝日効果のモデリング機能もありません。日付を単純な数値にすると周期性を捉えられません。", ko: "선형 회귀는 시계열의 계절성이나 자기 상관을 명시적으로 다룰 수 없고, 공휴일 효과를 모델링하는 기능도 없습니다. 날짜를 단순한 수치로 만들면 주기성을 포착할 수 없습니다." },
    B: { en: "技術的には可能ですが、Python の実装経験者がいないという制約に反します。ローコードで要件を満たせる選択肢がある以上、最適とは言えません。", ko: "기술적으로는 가능하지만, Python 구현 경험자가 없다는 제약에 어긋납니다. 로우코드로 요건을 충족할 수 있는 선택지가 있는 이상, 최적이라고 할 수 없습니다." },
    C: { en: "ノートブックでの Python 実装が必要になり、SQL のみで完結させたいという要件を満たしません。", ko: "노트북에서 Python 구현이 필요해져, SQL만으로 끝내고 싶다는 요건을 충족하지 않습니다." },
    D: { en: "正解です。ARIMA_PLUS は SQL だけで時系列予測モデルを構築でき、季節性の自動検出や休日効果のモデリング（holiday_region オプション）に対応しています。", ko: "정답입니다. ARIMA_PLUS는 SQL만으로 시계열 예측 모델을 구축할 수 있고, 계절성 자동 감지와 공휴일 효과 모델링(holiday_region 옵션)을 지원합니다." }
  },
  explanationAll: {
    en: "BigQuery ML の ARIMA_PLUS は、SQL の CREATE MODEL 文だけで時系列予測モデルを作成できます。トレンドと季節性の自動分解、外れ値の処理、holiday_region オプションによる祝日効果のモデリングを備えており、予測は ML.FORECAST で取得します。カスタム トレーニングやノートブックでの Python 実装は、SQL のみという制約に反します。線形回帰は時系列特有の構造を捉えられません。",
    ko: "BigQuery ML의 ARIMA_PLUS는 SQL의 CREATE MODEL 문만으로 시계열 예측 모델을 만들 수 있습니다. 추세와 계절성의 자동 분해, 이상값 처리, holiday_region 옵션을 통한 공휴일 효과 모델링을 갖추고 있으며, 예측값은 ML.FORECAST로 얻습니다. 커스텀 트레이닝이나 노트북에서의 Python 구현은 SQL만이라는 제약에 어긋납니다. 선형 회귀는 시계열 특유의 구조를 포착할 수 없습니다."
  },
  refs: [],
  keywords: [
    ["過去 3 年分の日次売上 / 今後 90 日間を予測", "<mark>시계열 예측</mark>(forecasting). 일반 회귀가 아니라 시계열 모델", "A 약화"],
    ["SQL のみで完結 / Python の実装経験者なし", "<mark>BigQuery ML</mark>(SQL로 학습·예측)", "B·C 제외"],
    ["祝日効果と季節性", "ARIMA_PLUS의 <mark>holiday_region</mark>·계절성 자동 감지", "A 제외"],
    ["店舗別", "여러 시계열을 한 번에: <code>TIME_SERIES_ID_COL</code>(매장 ID)", "D"],
    ["ML.FORECAST", "학습된 시계열 모델로 미래 값(+예측 구간)을 생성하는 함수", "D가 정답"]
  ],
  keywordNote: "일본어 표기: 時系列予測 = time series forecasting, 祝日効果 = holiday effect, 季節性 = seasonality, 外れ値 = outlier, 自己相関 = autocorrelation. 모델 타입(ARIMA_PLUS, LINEAR_REG)·함수(ML.FORECAST)·옵션(holiday_region)은 일본어 문서에서도 영어 그대로. 이 문제의 “予測”는 forecasting(시계열 예측) 쪽입니다.",
  whyWrong: "",
  whyRight: "<p>요건 세 가지가 답을 정합니다.</p>\n<div class=\"tbl\"><table><thead><tr><th>요건</th><th>필요한 것</th><th>ARIMA_PLUS</th></tr></thead><tbody>\n<tr><td>SQL만(Python 경험자 없음)</td><td>BigQuery 안에서 학습·예측</td><td><code>CREATE MODEL</code> + <code>ML.FORECAST</code>로 끝</td></tr>\n<tr><td>90일 앞 예측</td><td>시계열 모델</td><td>추세·계절성 자동 분해, <code>HORIZON</code> 지정</td></tr>\n<tr><td>공휴일 효과·계절성</td><td>공휴일·주기 처리</td><td><code>HOLIDAY_REGION</code> 옵션, 일·주·연 계절성 자동 감지</td></tr>\n</tbody></table></div>\n<pre><code>CREATE OR REPLACE MODEL `ds.sales_forecast`\nOPTIONS(\n  model_type = 'ARIMA_PLUS',\n  time_series_timestamp_col = 'date',\n  time_series_data_col = 'sales',\n  time_series_id_col = 'store_id',   -- 매장별 시계열\n  holiday_region = 'JP',             -- 공휴일 효과\n  horizon = 90\n) AS\nSELECT date, store_id, sales FROM `ds.daily_sales`;\n\nSELECT * FROM ML.FORECAST(MODEL `ds.sales_forecast`,\n  STRUCT(90 AS horizon, 0.9 AS confidence_level));</code></pre>\n<p><code>time_series_id_col</code>로 <mark>매장별 시계열을 모델 하나로</mark> 학습할 수 있어서 “店舗別” 요건도 SQL 한 문장으로 처리됩니다.</p>",
  others: {
    A: "LINEAR_REG는 BigQuery ML이라 SQL 요건은 맞지만, 날짜를 숫자로 넣으면 <b>요일·연간 주기와 공휴일</b>을 잡지 못합니다. 시계열 예측에는 시계열 모델(ARIMA_PLUS, ARIMA_PLUS_XREG)을 씁니다.",
    B: "LSTM 커스텀 트레이닝은 Python 구현이 필요해 제약 위반입니다. 로우코드로 되는 방법이 있으면 커스텀 트레이닝은 과합니다.",
    C: "SARIMA 자체는 계절성을 다루는 모델이지만, Workbench 노트북에서 Python(statsmodels)으로 구현해야 하므로 “SQL만” 요건을 어깁니다. ARIMA_PLUS가 SARIMA 계열 처리를 SQL로 대신해 줍니다."
  },
  rules: [
    ["SQL만 + 시계열 예측(계절성·공휴일)", "BigQuery ML ARIMA_PLUS → ML.FORECAST"],
    ["시계열 예측 + 외부 변수(가격·프로모션 등)", "ARIMA_PLUS_XREG"],
    ["여러 시계열(매장별·상품별)을 한 번에", "TIME_SERIES_ID_COL 지정"],
    ["Python 경험 없음 / 로우코드 요구", "커스텀 트레이닝·노트북 구현 선택지는 제외"],
    ["날짜를 수치 특징량으로 넣는 선형 회귀", "오답. 주기성·공휴일을 못 잡음"]
  ],
  oneLine: "SQL만으로 시계열 예측 + 계절성·공휴일 = BigQuery ML ARIMA_PLUS, 예측값은 ML.FORECAST.",
  tip: "ARIMA_PLUS로 만든 모델은 <code>ML.EXPLAIN_FORECAST</code>로 추세·계절성·공휴일 효과를 성분별로 나눠 볼 수 있어, 예측이 왜 그렇게 나왔는지 설명할 때 유용합니다. 이상치 탐지는 <code>ML.DETECT_ANOMALIES</code>로 같은 모델을 재사용합니다. 시계열이 수천 개를 넘으면 학습 시간이 늘어나므로 <code>AUTO_ARIMA_MAX_ORDER</code>를 낮추거나 최근 TimesFM 기반 <code>AI.FORECAST</code>(학습 없이 예측) 같은 선택지도 검토합니다."
},
{
  id: 2,
  title: "BigQuery ML에서 ML.QUANTILE_BUCKETIZE·ML.FEATURE_CROSS 전처리를 추론 때 빠뜨리지 않게 → CREATE MODEL의 TRANSFORM 절에 기술",
  added: "2026-11-27",
  tags: ["BigQuery ML", "TRANSFORM 절", "특징량 엔지니어링", "학습-서빙 스큐", "ML.QUANTILE_BUCKETIZE", "ML.FEATURE_CROSS"],
  mine: "A",
  correct: "A",
  section: "1.1",
  freq: "high",
  freqNote: "시험 가이드 1.1 “BigQuery ML を使用した特徴量エンジニアリングまたは特徴量選択の実行”에 그대로 해당하고, 학습-서빙 일관성(6.2 トレーニング サービング スキュー)과도 이어집니다. <b>“BigQuery ML 전처리를 추론에도 똑같이 → TRANSFORM 절”</b>을 가져가면 됩니다.",
  question: {
    en: "データ サイエンス チームが BigQuery ML でロジスティック回帰モデルを構築しています。連続値の年齢を ML.QUANTILE_BUCKETIZE でビン分割し、地域と商品カテゴリを ML.FEATURE_CROSS で交差させたいのですが、推論時に前処理の実装漏れが起きることを防ぎたいと考えています。最も適した実装方法はどれですか。",
    ko: "데이터 사이언스 팀이 BigQuery ML로 로지스틱 회귀 모델을 구축하고 있습니다. 연속값인 나이를 ML.QUANTILE_BUCKETIZE로 구간 분할하고, 지역과 상품 카테고리를 ML.FEATURE_CROSS로 교차시키고 싶은데, 추론 시 전처리 구현 누락이 일어나는 것을 막고 싶습니다. 가장 적합한 구현 방법은 무엇입니까?"
  },
  options: {
    A: { en: "CREATE MODEL 文の TRANSFORM 句に前処理を記述する", ko: "CREATE MODEL 문의 TRANSFORM 절에 전처리를 기술한다" },
    B: { en: "前処理済みのビューを作成し、トレーニングと推論の両方でそのビューを参照する", ko: "전처리된 뷰를 만들고, 학습과 추론 양쪽에서 그 뷰를 참조한다" },
    C: { en: "トレーニング用クエリの SELECT 句で ML.QUANTILE_BUCKETIZE と ML.FEATURE_CROSS を適用する", ko: "학습용 쿼리의 SELECT 절에서 ML.QUANTILE_BUCKETIZE와 ML.FEATURE_CROSS를 적용한다" },
    D: { en: "Dataflow パイプラインで前処理を行い、結果を別テーブルに書き出す", ko: "Dataflow 파이프라인에서 전처리를 하고, 결과를 별도 테이블에 써 낸다" }
  },
  explanation: {
    A: { en: "正解です。TRANSFORM 句に書いた前処理はモデルに保存され、ML.PREDICT の実行時に自動的に同じ変換が適用されるため、トレーニングと推論の不整合を構造的に防げます。", ko: "정답입니다. TRANSFORM 절에 쓴 전처리는 모델에 저장되고, ML.PREDICT 실행 시 자동으로 같은 변환이 적용되므로, 학습과 추론의 불일치를 구조적으로 막을 수 있습니다." },
    B: { en: "運用上は有効な手段ですが、ビューの参照漏れは依然として起こり得ます。モデル自体に前処理を埋め込む方法の方が確実です。", ko: "운영상으로는 유효한 수단이지만, 뷰 참조 누락은 여전히 일어날 수 있습니다. 모델 자체에 전처리를 넣는 방법이 더 확실합니다." },
    C: { en: "SELECT 句で変換すると、その変換はモデルに保存されません。推論時に同じ変換を手動で書く必要があり、実装漏れのリスクが残ります。", ko: "SELECT 절에서 변환하면 그 변환은 모델에 저장되지 않습니다. 추론 시 같은 변환을 수동으로 써야 하므로, 구현 누락 위험이 남습니다." },
    D: { en: "SQL 中心のワークフローに外部の処理系を持ち込むうえ、推論時にも同じパイプラインを通す必要があり、不整合のリスクが解消されません。", ko: "SQL 중심 워크플로에 외부 처리 시스템을 끌어들이는 데다, 추론 시에도 같은 파이프라인을 거쳐야 해서 불일치 위험이 해소되지 않습니다." }
  },
  explanationAll: {
    en: "BigQuery ML の TRANSFORM 句は、前処理をモデル定義の一部として保存する仕組みです。ML.PREDICT でモデルを呼び出すと、トレーニング時とまったく同じ前処理が自動的に適用されるため、トレーニング / サービング スキューを構造的に防げます。SELECT 句での変換やビュー、外部パイプラインは、推論側で同じ処理を再現する責任が残ります。なお数値列の標準化と非数値列のワンホット エンコーディングは BigQuery ML が自動で行うため、TRANSFORM 句に書く必要があるのはビニングや特徴量クロスのような明示的な変換です。",
    ko: "BigQuery ML의 TRANSFORM 절은 전처리를 모델 정의의 일부로 저장하는 구조입니다. ML.PREDICT로 모델을 호출하면 학습 때와 완전히 같은 전처리가 자동으로 적용되므로, 학습/서빙 스큐를 구조적으로 막을 수 있습니다. SELECT 절에서의 변환이나 뷰, 외부 파이프라인은 추론 쪽에서 같은 처리를 재현할 책임이 남습니다. 덧붙여 수치 열의 표준화와 비수치 열의 원-핫 인코딩은 BigQuery ML이 자동으로 하므로, TRANSFORM 절에 써야 하는 것은 비닝이나 특징량 교차 같은 명시적인 변환입니다."
  },
  refs: [],
  keywords: [
    ["推論時に前処理の実装漏れを防ぐ", "학습-서빙 스큐 방지 → 전처리를 <mark>모델 안에 저장</mark>", "A"],
    ["ML.QUANTILE_BUCKETIZE / ML.FEATURE_CROSS", "BigQuery ML 수동 전처리 함수(분위수 비닝, 특징량 교차)", "—"],
    ["TRANSFORM 句", "전처리가 모델에 저장 → <code>ML.PREDICT</code>에서 자동 재적용", "A가 정답"],
    ["SELECT 句で適用 / ビュー", "모델 밖의 전처리 → 추론 쪽에서 재현 책임이 남음", "B·C 제외"],
    ["Dataflow パイプライン", "외부 처리계 추가, 추론에도 같은 파이프라인 필요", "D 제외"]
  ],
  keywordNote: "일본어 표기: TRANSFORM 句 = TRANSFORM 절, ビン分割/ビニング = 비닝(bucketize), 特徴量クロス = feature cross, 標準化 = standardization, ワンホット エンコーディング = one-hot encoding, トレーニング / サービング スキュー = training-serving skew(가이드 6.2 표기는 トレーニング サービング スキュー).",
  whyWrong: "",
  whyRight: "<p>핵심은 “추론할 때 전처리를 <b>사람이 다시 쓰지 않아도 되게</b>” 만드는 것입니다. BigQuery ML에서는 <mark>TRANSFORM 절</mark>에 쓴 전처리가 모델의 일부로 저장되고, <code>ML.PREDICT</code>·<code>ML.EVALUATE</code>가 원본 열을 받아 같은 변환을 자동으로 적용합니다.</p>\n<pre><code>CREATE OR REPLACE MODEL `ds.purchase_model`\nTRANSFORM(\n  ML.QUANTILE_BUCKETIZE(age, 5) OVER () AS age_bucket,\n  ML.FEATURE_CROSS(STRUCT(region, category)) AS region_x_category,\n  label\n)\nOPTIONS(model_type = 'LOGISTIC_REG', input_label_cols = ['label']) AS\nSELECT age, region, category, label FROM `ds.train`;\n\n-- 추론: 원본 열만 넘기면 같은 전처리가 자동 적용\nSELECT * FROM ML.PREDICT(MODEL `ds.purchase_model`,\n  (SELECT age, region, category FROM `ds.new_customers`));</code></pre>\n<p>분위수 경계(어디서 나눌지)도 <b>학습 데이터 기준으로 모델에 저장</b>되므로, 추론 데이터의 분포가 달라도 같은 경계로 나뉩니다. SELECT 절에서 <code>OVER ()</code>로 계산하면 추론 데이터로 경계를 다시 계산해 버려 스큐가 생깁니다.</p>",
  others: {
    B: "뷰는 학습·추론 양쪽에서 같은 SQL을 쓰게 도와주지만, 추론하는 쪽이 뷰를 거치지 않으면 그만입니다. 또 분위수 경계를 뷰 안에서 계산하면 대상 데이터마다 경계가 달라질 수 있습니다. 모델에 넣는 TRANSFORM이 더 확실합니다.",
    C: "SELECT 절 변환은 모델에 저장되지 않아 추론 쿼리에 같은 변환을 손으로 다시 써야 합니다. 문제가 막고 싶은 “実装漏れ(구현 누락)” 그대로입니다.",
    D: "SQL로 끝나는 작업에 Dataflow를 추가하면 운영 부담만 늘고, 추론 데이터도 같은 파이프라인을 통과시켜야 해서 누락 위험이 그대로입니다."
  },
  rules: [
    ["BigQuery ML 전처리를 추론에도 똑같이 적용", "CREATE MODEL의 TRANSFORM 절"],
    ["수치 표준화·범주형 원-핫 인코딩", "BigQuery ML이 자동(직접 쓸 필요 없음)"],
    ["비닝·특징량 교차·스케일링을 명시적으로", "ML.QUANTILE_BUCKETIZE, ML.BUCKETIZE, ML.FEATURE_CROSS 등을 TRANSFORM에"],
    ["SELECT 절·뷰·외부 파이프라인에서 전처리", "추론 쪽 재현 책임이 남음(스큐 위험)"],
    ["Agent Platform 학습에서 같은 목적", "전처리를 모델·파이프라인에 포함(TF Transform 등)하거나 Feature Store로 일관성 확보"]
  ],
  oneLine: "BigQuery ML에서 학습-서빙 전처리를 일치시키려면 TRANSFORM 절. 전처리가 모델에 저장되고 ML.PREDICT가 자동 적용한다.",
  tip: "TRANSFORM으로 만든 모델을 Agent Platform 엔드포인트나 다른 환경으로 내보낼 때(<code>EXPORT MODEL</code>)도 전처리가 함께 들어갑니다. 반대로 <code>ML.FEATURE_INFO</code>나 <code>ML.WEIGHTS</code>로 볼 때는 TRANSFORM 출력 열(예: age_bucket) 기준으로 나오므로, 특징 중요도를 해석할 때 원본 열 이름과 다를 수 있다는 점을 알아 두면 좋습니다."
},
{
  id: 3,
  title: "스캔한 보험금 청구서 PDF(여러 레이아웃·손글씨)에서 항목 추출, 학습 없이 → Document AI 폼 파서·특화형 프로세서",
  added: "2026-11-27",
  tags: ["Document AI", "폼 파서", "특화형 프로세서", "OCR", "Vision API", "업계 특화 API"],
  mine: "C",
  correct: "C",
  guess: true,
  section: "1.2",
  freq: "high",
  freqNote: "시험 가이드 1.2에 “業界固有の API（Document AI API、Vision API、Translate API など）”로 이름이 직접 나옵니다. <b>“문서에서 항목(키-값) 추출 = Document AI, 글자만 읽기 = Vision API OCR”</b> 구분을 가져가면 됩니다.",
  question: {
    en: "保険会社が、スキャンした保険金請求書（PDF）から契約番号・請求金額・請求日といった項目を自動抽出したいと考えています。帳票のレイアウトは複数のパターンがあり、手書きの記入欄も含まれます。開発リソースは限られており、モデルのトレーニングは避けたいです。最初に検討すべきサービスはどれですか。",
    ko: "보험 회사가 스캔한 보험금 청구서(PDF)에서 계약 번호·청구 금액·청구일 같은 항목을 자동 추출하려고 합니다. 서식의 레이아웃은 여러 패턴이 있고, 손글씨 기입란도 포함됩니다. 개발 리소스는 한정되어 있고, 모델 학습은 피하고 싶습니다. 가장 먼저 검토해야 할 서비스는 무엇입니까?"
  },
  options: {
    A: { en: "Cloud Vision API の DOCUMENT_TEXT_DETECTION で全文を OCR し、正規表現で項目を抽出する", ko: "Cloud Vision API의 DOCUMENT_TEXT_DETECTION으로 전문을 OCR하고, 정규 표현식으로 항목을 추출한다" },
    B: { en: "Agent Platform AutoML で画像分類モデルをトレーニングする", ko: "Agent Platform AutoML로 이미지 분류 모델을 학습시킨다" },
    C: { en: "Document AI のフォーム パーサーまたは特化型プロセッサを利用する", ko: "Document AI의 폼 파서 또는 특화형 프로세서를 이용한다" },
    D: { en: "BigQuery のオブジェクト テーブル経由で PDF を生成モデルに渡し、プロンプトで項目を抽出する", ko: "BigQuery의 객체 테이블을 거쳐 PDF를 생성 모델에 넘기고, 프롬프트로 항목을 추출한다" }
  },
  explanation: {
    A: { en: "Vision API はテキストの位置と内容を返しますが、どの文字列がどの項目かという構造理解は行いません。レイアウトが複数あると正規表現の保守が破綻します。", ko: "Vision API는 텍스트의 위치와 내용을 반환하지만, 어떤 문자열이 어떤 항목인지라는 구조 이해는 하지 않습니다. 레이아웃이 여러 개면 정규 표현식 유지 보수가 무너집니다." },
    B: { en: "画像分類は文書全体にラベルを付けるタスクであり、項目単位の値を抽出する用途には使えません。トレーニングを避けたいという要件にも反します。", ko: "이미지 분류는 문서 전체에 라벨을 붙이는 작업이며, 항목 단위의 값을 추출하는 용도에는 쓸 수 없습니다. 학습을 피하고 싶다는 요건에도 어긋납니다." },
    C: { en: "正解です。Document AI は帳票の構造を理解してキーと値のペアやエンティティとして項目を抽出でき、手書き文字にも対応します。事前学習済みプロセッサを使えばトレーニングは不要です。", ko: "정답입니다. Document AI는 서식의 구조를 이해해 키-값 쌍이나 엔티티로 항목을 추출할 수 있고, 손글씨에도 대응합니다. 사전 학습된 프로세서를 쓰면 학습이 필요 없습니다." },
    D: { en: "技術的には可能ですが、エンティティ単位の信頼度スコアや位置情報、帳票スキーマを持つ Document AI と比べ、大量の帳票を構造化抽出する標準的な手段とは言えません。", ko: "기술적으로는 가능하지만, 엔티티 단위의 신뢰도 점수와 위치 정보, 서식 스키마를 갖춘 Document AI와 비교하면 대량의 서식을 구조화 추출하는 표준적인 수단이라고 할 수 없습니다." }
  },
  explanationAll: {
    en: "Document AI は文書の構造を理解して項目を抽出するために設計されたサービスで、フォーム パーサーや請求書などの特化型プロセッサが事前学習済みで提供されています。手書き文字の認識にも対応するため、トレーニング不要という制約を満たします。Vision API は OCR で文字列と座標を返すだけで項目の意味づけは行わず、レイアウトが複数あると後段の抽出ロジックが複雑化します。",
    ko: "Document AI는 문서의 구조를 이해해 항목을 추출하도록 설계된 서비스로, 폼 파서나 청구서 등의 특화형 프로세서가 사전 학습된 상태로 제공됩니다. 손글씨 인식에도 대응하므로 학습 불필요라는 제약을 충족합니다. Vision API는 OCR로 문자열과 좌표를 반환할 뿐 항목의 의미 부여는 하지 않으며, 레이아웃이 여러 개면 후단의 추출 로직이 복잡해집니다."
  },
  refs: [],
  keywords: [
    ["スキャンした請求書（PDF）から項目を自動抽出", "문서 → 구조화 데이터(키-값·엔티티) = <mark>Document AI</mark>", "C"],
    ["レイアウトは複数 / 手書き", "규칙(정규식)으로는 유지 보수 불가, 사전 학습 프로세서가 처리", "A 제외"],
    ["モデルのトレーニングは避けたい", "사전 학습된 프로세서(폼 파서·특화형)", "B 제외"],
    ["DOCUMENT_TEXT_DETECTION", "Vision API의 문서용 OCR. 글자·좌표만, 항목 의미는 모름", "A"],
    ["オブジェクト テーブル + 生成モデル", "가능은 하지만 신뢰도·위치·스키마가 없어 대량 정형 추출의 표준이 아님", "D 약화"]
  ],
  keywordNote: "일본어 표기: フォーム パーサー = Form Parser, 特化型プロセッサ = specialized processor(청구서·영수증·신분증 등), 事前学習済み = pre-trained, キーと値のペア = key-value pair, 帳票 = 서식(양식 문서), 信頼度スコア = confidence score, オブジェクト テーブル = BigQuery object table(Cloud Storage 비정형 파일을 테이블로 참조).",
  whyWrong: "",
  whyRight: "<p>“문서에서 <b>어떤 값이 어떤 항목인지</b>까지 뽑아야 한다”가 핵심입니다. 글자를 읽는 것(OCR)과 항목을 이해하는 것(문서 파싱)은 다른 일입니다.</p>\n<div class=\"tbl\"><table><thead><tr><th>서비스</th><th>결과</th><th>맞는 상황</th></tr></thead><tbody>\n<tr><td>Vision API <code>DOCUMENT_TEXT_DETECTION</code></td><td>문자열 + 좌표</td><td>전문 텍스트만 필요(검색 색인 등)</td></tr>\n<tr><td><mark>Document AI 폼 파서</mark></td><td>키-값 쌍, 표, 체크박스</td><td>일반 양식, 레이아웃이 여러 개</td></tr>\n<tr><td><mark>Document AI 특화형 프로세서</mark></td><td>문서 종류별 엔티티(청구서 번호·금액·날짜 등)</td><td>청구서·영수증·신분증 같은 정해진 문서</td></tr>\n<tr><td>Document AI 커스텀 추출기</td><td>직접 정의한 필드</td><td>사전 학습 프로세서로 부족할 때(생성 AI 기반은 소량 예시만으로도 가능)</td></tr>\n</tbody></table></div>\n<p>폼 파서와 특화형 프로세서는 <mark>사전 학습</mark>되어 있어 학습 없이 바로 쓸 수 있고, 손글씨도 인식합니다. 항목마다 <b>신뢰도 점수</b>가 나오므로 점수가 낮은 건만 사람이 확인(Human-in-the-Loop)하는 운영도 쉽습니다.</p>",
  others: {
    A: "OCR까지는 되지만 “계약 번호가 어느 글자인지”는 모릅니다. 레이아웃이 여러 개면 정규식이 패턴마다 늘어나 유지 보수가 무너집니다.",
    B: "이미지 분류는 문서 <b>전체</b>에 라벨(예: 청구서/계약서)을 붙이는 작업이라 항목 값을 뽑지 못하고, 학습도 필요합니다. 문서 종류를 나누는 일은 Document AI의 분류 프로세서가 맡습니다.",
    D: "Gemini에 PDF를 넣어 추출하는 것도 가능하지만, 항목별 신뢰도·위치 정보·고정 스키마가 없어 대량 서식 처리의 “最初に検討すべき(가장 먼저 검토할)” 선택지로는 Document AI가 앞섭니다."
  },
  rules: [
    ["문서에서 키-값·항목 추출, 학습 없이", "Document AI 폼 파서 / 특화형 프로세서"],
    ["청구서·영수증·신분증처럼 정해진 문서", "Document AI 특화형 프로세서"],
    ["전문 텍스트(글자+좌표)만 필요", "Vision API DOCUMENT_TEXT_DETECTION"],
    ["사전 학습 프로세서로 부족한 고유 필드", "Document AI 커스텀 추출기"],
    ["문서 종류 판별", "Document AI 분류 프로세서(AutoML 이미지 분류 아님)"]
  ],
  oneLine: "글자만 읽기는 Vision API, 항목(키-값)까지 뽑기는 Document AI. 학습 없이면 폼 파서·특화형 프로세서.",
  tip: "Document AI 결과를 BigQuery에 쌓고 싶으면 BigQuery의 <code>ML.PROCESS_DOCUMENT</code> 함수로 객체 테이블의 PDF를 Document AI 프로세서에 바로 넘길 수 있습니다(D의 “객체 테이블” 아이디어를 Document AI와 결합한 형태). 운영에서는 신뢰도 점수가 기준보다 낮은 항목만 사람이 검토하도록 흐름을 짜면 정확도와 처리량을 함께 잡을 수 있습니다."
},
{
  id: 4,
  title: "Gemini API 요청마다 같은 50쪽 매뉴얼 전문을 프롬프트 앞에 넣어 입력 토큰 비용 초과 → 컨텍스트 캐시로 고정 부분을 캐시",
  added: "2026-11-27",
  tags: ["Gemini", "컨텍스트 캐시", "비용 최적화", "입력 토큰", "temperature", "maxOutputTokens"],
  mine: "B",
  correct: "B",
  section: "1.2",
  freq: "high",
  freqNote: "시험 가이드 1.2 “費用、レイテンシ、可用性を考慮した Gemini ベースのアプリケーションの最適化”에 그대로 해당합니다. <b>“같은 긴 입력을 반복 전송 → 컨텍스트 캐시, temperature·maxOutputTokens는 출력 쪽이라 입력 비용과 무관”</b>을 가져가면 됩니다.",
  question: {
    en: "スタートアップが、社内ドキュメントを要約する機能を Gemini API で実装しました。リクエストのたびに同じ 50 ページの製品マニュアル全文をプロンプトの先頭に含めており、入力トークンのコストが想定を大きく超えています。応答品質を落とさずにコストを下げたいです。最も効果的な対策はどれですか。",
    ko: "스타트업이 사내 문서를 요약하는 기능을 Gemini API로 구현했습니다. 요청할 때마다 같은 50페이지짜리 제품 매뉴얼 전문을 프롬프트 앞부분에 포함하고 있어, 입력 토큰 비용이 예상을 크게 넘고 있습니다. 응답 품질을 떨어뜨리지 않고 비용을 낮추고 싶습니다. 가장 효과적인 대책은 무엇입니까?"
  },
  options: {
    A: { en: "temperature を下げて出力のばらつきを抑える", ko: "temperature를 낮춰 출력의 편차를 억제한다" },
    B: { en: "コンテキスト キャッシュを使い、繰り返し送信する固定部分をキャッシュする", ko: "컨텍스트 캐시를 사용해, 반복 전송하는 고정 부분을 캐시한다" },
    C: { en: "maxOutputTokens を小さくして出力を切り詰める", ko: "maxOutputTokens를 작게 해 출력을 잘라낸다" },
    D: { en: "リクエストごとに新しいセッションを作成し、前回の会話履歴を引き継がないようにする", ko: "요청마다 새 세션을 만들어, 이전 대화 기록을 이어받지 않도록 한다" }
  },
  explanation: {
    A: { en: "temperature は生成される出力の多様性を制御するパラメータで、入力トークン数にも課金額にも影響しません。", ko: "temperature는 생성되는 출력의 다양성을 제어하는 파라미터로, 입력 토큰 수에도 과금액에도 영향을 주지 않습니다." },
    B: { en: "正解です。毎回同じ長い前置きを送る用途はコンテキスト キャッシュの典型的な適用場面で、キャッシュされたトークンは通常の入力トークンより低い単価で課金されます。", ko: "정답입니다. 매번 같은 긴 서두를 보내는 용도는 컨텍스트 캐시의 전형적인 적용 상황이며, 캐시된 토큰은 일반 입력 토큰보다 낮은 단가로 과금됩니다." },
    C: { en: "出力トークンの上限を下げても、問題となっている入力トークン（マニュアル全文）のコストは変わりません。また要約が途中で切れる品質劣化も招きます。", ko: "출력 토큰 상한을 낮춰도, 문제가 되는 입력 토큰(매뉴얼 전문)의 비용은 변하지 않습니다. 또 요약이 중간에 잘리는 품질 저하도 초래합니다." },
    D: { en: "セッションを分けても、送信する入力トークン量そのものは減りません。むしろ再利用の余地を失います。", ko: "세션을 나눠도 전송하는 입력 토큰 양 자체는 줄지 않습니다. 오히려 재사용 여지를 잃습니다." }
  },
  explanationAll: {
    en: "同一の長大なコンテキストを繰り返し送信するワークロードでは、コンテキスト キャッシュが最も直接的なコスト削減策です。固定部分を一度キャッシュしておけば、以降のリクエストではキャッシュ済みトークンとして低い単価で課金されます。ただし明示的なキャッシュには保持時間に応じたストレージ料金が別途かかるため、再利用の頻度が高いワークロードほど効果が大きくなります。temperature や maxOutputTokens は出力側のパラメータで入力コストには効かず、セッションの分割も送信量を減らしません。",
    ko: "동일한 장대한 컨텍스트를 반복 전송하는 워크로드에서는 컨텍스트 캐시가 가장 직접적인 비용 절감책입니다. 고정 부분을 한 번 캐시해 두면, 이후 요청에서는 캐시된 토큰으로서 낮은 단가로 과금됩니다. 다만 명시적 캐시에는 보존 시간에 따른 스토리지 요금이 별도로 들기 때문에, 재사용 빈도가 높은 워크로드일수록 효과가 커집니다. temperature나 maxOutputTokens는 출력 쪽 파라미터라 입력 비용에는 효과가 없고, 세션 분할도 전송량을 줄이지 않습니다."
  },
  refs: [],
  keywords: [
    ["リクエストのたびに同じ 50 ページ全文を先頭に", "반복되는 긴 고정 접두부 → <mark>컨텍스트 캐시</mark>의 전형", "B"],
    ["入力トークンのコスト", "입력 쪽 문제 → 출력 파라미터로는 해결 불가", "A·C 제외"],
    ["応答品質を落とさずに", "출력을 자르거나 내용을 빼는 방법은 불가", "C 제외"],
    ["temperature / maxOutputTokens", "출력의 다양성·길이 제어. 입력 과금과 무관", "A·C"],
    ["新しいセッション", "전송량은 그대로, 재사용 여지만 잃음", "D 제외"]
  ],
  keywordNote: "일본어 표기: コンテキスト キャッシュ = context caching(명시적 캐시 / 암시적 캐시), キャッシュ済みトークン = cached tokens, 入力トークン / 出力トークン = input / output tokens, 保持時間 = TTL(보존 시간), ストレージ料金 = 스토리지 요금. temperature·maxOutputTokens는 영어 그대로.",
  whyWrong: "",
  whyRight: "<p>비용의 원인은 <b>입력 쪽</b>, 그것도 “매번 똑같이 보내는 50쪽”입니다. <mark>컨텍스트 캐시</mark>는 이 고정 부분을 한 번 저장해 두고, 이후 요청은 캐시를 참조하게 해서 그 토큰을 <b>할인된 단가</b>로 과금합니다. 매뉴얼 내용은 그대로 모델에 전달되므로 응답 품질도 변하지 않습니다.</p>\n<div class=\"tbl\"><table><thead><tr><th>종류</th><th>동작</th><th>비용</th></tr></thead><tbody>\n<tr><td>암시적 캐시</td><td>같은 접두부가 반복되면 자동 적용</td><td>추가 설정·스토리지 요금 없음, 적중은 보장 안 됨</td></tr>\n<tr><td>명시적 캐시</td><td>캐시를 직접 만들고(TTL 지정) 요청에서 참조</td><td>캐시 토큰 할인 + <mark>보존 시간에 따른 스토리지 요금</mark></td></tr>\n</tbody></table></div>\n<p>그래서 명시적 캐시는 <b>재사용 빈도가 높을수록</b> 이득입니다. 몇 번 안 쓰고 TTL만 길게 잡으면 스토리지 요금이 할인분보다 커질 수 있습니다. 캐시를 잘 맞추려면 고정 부분을 <b>프롬프트 앞</b>에, 바뀌는 질문을 뒤에 둡니다.</p>",
  others: {
    A: "temperature는 출력의 무작위성(다양성)만 바꿉니다. 입력 토큰 수와 과금액에는 영향이 없습니다.",
    C: "출력 토큰 상한은 출력 비용만 줄이고, 문제인 입력(매뉴얼 전문) 비용은 그대로입니다. 요약이 중간에 잘려 품질도 떨어집니다.",
    D: "세션을 나눠도 매번 매뉴얼 전문을 보내는 것은 같습니다. 오히려 같은 컨텍스트를 재사용할 기회를 잃습니다."
  },
  rules: [
    ["같은 긴 컨텍스트(매뉴얼·코드베이스·영상)를 반복 전송", "컨텍스트 캐시"],
    ["재사용 빈도 높음 + 확실한 할인 필요", "명시적 캐시(TTL 관리, 스토리지 요금 있음)"],
    ["입력 토큰 비용 문제", "temperature·maxOutputTokens는 무관(출력 파라미터)"],
    ["대량 요청을 실시간 응답 없이 처리", "배치 예측(Batch API)으로 단가 절감"],
    ["단순 작업에 큰 모델을 씀", "더 작은 모델(Flash·Flash-Lite)로 교체"]
  ],
  oneLine: "같은 긴 입력을 매번 보내면 컨텍스트 캐시. temperature·maxOutputTokens는 출력 쪽이라 입력 비용에 효과가 없다.",
  tip: "Gemini 비용 최적화의 3종 세트는 <b>컨텍스트 캐시</b>(반복 입력), <b>배치 예측</b>(실시간이 필요 없는 대량 처리), <b>모델 크기 선택</b>(Flash·Flash-Lite)입니다. 지연 시간과 가용성까지 함께 묻는 문제라면 프로비저닝된 처리량(Provisioned Throughput)으로 용량을 확보하는 선택지도 기억해 두면 좋습니다. 응답의 <code>usageMetadata</code>에 캐시된 토큰 수(<code>cachedContentTokenCount</code>)가 나오므로 캐시가 실제로 적중하는지 확인할 수 있습니다."
}
];
