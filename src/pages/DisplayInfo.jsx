import { useEffect, useRef, useState } from "react";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import html2canvas from "html2canvas";
import UserInfoDisplay from "../components/UserInfoDisplay";

export default function DisplayInfo() {
  const [isLoading, setIsLoading] = useState(true);
  const [userInfo, setUserInfo] = useState(null);
  const componentRef = useRef();

  useEffect(() => {
    const savedData = localStorage.getItem("userInfo");
    if (savedData) {
      setUserInfo(JSON.parse(savedData));
    }
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Show loader for 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  const handleDownloadImage = () => {
    const node = componentRef.current;
    html2canvas(node).then((canvas) => {
      const link = document.createElement("a");
      link.download = "Pasport.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  if (!userInfo) return <p>Loading...</p>;

  return (
    <div className="container displayInfo has-fade fade-in">
      <UserInfoDisplay ref={componentRef} info={userInfo} />
      <div className="displayInfo__buttons">
        <button onClick={handleDownloadImage}>Сохранить на компьютеръ</button>
        <Link to="/">
          <button>Назад</button>
        </Link>
      </div>
    </div>
  );
}
