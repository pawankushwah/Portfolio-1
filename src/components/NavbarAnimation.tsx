import {motion} from "framer-motion";

interface props {
  children : JSX.Element;
}

export default function NavbarAnimation({children}: props) {
  return (
    <>
      <motion.div
        variants={{
          visible: {}
        }}
      >{children}</motion.div>
    </>
  )
}
