<script setup lang="ts">
import { onMounted } from 'vue';

  const planetWidthFake = '7rem'
  const planetWidthReal = '30rem'

  function clickPlanet (id: string) {
    var image = document.getElementById(id);
    if (!image) return
    console.error('1234 width',image.style.width, typeof image.style.width )
    console.error('1234 width const',planetWidthReal, typeof planetWidthReal )
    if (image.style.width == planetWidthReal) {
      image.style.width = planetWidthFake
    }
    else {
      image.style.width = planetWidthReal
    }
  }
  onMounted(() => {
    //create random movements
    // const elements = document.querySelectorAll('.planet')
    // elements.forEach((element) => {
    //   element.style.setProperty('--random-x', `calc(${getRandomValue()}px - ${getRandomValue()}px)`);
    //   element.style.setProperty('--random-y', `calc(${getRandomValue()}px - ${getRandomValue()}px)`);
    // });
    // function getRandomValue() {
    //   return Math.floor(Math.random() * 5) - 5;
    // }
  })
</script>

<template>
  <div class="app-container">

    <video id="video" src="@/assets/stars2.mp4" autoplay muted loop controls>
    </video>

    <div class="sun">
      <img src="@/assets/sun.png" alt="" srcset="">
    </div>

    <div class="galaxy celestial">
      <img src="@/assets/galaxy.png" alt="">
    </div>

    <div class="asteroid celestial">
      <img class="" src="@/assets/asteroid.png" alt="" srcset="">
    </div>

    <div class="nebula celestial">
      <img class="" src="@/assets/nebula.png" alt="" srcset="">
    </div>

    <!-- <div class="planet-container">
      <div class="planet">
        <img id="mercury" class="flip-image" src="@/assets/mercury.png" alt="" srcset="">
        <div class="planet-info">
          <h3 class="planet-name">
            Mercury
          </h3>
          <p>
            pwogkpwkgpwegkpweogkwpeokgpweogkpwoeg
          </p>
          <button @click="clickPlanet('mercury')">Real size</button>
        </div>
        <div class="planet-label"><p>Mercury</p></div>
      </div>

      <div class="planet">
        <img id="venus" src="@/assets/venus.png" alt="" srcset="">
        <div class="planet-info">
          <h3 class="planet-name">
            Venus
          </h3>
          <p>
            pwogkpwkgpwegkpweogkwpeokgpweogkpwoeg
          </p>
          <button @click="clickPlanet('venus')">Real size</button>
        </div>
        <div class="planet-label"><p>Venus</p></div>
      </div>

      <div class="planet">
        <img id="earth" src="@/assets/earth.png" alt="" srcset="">
        <div class="planet-info">
          <h3 class="planet-name">
            Earth
          </h3>
          <p>
            pwogkpwkgpwegkpweogkwpeokgpweogkpwoeg
          </p>
          <button @click="clickPlanet('earth')">Real size</button>
        </div>   
        <div class="planet-label"><p>earth</p></div>
      </div>

      <div class="planet moon">
        <img id="moon" src="@/assets/moon.png" alt="" srcset="">
        <div class="planet-info">
          <h3 class="planet-name">
            Moon
          </h3>
          <p>
            pwogkpwkgpwegkpweogkwpeokgpweogkpwoeg
          </p>
          <button @click="clickPlanet('moon')">Real size</button>
        </div>
      </div>

      <div class="planet">
        <img id="mars" class="flip-image" src="@/assets/mars.png" alt="" srcset="">
        <div class="planet-label"><p>mars</p></div>
        <div class="planet-info">
          <h3 class="planet-name">
            Mars
          </h3>
          <p>
            pwogkpwkgpwegkpweogkwpeokgpweogkpwoeg
          </p>
          <button @click="clickPlanet('mars')">Real size</button>
        </div>
      </div>

      <div class="planet">
        <img id="jupiter" src="@/assets/jupiter.png" alt="" srcset="">
        <div class="planet-info">
          <h3 class="planet-name">
            Jupiter
          </h3>
          <p>
            pwogkpwkgpwegkpweogkwpeokgpweogkpwoeg
          </p>
          <button @click="clickPlanet('jupiter')">Real size</button>
        </div>
        <div class="planet-label"><p>Jupiter</p></div>
      </div>

      <div class="planet">
        <img id="saturn" src="@/assets/saturn.png" alt="" srcset="">
        <div class="planet-info">
          <h3 class="planet-name">
            Saturn
          </h3>
          <p>
            pwogkpwkgpwegkpweogkwpeokgpweogkpwoeg
          </p>
          <button @click="clickPlanet('saturn')">Real size</button>
        </div>
        <div class="planet-label"><p>saturn</p></div>
      </div>

      <div class="planet">
        <img id="uranus" class="rotate45" src="@/assets/uranus.png" alt="" srcset="">
        <div class="planet-info">
          <h3 class="planet-name">
            Uranus
          </h3>
          <p>
            pwogkpwkgpwegkpweogkwpeokgpweogkpwoeg
          </p>
          <button @click="clickPlanet('uranus')">Real size</button>
        </div>
        <div class="planet-label"><p>uranus</p></div>
      </div>

      <div class="planet">
        <img id="neptune" src="@/assets/neptune.png" alt="" srcset="">
        <div class="planet-info">
          <h3 class="planet-name">
            Neptune
          </h3>
          <p>
            pwogkpwkgpwegkpweogkwpeokgpweogkpwoeg
          </p>
          <button @click="clickPlanet('neptune')">Real size</button>
        </div>
        <div class="planet-label"><p>neptune</p></div>
      </div>

    </div> -->

    <div class="planet-container-2">
      <div class="orbit-container">
        
        <div class="orbit orbit1">
            <div class="planet">
              <img id="mercury" class="flip-image" src="@/assets/mercury.png" alt="" srcset="">
              <div class="planet-label"><p>mercury</p></div>
              <div class="planet-info">
                <h3 class="planet-name">
                  mercury
                </h3>
                <p>
                  pwogkpwkgpwegkpweogkwpeokgpweogkpwoeg
                </p>
                <button @click="clickPlanet('mercury')">Real size</button>
              </div>
            </div>
        </div>

        <div class="orbit orbit2">
            <div class="planet">
              <img id="venus" class="flip-image" src="@/assets/venus.png" alt="" srcset="">
              <div class="planet-label"><p>venus</p></div>
              <div class="planet-info">
                <h3 class="planet-name">
                  venus
                </h3>
                <p>
                  pwogkpwkgpwegkpweogkwpeokgpweogkpwoeg
                </p>
                <button @click="clickPlanet('venus')">Real size</button>
              </div>
            </div>
        </div>
        
        <div class="orbit orbit3">
          <div class="planet">
            <img id="earth" class="flip-image" src="@/assets/earth.png" alt="" srcset="">
            <div class="planet-label"><p>earth</p></div>
            <div class="planet-info">
              <h3 class="planet-name">
                earth
              </h3>
              <p>
                pwogkpwkgpwegkpweogkwpeokgpweogkpwoeg
              </p>
              <button @click="clickPlanet('earth')">Real size</button>
            </div>
          </div>
        </div>
        <div class="orbit orbit4">
          <div class="planet">
            <img id="mars" class="flip-image" src="@/assets/mars.png" alt="" srcset="">
            <div class="planet-label"><p>mars</p></div>
            <div class="planet-info">
              <h3 class="planet-name">
                Mars
              </h3>
              <p>
                pwogkpwkgpwegkpweogkwpeokgpweogkpwoeg
              </p>
              <button @click="clickPlanet('mars')">Real size</button>
            </div>
          </div>
        </div>
       
      </div>
    </div>

    <!-- <div class="background-image">
      <img src="@/assets/universe.jpg" alt="" srcset="">
    </div> -->

  </div>
