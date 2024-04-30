import { ModeToggle } from "../mode-toggle/ModeToggle"

const Navbar = () => {
  return (
    <div className="  mt-2 p-2 flex "> 
      <a className="mr-2" href="">JefryDev</a>
      <div className="flex-1 mr-2 ">

      </div>
      <a   className="mr-2" href="">about</a>
      <a  className="mr-2" href="">experience</a>
      <a  className="mr-2" href="">cv</a>
      <a   className="mr-2" href="">tecnologies</a>
      <ModeToggle/>
    </div>
  )
}

export default Navbar