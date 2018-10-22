import * as actions from '../constants/courseCostants';

export function createCourse(course) {
  return { type: actions.CREATE_COURSE, course };
}

export function deleteCourse(course) {
  return { type: actions.DELETE_COURSE, course: course };
}