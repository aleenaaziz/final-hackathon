import React, { useState } from 'react';
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

const ProjectForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [projectInfo, setProjectInfo] = useState({
    projectTitle: '',
    developerName: '',
    description: '',
    hostedURL: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProjectInfo({ ...projectInfo, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:5000/projects/addProject", projectInfo);
    if(response.data){
      navigate("/allProject")
    }
  };

  return (
    <div>
      <h2>Submission Project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Project Title:
          <input
            type="text"
            name="projectTitle"
            value={projectInfo.projectTitle}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Developer Name:
          <input
            type="text"
            name="developerName"
            value={projectInfo.developerName}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="description"
            value={projectInfo.description}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Hosted URL:
          <input
            type="url"
            name="hostedURL"
            value={projectInfo.hostedURL}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <button type="submit">Submit Project</button>
      </form>
    </div>
  );
};

export default ProjectForm;
