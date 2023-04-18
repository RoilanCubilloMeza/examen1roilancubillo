/* eslint-disable @next/next/no-img-element */
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  function clickOnTheButton(nameOfSection: string) {
    const section = document.getElementById(nameOfSection);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
 
  return (
    
    <>
      <header className="p-3 mb-5 border-bottom d-flex  text-center  bg-dark">
        <div className="container ">
          <div className="d-flex flex-wrap align-align-align-items-lg-start">
            <ul className="nav col-12 col-lg me-lg-auto mb-2 justify-center">
              <a className="nav-link px-2 link-dark m-2" href="#">
                START
              </a>

              <button  onClick={() => clickOnTheButton("Personal-presentation")} 
              className="btn btn-primary m-2" >
                Personal presentation
              </button>
              <button   onClick={() => clickOnTheButton("carouselControls")}
              className="btn btn-primary  m-2" >
                Projects
              </button>
              <button  onClick={() => clickOnTheButton("personal-information")}
              className="btn btn-primary  m-2" >
                Contact
              </button>
              <button  onClick={() => clickOnTheButton("socialN")}
              className="btn btn-primary  m-2" >
                Social networks
                </button>
            </ul>
            <img
              src="https://scontent.fsyq5-1.fna.fbcdn.net/v/t1.6435-9/172449677_4001849896545954_3215521864059612083_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=BSUl4OU4_BgAX9U56Pr&_nc_ht=scontent.fsyq5-1.fna&oh=00_AfBDla7ax-5ZXx77eDTU5-zic4XJHOAbMGt9NbyHSQBHyQ&oe=64656810"
              alt="hacer"
              width="40"
              height="40"
              className=" rounded-circle text-end"
            />
          </div>
        </div>
      </header>

      <main className=" text-center ">
        <div id="Personal-presentation" className="container-Personal-presentation flex-wrap align-align-align-items-lg-start">
          <div className="p-3 mb-5 border-bottom d-flex">
            <p className="text-personal-presentation text-center  ">
              Greetings. My name is Roilan Andrei Cubillo Meza. I was born on
              February 19, 1997, in the city of Quepos. Since I was a child, I
              have been very interested in the world of computers, but
              especially in hardware. Since 2019, I have been studying in the
              field of information systems engineering, which has helped me to
              understand various topics and types of programming, as well as
              programming languages such as C++, Java fx, Oracle databases,
              Assembler, and other tools.
            </p>
          </div>
          <a
            className=" btn-personal-presentations btn-primary btn-lg  p-1 mb-5
             "
            href="https://www.linkedin.com/in/roilan-cubillo-717983253/"
          >
            My Profile on LinkedIn
          </a>
        </div>

        <p  id="personal-information " className="text-personal-information  p-3 mb-0">
          More Information Press the following button
        </p>

        <div className=" p-1 mb-5 border-bottom text-center ">
          <div className="">
            <a
              className="btn-personal-information btn-primary btn-lg text-center"
              href="https://notionforms.io/forms/exam"
            >
              More Information
            </a>
          </div>
        </div>

        <div id="carouselControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://www.servnet.mx/hs-fs/hubfs/imagenes%20art%20sept/02%C2%BFQue%CC%81%20es%20el%20co%CC%81digo%20html_.png?width=900&name=02%C2%BFQue%CC%81%20es%20el%20co%CC%81digo%20html_.png" alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://www.servnet.mx/hs-fs/hubfs/imagenes%20art%20sept/04%20Para%20que%CC%81%20sirven%20los%20co%CC%81digos%20HTML.png?width=900&name=04%20Para%20que%CC%81%20sirven%20los%20co%CC%81digos%20HTML.png" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://www.servnet.mx/hs-fs/hubfs/imagenes%20art%20sept/05%20Codigo%20HTML%2c%20CSS%20y%20Javascript.png?width=900&name=05%20Codigo%20HTML%2c%20CSS%20y%20Javascript.png" alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
<div >

<div>
<div  id="socialN" className=" social text-center">
        <h5 className=" p-5 text-center text-2xl">Links</h5>

        <ul className="list-unstyled mb-5 text-center">
          <li>
            <a href="https://www.facebook.com/Roilan.CubilloMeza/" className="text-blue-700 ">Facebook</a>
          </li>
          <li>
            <a href="https://www.instagram.com/roilan_cubillo/" className="text-blue-700">Instagram</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/roilan-cubillo-717983253/" className="text-blue-700">linkedIn</a>
          </li>
          <li>
            <a href="https://github.com/RoilanCubilloMeza" className="text-blue-700">GitHub</a>
          </li>
        </ul>
      </div>




</div>



</div>

        <div>
          <a href=""></a>
          <p className="float-end ">
            <a href="#"> boton inicio</a>
          </p>
        </div>
       

      </main>
    </>
  );
}
