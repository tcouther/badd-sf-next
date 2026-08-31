import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lifeline SF',
  description: "Lifeline SF provides a confidential way for families and loved ones to connect with BADD for advocacy, support, crisis navigation, and recovery resources."
};

export default function Page() {
  return (
    <iframe
      src="/lifeline/index.html"
      style={{
        width: '100%',
        height: '100vh',
        border: 'none'
      }}
    />
  );
}
