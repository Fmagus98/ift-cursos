import { Clock } from "lucide-react";
import { Link } from "react-router-dom";

export default function CourseCard({
  level,
  levelColor = "green",
  category,
  title,
  topics = [],
  duration,
  link,
  date,
}) {
  const parseDate = (dateString) => {
    const [day, month, year] = dateString.split("/");
    return new Date(year, month - 1, day);
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0); // limpiamos horas para comparar solo fecha

  let isUpcoming = false;

  if (date) {
    const classDate = parseDate(date);
    isUpcoming = classDate > today;
  }

  const levelStyles = {
    green: "bg-green-100 text-green-700 border-green-200",
    blue: "bg-blue-100 text-blue-700 border-blue-200",
    red: "bg-red-100 text-red-700 border-red-200",
    yellow: "bg-yellow-100 text-yellow-700 border-yellow-200",
  };

  return (
    <div
      className="
        rounded-xl
        border
        bg-card
        text-card-foreground
        shadow
        group
        overflow-hidden
        transition-all
        duration-300
        hover:shadow-xl
        border-gray-200
        cursor-pointer
      "
    >
      <div className="flex flex-col space-y-1.5 p-6 pb-3">
        <div className="flex items-center justify-between h-6 w-full mb-2">
          <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 font-semibold text-foreground text-xs">
            {category}
          </div>
          <div
            className={`
      inline-flex items-center rounded-md border
      px-2.5 py-0.5 text-xs font-semibold
      ${levelStyles[levelColor]}
    `}
          >
            {level}
          </div>
        </div>
        <h3
          className="
            text-xl font-bold text-gray-900
            group-hover:text-cyan-600
            transition-colors
            line-clamp-2
          "
        >
          {title}
        </h3>
      </div>
      <div className="p-6 pt-0 pb-4 space-y-2">
        {topics.map((topic, i) => (
          <p key={i} className="text-gray-600 text-sm line-clamp-2">
            {topic}
          </p>
        ))}
        <div className="flex items-center gap-2 text-sm text-gray-500 pt-2">
          <Clock className="w-5 h-5" />
          <span>{duration}</span>
        </div>
      </div>
      <div className="flex items-center p-6 pt-0">
        {isUpcoming ? (
          <div
            className="
      inline-flex items-center justify-center
      text-sm font-medium
      rounded-md w-full h-9
      bg-gray-300
      text-gray-700
    "
          >
            Próximamente el {date}
          </div>
        ) : (
          <Link to={link} className="w-full">
            <button
              className="
        inline-flex items-center justify-center
        gap-2 text-sm font-medium
        rounded-md w-full h-9
        bg-cyan-600 hover:bg-cyan-700
        text-white transition
      "
            >
              Ver Clase
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
