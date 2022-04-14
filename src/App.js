import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import Main from "./components/Main";

function App() {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem("jobs"));
    return storageJobs ?? [];
  });
  const handleSubmit = (e) => {
    setJobs((prev) => {
      const newJob = [...prev, job];
      const jsonJobs = JSON.stringify(newJob);
      localStorage.setItem("jobs", jsonJobs);
      return newJob;
    });
    setJob("");

    e.preventDefault();
  };
  const handleDeleteJob = (index) => {
    if (jobs.length) {
      const newJobs = jobs.filter((job, indexJob) => indexJob !== index);

      const jsonListJobs = JSON.stringify(newJobs);
      localStorage.setItem("jobs", jsonListJobs);
      setJobs(newJobs);
    }
  };

  const clearAll = () => {
    setJobs([]);
    localStorage.removeItem("jobs");
  };

  return (
    <Main>
      {/* Enter Jobs */}
      <form className="enter-jobs" onSubmit={handleSubmit}>
        <Input
          className="input-enter-jobs"
          type="text"
          placeholder="enter jobs"
          value={job}
          onChange={(e) => setJob(e.target.value)}
          required
        />
        <Button type="submit" className="addJobs">
          Add
        </Button>
      </form>

      {/* List Jobs */}
      <div className="todo-list">
        {jobs.map((job, index) => (
          <ul key={index} className="list-jobs">
            <li>
              <p>{job}</p>
            </li>
            <Button
              className="btn-delete-item"
              onClick={() => handleDeleteJob(index)}
            >
              Delete
            </Button>
          </ul>
        ))}
        <Button className="btn-clearAll" onClick={clearAll}>
          Clear all
        </Button>
      </div>
    </Main>
  );
}

export default App;
