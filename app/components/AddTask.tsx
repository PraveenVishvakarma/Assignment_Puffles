import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '@/slices/tasksSlice';

const AddTask: React.FC = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch(addTask(title));
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2 p-2">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 w-full rounded-lg"
        placeholder="Enter a new task"
      />
      <button type="submit" className="bg-blue-500  text-white rounded-lg mx-2 hover:opacity-70 hover:shadow-lg px-4 py-2">
        Add
      </button>
    </form>
  );
};

export default AddTask;
