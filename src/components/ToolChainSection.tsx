import React, { useState } from 'react';
import { Bot, MessageSquare, Wrench, ArrowRight, ShieldCheck, CheckCircle2, Eye, Terminal } from 'lucide-react';

interface ToolChainSectionProps {
  onOpenImage: (id: string) => void;
}

export const ToolChainSection: React.FC<ToolChainSectionProps> = ({ onOpenImage }) => {
  const [activePlatform, setActivePlatform] = useState<'fengjingtai' | 'linghui'>('fengjingtai');

  const fengjingtaiSteps = [
    {
      step: '01',
      title: '创建小景独立 Agent',
      desc: '在顺丰丰景台数据资产平台新建数据分析智能体，定义业务空间与专家定位。',
      imageId: 'img-10',
      thumb: '/images/image10.jpg',
    },
    {
      step: '02',
      title: '配置角色模型与装载 Skill',
      desc: '绑定大模型基座，并上传数据、业务、分析三层语义构成的原子 Skill 配置文件。',
      imageId: 'img-12',
      thumb: '/images/image12.jpg',
    },
    {
      step: '03',
      title: '数仓工具授权与安全围栏',
      desc: '连接授权数仓 API、指标字典与权限通道，严格阻断非授权越权查询。',
      imageId: 'img-13',
      thumb: '/images/image13.jpg',
    },
    {
      step: '04',
      title: '首页发布试用与沙盒验证',
      desc: '完成场景问答评测，以独立 Agent 正式入驻丰景台首页，服务全网月活 2000+。',
      imageId: 'img-14',
      thumb: '/images/image14.jpg',
    },
  ];

  const linghuiSteps = [
    {
      step: '01',
      title: '配置钉钉原生机器人',
      desc: '在领慧工作台打通钉钉应用集成，让一线业务分析师在日常沟通群内随时发起问数。',
      imageId: 'img-6',
      thumb: '/images/image6.jpg',
    },
    {
      step: '02',
      title: '加载语义层与永久记忆',
      desc: '将经过反例检验的三层语义写入永久上下文记忆库，消除多轮会话遗忘与认知漂移。',
      imageId: 'img-7',
      thumb: '/images/image7.jpg',
    },
    {
      step: '03',
      title: '挂接助手可用能力与算子',
      desc: '赋予领慧小可下钻归因、时序对齐与多维报表生成能力，完成全链路联调。',
      imageId: 'img-8',
      thumb: '/images/image8.jpg',
    },
  ];

  return (
    <section id="engineering" className="py-24 border-b border-slate-800 bg-[#080C14]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
            <span>[ 03 · 双轨工程落地与装载实操 ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] mb-4">
            脱离空谈：
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">
              在丰景台与领慧 AI 双平台实现生产级落地
            </span>
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            三层语义绝非单纯的 Prompt 技巧，而是作为标准化的原子 Skill，分别在顺丰集团内部核心两大 AI 工具载体——<strong>丰景台智能小景</strong>与<strong>领慧 AI 助理小可 (钉钉生态)</strong>中完整跑通工程配置与权限纳管。
          </p>
        </div>

        {/* Platform Switcher Tabs */}
        <div className="flex items-center gap-2 p-1.5 bg-slate-900 border border-slate-800 rounded-xl max-w-md mb-8">
          <button
            onClick={() => setActivePlatform('fengjingtai')}
            className={`flex-1 py-2.5 px-4 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
              activePlatform === 'fengjingtai'
                ? 'bg-cyan-500 text-slate-950 shadow-md font-bold'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Bot className="w-4 h-4" />
            <span>丰景台智能小景 Agent (月活2000+)</span>
          </button>

          <button
            onClick={() => setActivePlatform('linghui')}
            className={`flex-1 py-2.5 px-4 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
              activePlatform === 'linghui'
                ? 'bg-cyan-500 text-slate-950 shadow-md font-bold'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>领慧 AI 助理小可 (钉钉办公生态)</span>
          </button>
        </div>

        {/* Steps Display Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {(activePlatform === 'fengjingtai' ? fengjingtaiSteps : linghuiSteps).map((s) => (
            <div
              key={s.step}
              className="rounded-2xl bg-slate-900/60 border border-slate-800 p-5 flex flex-col justify-between hover:border-cyan-400/60 hover:bg-slate-900/90 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-cyan-400">STEP {s.step}</span>
                  <span className="text-xs text-slate-500 font-mono">配置原件</span>
                </div>

                <div
                  onClick={() => onOpenImage(s.imageId)}
                  className="relative rounded-xl overflow-hidden border border-slate-800 bg-black/60 mb-4 cursor-pointer group/img aspect-video"
                >
                  <img
                    src={s.thumb}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform group-hover/img:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-2.5 py-1 bg-slate-900 text-xs text-white rounded-md border border-slate-700 flex items-center gap-1">
                      <Eye className="w-3 h-3 text-cyan-400" /> 查看原图
                    </span>
                  </div>
                </div>

                <h4 className="text-sm font-bold text-white mb-1.5">{s.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{s.desc}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>实录佐证</span>
                <span className="text-cyan-400">状态：已上线验收</span>
              </div>
            </div>
          ))}
        </div>

        {/* Closed-loop Iteration Bar */}
        <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-800 flex items-center justify-center shrink-0 text-cyan-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-slate-400">持续迭代机制</div>
              <div className="text-sm font-bold text-white">反例错题本回归验证</div>
            </div>
          </div>

          <div className="md:col-span-2 text-xs text-slate-300 leading-relaxed">
            记录日常问数中的失败用例，通过补充反例约束写回三层语义 Skill 版本；每次发布前执行「明确题、模糊题、边界题」三类回归测试，确保新知识沉淀不产生破坏性漂移。
          </div>
        </div>
      </div>
    </section>
  );
};
