import Link from "next/link";

const Login = () => {
  return (
    <form>
        <img style ={{height: "30vh", width: "auto"}}  src="Login/favicon-Bebolder.png" class="rounded mx-auto d-block card-img-top pt-5 pb-2" alt="..."/>
        <div className ="container mt-6">
          <div className ="col-12 text-center">
            <Link type="button" href="/api/auth/login" class="btn btn-success">Login</Link>
          </div>
        </div>
    </form>
  );
}

export default Login;