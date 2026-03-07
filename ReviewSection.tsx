import React from "react";
import { Star } from "lucide-react";
import { Review } from "./types";

const Stars: React.FC<{ count: number }> = ({ count }) => (
  <div className="flex items-center gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={14}
        className={i < count ? "text-yellow-400" : "text-slate-200"}
      />
    ))}
  </div>
);

const ReviewCard: React.FC<{ r: Review }> = ({ r }) => (
  <div className="min-w-[18rem] max-w-md bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
    <div className="flex items-start gap-4">
      <img
        src={r.avatarUrl || ""}
        alt={r.name}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <div className="text-sm font-black text-slate-900">{r.name}</div>
        <div className="text-xs text-slate-400">
          {r.role}
          {r.company ? ` • ${r.company}` : ""}
        </div>
      </div>
      <div className="ml-auto">
        <Stars count={Math.max(0, Math.min(5, Math.round(r.rating)))} />
      </div>
    </div>

    <p className="mt-4 text-slate-600 font-medium">“{r.quote}”</p>
  </div>
);

const ReviewSection: React.FC<{ reviews: Review[] }> = ({ reviews }) => {
  if (!reviews || reviews.length === 0) return null;

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.3em] text-slate-400">
              What clients say
            </h3>
            <h2 className="text-4xl font-extrabold tracking-tighter text-slate-900">
              Trusted by teams worldwide
            </h2>
          </div>
        </div>

        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide">
          {reviews.map((r, idx) => (
            <div key={idx} className="snap-start">
              <ReviewCard r={r} />
            </div>
          ))}
        </div>

        <div className="hidden md:grid grid-cols-3 gap-6 mt-8">
          {reviews.slice(0, 3).map((r, idx) => (
            <ReviewCard key={idx} r={r} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
