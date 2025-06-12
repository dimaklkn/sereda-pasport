import React from "react";
import { convertToArshinAndVershok, getFutureAndTodayDate } from "../utils";
import eagleStamp from "../assets/imperialStamp1.png";
import numbering from "../assets/numbering.png";
import seredaStamp from "../assets/seredaStamp.png";
import inkJibberish from "../assets/inkJibberish.png";
import markPlace from "../assets/markPlace.png";
import inkCrossing from "../assets/inkCrossing.png";

export default React.forwardRef(function UserInfoDisplay({ info }, ref) {
  const height = convertToArshinAndVershok(info.height);
  const dateData = getFutureAndTodayDate();
  const { future, today } = dateData;
  return (
    <div ref={ref} className="container display">
      <h2>Паспортъ</h2>
      <div className="display__wrapper1">
        <div className="display__user-info">
          <p>
            Вероисповедание:{" "}
            <span className="display__cursive">{info.religion}</span>
          </p>
          <p>
            Возрастъ, летъ: <span className="display__cursive">{info.age}</span>
          </p>
          <p>
            Родъ занятий:{" "}
            <span className="display__cursive">{info.occupation}</span>
          </p>
          <p>
            Состоитъ ли в браке:{" "}
            <span className="display__cursive">{info.family}</span>
          </p>
          <p>
            Ростъ:{" "}
            <span className="display__cursive">
              {height.arshin} aршинъ {height.vershok} вершокъ
            </span>
          </p>
          <p>
            Цветъ волосъ: <span className="display__cursive">{info.hair}</span>
          </p>
          <p>
            Особыя приметы:{" "}
            <span className="display__cursive">{info.signs}</span>
          </p>
        </div>
        <div className="display__user-permission">
          <img src={eagleStamp} alt="stamp" className="eagleStamp" />
          <p>
            Предъявитель сего &nbsp;
            <span className="display__cursive">Костромской</span>&nbsp;
            губ.,&nbsp;
            <span className="display__cursive">Нерехтского</span> &nbsp; уезда,
            &nbsp;
            <span className="display__cursive">Середской волости</span>
          </p>
          <p>
            <span className="display__cursive">
              {info.firstName}&nbsp;{info.secondName}&nbsp;{info.lastName}
            </span>
          </p>
          <p>
            уволен въ разные города Российской Империи отъ нижеописаннаго числа
            на <br /> <span className="display__cursive">три месяца</span>, т.е.
            по{" "}
            <span className="display__cursive">
              &nbsp;
              {future.date}&nbsp; {future.month}
            </span>
            &nbsp;
            {future.year}г.
          </p>
          <p>
            Данъ, с приложением печати &nbsp;
            <span className="display__cursive">
              {today.date}&nbsp;{today.month}
            </span>
            &nbsp;
            {today.year}г.
          </p>

          <p className="display__starshina">
            <span className="display__cursive">
              зам. Волостного Старшины И. Звездкинъ
            </span>
          </p>
          <img src={numbering} alt="" className="numbering1" />
          <img src={seredaStamp} alt="" className="seredaStamp" />
          <img src={inkJibberish} alt="" className="inkJibberish" />
        </div>
      </div>
      <div className="display__wrapper2">
        <div className="display__delay">
          <h2>Отсрочки:</h2>
          <p>
            Действие сего вида отсрочено на 3 месяца, т.е. до &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; 202 &nbsp; года.
          </p>
        </div>
        <img src={inkCrossing} className="inkCrossing" alt="" />
        <img src={markPlace} className="markPlace" alt="" />
      </div>
    </div>
  );
});
