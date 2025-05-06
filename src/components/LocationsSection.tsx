
interface CountryCardProps {
  name: string;
  flag: string;
}

const CountryCard: React.FC<CountryCardProps> = ({ name, flag }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6 text-center">
      <div className="flex justify-center mb-4">
        <img src={flag} alt={name} className="w-16 h-16 rounded-full" />
      </div>
      <h3 className="text-xl font-semibold">{name}</h3>
    </div>
  );
};

const countries = [
  {
    name: "USA",
    flag: "https://flagcdn.com/w320/us.png",
  },
  {
    name: "India",
    flag: "https://flagcdn.com/w320/in.png",
  },
  {
    name: "Australia",
    flag: "https://flagcdn.com/w320/au.png",
  },
  {
    name: "Canada",
    flag: "https://flagcdn.com/w320/ca.png",
  },
  {
    name: "Brazil",
    flag: "https://flagcdn.com/w320/br.png",
  },
  {
    name: "Dubai",
    flag: "https://flagcdn.com/w320/ae.png", // UAE flag for Dubai
  },
  {
    name: "Africa",
    flag: "https://flagcdn.com/w320/za.png", // South Africa as representative
  },
  {
    name: "UK",
    flag: "https://flagcdn.com/w320/gb.png",
  },
];

const LocationsSection = () => {
  return (
    <section className="py-16 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Top Choice For You</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore the best food options available in multiple countries across the globe. Wherever you are, delicious food is just a click away.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {countries.map((country, index) => (
            <CountryCard
              key={index}
              name={country.name}
              flag={country.flag}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
