import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import HomePage from '../components/HomePage';
import Footer from '../components/Footer';
import Meta from '../components/Meta';

const Home: NextPage = () => {
  return (
    <div className="px-8 bg-gray-100 dark:bg-gray-900">
      <Meta title="Threadify" />
      <main>
        <HomePage />
      </main>
    </div>
  );
};

export default Home;
