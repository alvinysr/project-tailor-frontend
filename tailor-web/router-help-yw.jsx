//something wrong with router use

import React from 'react';
import './CoursesPage.css';
import { Routes, Route } from 'react-router-dom';
import ChemistryPage from './Courses/ChemistryPage.jsx';
import PhysicsPage from './Courses/PhysicsPage.jsx';
import TokPage from './Courses/TokPage.jsx';

const CoursesPage = () => {
  const courses = ['IB Chemistry', 'IB Physics', 'TOK'];
  const courseDescription = [
    'Recent Update: 2024/6/12',
    'Recent Update: 2024/6/13',
    'Recent Update: 2024/6/16',
  ];

  return (
    <div className='courses-page'>
      <div className='page-header'>My Courses</div>
      <ul className='course-list'>
        {courses.map((course, index) => (
          <li key={index} className='course-item'>
            {course}
            <div className='goto'>
              <Routes>
                <Route
                  path='/ChemistryPage'
                  element={<ChemistryPage />}
                ></Route>
                <Route
                  path='/Courses/PhysicsPage'
                  element={<PhysicsPage />}
                ></Route>
                <Route path='/Courses/TokPage' element={<TokPage />}></Route>
              </Routes>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoursesPage;
