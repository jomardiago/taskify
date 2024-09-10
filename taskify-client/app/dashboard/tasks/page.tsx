import axios from "axios";
import { getServerSession } from "next-auth";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { API_URL } from "@/lib/constants";
import Tasks from "@/components/tasks/tasks";
import TasksToolbar from "@/components/tasks/tasks-toolbar";

export default async function TasksPage() {
  const session = await getServerSession(authOptions);

  const { data: tasks } = await axios.get(`${API_URL}/tasks`, {
    headers: {
      Authorization: `Bearer ${session?.backendTokens.accessToken}`,
    },
  });

  return (
    <div>
      <TasksToolbar />
      <Tasks tasks={tasks} />
    </div>
  );
}
