import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import Card from "./Card";
import "./tips.css";
import Post from "./Post";
function Tips() {
  return (
    <>
      <div className=" bg-gradient-to-r h-full w-screen border-blue-900 from-blue-400 to-blue-600">
        <h1 className="text-black ml-6 mt-12 lg:mt-7 pt-4 text-2xl">
          <span className="m-0 bg-white rounded-2xl shadow-xl pl-3 pr-3 p-2 border-2 border-blue-700">
            Available Experts
          </span>
        </h1>
        <div class="flex  overflow-x-scroll pb-10 hide-scroll-bar lg:mt-5 m-5 mt-10  no-scrollbar">
          <ScrollContainer className="w-full bg-blue-200 border-blue-800 border-4 rounded-2xl">
            <div class="flex flex-nowrap m-5 ">
              <Card
                img="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                name="Lorem Ipsum"
                des="psychiatrist"
              />
              <Card
                img="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                name="Lorem Ipsum"
                des="psychiatrist"
              />{" "}
              <Card
                img="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                name="Lorem Ipsum"
                des="psychiatrist"
              />{" "}
              <Card
                img="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                name="Lorem Ipsum"
                des="psychiatrist"
              />{" "}
              <Card
                img="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                name="Lorem Ipsum"
                des="psychiatrist"
              />{" "}
              <Card
                img="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                name="Lorem Ipsum"
                des="psychiatrist"
              />
            </div>
          </ScrollContainer>
        </div>
        <h1 className="text-black ml-6  text-2xl">
          <span className="m-0 relative bottom-4 bg-white rounded-2xl shadow-xl pl-3 pr-3 p-2 border-2 border-blue-700">
            Posts
          </span>
          <button className="m-0 relative bottom-4 bg-green-400 rounded-2xl shadow-xl pl-3 pr-3 p-2 border-2 border-green-700 md:left-96 hover:scale-110 transform duration-500 ease-in-out ">
            Create Post
          </button>
        </h1>
        <ScrollContainer className=" bg-gradient-to-r from-blue-500 to-blue-800 w-full grid grid-col-1 md:h-1/2 lg:h-1/2 border-blue-900 border-4 ">
          <Post
            message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsum officiis reiciendis in nulla? Voluptates fugit, quod consectetur quos neque ullam quidem. Odit quis adipisci doloremque, voluptatum expedita ut labore?"
            image="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
          />{" "}
          <Post
            message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsum officiis reiciendis in nulla? Voluptates fugit, quod consectetur quos neque ullam quidem. Odit quis adipisci doloremque, voluptatum expedita ut labore?"
            image="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
          />{" "}
          <Post
            message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsum officiis reiciendis in nulla? Voluptates fugit, quod consectetur quos neque ullam quidem. Odit quis adipisci doloremque, voluptatum expedita ut labore?"
            image="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
          />{" "}
          <Post
            message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsum officiis reiciendis in nulla? Voluptates fugit, quod consectetur quos neque ullam quidem. Odit quis adipisci doloremque, voluptatum expedita ut labore?"
            image="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
          />{" "}
          <Post
            message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsum officiis reiciendis in nulla? Voluptates fugit, quod consectetur quos neque ullam quidem. Odit quis adipisci doloremque, voluptatum expedita ut labore?"
            image="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
          />{" "}
          <Post
            message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsum officiis reiciendis in nulla? Voluptates fugit, quod consectetur quos neque ullam quidem. Odit quis adipisci doloremque, voluptatum expedita ut labore?"
            image="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
          />{" "}
          <Post
            message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsum officiis reiciendis in nulla? Voluptates fugit, quod consectetur quos neque ullam quidem. Odit quis adipisci doloremque, voluptatum expedita ut labore?"
            image="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
          />{" "}
          <Post
            message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsum officiis reiciendis in nulla? Voluptates fugit, quod consectetur quos neque ullam quidem. Odit quis adipisci doloremque, voluptatum expedita ut labore?"
            image="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
          />{" "}
          <Post
            message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsum officiis reiciendis in nulla? Voluptates fugit, quod consectetur quos neque ullam quidem. Odit quis adipisci doloremque, voluptatum expedita ut labore?"
            image="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
          />{" "}
        </ScrollContainer>
      </div>
      <footer className=" h-36 w-screen bg-indigo-900"></footer>
    </>
  );
}

export default Tips;
