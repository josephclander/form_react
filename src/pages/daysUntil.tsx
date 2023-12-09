import './App.css';

type DaysUntilProps = {
  fullName: string;
  daysUntil: string;
};

export const DaysUntil = ({ fullName, daysUntil }: DaysUntilProps) => {
  return (
    <h1>
      Your birthday will be in {daysUntil} days, {fullName}.
    </h1>
  );
};
