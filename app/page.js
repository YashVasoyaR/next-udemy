import Image from "next/image";
const Home = async () => {
  return (
    <>
      <Image
        className="w-full"
        src="https://blog.logrocket.com/wp-content/uploads/2021/09/next-js-automatic-image-optimization-next-image.png"
        height={200}
        width={200}
      />
    </>
  );
};

export default Home;
