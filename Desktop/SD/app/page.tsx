import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      {/* Mission Statement */}
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Changing Lives, Building Futures</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          SocialImpact is dedicated to creating sustainable solutions for communities in need, 
          empowering individuals, and fostering positive change worldwide.
        </p>
      </section>

      {/* Hero Section */}
      <section className="relative h-96 rounded-lg overflow-hidden mb-12">
        <Image
          src="/placeholder.svg?height=600&width=1200"
          alt="Hero image"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Join Us in Making a Difference</h2>
            <Button size="lg" asChild>
              <Link href="/get-involved">Get Involved</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-12 bg-gray-100 rounded-lg mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <p className="text-4xl font-bold text-primary">10,000+</p>
            <p className="text-xl text-gray-600">Lives Impacted</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary">50+</p>
            <p className="text-xl text-gray-600">Communities Served</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary">100+</p>
            <p className="text-xl text-gray-600">Projects Completed</p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Explore Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/about" className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">About Us</h3>
            <p className="text-gray-600">Learn about our mission and vision</p>
          </Link>
          <Link href="/programs" className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">Our Programs</h3>
            <p className="text-gray-600">Discover how we're making an impact</p>
          </Link>
          <Link href="/get-involved" className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">Get Involved</h3>
            <p className="text-gray-600">Find out how you can contribute</p>
          </Link>
          <Link href="/donate" className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">Donate</h3>
            <p className="text-gray-600">Support our cause financially</p>
          </Link>
        </div>
      </section>
    </div>
  )
}

