import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, XCircle, AlertTriangle, Eye, RefreshCw, GitCommit } from 'lucide-react';

interface CognitiveParadigmSectionProps {
  onOpenImage: (id: string) => void;
}

export const CognitiveParadigmSection: React.FC<CognitiveParadigmSectionProps> = ({ onOpenImage }) => {
  const [activeMode, setActiveMode] = useState<'traditional' | 'semantic'>('semantic');

  return (
    <section id="paradigm" className="py-20 border-b border-slate-800 bg-[#080C14]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header (Clean, concise) */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
              [ 01 · 业务断层与方案破局 ]
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              传统问数链路 vs 语义层确定性闭环
            </h2>
          </div>

          {/* Interactive Switcher */}
          <div className="flex items-center gap-2 p-1.5 bg-slate-900 border border-slate-800 rounded-xl">
            <button
              onClick={() => setActiveMode('traditional')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeMode === 'traditional'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              传统人工/ChatBI 链路 (1~2天)
            </button>
            <button
              onClick={() => setActiveMode('semantic')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeMode === 'semantic'
                  ? 'bg-cyan-500 text-slate-950 shadow-md font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              语义层端到端闭环 (30分钟)
            </button>
          </div>
        </div>

        {/* Visual Pipeline Canvas (Graphic Flow, Not Text Wall) */}
        <div className="rounded-3xl bg-slate-950 border border-slate-800 p-6 sm:p-8 shadow-2xl mb-8">
          {activeMode === 'traditional' ? (
            /* Traditional Mode Visual Flow */
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                <span className="font-mono text-amber-400 font-bold">
                  ⚠️ 传统排查链路：多表分散、多轮沟通、口径冲突
                </span>
                <span className="text-slate-400 font-mono">耗时：1 ~ 2 天</span>
              </div>

              {/* 4 Connected Visual Stages */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/60 border border-amber-500/30">
                  <div className="text-[10px] font-mono text-amber-400 mb-1">阶段 1 · 业务提问</div>
                  <div className="text-sm font-bold text-white mb-2">提出异动疑问</div>
                  <div className="text-xs text-slate-400">“XX 地区收入为何回落？”</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-amber-500/30">
                  <div className="text-[10px] font-mono text-amber-400 mb-1">阶段 2 · 人工找数</div>
                  <div className="text-sm font-bold text-white mb-2">跨系统找表核口径</div>
                  <div className="text-xs text-slate-400">同指标口径不一，容易误取中间表</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-amber-500/30">
                  <div className="text-[10px] font-mono text-amber-400 mb-1">阶段 3 · 客户穿透</div>
                  <div className="text-sm font-bold text-white mb-2">误判开票划转</div>
                  <div className="text-xs text-slate-400">将内部调账误当客户退网流失</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-amber-500/30">
                  <div className="text-[10px] font-mono text-amber-400 mb-1">阶段 4 · 任务断点</div>
                  <div className="text-sm font-bold text-white mb-2">数字对不上、不敢用</div>
                  <div className="text-xs text-slate-400">仅返回单一数字，无法形成行动闭环</div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-800 text-xs text-slate-400">
                <span>根本原因：缺少数据源白名单、客户实体网络与分析推理规则约束</span>
                <button
                  onClick={() => onOpenImage('img-1')}
                  className="text-cyan-400 hover:text-cyan-300 font-medium cursor-pointer"
                >
                  查看原版人工排查流程图 ↗
                </button>
              </div>
            </div>
          ) : (
            /* Semantic Layer Closed-Loop Visual Flow */
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                <span className="font-mono text-cyan-400 font-bold">
                  ✓ 语义层确定性链路：0容差勾稽、实体归并、因果证据链
                </span>
                <span className="text-emerald-400 font-mono font-bold">耗时：30 分钟 (提效 95%)</span>
              </div>

              {/* 4 Connected Visual Stages */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/40">
                  <div className="text-[10px] font-mono text-cyan-400 mb-1">阶段 1 · 数据语义</div>
                  <div className="text-sm font-bold text-white mb-2">金牌数仓表授权</div>
                  <div className="text-xs text-slate-300">0 容差双向勾稽，公式严密对齐</div>
                </div>

                <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/40">
                  <div className="text-[10px] font-mono text-cyan-400 mb-1">阶段 2 · 业务语义</div>
                  <div className="text-sm font-bold text-white mb-2">母子卡拓扑归并</div>
                  <div className="text-xs text-slate-300">自动过滤开票划转，排除伪流失</div>
                </div>

                <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/40">
                  <div className="text-[10px] font-mono text-cyan-400 mb-1">阶段 3 · 分析语义</div>
                  <div className="text-sm font-bold text-white mb-2">时效拐点交叉核验</div>
                  <div className="text-xs text-slate-300">锁定转运修路时效延误主因</div>
                </div>

                <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/40">
                  <div className="text-[10px] font-mono text-emerald-400 mb-1">阶段 4 · 交付闭环</div>
                  <div className="text-sm font-bold text-white mb-2">标准 HTML 战报</div>
                  <div className="text-xs text-slate-300">交付因果证据、待核实项与挽留建议</div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-800 text-xs text-slate-400">
                <span>方案价值：将分析师专家经验转化为原子 Skill，人机共生，经验只增不减</span>
                <button
                  onClick={() => onOpenImage('img-4')}
                  className="text-cyan-400 hover:text-cyan-300 font-medium cursor-pointer"
                >
                  查看原版三层语义架构图 ↗
                </button>
              </div>
            </div>
          )}
        </div>

        {/* 3 Core Comparison Rows (Crisp Data Comparison, Zero Prose) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800">
            <div className="text-xs text-slate-400 font-mono mb-2">对比维度 01</div>
            <h4 className="text-sm font-bold text-white mb-3">经验复用机制</h4>
            <div className="space-y-2 text-xs">
              <div className="text-slate-400 flex items-start gap-1.5">
                <span className="text-amber-400">✕</span>
                <span>传统：停留在单次对话中，换人从头来</span>
              </div>
              <div className="text-slate-200 flex items-start gap-1.5 font-medium">
                <span className="text-cyan-400 font-bold">✓</span>
                <span>语义层：沉淀为原子 Skill，跨区即插即用</span>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800">
            <div className="text-xs text-slate-400 font-mono mb-2">对比维度 02</div>
            <h4 className="text-sm font-bold text-white mb-3">结果可信度</h4>
            <div className="space-y-2 text-xs">
              <div className="text-slate-400 flex items-start gap-1.5">
                <span className="text-amber-400">✕</span>
                <span>传统：容易查错表、合错卡，结果不敢用</span>
              </div>
              <div className="text-slate-200 flex items-start gap-1.5 font-medium">
                <span className="text-cyan-400 font-bold">✓</span>
                <span>语义层：白名单表 + 0容差勾稽，权威可核验</span>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800">
            <div className="text-xs text-slate-400 font-mono mb-2">对比维度 03</div>
            <h4 className="text-sm font-bold text-white mb-3">任务闭环能力</h4>
            <div className="space-y-2 text-xs">
              <div className="text-slate-400 flex items-start gap-1.5">
                <span className="text-amber-400">✕</span>
                <span>传统：止步于单个数值，依赖多人跨周接力</span>
              </div>
              <div className="text-slate-200 flex items-start gap-1.5 font-medium">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>语义层：30分钟输出因果证据与挽留行动建议</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
