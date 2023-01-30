import Link from "next/link";

const Navigation = () => (
<nav class="navbar navbar-expand-lg bg-body-tertiary border">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img src="https://www.bebolder.co/wp-content/uploads/2022/03/favicon-Bebolder.png" alt="mdo" width="50" height="auto" class=""/>
</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar">Menu</span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Bebolder
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Bebolder</a></li>
            <li><a class="dropdown-item" href="#">Who we are?</a></li>
            <li><a class="dropdown-item" href="#">History</a></li>
            <li><a class="dropdown-item" href="#">Processes</a></li>
            <li><a class="dropdown-item" href="#">Organization</a></li>
            <li><a class="dropdown-item" href="#">Carreer</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Department
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Infraestructure</a></li>
            <li><a class="dropdown-item" href="#">Departments</a></li>
            <li><a class="dropdown-item" href="#">Administration</a></li>
            <li><a class="dropdown-item" href="#">Communications</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Training
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Training</a></li>
            <li><a class="dropdown-item" href="#">Courses</a></li>
            <li><a class="dropdown-item" href="#">Publications</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Blog
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Blog</a></li>
            <li><a class="dropdown-item" href="#">News</a></li>
            <li><a class="dropdown-item" href="#">Events</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Workspace
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Gmail</a></li>
            <li><a class="dropdown-item" href="#">Jira</a></li>
            <li><a class="dropdown-item" href="#">Agil</a></li>
          </ul>
        </li>
        <li  class="nav-item dropdown bi bi-bell-fill">
        <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle pt-1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://www.pngall.com/wp-content/uploads/11/Youtube-Bell-Icon-Notification-Yellow-Button-PNG-Clipart.png" alt="mdo" width="32" height="32" class="rounded-circle"/>
          </a>
          <ul class="dropdown-menu text-small" >
            <li><a class="dropdown-item" href="#">Notification 1</a></li>
            <li><a class="dropdown-item" href="#">Notification 2</a></li>
            <li><a class="dropdown-item" href="#">Notification 3</a></li>
            <li><hr/></li>
            <li><a class="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
);

export default Navigation;