import LogoImg from '../../assets/logo.svg'


export function Header(){
    return(
        <header>
            <img src={LogoImg} alt="dtMoney" />
            <button type="button">
                Nova tranasação
            </button>
        </header>
    );
}