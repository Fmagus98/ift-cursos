import React from "react";
import { Link } from "react-router-dom";

const SectionCourse = ({ course }) => {

  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow group overflow-hidden transition-all duration-300 hover:shadow-xl border-gray-200 cursor-pointer">
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          src={course.image}
        />
        <div className="absolute top-3 right-3">
          <div
            className={`inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold bg-${course.levelColor}-100 text-${course.levelColor}-700 border-${course.levelColor}-200`}
          >
            {course.level}
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-1.5 p-6 pb-3">
        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 font-semibold text-foreground w-fit mb-2 text-xs">
          {course.category}
        </div>
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-cyan-600 transition-colors line-clamp-2">
          {course.title}
        </h3>
      </div>

      <div className="p-6 pt-0 pb-4">
        <p className="text-gray-600 text-sm line-clamp-2 mb-4">
          {course.description}
        </p>
        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">{course.duration}</div>
          <div className="flex items-center gap-1">
            {course.students} estudiantes
          </div>
          <div className="flex items-center gap-1">{course.classes} clases</div>
        </div>
      </div>

      <div className="flex items-center p-6 pt-0">
        <Link to={course.link} className="w-full">
          <button className="inline-flex items-center justify-center gap-2 text-sm font-medium rounded-md w-full h-9 bg-cyan-600 hover:bg-cyan-700 text-white">
            Ver Curso
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SectionCourse;
