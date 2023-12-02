import react from "react";
import Link from "next/link"
import Moviecard from "@/app/component/moviecard"
import styles from "@/app/style/common.module.css"


const Movie = async ()=>{

  await new Promise(resolve => setTimeout(resolve, 2000));


  const url = process.env.RAPID_KEY;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '0ba031de83msh9255fd1b95e0239p13c795jsncd994eaeb6a9',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };

  const res = await fetch(url,options);
  const data = await res.json();
  const main_data = data.titles
  console.log(data)

  return (
    <>
     <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1>Series & Movie</h1>
                    <div className={styles.card_section}>
                        {
                            main_data.map((curElem) => {
                                return <Moviecard key={curElem.id} {...curElem} />
                            })
                        }
                    </div>
                </div>
            </section>
        
  
   </>
  );
};

export default Movie;