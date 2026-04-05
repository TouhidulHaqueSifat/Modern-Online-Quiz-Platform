export interface QuizCardProps {
  quiz: {
    id: number; 
    category: string;
    icon: React.ComponentType<{ size: number; color: string }>;
    iconColor: string;
    title: string;
    description: string;
    questions: number;
    difficulty: string;
    difficultyColor: string;
  };
}

export interface FilterTabsProps {
  active: string;
  onChange: (filter: string) => void;
}