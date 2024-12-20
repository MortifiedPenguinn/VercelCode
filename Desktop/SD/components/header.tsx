import Link from 'next/link'
import { Button } from './ui/button'
import { siteConfig } from '@/config/site'

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          {siteConfig.name}
        </Link>
        <nav>
          <ul className="flex space-x-4">
            {siteConfig.mainNav.map((item) => (
              <li key={item.href}>
                <Link 
                  href={item.href} 
                  className="text-gray-600 hover:text-primary"
                >
                  {item.title}
                </Link>
              </li>
            ))}
            <li><Button variant="secondary" size="sm">Donate</Button></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

