import styled from "styled-components";

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

export default function CookieModalContent({ onClick }) {
  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <Button onClick={onClick}>Принимаю</Button>
      <p>
        Наш сайт использкет куки. Без этого никак :(
      </p>
    </div>
  );
}
