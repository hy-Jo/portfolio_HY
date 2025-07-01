import * as React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 py-16 text-center">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
        안녕하세요, <span className="text-blue-600 dark:text-blue-400">HY Jo</span>입니다.<br />
        <span className="text-xl md:text-2xl font-normal block mt-2">AI와 백엔드 기술로 가치를 만드는 개발자</span>
      </h1>
      <p className="max-w-xl text-lg text-muted-foreground">
        TypeScript, Node.js, AWS, 데이터 엔지니어링, AI 데이터 파이프라인 구축 경험.<br />
        해운무역 AI 데이터 변환 프로젝트 등 다양한 실전 경험 보유.
      </p>
      <div className="flex gap-4 justify-center">
        <Link href="/about" className="px-6 py-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors">About Me</Link>
        <Link href="/contact" className="px-6 py-2 rounded-md border border-blue-600 text-blue-600 dark:text-blue-400 font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors">Contact</Link>
      </div>
    </section>
  );
} 