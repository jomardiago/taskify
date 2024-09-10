import TaskActionsDropdown from "./task-actions-dropdown";
import { Task } from "./task.type";

export default function InProgressTaskItem({ task }: { task: Task }) {
  return (
    <div className="border border-l-8 border-l-yellow-500 p-4 rounded-sm flex justify-between items-center">
      <div>
        <p className="font-semibold">{task.title}</p>
        <span className="text-sm">{task.description}</span>
      </div>
      <div>
        <TaskActionsDropdown task={task} />
      </div>
    </div>
  );
}
