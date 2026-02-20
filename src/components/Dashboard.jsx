import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';
import {
  TrendingUp,
  TrendingDown,
  Star,
  Users,
  Cpu,
  AlertTriangle,
  CheckCircle,
  ArrowUpRight,
  ArrowDownRight,
  Sparkles,
  ChevronRight,
  BarChart2,
  ThumbsUp,
  Smile,
  Zap,
} from 'lucide-react';

const chartData = [
  { ay: 'Eyl', operasyon: 72, cx: 68, ex: 74 },
  { ay: 'Eki', operasyon: 76, cx: 71, ex: 77 },
  { ay: 'Kas', operasyon: 80, cx: 74, ex: 80 },
  { ay: 'Ara', operasyon: 78, cx: 69, ex: 82 },
  { ay: 'Oca', operasyon: 83, cx: 75, ex: 85 },
  { ay: 'Şub', operasyon: 85, cx: 79, ex: 88 },
];

const storeScores = [
  { store: 'Bağcılar Mağazası', score: 91, trend: 'up', nps: 74, delta: '+3' },
  { store: 'Kadıköy Şubesi', score: 87, trend: 'up', nps: 71, delta: '+5' },
  { store: 'Ataşehir AVM', score: 84, trend: 'down', nps: 68, delta: '-2' },
  { store: 'Beşiktaş Merkez', score: 79, trend: 'down', nps: 63, delta: '-4' },
  { store: 'Üsküdar Şubesi', score: 92, trend: 'up', nps: 78, delta: '+7' },
];

