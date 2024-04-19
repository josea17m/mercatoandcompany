import StoreCard from "../components/StoreCard";

const page = () => {
  return (
    <div className="flex flex-col p-10 gap-8 bg-mural-light">
      <h1 className="text-5xl bg-white w-max">Our Stores</h1>
      <div className="flex flex-col md:flex-row md:gap-14 lg:gap-28">
        <StoreCard
          image="/brownsville.png"
          title="Brownsville, TX"
          address="2300 North Expy, Brownsville, TX 78521"
          phone={3214049903}
          mapsAddress="https://www.google.com/maps/place/Mercato+and+Company/@25.9498593,-97.5046264,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipPvxEerCiKHsXNs5iB0CXNWIQJBwBp2z48TR5zn!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPvxEerCiKHsXNs5iB0CXNWIQJBwBp2z48TR5zn%3Dw108-h86-k-no!7i1125!8i895!4m16!1m8!3m7!1s0x866f97df390488f3:0x1d740c9854d616b1!2sMercato+and+Company!8m2!3d25.9498804!4d-97.5044414!10e5!16s%2Fg%2F11p5ndj4_x!3m6!1s0x866f97df390488f3:0x1d740c9854d616b1!8m2!3d25.9498804!4d-97.5044414!10e5!16s%2Fg%2F11p5ndj4_x?entry=ttu"
          openHours="7am - 8pm"
          altText="brownsville-img"
        />
        <StoreCard
          image="/brownsville.png"
          title="Houston, TX"
          address="2300 North Expy, Brownsville, TX 78521"
          phone={3214049903}
          mapsAddress="https://www.google.com/maps/place/Mercato+and+Company/@25.9498593,-97.5046264,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipPvxEerCiKHsXNs5iB0CXNWIQJBwBp2z48TR5zn!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPvxEerCiKHsXNs5iB0CXNWIQJBwBp2z48TR5zn%3Dw108-h86-k-no!7i1125!8i895!4m16!1m8!3m7!1s0x866f97df390488f3:0x1d740c9854d616b1!2sMercato+and+Company!8m2!3d25.9498804!4d-97.5044414!10e5!16s%2Fg%2F11p5ndj4_x!3m6!1s0x866f97df390488f3:0x1d740c9854d616b1!8m2!3d25.9498804!4d-97.5044414!10e5!16s%2Fg%2F11p5ndj4_x?entry=ttu#"
          openHours="7am - 8pm"
          altText="houston-img"
        />
      </div>
    </div>
  );
};

export default page;
