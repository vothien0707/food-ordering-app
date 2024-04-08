interface IProps {
  subHeader: string;
  mainHeader: string;
}

const SectionHeader = ({ subHeader, mainHeader }: IProps) => {
  return (
    <div>
      <h3 className="leading-4 font-semibold text-gray-500 uppercase  ">{subHeader}</h3>
      <h2 className="text-4xl font-bold text-primary">{mainHeader}</h2>
    </div>
  );
};

export default SectionHeader;
