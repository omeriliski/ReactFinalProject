import { useCallback } from "react";
import { PostContext } from "../App";

const SurveyResult = ({ post, currentUser }) => {
  const giveStyle = (element) => {
    console.log("element :>> ", element);
    const found = post.answer.find((item) => item.user == currentUser.email);
    console.log("found :>> ", found);
    const styleObj = {
      minWidth: `${
        (post.answer.filter((item) => item.answer == element).length /
          post.answer.length) *
        90
      }%`,
    };
    if (element == found.answer) {
      styleObj.backgroundColor = "yellow";
      styleObj.color = "black";
    }
    return styleObj;
  };
  return (
    <div className="interactions-overlay w-100 p-16 static">
      {/* {post.answer.map(item=>console.log('item :>> ', item))}
            {post.answer.filter(item=>item.answer && currentUser.email)} */}
      <div className="txt-title">Survey results</div>
      {post.options.map(
        (element) => (
          <div className="mb-8">
            <p className="m-8 ">{element}</p>
            <div className="answer-wrapper">
              <div className="answer-bar" style={giveStyle(element)}>
                {post.answer.filter((item) => item.answer == element).length}
              </div>
            </div>
          </div>
        )

        // post.answer.forEach(item=>console.log('item :>> ', item.answer))
        // console.log('element :>> ', element);
        // console.log('post ', post.answer.filter(item=>item.answer==element).length)
      )}
      {/* {post.answer.length} people answered */}
    </div>
  );
};
export default SurveyResult;
