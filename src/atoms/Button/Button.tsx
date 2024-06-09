import style from "./Button.module.sass";

interface ButtonProps {
  label: string;
}
export default function Button({ label }: ButtonProps) {
  return (
    <>
      <button className={style.button}>{label}</button>
    </>
  );
}
