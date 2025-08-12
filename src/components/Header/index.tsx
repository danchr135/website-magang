import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Outline,
  NavMenu,
  NavLink,
  ContactButton,
} from "./styles";

const Header = ({ t }: { t: TFunction }) => {
  const [visible, setVisibility] = useState(false);

  const toggleButton = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => (
    <NavMenu>
      <NavLink href="/home">{t("Home")}</NavLink>
      <NavLink href="/about">{t("About")}</NavLink>
      <NavLink href="/mission">{t("Mission")}</NavLink>
      <NavLink href="/contact">
        <ContactButton>{t("Contact")}</ContactButton>
      </NavLink>
    </NavMenu>
  );

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between" align="middle">
          <LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="logo.svg" width="101px" height="64px" />
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={toggleButton}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} open={visible} onClose={toggleButton}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <MenuItem />
          </Col>
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
