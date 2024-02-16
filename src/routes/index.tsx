import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import NavBar from "../components/navBar/index";
import Home from  "~/components/Home";
import Register from "~/components/register";
import Chefs from "~/components/Chefs";
import Platos from "~/components/platos";
import TopChefs from "~/components/TopChefs";
import Restaurants from "~/components/restaurants";
import Footer from "~/components/footer";


export default component$(() => {
  return (
    <>
      <div>
        <NavBar/>
        <Home/>
        <Register/>
        <Chefs/>
        <Platos/>
        <TopChefs/>
        <Restaurants/>
        <Footer/>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Restaurant App",
  meta: [
    {
      name: "description",
      content: "Test Web",
    },
  ],
};
