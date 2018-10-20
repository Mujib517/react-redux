import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from './actions/courseActions';

class Courses extends PureComponent {
  constructor() {
    super();

    this.state = { course: {} };

    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onChange(evt) {
    const course = this.state.course;
    course.title = evt.target.value;
    this.setState({ course: course });
  }

  onSave() {
    this.props.actions.createCourse(this.state.course);
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        <div>{this.props.courses.map((course, index) => <div key={index}>{course.title}</div>)}</div>
        <hr />
        <div>
          <input type="text" onChange={this.onChange}/>
          <button onClick={this.onSave}>Save</button>
        </div>
      </div>
    )
  }

}

function mapStateToProps(state, ownProps) {
  return { courses: state.courses };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Courses);