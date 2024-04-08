import ImageTitled from "../shared/ImageTitled";

const FeaturedCollague = () => {
  return (
    <section className=" max-w-[1400px] mx-auto flex flex-col gap-5">
      <div className="flex gap-5">
        <ImageTitled title="Maquetes & Projects" image="maquete.png" />
        <ImageTitled title="Artworks" image="herobanner.jpg" />
        <ImageTitled title="Printing Services" image="tshirt.jpg" />
      </div>
      <ImageTitled title="Store: School & Art supplies" image="schoolsup.jpg" />
    </section>
  );
};

export default FeaturedCollague;
