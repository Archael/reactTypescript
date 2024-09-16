import CourseGoalList from './components/CourseGoalList.tsx';
import Header from './components/Header.tsx';
import goalsImage from './assets/goals.jpg';
import { useState } from 'react';

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  //angle brackets defines type
  const [goals, setGoals] = useState<CourseGoal[]>([]);

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
  function handleDeleteGoal(id: number) {
    //filter generates a new array from an existing array
    //receives a function which will be executed on every item in the array
    //return true if we want to keep an item, and false if we want to drop it
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }
  return (
    <main>
      <Header image={{ src: goalsImage, alt: 'a list of goals' }}>
        <h1>Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add goal</button>
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}
