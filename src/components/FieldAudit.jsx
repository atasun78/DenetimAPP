import { useState } from 'react';
import {
  Wifi,
  WifiOff,
  Camera,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Layers,
  Eye,
  Users,
  Heart,
  Zap,
  Store,
  Star,
  Clock,
  MapPin,
  Upload,
  Check,
  RotateCcw,
} from 'lucide-react';

const questions = [
  {
    id: 1,
    category: 'Görsel Mağazacılık',
    categoryIcon: Eye,
    categoryColor: 'bg-violet-500',
    categoryBg: 'bg-violet-50',
    categoryText: 'text-violet-700',
    question: 'Vitrin aydınlatmaları standartlara uygun mu?',
    hint: 'Tüm vitrin spotlarını ve genel mağaza aydınlatmasını kontrol edin.',
    options: ['Evet', 'Kısmen', 'Hayır'],
    maxScore: 10,
  },
  {
    id: 2,
    category: 'Görsel Mağazacılık',
    categoryIcon: Eye,
    categoryColor: 'bg-violet-500',
    categoryBg: 'bg-violet-50',
    categoryText: 'text-violet-700',
    question: 'Ürün fiyat etiketleri eksiksiz ve okunaklı mı?',
    hint: 'Tüm raf ve askılıklarda fiyat etiketlerini kontrol edin.',
    options: ['Evet', 'Kısmen', 'Hayır'],
    maxScore: 10,
  },
  {
    id: 3,
    category: 'Görsel Mağazacılık',
    categoryIcon: Eye,
    categoryColor: 'bg-violet-500',
    categoryBg: 'bg-violet-50',
    categoryText: 'text-violet-700',
    question: 'Mankenler ve teşhir alanları güncel koleksiyonu yansıtıyor mu?',
    hint: 'Sezon koleksiyonu ve promosyon ürünleri için teşhir standartlarını kontrol edin.',
    options: ['Evet', 'Kısmen', 'Hayır'],
    maxScore: 10,
  },
  {
    id: 4,
    category: 'CX – Dış Müşteri',
    categoryIcon: Users,
    categoryColor: 'bg-emerald-500',
    categoryBg: 'bg-emerald-50',
    categoryText: 'text-emerald-700',
    question: 'Personel müşteriyi 1 dakika içinde karşıladı mı?',
    hint: 'Müşteri giriş anından itibaren ilk karşılama süresini gözlemleyin.',
    options: ['Evet', 'Kısmen', 'Hayır'],
    maxScore: 15,
  },
  {
    id: 5,
    category: 'CX – Dış Müşteri',
    categoryIcon: Users,
    categoryColor: 'bg-emerald-500',
    categoryBg: 'bg-emerald-50',
    categoryText: 'text-emerald-700',
    question: 'Kasa bekleme süresi 3 dakikanın altında mı?',
    hint: 'En yoğun saatte kasa beklemesi gözlemlenmeli. Kasa açık sayısını not edin.',
    options: ['Evet', 'Kısmen', 'Hayır'],
    maxScore: 15,
  },
  {
    id: 6,
    category: 'CX – Dış Müşteri',
    categoryIcon: Users,
    categoryColor: 'bg-emerald-500',
    categoryBg: 'bg-emerald-50',
    categoryText: 'text-emerald-700',
    question: 'Personel ürün bilgisi konusunda yetkin ve yönlendirici mi?',
    hint: 'Personele ürün sorusu yöneltin, yanıtı ve yönlendirme kalitesini değerlendirin.',
    options: ['Evet', 'Kısmen', 'Hayır'],
    maxScore: 10,
  },
  {
    id: 7,
    category: 'EX – Çalışan',
    categoryIcon: Heart,
    categoryColor: 'bg-rose-500',
    categoryBg: 'bg-rose-50',
    categoryText: 'text-rose-700',
    question: 'Arka ofis dinlenme alanı temiz ve düzenli mi?',
    hint: 'Personel dinlenme odası, mutfak alanı ve kişisel dolap bölümünü inceleyin.',
    options: ['Evet', 'Kısmen', 'Hayır'],
    maxScore: 10,
  },
  {
    id: 8,
    category: 'EX – Çalışan',
    categoryIcon: Heart,
    categoryColor: 'bg-rose-500',
    categoryBg: 'bg-rose-50',
    categoryText: 'text-rose-700',
    question: 'Vardiya çizelgesi ve iç duyurular arka ofiste asılı mı?',
    hint: 'Güncel vardiya listesi, yönetici iletişimleri ve zorunlu duyuruların bulunduğundan emin olun.',
    options: ['Evet', 'Kısmen', 'Hayır'],
    maxScore: 10,
  },
  {
    id: 9,
    category: 'Operasyon',
    categoryIcon: Zap,
    categoryColor: 'bg-indigo-500',
    categoryBg: 'bg-indigo-50',
    categoryText: 'text-indigo-700',
    question: 'Stok alanı düzenli ve güvenli erişim sağlıyor mu?',
    hint: 'Acil çıkış yollarının açık olduğunu ve depo düzeninin kurallara uyduğunu kontrol edin.',
    options: ['Evet', 'Kısmen', 'Hayır'],
    maxScore: 10,
  },
  {
    id: 10,
    category: 'Operasyon',
    categoryIcon: Zap,
    categoryColor: 'bg-indigo-500',
    categoryBg: 'bg-indigo-50',
    categoryText: 'text-indigo-700',
    question: 'Hijyen ve temizlik standartları tüm alanlarda karşılanıyor mu?',
    hint: 'Tuvalet, kasa bölgesi, soyunma kabinleri ve zemin temizliğini değerlendirin.',
    options: ['Evet', 'Kısmen', 'Hayır'],
    maxScore: 10,
  },
];

