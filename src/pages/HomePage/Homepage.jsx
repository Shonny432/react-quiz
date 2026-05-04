import cls from './Homepage.module.css';
import {QuestionCard} from '../../components/QuestionCard/QuestionCard';

const cards = [
    {
      id: "1",
      question: "Что такое React?",
      answer: "React — это библиотека для создания пользовательских интерфейсов.",
      description:
        "React — это JavaScript-библиотека, разработанная Facebook, которая используется для построения UI с компонентным подходом.",
      resources: [
        "https://react.dev",
        "https://react.dev/reference/react"
      ],
      level: 1,
      completed: true,
      editDate: "03.02.2025, 19:49"
    },
    {
      id: "2",
      question: "Что такое JSX?",
      answer: "JSX — это синтаксическое расширение JavaScript для React.",
      description:
        "JSX позволяет писать HTML-подобный код в JavaScript.",
      resources: [
        "https://react.dev/learn/writing-markup-with-jsx"
      ],
      level: 2,
      completed: false,
      editDate: "03.02.2025, 20:25"
    },
    {
      id: "3",
      question: "Какой основной принцип работы React?",
      answer: "React использует Virtual DOM для оптимизации рендеринга.",
      description:
        "React сравнивает Virtual DOM с предыдущим состоянием и обновляет только измененные элементы.",
      resources: [
        "https://react.dev/learn/render-and-commit"
      ],
      level: 2,
      completed: false
    },
    {
      id: "4",
      question: "Как создать компонент в React?",
      answer: "Компонент можно создать как функцию или класс.",
      description:
        "Функциональные компоненты — это функции, возвращающие JSX.",
      resources: [
        "https://react.dev/learn/your-first-component"
      ],
      level: 1,
      completed: false
    },
    {
      id: "5",
      question: "Что такое props в React?",
      answer: "Props — это входные параметры компонентов.",
      description:
        "Используются для передачи данных от родителя к дочернему компоненту.",
      resources: [
        "https://react.dev/learn/passing-props-to-a-component"
      ],
      level: 1,
      completed: false
    },
    {
      id: "6",
      question: "Что такое state в React?",
      answer: "State — это внутренние данные компонента.",
      description:
        "State изменяется через useState или setState.",
      resources: [
        "https://react.dev/learn/state-a-components-memory"
      ],
      level: 2,
      completed: true
    },
    {
      id: "7",
      question: "Как работает useState?",
      answer: "useState управляет состоянием в функциональных компонентах.",
      description:
        "Возвращает текущее значение и функцию обновления.",
      resources: [
        "https://react.dev/reference/react/useState"
      ],
      level: 2,
      completed: true
    },
    {
      id: "8",
      question: "Что такое useEffect?",
      answer: "Хук для побочных эффектов.",
      description:
        "Используется для API запросов, подписок, таймеров.",
      resources: [
        "https://react.dev/reference/react/useEffect"
      ],
      level: 2,
      completed: true
    },
    {
      id: "9",
      question: "Что такое React Router?",
      answer: "Библиотека для маршрутизации.",
      description:
        "Позволяет строить SPA навигацию.",
      resources: [
        "https://reactrouter.com/en/main"
      ],
      level: 2,
      completed: false
    },
    {
      id: "10",
      question: "Как оптимизировать React-приложение?",
      answer: "React.memo, useMemo, useCallback.",
      description:
        "Помогают избежать лишних ререндеров.",
      resources: [
        "https://react.dev/learn/keeping-components-pure"
      ],
      level: 3,
      completed: true
    }
  ]


export const Homepage = () => {
  return (
    <>
        {cards.map((card, index) => {
           return <QuestionCard card={card} key={index} />
        })}
    </>
  );
};
