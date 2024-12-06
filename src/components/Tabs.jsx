import React, { useState } from "react";
import About from "./tabs/About.jsx";
import Experience from "./tabs/Experience.jsx";
import Project from "./tabs/Project.jsx";
import User from "./icons/User.jsx"
import Work from "./icons/Work.jsx";
import Paper from "./icons/Paper.jsx";


const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, label: "Sobre mi" , component: <About />, icon: <User className="w-5 h-5"/> },
    { id: 1, label: "Experiencia", component: <Experience />, icon: <Work className="w-5 h-5"/> },
    { id: 2, label: "Proyectos", component: <Project />, icon: <Paper className="w-5 h-5"/> }
  ];

  return (
    <div className="w-full md:max-w-2xl max-w-sm mx-auto mt-5">
    <div className="flex justify-between">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex-1 py-2 text-center flex items-center justify-center space-x-2 ${
            activeTab === tab.id
              ? "border-b-2 border-blue-500 text-blue-500 font-bold"
              : "hover:text-blue-500"
          }`}
        >
          {tab.icon}
          <span>{tab.label}</span>
        </button>
      ))}
    </div>
    <div className="mt-4 p-4  rounded-md shadow-md overflow-hidden">
      {tabs[activeTab].component}
    </div>
  </div>
  );
};

export default Tabs;
