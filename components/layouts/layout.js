import Link from 'next/link'

const Layout = ({children}) => (
    <div>
        <Link href="/"><a title="home">Home</a></Link>

        <Link href="/github?user=andressamelo" as="/github/andressamelo"><a title="github">Github</a></Link>

        <Link href="/user?name=mango" as="/user/mango"><a title="user">User</a></Link>

        <Link href="/about"><a title="about">About</a></Link>

        {children}
    </div>
)

export default Layout