

export default function AboutUs(props){

    return(
        <div className="aboutus">
            <div className="text">
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </div>
            <div className="photo">
                <img src={`http://localhost:1337${props.photo}`} alt={props.photo}/>
            </div>
        </div>
    )
}