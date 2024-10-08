import { PropsWithChildren } from 'react';
// import { type ReactNode } from 'react';

// interface CourseGoalProps {
//   title: string;
//   children: ReactNode;
// }
type CourseGoalProps = PropsWithChildren<{
  id: number;
  title: string;
  onDelete: (id: number) => void;
}>;
export default function CourseGoal({
  id,
  title,
  children,
  onDelete,
}: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>delete</button>
    </article>
  );
}
