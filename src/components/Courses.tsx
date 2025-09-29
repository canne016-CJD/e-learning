import { useState } from 'react';
import { Search, Filter, Clock, Users, Star, BookOpen, PlayCircle, User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { ImageWithFallback } from './figma/ImageWithFallback';

const courses = [
  {
    id: 1,
    title: "Advanced React Development",
    instructor: "Dr. Sarah Smith",
    description: "Master advanced React concepts including hooks, context, performance optimization, and testing.",
    thumbnail: "https://images.unsplash.com/photo-1629360021730-3d258452c425?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwbGVhcm5pbmclMjBvbmxpbmUlMjBlZHVjYXRpb258ZW58MXx8fHwxNzU4OTQ0NjU4fDA&ixlib=rb-4.1.0&q=80&w=400",
    duration: "8 weeks",
    students: 1234,
    rating: 4.8,
    level: "Advanced",
    category: "Programming",
    progress: 75,
    isEnrolled: true,
    totalLessons: 24,
    completedLessons: 18,
    courseType: "Instructor-led"
  },
  {
    id: 2,
    title: "Machine Learning Fundamentals",
    instructor: "Prof. Michael Davis",
    description: "Learn the foundations of machine learning, from basic algorithms to practical implementations.",
    thumbnail: "https://images.unsplash.com/photo-1598981457915-aea220950616?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWl6JTIwdGVzdCUyMGVkdWNhdGlvbiUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NTkwNDAxMDh8MA&ixlib=rb-4.1.0&q=80&w=400",
    duration: "12 weeks",
    students: 987,
    rating: 4.6,
    level: "Beginner",
    category: "Data Science",
    progress: 45,
    isEnrolled: true,
    totalLessons: 32,
    completedLessons: 14,
    courseType: "Instructor-led"
  },
  {
    id: 3,
    title: "Database Design & SQL",
    instructor: "Dr. Jennifer Wilson",
    description: "Complete guide to database design principles and advanced SQL techniques.",
    thumbnail: "https://images.unsplash.com/photo-1629360021730-3d258452c425?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwbGVhcm5pbmclMjBvbmxpbmUlMjBlZHVjYXRpb258ZW58MXx8fHwxNzU4OTQ0NjU4fDA&ixlib=rb-4.1.0&q=80&w=400",
    duration: "6 weeks",
    students: 756,
    rating: 4.9,
    level: "Intermediate",
    category: "Programming",
    progress: 90,
    isEnrolled: true,
    totalLessons: 18,
    completedLessons: 16,
    courseType: "Self Development"
  },
  {
    id: 4,
    title: "UX/UI Design Principles",
    instructor: "Alex Thompson",
    description: "Learn user experience design principles and create beautiful, functional interfaces.",
    thumbnail: "https://images.unsplash.com/photo-1598981457915-aea220950616?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWl6JTIwdGVzdCUyMGVkdWNhdGlvbiUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NTkwNDAxMDh8MA&ixlib=rb-4.1.0&q=80&w=400",
    duration: "10 weeks",
    students: 543,
    rating: 4.7,
    level: "Beginner",
    category: "Design",
    progress: 0,
    isEnrolled: false,
    totalLessons: 28,
    completedLessons: 0,
    courseType: "Self Development"
  },
  {
    id: 5,
    title: "Cloud Computing with AWS",
    instructor: "Dr. Robert Chen",
    description: "Master cloud computing concepts and AWS services for scalable applications.",
    thumbnail: "https://images.unsplash.com/photo-1629360021730-3d258452c425?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwbGVhcm5pbmclMjBvbmxpbmUlMjBlZHVjYXRpb258ZW58MXx8fHwxNzU4OTQ0NjU4fDA&ixlib=rb-4.1.0&q=80&w=400",
    duration: "14 weeks",
    students: 892,
    rating: 4.5,
    level: "Advanced",
    category: "Cloud",
    progress: 0,
    isEnrolled: false,
    totalLessons: 35,
    completedLessons: 0,
    courseType: "Instructor-led"
  },
  {
    id: 6,
    title: "Python for Data Analysis",
    instructor: "Dr. Lisa Rodriguez",
    description: "Learn Python programming specifically for data analysis and visualization.",
    thumbnail: "https://images.unsplash.com/photo-1598981457915-aea220950616?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWl6JTIwdGVzdCUyMGVkdWNhdGlvbiUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NTkwNDAxMDh8MA&ixlib=rb-4.1.0&q=80&w=400",
    duration: "9 weeks",
    students: 1156,
    rating: 4.8,
    level: "Intermediate",
    category: "Data Science",
    progress: 0,
    isEnrolled: false,
    totalLessons: 26,
    completedLessons: 0,
    courseType: "Self Development"
  }
];

export function Courses() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [activeTab, setActiveTab] = useState('all');

  const categories = ['all', 'Programming', 'Data Science', 'Design', 'Cloud'];
  const levels = ['all', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    const matchesTab = activeTab === 'all' || 
                      (activeTab === 'enrolled' && course.isEnrolled) ||
                      (activeTab === 'available' && !course.isEnrolled);
    
    return matchesSearch && matchesCategory && matchesLevel && matchesTab;
  });

  const CourseCard = ({ course }: { course: typeof courses[0] }) => (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <ImageWithFallback
          src={course.thumbnail}
          alt={course.title}
          width={400}
          height={200}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2">
          <Badge variant={course.isEnrolled ? "default" : "secondary"}>
            {course.isEnrolled ? "Enrolled" : "Available"}
          </Badge>
        </div>
        {course.isEnrolled && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
            <Button size="sm" className="flex items-center gap-2">
              <PlayCircle className="h-4 w-4" />
              Continue Learning
            </Button>
          </div>
        )}
      </div>
      
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg leading-tight">{course.title}</CardTitle>
            <div className="flex items-center gap-1 mt-1">
              <User className="h-3 w-3 text-gray-500" />
              <span className="text-sm text-gray-600">{course.instructor}</span>
            </div>
          </div>
          <Badge variant="outline">{course.level}</Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-sm text-gray-600 line-clamp-2">{course.description}</p>
        
        {course.isEnrolled && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span>{course.completedLessons}/{course.totalLessons} lessons</span>
            </div>
            <Progress value={course.progress} className="h-2" />
          </div>
        )}
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Badge variant={course.courseType === "Instructor-led" ? "default" : "secondary"} className="text-xs">
              {course.courseType}
            </Badge>
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              {course.rating}
            </div>
          </div>
          
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {course.duration}
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-3 w-3" />
                {course.students.toLocaleString()}
              </div>
            </div>
          </div>
        </div>
        
        <Button 
          className="w-full" 
          variant={course.isEnrolled ? "secondary" : "default"}
        >
          {course.isEnrolled ? "Continue Learning" : "Enroll Now"}
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search courses or instructors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        
        <div className="flex gap-2">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(category => (
                <SelectItem key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Select value={selectedLevel} onValueChange={setSelectedLevel}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Level" />
            </SelectTrigger>
            <SelectContent>
              {levels.map(level => (
                <SelectItem key={level} value={level}>
                  {level === 'all' ? 'All Levels' : level}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="all">All Courses</TabsTrigger>
          <TabsTrigger value="enrolled">My Courses</TabsTrigger>
          <TabsTrigger value="available">Available</TabsTrigger>
        </TabsList>
        
        <TabsContent value={activeTab} className="mt-6">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm text-gray-600">
              {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''} found
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          
          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No courses found</h3>
              <p className="text-gray-500">Try adjusting your search criteria or browse all available courses.</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}