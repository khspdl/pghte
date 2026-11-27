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
}
];
