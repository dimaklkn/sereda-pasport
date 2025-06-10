import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function UserInfoForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    lastName: "",
    religion: "",
    age: "",
    occupation: "",
    family: "",
    height: "",
    hair: "",
    signs: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save data to localStorage or pass via state
    localStorage.setItem("userInfo", JSON.stringify(formData));
    navigate("/display");
  };

  return (
    <form onSubmit={handleSubmit} className="userInfoForm">
      <p>
        Внимательно заполните все поля. Не забывайте ставить "Ъ", если слово
        заканчивается на согласную.
      </p>
      <input
        type="text"
        name="firstName"
        placeholder="Имя"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="secondName"
        placeholder="Отчество"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="lastName"
        placeholder="Фамилия"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="religion"
        placeholder="Вероисповедание"
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="age"
        placeholder="Возрастъ, полныхъ летъ"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="occupation"
        placeholder="Родъ занятий"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="family"
        placeholder="Состоитъ ли въ браке"
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="height"
        placeholder="Ростъ в сантиметрахъ"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="hair"
        placeholder="Цветъ волосъ"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="signs"
        placeholder="Особыя приметы"
        onChange={handleChange}
      />
      <button type="submit">Получить паспортъ</button>
    </form>
  );
}
