"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import FilterBar from "./FilterBar";

type TaskImage = {
  imageUrl: string;
  id_tasks?: number;
};

type Task = {
  id: number;
  user_id: string;
  city: string;
  title: string;
  price: number;
  category: string;
  tasksImages: TaskImage[];
};

const TasksView = ({ tasks }) => {

  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const [inputValue, setInputValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

 
  const handleFilterChange = (newFilterValue, newCategory) => {
    setInputValue(newFilterValue);
    setSelectedCategory(newCategory);

    function removeAccents(str: string) {
      return str
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
    }

    const filtered = tasks.filter((task) => {
      const titleMatch = removeAccents(task.title).includes(removeAccents(newFilterValue));
      const descMatch = removeAccents(task.desc).includes(removeAccents(newFilterValue));
      const categoryMatch = newCategory ? task.category === newCategory : true;

      return (titleMatch || descMatch) && categoryMatch;
    });

    setFilteredTasks(filtered);
  };



  return (
    <div className="max-w-7xl mx-auto flex-auto">
      <FilterBar   inputValue={(value) => handleFilterChange(value, selectedCategory)} 
                  selectValue={(value) => handleFilterChange(inputValue, value)}  />
      <div className="max-w-7xl grid grid-cols-1 gap-4 gap-y-10 lg:grid-cols-2 pt-14 px-4 mx-auto flex-auto ">
        {filteredTasks?.map((task: Task) => (
          <div
            key={task.id}
            className="h-[300px] border-2 flex flex-col border-customColor1 justify-between bg-slate-100 shadow-md rounded-lg last:mb-10"
          >
            <div className="relative mx-4 -mt-6 h-1/2 overflow-hidden rounded-xl">
              {task.tasksImages && task.tasksImages.length > 0 ? (
                <Image
                  src={task.tasksImages[0].imageUrl}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="Fotogragie inzerátu"
                  className="object-cover hover:scale-[0.9] rounded-2xl"
                />
              ) : (
                <p className="text-center mt-16 font-bold">
                  Nebyli nalezeny fotografie
                </p>
              )}
            </div>
            <article className="pb-4 mt-2 px-4 flex-auto">
              <h2 className="mb-2 text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {task.title}
              </h2>
              <p className="text-base font-light leading-relaxed text-inherit">
                Město: <span className="font-bold">{task.city}</span>
              </p>
              <p className="text-base font-light leading-relaxed text-inherit">
                Cena: <span className="font-bold">{task.price}Kč</span>{" "}
              </p>
              <p className="text-base mb-4 font-light leading-relaxed text-inherit">
                Kategorie: <span className="font-bold">{task.category}</span>
              </p>
              <Link
                href={`/tasks/${task.id}`}
                className="rounded-lg w-full whitespace-nowrap bg-purple-800 py-3 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Více informací
              </Link>
            </article>
            {/* {isAdmin == process.env.SUPABASE_ADMIN ? (
          <div className="flex justify-around gap-1 p-2">
            <DeleteTaskForm id={task.id} className="w-3/6" />
            <EditTaskForm task={task} className="w-3/6" />
          </div>
        ) : null} */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TasksView;
