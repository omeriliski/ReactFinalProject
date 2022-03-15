const SurveyResult=({post})=>{
    
    return(
        <div>
            {/* {post.answer.map(item=>console.log('item :>> ', item))}
            {post.answer.filter(item=>item.answer && currentUser.email)} */}
            {post.options.forEach(element => {
                // post.answer.forEach(item=>console.log('item :>> ', item.answer))
                console.log('element :>> ', element);
                console.log('post ', post.answer.filter(item=>item.answer==element).length) 
            })}
            {post.answer.length} people answered
        </div>
    )
}
export default SurveyResult;