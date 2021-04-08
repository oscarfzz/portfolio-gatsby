import React from "react"
import Layout from "../../components/Layout"
import Construction from "../../components/UnderConstruction/UnderConstruction"

const post = () => {
  const UnderConstructionMessage =
    "Soon you'll be able to see the interesting articles I'll have, but for now only the WordPress connection is done. We still need to finish giving it a sexy design. 😄."

  return (
    <Layout>
      <Construction content={UnderConstructionMessage} />
    </Layout>
  )
}

export default post
