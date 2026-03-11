import Navbar from "./Navbar"
import Hero from "./Hero"


const Container = () => {
    return(
      <div className="container">
      <div className="left-line" />
      <div className="right-line" />
      <Navbar/>
      <Hero/>
      </div> 

    )
}

export default Container