'use client'
import { useDispatch } from "react-redux";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { setTasks } from "@/slices/tasksSlice";
import { useEffect } from "react";

 

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    dispatch(setTasks(tasks));
  }, [dispatch]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="my-20 flex flex-col gap-10">
      <AddTask/>
      <TaskList/>
      </div>
    </main>
  );
}
