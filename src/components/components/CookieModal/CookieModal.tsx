import styled from "styled-components";

const Modal = styled.div`
  position: fixed;
  z-index: 999;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  transition: 0.5s;
  background-color: #fff;
  border-radius: 20px;
  padding: 10px;
  -webkit-box-shadow: 0px 1px 4px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 1px 4px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 1px 4px 0px rgba(34, 60, 80, 0.2);
`;

export default function CookieModal({ children }) {
  return <Modal>{children}</Modal>;
}
