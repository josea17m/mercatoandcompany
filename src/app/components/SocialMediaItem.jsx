export default function SocialMediaItem({ image, url }) {
  return (
    <a href={url} target="_blank" className="bg-[#fff] rounded-full p-1 lg:p-2">
      <img src={image} width={30} height={30} alt={"loguito"} className="" />
    </a>
  );
}
