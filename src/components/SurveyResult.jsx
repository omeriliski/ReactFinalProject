const SurveyResult=({post})=>{
    
    return (
      <div className="interactions-overlay w-100 p-16">
        {/* {post.answer.map(item=>console.log('item :>> ', item))}
            {post.answer.filter(item=>item.answer && currentUser.email)} */}
        <div className="txt-title">Feedbacks</div>
        {post.options.map(
          (element) => (
            <div className="answer-wrapper">
              <div className="answer-bar" style={{minWidth:`${post.answer.filter((item) => item.answer == element).length/post.answer.length*90}%`,  backgroundColor: "yellow"} }>
                {element}:
                {post.answer.filter((item) => item.answer == element).length}
              </div>
            </div>
          )

          // post.answer.forEach(item=>console.log('item :>> ', item.answer))
          // console.log('element :>> ', element);
          // console.log('post ', post.answer.filter(item=>item.answer==element).length)
        )}
        {post.answer.length} people answered
      </div>
    );
}
export default SurveyResult;