// src/hooks/courseContextFetcher.js
import { useCourse } from '@context/CourseContext';

export const useFetchCourseContext = () => {
    const { firstLessonId, setFirstLessonId } = useCourse();
    return { firstLessonId, setFirstLessonId };
};
