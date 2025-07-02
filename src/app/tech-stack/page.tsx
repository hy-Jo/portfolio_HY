import * as React from "react";
import TechIcons from "../../components/tech-icons";

export default function TechStackPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-10">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Tech Stack</h1>
        <p className="text-lg text-muted-foreground">
          주요 기술 스택 및 개발 도구
        </p>
      </div>

      {/* Introduction */}
      <div className="bg-card rounded-lg p-6 shadow-sm">
        <p className="text-lg leading-relaxed">
          백엔드 개발과 AI 서비스 구축에 활용하는 핵심 기술들입니다. 
          각 기술을 실제 프로젝트에서 활용한 경험을 바탕으로 지속적으로 역량을 발전시키고 있습니다.
        </p>
      </div>
      
      {/* Tech Icons by Category */}
      <div className="bg-card rounded-lg p-6 shadow-sm">
        <TechIcons />
      </div>
    </div>
  );
} 