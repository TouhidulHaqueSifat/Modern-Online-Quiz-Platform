import { route, index } from "@react-router/dev/routes";

export const publicRoutes = [
  index("pages/home.tsx"),
  route("about", "pages/public/about.tsx"),
  route("get-quiz", "pages/public/getQuiz.tsx"),
  route("quiz/:id", "pages/public/quiz.tsx"),
];