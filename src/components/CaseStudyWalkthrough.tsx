import React, { useState } from 'react';
import { CheckCircle, ArrowRight, Eye, Cpu, CheckCircle2 } from 'lucide-react';
import { CASE_STUDY } from '../data/projectData';

interface CaseStudyWalkthroughProps {
  onOpenImage: (id: string) => void;
}

export const CaseStudyWalkthrough: React.FC<CaseStudyWalkthroughProps> = ({ onOpenImage }) => {
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const currentStep = CASE_STUDY[currentStepIdx];

  const imageIdMap: Record<number, string> = {
    0: 'img-21',
    1: 'img-28',
    2: 'img-29',
    3: 'img-23',
    4: 'img-24',
  };

  return (
    <section id="case-study" className="py-24 border-b border-slate-800 bg-[#070B12]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
            <span>[ 04 · 实战破案 · 真实业务复盘沙盘 ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] mb-4">
            「XX地区收入为何回落？」：
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              从 2 天多人拉扯到 30 分钟闭环交付
            </span>
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            以本部与区部经营分析中最经典的真实案例为全流程沙盘。点击下方 5 个破案阶段，亲身体验在「三层语义」强约束下，AI 如何像顺丰资深分析师一样逐步推理、锁定真因并输出高可信报告。
          </p>
        </div>

        {/* 5-Step Horizontal Stepper (Cyan theme) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-8">
          {CASE_STUDY.map((s, idx) => {
            const isCurrent = currentStepIdx === idx;
            const isCompleted = currentStepIdx > idx;

            return (
              <button
                key={s.step}
                onClick={() => setCurrentStepIdx(idx)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer relative ${
                  isCurrent
                    ? 'bg-slate-900 border-cyan-400 shadow-[0_0_20px_rgba(56,189,248,0.25)] ring-1 ring-cyan-400/50'
                    : isCompleted
                    ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-300'
                    : 'bg-slate-900/30 border-slate-800/60 hover:border-slate-700 text-slate-500'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-slate-400">
                    PHASE 0{s.step}
                  </span>
                  {isCompleted && <CheckCircle className="w-4 h-4 text-emerald-400" />}
                  {isCurrent && <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />}
                </div>
                <div className={`text-xs font-bold leading-tight ${isCurrent ? 'text-white' : 'text-slate-300'}`}>
                  {s.phase}
                </div>
                <div className="text-[11px] text-cyan-400 mt-1 font-mono truncate">
                  {s.semanticRole}
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Interactive Stage Box */}
        <div className="rounded-3xl bg-slate-950/80 border border-slate-800 p-8 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Execution log & Outcome */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase mb-1">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>生效语义：{currentStep.semanticRole}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  第 0{currentStep.step} 步：{currentStep.phase}
                </h3>
              </div>

              {/* User Prompt Box */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="text-xs font-mono text-slate-400 mb-1">业务触发问题 / 驱动输入</div>
                <div className="text-sm text-slate-100 font-medium">{currentStep.userPrompt}</div>
              </div>

              {/* AI Agent Action Execution */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                <div className="text-xs font-mono text-cyan-400 font-bold">智能体语义推演与动作 (Agent Reasoning)</div>
                <p className="text-xs text-slate-300 leading-relaxed">{currentStep.aiAction}</p>
              </div>

              {/* Verified Evidence Produced */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
                  <div className="text-xs text-slate-400 font-mono mb-1">产出的硬核证据</div>
                  <div className="text-xs text-slate-200 font-semibold leading-relaxed">
                    {currentStep.evidenceProduced}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/40">
                  <div className="text-xs text-emerald-400 font-mono mb-1">业务最终价值</div>
                  <div className="text-xs text-emerald-200 font-semibold leading-relaxed">
                    {currentStep.businessOutcome}
                  </div>
                </div>
              </div>

              {/* Step Navigation Controls */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                <button
                  disabled={currentStepIdx === 0}
                  onClick={() => setCurrentStepIdx((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors"
                >
                  上一步
                </button>

                <span className="text-xs text-slate-400 font-mono">
                  {currentStepIdx + 1} / {CASE_STUDY.length}
                </span>

                <button
                  disabled={currentStepIdx === CASE_STUDY.length - 1}
                  onClick={() => setCurrentStepIdx((prev) => Math.min(CASE_STUDY.length - 1, prev + 1))}
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors flex items-center gap-1.5"
                >
                  <span>下一步</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right: Actual System Screenshot Anchor */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-3">
                  <span>申报材料对应真实实录</span>
                  <button
                    onClick={() => onOpenImage(imageIdMap[currentStepIdx] || 'img-21')}
                    className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
                  >
                    <Eye className="w-3 h-3" />
                    <span>查看高清原图</span>
                  </button>
                </div>

                <div
                  onClick={() => onOpenImage(imageIdMap[currentStepIdx] || 'img-21')}
                  className="group relative rounded-xl overflow-hidden border border-slate-800 cursor-pointer bg-black/60"
                >
                  <img
                    src={currentStep.image || '/images/image21.jpg'}
                    alt={currentStep.phase}
                    className="w-full h-64 object-contain transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3 py-1.5 bg-slate-900 text-white text-xs rounded-lg border border-slate-700 shadow-md">
                      点击放大查看实录证据
                    </span>
                  </div>
                </div>

                <div className="mt-3 text-[11px] text-slate-400 text-center font-mono">
                  真实业务脱敏数据 · 丰景台智能小景端到端产出
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
