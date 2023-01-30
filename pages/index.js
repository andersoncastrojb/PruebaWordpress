import Container from "../components/Container";
import Head from "next/head";
import Login from "../components/Login"
import ContainerLogin from "../components/ContainerLogin";

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
    </Container>
  );
}

export default Index;


