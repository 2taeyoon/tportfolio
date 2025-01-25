import React from 'react';
import { GetServerSideProps, /*InferGetServerSidePropsType*/ } from 'next';
import { useRouter } from 'next/router';

// 타입 정의 (props에 전달되는 데이터 타입)
type Props = {
  title: string;
  content: string;
};

// 동적 경로 컴포넌트
const DPContent: React.FC<Props> = ({ title, content }) => {
  const router = useRouter();

  // URL에서 동적 매개변수 확인
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Dynamic Page: {title}</h1>
      <p>{content}</p>
    </div>
  );
};

// getServerSideProps로 데이터 가져오기
export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const { title } = context.params as { title: string };

  // 서버에서 동적으로 데이터를 생성하거나 가져오기
  const content = `동적으로 데이터 > 는 타이틀 이름 "${title}".`;

  return {
    props: {
      title,
      content,
    },
  };
};

export default DPContent;
