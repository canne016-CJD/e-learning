import { useState, useEffect } from 'react';
import { Clock, CheckCircle, TrendingUp, Users, PlayCircle, Calendar, BookOpen, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface Quiz {
  id: number;
  title: string;
  description: string;
  totalQuestions: number;
  timeLimit: number; // in minutes
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  attempts: number;
  bestScore?: number;
  isActive?: boolean;
  currentQuestion?: number;
  answeredQuestions?: number;
  timeRemaining?: number; // in seconds
  startTime?: Date;
}

interface LiveStats {
  totalParticipants: number;
  completedQuizzes: number;
  averageScore: number;
}

const availableQuizzes: Quiz[] = [
  {
    id: 1,
    title: "React Fundamentals",
    description: "Test your knowledge of React basics including components, props, and state management.",
    totalQuestions: 15,
    timeLimit: 30,
    difficulty: 'Easy',
    category: 'Programming',
    attempts: 3,
    bestScore: 87
  },
  {
    id: 2,
    title: "JavaScript ES6+ Features",
    description: "Advanced JavaScript concepts including arrow functions, destructuring, and async/await.",
    totalQuestions: 20,
    timeLimit: 45,
    difficulty: 'Medium',
    category: 'Programming',
    attempts: 1,
    bestScore: 72
  },
  {
    id: 3,
    title: "Database Design Principles",
    description: "Comprehensive quiz on database normalization, relationships, and SQL optimization.",
    totalQuestions: 25,
    timeLimit: 60,
    difficulty: 'Hard',
    category: 'Database',
    attempts: 0
  },
  {
    id: 4,
    title: "UX/UI Design Patterns",
    description: "Test your understanding of user experience principles and interface design patterns.",
    totalQuestions: 18,
    timeLimit: 40,
    difficulty: 'Medium',
    category: 'Design',
    attempts: 2,
    bestScore: 94
  },
  {
    id: 5,
    title: "Machine Learning Basics",
    description: "Fundamental concepts of machine learning algorithms and data preprocessing.",
    totalQuestions: 22,
    timeLimit: 50,
    difficulty: 'Hard',
    category: 'Data Science',
    attempts: 0
  },
  {
    id: 6,
    title: "Cloud Computing with AWS",
    description: "AWS services, cloud architecture, and deployment strategies.",
    totalQuestions: 30,
    timeLimit: 90,
    difficulty: 'Hard',
    category: 'Cloud',
    attempts: 1,
    bestScore: 68
  }
];

export function QuizTracker() {
  const [activeQuiz, setActiveQuiz] = useState<Quiz | null>({
    id: 2,
    title: "JavaScript ES6+ Features",
    description: "Advanced JavaScript concepts including arrow functions, destructuring, and async/await.",
    totalQuestions: 20,
    timeLimit: 45,
    difficulty: 'Medium',
    category: 'Programming',
    attempts: 1,
    bestScore: 72,
    isActive: true,
    currentQuestion: 8,
    answeredQuestions: 7,
    timeRemaining: 1680, // 28 minutes remaining
    startTime: new Date(Date.now() - (17 * 60 * 1000)) // Started 17 minutes ago
  });

  const [liveStats] = useState<LiveStats>({
    totalParticipants: 24,
    completedQuizzes: 8,
    averageScore: 75
  });

  const [timeRemaining, setTimeRemaining] = useState<number>(activeQuiz?.timeRemaining || 0);

  // Timer logic for active quiz
  useEffect(() => {
    if (activeQuiz?.isActive && timeRemaining > 0) {
      const timer = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            // Time's up - end the quiz
            setActiveQuiz(current => current ? { ...current, isActive: false } : null);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [activeQuiz?.isActive, timeRemaining]);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const startQuiz = (quiz: Quiz) => {
    const newActiveQuiz = {
      ...quiz,
      isActive: true,
      currentQuestion: 1,
      answeredQuestions: 0,
      timeRemaining: quiz.timeLimit * 60,
      startTime: new Date()
    };
    setActiveQuiz(newActiveQuiz);
    setTimeRemaining(quiz.timeLimit * 60);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const QuizCard = ({ quiz }: { quiz: Quiz }) => (
    <Card className="hover:shadow-lg transition-shadow flex flex-col h-full">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg">{quiz.title}</CardTitle>
            <p className="text-sm text-gray-600 mt-1">{quiz.description}</p>
          </div>
          <Badge className={getDifficultyColor(quiz.difficulty)}>
            {quiz.difficulty}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="flex flex-col flex-1">
        <div className="grid grid-cols-2 gap-4 text-sm mb-4">
          <div className="flex items-center gap-1">
            <BookOpen className="h-4 w-4 text-blue-500" />
            <span>{quiz.totalQuestions} questions</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4 text-orange-500" />
            <span>{quiz.timeLimit} minutes</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4 text-purple-500" />
            <span>{quiz.attempts} attempts</span>
          </div>
          {quiz.bestScore && (
            <div className="flex items-center gap-1">
              <Award className="h-4 w-4 text-green-500" />
              <span>{quiz.bestScore}% best</span>
            </div>
          )}
        </div>
        
        <Button 
          className="w-full mt-auto bg-black hover:bg-gray-800 text-white" 
          onClick={() => startQuiz(quiz)}
          disabled={activeQuiz?.isActive}
        >
          <PlayCircle className="h-4 w-4 mr-2" />
          {quiz.attempts > 0 ? 'Retake Quiz' : 'Start Quiz'}
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      {/* Active Quiz Tracker */}
      {activeQuiz?.isActive && (
        <Card className="border-2 border-blue-500 bg-blue-50">
          <CardHeader>
            <div className="flex flex-col sm:flex-row items-start justify-between gap-3">
              <div className="flex-1">
                <CardTitle>
                  {activeQuiz.title}
                </CardTitle>
                <p className="text-gray-600 mt-1 text-sm sm:text-base">Questions Answered: {activeQuiz.answeredQuestions}/{activeQuiz.totalQuestions}</p>
              </div>
              <div className="text-left sm:text-right w-full sm:w-auto">
                <p className="text-xl font-bold text-black">{formatTime(timeRemaining)}</p>
                <p className="text-gray-600 text-sm">Time Remaining</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progress</span>
                <span>{activeQuiz.answeredQuestions}/{activeQuiz.totalQuestions}</span>
              </div>
              <Progress 
                value={(activeQuiz.answeredQuestions / activeQuiz.totalQuestions) * 100} 
                className="h-3 bg-green-100 [&>div]:bg-green-500"
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2">
              <Button variant="outline" className="flex-1 text-black hover:bg-black hover:text-white">
                Pause Quiz
              </Button>
              <Button className="flex-1 bg-black hover:bg-gray-800 text-white">
                Continue Quiz
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Quiz Selection */}
      <Tabs defaultValue="available" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="available" className="data-[state=active]:bg-black data-[state=active]:text-white text-xs sm:text-sm">Available</TabsTrigger>
          <TabsTrigger value="completed" className="text-xs sm:text-sm">Completed</TabsTrigger>
          <TabsTrigger value="upcoming" className="text-xs sm:text-sm">Upcoming</TabsTrigger>
        </TabsList>
        
        <TabsContent value="available" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Available Quizzes</CardTitle>
              <p className="text-sm text-gray-600">
                Choose from {availableQuizzes.length} available quizzes to test your knowledge
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {availableQuizzes.map(quiz => (
                  <QuizCard key={quiz.id} quiz={quiz} />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="completed" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Completed Quizzes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {availableQuizzes
                  .filter(quiz => quiz.bestScore !== undefined)
                  .map(quiz => (
                    <div key={quiz.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-medium">{quiz.title}</h3>
                        <p className="text-sm text-gray-600">{quiz.attempts} attempts</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-green-600">{quiz.bestScore}%</p>
                        <p className="text-sm text-gray-600">Best Score</p>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="upcoming" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Scheduled Quizzes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No upcoming quizzes</h3>
                <p className="text-gray-500">Check back later for scheduled quizzes from your instructors.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}