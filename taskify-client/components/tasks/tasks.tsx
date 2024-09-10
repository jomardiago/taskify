import TaskSectionItems from "./task-section-items";
import TaskSectionTitle from "./task-section-title";
import TaskStatusSectionWrapper from "./task-status-section-wrapper";
import { Task } from "./task.type";
import { Separator } from "@/components/ui/separator";

type Props = {
  tasks: Task[];
};

export default function TasksList({ tasks }: Props) {
  const getNewTasks = () => {
    return tasks.filter((task) => task.status === "new");
  };

  const getInProgressTasks = () => {
    return tasks.filter((task) => task.status === "in progress");
  };

  const getCompletedTasks = () => {
    return tasks.filter((task) => task.status === "completed");
  };

  return (
    <div className="flex space-x-8 pr-12">
      <TaskStatusSectionWrapper key="new">
        <div>
          <TaskSectionTitle title="New" />
          <Separator className="my-4" />
          <TaskSectionItems tasks={getNewTasks()} />
        </div>
      </TaskStatusSectionWrapper>
      <TaskStatusSectionWrapper key="inProgress">
        <div>
          <TaskSectionTitle title="In Progress" />
          <Separator className="my-4" />
          <TaskSectionItems tasks={getInProgressTasks()} />
        </div>
      </TaskStatusSectionWrapper>
      <TaskStatusSectionWrapper key="completed">
        <div>
          <TaskSectionTitle title="Completed" />
          <Separator className="my-4" />
          <TaskSectionItems tasks={getCompletedTasks()} />
        </div>
      </TaskStatusSectionWrapper>
    </div>
  );
}
