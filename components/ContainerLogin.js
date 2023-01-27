import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Head from "next/head";

const ContainerLogin = (props) => (
  <div>
    <Head>
      <title>Login</title>
    </Head>
    <div class="container">
        <div class="row align-items-start">
            <div class="col"></div>
            <div class="col-6">
            {props.children}
            </div>
            <div class="col"></div>
        </div>
    </div>
  </div>
);

export default ContainerLogin;