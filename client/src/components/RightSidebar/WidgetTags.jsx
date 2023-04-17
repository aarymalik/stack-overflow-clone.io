import React from "react";

const WidgetTags = () => {
  const tags = [
    "c",
    "css",
    "javascript",
    "Html",
    "nodejs",
    "MongoDb",
    "Reactjs",
    "Expressjs",
    "Python",
    "Php",
    "Github",
    "Mysql",
    "Java",
    "Mern",
    "Mean",
  ];
  return (
    <div className="widget-tags">
      <h3>Watched Tags</h3>
      <div className="widget-tags-div">
        {tags.map((tag) => (
          <p key={tag}>{tag} </p>
        ))}
      </div>
    </div>
  );
};

export default WidgetTags;
