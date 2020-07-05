import Head from 'next/head'
import styled from 'styled-components';

export default function Home() {
  return (
    <div>
      <Container>
        <Main>
          <EmojiIcon>👋</EmojiIcon>
          <Title>Hi! I'm Gonzalo.</Title>
          <Subtitle>I think of things and try to build them</Subtitle>
          <BulletedList>
            <Bullet>
              📚 Founding Mobile Engineer at <InlineLink href="https://withprimer.com" target="blank">Primer</InlineLink>
            </Bullet>
            <Bullet>
              💌 Building <InlineLink href="https://withpost.app" target="blank">Post</InlineLink> on nights and weekends
            </Bullet>
            <Bullet>📍 Living in San Francisco, CA</Bullet>
          </BulletedList>
          <Row>
            <SocialLink href="https://twitter.com/gonzalo__nunez" target="blank">Twitter</SocialLink>
            <SocialLink href="https://github.com/gonzalonunez" target="blank">GitHub</SocialLink>
            <SocialLink href="https://medium.com/@gonzalo__nunez" target="blank">Medium</SocialLink>
            <SocialLink href="https://www.linkedin.com/in/gbn100/" target="blank">LinkedIn</SocialLink>
          </Row>
        </Main>
      </Container>

      <style jsx global>{`
        @font-face {
          font-family: 'OpenSans';
          src: url('/fonts/OpenSans-Regular.ttf');
        }
        @font-face {
          font-family: 'OpenSansSemiBold';
          src: url('/fonts/OpenSans-SemiBold.ttf');
        }
        @font-face {
          font-family: 'OpenSansBold';
          src: url('/fonts/OpenSans-Bold.ttf');
        }
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: OpenSans;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

const Container = styled.div`
  align-items: center;
  background-color: #F5F5F5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
`;

const Main = styled.div`
  align-items: left;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

const EmojiIcon = styled.p`
  font-family: OpenSansBold;
  font-size: 44px;
  line-height: 1;
  margin-top: 0px;
  margin-bottom: 16px;
  text-align: left;
`

const Title = styled.p`
  font-family: OpenSansBold;
  font-size: 34px;
  line-height: 1;
  margin-top: 0px;
  margin-bottom: 0px;
  text-align: left;
`

const Subtitle = styled.p`
  color: #919191;
  font-family: OpenSans;
  font-size: 16px;
  line-height: 1;
  margin-top: 8px;
  margin-bottom: 0px;
  text-align: left;
`

const BulletedList = styled.div`
  align-items: left;
  display: flex;
  flex: none;
  flex-direction: column;
  justify-content: left;
  margin-top: 24px;
  margin-bottom: 0px;
`

const Bullet = styled.p`
  color: #000000;
  font-family: OpenSans;
  font-size: 16px;
  line-height: 1.8;
  margin-top: 0px;
  margin-bottom: 0px;
  text-align: left;
`

const InlineLink = styled.a`
  color: #007AFF;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: #007AFF;
  font-family: OpenSans;
  font-size: 16px;
  text-decoration: none;

  &:link {
    color: #007AFF;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: #007AFF;
    font-family: OpenSans;
    text-decoration: none;
  }

  &:hover {
    opacity: 0.75;
    -webkit-transition: border-color 170ms ease-out;
    -moz-transition: border-color 170ms ease-out;
    -ms-transition: border-color 170ms ease-out;
    -o-transition: border-color 170ms ease-out;
    transition: border-color 170ms ease-out;
  }

  &:active {
    opacity: 0.5;
    -webkit-transition: border-color 170ms ease-out;
    -moz-transition: border-color 170ms ease-out;
    -ms-transition: border-color 170ms ease-out;
    -o-transition: border-color 170ms ease-out;
    transition: border-color 170ms ease-out;
  }
`

const Row = styled.div`
  border-top-style: solid;
  border-top-width: 1px;
  border-top-color: #919191;
  display: flex;
  margin-top: 16px;
  padding-top: 16px;
  justify-content: left;
`

const SocialLink = styled(InlineLink)`
  font-size: 12px;
  margin-right: 16px;
`