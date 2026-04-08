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

type Option = string;
 
// One question in the quiz
export interface Question {
  id: string;           // unique key e.g. "q1"
  number: number;       // display number e.g. 1
  tag: string;          // category label e.g. "Logical Reasoning"
  text: string;         // the question body
  options: Option[];    // array of 4 answer strings
  correctOption: number; // index (0–3) of the correct answer
}

export interface Quiz {
  id: number;
  title: string;
  category: string;
  totalTime: number;      // in seconds
  questions: Question[];
}