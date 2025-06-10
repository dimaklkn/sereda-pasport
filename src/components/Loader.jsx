import eagle from "../assets/ImperialArms.png";

export default function Loader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
      className="has-fade fade-out"
    >
      <img
        src={eagle} // from public folder
        alt="Loading..."
        style={{
          width: "80px",
          height: "80px",
          animation: "spin 6s linear infinite",
        }}
      />
    </div>
  );
}
