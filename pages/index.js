import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import CardStack from "../components/CardStack/CardStack";
import AboutUs from "../components/AboutUs/AboutUs";
import ContactRow from "../components/ContactRow/ContactRow";


export default function Home({ data, content }) {
  return(
    <div className="home">
        <Header page={0}/>
        {data?.length !== 0 ? <div><h1>Kategorijas</h1><CardStack data={data}/></div> : ""}

        <AboutUs title={content?.aboutus?.title} description={content?.aboutus?.description} photo={content?.aboutus?.photo.url}/>
        <ContactRow
            phone={content?.phone}
            email={content?.email}
            address={content?.address}
        />
        <Footer/>
    </div>
  )
}

export async function getStaticProps(){
    const requestBody = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: `{
                categories{
                    id
                    title
                    slug
                    photo{
                        url
                        }
                    }
                }`
        })
    };
    const categoriesRes = await fetch(`http://localhost:1337/graphql`, requestBody);
    const categories = await categoriesRes.json();
    const data = categories.data.categories;

    const frontRes = await fetch(`http://localhost:1337/graphql`,
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                query: `{
                front{
                    email{
                      title
                      data
                    }
                    phone{
                      title
                      data
                    }
                    address{
                      title
                      data
                    }
                    aboutus{
                      title
                      description
                      photo{
                        url
                        name
                      }
                    }
                  }
                }`
            })
        });

    const front = await frontRes.json();
    const content = front.data.front;

    return {
        props: {
            data,
            content,
        },
        revalidate: 10
    }

}
