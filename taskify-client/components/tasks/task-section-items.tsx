import CompletedTaskItem from "./completed-task-item";
import InProgressTaskItem from "./in-progress-task-item";
import NewTaskItem from "./new-task-item";
import { Task } from "./task.type";

export default function TaskSectionItems({ tasks }: { tasks: Task[] }) {
  return (
    <ul>
      {tasks.length > 0 &&
        tasks.map((task) => (
          <li key={task.id} className="mb-4">
            {task.status === "new" ? (
              <NewTaskItem task={task} />
            ) : task.status === "in progress" ? (
              <InProgressTaskItem task={task} />
            ) : (
              <CompletedTaskItem task={task} />
            )}
          </li>
        ))}
    </ul>
  );
}
