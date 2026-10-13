import React, { useState } from 'react';
import { Sparkles, MessageSquare, Brain, Lightbulb, CheckCircle2, ChevronRight, BookOpen, Quote, Maximize2, ShieldCheck, ArrowRight } from 'lucide-react';

interface SymbioticGenesisSectionProps {
  onOpenImage: (id: string) => void;
}

export const SymbioticGenesisSection: React.FC<SymbioticGenesisSectionProps> = ({ onOpenImage }) => {
  const [activeDialogue, setActiveDialogue] = useState<number>(0);

  const dialogueStories = [
    {
      id: 0,
      topic: '思辨 01 · 传统 ChatBI 的失准硬伤与业务语义的建立',
      humanQuery:
        '“为什么通用大模型查出来的收入数字总是和财务对不上？而且只要某大客户换了个子公司开票，AI 就会盲目报警‘客户退网流失’？”',
      gptResponse:
        '“因为通用模型缺乏顺丰底层的组织上下文。没有白名单约束，我会抓取历史废表；没有母子月结卡拓扑，我只能按单一卡号孤立计算。要让我真正理解顺丰业务，必须在数据与我之间建立一层严密的「业务语义」。”',
      genesisOutcome:
        '由此确立：集团内部首创「母子卡网络拓扑」与「数据源 0 容差双向勾稽」规则，彻底解决假流失与假数字问题。',
      imageId: 'img-15',
      imageTitle: '人机协同演进：共生智能原件 (img-15)',
      imageSrc: '/images/image15.jpg',
    },
    {
      id: 1,
      topic: '思辨 02 · 严禁把相关当因果：分析语义的规范化',
      humanQuery:
        '“绝不能把相关性冒充为因果性。你不能仅仅看到某客户发货量减少同时伴随行业淡季，就直接断言‘因为淡季所以流失’，这根本经不起业务主管的推敲。”',
      gptResponse:
        '“完全赞同。严肃的业务诊断必须将「波动贡献度」、「时效证据链」与「主观假设」解耦交付。在证据链不完整时（如缺乏路况施工延误数据），模型必须主动声明待线下核实，绝不可制造伪因果幻觉。”',
      genesisOutcome:
        '由此确立：独创「分析语义五步推导链」与「证据边界收口机制」，确保每一份诊断结论可严谨复核。',
      imageId: 'img-16',
      imageTitle: '人机共生协作模型原件 (img-16)',
      imageSrc: '/images/image16.jpg',
    },
    {
      id: 2,
      topic: '思辨 03 · 从行业抽象概念到集团内部首创生产落地',
      humanQuery:
        '“行业中虽然有人零星提过‘语义层’概念，但多停留在指标分层定义阶段。面对顺丰千万级月结卡、复杂交织的快件网络，如何真正做成可复用的工程化产品？”',
      gptResponse:
        '“将业务判断规则、防呆校验与反例错题本解耦为标准化原子 Skill，脱离单一模型绑定，直接注入钉钉领慧工作台与丰景台。实现一人配置、全网复用，让专家经验成为可持续进化的数字资产。”',
      genesisOutcome:
        '集团内部首创：丰景台智能小景与领慧小可双轨投产，月活突破 2000+，新场景半天极速装载。',
      imageId: 'img-17',
      imageTitle: '共生智能架构演进图原件 (img-17)',
      imageSrc: '/images/image17.jpg',
    },
  ];

  const currentDialogue = dialogueStories[activeDialogue];

  const evidenceGalleryCards = [
    {
      id: 'img-15',
      title: '人机协同演进：共生智能',
      desc: '首次提出共生智能协作范式，人提供业务边界与规则，AI提供高并发白盒推理。',
      src: '/images/image15.jpg',
    },
    {
      id: 'img-16',
      title: '人机共生协作模型',
      desc: '人机互补协同模型，双向循环演进，沉淀为组织级原子 Skill。',
      src: '/images/image16.jpg',
    },
    {
      id: 'img-17',
      title: '共生智能架构演进图',
      desc: '从单点 Prompt 对话走向具备持续生命力与组织沉淀能力的业务智能体基底。',
      src: '/images/image17.jpg',
    },
    {
      id: 'img-5',
      title: '语义层沉淀与反例收口流程',
      desc: '构造反例纠正泛化回答，沉淀为错题本机制，业务规则持续迭代。',
      src: '/images/image5.jpg',
    },
  ];

  return (
    <section id="genesis" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold tracking-widest mb-4 uppercase">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>方 法 论 溯 源 · 真 实 人 机 协 同 纪 实</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-5">
            共生智能的诞生：源于与 ChatGPT 的深度探讨与反思
          </h2>
          <p className="text-base sm:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-normal">
            大家都在谈论人工智能、智能体，视模型为单向黑盒算力。
            <br className="hidden sm:inline" />
            而本课题的方法论，是业务专家在多次与大语言模型的深度探讨、互相推演中共同萌生出来的。
            <br className="hidden sm:inline" />
            <span className="text-cyan-300 font-medium">真实推演对话手稿与提示词演化记录，是本方案扎实的立论基石。</span>
          </p>
        </div>

        {/* MONUMENTAL KEYNOTE DIALOGUE VIEWPORT (大字体 + 大 UI 组件 + 配图) */}
        <div className="rounded-3xl bg-[#070D1D]/95 border border-cyan-500/30 p-6 sm:p-10 lg:p-12 shadow-[0_0_80px_rgba(6,182,212,0.16)] backdrop-blur-2xl mb-16">
          {/* Milestone Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {dialogueStories.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveDialogue(idx)}
                className={`p-5 rounded-2xl text-left transition-all border cursor-pointer ${
                  activeDialogue === idx
                    ? 'bg-cyan-950/50 border-cyan-400 text-white shadow-[0_0_25px_rgba(6,182,212,0.3)] scale-[1.01]'
                    : 'bg-white/[0.02] border-white/5 text-slate-400 hover:text-slate-200 hover:border-white/10'
                }`}
              >
                <div className="text-xs font-mono text-cyan-400 font-bold mb-1.5">
                  MILESTONE 0{idx + 1}
                </div>
                <div className="text-sm sm:text-base font-black line-clamp-1">
                  {item.topic}
                </div>
              </button>
            ))}
          </div>

          {/* Dialogue Split Viewport (Left Script + Right Evidence Image) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch rounded-2xl bg-[#091124] border border-cyan-500/20 p-6 sm:p-8">
            {/* Left 7 cols: Rich Roadshow Dialogue Script */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <div className="inline-block px-3 py-1 rounded text-xs font-mono font-bold bg-cyan-950 text-cyan-300 border border-cyan-800 mb-4">
                  {currentDialogue.topic}
                </div>

                {/* Human Expert Box */}
                <div className="flex gap-4 items-start mb-5">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-200 shrink-0 font-black text-xs">
                    专家
                  </div>
                  <div className="flex-1 rounded-2xl bg-slate-900/90 p-4 sm:p-5 border border-slate-800 text-sm sm:text-base text-slate-200 leading-relaxed shadow-lg">
                    <div className="text-[11px] font-mono text-slate-400 mb-1 font-bold">
                      顺丰业务专家 (孙豪杰) · 业务质询与边界定义
                    </div>
                    {currentDialogue.humanQuery}
                  </div>
                </div>

                {/* ChatGPT AI Box */}
                <div className="flex gap-4 items-start mb-5">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-300 shrink-0 font-black text-xs">
                    GPT
                  </div>
                  <div className="flex-1 rounded-2xl bg-[#09152C]/95 p-4 sm:p-5 border border-cyan-500/30 text-sm sm:text-base text-cyan-100 leading-relaxed shadow-[0_0_25px_rgba(6,182,212,0.1)]">
                    <div className="text-[11px] font-mono text-cyan-400 mb-1 font-bold">
                      ChatGPT · 逻辑推演与反例反思
                    </div>
                    {currentDialogue.gptResponse}
                  </div>
                </div>

                {/* Outcome Box */}
                <div className="rounded-xl bg-emerald-950/25 border border-emerald-500/30 p-4 sm:p-5 flex items-center gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="text-xs sm:text-sm text-emerald-200 font-bold leading-relaxed">
                    {currentDialogue.genesisOutcome}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>从深入质询中提炼业务规则 · 杜绝黑盒盲猜</span>
                <button
                  onClick={() => onOpenImage(currentDialogue.imageId)}
                  className="text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1 cursor-pointer"
                >
                  <span>查看全屏原件</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right 5 cols: Large Artifact Illustration with glowing border */}
            <div className="lg:col-span-5 flex flex-col justify-center bg-slate-950/80 rounded-2xl p-4 border border-white/10 group">
              <div
                onClick={() => onOpenImage(currentDialogue.imageId)}
                className="relative rounded-xl overflow-hidden cursor-pointer shadow-2xl border border-white/10 group-hover:border-cyan-400/60 transition-all"
              >
                <img
                  src={currentDialogue.imageSrc}
                  alt={currentDialogue.imageTitle}
                  className="w-full max-h-[340px] object-contain bg-slate-950 transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-cyan-300 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                  <span className="truncate">{currentDialogue.imageTitle}</span>
                  <span className="flex items-center gap-1 shrink-0 text-white ml-2">
                    <Maximize2 className="w-3.5 h-3.5" /> 放大查验
                  </span>
                </div>
              </div>
              <div className="mt-3 text-center text-[11px] font-mono text-slate-400">
                点击检视顺丰申报原稿高清大图
              </div>
            </div>
          </div>
        </div>

        {/* 4 GRAND EVIDENCE EXHIBITION CARDS (大配图 + 高维解读展台) */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 font-semibold">
              [ 支撑材料集群 · 真实可验 ]
            </div>
            <h3 className="text-2xl sm:text-4xl font-black text-white">
              申报原件展台：四维一体的实证体系
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {evidenceGalleryCards.map((card) => (
              <div
                key={card.id}
                onClick={() => onOpenImage(card.id)}
                className="rounded-3xl bg-[#080E20]/90 border border-cyan-500/20 hover:border-cyan-400/60 p-4 sm:p-5 flex flex-col justify-between transition-all hover:scale-[1.02] shadow-xl group cursor-pointer"
              >
                <div className="relative rounded-2xl overflow-hidden mb-4 border border-white/10 bg-slate-950">
                  <img
                    src={card.src}
                    alt={card.title}
                    className="w-full h-44 object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-2 left-2 px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-950/90 text-cyan-300 border border-cyan-800">
                    {card.id.toUpperCase()}
                  </span>
                </div>

                <div>
                  <h4 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {card.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-normal line-clamp-2 mb-4">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-cyan-400 font-semibold">
                  <span>检视申报原件</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SUMMARY BANNER */}
        <div className="rounded-3xl bg-gradient-to-r from-[#09142A] via-[#0E1F40] to-[#09142A] border border-cyan-500/40 p-8 sm:p-14 shadow-[0_0_80px_rgba(6,182,212,0.2)] relative overflow-hidden text-center">
          <div className="relative z-10 max-w-4xl mx-auto space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>— 人 机 共 生 范 式 实 践 —</span>
            </div>

            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              不仅是工具应用，更是人与智能体的双向协同
            </h3>

            <p className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed font-normal">
              语义层概念在业界虽有零星探讨，但我们是
              <strong className="text-cyan-300 font-bold"> 顺丰集团内部首个成功落地生产、产生规模化效能的践行者</strong>。
              在这个方案中，业务专家将多年沉淀的隐性经验转化为严谨的确定性规则；AI 则赋予专家秒级的数据穿透与全局白盒推理。
              最终成就的，是在数智化时代具备全栈分析能力的 <strong className="text-white font-extrabold underline decoration-cyan-400 decoration-2 underline-offset-4">OPC 全链路分析个体</strong>。
            </p>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-mono text-slate-300">
              <span className="text-cyan-300 font-bold">申报人: 孙豪杰</span>
              <span>·</span>
              <span>顺丰集团 M线本部 产品业务处</span>
              <span>·</span>
              <span className="text-emerald-300 font-bold">参赛课题: 基于共生智能下的语义层数据分析实践</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
