import { useState } from "react"
import axios from 'axios';

import {Checkbox, FormControlLabel, FormGroup, IconButton, Skeleton, TextField, Typography} from '@mui/material';
import {Add} from '@mui/icons-material';


export default function Task() {

    const [task, setTask] = useState('');
    const [project, setProject] = useState('');
    const text = ['a', 'b'];

    function handleCheckbox(e) {
        // console.log('checkbox');
        console.log(e.target.value);
    }

    function handleAdd(e) {
        axios.post('/tasks', {
            task,
        });
    }

    return (
        <>
            {!project ? (
                <div>
                    <Skeleton variant="h1" height={120}/>
                    <Skeleton variant="text" sx={{fontSize: '1.5rem'}}/>
                    <Skeleton variant="text" sx={{fontSize: '2rem'}}/>
                    <Skeleton variant="text" sx={{fontSize: '2rem'}}/>
                    <Skeleton variant="text" sx={{fontSize: '2rem'}}/>
                </div>
            ) : (
                <div>
                    <Typography variant="h1" component="h2">
                    task
                    </Typography>
                    
                    <label>header: [user's name]</label>
                    
                    <TextField id="standard-basic" 
                    label="Standard" 
                    variant="standard" 
                    onChange={e=> setTask(e.target.value)}
                    />
                    <IconButton onClick={handleAdd}>
                        <Add />
                    </IconButton>
                    <FormGroup>
                        <FormControlLabel 
                        control={<Checkbox onChange={handleCheckbox} value="value1"/>} 
                        label="task1"/>
                        <FormControlLabel 
                        control={<Checkbox onChange={handleCheckbox} value="value2"/>} 
                        label="task2"/>
                        
                    </FormGroup>
                </div>
            )}
            

            
            
        </>
    )
}