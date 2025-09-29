import { Bell, Search, User } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
      <div className="flex-1 max-w-md hidden md:block">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input 
            placeholder="Search courses, quizzes..." 
            className="pl-10 bg-gray-50"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="ghost" size="sm" className="relative">
          <Bell className="h-5 w-5" />
          <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs">
            3
          </Badge>
        </Button>
        <Avatar className="h-8 w-8">
          <AvatarImage src="/placeholder-avatar.jpg" />
          <AvatarFallback>
            <User className="h-4 w-4" />
          </AvatarFallback>
        </Avatar>
        <div className="hidden md:block">
          <p className="text-sm font-medium">Sarah Johnson</p>
          <p className="text-xs text-gray-500">Student</p>
        </div>
      </div>
    </header>
  );
}