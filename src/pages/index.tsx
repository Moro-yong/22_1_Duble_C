import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Nav from 'components/nav/Nav';
import axios from 'axios';
import BrandCard from 'components/store/brandCard/index';
import Slider from 'components/slider/index';
import styles from 'styles/Home.module.scss';

const Home: NextPage = () => {
  const NEXT_URL = '/brand/';
  const [categoriesData, setCategoriesData] = useState([]);
  useEffect(() => {
    axios('https://api2.ncnc.app/con-category1s').then(res =>
      setCategoriesData(res.data.conCategory1s),
    );
  }, []);

  return (
    <div className={styles.main}>
      <Head>
        <title>니콘내콘</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Slider />
      <BrandCard data={categoriesData} NEXT_URL={NEXT_URL} />
      <div className={styles.eventTag}>
        <h3 className={styles.titleTag}>놓치지 마세요.</h3>
        <h2 className={styles.event}>오늘의 땡처리콘!</h2>
      </div>
    </div>
  );
};

export default Home;
