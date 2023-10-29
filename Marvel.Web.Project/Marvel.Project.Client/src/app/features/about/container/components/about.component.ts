import { Component } from '@angular/core';

@Component({
  selector: 'app-about-component',
  template: `
    <div class="container pb-20">
      <h1 class="flex justify-center text-3xl font-bold py-4">About Marvel</h1>
      <p class="para">
        Marvel is a media and entertainment company that specializes in
        superhero fiction. It is one of the two largest comic book publishers in
        the world, along with DC Comics. Marvel is owned by The Walt Disney
        Company, and its characters have been featured in a wide range of media,
        including comic books, films, television series, video games, and toys.
      </p>
      <p class="para">
        Marvel was founded in 1939 by Martin Goodman as Timely Comics. The
        company began publishing superhero comics in the 1940s, and some of its
        most iconic characters, such as Captain America, Iron Man, and Thor,
        were created during this time. In the 1960s, Marvel experienced a period
        of creative revival known as the Marvel Age of Comics. Led by
        writer-editor Stan Lee and artists Jack Kirby and Steve Ditko, Marvel
        introduced a new generation of superheroes who were more relatable and
        human than their predecessors.
      </p>
      <p class="para">
        Marvel's characters have become some of the most popular and enduring in
        popular culture. In recent years, the company has achieved unprecedented
        success with its Marvel Cinematic Universe (MCU), a series of
        interconnected films that have grossed over $25 billion worldwide. The
        MCU has introduced millions of new fans to Marvel's characters and
        stories, and it has helped to make Marvel one of the most successful
        entertainment companies in the world.
      </p>
      <p class="para">
        Today, Marvel is a global brand that reaches fans of all ages through
        its diverse range of media. The company's characters and stories
        continue to inspire and entertain people around the world.
      </p>
      <h1>
        <b>Marvel's mission:</b> To bring the world together through stories.
      </h1>

      <h1 class="text-2xl pt-4 font-bold">Marvel's values:</h1>

      <ul class="p-4">
        <li class="lists">
          <span class="list-header"> Creativity:</span>
          <span class="list-text"
            >We believe in the power of creativity to inspire and
            entertain.</span
          >
        </li>
        <li class="lists">
          <span class="list-header"> Inclusion: </span>
          <span class="list-text"
            >We believe that everyone deserves to see themselves represented in
            our stories.</span
          >
        </li>
        <li class="lists">
          <span class="list-header"> Diversity:</span>
          <span class="list-text"
            >We celebrate the diversity of our fans and our characters.</span
          >
        </li>
        <li class="lists">
          <span class="list-header">Community:</span>
          <span class="list-text"
            >We believe that the Marvel community is stronger together.</span
          >
        </li>
      </ul>

      <h1 class="text-2xl font-bold">Marvel's vision:</h1>
      <p class="pl-4">
        To be the world's leading creator and provider of superhero
        entertainment.
      </p>
    </div>
  `,
  styles: [
    `
      @tailwind base;
      @tailwind components;
      @tailwind utilities;
      @layer base {
        .para {
          @apply p-4;
        }
        .lists {
          @apply flex flex-col;
        }
        .list-header {
          @apply font-bold p-1;
        }
        .list-text {
          @apply pl-8;
        }
      }
    `,
  ],
})
export class AboutComponent {}
