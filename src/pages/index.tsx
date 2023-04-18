import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const toggleCarousel = (action: string) => {
    const { Carousel } = require("bootstrap");
    const carousel = new Carousel("#myCarousel");
    if (action === "next") {
      carousel.next();
    } else {
      carousel.prev();
    }
  };
  return (
    <>
      <header className="p-3 mb-5 border-bottom d-flex " >
        <div className="container">
          <div className="d-flex flex-wrap align-align-align-items-lg-start">
          
          <ul
          className="nav col-12 col-lg me-lg-auto mb-2 justify-center">

            <a  className="nav-link px-2 link-dark"  href="#">
          START
        </a>

        <a  className="nav-link px-2 link-dark"  href="#">
          Personal presentation
        </a>
        <a  className="nav-link px-2 link-dark"  href="#">
          Projects
        </a>
        <a  className="nav-link px-2 link-dark" href="#">
          Contact
        </a>
        <a className="nav-link px-2 link-dark" href="# ">
          Social networks
        </a> 

        </ul>
        <img src="https://scontent.fsyq5-1.fna.fbcdn.net/v/t1.6435-9/172449677_4001849896545954_3215521864059612083_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=BSUl4OU4_BgAX9U56Pr&_nc_ht=scontent.fsyq5-1.fna&oh=00_AfBDla7ax-5ZXx77eDTU5-zic4XJHOAbMGt9NbyHSQBHyQ&oe=64656810" alt="hacer" width="32" height="32" className=" rounded-circle text-end" />


        </div>
        </div>
        

      </header>
      <main>
<div className="container-Personal-presentation">
  <p className="text-personal-presentation">

  </p>

</div>

      
      <div>
        <button
          className="btn btn-primary"
          onClick={() => toggleCarousel("prev")}
        >
          Prev
        </button>
        <button
          className="btn btn-danger ms-3"
          onClick={() => toggleCarousel("next")}
        >
          Next
        </button>
      </div>
      <div>
        <div
          id="myCarousel"
          className="carousel slide"
          data-bs-touch="false"
          data-bs-interval="false"
          style={{ maxWidth: "50%", height: "80vh", overflow: "hidden" }}
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://picsum.photos/id/237/700/700" />
            </div>
            <div className="carousel-item">
              <img src="https://picsum.photos/id/123/700/700" />
            </div>
            <div className="carousel-item">
              <img src="https://picsum.photos/id/234/700/700" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <a href=""></a>
        <p className="float-end">
          <a href="#">
            
          </a>
        </p>
      </div>
      </main>
    </>
  );
}
