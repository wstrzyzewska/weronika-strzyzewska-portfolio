import * as React from "react"
import { motion } from "framer-motion"
import { Document, Page } from "react-pdf"

interface Props {
  about: string;
  resume: string;
}


function About({ about, resume }: Props) {
  return (
    <div className="about">
      <p>{about = "Weronika Strzyzewska"}</p>
      <Document file={resume = ""}>
        <Page pageNumber={1} />
      </Document>
    </div>
  )
}

export default About