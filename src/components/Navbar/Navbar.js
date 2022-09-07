import React, { useState } from 'react';

import './navbar.css';

export default function Navbar(props) {
  return (
    <>
      <div class="bold wrapperNV5">
        <nav>
          <input type="checkbox" id="show-search" />
          <input type="checkbox" id="show-menu" />
          <label for="show-menu" class="menu-icon">
            <i class="fas fa-bars"></i>
          </label>
          <div class="contentNavbar">
            <div class="logoNV5 semibold">
              <a href="#">RTI</a>
            </div>
            <ul class="links">
              <li>
                <a class="semibold" href="#">
                  Inicio
                </a>
              </li>
              <li>
                <a class="semibold" href="#">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#" class="semibold desktop-link">
                  Idiomas
                </a>
                <input type="checkbox" id="show-features" />
                <label for="show-features">Idiomas</label>
                <ul>
                  <li>
                    <a class="medium" href="/es">
                      Spanish
                    </a>
                  </li>
                  <li>
                    <a class="medium" href="/en">
                      English
                    </a>
                  </li>
                  <li>
                    <a class="medium" href="/fr">
                      French
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" class="desktop-link semibold">
                  Servicios
                </a>
                <input type="checkbox" id="show-services" />
                <label for="show-services">Servicios</label>
                <ul>
                  <li>
                    <a class="medium" href="#">
                      Desarrollo Web
                    </a>
                  </li>
                  <li>
                    <a class="medium" href="#">
                      Diseño Grafico
                    </a>
                  </li>
                  <li>
                    <a class="medium" href="#">
                      Data Science
                    </a>
                  </li>
                  <li>
                    <a href="#" class="desktop-link semibold">
                      More Items
                    </a>
                    <input type="checkbox" id="show-items" />
                    <label for="show-items">More Items</label>
                    <ul>
                      <li>
                        <a href="#">Sub Menu 1</a>
                      </li>
                      <li>
                        <a href="#">Sub Menu 2</a>
                      </li>
                      <li>
                        <a href="#">Sub Menu 3</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a class="semibold" href="/blog">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
