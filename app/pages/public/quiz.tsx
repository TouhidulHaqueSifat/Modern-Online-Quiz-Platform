import React, { useState } from 'react'
import { useParams } from 'react-router';
import { NavigationBar } from '~/components/allQuiz/NavigationBar';
import ProgressBar from '~/components/allQuiz/progressBar';
import progressBar from '~/components/allQuiz/progressBar'
import QuestionCard from '~/components/allQuiz/questionCard';
import type { Quiz } from '~/types/quiz';

const QUIZ_DATA: Quiz[] = [
    {
        id: 1,
        title: "Advanced Cognitive Patterns",
        category: "Assessment in Progress",
        totalTime: 25 * 60,
        questions: [
            {
                id: "q1",
                number: 1,
                tag: "Logical Reasoning",
                text: 'Based on the structural analysis of adaptive interfaces, which of the following principles best describes the "Sanctuary" aesthetic defined in modern digital proctoring systems?',
                options: [
                    "Tonal depth over rigid 1px borders to guide focus",
                    "High-contrast alert systems with vibrant primary reds",
                    "Maximalist information density via multi-column grids",
                    "Symmetrical layout using heavy drop shadows for card nesting",
                ],
                correctOption: 0,
            },
            {
                id: "q2",
                number: 2,
                tag: "Memory Systems",
                text: "Which cognitive model best explains why spaced repetition significantly outperforms massed practice for long-term retention of complex conceptual material?",
                options: [
                    "The Primacy-Recency Effect",
                    "Encoding Variability Theory",
                    "The Spacing Effect via distributed neural consolidation",
                    "Working Memory Chunking",
                ],
                correctOption: 2,
            },
            {
                id: "q3",
                number: 3,
                tag: "Attention",
                text: "In Kahneman's dual-process theory, which system is most responsible for the automatic recognition of familiar patterns without conscious effort?",
                options: [
                    "System 2 — Analytical reasoning",
                    "System 1 — Fast, automatic thinking",
                    "The Default Mode Network",
                    "Executive Control System",
                ],
                correctOption: 1,
            },
            {
                id: "q4",
                number: 4,
                tag: "Logical Reasoning",
                text: "A test has 40 questions. A student answers 28 correctly. What percentage did they answer incorrectly, rounded to one decimal?",
                options: ["28.5%", "30.0%", "32.5%", "70.0%"],
                correctOption: 1,
            },
            {
                id: "q5",
                number: 5,
                tag: "Perception",
                text: "Which Gestalt principle explains why we perceive a series of dots arranged in a curved line as a single continuous arc rather than individual points?",
                options: [
                    "Principle of Proximity",
                    "Principle of Similarity",
                    "Principle of Continuity",
                    "Principle of Closure",
                ],
                correctOption: 2,
            },
            {
                id: "q6",
                number: 6,
                tag: "Neuropsychology",
                text: "Damage to which brain region most severely impacts the ability to form new long-term declarative memories while leaving procedural memory largely intact?",
                options: [
                    "Prefrontal Cortex",
                    "Hippocampus",
                    "Basal Ganglia",
                    "Cerebellum",
                ],
                correctOption: 1,
            },
            {
                id: "q7",
                number: 7,
                tag: "Problem Solving",
                text: "Which problem-solving strategy involves working backwards from the desired goal state to determine the steps needed to reach it?",
                options: [
                    "Means-Ends Analysis",
                    "Hill Climbing",
                    "Backward Chaining",
                    "Analogical Reasoning",
                ],
                correctOption: 2,
            },
            {
                id: "q8",
                number: 8,
                tag: "Language",
                text: "Broca's area, located in the left frontal lobe, is primarily associated with which aspect of language processing?",
                options: [
                    "Language comprehension",
                    "Speech production and syntax",
                    "Reading and visual word recognition",
                    "Emotional tone of speech",
                ],
                correctOption: 1,
            },
            {
                id: "q9",
                number: 9,
                tag: "Decision Making",
                text: "The framing effect, a well-documented cognitive bias, demonstrates that people's choices are influenced by:",
                options: [
                    "The logical structure of the options",
                    "How information is presented rather than its content",
                    "Their level of expertise in the domain",
                    "The number of available choices",
                ],
                correctOption: 1,
            },
            {
                id: "q10",
                number: 10,
                tag: "Meta-cognition",
                text: "The Dunning-Kruger effect primarily describes a failure in which cognitive process?",
                options: [
                    "Long-term memory consolidation",
                    "Attentional filtering of irrelevant stimuli",
                    "Accurate self-assessment of one's own competence",
                    "Logical deductive reasoning",
                ],
                correctOption: 2,
            },
        ],
    },
    {
        id: 2,
        title: "Computer Science Fundamentals",
        category: "Programming",
        totalTime: 20 * 60,
        questions: [
            {
                id: "q1",
                number: 1,
                tag: "Data Structures",
                text: "Which data structure follows FIFO?",
                options: ["Stack", "Queue", "Tree", "Graph"],
                correctOption: 1,
            },
            {
                id: "q2",
                number: 2,
                tag: "Algorithms",
                text: "What is the time complexity of binary search?",
                options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
                correctOption: 2,
            },
        ],
    },
];
const quiz = () => {
    const { id } = useParams();
    const [answers, setAnswers] = useState<(number | null)[]>([]);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const quiz = QUIZ_DATA.find(q => q.id === Number(id));
    if (!quiz) {
        return <div className="min-h-screen w-full flex items-center justify-center text-2xl font-bold text-gray-500">Quiz not found</div>
    }

    // Initialize answers array if not done
    if (answers.length === 0) {
        setAnswers(new Array(quiz.questions.length).fill(null));
    }

    const handleSelect = (questionId: string, optionIndex: number) => {
        setAnswers(prev => {
            const newAnswers = [...prev];
            newAnswers[currentIndex] = optionIndex;
            return newAnswers;
        });
    };

    const handleSubmit = () => {
        // Calculate score
        let score = 0;
        answers.forEach((answer, index) => {
            if (answer === quiz.questions[index].correctOption) {
                score++;
            }
        });
        alert(`Quiz completed! Your score: ${score}/${quiz.questions.length}`);
        // You can navigate to results page or show modal here
    };

// ── NAVIGATION ─────────────────────────────
    const total: number = quiz.questions.length;
    const goNext = (): void => {
        if (currentIndex < total - 1) setCurrentIndex((i) => i + 1);
        else handleSubmit();
    };
    const goPrev = (): void => {
        if (currentIndex > 0) setCurrentIndex((i) => i - 1);
    };
    const goSkip = (): void => goNext();
    const goJump = (index: number): void => setCurrentIndex(index);

    return (
        <div className="min-h-screen w-full bg-[#F3F4F6]">
            <div className="w-full max-w-[1024px] mx-auto px-4 sm:px-6 pt-32 pb-20 flex flex-col gap-12">
                <ProgressBar quiz={quiz} currentIndex={currentIndex} timeLeft={600} />
                <QuestionCard question={quiz.questions[currentIndex]} selectedOption={answers[currentIndex]} onSelect={handleSelect} />
                <NavigationBar currentIndex={currentIndex} total={total} onPrev={goPrev} onSkip={goSkip} onNext={goNext}
                />
            </div>

        </div>
    )
}

export default quiz