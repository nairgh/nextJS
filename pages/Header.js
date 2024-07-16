import Link from 'next/link'

function Header() {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About Us</a>
        </Link>
      </li>
      <li>
        <Link href="/login">
          <a>Login</a>
        </Link>
      </li>
      {/* <li>
      <Link as="/post/2" href="/post/[id]">
          <a>Second Post</a>
        </Link>
      </li> */}
    </ul>
  )
}

export default Header