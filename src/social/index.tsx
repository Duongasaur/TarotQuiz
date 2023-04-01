import styled from "styled-components";
import { FacebookIcon, InstagramIcon, PinterestIcon } from "./icons";

const Section = styled.section`
  padding: 8px;
  border: 2px solid pink;
  border-radius: 6px;
`;

const Links = [
  { href: "", title: "facebook", Icon: FacebookIcon },
  { href: "", title: "instagram", Icon: InstagramIcon },
  { href: "", title: "pinterest", Icon: PinterestIcon }
];

const Socials = () => {
  return (
    <Section>
      {Links.map(({ href, title, Icon }) => (
        <a href={href}>
          <Icon />
          <span>{title}</span>
        </a>
      ))}
    </Section>
  );
};

export default Socials;
