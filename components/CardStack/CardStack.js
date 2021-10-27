import Card from "../Card/Card";

import {Grid} from "@mui/material";

export default function CardStack(props) {
    return(
        <div className="wrap">
            <Grid container spacing={1} direction="row" justifyContent="center" alignItems="center">
                {
                    props?.data?.map(data => (
                        <Grid item xs={12} sm={6} md={4} key={data.id}>
                            <a href={data.category?.slug !== undefined ? `${data?.category?.slug}/${data?.slug}`:`${data?.slug}`} >
                                <Card
                                    title={data?.title}
                                    photo={`http://206.189.59.47:1337${data?.photo?.url}`}
                                    slug={data?.slug}
                                />
                            </a>
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}