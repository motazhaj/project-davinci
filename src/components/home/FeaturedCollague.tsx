import ImageTitled from "../shared/ImageTitled";

const FeaturedCollague = () => {
  return (
    <section className=" max-w-screen-lg mx-auto flex flex-col gap-10 px-4">
      <div className="flex gap-10">
        <ImageTitled title="Maquetes & Projects" image="maquete.png" />
        <ImageTitled title="Artworks" image="herobanner.jpg" />
        <ImageTitled title="Printing Services" image="tshirt.jpg" />
      </div>
      <ImageTitled title="Store: School & Art supplies" image="schoolsup.jpg" />
    </section>
  );
};

export default FeaturedCollague;
