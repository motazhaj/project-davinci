import ImageTitled from "../shared/ImageTitled";

const FeaturedCollague = () => {
  return (
    <section className="p-4 flex flex-col gap-5">
      <div className="flex gap-5">
        <ImageTitled />
        <ImageTitled />
      </div>
      <ImageTitled />
    </section>
  );
};

export default FeaturedCollague;
