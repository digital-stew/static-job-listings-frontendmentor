import React from "react";

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
  role:string
  level:string
  languages:string[]
  tools:string[]

  newFilter: (filter: string) => void
}

function Job({
  id,
  company,
  logo,
  isNew,
  featured,
  position,
  postedAt,
  contract,
  location,
  role,
  level,
  languages,
  tools,
  newFilter
}: JobI) {

  return (
    <div className={featured?'job featured':'job'}>
      <img className="headerImg" src={logo} alt="logo" />
      <div className="job-info">
        <div>
          {company}
          {isNew && <span className="pill pillN">NEW!</span>}
          {featured && <span className="pill pillF">FEATURED</span>}
        </div>
        <div style={{fontWeight:'700',color:'black'}}>{position}</div>
        <div>
          {postedAt}
          <div className="dot"></div>
          {contract}
          <div className="dot"></div>
          {location}
        </div>
      </div>
      <div className="filterBy">
        <span onClick={(event:any)=>newFilter(event.target.textContent)}>{role}</span>
        <span onClick={(event:any)=>newFilter(event.target.textContent)}>{level}</span>
        {languages.map((lang,index)=><span key={index} onClick={(event:any)=>newFilter(event.target.textContent)}>{lang}</span>)}
        {tools.map((tool,index)=><span key={index} onClick={(event:any)=>newFilter(event.target.textContent)}>{tool}</span>)}

      </div>
    </div>
  );
}

export default Job;
