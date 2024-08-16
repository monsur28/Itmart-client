import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CompanySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const companies = [
    {
      name: "Apple",
      image:
        "https://scontent.fcgp3-2.fna.fbcdn.net/v/t39.30808-6/387094294_712381880925372_1615700802773976871_n.png?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEpkGuojFHaVCnE-GePcpnKNvaAcpPig9I29oByk-KD0uodywLjZT80VfGOeIfArJVgQBykEhfulliZh9bBFw5C&_nc_ohc=tBYHuZqiYSwQ7kNvgFGdG_T&_nc_ht=scontent.fcgp3-2.fna&oh=00_AYCcbIlnl4C4-8h9XN_QYFL-z0MNPEXBWuDseJrSr4qvoQ&oe=66C4123D",
    },
    {
      name: "Dell",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dell_logo_2016.svg/800px-Dell_logo_2016.svg.png",
    },
    {
      name: "HP",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/800px-HP_logo_2012.svg.png",
    },
    {
      name: "Lenovo",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Lenovo_%282015%29.svg/1920px-Lenovo_%282015%29.svg.png",
    },
    {
      name: "Asus",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/ASUS_Logo.svg/1920px-ASUS_Logo.svg.png",
    },
    {
      name: "Acer",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Acer_2011.svg/1920px-Acer_2011.svg.png",
    },
  ];

  return (
    <div className="my-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        Top Laptop Companies
      </h2>
      <Slider {...settings}>
        {companies.map((company, index) => (
          <div key={index} className="px-4">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src={company.image}
                alt={company.name}
                className="mx-auto mb-4 h-32 w-32 object-contain"
              />
              <h3 className="text-xl font-semibold">{company.name}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CompanySlider;
