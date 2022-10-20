import { useState } from "react";
import iconRemove from "./assets/icon-remove.svg";
import data from "./assets/data.json";

import "./App.css";
import Job from "./Job";
interface JobI {
  id: number;
  company: string;
  logo: string;
  featured: boolean;
  isNew: boolean;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  role: string;
  level: string;
  languages: string[];
  tools: string[];
}
function App() {
  const [filteredBy, setFilteredBy] = useState<string[]>([" "]);
  function newFilter(filter: string) {
    if (filteredBy.includes(filter)) return;
    setFilteredBy((pre) => [...pre, filter]);
  }
  let filteredList: JobI[] = [];
  filteredBy.forEach((filter) => {
    filteredList = data.filter((job) => JSON.stringify(job).includes(filter));
  });
  return (
    <>
      <div className="header">
      </div>

      {filteredBy.length > 1 && <DisplayFilterBar />}

      <div className="jobsWrap">
        {filteredList.map((job, index) => {
          return <Job newFilter={newFilter} key={index} {...job} />;
        })}
      </div>
    </>
  );

  function DisplayFilterBar() {
    return (
      <div className="filterWrap">
        {filteredBy.map((item, index) => (
          <div
            onClick={(e: any) =>
              setFilteredBy(
                filteredBy.filter((filter) => filter !== e.target.textContent)
              )
            }
            key={index}
          >
            {item}
            <img src={iconRemove} alt="remove button" />
          </div>
        ))}

        <span className="clear" onClick={() => setFilteredBy([" "])}>
          Clear
        </span>
      </div>
    );
  }
}

export default App;
