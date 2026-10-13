import React, { useState } from 'react';
import { ImageEvidence } from '../types';
import { IMAGE_EVIDENCE_LIST } from '../data/imageGalleryData';
import { Eye, ArrowUpRight, Maximize2, ShieldCheck } from 'lucide-react';

interface EvidenceGalleryProps {
  onSelectImage: (img: ImageEvidence) => void;
}

export const EvidenceGallery: React.FC<EvidenceGalleryProps> = ({ onSelectImage }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: '全部 38 张实录原件', count: IMAGE_EVIDENCE_LIST.length },
    { id: 'pain_point', label: '业务痛点链路', count: IMAGE_EVIDENCE_LIST.filter((i) => i.category === 'pain_point').length },
    { id: 'architecture', label: '三层语义架构', count: IMAGE_EVIDENCE_LIST.filter((i) => i.category === 'architecture').length },
    { id: 'engineering', label: '平台工程装载', count: IMAGE_EVIDENCE_LIST.filter((i) => i.category === 'engineering').length },
    { id: 'cases', label: '真实诊断案例', count: IMAGE_EVIDENCE_LIST.filter((i) => i.category === 'cases').length },
    { id: 'feedback', label: '业务一线好评', count: IMAGE_EVIDENCE_LIST.filter((i) => i.category === 'feedback').length },
  ];

  const filteredImages =
    selectedCategory === 'all'
      ? IMAGE_EVIDENCE_LIST
      : IMAGE_EVIDENCE_LIST.filter((img) => img.category === selectedCategory);

  return (
    <section id="gallery" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header with Roadshow Mega Typography */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono text-cyan-400 tracking-[0.3em] uppercase mb-2">
              FULL EVIDENCE ARCHIVE · 全 链 路 申 报 原 件
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-3">
              实录佐证中心 <span className="text-cyan-400 font-normal">/ Evidence Center</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              38 张申报原件，真实可查。从痛点链路的探源到三层语义规范的确立，每一个论断背后皆有真实系统日志与业务记录印证。
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#080E20] border border-white/10 rounded-full">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === c.id
                    ? 'bg-cyan-500 text-slate-950 font-black shadow-lg shadow-cyan-500/25'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{c.label}</span>
                <span className="ml-1 opacity-70 font-mono">({c.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Cards styled like Haojie Era Community Cards (h-[340px], gradient overlay, hover zoom) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((img) => (
            <div
              key={img.id}
              onClick={() => onSelectImage(img)}
              className="group relative h-[340px] overflow-hidden rounded-3xl border border-white/10 hover:border-cyan-400/60 transition-all cursor-pointer shadow-2xl bg-slate-950"
            >
              <img
                src={img.src}
                alt={img.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/60 to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-7">
                <span className="mb-2.5 w-fit rounded-full border border-cyan-500/30 bg-cyan-500/20 px-3 py-0.5 text-[11px] font-bold text-cyan-300 backdrop-blur-md">
                  {img.category === 'pain_point'
                    ? '痛点链路'
                    : img.category === 'architecture'
                    ? '三层架构'
                    : img.category === 'engineering'
                    ? '工程装载'
                    : img.category === 'cases'
                    ? '真实诊断'
                    : '一线好评'}
                </span>

                <h3 className="mb-1 text-lg sm:text-xl font-black text-white group-hover:text-cyan-300 transition-colors">
                  {img.title}
                </h3>

                <p className="text-xs text-slate-300 mb-4 line-clamp-2 leading-relaxed font-normal">
                  {img.caption}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs">
                  <span className="text-[11px] font-mono text-slate-400">
                    原件编号: {img.src.replace('/images/', '').replace('.jpg', '').toUpperCase()}
                  </span>
                  <div className="flex items-center gap-1.5 text-cyan-400 font-bold group-hover:text-cyan-300 transition-colors">
                    <span>放大查验</span>
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
