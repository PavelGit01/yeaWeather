type Props = {
  src: string;
  alt: string;
};

const Img = ({ src, alt }: Props) => {
  return <img src={src} alt={alt} />;
};

export default Img;
