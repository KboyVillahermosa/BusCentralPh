import { useAuth } from '../contexts/AuthContext'
import { Navbar } from './navbar/Navbar'
import { HeroSection } from './sections/HeroSection'
import { StatisticsSection } from './sections/StatisticsSection'
import { FeaturesSection } from './sections/FeaturesSection'
import { CTASection } from './sections/CTASection'

export function Homepage() {
  const { user, signOut } = useAuth()

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar user={user} signOut={signOut} />

      <main>
        <HeroSection />
        <StatisticsSection />
        <FeaturesSection />
        <CTASection />
      </main>
    </div>
  )
}
               