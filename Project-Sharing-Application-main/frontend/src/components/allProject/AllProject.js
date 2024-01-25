import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllProject = () => {
  const [allUserProject, setAllUserProject] = useState([]);
  const fetchAllProjects = async () => {
    const response = await axios("http://localhost:5000/projects/getProject");
    console.log(response.data);
    setAllUserProject(response.data);
  };
  useEffect(() => {
    fetchAllProjects();
  }, []);
  return (
    <div>
      <h1>All Projects</h1>
      <table border={"1px solid black"}>
        <tr>
          <th>Developer Name</th>
          <th>Project Title</th>
          <th>Description</th>
          <th>Hosted URL</th>
        </tr>
        {allUserProject.map((item, index) => {
          return (
            <tr key={index}>
              <th>{item.developerName}</th>
              <th>{item.projectTitle}</th>
              <th>{item.description}</th>
              <th>
                <Link to={item.hostedURL}>{item.hostedURL}</Link>                
              </th>
            </tr>
          );
        })}
        <tr></tr>
      </table>
    </div>
  );
};

export default AllProject;
