import Description from "../components/Description";

type Props = {};

const Home = ({}: Props) => {
  return (
    <div className="w-screen h-full text-white grid grid-cols-2">
      <div className="flex flex-col h-full justify-center mx-auto">
        <div>
          <div className="mx-auto">
            <h1 className="text-[100px] leading-none w-fit">Zied</h1>
            <h1 className="text-[100px] leading-none w-fit">Mabrouk</h1>
          </div>
          <h2 className="text-xl text-secondary">Software Engineer</h2>
        </div>
        <div className="flex justify-around">
          <Description number="02" label="Years of experience" />
          <Description number="03" label="Years of free lance" />
        </div>
      </div>
      <div className="pt-44">
        <img
          src="public/avatar.png"
          alt="avatar"
          className="w-80 h-80 rounded-full border-secondary border bg-primary-light bg-opacity-50 mx-auto -scale-x-100"
        />
      </div>
    </div>
  );
};

export default Home;
