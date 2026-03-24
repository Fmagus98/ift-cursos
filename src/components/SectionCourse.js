import { Link } from "react-router-dom";

const SectionCourse = ({ course }) => {
  const color = course.level === "Principiante" ? "green" : "blue";

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
            className={`inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold bg-${color}-100 text-${color}-700 border-${color}-200`}
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
          <div className="flex items-center gap-1 stroke-[2] stroke-linecap-round stroke-linejoin-round ">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>{course.duration}</div>
          <div className="flex items-center gap-1 stroke-[2] stroke-linecap-round stroke-linejoin-round ">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>{course.students} estudiantes
          </div>
          <div className="flex items-center gap-1 stroke-[2] stroke-linecap-round stroke-linejoin-round ">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>{course.classes} clases</div>
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
