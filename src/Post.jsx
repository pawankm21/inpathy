import React from 'react'

function Post() {
    return (
      <div className="lg:w-1/2 rounded-lg m-2 mt-4 mb-4 p-3 bg-white">
        <div className="w-1/2">
          <img
            src="
                https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            className="w-36 h-36 rounded-full float-left m-2"
            alt=""
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore fuga
          veniam harum aut quaerat perferendis consectetur. Totam, voluptatibus
          animi. Officiis ratione sunt quidem animi laudantium aperiam sint,
          magnam vel nostrum?
        </p>
        <button>like</button>
        <button> save</button>
        <button>share</button>
      </div>
    );
}

export default Post
