import React from "react"
import Layout from "../components/layout"
const HomePage = () => {
  return (
    <Layout>
      <h2>
        Hello{" "}
        <span role="img" aria-label="hand wave icon">
          👋
        </span>{" "}
        I am a product and business strategist from Baltimore
      </h2>
      <h3>My life is enriched by my wife Jena!</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ab
        architecto laborum illo, exercitationem saepe, nisi corrupti voluptas
        inventore excepturi vero fugit! Illum odit dolor aliquid. Soluta rem
        debitis est?
      </p>
    </Layout>
  )
}

export default HomePage
