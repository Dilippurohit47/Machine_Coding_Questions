import React from "react";
import Replies from "./Replies";

const AllComments = ({ comments }) => {
  return (
    <div className="all_comment">
      {comments.map((comment, i) => (
        <div className="single_comment">
          <h3>{comment.id}</h3>
          <p>{comment.comment}</p>
         <Replies comments={comments} id={comment.id}/>
        </div>
      ))}
    </div>
  );
};

export default AllComments;
