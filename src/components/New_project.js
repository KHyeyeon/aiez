import React from "react";
import "./New_project.css";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import computingCloud from "./computingCloud.png";

import { Link } from "react-router-dom";

class New_project extends React.Component {
  render() {
    return (
      <body>
        <header className="header">
          <div className="header__title">Home > Project</div>
        </header>
        <main>
          <div className="Btns">
            <div className="BtnNNumber">
              <div className="Btn_number">1</div>
              <div className="Btn">
                <div className="Btn_img Btn_item">
                  <div>
                    <FontAwesomeIcon
                      icon={faCloudUploadAlt}
                      size="10x"
                      color="skyBlue"
                      className="icon"
                    />
                  </div>
                </div>
                <div className="Btn_eng Btn_item">Upload Data</div>
                <div className="Btn-kor Btn_item">데이터를 업로드 하세요.</div>
              </div>
            </div>
            <div className="BtnNNumber">
              <div className="Btn_number">2</div>
              <div className="Btn">
                <div className="Btn_img Btn_item">
                  {" "}
                  <FontAwesomeIcon
                    icon={faTags}
                    size="10x"
                    color="#eecd59"
                    className="icon"
                  />
                </div>
                <div className="Btn_eng Btn_item">Prepare Dataset</div>
                <div className="Btn-kor Btn_item">
                  데이터셋을 라벨링 하세요.
                </div>
              </div>
            </div>

            <div className="BtnNNumber">
              <div className="Btn_number">3</div>
              <div className="Btn">
                <div className="Btn_img Btn_item">
                  <img className="Btn_icon" src={computingCloud} alt="img" />
                </div>
                <div className="Btn_eng Btn_item">Train Neural Network</div>
                <div className="Btn-kor Btn_item">학습시키세요.</div>
              </div>
            </div>
          </div>
        </main>
      </body>
    );
  }
}

export default New_project;
