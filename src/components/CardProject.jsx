import React from 'react';

const projects = [
  {
    title: "The Coldest Sunset",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    tags: ['#photography', '#travel', '#winter'],
    image: "https://via.placeholder.com/400"
  },
  {
    title: "Summer Vibes",
    description: "Explicabo eum quisquam numquam doloribus praesentium magni consequatur reprehenderit voluptatibus dolor. Lorem ipsum dolor sit amet.",
    tags: ['#vacation', '#beach', '#summer'],
    image: "https://via.placeholder.com/400"
  },
  {
    title: "Mountain Adventure",
    description: "Amet voluptatibus molestiae esse cupiditate dolorum dolores. Asperiores adipisci perferendis, est qui numquam officia hic excepturi.",
    tags: ['#mountains', '#hiking', '#nature'],
    image: "https://via.placeholder.com/400"
  },
  {
    title: "City Lights",
    description: "Velit nostrum exercitationem dolor doloremque. Placeat voluptatem mollitia non quis quam consequatur neque nisi. Sit, veritatis at!",
    tags: ['#city', '#nightlife', '#urban'],
    image: "https://via.placeholder.com/400"
  }
];

export default function CardProjects() {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2">
      {projects.map((project, index) => (
        <div key={index} className="max-w-xs rounded overflow-hidden shadow-lg m-3">
          <div className="px-6 py-4">
            <div className="flex justify-between">
              <div className="font-bold text-xl mb-2">{project.title}</div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </div>
            <img className="w-full rounded-md" src={project.image} alt={project.title} />

            <p className="text-gray-700 text-base">{project.description}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
