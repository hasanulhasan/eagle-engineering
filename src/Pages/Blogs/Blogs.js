import React, { useState } from 'react';
import useTitle from '../../Hooks/useTitle';

const Item = ({ title, children }) => {
  useTitle('Blogs')
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium text-orange-600">{title}</p>
        <svg
          viewBox="0 0 24 24"
          className={`w-3 text-orange-600 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
            }`}
        >
          <polyline
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit="10"
            points="2,7 12,17 22,7"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-yellow-600">{children}</p>
        </div>
      )}
    </div>
  );
};

export const Blog = () => {
  return (
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
      <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-yellow-200 sm:text-4xl md:mx-auto">
            <span class="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="232db96b-4aa2-422f-9086-5a77996d1df1"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#232db96b-4aa2-422f-9086-5a77996d1df1)"
                  width="52"
                  height="24"
                />
              </svg>
              <span class="relative"></span>
            </span>{' '}
            We are thinking about your Question
          </h2>
          <p class="text-base text-yellow-400 md:text-lg ">
            We thing you have some question about us . Here some demo are presented . You you have further question then contact us. We are waiting for your curiosity.
          </p>
        </div>
        <div class="space-y-4">
          <Item title="Difference between SQL and NoSQL?">
            SQL pronounced as “S-Q-L” or as “See-Quel” is primarily called RDBMS or Relational Databases, whereas NoSQL is a Non-relational or Distributed Database.<br />
            Comparing SQL vs NoSQL databases, SQL databases are table-based databases, whereas NoSQL databases can be document-based, key-value pairs, and graph databases.<br />
            SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.<br />
            SQL databases have a predefined schema, whereas NoSQL databases use a dynamic schema for unstructured data.<br />
            Comparing NoSQL vs SQL performance, SQL requires specialized DB hardware for better performance while NoSQL uses commodity hardware.<br />
          </Item>
          <Item title="What is JWT, and how does it work?">
            JWTs or JSON Web Tokens are most commonly used to identify an authenticated user. They are issued by an authentication server and are consumed by the client-server (to secure its APIs). <br />
            A JWT is a Base64URL encoded string, split into three sections, delimited by periods.<br />

            1-Section one is the header. This section contains JWT metadata; typically information about the type of token and the algorithm used to sign it. It is encoded JSON.<br />
            2-Section two is the payload. This is the content of the token and is also encoded JSON.<br />
            3-Section three is the signature. This is the SHA256 (or some other HMAC) hash of the encoded header, encoded payload, and a secret. This part of the JWT is used to verify the integrity of the message.
          </Item>
          <Item title="What is the difference between javascript and NodeJS?">
            JavaScript is mainly used to create front end web applications or develop client-side whereas Node.js is used on the back end development that is server-side development.<br /><br />

            JavaScript follows the standard of JavaScript when writing programs whereas Node.js is written in C++ while using the v8 engine, it runs JavaScript outside the browser.<br /><br />

            JavaScript is executed in the browser whereas using Node.js gives us the ability to execute JavaScript outside the browser.<br /><br />
          </Item>
          <Item title="How does NodeJS handle multiple requests at the same time?">
            NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
          </Item>
        </div>
      </div>
    </div>
  );
};

export default Blog;