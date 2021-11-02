import { FunctionComponent } from 'react';
import { Category } from '../../types/Category';

export const NavItem: FunctionComponent<{
  value: Category | 'all';
  handlerFilterCategory: Function;
  active: string;
}> = ({ value, handlerFilterCategory, active }) => {
  let className =
    'capitalize transition duration-500 cursor-pointer border-b-4 hover:border-green-800 hover:text-green-700';
  if (active === value)
    className += ' text-green-700 border-b-4 border-green-800';

  return (
    <li className={className} onClick={() => handlerFilterCategory(value)}>
      {value}
    </li>
  );
};

const ProjectsNavbar: FunctionComponent<{
  handlerFilterCategory: Function;
  active: string;
}> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem value="all" {...props} />
      <NavItem value="react" {...props} />
    </div>
  );
};

export default ProjectsNavbar;
