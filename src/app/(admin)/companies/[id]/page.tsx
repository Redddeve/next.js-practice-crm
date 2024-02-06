import Header from '@/app/components/header';
import React from 'react';

export interface PageProps {
  params: { id: string };
}

export default function Companies({ params }: PageProps) {
  return (
    <>
      <Header>Companies ({params.id})</Header>
    </>
  );
}
