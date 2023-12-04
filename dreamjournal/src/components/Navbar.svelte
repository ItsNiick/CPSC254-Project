<script>
    // You can add JavaScript code here if needed
  </script>
  
  <style>
    .navbar {
      display: flex;
      background-color: #AFECFF;
      color: white;
      padding: 1rem;
      justify-content: space-between;
      align-items: center;
    }


  .logo img {
    height:70px; /* or your preferred size */
    width: 200px; /* or your preferred size */
    margin-right: 10px;
  }
  
    .nav-links {
      display: flex;
      gap: 1rem;
      width: auto;
    }
  
    a {
      color: white;
      text-decoration: none;
    }

    .nav-links a {
    font-size: 1.2rem; /* Adjust the size as you prefer */
    color: white;
    text-decoration: none;
    margin: 0 15px; /* Adjust space between the links */
    font-family: Arial, sans-serif; /* Choose the font-family you prefer */
  }

  .nav-links a:hover {
    text-decoration: underline; /* Adds underline on hover */
  }
</style>
  
  <div class="navbar">
    <div class="logo">
      <a href="/">
        <img src="/logo.svg" alt="Slumber Scribbles Logo"> 
      </a>
    </div>
    <div class="nav-links">
      <a href="/">Home</a>
      <a href="/about">About Us</a>
      <a href="/contact">Contact</a>
    </div>
  </div>
  