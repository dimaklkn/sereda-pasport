import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import UserInfoForm from "../components/UserInfoForm";
import Footer from "../components/Footer";
import imperialArms from "../assets/ImperialArms.png";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Show loader for 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="container home has-fade fade-in">
      <img
        src={imperialArms}
        alt="russian impire two headead eagle"
        className="home__eagle1"
      />
      <header>
        <h1>Паспортъ жителя c. Середa</h1>
        <h2>образца 1890 года.</h2>
      </header>

      <UserInfoForm />
      <img
        src={imperialArms}
        className="home__eagle2"
        alt="russian empire two headead eagle"
      />
      <Footer />
    </div>
  );
}
