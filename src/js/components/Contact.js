import React from 'react';

function Contact() {
  return (<div>
    <h2 className="text-2xl text-gray-800 mb-3">Get in touch with me</h2>
    <p className="text-lg text-gray-900 m-3">You may contact me on:</p>
    <div class="flex flex-col">
      <a class="p-3 text-xl text-gray-800 hover:text-blue-700 ease-out duration-75" href="https://twitter.com/samyouaret13">
        <i class="fa fa-twitter mr-2 text-blue-500"></i>@samyouaret13</a>
      <a class="p-3 text-xl text-gray-800 hover:text-blue-700 ease-out duration-75" href="mailto:samyouaret13@gmail.com">
        <i class="fa fa-envelope mr-2 text-gray-600"></i>samyouaret13@gmail.com</a>
      <a class="p-3 text-xl text-gray-800 hover:text-blue-700 ease-out duration-75" href="https://www.linkedin.com/in/samyouaret">
        <i class="fa fa-linkedin mr-2 text-blue-700"></i>samyouaret</a>
    </div>
  </div>
  );
}

export default Contact;
