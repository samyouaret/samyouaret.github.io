import React from 'react';

function Home() {
  return (<div>
    <h2 className="text-4xl text-gray-800">
      <span className="text-blue-600">Hi, I'm Samy Ouaret</span>,
      Web developer, PHP enthusiast, React developer
    </h2>
    <p className="text-gray-700 text-2xl p-2">A web developer with over 4 years’ experience in web applications and web projects
    using PHP and Javascript frameworks.</p>
    <p className="text-gray-900 text-2xl p-2 mb-8">I'm currently looking for job,I'm available
     for freelance backend and front-end web projects.</p>
    <a href="mailto:samyouaret13@gmail.com" className="bg-blue-600 rounded-md p-3 text-white ml-3 font-bold hover:bg-blue-500">Hire me</a>
  </div>
  );
}

export default Home;
