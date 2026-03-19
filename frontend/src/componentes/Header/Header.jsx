import styles from "./header.module.css"

function Header(){
    return (
        <header className={styles.cabecalho}>
            <div className="cabecalho-front row-flex">
                <h1 className="text-white ChristmasFont">ChristmasLand</h1>
            </div>
        
            <div className="cabecalho-end row-flex">
                <i className="fas fa-user fa-2x text-white hover-bb cursor"></i>
            </div>
        </header>
    )
}

export default Header;