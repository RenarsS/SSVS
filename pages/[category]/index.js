import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CardStack from "../../components/CardStack/CardStack";

export default function Category({ title, data }){

    if(data.length !== 0){
        return(
            <div className="category">
                <Header page={1}/>
                <h1>{title}</h1>
                <CardStack data={data}/>
                <Footer/>
            </div>
        )
    } else{
        return(
            <div className="category">
                <Header page={1}/>
                    <div className="wrap">
                        <h1>Pagaidām nekā nav!</h1>
                    </div>
                <Footer/>
            </div>
        )
    }
}


export async function getStaticPaths(){
    const categoriesRes = await fetch(`http://localhost:1337/graphql`,
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                query: `{
                categories{
                slug
                }
                }`
            })
        });

    const categories = await categoriesRes.json();
    const paths = categories.data.categories.map(category => ({
        params: {
            category: String(category.slug)
        }
    }));
    return {
        paths,
        fallback: false
    }
}


export async function getStaticProps({ params }) {

    const subcategoriesRes = await fetch(`http://localhost:1337/graphql`,
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                query: `{
                categories(where: {slug: "${params.category}"}){
                    title
                    subcategories{
                        category{
                            slug
                          }
                            id
                            title
                            slug
                            photo{
                                url
                            }
                        }
                    }
                }`
            })
        });
    const subcategories = await subcategoriesRes.json();
    const data = subcategories?.data?.categories[0].subcategories;
    const title = subcategories?.data?.categories[0].title;
    return {
        props: {
            data,
            title
        },
        revalidate: 10
    }
}