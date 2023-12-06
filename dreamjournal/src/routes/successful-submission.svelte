<script>
    import { Link } from 'svelte-routing';
    import Navbar from "../components/Navbar.svelte";
    import Footer from "../components/Footer.svelte";
    import EntryButton from '../components/EntryButton.svelte';
  </script>
  
  <main>
    <Navbar />
    <h1>Congratulations!</h1>
    <p>Your dream has successfully been uploaded to the dreamspace.</p>
    <EntryButton>Submit another dream</EntryButton>
    <Footer />
  </main>
  
  <style>
    main {
      text-align: center;
      padding: 0%;
      max-width: 240px;
      margin: 0 auto;
    }
  
    h1 {
      color: #2D87A8;
      font-size: 2em;
      font-weight: 600;
    }
  
    @media (min-width: 640px) {
      main {
        max-width: none;
      }
    }
  </style>