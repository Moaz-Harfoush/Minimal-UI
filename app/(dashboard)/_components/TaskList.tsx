"use client";

import { useState, useCallback, memo } from "react";
import { MoreVertical } from "lucide-react";
import Button from "@/app/components/ui/Button";
import { initialTasksData } from "@/app/(dashboard)/_components/dashboardData";
import { TaskItem } from "@/app/(dashboard)/_types/dashboard.types";

const TaskList = () => {
  const [tasks, setTasks] = useState<TaskItem[]>(initialTasksData);

  const toggleTask = useCallback((id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  }, []);

  return (
    <div className="bg-pure-white p-6 rounded-2xl shadow-xl w-full h-full flex flex-col justify-between">
      <h2 className="text-xl font-bold text-dark-gray mb-6">Tasks</h2>

      <div className="divide-y divide-border-gray flex-1 flex flex-col justify-between">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center justify-between py-3 first:pt-0 last:pb-0"
          >
            <label className="flex items-center gap-3 cursor-pointer group flex-1 mr-2">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                className="w-5 h-5 rounded border-border-gray text-bright-blue focus:ring-bright-blue/20 accent-bright-blue cursor-pointer shrink-0"
              />
              <span
                className={`text-sm font-medium transition-colors line-clamp-1 ${
                  task.completed
                    ? "line-through text-medium-gray/60"
                    : "text-very-dark-gray group-hover:text-dark-gray"
                }`}
              >
                {task.title}
              </span>
            </label>
            <Button variant="icon" aria-label="Settings" className="shrink-0">
              <MoreVertical className="w-5 h-5" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(TaskList);
