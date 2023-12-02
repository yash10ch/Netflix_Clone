import styles from '@/app/style/common.module.css'
import Link from "next/link";
import heroStyles from "@/app/style/herosection.module.css"

const NotFound = () => {
    return (
        <section className={styles.container1}>
            <div className={styles.error_page}>
                <h1>404</h1>
                <h2>Not Found</h2>
                <p>Could not find requested resource</p>
                <Link href="/">
                    <button id={heroStyles.button1}>
                        Go to Home Page
                    </button>
                </Link>
            </div>
        </section>
    );
}

export default NotFound;