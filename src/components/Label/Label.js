import style from './Label.module.css';

export const Label = ({ color, children }) => {
  return (
    <label className={`${style.label} ${style[color]}`} htmlFor="">
        {children}:
    </label>
  );
};
