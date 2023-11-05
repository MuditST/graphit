import LandingContent from "../../components/LandingContent";
import LandingFooter from "../../components/LandingFooter";
import LandingHero from "../../components/LandingHero";
import LandingNavbar from "../../components/LandingNavbar";


export default function Home() {
  return (
    
      <div className="h-full ">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
      <LandingFooter />
    </div>

  )
}
