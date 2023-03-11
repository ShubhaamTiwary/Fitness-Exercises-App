import {React, useEffect , useState} from 'react'
import Pagination from '@mui/material/Pagination'
import {Box, Stack, Typography} from '@mui/material' ;

import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

const Exercises = ({bodyPart, exercises, setExercises}) => {
  // const exercises=props.exercises;
  console.log(exercises);
  
  return (
    <Box id="exercises"
      sx={{mt: {lg: '110px'}}}
      mt="50px"
      p="20px"
    >
       <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">
        Showing Results
        </Typography>
        <Stack direction="row" sx={{ gap: {lg: '110px' , xs: '50px'}}} 
        flexWrap="wrap" justifyContent="center"> 
        {exercises.map((exercise,index)=>(
          <ExerciseCard key={index} exercise={exercise} />
        ))}
        </Stack>
    </Box>
  )
}

export default Exercises