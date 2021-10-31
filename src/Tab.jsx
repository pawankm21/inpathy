import { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  let [categories] = useState({
    Tips: [
      {
        id: "",
        date: "",
        title: "",
        link: "",
        commentCount: 0,
        shareCount: 0,
      },
    ],
    Resources: [
      {
        id: "",
        date: "",
        title: "",
        link: "",
        commentCount: 0,
        shareCount: 0,
      },
    ],
  });
  useEffect(() => {
    
  });
  

  return (
    <div className="w-full max-w-lg  sm:px-1 ">
      <div className=" px-2 py-4 rounded-xl  ">
        <Tab.Group>
          <Tab.List className="flex p-1 space-x-1 bg-blue-600 rounded-xl ">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "w-full py-2.5 text-lg leading-5 font-medium  rounded-lg",
                    "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
                    selected
                      ? "bg-white shadow text-gray-900 "
                      : "text-gray-100 hover:bg-blue/[0.12] hover:text-indigo-200"
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2 ">
            {Object.values(categories).map((posts, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  "bg-white rounded-xl p-3",
                  "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
                )}
              >
                <ul>
                  {posts.map((post) => (
                    <li
                      key={post.id}
                      className="relative p-3 rounded-md hover:bg-coolGray-100"
                    >
                      <h3 className="text-lg font-medium leading-5">
                        <a
                          href={post.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {post.title}
                        </a>
                      </h3>

                      <ul className="flex mt-1 space-x-1 text-xs font-normal leading-4 text-coolGray-500">
                        <li>{post.date}</li>
                        <li>&middot;</li>
                        <li>{post.commentCount} comments</li>
                        <li>&middot;</li>
                        <li>{post.shareCount} shares</li>
                      </ul>

                      <section
                        className={classNames(
                          "absolute inset-0 rounded-md sr-only",
                          "focus:z-10 focus:outline-none focus:ring-2 ring-blue-400"
                        )}
                      />
                    </li>
                  ))}
                </ul>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
