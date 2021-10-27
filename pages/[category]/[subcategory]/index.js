import ProductStack from "../../../components/ProductStack/ProductStack";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";


export default function Subcategory({ title, data }) {
    if(data.length !== 0){
        return(
            <div className="subcategory">
                <Header page={2}/>
                <h1>{title}</h1>
                <ProductStack data={data}/>
                <Footer/>
            </div>
        )
    } else{
        return(
            <div className="subcategory">
                <Header page={2}/>
                <div className="wrap">
                    <h1>Pagaidām nekā nav!</h1>
                </div>
                <Footer/>
            </div>
        )
    }
}


export async function getStaticPaths(){

    const subcategoriesRes = await fetch(`http://localhost:1337/graphql`,
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                query: `{
                subcategories{
                    slug
                    category{
                      slug
                    } 
                  }
                }`
            })
        });
    const subcategories = await subcategoriesRes.json();
    const paths = subcategories.data.subcategories.map(subcategory => ({
        params: {
            category: String(subcategory.category.slug),
            subcategory: String(subcategory.slug)
        }
    }));
    return {
        paths,
        fallback: false
    }
}


export async function getStaticProps ({params}) {

    const productsRes = await fetch(`http://localhost:1337/graphql`,
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                query: `{
                  subcategories (where: {slug: "${params.subcategory}"}){
                    slug
                    title
                    category{
                      slug
                    }
                    products{
                      id
                      subcategory{
                        slug
                        category{
                          slug
                        }
                      }
                      slug
                      title
                      price
                      photos{
                        url
                      }
                    }
                  }
                }`
            })
        });
    const products = await productsRes.json();
    const data = products.data.subcategories[0].products;
    const title = products.data.subcategories[0].title;

    return {
        props: {
            data,
            title
        },
        revalidate: 10
    }
}