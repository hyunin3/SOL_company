import React from "react";
import "../css/MainPage.css";
import mainImage from "../assets/main.png";

const MainPage = () => {
  return (
    <div>
      {/* 메인 배너 */}
      <div className="main-container">
        <img src={mainImage} alt="메인 배너" className="main-img" />
      </div>

      {/* 추가 콘텐츠 영역 */}
      <div className="content-section">
        <h2 className="section-title">SOL의 새로운 기술로 일상을 더욱 편리하게</h2>
        <div className="icon-grid">
          <div className="icon-card">
            <span className="icon">💳</span>
            <p>카드</p>
          </div>
          <div className="icon-card">
            <span className="icon">🏦</span>
            <p>예금</p>
          </div>
          <div className="icon-card">
            <span className="icon">💰</span>
            <p>대출</p>
          </div>
          <div className="icon-card">
            <span className="icon">🌐</span>
            <p>외환</p>
          </div>
          <div className="icon-card">
            <span className="icon">👥</span>
            <p>고객센터</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
