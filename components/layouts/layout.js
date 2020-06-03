import Link from 'next/link'

const Layout = ({children}) => (
    <div>
        <Link href="/"><a title="Entrar">Entrar</a></Link>
        <Link href="/"><a title="Programas">Programas</a></Link>
        <Link href="/"><a title="Marcas">Marcas</a></Link>
        <Link href="/"><a title="Como Funciona">Como Funciona</a></Link>
        <Link href="/"><a title="Dúvidas?">Dúvidas</a></Link>
        <Link href="/faq"><a title="Faq">Faq</a></Link>


        <Link href="/user?name=mango" as="/user/mango"><a title="user">User</a></Link>

        {children}
    </div>
)

export default Layout