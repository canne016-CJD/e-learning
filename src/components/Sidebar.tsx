import { Home, BookOpen, Trophy, BarChart3, Settings, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from './ui/utils';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const navigationItems = [
  { id: 'dashboard', label: 'Dashboard', icon: Home },
  { id: 'courses', label: 'Courses', icon: BookOpen },
  { id: 'quizzes', label: 'Quizzes', icon: Trophy },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export function Sidebar({ isOpen, onToggle, activeTab, onTabChange }: SidebarProps) {
  return (
    <>
      {/* Sidebar */}
      <aside className={cn(
        "fixed left-0 top-0 h-full bg-white border-r border-gray-200 z-40 transition-all duration-200 ease-in-out",
        isOpen ? "w-64" : "w-16"
      )}>
        {/* Logo Section */}
        <div className={cn(
          "p-4 border-b border-gray-200 flex items-center transition-all duration-200",
          isOpen ? "justify-between" : "justify-center flex-col gap-2"
        )}>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white text-sm font-bold">KL</span>
            </div>
            {isOpen && <h1 className="text-xl font-bold text-gray-900">KodeigoLearn</h1>}
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onToggle}
            className="h-8 w-8 p-0 hover:bg-gray-100 flex-shrink-0"
          >
            {isOpen ? (
              <ChevronLeft className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </Button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                variant={activeTab === item.id ? "secondary" : "ghost"}
                className={cn(
                  "w-full h-10 transition-all duration-200",
                  isOpen ? "justify-start gap-3 px-3" : "justify-center px-0",
                  activeTab === item.id && "bg-blue-50 text-blue-700 border-blue-200"
                )}
                onClick={() => {
                  onTabChange(item.id);
                }}
                title={!isOpen ? item.label : undefined}
              >
                <Icon className="h-4 w-4 flex-shrink-0" />
                {isOpen && <span>{item.label}</span>}
              </Button>
            );
          })}
        </nav>
      </aside>
    </>
  );
}