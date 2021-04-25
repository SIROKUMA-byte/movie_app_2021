import React from "react";

function Food({ reName, poto }) {
  return (
    <div>
      <h2>I love {reName}</h2>
      <img src={poto} />
    </div>
  );
}

const foodILike = [
  {
    roname : "Cola",
    image : "https://lh3.googleusercontent.com/proxy/cAk4bOuk0V_6fzH02dpjgMy3LO7z9llQG0Dn65J2zvcairmBR3cH9RFYA09U5IIJBb_JU_PoCFq-pQKexdxOvYGmWBTfye30c6ewWrms"
  },
  {
    roname : "Kimbap",
    image : "https://t1.daumcdn.net/cfile/tistory/993E523359F94BCD13"
  },
  {
    roname : "Daegu",
    image : "https://pds.joins.com/news/component/htmlphoto_mmdata/202007/16/08de36da-fbff-492d-8806-211610773085.jpg"
  },
  {
    roname : "University",
    image : "https://pds.joins.com/news/component/htmlphoto_mmdata/202101/27/da8c4b51-0973-4970-819b-0c24bfb7d155.jpg"
  },
];

function App() {
  return (
    <div>
      <h1>Hello!!!!!!!!!!</h1>
      {
        foodILike.map(dish => <Food reName={dish.roname} poto={dish.image} />)
      }
    </div>
  );
}

export default App;