</template>

<style scoped lang="scss">
/*
@keyframes subtleMovement {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(var(--random-x), var(--random-y));
  }
}
*/
@keyframes orbit1 {
  from {
      transform: rotate(0deg) 
      translateX(calc(var(--orbit-width)*0.5)) rotate(0deg);
  }

  to {
      transform: rotate(-360deg) 
      translateX(calc(var(--orbit-width)*0.5)) rotate(360deg);
  }
}
@keyframes orbit2 {
  from {
    transform: rotate(0deg) 
    translateX(calc(var(--orbit-width)*0.75)) rotate(0deg);
  }

  to {
      transform: rotate(-360deg) 
      translateX(calc(var(--orbit-width)*0.75)) rotate(360deg);
  }
}
@keyframes orbit3 {
  from {
    transform: rotate(0deg) 
        translateX(calc(var(--orbit-width)*1)) rotate(0deg);
  }

  to {
      transform: rotate(-360deg) 
      translateX(calc(var(--orbit-width)*1)) rotate(360deg);
  }
}
@keyframes orbit4 {
  from {
    transform: rotate(0deg) 
        translateX(calc(var(--orbit-width)*1.25)) rotate(0deg);
  }

  to {
      transform: rotate(-360deg) 
      translateX(calc(var(--orbit-width)*1.25)) rotate(360deg);
  }
}
@keyframes orbit5 {
  from {
      transform: rotate(0deg) 
          translateX(10rem) rotate(0deg);
  }

  to {
      transform: rotate(-360deg) 
          translateX(10rem) rotate(360deg);
  }
}

