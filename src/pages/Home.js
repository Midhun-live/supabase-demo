import React, { useEffect, useState } from "react";
import supabase from "../config/supabaseConfig";

function Home() {
  const [fetchError, setFectError] = useState(null);
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchStudent = async () => {
      const { data, error } = await supabase.from("Student").select();

      if (error) {
        setFectError("Could not fetch data");
        setStudent(null);
      }
      if (data) {
        setStudent(data);
        setFectError(null);
      }
    };
    fetchStudent();
  }, []);

  return (
    <div>
      {fetchError && <p>{fetchError}</p>}
      {student && (
        <div>
          {student.map((s) => (
            <p key={s.id}>s.name</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
