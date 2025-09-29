import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Area, AreaChart } from 'recharts';
import { TrendingUp, TrendingDown, Clock, Trophy, Target, Users, BookOpen, Calendar } from 'lucide-react';

// Mock data for charts
const weeklyProgress = [
  { day: 'Mon', hours: 2.5, quizzes: 3, score: 85 },
  { day: 'Tue', hours: 3.2, quizzes: 2, score: 92 },
  { day: 'Wed', hours: 1.8, quizzes: 4, score: 78 },
  { day: 'Thu', hours: 4.1, quizzes: 1, score: 96 },
  { day: 'Fri', hours: 2.9, quizzes: 5, score: 88 },
  { day: 'Sat', hours: 5.2, quizzes: 2, score: 94 },
  { day: 'Sun', hours: 3.7, quizzes: 3, score: 90 }
];

const monthlyTrends = [
  { month: 'Jan', courses: 2, completed: 1, score: 78 },
  { month: 'Feb', courses: 3, completed: 2, score: 82 },
  { month: 'Mar', courses: 4, completed: 2, score: 85 },
  { month: 'Apr', courses: 5, completed: 3, score: 88 },
  { month: 'May', courses: 6, completed: 4, score: 91 },
  { month: 'Jun', courses: 8, completed: 5, score: 89 },
];

const quizPerformance = [
  { subject: 'React', completed: 12, average: 88, improvement: 15 },
  { subject: 'JavaScript', completed: 18, average: 92, improvement: -2 },
  { subject: 'Python', completed: 8, average: 78, improvement: 22 },
  { subject: 'SQL', completed: 15, average: 94, improvement: 8 },
  { subject: 'Machine Learning', completed: 6, average: 82, improvement: 35 },
];

const categoryDistribution = [
  { name: 'Programming', value: 45, color: '#3b82f6' },
  { name: 'Data Science', value: 25, color: '#10b981' },
  { name: 'Design', value: 15, color: '#f59e0b' },
  { name: 'Cloud Computing', value: 15, color: '#8b5cf6' },
];

const studyStreak = [
  { date: '2025-09-22', hours: 2.5 },
  { date: '2025-09-23', hours: 3.2 },
  { date: '2025-09-24', hours: 1.8 },
  { date: '2025-09-25', hours: 4.1 },
  { date: '2025-09-26', hours: 2.9 },
  { date: '2025-09-27', hours: 5.2 },
  { date: '2025-09-28', hours: 3.7 },
];

const recentAchievements = [
  { title: 'Quiz Master', description: 'Completed 50 quizzes with 90%+ score', date: '2 days ago', icon: Trophy, color: 'bg-yellow-500' },
  { title: 'Study Streak', description: '7 consecutive days of learning', date: '1 week ago', icon: Calendar, color: 'bg-green-500' },
  { title: 'Course Completionist', description: 'Finished 5 courses this month', date: '2 weeks ago', icon: BookOpen, color: 'bg-blue-500' },
  { title: 'Perfect Score', description: 'Achieved 100% on React Hooks quiz', date: '3 weeks ago', icon: Target, color: 'bg-purple-500' },
];

export function Analytics() {
  const totalStudyHours = studyStreak.reduce((sum, day) => sum + day.hours, 0);
  const avgQuizScore = quizPerformance.reduce((sum, subject) => sum + subject.average, 0) / quizPerformance.length;
  const currentStreak = 7; // Mock current streak
  const coursesInProgress = 3;

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Study Hours (This Week)</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalStudyHours.toFixed(1)}</div>
            <div className="flex items-center text-xs text-green-600">
              <TrendingUp className="h-3 w-3 mr-1" />
              +12% from last week
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Quiz Score</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Math.round(avgQuizScore)}%</div>
            <div className="flex items-center text-xs text-green-600">
              <TrendingUp className="h-3 w-3 mr-1" />
              +5% improvement
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{currentStreak} days</div>
            <div className="flex items-center text-xs text-gray-600">
              Keep it up!
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Courses in Progress</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{coursesInProgress}</div>
            <div className="flex items-center text-xs text-blue-600">
              <Target className="h-3 w-3 mr-1" />
              2 finishing soon
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="progress">Progress</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Weekly Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Weekly Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={weeklyProgress}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="hours" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Learning Distribution */}
            <Card>
              <CardHeader>
                <CardTitle>Learning Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={categoryDistribution}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      dataKey="value"
                    >
                      {categoryDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="mt-4 space-y-2">
                  {categoryDistribution.map((category) => (
                    <div key={category.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: category.color }}></div>
                        <span className="text-sm">{category.name}</span>
                      </div>
                      <span className="text-sm font-medium">{category.value}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Quiz Scores Over Time */}
            <Card>
              <CardHeader>
                <CardTitle>Quiz Performance Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={weeklyProgress}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip />
                    <Line type="monotone" dataKey="score" stroke="#10b981" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Subject Performance */}
            <Card>
              <CardHeader>
                <CardTitle>Performance by Subject</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {quizPerformance.map((subject) => (
                  <div key={subject.subject} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{subject.subject}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">{subject.completed} quizzes</span>
                        <Badge variant={subject.improvement >= 0 ? "default" : "secondary"}>
                          {subject.improvement >= 0 ? '+' : ''}{subject.improvement}%
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Progress value={subject.average} className="flex-1" />
                      <span className="text-sm font-medium w-12">{subject.average}%</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="progress" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Learning Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={monthlyTrends}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="courses" fill="#3b82f6" name="Courses Started" />
                  <Bar dataKey="completed" fill="#10b981" name="Courses Completed" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Recent Achievements */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Achievements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentAchievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${achievement.color}`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">{achievement.title}</h3>
                        <p className="text-sm text-gray-600">{achievement.description}</p>
                        <p className="text-xs text-gray-500 mt-1">{achievement.date}</p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Learning Streaks */}
            <Card>
              <CardHeader>
                <CardTitle>Study Streak Calendar</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-1 mb-4">
                  {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map(day => (
                    <div key={day} className="text-center text-xs font-medium text-gray-500 p-1">
                      {day}
                    </div>
                  ))}
                  {studyStreak.map((day, index) => (
                    <div
                      key={index}
                      className={`aspect-square rounded text-xs flex items-center justify-center ${
                        day.hours > 0 
                          ? day.hours > 3 
                            ? 'bg-green-500 text-white' 
                            : 'bg-green-200 text-green-800'
                          : 'bg-gray-100'
                      }`}
                    >
                      {day.hours > 0 ? Math.round(day.hours) : ''}
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Current streak: <span className="font-bold text-green-600">{currentStreak} days</span>
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Keep learning daily to maintain your streak!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}