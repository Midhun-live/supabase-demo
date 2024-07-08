import React, { useEffect, useState } from "react";
import supabase from "../config/supabaseConfig";

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
        <div>
          {students.map((student) => (
            <div key={student.id}>
              <h1>{student.department}</h1>
              <p>{student.f_name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
