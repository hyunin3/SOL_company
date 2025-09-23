import React from "react";
import "../css/PensionPage.css";
import Desigin3 from "../assets/Design3.png";

function PensionPage() {
  return (
    <div className="pension-container">
      {/* 왼쪽: 설명 + 버튼 */}
      <div className="pension-info">
        <h2 className="pension-title">연금 서비스 안내</h2>
        <p className="pension-desc">
          SOL은 단순한 연금을 넘어 고객의 미래를 설계합니다.  
          지금 바로 확인해 보세요.
        </p>
        <button className="pension-btn">상품 자세히 보기</button>
      </div>

      {/* 오른쪽: 이미지 */}
      <div className="pension-image-wrap">
        <img src={Desigin3} alt="연금 디자인" className="pension-image" />
      </div>
    </div>
  );
}

export default PensionPage;
