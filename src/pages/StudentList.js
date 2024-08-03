import React from "react";
import { Link } from "react-router-dom";
import supabase from "../config/supabaseConfig";

const StudentList = ({ student, onDelete }) => {
  const handleDelete = async () => {
    const { data, error } = await supabase
      .from("student")
      .delete()
      .eq("id", student.id);

    if (error) {
      console.log(error);
    }
    if (data) {
      console.log(data);
      onDelete(student.id);
    }
  };
  return (
    <div>
      <h1>{student.f_name}</h1>
      <p>{student.department}</p>
      <div>
        <Link to={"/" + student.id}>
          <i className="material-icons">edit</i>
        </Link>
        <button onClick={handleDelete}>delete</button>
      </div>
    </div>
  );
};

export default StudentList;
