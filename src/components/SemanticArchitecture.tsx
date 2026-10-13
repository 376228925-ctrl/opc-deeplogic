import React, { useState } from 'react';
import { Database, Briefcase, TrendingUp, Terminal, Eye, Sparkles, Activity, CheckCircle2, ShieldAlert, Maximize2, FileCode2, Image as ImageIcon } from 'lucide-react';
import { SEMANTIC_LAYERS } from '../data/projectData';

interface SemanticArchitectureProps {
  onOpenImage: (id: string) => void;
}

export const SemanticArchitecture: React.FC<SemanticArchitectureProps> = ({ onOpenImage }) => {
  const [selectedLayerId, setSelectedLayerId] = useState<'data' | 'business' | 'analysis'>('data');
  const [viewMode, setViewMode] = useState<'code' | 'artifact'>('code');

  const currentLayer = SEMANTIC_LAYERS.find((l) => l.id === selectedLayerId) || SEMANTIC_LAYERS[0];

  const layerArtifacts: Record<string, { id: string; src: string; title: string; desc: string }> = {
    data: {
      id: 'img-4',
      src: '/images/image4.jpg',
      title: '三层语义架构总体设计 (img-4)',
      desc: '数据语义规定查什么怎么算，数仓白名单与0容差双向勾稽总体蓝图。',
    },
    business: {
      id: 'img-12',
      src: '/images/image12.jpg',
      title: '丰景台上传三层语义 Skill 文件 (img-12)',
      desc: '顺丰内部平台直接注入业务语义原子 Skill，固化母子卡网络拓扑。',
    },
    analysis: {
      id: 'img-18',
      src: '/images/image18.jpg',
      title: '分析可复核机制与证据边界 (img-18)',
      desc: '严格将贡献度、因果假设与证据边界解耦交付，线索不等于定论。',
    },
  };

  const skillCodeSnippets: Record<string, string> = {
    data: `# 顺丰原子 Skill · 数据语义配置文件 (data_semantics.yaml)
# 定义数仓物理准入白名单、核心指标公式与双向勾稽算子
version: 2.1
layer: DATA_SEMANTICS
domain: "产品业务处·全网经营分析基底"

security_firewall:
  data_isolation_level: "CERTIFIED_GOLD_ONLY"
  allow_tables:
    - table_name: "dws_sf_prod_rev_di"
      owner: "数仓核心技术部"
      update_cycle: "DAILY_T_PLUS_1"
  denied_patterns: ["temp_*", "tmp_*", "dev_*", "*_backup"]

metric_rules:
  - id: actual_revenue
    formula: "SUM(settled_income_amt)"
    comment: "仅统计已完成履约实收收入，剔除退费与未妥投暂估"
  - id: valid_ticket_count
    formula: "COUNT(DISTINCT waybill_no)"
    filter: "is_valid_bill == 1 AND test_flag == 0"
  - id: unit_ticket_price
    formula: "actual_revenue / valid_ticket_count"
    tolerance: 0.0001

reconciliation_gate:
  method: "BI_DIRECTIONAL_VERIFICATION"
  check_rule: "ABS(SUM(detail_records) - total_macro_metric) <= 0.0000"
  on_failure: "HALT_REASONING_AND_RAISE_CRITICAL_ALERT"
`,
    business: `# 顺丰原子 Skill · 业务语义配置文件 (business_semantics.yaml)
# 注入顺丰商业网络拓扑常识、客户实体网络与动态业务日历
version: 2.1
layer: BUSINESS_SEMANTICS
domain: "客户主体拓扑映射与大促业务日历"

entity_ontology:
  primary_key: "GROUP_CUSTOMER_GLOBAL_CODE"
  hierarchy:
    - level: 1
      name: "集团战略主体 (Group Master Code)"
    - level: 2
      name: "大区分支机构 (Regional Subsidiary)"
    - level: 3
      name: "月结卡网络 (Monthly Settlement Cards, 1:N)"
  internal_transfer_rules:
    condition: "card_a_drop_rate >= 0.85 AND sibling_card_b_rise_rate >= 0.80"
    conclusion: "INTERNAL_ACCOUNT_REALLOCATION"
    suppress_churn_alert: true

temporal_calibration:
  calendar_type: "SF_BUSINESS_CALENDAR"
  special_campaigns:
    - name: "618_ECOMMERCE_PROMOTION"
      alignment_policy: "ALIGN_BY_D_DAY_PEAK_RATHER_THAN_GREGORIAN"
      smoothing_window_days: 14
`,
    analysis: `# 顺丰原子 Skill · 分析语义配置文件 (analysis_semantics.yaml)
# 规范五步推导闭环、贡献度与因果性分离、证据不足终止机制
version: 2.1
layer: ANALYSIS_SEMANTICS
domain: "异常波动归因推理与管理建议闭环"

reasoning_pipeline:
  step_1_anomaly: "VERIFY_BASELINE_AND_EXCLUDE_NOISE"
  step_2_decomposition: "DECOUPLE_VOLUME_VS_PRICE_CONTRIBUTION"
  step_3_entity_localization: "IDENTIFY_TOP_VOLATILE_GROUP_CLIENTS"
  step_4_inflection_audit: "TRACE_TRANSIT_SPEED_AND_ROUTING_EVENTS"
  step_5_closure: "GENERATE_HTML_STANDARDIZED_DIAGNOSIS_PACKAGE"

invariants:
  - id: "CAUSALITY_SEPARATION"
    rule: "CONTRIBUTION_PERCENTAGE != CAUSAL_EXPLANATION"
    enforce: "贡献多少是数学分解，为何发生是因果实证，严禁混同"
  - id: "STOP_CONDITION"
    rule: "IF_EVIDENCE_INCOMPLETE_DECLARE_BLIND_SPOT"
    enforce: "若无外部运力或市场佐证，严禁无据推测，主动列为待核实项"
`,
  };

  return (
    <section id="semantics" className="py-24 border-b border-slate-800 bg-[#090D17] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header with Roadshow Mega Typography */}
        <div className="max-w-4xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
            <span>[ 02 · 核心技术架构 · 三层语义体系规范 ]</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-5">
            独创「三层语义」体系：
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300">
              为顺丰复杂业务构筑严谨的数字底座
            </span>
          </h2>
          <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-normal">
            以数据之真夯实分析底座，以业务之形还原客群网络，以分析之理收口因果推导。
            <br className="hidden sm:inline" />
            我们将资深策略专家的隐性经验沉淀为工程化原子 Skill，实现从黑盒幻觉到白盒确定性的质变。
          </p>
        </div>

        {/* 3 Interactive Layer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {SEMANTIC_LAYERS.map((layer, idx) => {
            const isSelected = selectedLayerId === layer.id;
            const Icon = layer.id === 'data' ? Database : layer.id === 'business' ? Briefcase : TrendingUp;

            return (
              <div
                key={layer.id}
                onClick={() => setSelectedLayerId(layer.id)}
                className={`p-6 sm:p-8 rounded-3xl border transition-all cursor-pointer relative flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900 border-cyan-400 shadow-[0_0_30px_rgba(56,189,248,0.3)] ring-1 ring-cyan-400/50 scale-[1.02]'
                    : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/70'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform ${
                        isSelected
                          ? 'bg-cyan-500 text-slate-950 scale-110 shadow-lg shadow-cyan-500/50 font-black'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-slate-500 font-bold">LAYER 0{idx + 1}</span>
                  </div>

                  <h3 className="text-xl font-black text-white mb-1.5">{layer.title}</h3>
                  <div className="text-xs text-cyan-400 font-semibold mb-3 tracking-wide">{layer.subtitle}</div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5 font-normal">
                    {layer.definition}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-500">约束机制</span>
                  <span className="text-cyan-300 font-bold">
                    {layer.id === 'data' ? '双向勾稽 0 容差' : layer.id === 'business' ? '实体拓扑对冲' : '因果分离收口'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Layer Deep-Dive Console with Code / Artifact Toggle */}
        <div className="rounded-3xl bg-slate-950/95 border border-cyan-500/30 p-6 sm:p-10 shadow-[0_0_60px_rgba(6,182,212,0.15)] backdrop-blur-2xl">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800 mb-8">
            <div>
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-bold">语义规则深入解析</div>
              <h3 className="text-2xl font-black text-white flex items-center gap-3 mt-1">
                <span>{currentLayer.title}</span>
                <span className="text-xs text-cyan-300 font-mono font-bold bg-cyan-950/80 px-2.5 py-1 rounded-md border border-cyan-800">
                  [{currentLayer.subtitle}]
                </span>
              </h3>
            </div>

            {/* View Mode Switcher + Action buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="bg-slate-900 p-1 rounded-xl border border-white/10 flex items-center gap-1 text-xs font-mono">
                <button
                  onClick={() => setViewMode('code')}
                  className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-bold cursor-pointer transition-all ${
                    viewMode === 'code' ? 'bg-cyan-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <FileCode2 className="w-3.5 h-3.5" />
                  <span>YAML 规则源</span>
                </button>
                <button
                  onClick={() => setViewMode('artifact')}
                  className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-bold cursor-pointer transition-all ${
                    viewMode === 'artifact' ? 'bg-cyan-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span>生产原件对照</span>
                </button>
              </div>

              <button
                onClick={() => onOpenImage(layerArtifacts[selectedLayerId].id)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 text-xs font-bold border border-slate-700 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Eye className="w-4 h-4" />
                <span>全屏原件</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left: Rules & Anti-pattern (6 cols) */}
            <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-cyan-400 uppercase mb-3 font-bold">
                  强制执行的四大业务规则
                </div>
                <div className="space-y-3">
                  {currentLayer.rules.map((rule, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-200 flex items-start gap-3"
                    >
                      <span className="w-5 h-5 rounded bg-cyan-950 text-cyan-400 text-xs flex items-center justify-center shrink-0 font-mono font-black mt-0.5 border border-cyan-800">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed font-normal">{rule}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contrast Box */}
              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl bg-slate-900/90 border border-amber-500/30">
                  <div className="text-xs font-bold text-amber-400 mb-1 flex items-center gap-1.5">
                    <ShieldAlert className="w-4 h-4" />
                    <span>传统大模型致命盲区 (Anti-Pattern)</span>
                  </div>
                  <div className="text-xs text-slate-300 leading-relaxed font-normal">
                    {currentLayer.antiPattern}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-emerald-950/25 border border-emerald-500/30">
                  <div className="text-xs font-bold text-emerald-400 mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>三层语义强约束工程实践 (Axiomatic Rule)</span>
                  </div>
                  <div className="text-xs text-slate-200 leading-relaxed font-medium">
                    {currentLayer.bestPractice}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Code Editor View OR Artifact Viewer View (6 cols) */}
            <div className="lg:col-span-6">
              {viewMode === 'code' ? (
                <div className="rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden flex flex-col h-full shadow-inner">
                  <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs font-mono text-slate-200 font-bold">
                        {selectedLayerId}_semantics_manifest.yaml
                      </span>
                    </div>
                    <span className="text-[11px] text-cyan-400 font-mono font-bold">热插拔 Skill 规则源</span>
                  </div>

                  <div className="p-4 flex-1 overflow-x-auto font-mono text-xs text-slate-300 leading-relaxed bg-[#05080E]">
                    <pre>{skillCodeSnippets[selectedLayerId]}</pre>
                  </div>

                  <div className="p-3 bg-slate-900/60 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between font-mono">
                    <span>模型解耦 (Model-Agnostic)</span>
                    <span className="text-emerald-400 font-bold">✓ 零幻觉校验通过</span>
                  </div>
                </div>
              ) : (
                <div className="rounded-2xl border border-cyan-500/30 bg-slate-950 overflow-hidden flex flex-col h-full shadow-2xl p-4">
                  <div className="relative rounded-xl overflow-hidden mb-3 border border-white/10 group flex-1 flex items-center justify-center bg-black">
                    <img
                      src={layerArtifacts[selectedLayerId].src}
                      alt={layerArtifacts[selectedLayerId].title}
                      className="w-full max-h-[380px] object-contain transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                    <button
                      onClick={() => onOpenImage(layerArtifacts[selectedLayerId].id)}
                      className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-white/20 text-xs font-mono text-cyan-300 flex items-center gap-1.5 cursor-pointer backdrop-blur-md"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>全分辨率查看</span>
                    </button>
                  </div>

                  <div className="p-2 text-xs font-mono text-slate-300">
                    <div className="text-cyan-400 font-bold mb-1">{layerArtifacts[selectedLayerId].title}</div>
                    <div className="text-slate-400 font-normal leading-relaxed">{layerArtifacts[selectedLayerId].desc}</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
