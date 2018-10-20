import * as actions from '../constants/courseCostants';

export function createCourse(course) {
  return { type: actions.CREATE_COURSE, course };
}