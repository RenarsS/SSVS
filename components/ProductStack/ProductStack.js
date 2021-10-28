
import {Grid} from "@mui/material";
import Product from "../Product/Product";

export default function ProductStack(props) {
    return(
        <div className="wrap">
            <Grid container spacing={1} direction="row" justifyContent="center" alignItems="center">
                {
                    props?.data?.map(data => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={data?.id}>
                            <a href={`/${data?.subcategory?.category?.slug}/${data?.subcategory?.slug}/${data?.slug}`} >
                                <Product
                                    title={data?.title}
                                    photo={`http://206.189.59.47:1337${data?.photos[0]?.url}`}
                                    slug={data?.slug}
                                    price={data?.price}
                                />
                            </a>
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}