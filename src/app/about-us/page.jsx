import AboutUsTemplate from "../components/AboutUs-Template"

const page = () => {
  return (
    <div>
        <AboutUsTemplate
          tile="About Us"
          aboutUs={false}
          image="/brownsville.png"
        />
        <AboutUsTemplate
          tile="Our Story"
          aboutUs={true}
          image="/brownsville.png"
        />
      </div>
  )
}

export default page