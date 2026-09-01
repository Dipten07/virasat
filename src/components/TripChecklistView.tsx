import React, { useState, useEffect } from 'react';
import { TripChecklistItem } from '../types';
import { loadSavedChecklist, saveChecklistState } from '../data/checklistData';
import {
  CheckSquare,
  Square,
  Plus,
  Trash2,
  RotateCcw,
  Sparkles,
  ShieldCheck,
  Camera,
  CreditCard,
  Footprints,
  FileText,
  Sun,
  ListChecks,
  CheckCircle2,
  Share2,
  Printer
} from 'lucide-react';

interface TripChecklistViewProps {
  cityId?: string;
  cityName?: string;
  onSelectCity?: (cityId: string) => void;
}

export const TripChecklistView: React.FC<TripChecklistViewProps> = ({
  cityId,
  cityName
}) => {
  const [items, setItems] = useState<TripChecklistItem[]>(() => loadSavedChecklist(cityId));
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<TripChecklistItem['category']>('custom');
  const [showAddForm, setShowAddForm] = useState(false);
  const [copiedNotification, setCopiedNotification] = useState(false);

  // Reload when cityId changes
  useEffect(() => {
    setItems(loadSavedChecklist(cityId));
  }, [cityId]);

  // Persist to localStorage whenever items change
  const updateItems = (newItems: TripChecklistItem[]) => {
    setItems(newItems);
    saveChecklistState(newItems);
  };

  const toggleItem = (id: string) => {
    const next = items.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    updateItems(next);
  };

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newItem: TripChecklistItem = {
      id: `user-custom-${Date.now()}`,
      category: newCategory,
      title: newTitle.trim(),
      description: 'Personal customized checklist item.',
      isMandatory: false,
      completed: false
    };

    updateItems([...items, newItem]);
    setNewTitle('');
    setShowAddForm(false);
  };

  const deleteItem = (id: string) => {
    updateItems(items.filter((item) => item.id !== id));
  };

  const resetAll = () => {
    if (window.confirm('Reset all checklist items to unchecked?')) {
      const reset = items.map((i) => ({ ...i, completed: false }));
      updateItems(reset);
    }
  };

  const markAllDone = () => {
    const allDone = items.map((i) => ({ ...i, completed: true }));
    updateItems(allDone);
  };

  const handleShare = () => {
    const completedCount = items.filter((i) => i.completed).length;
    const shareText = `Virasat Heritage Travel Checklist for ${cityName || 'India'}:\n${completedCount}/${items.length} tasks ready.\nPacked temple attire, passes, and footwear prep!`;
    navigator.clipboard.writeText(shareText);
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2500);
  };

  const categories = [
    { id: 'all', label: 'All Items', icon: ListChecks },
    { id: 'temple-etiquette', label: 'Temple Etiquette & Modesty', icon: ShieldCheck },
    { id: 'documentation', label: 'Passes & E-Tickets', icon: FileText },
    { id: 'cash-upi', label: 'Cash & UPI Readiness', icon: CreditCard },
    { id: 'footwear-gear', label: 'Footwear & Socks', icon: Footprints },
    { id: 'photography', label: 'Tech & Photography', icon: Camera },
    { id: 'health-climate', label: 'Sun & Health Kit', icon: Sun },
    { id: 'custom', label: 'My Custom Items', icon: Plus }
  ];

  const filteredItems = items.filter((item) =>
    selectedCategory === 'all' ? true : item.category === selectedCategory
  );

  const completedCount = items.filter((i) => i.completed).length;
  const progressPercent = items.length > 0 ? Math.round((completedCount / items.length) * 100) : 0;

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e5e0d8] shadow-xs space-y-6">
      {/* Header & Progress Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#f0ece5]">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#5A5A40] uppercase tracking-widest">
            <CheckCircle2 className="w-4 h-4 text-[#5A5A40]" />
            <span>Heritage Travel Preparation</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#2d2a26] mt-1">
            Trip & Monument Readiness Checklist {cityName ? `for ${cityName}` : ''}
          </h3>
          <p className="text-xs sm:text-sm text-[#6b625b] mt-1">
            Ensure smooth entry at ASI monuments, sacred sanctums, and riverfront explorations with required passes, attire etiquette, and essentials.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="px-4 py-2 bg-[#9E3E26] hover:bg-[#83321e] text-white rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shadow-xs"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Item</span>
          </button>

          <button
            onClick={handleShare}
            className="px-3.5 py-2 bg-[#f9f7f4] hover:bg-[#ebe7e0] border border-[#e5e0d8] text-[#2d2a26] rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>{copiedNotification ? 'Copied Summary!' : 'Share'}</span>
          </button>

          <button
            onClick={resetAll}
            title="Reset all checkboxes"
            className="px-3 py-2 bg-[#f9f7f4] hover:bg-[#ebe7e0] border border-[#e5e0d8] text-[#6b625b] rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Reset</span>
          </button>
        </div>
      </div>

      {/* Visual Progress Bar */}
      <div className="bg-[#f9f7f4] p-4 rounded-2xl border border-[#e5e0d8] space-y-2">
        <div className="flex items-center justify-between text-xs font-bold">
          <span className="text-[#2d2a26] flex items-center gap-1.5">
            <span>Readiness Status:</span>
            <span className={progressPercent === 100 ? 'text-emerald-700 font-bold' : 'text-[#9E3E26]'}>
              {completedCount} of {items.length} Ready ({progressPercent}%)
            </span>
          </span>
          <div className="flex items-center gap-3">
            {progressPercent < 100 && (
              <button
                onClick={markAllDone}
                className="text-[11px] text-[#5A5A40] hover:underline font-semibold cursor-pointer"
              >
                Mark all completed
              </button>
            )}
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#8c827a]">
              {progressPercent === 100 ? '🎉 Ready to Travel!' : 'In Progress'}
            </span>
          </div>
        </div>

        <div className="w-full bg-[#e8e4dc] h-2.5 rounded-full overflow-hidden">
          <div
            className={`h-full transition-all duration-500 rounded-full ${
              progressPercent === 100 ? 'bg-emerald-600' : 'bg-[#9E3E26]'
            }`}
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Add Item Form (Collapsible) */}
      {showAddForm && (
        <form onSubmit={handleAddItem} className="bg-[#fcfaf7] p-4 rounded-2xl border border-[#9E3E26]/30 space-y-3 animate-fadeIn">
          <div className="text-xs font-bold text-[#2d2a26]">Add Custom Travel Item</div>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="e.g., Camera extra battery, Temple prasad basket, Linen kurta..."
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="flex-1 px-3.5 py-2 text-xs bg-white border border-[#e5e0d8] rounded-xl text-[#2d2a26] placeholder-[#a0978f] focus:outline-none focus:border-[#9E3E26]"
              autoFocus
            />
            <select
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value as any)}
              className="px-3 py-2 text-xs bg-white border border-[#e5e0d8] rounded-xl text-[#2d2a26] focus:outline-none focus:border-[#9E3E26]"
            >
              <option value="custom">Custom Item</option>
              <option value="temple-etiquette">Temple Etiquette</option>
              <option value="documentation">Passes & IDs</option>
              <option value="footwear-gear">Footwear & Gear</option>
              <option value="photography">Tech & Photo</option>
              <option value="health-climate">Health & Sun</option>
              <option value="cash-upi">Cash & UPI</option>
            </select>
            <button
              type="submit"
              className="px-4 py-2 bg-[#2d2a26] text-white text-xs font-bold rounded-xl hover:bg-black transition-colors cursor-pointer"
            >
              Add to Checklist
            </button>
          </div>
        </form>
      )}

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isSelected = selectedCategory === cat.id;
          const count = items.filter((i) => cat.id === 'all' || i.category === cat.id).length;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                isSelected
                  ? 'bg-[#2d2a26] text-white shadow-xs'
                  : 'bg-[#f5f2ed] text-[#5a524c] hover:bg-[#ebe7e0] border border-[#e5e0d8]'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{cat.label} ({count})</span>
            </button>
          );
        })}
      </div>

      {/* Checklist Items List */}
      <div className="space-y-2.5">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => {
            return (
              <div
                key={item.id}
                onClick={() => toggleItem(item.id)}
                className={`p-3.5 rounded-2xl border transition-all flex items-start gap-3.5 cursor-pointer select-none ${
                  item.completed
                    ? 'bg-[#f9fcf9] border-emerald-200/80 text-[#6b7280]'
                    : 'bg-[#fbf9f6] hover:bg-white border-[#e8e4dc] hover:border-[#9E3E26]/40 text-[#2d2a26]'
                }`}
              >
                <div className="mt-0.5 shrink-0 text-[#9E3E26]">
                  {item.completed ? (
                    <CheckSquare className="w-5 h-5 text-emerald-600" />
                  ) : (
                    <Square className="w-5 h-5 text-[#8c827a]" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`text-xs sm:text-sm font-bold ${
                        item.completed ? 'line-through text-[#8c827a]' : 'text-[#2d2a26]'
                      }`}
                    >
                      {item.title}
                    </span>
                    {item.isMandatory && (
                      <span className="text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 bg-[#9E3E26]/10 text-[#9E3E26] rounded-md">
                        Mandatory
                      </span>
                    )}
                    {item.citySpecific && (
                      <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 bg-[#5A5A40]/10 text-[#5A5A40] rounded-md">
                        {item.citySpecific} Specific
                      </span>
                    )}
                  </div>
                  {item.description && (
                    <p className={`text-xs mt-1 leading-relaxed ${item.completed ? 'text-[#a0978f]' : 'text-[#6b625b]'}`}>
                      {item.description}
                    </p>
                  )}
                </div>

                {item.id.startsWith('user-custom-') && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteItem(item.id);
                    }}
                    title="Delete custom task"
                    className="text-[#8c827a] hover:text-rose-600 p-1 transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            );
          })
        ) : (
          <div className="py-8 text-center text-xs text-[#8c827a] bg-[#f9f7f4] rounded-2xl border border-dashed border-[#e5e0d8]">
            No items under this category.
          </div>
        )}
      </div>
    </div>
  );
};
