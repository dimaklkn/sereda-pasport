const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer container">
      <div>{year} ⓒ Музей Д.А. Фурманова</div>
      <div>Coded by Dima Klyukin</div>
    </footer>
  );
};

export default Footer;
