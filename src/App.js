import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Main from "./components/Main";
import Modal from "./components/Modal";
import React from "react";
function App() {
  const [checked, setChecked] = React.useState("completed");
  const [activeModal, setActiveModal] = React.useState(false);
  return (
    <Wrapper checked={checked}>
      <Header checked={checked} setChecked={setChecked} />
      <Main setActiveModal={setActiveModal}/>
      <Modal activeModal={activeModal} setActiveModal={setActiveModal} />
    </Wrapper>
  );
}

export default App;
