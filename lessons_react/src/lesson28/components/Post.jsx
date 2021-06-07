export function  Post (props) {
    return(
    <h2> {props.name}
        <button onClick={()=> props.removePost(props.id)}>delete</button>
    </h2>)
}