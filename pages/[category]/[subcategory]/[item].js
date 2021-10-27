import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";


export default function Item({ data }) {
    const photos = data?.photos?.map(photo => (<img key={photo?.name} src={`http://localhost:1337${photo?.url}`} alt={`${photo?.name}`}/>))
    return(
        <div className="item">
            <Header page={0}/>
            <div className="product-content">
                <div>
                    <div className="title">
                        <h1>{data?.title}</h1>
                    </div>
                    <div  className="information">
                        <div className="display">

                            <Carousel>
                                {photos}
                            </Carousel>
                        </div>
                        <div className="info-column">
                            <div className="price">
                                <h2>{data?.price} €</h2>
                            </div>
                            <div className="description">
                                <p>{data?.description}</p>
                            </div>
                            <div className="b-m">
                                <h3>Zīmols:  {data?.brand}</h3>
                                {data?.model ? <h3>Modelis: {data?.model}</h3> : ""}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export async function getStaticPaths() {

    const productsRes = await fetch("http://localhost:1337/graphql",{
        method: 'POST',
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            query: `{
                products{
                    slug
                    subcategory{
                      slug
                      category{
                        slug
                      }
                    }
                  }
            }`
        }),
    });

    const products = await productsRes.json();
    const paths = products.data.products.map(product => ({
        params: {
            category: String(product.subcategory.category?.slug),
            subcategory: String(product.subcategory?.slug),
            item: String(product?.slug)
        }
    }))

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const productRes = await fetch("http://localhost:1337/graphql", {
        method: 'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            query:`{
                products(where: {slug: "${params.item}"}){
                    id
                    slug
                    title
                    description
                    price
                    brand
                    model
                    photos{
                        name
                        url
                    }
                  }
            }`
        }),
    });
    const product = await productRes.json();
    const data = product.data.products[0];
    return{
        props: {
            data
        },
        revalidate: 10
    }
}