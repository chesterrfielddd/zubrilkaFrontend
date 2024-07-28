import styled from "styled-components";
import { FC } from "react";

interface CookieModalProps {
  variant: "primary" | "secondary";
  onClick: () => void;
}

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

const Button = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  width: 120px;
  height: 40px;
  border-radius: 10px;
  background-color: #8bdde3;
  align-items: center;
  text-align: center;
  text-decoration: none;
  justify-content: center;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
  color: #000;
`;

const CookieModal: FC<CookieModalProps> = ({ variant, onClick }) => {
  return (
    <Modal>
      {variant === "primary" ? (
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <Button onClick={onClick}>Принимаю</Button>
          <p>Наш сайт использкет куки. Без этого никак :(</p>
        </div>
      ) : (
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <Button onClick={onClick}>Войти</Button>
          <p>
            <b>Внимание</b> вам необходимо авторизоваться для использования
            этого сегмента
          </p>
        </div>
      )}
    </Modal>
  );
};

export default CookieModal;
