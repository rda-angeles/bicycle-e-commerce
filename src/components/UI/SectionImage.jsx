import "../../stylesheets/section-img.scss";

const SectionImage = ({ title, bg }) => {
  return (
    <div
      className="section-img flex items-center justify-around w-[100%] relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="content absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white">
        <h1 className="text-4xl">{title}</h1>
      </div>
    </div>
  );
};

export default SectionImage;
