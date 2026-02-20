import { useState } from 'react';
import {
  Sparkles,
  User,
  Calendar,
  ChevronRight,
  Plus,
  AlertTriangle,
  AlertCircle,
  Info,
  Clock,
  Tag,
  Store,
  Eye,
  Users,
  Heart,
  Zap,
  CheckCircle,
  ArrowRight,
  MoreHorizontal,
  Filter,
} from 'lucide-react';

const initialTasks = {
  open: [
    {
      id: 1,
      title: 'Beşiktaş Merkez vitrin aydınlatmalarını güncelle',
      description: 'Denetimde tespit edilen 3 arızalı spot lambayı değiştir, aydınlatma yoğunluğunu %80 seviyesine getir.',
      category: 'Görsel Mağazacılık',
      categoryIcon: Eye,
      categoryColor: 'bg-violet-100 text-violet-700',
      priority: 'High',
      dueDate: '25 Şub 2026',
      assignee: 'Ali Yılmaz',
      store: 'Beşiktaş Merkez',
      aiSuggested: true,
      score: '68/100',
    },
    {
      id: 2,
      title: 'Kasa hattı personel takviyesi – hafta sonu planla',
      description: 'Cumartesi-Pazar günleri peak saatlerinde (12:00–17:00) en az 2 ek kasiyer görevlendir.',
      category: 'CX – Dış Müşteri',
      categoryIcon: Users,
      categoryColor: 'bg-emerald-100 text-emerald-700',
      priority: 'High',
      dueDate: '22 Şub 2026',
      assignee: 'Ayşe Kaya',
      store: 'Kadıköy Şubesi',
      aiSuggested: true,
      score: '60/100',
    },
    {
      id: 3,
      title: 'Arka ofis dinlenme alanını temizle ve düzenle',
      description: 'Personel mutfağındaki arızalı ekipmanları onar, temizlik takvimini asılı hale getir.',
      category: 'EX – Çalışan',
      categoryIcon: Heart,
      categoryColor: 'bg-rose-100 text-rose-700',
      priority: 'Medium',
      dueDate: '28 Şub 2026',
      assignee: 'Fatma Şahin',
      store: 'Ataşehir AVM',
      aiSuggested: false,
      score: '70/100',
    },
    {
      id: 4,
      title: 'Karşılama protokolü eğitimi düzenle',
      description: '1 dakika karşılama standardı için tüm satış danışmanlarına refresh training ver.',
      category: 'CX – Dış Müşteri',
      categoryIcon: Users,
      categoryColor: 'bg-emerald-100 text-emerald-700',
      priority: 'Medium',
      dueDate: '1 Mar 2026',
      assignee: 'Mehmet Demir',
      store: 'Bağcılar Mağazası',
      aiSuggested: true,
      score: '72/100',
    },
    {
      id: 5,
      title: 'Ürün fiyat etiketi güncellemesini tamamla',
      description: 'Yeni sezon fiyat etiketlerini tüm raf ve askılıklara yerleştir, eski etiketleri kaldır.',
      category: 'Görsel Mağazacılık',
      categoryIcon: Eye,
      categoryColor: 'bg-violet-100 text-violet-700',
      priority: 'Low',
      dueDate: '5 Mar 2026',
      assignee: 'Zeynep Arslan',
      store: 'Üsküdar Şubesi',
      aiSuggested: false,
      score: '85/100',
    },
  ],
  inProgress: [
    {
      id: 6,
      title: 'Depo güvenlik koridorunu yeniden düzenle',
      description: 'Acil çıkış yolunu kapatan stok raflarını kaydır, yangın söndürücülerin önlerini aç.',
      category: 'Operasyon',
      categoryIcon: Zap,
      categoryColor: 'bg-indigo-100 text-indigo-700',
      priority: 'High',
      dueDate: '21 Şub 2026',
      assignee: 'Can Öztürk',
      store: 'Beşiktaş Merkez',
      aiSuggested: false,
      score: '55/100',
      progress: 65,
    },
    {
      id: 7,
      title: 'Manken yenileme ve yeni koleksiyon teşhiri',
      description: 'İlkbahar/yaz 2026 koleksiyonunun vitrindeki manken ve teşhir düzenini güncelle.',
      category: 'Görsel Mağazacılık',
      categoryIcon: Eye,
      categoryColor: 'bg-violet-100 text-violet-700',
      priority: 'Medium',
      dueDate: '24 Şub 2026',
      assignee: 'Elif Koç',
      store: 'Kadıköy Şubesi',
      aiSuggested: true,
      score: '74/100',
      progress: 40,
    },
    {
      id: 8,
      title: 'Çalışan memnuniyeti anket sonuçlarını yorumla',
      description: 'Q1 2026 eNPS anket sonuçlarını analiz et, düşük puanlı departmanlara aksiyon planı hazırla.',
      category: 'EX – Çalışan',
      categoryIcon: Heart,
      categoryColor: 'bg-rose-100 text-rose-700',
      priority: 'Medium',
      dueDate: '26 Şub 2026',
      assignee: 'Ayşe Kaya',
      store: 'Tüm Mağazalar',
      aiSuggested: true,
      score: '—',
      progress: 80,
    },
  ],
  done: [
    {
      id: 9,
      title: 'Üsküdar Şubesi karşılama protokolü uygulaması',
      description: 'Tüm satış ekibine 1 dk karşılama eğitimi verildi. NPS +7 artış gözlemlendi.',
      category: 'CX – Dış Müşteri',
      categoryIcon: Users,
      categoryColor: 'bg-emerald-100 text-emerald-700',
      priority: 'High',
      dueDate: '15 Şub 2026',
      assignee: 'Mehmet Demir',
      store: 'Üsküdar Şubesi',
      aiSuggested: true,
      result: 'NPS +7 artış',
    },
    {
      id: 10,
      title: 'Bağcılar aydınlatma sistem bakımı',
      description: 'Tüm spot lambalar yenilendi, vitrin aydınlatma yoğunluğu %90 seviyesine çıkarıldı.',
      category: 'Görsel Mağazacılık',
      categoryIcon: Eye,
      categoryColor: 'bg-violet-100 text-violet-700',
      priority: 'Medium',
      dueDate: '10 Şub 2026',
      assignee: 'Ali Yılmaz',
      store: 'Bağcılar Mağazası',
      aiSuggested: false,
      result: 'Skor +8 artış',
    },
    {
      id: 11,
      title: 'Kadıköy temizlik standartları iyileştirme',
      description: 'Günlük temizlik kontrol formu uygulamaya alındı, hijyen skoru 92 puana çıktı.',
      category: 'Operasyon',
      categoryIcon: Zap,
      categoryColor: 'bg-indigo-100 text-indigo-700',
      priority: 'Low',
      dueDate: '8 Şub 2026',
      assignee: 'Fatma Şahin',
      store: 'Kadıköy Şubesi',
      aiSuggested: false,
      result: 'Hijyen +12 puan',
    },
  ],
};

