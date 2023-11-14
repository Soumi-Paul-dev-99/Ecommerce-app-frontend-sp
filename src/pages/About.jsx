import React from 'react'
import Layout from '../components/layouts/Layout'

const About = () => {
  return (
    <Layout title={"About us - Ecommers app"}>
<div className="row contactus">
  <div className="col-md-6">
    <img src="/images/about.jpeg"
    alt="contactus" style={{ width: "100%"}} />
  </div>
  <div className="col-md-4">
    <p className="text-justify mt-2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, ducimus? Rem, neque! Iusto distinctio, assumenda similique optio consequatur esse iure repellendus aspernatur perferendis laboriosam tempora illo unde odio maiores autem error deleniti voluptas? Commodi ducimus illum atque, vero est praesentium.
    </p>
  </div>
</div>
    </Layout>
  )
}

export default About
