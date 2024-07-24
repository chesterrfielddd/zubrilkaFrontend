import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";
import UserCard from "./sections/UserCard/UserCard";
import PersonalPageHeader from "./sections/PersonalPageHeader/PersonalPageHeader";

export default function PersonalArea() {
  return (
    <>
      <Header>
        <PersonalPageHeader />
      </Header>
      <Main>
        <UserCard />
      </Main>
      <Footer />
    </>
  );
}