.planet-container-2 {
  --orbit-width:20rem;
  position: relative;
  z-index:1;
  margin:auto;
  .orbit-container {
    z-index:1;
    position: relative;
    .orbit {
      position: absolute;
      border:1px solid white;
      border-radius: 100%;
      transform: translate(-50%, -50%);
      #mars {
        transform: translateY(0.8rem);
      }
      .planet-container-inner{
        width:100%;        
        height:100%;  
        .planet {
          width:fit-content !important;
          height:fit-content !important;
          border:solid !important;
          position: relative;
        width:100%;
        height:100% !important;
        border-radius:50%;
        display:flex;
        flex-direction: column;
        transition: all 0.5s;
        height:fit-content;
        z-index:99 !important;
        &:hover {
          filter:brightness(120%);
          transform:translateY(-10px);
          .planet-info {
            opacity: 1;
            pointer-events: all;
          }
        }
        .planet-info {
          transition: all 0.8s;
          opacity:0;
          position: absolute;
          bottom:100%;
          background: rgba(0,0,0,0.75);
          padding:1rem;
          width:15rem;
          display: flex;
          flex-direction: column;
          pointer-events: none;
          gap:var(--planet-gap);
          .planet-name {
            color:aquamarine;
            text-align: left;
          }
          p {
            word-wrap: break-word;
          }
        }
        .planet-label {
          height:0;
          margin-top:1rem;
          font-size: 0.85rem;
          text-transform: capitalize;
          letter-spacing: var(--letter-spacing-medium);
        }
        .flip-image {
          transform: scaleX(-1);
        }
        .rotate45 {
          transform: rotate(-45deg);
        }
        #saturn {
          width:10vw;
          margin-top:2vw;
        }
        img {
          animation: brightnessAnimation 2s infinite;
          transition: 0.9s all;
          border-radius: 100%;
          margin:auto;
          display:block;
          width:3rem;
        }
        }      
      }
      .planet { 
        position: relative;
        width:100%;
        height:100% !important;
        border-radius:50%;
        display:flex;
        flex-direction: column;
        transition: all 0.5s;
        height:fit-content;
        z-index:99 !important;
        &:hover {
          filter:brightness(120%);
          transform:translateY(-10px);
          .planet-info {
            opacity: 1;
            pointer-events: all;
          }
        }
        .planet-info {
          transition: all 0.8s;
          opacity:0;
          position: absolute;
          bottom:100%;
          background: rgba(0,0,0,0.75);
          padding:1rem;
          width:15rem;
          display: flex;
          flex-direction: column;
          pointer-events: none;
          gap:var(--planet-gap);
          .planet-name {
            color:aquamarine;
            text-align: left;
          }
          p {
            word-wrap: break-word;
          }
        }
        .planet-label {
          height:0;
          margin-top:1rem;
          font-size: 0.85rem;
          text-transform: capitalize;
          letter-spacing: var(--letter-spacing-medium);
        }
        .flip-image {
          transform: scaleX(-1);
        }
        .rotate45 {
          transform: rotate(-45deg);
        }
        #saturn {
          width:10vw;
          margin-top:2vw;
        }
        img {
          animation: brightnessAnimation 2s infinite;
          transition: 0.9s all;
          border-radius: 100%;
          margin:auto;
          display:block;
          width:3rem;
        }
      }
    }
    .orbit1 {
      width:var(--orbit-width);
      height:var(--orbit-width);
      z-index:-1;
      .planet {
        animation: orbit1 20s linear infinite;
      }
    }
    .orbit2 {
      width: calc(var(--orbit-width) * 1.5);
      height: calc(var(--orbit-width) * 1.5);
      z-index:-2;
      .planet {
        animation: orbit2 20s linear infinite;
      }
    }
    .orbit3 {
      width: calc(var(--orbit-width) * 2);
      height: calc(var(--orbit-width) * 2);
      z-index:-3;
      .planet {
        animation: orbit3 20s linear infinite;
      }
    }
    .orbit4 {
      width: calc(var(--orbit-width) * 2.5);
      height: calc(var(--orbit-width) * 2.5);
      z-index:-4;
      .planet {
        animation: orbit4 20s linear infinite;
      }
    }
    .orbit5 {
      width:30rem;
      height:30rem;
      z-index:-5;
    }
  }
}

