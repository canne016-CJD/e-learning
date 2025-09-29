import { BookOpen, Trophy, Clock, TrendingUp, PlayCircle, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

const recentCourses = [
  {
    id: 1,
    title: "Advanced React Development",
    progress: 75,
    totalLessons: 24,
    completedLessons: 18,
    thumbnail: "https://images.unsplash.com/photo-1629360021730-3d258452c425?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwbGVhcm5pbmclMjBvbmxpbmUlMjBlZHVjYXRpb258ZW58MXx8fHwxNzU4OTQ0NjU4fDA&ixlib=rb-4.1.0&q=80&w=400",
    instructor: "Dr. Smith"
  },
  {
    id: 2,
    title: "Machine Learning Basics",
    progress: 45,
    totalLessons: 32,
    completedLessons: 14,
    thumbnail: "https://images.unsplash.com/photo-1598981457915-aea220950616?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWl6JTIwdGVzdCUyMGVkdWNhdGlvbiUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NTkwNDAxMDh8MA&ixlib=rb-4.1.0&q=80&w=400",
    instructor: "Prof. Davis"
  },
  {
    id: 3,
    title: "Database Design Principles",
    progress: 90,
    totalLessons: 18,
    completedLessons: 16,
    thumbnail: "https://images.unsplash.com/photo-1629360021730-3d258452c425?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwbGVhcm5pbmclMjBvbmxpbmUlMjBlZHVjYXRpb258ZW58MXx8fHwxNzU4OTQ0NjU4fDA&ixlib=rb-4.1.0&q=80&w=400",
    instructor: "Dr. Wilson"
  }
];

const upcomingQuizzes = [
  {
    id: 1,
    title: "React Hooks Assessment",
    course: "Advanced React Development",
    dueDate: "Tomorrow",
    duration: "30 min",
    questions: 15
  },
  {
    id: 2,
    title: "ML Algorithms Quiz",
    course: "Machine Learning Basics",
    dueDate: "Oct 2, 2025",
    duration: "45 min",
    questions: 20
  }
];

export function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Courses Enrolled</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Quizzes Completed</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">47</div>
            <p className="text-xs text-muted-foreground">+12 this week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Study Hours</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">124</div>
            <p className="text-xs text-muted-foreground">+8.5 this week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Score</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">88%</div>
            <p className="text-xs text-muted-foreground">+5% improvement</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Continue Learning */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Continue Learning</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentCourses.map((course) => (
                <div key={course.id} className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="relative">
                    <ImageWithFallback
                      src={course.thumbnail}
                      alt={course.title}
                      width={60}
                      height={60}
                      className="rounded-lg object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg opacity-0 hover:opacity-100 transition-opacity">
                      <PlayCircle className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">{course.title}</h3>
                      <Badge variant="secondary">{course.progress}%</Badge>
                    </div>
                    <p className="text-sm text-gray-600">By {course.instructor}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{course.completedLessons}/{course.totalLessons} lessons</span>
                      <Progress value={course.progress} className="w-24 h-2" />
                    </div>
                  </div>
                  <Button size="sm">Continue</Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Quizzes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5" />
              Upcoming Quizzes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingQuizzes.map((quiz) => (
              <div key={quiz.id} className="p-4 border rounded-lg space-y-3">
                <div>
                  <h3 className="font-medium">{quiz.title}</h3>
                  <p className="text-sm text-gray-600">{quiz.course}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Due:</span>
                    <span className="font-medium">{quiz.dueDate}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Duration:</span>
                    <span>{quiz.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Questions:</span>
                    <span>{quiz.questions}</span>
                  </div>
                </div>
                <Button className="w-full" size="sm">
                  Start Quiz
                </Button>
              </div>
            ))}
            <Button variant="outline" className="w-full">
              View All Quizzes
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button className="h-20 flex-col gap-2" variant="outline">
              <BookOpen className="h-6 w-6" />
              Browse Courses
            </Button>
            <Button className="h-20 flex-col gap-2" variant="outline">
              <Trophy className="h-6 w-6" />
              Take Quiz
            </Button>
            <Button className="h-20 flex-col gap-2" variant="outline">
              <CheckCircle className="h-6 w-6" />
              View Progress
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}