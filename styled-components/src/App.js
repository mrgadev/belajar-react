import logo from './logo.svg';
import './App.css';
import styled, {ThemeProvider} from "styled-components";

const theme = {
  primary: "red",
  secondary: "blue"
}

const Container = styled.div`
  text-align:center;
`
const Head = styled.h1`
  color: ${props => props.theme.secondary};
`

const Brand = styled.img`
  height: 10vh;
`

const Button = styled.button`
  color: #fff;
  border-radius: 10px;
  background: ${props => props.primary ? "blue" : "green"};
  // background: #223b75;
  padding: 10px 20px;
  outline:none;
  border:0;
  font-size: 1.2rem;
  margin: 0 1rem;
`

const TomatoButton = styled(Button)`
  background: tomato;
`

const Wrapper = styled.div`
  background: yellow;
  &.test {
    background: orange;
  }
`

const AnotherButton = styled.button`
  ${props => {
    switch(props.variant) {
      case "primary":
        return `background:blue`
      case "success":
        return `background:green`
      default:
        return `background: gray`
    }
  }}
`

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Container>
      <Brand src={logo} alt='React Logo'/>
      <Head>Styled components</Head>
      <Button>Primary</Button>
      <Button primary>Primary</Button>
      <TomatoButton>Tomato</TomatoButton>
      <Wrapper>Biasa</Wrapper>
      <Wrapper className='test'>Wrapper with className</Wrapper>
      <AnotherButton variant="primary">AnotherButton Primary</AnotherButton>
      <AnotherButton variant="success">AnotherButton Success</AnotherButton>
      <AnotherButton>AnotherButton</AnotherButton>
    </Container>
    </ThemeProvider>
  );
}

export default App;
