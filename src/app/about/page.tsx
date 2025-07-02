import * as React from "react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-10">
      {/* Header with Profile Image */}
      <div className="flex flex-col items-center mb-8">
        <div className="mb-6 relative">
          <div className="w-40 h-40 rounded-full overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.2)] relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent to-black/10 z-10 pointer-events-none"></div>
            <Image 
              src="/profile.jpg" 
              alt="HY Jo" 
              width={160} 
              height={160} 
              className="object-cover"
              priority
            />
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-2">About Me</h1>
        <p className="text-lg text-muted-foreground">
          <span className="font-semibold">HY Jo</span> – Backend & AI Developer
        </p>
      </div>

      {/* Introduction */}
      <div className="bg-card rounded-lg p-6 shadow-sm">
        <p className="text-lg leading-relaxed">
          5년차 백엔드/데이터 엔지니어로서, 복잡한 시스템 설계부터 대규모 데이터 처리까지 다양한 경험을 쌓아왔습니다. 
          특히 해운무역 분야에서 AI를 활용한 데이터 변환 작업, 대용량 데이터 파이프라인 구축, AWS 기반 서비스 운영에 전문성을 보유하고 있습니다.
        </p>
      </div>

      {/* Career */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold border-b pb-2">경력</h2>
        
        <div className="bg-card rounded-lg p-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">소프트웨어 엔지니어</h3>
            <div className="flex items-center gap-2">
              <span className="font-medium">CLT</span>
              <span className="text-sm bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full">2021 ~ 현재</span>
            </div>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>백엔드 시스템 설계 및 개발, AWS 클라우드 아키텍처 구축</li>
            <li>데이터 파이프라인 최적화로 처리 효율 300% 향상</li>
            <li>AI 모델 통합 및 배포, RESTful API 개발</li>
          </ul>
        </div>

        <div className="bg-card rounded-lg p-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">데이터 엔지니어</h3>
            <div className="flex items-center gap-2">
              <span className="font-medium">이전 경력</span>
              <span className="text-sm bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full">2019 ~ 2021</span>
            </div>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>대용량 데이터베이스 설계 및 관리</li>
            <li>ETL 프로세스 자동화 시스템 구축</li>
          </ul>
        </div>
      </div>

      {/* Projects */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold border-b pb-2">주요 프로젝트</h2>
        
        <div className="grid gap-4 md:grid-cols-2">
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-semibold">해운무역 AI 데이터 변환 자동화</h3>
              <span className="text-sm bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 px-2 py-1 rounded">2022</span>
            </div>
            <p className="text-sm text-muted-foreground">
              복잡한 무역 문서를 AI 모델을 활용하여 구조화된 데이터로 자동 변환하는 시스템 구축.
              수작업 대비 처리 시간 90% 단축, 데이터 정확도 95% 이상 달성.
            </p>
          </div>
          
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-semibold">실시간 데이터 ETL 파이프라인</h3>
              <span className="text-sm bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 px-2 py-1 rounded">2021</span>
            </div>
            <p className="text-sm text-muted-foreground">
              AWS 서비스(Lambda, ECS, S3, DynamoDB)를 활용한 대용량 데이터 처리 시스템 구축.
              일 평균 500GB 이상의 데이터를 안정적으로 처리, 99.9% 가용성 유지.
            </p>
          </div>
          
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-semibold">운영 모니터링 대시보드</h3>
              <span className="text-sm bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 px-2 py-1 rounded">2023</span>
            </div>
            <p className="text-sm text-muted-foreground">
              실시간 시스템 모니터링 및 데이터 시각화 대시보드 개발.
              장애 조기 발견 및 신속한 대응 체계 구축으로 서비스 안정성 강화.
            </p>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold border-b pb-2">전문 분야</h2>
        
        <div className="grid gap-4 md:grid-cols-2">
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-3 text-blue-600 dark:text-blue-400">백엔드 개발</h3>
            <p className="text-muted-foreground">Node.js, TypeScript, Express, NestJS</p>
          </div>
          
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-3 text-blue-600 dark:text-blue-400">클라우드 인프라</h3>
            <p className="text-muted-foreground">AWS, Docker, Kubernetes, Serverless</p>
          </div>
          
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-3 text-blue-600 dark:text-blue-400">데이터베이스</h3>
            <p className="text-muted-foreground">MySQL, PostgreSQL, MongoDB, DynamoDB</p>
          </div>
          
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-3 text-blue-600 dark:text-blue-400">AI/ML</h3>
            <p className="text-muted-foreground">머신러닝 모델 API 통합, 데이터 전처리 파이프라인</p>
          </div>
        </div>
      </div>
    </div>
  );
} 