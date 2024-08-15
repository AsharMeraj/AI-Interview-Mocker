// pages/index.tsx or pages/index.js
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    redirect: {
      destination: '/dashboard',
      permanent: false, // Use true if you want a 308 permanent redirect
    },
  };
};

export default function Home() {
  return null;
}
