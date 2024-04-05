import { MenuItem, SectionHeader } from '.';

const HomeMenu = () => {
  return (
    <section className="mt-14 ">
      <div className="text-center">
        <SectionHeader subHeader="Check out" mainHeader="Menu" />
      </div>
      <div className="grid grid-cols-3 gap-4 mt-8">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  );
};

export default HomeMenu;
