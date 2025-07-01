import * as React from "react";

export default function AboutPage() {
  return (
    <section className="prose dark:prose-invert max-w-2xl mx-auto">
      <h2>About Me</h2>
      <p>
        <b>HY Jo</b> – Backend & AI Developer<br />
        5년차 백엔드/데이터 엔지니어. 해운무역 AI 데이터 변환, 대용량 데이터 파이프라인 구축, AWS 기반 서비스 운영 경험.
      </p>
      <ul>
        <li>주요 프로젝트: 해운무역 AI 데이터 변환 자동화, 실시간 데이터 ETL, 대시보드 구축</li>
        <li>성과: 데이터 처리 효율 300%↑, AI 기반 업무 자동화, 서비스 장애 0건 유지</li>
      </ul>
    </section>
  );
} 