import React, {useState} from 'react';
import {Box} from '@mui/material';
import Exercises from '../components/Exercises'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'


const Home = () => {
  const[exercises, setExercises] =  useState([]);
  const [bodyPart,setBodyPart]= useState('all');
  return (
    <Box>
      <HeroBanner />
      <SearchExercises  bodyPart={bodyPart} setBodyPart={setBodyPart} setExercises={setExercises}/>
      <Exercises  bodyPart={bodyPart} setBodyPart={setBodyPart} setExercises={setExercises}/>
    </Box>
  )
}

export default Home