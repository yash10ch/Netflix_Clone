import styles from '@/app/style/common.module.css'
import heroStyles from "@/app/style/herosection.module.css"
import Image from "next/image";
import Link from "next/link";
const MovieCard = (curElem) => {

    const {id, type, title, synopsis} = curElem.jawSummary;

    return (
        <>
            <div className={styles.card}>
                <div className={styles.card_image}>
                    <Image src={curElem.jawSummary.backgroundImage.url} alt={title} width={500} height={200} />
                </div>
                <div className={styles.card_data}>
                    <h2>{title.substring(0,18)}</h2>
                    <p>
                        {`${synopsis.substring(0,66)} ...`}
                    </p>

                    <Link href={`/movie/${id}`}>
                        <button id={heroStyles.button1}>
                            Read More
                        </button>
                    </Link>
                </div>
            </div>

        </>
    );
};

export default MovieCard;