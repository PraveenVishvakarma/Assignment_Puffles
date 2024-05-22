import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { toggleTaskCompletion, deleteTask } from '@/slices/tasksSlice';

const TaskList: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();

  return (
    <div>
      {tasks.map(task => (
        <div
          key={task.id}
          className={`flex justify-between rounded-lg  items-center p-3 border-b ${
            task.completed ? 'bg-green-300' : 'bg-white'
          }`}
        >
          <div className="flex gap-4 items-center">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => dispatch(toggleTaskCompletion(task.id))}
              className="mr-2"
            />
            <span
              className={`cursor-pointer flex-1 ${
                task.completed ? 'line-through text-gray-800' : 'text-black'
              }`}
            >
              {task.title}
            </span>
          </div>
          <button
            onClick={() => dispatch(deleteTask(task.id))}
            className="text-red-700 cursor-pointer  ml-4"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
