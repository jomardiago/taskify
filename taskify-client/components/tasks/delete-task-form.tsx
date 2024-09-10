"use client";

import { useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Task } from "./task.type";
import { API_URL } from "@/lib/constants";
import { useToast } from "@/components/ui/use-toast";

type Props = {
  task: Task;
  onClose: () => void;
};

export default function DeleteTaskForm({ task, onClose }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const session = useSession();
  const { toast } = useToast();
  const router = useRouter();

  const deleteTask = async () => {
    try {
      setIsLoading(true);

      await axios.delete(`${API_URL}/tasks/${task.id}`, {
        headers: {
          Authorization: `Bearer ${session.data?.backendTokens.accessToken}`,
        },
      });

      toast({
        title: "Delete task",
        description: "Task deleted successfully",
      });

      router.refresh();
      onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <p>Are you sure you want to delete this task?</p>
      <p className="font-semibold">{task.title}</p>
      <div className="space-x-4">
        <Button variant="destructive" onClick={deleteTask} disabled={isLoading}>
          Delete
        </Button>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
      </div>
    </div>
  );
}
