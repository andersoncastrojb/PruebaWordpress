import Link from "next/link";
import Container from "../components/Container";

const About = () => {
  return(
    <Container>
        <div class="alert alert-primary" role="alert">
            Esta es una prueba de concepto de Wordpress como CMS Headless and NextJs Frontend
        </div>
        <Link href="/" class="btn btn-info">Home</Link>
    </Container>
  );
}

export default About;