

export default function ContactRow(props) {
    return(
        <div className="contactrow">
            <div className="contacts">
                <div className="title">
                    <h1>Kontakti</h1>
                </div>
                <div className="content">
                    <p>{`${props?.phone?.title}`}<a href={`tel:${props?.phone?.data}`}>{props?.phone?.data}</a></p>
                    <p>{`${props?.email?.title}`}<a href={`mailto:${props?.email?.data}`}>{props?.email?.data}</a></p>
                </div>
            </div>
            <div className="address">
                <h1>{props?.address?.title}</h1>
                <div className="content">
                    <h2>{props?.address?.data}</h2>
                </div>
            </div>
            <div className="pin">
                <div className="mapouter">
                    <div className="gmap_canvas">
                        <iframe width="375" height="375" id="gmap_canvas"
                                src="https://maps.google.com/maps?q=Latgales%20iela%2050,%20R%C4%93zekne&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}