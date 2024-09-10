"use client";

import { useState } from "react";
import { PlusIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import CreateTaskForm from "./create-task-form";

export default function TasksToolbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <Dialog open={isOpen} onOpenChange={() => setIsOpen(false)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create new task</DialogTitle>
          </DialogHeader>
          <div>
            <CreateTaskForm onClose={() => setIsOpen(false)} />
          </div>
        </DialogContent>
      </Dialog>

      <Button onClick={() => setIsOpen(true)}>
        <PlusIcon className="mr-2 h-4 w-4" /> New Task
      </Button>
    </div>
  );
}
