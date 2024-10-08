const Banner = () => {
  return (
    <div className="container mx-auto">
      <div className="carousel w-full mt-16">
        {banners.map((banner, inx) => (
          <div style={{backgroundImage: `linear-gradient(45deg,rgba(7, 25, 82, 0.7), rgba(0, 0, 0, 0.3)), url(/assets/images/banner/${inx+1}.jpg)`}} key={inx} id={`slide${inx+1}`} className="carousel-item h-[90vh] bg-top bg-no-repeat bg-cover relative w-full rounded-lg">
            <div className="w-full h-full flex items-center pl-32">
               <h2 className="text-5xl font-bold text-white">{banner.title}</h2>
               <p className="text-white">{banner.description}</p>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href={banner.prev} className="btn btn-circle">
                ❮
              </a>
              <a href={banner.next} className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const banners = [
  {
    title: "Affordable Price For Car Services",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide2",
    prev: "#slide4",
  },
  {
    title: "Affordable Price For Car Services",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide3",
    prev: "#slide1",
  },
  {
    title: "Affordable Price For Car Services",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide4",
    prev: "#slide2",
  },
  {
    title: "Affordable Price For Car Services",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide1",
    prev: "#slide3",
  },
];

export default Banner;
