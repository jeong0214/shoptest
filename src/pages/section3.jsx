import { Outlet } from "react-router-dom";
import styled from "styled-components";
function Section3() {
  let Box = styled.div`
    background-color: tomato;
  `;
  let Btn = styled.button`
    background-color: ${(props) => (props.bg === "blue" ? "white" : "black")};
  `;
  return (
    <>
      <Outlet></Outlet>
      <div className="sec3 mw">
        <Box>비즈니스에 대한 얇은 접근 방식</Box>
        <p>
          스케치에서 시작하여 완성된 주얼리 조각으로 끝나는 각 주얼리는 상상의
          화려한 실을 풀어 손으로 만듭니다.
        </p>
        <Btn bg="orange">오렌지 버튼</Btn>
        <Btn bg="blue">파란색 버튼</Btn>
      </div>
    </>
  );
}
export default Section3;
