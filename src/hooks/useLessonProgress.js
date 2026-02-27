import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

export const useLessonProgress = (courseId) => {
  const [lessonProgress, setLessonProgress] = useState({});
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) setUserId(user.id);
    };

    getUser();
  }, []);

  useEffect(() => {
    if (!userId) return;

    const fetchAllLessons = async () => {
      const { data, error } = await supabase
        .from("student_lesson_progress")
        .select("lesson_id, progress, completed_blocks")
        .eq("user_id", userId);

      if (error) {
        console.error(error);
        return;
      }

      const grouped = {};
      data.forEach(item => {
        grouped[item.lesson_id] = {
          progress: item.progress,
          completed: item.completed_blocks || []
        };
      });

      setLessonProgress(grouped);
    };

    fetchAllLessons();
  }, [userId]);

  const handleComplete = async (lessonId, blockNumber, totalBloques) => {
    const lesson = lessonProgress[lessonId] || {
      progress: 0,
      completed: []
    };

    if (lesson.completed.includes(blockNumber)) return;

    const updatedBlocks = [...lesson.completed, blockNumber];
    const porcentaje = Math.round(
      (updatedBlocks.length / totalBloques) * 100
    );

    await supabase.from("student_lesson_progress").upsert(
      {
        user_id: userId,
        lesson_id: lessonId,
        progress: porcentaje,
        completed_blocks: updatedBlocks
      },
      { onConflict: "user_id,lesson_id" }
    );

    setLessonProgress(prev => ({
      ...prev,
      [lessonId]: {
        progress: porcentaje,
        completed: updatedBlocks
      }
    }));
  };

  return { lessonProgress, handleComplete };
};