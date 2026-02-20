import { useState } from 'react';
import Dashboard from './components/Dashboard';
import FieldAudit from './components/FieldAudit';
import KanbanBoard from './components/KanbanBoard';
import './index.css';
import {
  LayoutDashboard,
  ClipboardList,
  Kanban,
  Store,
  Bell,
  User,
  ChevronDown,
} from 'lucide-react';

const tabs = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'audit', label: 'Saha Denetimi', icon: ClipboardList },
  { id: 'kanban', label: 'Aksiyon ve Gelişim', icon: Kanban },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Top Navigation Bar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Store className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-bold text-slate-800 text-lg leading-none block">DenetimPro</span>
                <span className="text-xs text-slate-400 leading-none">Retail CX Platform</span>
              </div>
            </div>

            {/* Tab Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {tabs.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeTab === id
                      ? 'bg-indigo-50 text-indigo-700 shadow-sm'
                      : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </button>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <button className="relative p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center gap-2 pl-3 border-l border-slate-200">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-medium text-slate-700 leading-none">Ayşe Kaya</p>
                  <p className="text-xs text-slate-400">CX Manager</p>
                </div>
                <ChevronDown className="w-4 h-4 text-slate-400 hidden sm:block" />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Tab Bar */}
        <div className="md:hidden flex border-t border-slate-100">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex-1 flex flex-col items-center gap-0.5 py-2 text-xs font-medium transition-colors ${
                activeTab === id
                  ? 'text-indigo-600 border-t-2 border-indigo-600 -mt-px'
                  : 'text-slate-500'
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'audit' && <FieldAudit />}
        {activeTab === 'kanban' && <KanbanBoard />}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-3 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-slate-400">
          <span>DenetimPro v2.4.1 · Retail CX Platform</span>
          <span>Son güncelleme: 20 Şubat 2026, 09:42</span>
        </div>
      </footer>
    </div>
  );
}
