/* 시험 목록. 시험마다 dir 폴더에 problems.js(SETS, PROBLEMS)와 guides.js(GUIDES)를 둔다.
   status: "active"(준비 중) | "passed"(합격), srcLang: 원문 언어("ja" | 생략 시 "en"). 원문은 항상 en 필드에 넣는다
   sections: 시험 가이드(일본어판)의 대섹션. 문제의 section 필드("2.1" 등) 앞자리와 맞춘다. weight는 출제 비중(%) */
const EXAMS = [
  {
    id: "pcd", name: "PCD", full: "Professional Cloud Developer", status: "active", dir: "pcd", srcLang: "ja",
    sections: [
      { no: 1, name: "확장성·보안·신뢰성 있는 클라우드 네이티브 앱 설계", ja: "スケーラビリティ、安全性、信頼性に優れたクラウド ネイティブなアプリケーションの設計", weight: 32 },
      { no: 2, name: "앱 빌드·테스트", ja: "アプリケーションの構築とテスト", weight: 23 },
      { no: 3, name: "배포용 클라우드 네이티브 앱 구성", ja: "デプロイのためのクラウドネイティブ アプリケーションの構成", weight: 24 },
      { no: 4, name: "앱과 Google Cloud 서비스 통합", ja: "アプリケーションと Google Cloud サービスの統合", weight: 21 }
    ]
  },
  {
    id: "pde", name: "PDE", full: "Professional Data Engineer", status: "passed", dir: "pde", srcLang: "ja",
    sections: [
      { no: 1, name: "데이터 처리 시스템 설계", ja: "データ処理システムの設計", weight: 22 },
      { no: 2, name: "데이터 수집·처리", ja: "データの取り込みと処理", weight: 25 },
      { no: 3, name: "데이터 저장", ja: "データの保存", weight: 20 },
      { no: 4, name: "분석용 데이터 준비·사용", ja: "分析用データの準備と使用", weight: 15 },
      { no: 5, name: "데이터 워크로드 관리·자동화", ja: "データ ワークロードの管理と自動化", weight: 18 }
    ]
  },
  {
    id: "pca", name: "PCA", full: "Professional Cloud Architect", status: "passed", dir: "pca",
    sections: [
      { no: 1, name: "솔루션 아키텍처 설계·계획", ja: "クラウド ソリューション アーキテクチャの設計と計画", weight: 25 },
      { no: 2, name: "인프라 관리·프로비저닝", ja: "クラウド ソリューション インフラストラクチャの管理とプロビジョニング", weight: 17.5 },
      { no: 3, name: "보안·컴플라이언스 설계", ja: "セキュリティとコンプライアンスを考慮した設計", weight: 17.5 },
      { no: 4, name: "기술·비즈니스 프로세스 분석·개선", ja: "技術プロセスやビジネス プロセスの分析と改善", weight: 15 },
      { no: 5, name: "구현 관리", ja: "実装の管理", weight: 12.5 },
      { no: 6, name: "솔루션·운영 우수성 확보", ja: "ソリューションとオペレーション エクセレンスの確保", weight: 12.5 }
    ]
  }
];
