import { Bell, Search, User, Menu } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';

interface HeaderProps {
  onMobileMenuClick: () => void;
}

export function Header({ onMobileMenuClick }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="flex items-center justify-between">
        {/* Left side: Mobile Menu Button */}
        <div className="flex items-center md:hidden w-10">
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-9 w-9 p-0"
            onClick={onMobileMenuClick}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {/* Center: Mobile Logo */}
        <div className="flex items-center gap-2 md:hidden absolute left-1/2 -translate-x-1/2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-bold">KL</span>
          </div>
          <h1 className="text-xl font-bold text-gray-900">KodeigoLearn</h1>
        </div>

        {/* Desktop Search Bar */}
        <div className="flex-1 max-w-md mx-4 md:mx-8 hidden md:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input 
              placeholder="Search courses, quizzes..." 
              className="pl-10 bg-gray-50"
            />
          </div>
        </div>

        {/* Right side: Notifications and User */}
        <div className="flex items-center gap-2 md:gap-3">
          <Button variant="ghost" size="sm" className="relative h-9 w-9 md:h-10 md:w-10 p-0">
            <Bell className="h-4 w-4 md:h-5 md:w-5" />
            <Badge className="absolute -top-1 -right-1 h-4 w-4 md:h-5 md:w-5 rounded-full p-0 flex items-center justify-center text-[10px] md:text-xs">
              3
            </Badge>
          </Button>
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder-avatar.jpg" />
            <AvatarFallback>
              <User className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
          <div className="hidden lg:block">
            <p className="text-sm font-medium">Sarah Johnson</p>
            <p className="text-xs text-gray-500">Student</p>
          </div>
        </div>
      </div>
    </header>
  );
}