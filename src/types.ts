export interface UserProfile {
  uid: string;
  name: string;
  totalSessions: number;
  totalQuestionsAnswered: number;
  overallScore: number;
  selectedAIModel: string;
  aiEndpointStatus?: Record<string, 'online' | 'offline'>;
  lastActive: string;
}

export interface TopicProgress {
  topicId: string;
  score: number;
  weakAreas: string[];
  mastered: string[];
  lastTested: string;
  improvementCurve: number[];
  methodsTried: string[];
}

export interface Flashcard {
  questionId: string;
  topicId: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface LabTask {
  id: string | number;
  description: string;
  commands?: string[];
  intentionalError?: string;
  hint?: string;
  validationCommand?: string;
}

export interface Lab {
  labId: string;
  title: string;
  topicIds: string[];
  topology: any; // Mermaid diagram string or JSON
  tasks: LabTask[];
  theory?: string;
  isGenerated: boolean;
  userId?: string;
  completionStatus?: boolean;
}

export interface SessionSummary {
  sessionId: string;
  timestamp: string;
  durationMinutes: number;
  topicsCovered: string[];
  scoreChange: number;
  weakAreasDetected: string[];
  nextSteps: string[];
}
