import React, { useState } from 'react';
import './JoinUs.scss';

function JoinUs() {
  return (
    <>
      <div class="wrapper">
        <header>
          <h1>Let's grow together</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, porro. Doloribus vitae non dolores modi
            dolorum commodi perspiciatis dicta nostrum minus esse, totam officia, quibusdam amet quas tempora?
            Voluptatibus, esse.
          </p>

        </header>

        <section class="columns">
          <div class="column">
            <h2>Work with Us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ratione architecto necessitatibus cum
              praesentium dolor totam voluptatibus recusandae?
            </p>
            <div class="button-container">
            <div class='button -regular center'>Read More</div></div>

          </div>

          <div class="column">
            <h2>2nd Content Area</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ratione architecto necessitatibus cum
              praesentium dolor totam voluptatibus recusandae? Illo quod nemo ratione itaque dolores laudantium error
              vero laborum blanditiis nostrum.
            </p>
            <div class="button-container">
            <div class='button -regular center'>Read More</div></div>
          </div>

          <div class="column">
            <h2>3rd Content Area</h2>
            <p>
              Illo quod nemo ratione itaque dolores laudantium error vero laborum blanditiis nostrum. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Sequi ratione architecto cum praesentium voluptatibus recusandae?
            </p>
            <div class="button-container">
            <div class='button -regular center'>Read More</div></div>
          </div>
        </section>
      </div>
    </>
  );
}
export default JoinUs;
