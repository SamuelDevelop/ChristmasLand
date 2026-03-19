import Header from '../../componentes/Header/Header'
import santaImg from '../../assets/santa_claus.png'

function Home() {
    return(
        <>
            <div className="dark-bg"></div>

            <Header />
            <main>
                <section className="invite row-flex">
                <article>
                    <img className="invite-img" src={santaImg} />
                </article>

                <article>
                    <h1 className="text-white InterFont">Seu Presente é aqui</h1>
                    <p className="text-white InterFont">
                    Com a Christmas, você encomenda seu presente direto com quem sabe! Encomende
                    seu presente com o Papai Noel, e no dia 25 a mágica acontece!
                    </p>
                    <button className='button InterFont'>Cadastre-se Já</button>
                </article>
                </section>
            </main>
        </>
    )
}

export default Home;