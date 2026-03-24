import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export const useCourseAccess = (courseId, userId) => {
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkEnrollment = async () => {
      if (!userId) {
        setIsEnrolled(false);
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("student_course_progress")
        .select("id")
        .eq("user_id", userId)
        .eq("course_id", courseId)
        .maybeSingle();

      if (error) {
        console.error(error);
        setIsEnrolled(false);
      } else {
        setIsEnrolled(!!data);
      }

      setLoading(false);
    };

    checkEnrollment();
  }, [courseId, userId]);

  return { isEnrolled, loading };
};
