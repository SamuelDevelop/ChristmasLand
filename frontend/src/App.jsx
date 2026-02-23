import './css/fonts.css'
import './css/base.css'
import './css/invites.css'

import santaImg from './assets/santa_claus.png'

function App() {
  return (
    <>
      <div className="dark-bg"></div>

      <header className="cabecalho row-flex">
        <div className="cabecalho-front row-flex">
          <i className="fas fa-sleigh fa-2x text-white"></i>
          <h1 className="text-white ChristmasFont">ChristmasLand</h1>
        </div>

        <div className="cabecalho-end row-flex">
          <i className="fas fa-user fa-2x text-white hover-bb cursor"></i>
        </div>
      </header>

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

export default App

