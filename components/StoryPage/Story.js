export default function Story (props){
  return (
    <>
    <h1>{props.title}</h1>
    {/* <div>{props.user.username}</div> */}
    <div>{props.context}</div>
    </>
  )
}