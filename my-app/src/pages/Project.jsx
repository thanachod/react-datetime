import { Add, Delete } from "@mui/icons-material";
import { Button, IconButton, Skeleton, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ProjectContext } from "../context/ProjectContext";


export default function Project() {

    const [project, setProject] = useState('');
    const [projectList, setProjectList] = useState([]);
    const {selectedProject, setSelectedProject} = useContext(ProjectContext)

    useEffect(() => {
        axios.get('/projects')
        .then((response) => {
            setProjectList(response.data);
        })
    }, []) 

    

    function handleAdd(e) {
        e.preventDefault();
        axios.post('/projects', {
            title: project,

        })
        .then((result) => {
            axios.get('/projects')
            .then((response) => {
                setProjectList(response.data);
            })
        })
        setProject('');
        
    }

    function handleClick(e) {
        // e.preventDefault();
        console.log(e.currentTarget.value);
        axios.get(`/projects/${e.currentTarget.value}` )
        .then((response) => {
            
            setSelectedProject(response.data._id);
            console.log('selected ',selectedProject);
            
        })
        
    }

    function handleDelete(e) {
        
        axios.delete(`/projects/${e.currentTarget.value}`)
        .then((response) => {
            axios.get('/projects')
            .then((response) => {
                setProjectList(response.data);
            })
        })
        // console.log('after: ', projectList);
    }

    return (
        <>
            <TextField id="standard-basic" 
            label="Standard" 
            variant="standard" 
            value={project}
            onChange={e=> setProject(e.target.value)}
            />
            <IconButton onClick={handleAdd}>
                <Add />
            </IconButton>


            {!projectList ? (
                <>
                    <Skeleton variant="text" sx={{fontSize: '2rem'}}/>
                    <Skeleton variant="text" sx={{fontSize: '2rem'}}/>
                    <Skeleton variant="text" sx={{fontSize: '2rem'}}/>
                </>
                
            ) : (
                projectList.map((item) => {
                    return (
                        <div key={item._id} >
                            <Button variant="text" id={item._id} onClick={handleClick} value={item._id}>{item.title}</Button>
                            
                            <IconButton onClick={handleDelete} value={item._id}>
                                <Delete />
                            </IconButton>
                        </div>
                    )
                })
            )}

            
            
        </>
    )
}