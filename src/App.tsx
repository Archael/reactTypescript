import CourseGoal from './components/CourseGoal.tsx';
import Header from './components/Header.tsx';

import goalsImage from './assets/goals.jpg';
import { useState } from 'react';

type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]); //angle brackets defines type

  function handleAddGoal() {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        title: `Goal ${prevGoals.length + 1}`,
        description: 'Learn React + TS',
        id: prevGoals.length + 1,
      };
      return [...prevGoals, newGoal];
    });
  }
  return (
    <main>
      <Header image={{ src: goalsImage, alt: 'a list of goals' }}>
        <h1>Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add goal</button>
      <CourseGoal title="Learn React + TS">
        <p>Learn it from the ground up</p>
      </CourseGoal>
    </main>
  );
}