const storeInfo = {
  name: 'Kadıköy Şubesi',
  auditor: 'Mehmet Demir',
  date: '20 Şub 2026',
  time: '10:30',
};

const optionConfig = {
  Evet: { color: 'border-emerald-400 bg-emerald-50 text-emerald-700', icon: CheckCircle, score: 1.0 },
  Kısmen: { color: 'border-amber-400 bg-amber-50 text-amber-700', icon: AlertTriangle, score: 0.5 },
  Hayır: { color: 'border-red-400 bg-red-50 text-red-700', icon: XCircle, score: 0.0 },
};

function EvidenceUpload({ answer }) {
  const [uploaded, setUploaded] = useState(false);

  if (answer !== 'Kısmen' && answer !== 'Hayır') return null;

  return (
    <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl">
      <div className="flex items-start gap-2 mb-3">
        <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
        <p className="text-xs font-semibold text-red-700">
          Uyumsuzluk tespit edildi. Kanıt fotoğrafı yüklenmesi zorunludur.
        </p>
      </div>
      <button
        onClick={() => setUploaded(!uploaded)}
        className={`w-full flex items-center justify-center gap-2.5 py-3 rounded-xl border-2 border-dashed transition-all duration-200 ${
          uploaded
            ? 'border-emerald-400 bg-emerald-50 text-emerald-700'
            : 'border-red-300 bg-white text-red-600 hover:border-red-400 hover:bg-red-50'
        }`}
      >
        {uploaded ? (
          <>
            <Check className="w-5 h-5" />
            <span className="text-sm font-semibold">Fotoğraf Yüklendi</span>
          </>
        ) : (
          <>
            <Camera className="w-5 h-5" />
            <span className="text-sm font-semibold">Kanıt Fotoğrafı Yükle</span>
          </>
        )}
      </button>
      {!uploaded && (
        <p className="text-xs text-red-500 text-center mt-2">* Bu alan tamamlanmadan ilerlenemez</p>
      )}
    </div>
  );
}

