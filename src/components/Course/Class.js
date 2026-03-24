import { useParams } from "react-router-dom";

import PythonClass1 from "../PythonCourse/PythonClass1/PythonClass1";
import PythonClass2 from "../PythonCourse/PythonClass2/PythonClass2";
import PythonClass3 from "../PythonCourse/PythonClass3/PythonClass3";
import PythonClass4 from "../PythonCourse/PythonClass4/PythonClass4";
import PythonClass5 from "../PythonCourse/PythonClass5/PythonClass5";
import PythonClass6 from "../PythonCourse/PythonClass6/PythonClass6";
import PythonClass7 from "../PythonCourse/PythonClass7/PythonClass7";
import PythonClass8 from "../PythonCourse/PythonClass8/PythonClass8";

const Class = () => {
  const { classId } = useParams();

  // 🔥 mapping dinámico
  const classMap = {
    "clase-1": <PythonClass1 />,
    "clase-2": <PythonClass2 />,
    "clase-3": <PythonClass3 />,
    "clase-4": <PythonClass4 />,
    "clase-5": <PythonClass5 />,
    "clase-6": <PythonClass6 />,
    "clase-7": <PythonClass7 />,
    "clase-8": <PythonClass8 />,
  };

  return classMap[classId] || <div>Clase no encontrada</div>;
};

export default Class;