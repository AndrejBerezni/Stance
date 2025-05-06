import Image from 'next/image';
interface StarProps {
  filled: 'full' | 'half' | 'empty';
}
export default function Star({ filled }: StarProps) {
  return (
    <Image
      src={
        filled === 'full'
          ? '/icons/star-full.svg'
          : filled === 'half'
            ? '/icons/star-half.svg'
            : '/icons/star-empty.svg'
      }
      width={20}
      height={20}
      alt={`${filled} star`}
    />
  );
}
