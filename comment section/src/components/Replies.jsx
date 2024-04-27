import React, { useState } from "react";

const Replies = ({ comments, id }) => {
  const [replyBox, setReplyBox] = useState(false);
  const [reply, setReply] = useState("");
  const [showReply, setShowReply] = useState(false);

  const [comment, setComment] = useState();

  const addReply = () => {
    const comment = comments.find((i) => i.id === id);
    setComment(comment);
    comment?.reply?.push(reply);
    setReplyBox(false);
  };
  console.log(comments);
  console.log(showReply)
  return (
    <div className="Replies">
      <button onClick={() => {setReplyBox(!replyBox),setShowReply(false)}}>Reply</button>

      <button onClick={() => setShowReply(!showReply)}> show Replies</button>
      {replyBox && (
        <div>
          <input
            type="text"
            placeholder="add reply"
            onChange={(e) => setReply(e.target.value)}
          />
          <button onClick={addReply}>Add</button>
        </div>
      )}
      {showReply && (
        <div className="replies">
          {comment?.reply?.map((c, i) => (
            <div>{c}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Replies;
