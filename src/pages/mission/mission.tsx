import { lazy, Suspense } from "react";
import styled from "styled-components";

const Container = lazy(() => import("../../common/Container"));

const testimonials = [
  {
    quote: "KIA",
    text: "Lorem ipsum praesent ac massa at ligula reet est iaculis. Vivamus est mist aliquet elit ac nisl.",
    name: "Olivia Wilson",
    role: "Founder of Borcelle",
    avatar: "olivia.png",
  },
  {
    quote: "PMG",
    text: "Lorem ipsum praesent ac massa at ligula reet est iaculis. Vivamus est mist aliquet elit ac nisl.",
    name: "Matt Zhang",
    role: "CEO at Borcelle",
    avatar: "matt.png",
  },
  {
    quote: "KESPROM",
    text: "Lorem ipsum praesent ac massa at ligula reet est iaculis. Vivamus est mist aliquet elit ac nisl.",
    name: "Hannah Morales",
    role: "CFO at Borcelle",
    avatar: "hannah.png",
  },
];

const MissionSection = styled.section`
  color: #fff;
  padding: 3rem 0;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: left;
`;

const Cards = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const Card = styled.div`
  background: linear-gradient(135deg, #3d217b 0%, #6c3fcf 100%);
  border-radius: 20px;
  padding: 2rem;
  width: 300px;
  color: #fff;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.18);
    cursor: pointer;
  }
`;

const Quote = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  opacity: 0.7;
`;

const Stars = styled.div`
  color: #ffd700;
  margin: 1rem 0;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 1rem;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.span`
  font-weight: bold;
`;

const Role = styled.span`
  font-size: 0.9rem;
  opacity: 0.8;
`;

const Mission = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Container>
      <MissionSection>
        <Title>Why others choose us?</Title>
        <Cards>
          {testimonials.map((item, idx) => (
            <Card key={idx}>
              <Quote>❝ {item.quote}</Quote>
              <div>{item.text}</div>
              <Stars>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </Stars>
              <User>
                <Avatar src={`/img/${item.avatar}`} alt={item.name} />
                <UserInfo>
                  <Name>{item.name}</Name>
                  <Role>{item.role}</Role>
                </UserInfo>
              </User>
            </Card>
          ))}
        </Cards>
      </MissionSection>
    </Container>
  </Suspense>
);

export default Mission;
