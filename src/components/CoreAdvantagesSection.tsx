import React, { useState } from 'react';
import {
  TrendingDown,
  ShieldCheck,
  GitBranch,
  Sparkles,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ArrowRight,
  Database,
  Cpu,
  Maximize2,
  ExternalLink
} from 'lucide-react';

interface CoreAdvantagesSectionProps {
  onOpenImage?: (id: string) => void;
}

export const CoreAdvantagesSection: React.FC<CoreAdvantagesSectionProps> = ({ onOpenImage }) => {
  const advantages = [
    {
      id: 'adv-1',
      icon: Cpu,
      color: '#38BDF8',
      tag: '人机协同范式',
      title: '高阶共生：从黑盒盲猜到白盒逻辑推演',
      desc: '通用大模型不具备顺丰特定的业务网络与分析标准。我们通过与 ChatGPT 的深度思辨，原创「数据·业务·分析」三层语义，将专家隐性直觉显性化为确定性规则，赋予智能体真正理解顺丰业务的因果推导基石。',
      quote: '“不再把 AI 当作单向黑盒工具，而是在人机共生中沉淀属于顺丰的确定性分析方法论。”',
    },
    {
      id: 'adv-2',
      icon: ShieldCheck,
      color: '#06B6D4',
      tag: '数据质量准入',
      title: '数据准入：0.00% 容差双向勾稽确保数据真实',
      desc: '数仓权威正式表物理白名单严格准入，杜绝调用废弃临时表；下钻明细汇总值与宏观大盘总额执行 0.00% 容差二次勾稽校验，彻底解决传统 ChatBI“算错数、用错表、看得到不敢用”的失准硬伤。',
      quote: '“对数仓 0 容差双向比对，让输出的每一个数字都有据可查、经得起财务级审核。”',
    },
    {
      id: 'adv-3',
      icon: GitBranch,
      color: '#10B981',
      tag: '业务网络穿透',
      title: '实体穿透：母子卡网络拓扑排除假性流失',
      desc: '深度理解顺丰客户签约与开票实体网络，自动归并集团母公司与各区部月结卡网络。精准识别开票主体内部划转，绝不将调账误判为退网流失，避免一线团队盲目登门降价，保护核心客群收益。',
      quote: '“看懂母子卡与大促错位窗口，智能体才能具备真正懂顺丰产品与客户的商业穿透力。”',
    },
    {
      id: 'adv-4',
      icon: Sparkles,
      color: '#818CF8',
      tag: '组织能力沉淀',
      title: '资产沉淀：原子 Skill 解耦与组织经验复用',
      desc: '将标准化五步推导与反例错题本沉淀为与大模型底座解耦的原子 Skill。经验不再随单次对话结束而归零，新区域、新产品场景仅需 0.5 天极速装载，一人经验转化为全网复用能力，赋能业务超级个体。',
      quote: '“从个人专家经验到工程化组织资产，经验只增不减，实现持续迭代进化。”',
    },
  ];

  const showcaseArtifacts = [
    {
      id: 'img-20',
      title: '智能小景落地 2000+ MAU',
      sub: '生产环境高频刚需验证',
      src: '/images/image20.jpg',
    },
    {
      id: 'img-24',
      title: '自动化生成 HTML 战报',
      sub: '耗时从 1~2 天压缩至 30 分钟',
      src: '/images/image24.jpg',
    },
    {
      id: 'img-28',
      title: '领慧助手复杂口径统一',
      sub: '跨系统指标统一收敛抹平',
      src: '/images/image28.jpg',
    },
  ];

  const matrixRows = [
    {
      dimension: '业务口径理解力',
      traditional: '仅存在于资深分析师脑中，口径定义模糊，跨部门对齐耗时数天',
      chatbi: '仅依赖 Text-to-SQL 机械转译，不懂顺丰母子卡与大促业务日历，频现常识性错误',
      symbiotic: '【三层语义显性化】将业务经验转化为确定性规则，准确映射业务实质',
      win: true,
    },
    {
      dimension: '取数准确度与容差',
      traditional: '跨系统找表对数，同一指标多口径，人工拼接容易遗漏筛选条件',
      chatbi: '极易命中历史废表与中间临时表，口径不统一，数据“看得到但不敢用”',
      symbiotic: '【0.00% 容差双向勾稽】金牌数仓白名单强制准入，明细与总量二次校验一致',
      win: true,
    },
    {
      dimension: '客户实体网络穿透',
      traditional: '人工逐笔核查开票信息与签约主体，排查极慢且容易遗漏关联卡号',
      chatbi: '无法识别母子月结卡关系，将客户内部调账误判为“退网流失”，引发虚警',
      symbiotic: '【实体拓扑网络归并】自动映射主附卡关系网，精准剥离伪流失，直击核心流失主体',
      win: true,
    },
    {
      dimension: '因果归因与推理深度',
      traditional: '依赖分析师个人经验制作 PPT，撰写耗时长，结论受主观情绪影响',
      chatbi: '只能返回单一数值（“7月降了4%”），无法解释为何发生，无法形成有效结论',
      symbiotic: '【白盒化五步推导链】量化贡献度、转运延误证据链、待核实盲区与落地行动建议全闭环',
      win: true,
    },
    {
      dimension: '端到端交付时效',
      traditional: '从提问、找数、对数到成文需要 1 ~ 2 天反复拉扯',
      chatbi: '返回静态对话气泡，仍需人工二次处理，耗费数小时',
      symbiotic: '【30 分钟自动化交付】自动输出标准化交互式 HTML 诊断战报，提效 95%',
      win: true,
    },
    {
      dimension: '经验沉淀与跨区复用',
      traditional: '人员流动或转岗后经验断档，新员工需要重新踩坑',
      chatbi: '单次会话结束后记忆归零，无法沉淀为组织级可持续资产',
      symbiotic: '【原子 Skill 资产库】与模型解耦热插拔，新场景 0.5 天极速装载，全网资产持续沉淀',
      win: true,
    },
  ];

  return (
    <section id="advantages" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header with Roadshow Mega Typography */}
        <div className="text-center mb-16">
          <div className="text-xs font-mono text-cyan-400 tracking-[0.3em] mb-3 uppercase font-semibold">
            原创方法论优势 · 让智能体真正理解顺丰业务
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4">
            核心优势与全维对比矩阵 <span className="text-cyan-400 font-normal">/ Superiority Matrix</span>
          </h2>
          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            摒弃单点演示的概念炒作，回归复杂业务的确定交付。
            <br className="hidden sm:inline" />
            通过共生智能语义层，为顺丰构建真正经得起实战检验的确定性生产力引擎。
          </p>
        </div>

        {/* 4 Large Clean Cards matching Haojie Era Bento Quality */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {advantages.map((adv) => {
            const Icon = adv.icon;
            return (
              <div
                key={adv.id}
                className="p-8 sm:p-12 rounded-3xl bg-[#080E20]/95 border border-cyan-500/25 hover:border-cyan-400/50 transition-all shadow-[0_0_40px_rgba(6,182,212,0.1)] group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg"
                      style={{
                        backgroundColor: `${adv.color}15`,
                        border: `1px solid ${adv.color}40`,
                        color: adv.color,
                      }}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-mono tracking-widest px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-300 font-bold">
                      {adv.tag}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white mb-4 tracking-tight">
                    {adv.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal mb-6">
                    {adv.desc}
                  </p>
                </div>

                <div className="pt-5 border-t border-white/5 text-xs sm:text-sm text-slate-400 italic font-sans">
                  {adv.quote}
                </div>
              </div>
            );
          })}
        </div>

        {/* MONUMENTAL SHOWCASE PREVIEW CARDS (大 UI 组件 + 配图) */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 font-semibold">
              [ 生产环境实战样板 · 证据链 ]
            </div>
            <h3 className="text-2xl sm:text-4xl font-black text-white">
              落地实战成果样板卡 (Official Showcase)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {showcaseArtifacts.map((art) => (
              <div
                key={art.id}
                onClick={() => onOpenImage && onOpenImage(art.id)}
                className="rounded-3xl bg-[#091124]/90 border border-cyan-500/25 p-5 hover:border-cyan-400/60 transition-all cursor-pointer group shadow-xl"
              >
                <div className="relative rounded-2xl overflow-hidden mb-4 border border-white/10 bg-slate-950">
                  <img
                    src={art.src}
                    alt={art.title}
                    className="w-full h-48 object-contain transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 right-3 px-2 py-1 rounded bg-slate-900/90 text-[10px] font-mono text-cyan-300 border border-white/10 flex items-center gap-1">
                    <Maximize2 className="w-3 h-3" /> 点击放大
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-xs font-mono text-cyan-400 font-bold">
                    {art.id.toUpperCase()} · 申报原件
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {art.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {art.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Master Comparison Matrix Table */}
        <div className="rounded-3xl bg-[#070D1D]/95 border border-cyan-500/30 overflow-hidden shadow-[0_0_80px_rgba(6,182,212,0.16)] backdrop-blur-2xl">
          <div className="p-6 sm:p-8 border-b border-white/10 flex flex-wrap items-center justify-between gap-4 bg-[#0A1226]">
            <div>
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1 font-semibold">
                [ 核心竞争力量化研判 ]
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                三大范式全维对比矩阵 (Full Benchmark)
              </h3>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono">
              <span className="flex items-center gap-1.5 text-rose-400">
                <XCircle className="w-4 h-4" /> 传统人工/ChatBI
              </span>
              <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                <CheckCircle2 className="w-4 h-4" /> 顺丰共生智能语义层
              </span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.02] text-xs font-mono text-slate-400">
                  <th className="py-4 px-6 w-1/5">评估维度</th>
                  <th className="py-4 px-6 w-1/4">传统手工取数分析</th>
                  <th className="py-4 px-6 w-1/4">传统单向 ChatBI (无语义层)</th>
                  <th className="py-4 px-6 w-3/10 text-cyan-300 bg-cyan-950/20 font-bold">
                    顺丰共生智能语义层 (自研)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300">
                {matrixRows.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-white/[0.02] transition-colors group"
                  >
                    <td className="py-5 px-6 font-bold text-white align-top">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        <span>{row.dimension}</span>
                      </div>
                    </td>
                    <td className="py-5 px-6 text-slate-400 text-xs sm:text-sm leading-relaxed align-top">
                      {row.traditional}
                    </td>
                    <td className="py-5 px-6 text-slate-400 text-xs sm:text-sm leading-relaxed align-top">
                      {row.chatbi}
                    </td>
                    <td className="py-5 px-6 bg-cyan-950/15 text-slate-200 text-xs sm:text-sm leading-relaxed align-top font-medium border-l border-cyan-500/20">
                      <span className="text-cyan-300 font-bold block mb-1">
                        {row.symbiotic.split('】')[0]}】
                      </span>
                      {row.symbiotic.split('】')[1]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
