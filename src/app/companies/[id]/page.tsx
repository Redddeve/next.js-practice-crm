import Header from '@/app/components/header';
import React from 'react';

export interface PageProps {
  params: { id: string };
}

export default function Companies({ params }: PageProps) {
  console.log(params);
  return (
    <>
      <Header>Companies ({params.id})</Header>
    </>
  );
}