.celestial {
  position: absolute;
  width:15rem;
}
.nebula {
  bottom:-50%;
  right:25%;
  img {
    width:50rem;
    filter:brightness(60%);
    opacity: 0.9;
  }
}
.galaxy {
  top:12%;
  right:22%;
  z-index:1;
  animation: rotate 150s linear infinite;
  img {
    width:7rem;
    filter:brightness(90%);
  }
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
/*
.sun {
  z-index:0;
  width:100%;
  display:flex;
  position:absolute;
  transform: translate(-50%, -50%);
  animation: brightnessAnimation 4s infinite;
  img {
    width:60rem;
    border-radius: 100%;
    filter:brightness(70%);
    opacity: 0.95;
  }
}
*/
.sun {
  position: fixed;
  top: 50.5%;
  left: 50%;
  transform: translate(-50%, -50%);
  img {
    width: 15rem;
    height: 15rem;
  }
}
.asteroid {
  z-index:0;
  position: absolute;
  animation: move 150s;
  top: 0;
  right: 0;
  @keyframes move {
    from {
      transform: translate(0, 0);
    }
    to {
      transform: translate(-100vw, 60vh);
    }
  }
  img {
    width:3rem;
    opacity: 0.95;
    filter:brightness(87%);
  }
}
video {
  position: absolute;
  width: 100%;
  height: 100%;
  top:0;
  left:0;
  filter: brightness(120%);
  object-fit: cover;
}
.app-container {
  z-index:1;
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  align-self: center;
  overflow:hidden;
  .planet-container {
    --planet-gap:2rem;
    display:flex;
    gap:3rem;
    margin-top:40vh;
    .moon {
      position: absolute;
      display: inline;
      width:0rem !important;
      height:0rem !important;
      margin-left:calc(var(--planet-gap) * -1);
      top:-6.5rem;
      left:-2rem;
      img {
        width:2.8rem !important;
        position: absolute;
        display: inline
      }
    }
    .planet { 
      position: relative;
      z-index:99 !important;
      width:fit-content;
      display:flex;
      flex-direction: column;
      transition: all 0.5s;
      height:fit-content;
      /* animation: subtleMovement 5s linear infinite alternate; */
      &:hover {
        filter:brightness(120%);
        transform:translateY(-10px);
        .planet-info {
          opacity: 1;
          pointer-events: all;
        }
      }
      .planet-info {
        transition: all 0.8s;
        opacity:0;
        position: absolute;
        bottom:100%;
        background: rgba(0,0,0,0.75);
        padding:1rem;
        width:15rem;
        display: flex;
        flex-direction: column;
        pointer-events: none;
        gap:var(--planet-gap);
        .planet-name {
          color:aquamarine;
          text-align: left;
        }
        p {
          word-wrap: break-word;
        }
      }
      .planet-label {
        margin-bottom:0.1rem;
        font-size: 0.85rem;
        text-transform: capitalize;
        letter-spacing: var(--letter-spacing-medium);
      }
      .flip-image {
        transform: scaleX(-1);
      }
      .rotate45 {
        transform: rotate(-45deg);
      }
      #saturn {
        width:10vw;
        margin-top:2vw;
      }
      img {
        animation: brightnessAnimation 2s infinite;
        transition: 0.9s all;
        border-radius: 100%;
        margin:auto;
        display:block;
        width:8vw;
      }
    }
  }
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100% !important;
  height: 100% !important;
  object-fit: cover;
  z-index:-1;
  filter: brightness(70%);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index:-1;
    border-radius:0;
  }
}

@keyframes brightnessAnimation {
  0% {
    filter: brightness(99%);
  }
  50% {
    filter: brightness(107%);
  }
  100% {
    filter: brightness(99%);
  }
}

</style>