export default function FieldAudit() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isOffline] = useState(false);
  const [completed, setCompleted] = useState(false);

  const current = questions[currentIdx];
  const progress = Math.round(((currentIdx + 1) / questions.length) * 100);
  const answeredCount = Object.keys(answers).length;
  const CategoryIcon = current.categoryIcon;

  const needsEvidence =
    answers[current.id] === 'Kısmen' || answers[current.id] === 'Hayır';

  const canGoNext =
    answers[current.id] !== undefined &&
    (!needsEvidence || true); // In real app, would check photo uploaded

  const handleSelect = (option) => {
    setAnswers((prev) => ({ ...prev, [current.id]: option }));
  };

  const handleNext = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx((i) => i + 1);
    } else {
      setCompleted(true);
    }
  };

  const handlePrev = () => {
    if (currentIdx > 0) setCurrentIdx((i) => i - 1);
  };

  const calculateScore = () => {
    let total = 0;
    let max = 0;
    questions.forEach((q) => {
      max += q.maxScore;
      if (answers[q.id]) {
        total += q.maxScore * optionConfig[answers[q.id]].score;
      }
    });
    return Math.round((total / max) * 100);
  };

  if (completed) {
    const score = calculateScore();
    return (
      <div className="min-h-screen bg-slate-50 flex items-start justify-center py-8 px-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-br from-indigo-500 to-violet-600 p-8 text-center text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-1">Denetim Tamamlandı!</h2>
              <p className="text-indigo-200 text-sm">{storeInfo.name} · {storeInfo.date}</p>
            </div>
            <div className="p-6">
              <div className="text-center mb-6">
                <p className="text-5xl font-bold text-slate-800 mb-1">{score}%</p>
                <p className="text-sm text-slate-500">Genel Denetim Skoru</p>
                <div className="w-full bg-slate-100 rounded-full h-3 mt-3">
                  <div
                    className={`h-3 rounded-full transition-all ${
                      score >= 80 ? 'bg-emerald-500' : score >= 60 ? 'bg-amber-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${score}%` }}
                  ></div>
                </div>
              </div>
              <div className="space-y-2 mb-6">
                {questions.map((q) => {
                  const ans = answers[q.id];
                  if (!ans) return null;
                  const cfg = optionConfig[ans];
                  const Icon = cfg.icon;
                  return (
                    <div key={q.id} className="flex items-center justify-between py-2 border-b border-slate-100">
                      <p className="text-xs text-slate-600 flex-1 pr-3 truncate">{q.question}</p>
                      <span className={`flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full border ${cfg.color}`}>
                        <Icon className="w-3 h-3" />
                        {ans}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => { setCompleted(false); setCurrentIdx(0); setAnswers({}); }}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl border border-slate-200 text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  Yeni Denetim
                </button>
                <button className="flex items-center justify-center gap-2 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition-colors text-sm font-semibold text-white">
                  <Upload className="w-4 h-4" />
                  Raporla & Gönder
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-slate-50 flex items-start justify-center py-6 px-4">
      <div className="w-full max-w-md">
        {/* Offline Badge + Store Info */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-1.5 shadow-sm border border-slate-200">
            <Store className="w-4 h-4 text-slate-500" />
            <span className="text-xs font-semibold text-slate-700">{storeInfo.name}</span>
          </div>
          <div className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border shadow-sm ${
            isOffline
              ? 'bg-amber-50 border-amber-200 text-amber-700'
              : 'bg-emerald-50 border-emerald-200 text-emerald-700'
          }`}>
            {isOffline ? <WifiOff className="w-3.5 h-3.5" /> : <Wifi className="w-3.5 h-3.5" />}
            {isOffline ? 'Çevrimdışı' : 'Çevrimiçi'}
          </div>
        </div>

        {/* Auditor Info */}
        <div className="flex items-center gap-4 bg-white rounded-xl p-3 mb-4 border border-slate-100 shadow-sm text-xs text-slate-500">
          <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-indigo-400" />{storeInfo.name}</span>
          <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-indigo-400" />{storeInfo.time}</span>
          <span className="flex items-center gap-1.5"><Star className="w-3.5 h-3.5 text-indigo-400" />{storeInfo.auditor}</span>
        </div>

        {/* Progress Bar */}
        <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm mb-4">
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="font-semibold text-slate-600">İlerleme</span>
            <span className="font-bold text-indigo-600">{currentIdx + 1} / {questions.length} Soru</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
            <div
              className="h-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex gap-1 mt-2.5 flex-wrap">
            {questions.map((q, i) => (
              <div
                key={q.id}
                className={`w-5 h-5 rounded flex items-center justify-center text-[9px] font-bold cursor-pointer transition-all ${
                  i === currentIdx
                    ? 'bg-indigo-600 text-white scale-110'
                    : answers[q.id]
                    ? answers[q.id] === 'Evet'
                      ? 'bg-emerald-400 text-white'
                      : answers[q.id] === 'Kısmen'
                      ? 'bg-amber-400 text-white'
                      : 'bg-red-400 text-white'
                    : 'bg-slate-200 text-slate-400'
                }`}
                onClick={() => setCurrentIdx(i)}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-md overflow-hidden mb-4">
          {/* Category Header */}
          <div className={`px-5 py-3 ${current.categoryBg} flex items-center gap-2`}>
            <div className={`w-6 h-6 rounded-lg ${current.categoryColor} flex items-center justify-center`}>
              <CategoryIcon className="w-3.5 h-3.5 text-white" />
            </div>
            <div className="flex-1">
              <span className={`text-xs font-bold uppercase tracking-wide ${current.categoryText}`}>
                {current.category}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Layers className={`w-3 h-3 ${current.categoryText} opacity-60`} />
              <span className={`text-xs font-semibold ${current.categoryText} opacity-70`}>
                Soru {currentIdx + 1}/{questions.length}
              </span>
            </div>
          </div>

          <div className="p-5">
            {/* Question */}
            <h3 className="text-base font-bold text-slate-800 mb-2 leading-snug">
              {current.question}
            </h3>
            <p className="text-xs text-slate-400 mb-5 leading-relaxed italic">
              {current.hint}
            </p>

            {/* Answer Options */}
            <div className="space-y-2.5">
              {current.options.map((option) => {
                const cfg = optionConfig[option];
                const Icon = cfg.icon;
                const isSelected = answers[current.id] === option;
                return (
                  <button
                    key={option}
                    onClick={() => handleSelect(option)}
                    className={`w-full flex items-center gap-3 p-3.5 rounded-xl border-2 transition-all duration-200 text-left ${
                      isSelected
                        ? cfg.color + ' shadow-sm scale-[1.01]'
                        : 'border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300 hover:bg-white'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      isSelected ? 'bg-white/60' : 'bg-white'
                    }`}>
                      <Icon className={`w-4 h-4 ${isSelected ? '' : 'text-slate-400'}`} />
                    </div>
                    <span className="font-semibold text-sm">{option}</span>
                    {isSelected && (
                      <div className="ml-auto w-5 h-5 rounded-full bg-white/60 flex items-center justify-center">
                        <Check className="w-3 h-3" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Evidence Upload (conditional) */}
            <EvidenceUpload answer={answers[current.id]} />

            {/* Max Score */}
            <p className="text-xs text-slate-400 mt-4 text-right">
              Bu sorunun ağırlığı: <span className="font-bold text-slate-600">{current.maxScore} puan</span>
            </p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={handlePrev}
            disabled={currentIdx === 0}
            className="flex items-center gap-2 px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-600 font-semibold text-sm disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors shadow-sm"
          >
            <ChevronLeft className="w-4 h-4" />
            Geri
          </button>
          <button
            onClick={handleNext}
            disabled={!canGoNext}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition-colors text-white font-semibold text-sm disabled:opacity-40 disabled:cursor-not-allowed shadow-sm"
          >
            {currentIdx === questions.length - 1 ? 'Denetimi Tamamla' : 'Sonraki Soru'}
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Summary */}
        <div className="mt-4 text-center text-xs text-slate-400">
          {answeredCount} soru cevaplandı · {questions.length - answeredCount} soru kaldı
        </div>
      </div>
    </div>
  );
}
