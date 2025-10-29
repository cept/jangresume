import React from 'react'
import { useReducer, useState } from 'react';

const initialState = {
    personalInfo: {
      nama_lengkap: '',
      email: '',
      no_hp: '',
      alamat: '',
      headline: '',
      summary: ''
    },
    experiences: [],
    educations: [],
    skills: []
};

function resumeReducer(state, action) {
  switch (action.type) {
    case 'SET_FORM_DATA':
      return action.payload;
    case 'UPDATE_PERSONAL':
      return {
        ...state,
        personalInfo: {
          ...state.personalInfo,
          [action.field]: action.value
        }
      };
    
    // --- EXPERIENCE ACTIONS ---
    case 'ADD_EXPERIENCE': {
      const newExperience = { 
        id: Date.now(),
        company: '', 
        role: '',
        startDate: '',
        endDate: '',
        description: ''
      };
      return {
        ...state,
        experiences: [...state.experiences, newExperience]
      };
    } 

    case 'UPDATE_EXPERIENCE':
      return {
        ...state,
        experiences: state.experiences.map(exp => 
          exp.id === action.id 
            ? { ...exp, [action.field]: action.value }
            : exp
        )
      };

    case 'DELETE_EXPERIENCE':
      return {
        ...state,
        experiences: state.experiences.filter(exp => exp.id !== action.id)
      };

    // --- EDUCATION ACTIONS ---
    case 'ADD_EDUCATION': { 
      const newEducation = {
        id: Date.now(),
        school: '',
        degree: '',
        fieldOfStudy: '',
        startDate: '',
        endDate: ''
      };
      return {
        ...state,
        educations: [...state.educations, newEducation]
      };
    } 
    
    case 'UPDATE_EDUCATION':
      return {
        ...state,
        educations: state.educations.map(edu => 
          edu.id === action.id 
            ? { ...edu, [action.field]: action.value }
            : edu
        )
      };

    case 'DELETE_EDUCATION':
      return {
        ...state,
        educations: state.educations.filter(edu => edu.id !== action.id)
      };

    case 'ADD_SKILL':
      if (action.skill.trim() === '' || state.skills.includes(action.skill)) {
        return state;
      }
      return {
        ...state,
        skills: [...state.skills, action.skill.trim()]
      };

    case 'DELETE_SKILL':
      return {
        ...state,
        skills: state.skills.filter((_, index) => index !== action.index)
      };
      
    case 'RESET_FORM':
      return initialState;

    default:
      return state;
  }
}

const useResumeForm = () => {
    const [state, dispatch] = useReducer(resumeReducer, initialState);
    const [currentSkill, setCurrentSkill] = useState('');

    const handlePersonalChange = (e) => dispatch({ type: 'UPDATE_PERSONAL', field: e.target.name, value: e.target.value });
    const handleExperienceChange = (id, e) => dispatch({ type: 'UPDATE_EXPERIENCE', id: id, field: e.target.name, value: e.target.value });
    const handleEducationChange = (id, e) => dispatch({ type: 'UPDATE_EDUCATION', id: id, field: e.target.name, value: e.target.value });
    const handleAddSkill = (e) => {
        e.preventDefault(); 
        dispatch({ type: 'ADD_SKILL', skill: currentSkill });
        setCurrentSkill(''); 
    };

  return {
    state,
    dispatch,
    currentSkill,
    setCurrentSkill,
    handlePersonalChange,
    handleExperienceChange,
    handleEducationChange,
    handleAddSkill
  };
}

export default useResumeForm
