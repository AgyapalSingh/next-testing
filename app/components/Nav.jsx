import Link from 'next/link';

const Nav = () => {
  return (
    <nav className="ag-nav">
        <div className="ag-nav-logo"> 
            <div className="link">
                <Link href="/">Index</Link>
            </div>
        </div>

        <div className='ag-nav-links'>
            <div className='link'>
                <Link href="/projects">Projects</Link>
            </div>

            <div className='link'>
                <Link href="/info">Info</Link>
            </div>
        </div>
    </nav>
  )
}

export default Nav