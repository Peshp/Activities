
import { Button, Container, Menu } from "semantic-ui-react";
import { useStore } from "../stores/store";

export default function NavBar() {
  const {activityStore} = useStore();

  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item header>
          <img src="/assets/logo.png" alt="logo" style={{ marginRight: "4px" }} />
          Reactivities
        </Menu.Item>
        <Menu.Item name="Activities">
          Activities
          <Button onClick={() => activityStore.open()} positive content='Create Activity' style={{ marginLeft: "40px" }}></Button>
        </Menu.Item>
      </Container>
    </Menu>
  );
}

