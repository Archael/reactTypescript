interface CourseGoalProps {
  title: string;
  desc: string;
}
export default function CourseGoal({ title, desc }: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
      <button>delete</button>
    </article>
  );
}
