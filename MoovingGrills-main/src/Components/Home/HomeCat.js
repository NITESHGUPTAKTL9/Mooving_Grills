import { useHistory } from "react-router-dom";
import { HomeCard } from "./HomeCard";

import "./HomeCat.css";

const Home2 = () => {
  const history = useHistory();

  return (
    <div className="home2-body">
      <h1> ORDER BY CATEGORIES</h1>
      <div className="home2-top">
        <div >
        <a href="/menubar#pizza"> <HomeCard
            src="https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Pizza-from-Scratch_EXPS_FT20_8621_F_0505_1_home.jpg"
            name="PIZZA"
            qt="13 PRODUCTS"
          />
          </a>
        </div>
        <div >
        <a href="/menubar#pasta"> 
          <HomeCard
            src="https://ministryofcurry.com/wp-content/uploads/2018/07/Pasta-with-Creamy-Tomato-Sauce-1.jpg"
            name="PASTA"
            qt="13 PRODUCTS"
          />
          </a>
        </div>
        <div >
        <a href="/menubar#desserts"> 
          <HomeCard
            src="https://www.brit.co/media-library/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yMzMwNTIwMC9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTY4MTAyMTI4N30.NcYolQhAwDvJafgWYQUUFR2VaFzjVFgJXdRDFBgstzE/image.jpg?width=600&quality=85&coordinates=0%2C87%2C0%2C87&height=600"
            name="DESSERTS"
            qt="12 PRODUCTS"
          />
          </a>
        </div>
      </div>
      <div className="home2-bottom">
        <div >
        <a href="/menubar#appetizers"> 
          <HomeCard
            src="https://images.themodernproper.com/billowy-turkey/production/posts/2019/bacon-wrapped-scallops-8.jpg?w=1200&auto=compress%2Cformat&fit=crop&fp-x=0.5&fp-y=0.5&dm=1607706707&s=61fa562b897673eed6793db85e8feb3e"
            name="APPETIZERS"
            qt="93 PRODUCTS"
          />
          </a>
        </div>
        <div onClick={() => history.push("/riser")}>
        <a href="/menubar#drinks"> 
          <HomeCard
            src="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZHJpbmtzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
            name="DRINKS/BEVERAGES"
            qt="1 PRODUCT"
          />
          </a>
        </div>
        <div onClick={() => history.push("/single-seater")}>
        <a href="/menubar#extra"> 
          <HomeCard
            src="https://st4.depositphotos.com/2802753/21293/i/600/depositphotos_212939596-stock-photo-homemade-pizza-photo-collage.jpg"
            name="EXTRA TOPPINGS"
            qt="56 PRODUCTS"
          />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home2;
