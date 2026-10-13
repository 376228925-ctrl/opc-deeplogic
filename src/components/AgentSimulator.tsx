import React, { useState } from 'react';
import { Terminal, CheckCircle2, RefreshCw } from 'lucide-react';

interface SimulatedQuery {
  id: string;
  title: string;
  query: string;
  layerTriggered: string;
  steps: {
    label: string;
    detail: string;
    status: 'success' | 'warning' | 'info';
  }[];
  finalOutput: string;
}

export const AgentSimulator: React.FC = () => {
  const scenarios: SimulatedQuery[] = [
    {
      id: 's1',
      title: '场景 1：异常收入回落归因',
      query: '请分析华南某区上月特快产品收入环比下滑 5.3% 的主要归因与波动客户。',
      layerTriggered: '数据语义 + 分析语义规则',
      steps: [
        { label: '数据语义层校验', detail: '锁定数仓金牌收入表 dws_sf_prod_rev_di，核验明细求和与大盘总额一致，差额 0.00%。', status: 'success' },
        { label: '量价解耦拆解', detail: '计算票数贡献与票均单价贡献，发现件量减少贡献 87.4%，单价波动仅贡献 12.6%。', status: 'info' },
        { label: '客户实体归并', detail: '识别波动客户 Top 3 集团主体，排除内部调账卡，锁定主要流失客户为某电子配件集团。', status: 'success' },
        { label: '因果与证据收口', detail: '因该客户属地转运中心时效略微延误，导致次日达占比下降 4.2%，触发部分货量切流。', status: 'warning' },
      ],
      finalOutput: '【分析结论】该区特快收入下滑主要由件量流失主导。核心源自重点客户 A（旗下 3 张关联卡）受转运节点时效波动影响发生部分分流。建议：属地产品线协同客户经理于 48 小时内完成驻场拜访，已生成标准化 HTML 诊断包。',
    },
    {
      id: 's2',
      title: '场景 2：母子月结卡主体穿透',
      query: '某大客户月结卡 0755****62 收入骤降 90%，是否属于客户严重流失预警？',
      layerTriggered: '业务语义 (Business Semantics)',
      steps: [
        { label: '实体网络拓扑检索', detail: '触发业务语义客户实体网，匹配卡号 0755****62 所属集团母账户 CODE_98213。', status: 'info' },
        { label: '关联账号对冲扫描', detail: '检测到同母账户旗下新卡号 0755****88 本月发货量同比激增 95%，两卡发货流向与品类高度重合。', status: 'success' },
        { label: '业务规则判定', detail: '判定为客户内部开票主体与签约主体调整（内部划转），非实质性退网流失。', status: 'success' },
      ],
      finalOutput: '【业务判定】非流失。此卡收入下降系该客户华南分公司内部调账更名引起，已自动合并为同一集团主体核算，大盘总体健康，无需拉响退网流失警报，避免一线人员无效骚扰客户。',
    },
    {
      id: 's3',
      title: '场景 3：618 大促跨期可比性分析',
      query: '对比今年 618 周期与去年同期重点电商客户的发货走势与票均变化。',
      layerTriggered: '业务语义 + 数据语义',
      steps: [
        { label: '业务日历对齐', detail: '自动读取大促日历规则，识别今年 618 第一波预售期较去年提前 3 天，弃用自然公历对齐。', status: 'info' },
        { label: '可比窗口平移', detail: '按照大促爆发 D-Day 节奏重新锚定时间轴，计算真正可比口径下的峰值货量与均价走势。', status: 'success' },
        { label: '峰值运力弹性核算', detail: '剔除日期错位形成的虚假“断崖式下跌”，得出真实有机增长率为 +6.4%。', status: 'success' },
      ],
      finalOutput: '【可比结论】在业务日历修正后，该重点客群 618 真实发货峰值较去年增长 6.4%，票均收入保持平稳。之前业务报表显示的“同比骤降 15%”系自然日错位引起的统计假象，已自动校准大屏看板。',
    },
  ];

  const [activeScenarioId, setActiveScenarioId] = useState('s1');
  const activeScenario = scenarios.find((s) => s.id === activeScenarioId) || scenarios[0];

  return (
    <section id="simulator" className="py-24 border-b border-slate-800 bg-[#080C14] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
              [ 现场互动 · 智能体实时推理沙盘 ]
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              白盒推理：点击体验在三层语义约束下的严密演算
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            {scenarios.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveScenarioId(s.id)}
                className={`flex-1 sm:flex-none text-center px-3 sm:px-3.5 py-2 rounded-xl text-[11px] sm:text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                  activeScenarioId === s.id
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/25'
                    : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>
        </div>

        {/* Console Box (Quantum Cyan theme) */}
        <div className="rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden font-mono">
          {/* Top Bar of Console */}
          <div className="px-6 py-3.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span className="text-slate-200 font-bold">
                SF-AGENT-RUNTIME // 丰景台 & 领慧白盒推理机
              </span>
            </div>
            <span className="text-slate-400">
              生效规则：<strong className="text-cyan-400">{activeScenario.layerTriggered}</strong>
            </span>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            {/* Input query box */}
            <div>
              <div className="text-xs text-slate-400 mb-1.5 flex items-center justify-between">
                <span>&gt; USER QUERY INPUT</span>
                <span className="text-emerald-400 text-[11px] font-bold">READY</span>
              </div>
              <div className="p-4 bg-slate-900/80 rounded-2xl border border-slate-800 text-slate-100 text-sm">
                {activeScenario.query}
              </div>
            </div>

            {/* Step traces */}
            <div className="space-y-2">
              <div className="text-xs text-slate-400 flex items-center justify-between">
                <span>&gt; SEMANTIC REASONING PIPELINE EXECUTION</span>
                <span className="text-slate-500 text-[11px]">4 步原子算子校验</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {activeScenario.steps.map((st, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 text-xs space-y-1.5"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded bg-cyan-950 text-cyan-400 flex items-center justify-center text-[10px] font-bold">
                        {i + 1}
                      </span>
                      <span className="font-semibold text-slate-200">{st.label}</span>
                    </div>
                    <p className="text-slate-400 text-xs leading-relaxed pl-6">{st.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Final structured output */}
            <div className="p-5 rounded-2xl bg-cyan-950/20 border border-cyan-800/40 text-slate-200 text-xs leading-relaxed">
              <div className="text-cyan-400 font-bold mb-1.5 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>结构化输出交付物 (具备可复核证据链)</span>
              </div>
              <p className="text-slate-300 font-sans text-xs sm:text-sm leading-relaxed">
                {activeScenario.finalOutput}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