const priorityConfig = {
  High: { label: 'Yüksek', class: 'bg-red-100 text-red-700 border-red-200', icon: AlertTriangle },
  Medium: { label: 'Orta', class: 'bg-amber-100 text-amber-700 border-amber-200', icon: AlertCircle },
  Low: { label: 'Düşük', class: 'bg-slate-100 text-slate-600 border-slate-200', icon: Info },
};

const columnConfig = {
  open: {
    label: 'Açık',
    color: 'bg-slate-600',
    headerBg: 'bg-slate-50',
    border: 'border-slate-200',
    dot: 'bg-slate-400',
  },
  inProgress: {
    label: 'Devam Ediyor',
    color: 'bg-indigo-600',
    headerBg: 'bg-indigo-50',
    border: 'border-indigo-200',
    dot: 'bg-indigo-500',
  },
  done: {
    label: 'Tamamlandı',
    color: 'bg-emerald-600',
    headerBg: 'bg-emerald-50',
    border: 'border-emerald-200',
    dot: 'bg-emerald-500',
  },
};

function TaskCard({ task, column }) {
  const priority = priorityConfig[task.priority];
  const PriorityIcon = priority.icon;
  const CategoryIcon = task.categoryIcon;

  return (
    <div className={`bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden group cursor-pointer ${
      column === 'done' ? 'opacity-80' : ''
    }`}>
      {/* AI Suggestion Label */}
      {task.aiSuggested && (
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-indigo-50 to-violet-50 border-b border-indigo-100">
          <Sparkles className="w-3 h-3 text-indigo-500" />
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-wide">AI Önerisi</span>
          <span className="ml-auto text-xs text-indigo-400">Next Best Action</span>
        </div>
      )}

      <div className="p-4">
        {/* Top: Category + Priority */}
        <div className="flex items-center justify-between mb-2.5">
          <span className={`flex items-center gap-1.5 text-xs font-semibold px-2 py-1 rounded-lg ${task.categoryColor}`}>
            <CategoryIcon className="w-3 h-3" />
            {task.category}
          </span>
          <span className={`flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full border ${priority.class}`}>
            <PriorityIcon className="w-3 h-3" />
            {priority.label}
          </span>
        </div>

        {/* Title */}
        <h4 className={`text-sm font-bold leading-snug mb-2 ${column === 'done' ? 'text-slate-500 line-through' : 'text-slate-800'}`}>
          {task.title}
        </h4>

        {/* Description */}
        <p className="text-xs text-slate-500 leading-relaxed mb-3 line-clamp-2">
          {task.description}
        </p>

        {/* Progress bar (for inProgress) */}
        {column === 'inProgress' && task.progress !== undefined && (
          <div className="mb-3">
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="text-slate-400">İlerleme</span>
              <span className="font-semibold text-indigo-600">{task.progress}%</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-1.5">
              <div
                className="h-1.5 rounded-full bg-indigo-500 transition-all"
                style={{ width: `${task.progress}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Result badge (for done) */}
        {column === 'done' && task.result && (
          <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-2.5 py-1.5 mb-3">
            <CheckCircle className="w-3.5 h-3.5" />
            Sonuç: {task.result}
          </div>
        )}

        {/* Score Badge */}
        {task.score && task.score !== '—' && (
          <div className="flex items-center gap-1 text-xs text-slate-400 mb-3">
            <Tag className="w-3 h-3" />
            <span>Denetim skoru: <span className="font-semibold text-slate-600">{task.score}</span></span>
          </div>
        )}

        {/* Bottom: Meta */}
        <div className="flex items-center justify-between pt-2.5 border-t border-slate-100">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-xs text-slate-400">
              <div className="w-5 h-5 bg-indigo-100 rounded-full flex items-center justify-center">
                <User className="w-3 h-3 text-indigo-500" />
              </div>
              <span className="font-medium text-slate-600 text-xs">{task.assignee.split(' ')[0]}</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-slate-400">
              <Store className="w-3 h-3" />
              <span className="truncate max-w-[80px]">{task.store.split(' ')[0]}</span>
            </div>
          </div>
          <div className={`flex items-center gap-1 text-xs font-medium ${
            column === 'done' ? 'text-slate-400' :
            new Date(task.dueDate.replace(' ', ' 1 ')) < new Date() ? 'text-red-500' : 'text-slate-500'
          }`}>
            <Calendar className="w-3 h-3" />
            {task.dueDate}
          </div>
        </div>
      </div>
    </div>
  );
}

function Column({ columnKey, tasks }) {
  const config = columnConfig[columnKey];
  const aiCount = tasks.filter((t) => t.aiSuggested).length;

  return (
    <div className="flex flex-col min-w-0 flex-1">
      {/* Column Header */}
      <div className={`flex items-center justify-between px-4 py-3 rounded-xl mb-3 border ${config.headerBg} ${config.border}`}>
        <div className="flex items-center gap-2">
          <span className={`w-2.5 h-2.5 rounded-full ${config.dot}`}></span>
          <span className="text-sm font-bold text-slate-700">{config.label}</span>
          <span className="bg-white text-slate-600 text-xs font-bold px-2 py-0.5 rounded-full border border-slate-200 shadow-sm">
            {tasks.length}
          </span>
        </div>
        <div className="flex items-center gap-2">
          {aiCount > 0 && (
            <span className="flex items-center gap-1 text-xs font-semibold text-indigo-600 bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded-full">
              <Sparkles className="w-3 h-3" />
              {aiCount} AI
            </span>
          )}
          <button className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors">
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Task Cards */}
      <div className="space-y-3 flex-1">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} column={columnKey} />
        ))}
      </div>
    </div>
  );
}

export default function KanbanBoard() {
  const [tasks] = useState(initialTasks);
  const totalTasks = Object.values(tasks).flat().length;
  const aiTaskCount = Object.values(tasks).flat().filter((t) => t.aiSuggested).length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Page Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">Aksiyon ve Gelişim Panosu</h1>
            <p className="text-sm text-slate-500 mt-1">Denetim bulgularından oluşturulan görevler · Kanban görünümü</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 text-sm font-medium text-slate-600 bg-white hover:bg-slate-50 transition-colors px-3 py-2 rounded-lg border border-slate-200 shadow-sm">
              <Filter className="w-4 h-4" />
              Filtrele
            </button>
            <button className="flex items-center gap-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors px-4 py-2 rounded-lg shadow-sm">
              <Plus className="w-4 h-4" />
              Görev Ekle
            </button>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="flex items-center flex-wrap gap-4 mt-4">
          <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-3 py-2 shadow-sm text-xs">
            <span className="text-slate-400">Toplam Görev:</span>
            <span className="font-bold text-slate-700">{totalTasks}</span>
          </div>
          <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-3 py-2 shadow-sm text-xs">
            <span className="text-slate-400">Açık:</span>
            <span className="font-bold text-slate-700">{tasks.open.length}</span>
          </div>
          <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-3 py-2 shadow-sm text-xs">
            <span className="text-slate-400">Devam Ediyor:</span>
            <span className="font-bold text-indigo-700">{tasks.inProgress.length}</span>
          </div>
          <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-3 py-2 shadow-sm text-xs">
            <span className="text-slate-400">Tamamlandı:</span>
            <span className="font-bold text-emerald-700">{tasks.done.length}</span>
          </div>
          <div className="flex items-center gap-2 bg-gradient-to-r from-indigo-50 to-violet-50 border border-indigo-200 rounded-lg px-3 py-2 shadow-sm text-xs ml-auto">
            <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
            <span className="text-indigo-600 font-semibold">{aiTaskCount} AI Önerisi</span>
            <span className="text-indigo-400">aktif</span>
          </div>
        </div>

        {/* AI Summary Banner */}
        <div className="mt-4 flex items-start gap-3 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-xl px-4 py-3 text-white shadow-md">
          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold mb-0.5">AI Next Best Action</p>
            <p className="text-xs text-indigo-200">
              Öncelikli odak: <span className="text-white font-semibold">Kasa hattı personel takviyesi</span> — Bu aksiyonu tamamladığınızda hafta sonu NPS skorunun ortalama <span className="text-white font-semibold">6–9 puan</span> artması bekleniyor.
            </p>
          </div>
          <button className="flex items-center gap-1 text-xs font-semibold text-indigo-200 hover:text-white transition-colors flex-shrink-0">
            Detay <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Kanban Board */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Column columnKey="open" tasks={tasks.open} />
        <Column columnKey="inProgress" tasks={tasks.inProgress} />
        <Column columnKey="done" tasks={tasks.done} />
      </div>
    </div>
  );
}
