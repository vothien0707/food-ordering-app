interface IProps {
  text: string;
}

const Footer = ({ text }: IProps) => {
  return <footer className="p-8 mt-16 border-t-2 text-lg  text-gray-500">&copy; {text}</footer>;
};

export default Footer;
