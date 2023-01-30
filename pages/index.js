import Container from "../components/Container";
import Head from "next/head";
import Login from "../components/Login"
import ContainerLogin from "../components/ContainerLogin";
import News from "../components/News";


const Index = () => {

  const isLoggedIn = false;

  if (isLoggedIn){
    return(
    <ContainerLogin>
    <Login />
    </ContainerLogin>
    );
  } 
  return( 
    <Container>
    <Head>
      <title>Next - Home Page</title>
    </Head>
    <News />
    </Container>
  );
}

export default Index;


