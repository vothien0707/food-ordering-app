import { FaPhoneAlt } from 'react-icons/fa';

import { Header, Hero, HomeMenu, SectionHeader, Footer } from '@/components/common';

const Home = () => {
  return (
    <>
      <Header />

      <Hero />

      <HomeMenu />

      <section className="text-center mt-12">
        <SectionHeader subHeader="Our story" mainHeader="About us" />
        <div className="flex flex-col gap-4 max-w-4xl mt-4 mx-auto text-gray-500">
          <p>
            Pizza is the world’s favourite food! Whether meaty, vegetarian or halal, find different
            pizzas in Vietnam. At Pizza and Go, we offer endless flavours with local flair! Pair
            your favourite slice and delicious toppings with melting premium cheese for the perfect
            pizza! For convenience, order delivery or takeaway from your nearest outlet! Don’t
            forget our promotions that can feed a single person up to big families!
          </p>
          <p>
            However, in the 1800s, pizza’s reputation took a turn for the better when King Umberto I
            and Queen Margherita came to visit Italy. Legend has it that Queen Margherita grew bored
            of her constant diet of French food and had requested to try a variety of pizzas. A
            baker named Raffaele Esposito of Da Pietro Pizzeria invented a pie with red tomato
            sauce, white mozzarella, and green basil which won the approval of the queen. It is
            known as the Margherita pizza today.
          </p>
          <p>
            Pizza then rose to global popularity in the late 1800s when Italians began migrating to
            America, bringing along their recipes and cuisines with them. Soon, pizzerias were
            blooming all over America, from New York to Chicago to New Jersey, each with its unique
            take. Thanks to this rich history, we’re able to enjoy a variety of pizzas in Vietnam
            now with American pizzas being a more popular choice.
          </p>
          <p>
            If we think about some good American pizzas in Vietnam, Pizza and Go comes to mind.
            We’ve been serving pizzas in Vietnam since 1997 so no matter what kind of pizza lover
            you are, we’ve got your cravings sorted! Over the years, we’ve added on more delicious
            combinations and even local pairing on our pizzas to suit everyone’s appetite.
          </p>
          <p>
            Our style of pizza is not too thick or thin; it gives you just the right bite.
            Moderately covered in sauce and cheese and topped with your toppings of choice, every
            bite is a sure delight. That’s why we’re the pizza professionals! Ready to dig in? Visit
            our website now to place your pizza order online or find out where to try the best pizza
            nearest to you.
          </p>
        </div>
      </section>

      <section className="text-center mt-12">
        <SectionHeader subHeader="Don't hesitate" mainHeader="Contact us" />
        <div className="flex justify-center mt-6">
          <a
            href="tel:+07123456789"
            className="flex justify-center items-center gap-3 max-w-[40%] px-10 py-4 mt-4 rounded-full bg-primary text-2xl text-white"
          >
            <FaPhoneAlt />
            +07 123 456 789
          </a>
        </div>
      </section>

      <Footer text="2024 All rights reserved" />
    </>
  );
};

export default Home;
