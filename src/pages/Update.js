import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import supabase from "../config/supabaseConfig";

function Update() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [f_name, setf_name] = useState("");
  const [department, setDepartment] = useState("");
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!f_name || !department) {
      setFormError("Please fill in all fields");
      return;
    }

    const { data, error } = await supabase
      .from("student")
      .update([{ f_name, department }])
      .eq("id", id);

    if (error) {
      console.error("Error occurred:", error);
      setFormError(error.message);
    } else {
      console.log("Data inserted successfully:", data);
      setFormError(null);
      navigate("/");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("student")
        .select()
        .eq("id", id)
        .single();

      if (error) {
        navigate("/");
      }
      if (data) {
        setf_name(data.f_name);
        setDepartment(data.department);
      }
    };
    fetchData();
  }, [id, navigate]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="f_name">Name:</label>
        <input
          type="text"
          id="f_name"
          value={f_name}
          onChange={(e) => setf_name(e.target.value)}
        />
        <label htmlFor="dept">Department:</label>
        <input
          type="text"
          id="dept"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
        <button type="submit">Update Student</button>
      </form>
    </div>
  );
}

export default Update;
