import { Metadata } from "next";
import styles from '@/app/page.module.sass';
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";

export const metadata: Metadata = {
  title: "Главная | Владимир Фадеев",
  description: "Generated by create next app",
};

export default function Home() {
  return (
    <main className="page">
      <h1 className="page-title fade-in fi-1">Владимир Фадеев</h1>
      <p className="text fade-in fi-2">Я фулстак разраб</p>
      <section className="fade-in fi-3">
        <h2>Мои личные проекты</h2>
        <div className={styles.container}>
          <div className={styles.project}>
            <div className={`title ${styles.title}`}>Bitrefill</div>
            <div className={`tile ${styles.description}`}>
              <div className="text">Led design & development of Bitrefills design system as well as focusing on core flows like discovery, search and navigation.</div>
              <Link href='#' className={`link ${styles.link}`}>Узнать больше</Link>
              <div className={styles.img}>
                <Link href='#'>
                  <Image
                    src="/avatar.png"
                    width={512}
                    height={512}
                    alt="Фотография автора"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="fade-in fi-4">
        <h2>Избранные посты</h2>
      </section>
    </main >
  );
}
