import CourseGoal from './CourseGoal.tsx';
import { type CourseGoal as TypeCourseGoal } from '../App.tsx';

interface CourseGoalListProps {
  goals: TypeCourseGoal[];
  // function type
  onDeleteGoal: (id: number) => void;
}

export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}