const recentAudits = [
  { store: 'Üsküdar Şubesi', date: '20 Şub', score: 92, status: 'Tamamlandı' },
  { store: 'Bağcılar Mağazası', date: '19 Şub', score: 91, status: 'Tamamlandı' },
  { store: 'Kadıköy Şubesi', date: '18 Şub', score: 87, status: 'Tamamlandı' },
  { store: 'Beşiktaş Merkez', date: '17 Şub', score: 79, status: 'İncelemede' },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-lg">
        <p className="text-xs font-semibold text-slate-600 mb-2">{label}</p>
        {payload.map((entry) => (
          <div key={entry.dataKey} className="flex items-center gap-2 text-xs">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }}></span>
            <span className="text-slate-600">{entry.name}:</span>
            <span className="font-bold text-slate-800">{entry.value}%</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

const HeroCard = ({ icon: Icon, label, value, subtitle, color, trend, trendValue }) => (
  <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-200">
    <div className="flex items-start justify-between mb-4">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${color}`}>
        <Icon className="w-5 h-5 text-white" />
      </div>
      {trend && (
        <span className={`flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full ${
          trend === 'up' ? 'text-emerald-700 bg-emerald-50' : 'text-red-600 bg-red-50'
        }`}>
          {trend === 'up' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
          {trendValue}
        </span>
      )}
    </div>
    <p className="text-3xl font-bold text-slate-800 leading-none mb-1">{value}</p>
    <p className="text-sm font-semibold text-slate-600 mt-2">{label}</p>
    <p className="text-xs text-slate-400 mt-0.5">{subtitle}</p>
  </div>
);

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">Yönetim Paneli</h1>
            <p className="text-sm text-slate-500 mt-1">Balanced Scorecard · Şubat 2026</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              Canlı Veri
            </span>
            <button className="flex items-center gap-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors px-4 py-2 rounded-lg shadow-sm">
              <BarChart2 className="w-4 h-4" />
              Rapor İndir
            </button>
          </div>
        </div>
      </div>

      {/* Hero Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <HeroCard
          icon={Star}
          label="Ortalama Denetim Skoru"
          value="85%"
          subtitle="5 mağaza ortalaması"
          color="bg-indigo-500"
          trend="up"
          trendValue="+4%"
        />
        <HeroCard
          icon={ThumbsUp}
          label="Dış Müşteri NPS"
          value="72"
          subtitle="Endüstri ort. 58"
          color="bg-emerald-500"
          trend="up"
          trendValue="+6 puan"
        />
        <HeroCard
          icon={Smile}
          label="Çalışan Memnuniyeti"
          value="88%"
          subtitle="eNPS tabanlı ölçüm"
          color="bg-violet-500"
          trend="up"
          trendValue="+3%"
        />
        <HeroCard
          icon={Zap}
          label="Bekleyen AI Görevleri"
          value="12"
          subtitle="4 yüksek öncelikli"
          color="bg-amber-500"
          trend="down"
          trendValue="-3 bu hafta"
        />
      </div>

      {/* Main Grid: Chart + AI Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Line Chart */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-base font-bold text-slate-800">Performans Trendi</h2>
              <p className="text-xs text-slate-400 mt-0.5">Son 6 ay · Operasyon vs CX vs EX skorları</p>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-500">
              <span className="flex items-center gap-1.5"><span className="w-3 h-0.5 bg-indigo-500 rounded inline-block"></span>Operasyon</span>
              <span className="flex items-center gap-1.5"><span className="w-3 h-0.5 bg-emerald-500 rounded inline-block"></span>CX</span>
              <span className="flex items-center gap-1.5"><span className="w-3 h-0.5 bg-violet-500 rounded inline-block"></span>EX</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={chartData} margin={{ top: 5, right: 5, bottom: 0, left: -20 }}>
              <defs>
                <linearGradient id="gradOp" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="gradCx" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="gradEx" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="ay" tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} domain={[60, 100]} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="operasyon" name="Operasyon" stroke="#6366f1" strokeWidth={2.5} fill="url(#gradOp)" dot={{ fill: '#6366f1', strokeWidth: 0, r: 4 }} activeDot={{ r: 6 }} />
              <Area type="monotone" dataKey="cx" name="CX" stroke="#10b981" strokeWidth={2.5} fill="url(#gradCx)" dot={{ fill: '#10b981', strokeWidth: 0, r: 4 }} activeDot={{ r: 6 }} />
              <Area type="monotone" dataKey="ex" name="EX" stroke="#8b5cf6" strokeWidth={2.5} fill="url(#gradEx)" dot={{ fill: '#8b5cf6', strokeWidth: 0, r: 4 }} activeDot={{ r: 6 }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* AI Executive Summary */}
        <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-5 rounded-full -translate-y-10 translate-x-10"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-5 rounded-full translate-y-10 -translate-x-10"></div>
          <div className="relative">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-xs font-semibold text-indigo-200 uppercase tracking-wide">AI Yönetici Özeti</p>
                <p className="text-xs text-indigo-300">GPT-4o · Az önce güncellendi</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white/10 rounded-xl p-3 border border-white/10">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-300 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-white/90 leading-relaxed">
                    <span className="font-semibold text-white">Kasa hattındaki personel eksikliği</span> NPS skorunu hafta içi ortalama 8 puan düşürüyor. Hafta sonu takviyesi kritik önem taşıyor.
                  </p>
                </div>
              </div>

              <div className="bg-white/10 rounded-xl p-3 border border-white/10">
                <div className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-emerald-300 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-white/90 leading-relaxed">
                    <span className="font-semibold text-white">Üsküdar Şubesi</span> bu ay 7 NPS puan artışıyla lider konumda. Başarı faktörü: Kişiselleştirilmiş karşılama protokolü.
                  </p>
                </div>
              </div>

              <div className="bg-white/10 rounded-xl p-3 border border-white/10">
                <div className="flex items-start gap-2">
                  <TrendingDown className="w-4 h-4 text-red-300 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-white/90 leading-relaxed">
                    <span className="font-semibold text-white">Beşiktaş Merkez</span> görsel mağazacılık denetiminde 79 puan alarak alt sınırın altına gerildi. Acil iyileştirme planı devreye alınmalı.
                  </p>
                </div>
              </div>

              <div className="bg-white/10 rounded-xl p-3 border border-white/10">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-300 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-white/90 leading-relaxed">
                    <span className="font-semibold text-white">EX skoru</span> 6 ay içinde 74'ten 88'e yükseldi. Arka ofis iyileştirme programının doğrudan etkisi gözlemlendi.
                  </p>
                </div>
              </div>
            </div>

            <button className="mt-4 w-full flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 transition-colors rounded-lg py-2.5 text-sm font-medium text-white border border-white/20">
              Detaylı AI Analizi
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Grid: Store Rankings + Recent Audits */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Store Rankings */}
        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-base font-bold text-slate-800">Mağaza Sıralaması</h2>
              <p className="text-xs text-slate-400 mt-0.5">Denetim skoru bazlı · Şubat 2026</p>
            </div>
            <button className="text-xs text-indigo-600 font-medium hover:underline flex items-center gap-1">
              Tümünü Gör <ChevronRight className="w-3 h-3" />
            </button>
          </div>
          <div className="space-y-3">
            {storeScores.map((item, idx) => (
              <div key={item.store} className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                  idx === 0 ? 'bg-amber-100 text-amber-700' :
                  idx === 1 ? 'bg-slate-100 text-slate-600' :
                  idx === 2 ? 'bg-orange-50 text-orange-600' :
                  'bg-slate-50 text-slate-500'
                }`}>
                  {idx + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-semibold text-slate-700 truncate">{item.store}</p>
                    <span className={`flex items-center gap-1 text-xs font-bold ml-2 ${
                      item.trend === 'up' ? 'text-emerald-600' : 'text-red-500'
                    }`}>
                      {item.trend === 'up' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                      {item.delta}
                    </span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-1.5">
                    <div
                      className={`h-1.5 rounded-full ${
                        item.score >= 90 ? 'bg-emerald-500' :
                        item.score >= 80 ? 'bg-indigo-500' :
                        'bg-amber-500'
                      }`}
                      style={{ width: `${item.score}%` }}
                    ></div>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className={`text-sm font-bold ${
                    item.score >= 90 ? 'text-emerald-600' :
                    item.score >= 80 ? 'text-indigo-600' :
                    'text-amber-600'
                  }`}>{item.score}%</p>
                  <p className="text-xs text-slate-400">NPS {item.nps}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Audits */}
        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-base font-bold text-slate-800">Son Denetimler</h2>
              <p className="text-xs text-slate-400 mt-0.5">Son 7 gün · 4 denetim</p>
            </div>
            <button className="text-xs text-indigo-600 font-medium hover:underline flex items-center gap-1">
              Tümünü Gör <ChevronRight className="w-3 h-3" />
            </button>
          </div>
          <div className="space-y-3">
            {recentAudits.map((audit) => (
              <div key={audit.store + audit.date} className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors group cursor-pointer">
                <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <ClipboardList className="w-5 h-5 text-indigo-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-700">{audit.store}</p>
                  <p className="text-xs text-slate-400">{audit.date} · Saha Denetimi</p>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className={`text-sm font-bold ${
                    audit.score >= 90 ? 'text-emerald-600' :
                    audit.score >= 80 ? 'text-indigo-600' :
                    'text-amber-600'
                  }`}>{audit.score}%</span>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    audit.status === 'Tamamlandı'
                      ? 'text-emerald-700 bg-emerald-50'
                      : 'text-amber-700 bg-amber-50'
                  }`}>
                    {audit.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Stats */}
          <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-3 gap-3">
            <div className="text-center">
              <p className="text-lg font-bold text-slate-800">87%</p>
              <p className="text-xs text-slate-400">Ort. Skor</p>
            </div>
            <div className="text-center border-x border-slate-100">
              <p className="text-lg font-bold text-emerald-600">3/4</p>
              <p className="text-xs text-slate-400">Tamamlandı</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold text-amber-600">1</p>
              <p className="text-xs text-slate-400">İncelemede</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

