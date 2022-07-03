import Noticia from './Noticia.jsx';

function App() {
    const lista_noticias = [
        {
            description: "Tools",
        },        
        {

            description: "Pricing",
        },
        {
            description: "Blog",
        },
        {
    
            description: "About",
        },
        {
            description:"Customers",
        },
    ];

    return (
        <div className='container'>

            {lista_noticias.map((noticia) => {
                return <Noticia desc={noticia.description} />
            })}

        </div>

    );
}

export default App
