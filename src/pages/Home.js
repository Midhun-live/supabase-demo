import React, { useEffect, useState } from "react";
import supabase from "../config/supabaseConfig";
import { Link } from "react-router-dom";

function Home() {
  const [fetchError, setFetchError] = useState(null);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    console.log(supabase);
    const fetchStudents = async () => {
      let { data, error } = await supabase.from("student").select();
      if (error) {
        setFetchError("coulf'nt display data");
        throw error;
      }
      setStudents(data);
    };

    fetchStudents();
  }, []);

  return (
    <div className="student">
      {fetchError && <p>{fetchError}</p>}
      {students.length > 0 && (
        <div className="overall-student-box">
          {students.map((student) => (
            <div key={student.id} className="student-box">
              <h1>{student.department}</h1>
              <p>{student.f_name}</p>
              <div className="buttons">
                <Link to={"/" + student.id}>
                  <i className="material-icons">edit</i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
